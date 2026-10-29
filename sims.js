/* NCERT Physics Lab — interactive simulations */
(function(){
const TAU = Math.PI*2, D2R = Math.PI/180;
const clamp = (x,a,b)=>Math.max(a,Math.min(b,x));
const f3 = (x,s=3)=>{ if(!isFinite(x)) return '∞'; if(x===0) return '0'; const a=Math.abs(x); if(a>=1e5||a<1e-3){const e=Math.floor(Math.log10(a)); return (x/Math.pow(10,e)).toFixed(2)+'×10'+sup(e);} return String(Number(x.toPrecision(s))); };
const sup = n => String(n).split('').map(c=>'⁰¹²³⁴⁵⁶⁷⁸⁹'['0123456789'.indexOf(c)] || (c==='-'?'⁻':c)).join('');

function wlColor(nm){
  let r=0,g=0,b=0;
  if(nm>=380&&nm<440){r=-(nm-440)/60;b=1}else if(nm<490){g=(nm-440)/50;b=1}else if(nm<510){g=1;b=-(nm-510)/20}
  else if(nm<580){r=(nm-510)/70;g=1}else if(nm<645){r=1;g=-(nm-645)/65}else if(nm<=780){r=1}
  let f=1; if(nm<420) f=.3+.7*(nm-380)/40; else if(nm>700) f=.3+.7*(780-nm)/80;
  if(nm<380||nm>780) return null;
  const c=v=>Math.round(255*Math.pow(v*f,.8));
  return `rgb(${c(r)},${c(g)},${c(b)})`;
}
window.wlColor = wlColor;

/* ---------- drawing helpers ---------- */
function line(c,x1,y1,x2,y2){c.beginPath();c.moveTo(x1,y1);c.lineTo(x2,y2);c.stroke();}
function arrow(c,x1,y1,x2,y2,col,lw=2,label){
  const dx=x2-x1, dy=y2-y1, L=Math.hypot(dx,dy); if(L<2) return;
  c.strokeStyle=col;c.fillStyle=col;c.lineWidth=lw;line(c,x1,y1,x2,y2);
  const a=Math.atan2(dy,dx), h=Math.min(9,L*.45);
  c.beginPath();c.moveTo(x2,y2);c.lineTo(x2-h*Math.cos(a-.4),y2-h*Math.sin(a-.4));c.lineTo(x2-h*Math.cos(a+.4),y2-h*Math.sin(a+.4));c.closePath();c.fill();
  if(label){c.font='600 12px "JetBrains Mono",monospace';c.fillText(label,x2+6*Math.cos(a)+3,y2+6*Math.sin(a)+4);}
}
function txt(c,s,x,y,col,size=12,align='left',weight=500){c.fillStyle=col;c.font=`${weight} ${size}px "JetBrains Mono",ui-monospace,monospace`;c.textAlign=align;c.fillText(s,x,y);c.textAlign='left';}
function rrect(c,x,y,w,h,r){c.beginPath();c.roundRect?c.roundRect(x,y,w,h,r):c.rect(x,y,w,h);}
function axes(c,x,y,w,h,C,xl,yl){
  c.strokeStyle=C.grid;c.lineWidth=1;
  for(let i=1;i<5;i++){line(c,x+w*i/5,y,x+w*i/5,y+h);line(c,x,y+h*i/5,x+w,y+h*i/5);}
  c.strokeStyle=C.muted;c.lineWidth=1.2;line(c,x,y,x,y+h);line(c,x,y+h,x+w,y+h);
  if(xl) txt(c,xl,x+w,y+h+14,C.muted,11,'right');
  if(yl) txt(c,yl,x+4,y-6,C.muted,11);
}
function plot(c,pts,C,col,lw=2){ if(!pts.length) return; c.strokeStyle=col;c.lineWidth=lw;c.beginPath();pts.forEach((p,i)=>i?c.lineTo(p[0],p[1]):c.moveTo(p[0],p[1]));c.stroke(); }
function spring(c,x1,y,x2,coils,amp){
  c.beginPath();c.moveTo(x1,y);const L=x2-x1, lead=12, seg=(L-2*lead)/(coils*2);
  c.lineTo(x1+lead,y);for(let i=0;i<coils*2;i++){c.lineTo(x1+lead+seg*(i+.5),y+(i%2?amp:-amp));}
  c.lineTo(x2-lead,y);c.lineTo(x2,y);c.stroke();
}
function bar(c,x,y,w,h,frac,col,C,label,val){
  c.fillStyle=C.grid;rrect(c,x,y,w,h,3);c.fill();
  const fh=h*clamp(frac,0,1);c.fillStyle=col;rrect(c,x,y+h-fh,w,fh,3);c.fill();
  txt(c,label,x+w/2,y+h+14,C.muted,11,'center');
  if(val!==undefined) txt(c,val,x+w/2,y-6,C.fg,11,'center',600);
}

/* ---------- field-line tracer (shared by electric and magnetic sims) ---------- */
function fieldAt(src,x,y){let ex=0,ey=0;for(const s of src){const dx=x-s.x,dy=y-s.y,r2=dx*dx+dy*dy+1,r=Math.sqrt(r2);const k=s.q/(r2*r);ex+=k*dx;ey+=k*dy;}return [ex,ey];}
function traceLines(src,W,H,perUnit){
  const out=[];const pos=src.filter(s=>s.q>0), sgn = pos.length?1:-1, starts = pos.length?pos:src;
  const qmax=Math.max(...src.map(s=>Math.abs(s.q)),1e-9);
  for(const s of starts){
    const n=Math.max(4,Math.round(perUnit*Math.abs(s.q)/qmax));
    for(let i=0;i<n;i++){
      const a=TAU*(i+.5)/n;let x=s.x+10*Math.cos(a),y=s.y+10*Math.sin(a);const pts=[[x,y]];
      for(let k=0;k<900;k++){
        const [ex,ey]=fieldAt(src,x,y);const m=Math.hypot(ex,ey);if(m<1e-12)break;
        x+=sgn*4*ex/m;y+=sgn*4*ey/m;pts.push([x,y]);
        if(x<-40||y<-40||x>W+40||y>H+40)break;
        if(src.some(o=>o!==s&&Math.hypot(x-o.x,y-o.y)<9))break;
      }
      out.push(pts);
    }
  }
  return out;
}
function drawLines(c,lines,col){
  c.strokeStyle=col;c.lineWidth=1.3;
  for(const L of lines){ plot(c,L,null,col,1.3);
    const m=Math.floor(L.length/2); if(m>2){const [x1,y1]=L[m-1],[x2,y2]=L[m+1];const a=Math.atan2(y2-y1,x2-x1);
      c.fillStyle=col;c.beginPath();c.moveTo(x2,y2);c.lineTo(x2-7*Math.cos(a-.45),y2-7*Math.sin(a-.45));c.lineTo(x2-7*Math.cos(a+.45),y2-7*Math.sin(a+.45));c.fill();}
  }
}

const S = window.SIMS = {};

/* ============ 11-1 Vernier calliper ============ */
S.vernier = {
  title:'Vernier calliper', hint:'Drag the jaw or use the slider. Find the vernier line that lines up exactly with a main-scale line.',
  aspect:.62, controls:[{k:'L',label:'Object length',min:2,max:30,step:.1,v:12.4,unit:'mm'},{k:'z',label:'Zero error',min:-.3,max:.3,step:.1,v:0,unit:'mm'}],
  drag(x,y,W,H,set){ const s=(W-40)/36; set('L',clamp(Math.round(((x-20)/s)*10)/10,2,30)); },
  draw(c,W,H,p,st,C){
    const s=(W-40)/36, ox=20, y0=H*.22, L=p.L+p.z;
    // main scale body
    c.fillStyle=C.panel;rrect(c,ox-10,y0-40,W-20,40,4);c.fill();c.strokeStyle=C.line;c.stroke();
    c.strokeStyle=C.fg;c.lineWidth=1;
    for(let i=0;i<=36;i++){const x=ox+i*s, h=i%10===0?24:i%5===0?16:10;line(c,x,y0,x,y0-h);if(i%10===0)txt(c,String(i/10),x,y0-28,C.fg,12,'center',600);}
    txt(c,'cm',W-30,y0-28,C.muted,11);
    // fixed jaw
    c.fillStyle=C.muted;c.fillRect(ox-10,y0,10,H*.42);
    // object
    const objW=p.L*s;c.fillStyle=C.accent2;c.globalAlpha=.85;rrect(c,ox,y0+H*.18,objW,H*.22,3);c.fill();c.globalAlpha=1;
    txt(c,'object',ox+objW/2,y0+H*.31,C.bg,12,'center',700);
    // vernier plate
    const vx=ox+L*s;c.fillStyle=C.panel2;rrect(c,vx-8,y0,9*s+16,34,4);c.fill();c.strokeStyle=C.accent;c.lineWidth=1.5;c.stroke();
    const ci=((Math.round(L*10)%10)+10)%10;
    for(let i=0;i<=10;i++){const x=vx+i*.9*s;c.strokeStyle=i===ci?C.accent:C.fg;c.lineWidth=i===ci?2.4:1;line(c,x,y0,x,y0+(i%5===0?20:13));if(i%5===0)txt(c,String(i),x,y0+31,C.fg,10,'center');}
    // coinciding main line highlight
    const mx=vx+ci*.9*s;c.strokeStyle=C.accent;c.lineWidth=2.4;line(c,mx,y0,mx,y0-12);
    c.fillStyle=C.accent;c.beginPath();c.arc(mx,y0,4,0,TAU);c.fill();
    // moving jaw
    c.fillStyle=C.accent;c.fillRect(vx,y0+34,8,H*.42-34);
    // zoom inset
    const zw=Math.min(W-40,420), zx=W-20-zw, zy=H*.7, zh=H*.26, zs=zw/11;
    c.save();rrect(c,zx,zy,zw,zh,6);c.fillStyle=C.panel;c.fill();c.strokeStyle=C.line;c.lineWidth=1;c.stroke();c.clip();
    const z0=zy+zh*.55;
    for(let mm=Math.ceil(L-1);mm<=L+10;mm++){const x=zx+(mm-(L-1))*zs;c.strokeStyle=C.fg;c.lineWidth=1;line(c,x,z0,x,z0-(mm%5===0?24:15));if(mm%5===0)txt(c,String(mm),x,z0-28,C.muted,9,'center');}
    for(let i=0;i<=10;i++){const x=zx+(1+i*.9)*zs;c.strokeStyle=i===ci?C.accent:C.muted;c.lineWidth=i===ci?2.6:1.2;line(c,x,z0+1,x,z0+(i%5===0?20:14));}
    c.restore();txt(c,'zoom ×'+(zs/s).toFixed(0)+' — main scale above, vernier below',zx+8,zy+14,C.muted,10);
    st.ci=ci;
  },
  read(p,st){const L=p.L+p.z, msr=Math.floor(L+1e-9), vsc=st.ci??0, obs=msr+vsc*.1;
    return [['Main scale reading',msr+' mm'],['Coinciding VSD',String(vsc)],['Least count','0.1 mm'],['Observed reading',obs.toFixed(1)+' mm'],['Zero error',(p.z>=0?'+':'')+p.z.toFixed(1)+' mm'],['Corrected length',(obs-p.z).toFixed(1)+' mm']];}
};

/* ============ 11-2 Kinematics ============ */
S.kinematics = {
  title:'Motion graphs live', hint:'Set initial velocity and acceleration. Watch the slope of x–t equal v, and the slope of v–t equal a.',
  aspect:.66, controls:[{k:'u',label:'Initial velocity u',min:-10,max:15,step:.5,v:-4,unit:'m/s'},{k:'a',label:'Acceleration a',min:-4,max:4,step:.25,v:2,unit:'m/s²'}],
  draw(c,W,H,p,st,C,t){
    const T=6, tt=(t%(T+1.2)); const tc=Math.min(tt,T);
    const X=τ=>p.u*τ+.5*p.a*τ*τ, V=τ=>p.u+p.a*τ;
    let xmin=0,xmax=0,vmin=0,vmax=0; for(let i=0;i<=60;i++){const τ=T*i/60;xmin=Math.min(xmin,X(τ));xmax=Math.max(xmax,X(τ));vmin=Math.min(vmin,V(τ));vmax=Math.max(vmax,V(τ));}
    if(xmax-xmin<1){xmax+=.5;xmin-=.5;} if(vmax-vmin<1){vmax+=.5;vmin-=.5;}
    // track
    const ty=H*.16, tx0=30, tx1=W-30, mapX=x=>tx0+(x-xmin)/(xmax-xmin)*(tx1-tx0);
    c.strokeStyle=C.line;c.lineWidth=2;line(c,tx0,ty+16,tx1,ty+16);
    const x0=mapX(0);c.strokeStyle=C.muted;c.setLineDash([3,3]);line(c,x0,ty-18,x0,ty+24);c.setLineDash([]);txt(c,'x = 0',x0,ty-22,C.muted,10,'center');
    const cx=mapX(X(tc));c.fillStyle=C.accent;rrect(c,cx-18,ty-4,36,16,5);c.fill();c.fillStyle=C.fg;c.beginPath();c.arc(cx-10,ty+14,4,0,TAU);c.arc(cx+10,ty+14,4,0,TAU);c.fill();
    const v=V(tc);arrow(c,cx,ty-10,cx+v*6,ty-10,C.accent2,2,'v');
    // graphs
    const gy=H*.36, gh=H*.5, narrow=W<520, gw=narrow?W-60:(W-90)/2;
    const g1x=40, g2x=narrow?40:40+gw+40, g2y=narrow?gy:gy, gh2=narrow?gh/2-20:gh;
    const graph=(gx,gy,gw,gh,fn,lo,hi,lab,col)=>{
      axes(c,gx,gy,gw,gh,C,'t (s)',lab);
      const my=val=>gy+gh-(val-lo)/(hi-lo)*gh;
      if(lo<0&&hi>0){c.strokeStyle=C.muted;c.setLineDash([2,3]);line(c,gx,my(0),gx+gw,my(0));c.setLineDash([]);}
      const pts=[];for(let i=0;i<=80;i++){const τ=T*i/80;pts.push([gx+gw*τ/T,my(fn(τ))]);}c.globalAlpha=.3;plot(c,pts,C,col,2);c.globalAlpha=1;
      const pts2=pts.filter(q=>q[0]<=gx+gw*tc/T+.1);plot(c,pts2,C,col,2.4);
      c.fillStyle=col;c.beginPath();c.arc(gx+gw*tc/T,my(fn(tc)),5,0,TAU);c.fill();
    };
    if(narrow){graph(g1x,gy,gw,gh2,X,xmin,xmax,'x (m)',C.accent);graph(g1x,gy+gh2+34,gw,gh2,V,vmin,vmax,'v (m/s)',C.accent2);}
    else{graph(g1x,gy,gw,gh,X,xmin,xmax,'x (m)',C.accent);graph(g2x,gy,gw,gh,V,vmin,vmax,'v (m/s)',C.accent2);}
    st.t=tc;st.x=X(tc);st.v=v;
  },
  read(p,st){const turn=p.a!==0?-p.u/p.a:NaN;return [['Time',(st.t||0).toFixed(2)+' s'],['Position x',(st.x||0).toFixed(2)+' m'],['Velocity v',(st.v||0).toFixed(2)+' m/s'],['Acceleration',p.a+' m/s²'],['Turns around at',turn>0&&turn<6?turn.toFixed(2)+' s':'—']];}
};

/* ============ 11-3 Projectile ============ */
S.projectile = {
  title:'Projectile launcher', hint:'The faint dashed path is the complementary angle (90° − θ). Same range, different height.',
  aspect:.58, controls:[{k:'u',label:'Launch speed u',min:5,max:40,step:1,v:20,unit:'m/s'},{k:'th',label:'Angle θ',min:5,max:85,step:1,v:35,unit:'°'},{k:'g',label:'Planet',type:'select',opts:[[9.8,'Earth (9.8)'],[1.62,'Moon (1.62)'],[3.71,'Mars (3.71)'],[24.8,'Jupiter (24.8)']],v:9.8}],
  draw(c,W,H,p,st,C,t){
    const g=+p.g, th=p.th*D2R, u=p.u, R=u*u*Math.sin(2*th)/g, Hm=u*u*Math.sin(th)**2/(2*g), T=2*u*Math.sin(th)/g;
    const maxR=u*u/g, maxH=u*u/(2*g)*Math.sin(85*D2R)**2;
    const s=Math.min((W-70)/maxR,(H-60)/maxH), ox=36, oy=H-28;
    c.strokeStyle=C.line;c.lineWidth=2;line(c,10,oy,W-10,oy);
    for(let m=0;m<=maxR;m+=niceStep(maxR)){const x=ox+m*s;c.strokeStyle=C.grid;line(c,x,oy,x,oy+5);txt(c,String(Math.round(m)),x,oy+17,C.muted,10,'center');}
    const path=(ang,dash,col,a)=>{const Tf=2*u*Math.sin(ang)/g;const pts=[];for(let i=0;i<=60;i++){const τ=Tf*i/60;pts.push([ox+u*Math.cos(ang)*τ*s,oy-(u*Math.sin(ang)*τ-.5*g*τ*τ)*s]);}c.setLineDash(dash);c.globalAlpha=a;plot(c,pts,C,col,1.6);c.setLineDash([]);c.globalAlpha=1;};
    path((90-p.th)*D2R,[4,5],C.muted,.7); path(th,[],C.accent,.45);
    const per=2.4, tt=t%(per+.8), τ=Math.min(tt/per,1)*T;
    const x=u*Math.cos(th)*τ, y=u*Math.sin(th)*τ-.5*g*τ*τ, px=ox+x*s, py=oy-y*s;
    const trail=[];for(let i=0;i<=40;i++){const q=τ*i/40;trail.push([ox+u*Math.cos(th)*q*s,oy-(u*Math.sin(th)*q-.5*g*q*q)*s]);}plot(c,trail,C,C.accent,2.6);
    const vx=u*Math.cos(th), vy=u*Math.sin(th)-g*τ, k=1.6;
    arrow(c,px,py,px+vx*k,py,C.accent2,2,'vₓ');arrow(c,px,py,px,py-vy*k,C.good,2,'vᵧ');
    c.fillStyle=C.fg;c.beginPath();c.arc(px,py,6,0,TAU);c.fill();
    // apex & range marks
    c.strokeStyle=C.muted;c.setLineDash([2,3]);line(c,ox+R/2*s,oy,ox+R/2*s,oy-Hm*s);c.setLineDash([]);
    txt(c,'H = '+Hm.toFixed(1)+' m',ox+R/2*s+6,oy-Hm*s-6,C.fg,11);
    txt(c,'R = '+R.toFixed(1)+' m',ox+R*s,oy-8,C.fg,11,'center',600);
    // cannon
    c.save();c.translate(ox,oy);c.rotate(-th);c.fillStyle=C.fg;rrect(c,-4,-5,28,10,3);c.fill();c.restore();
    st.R=R;st.H=Hm;st.T=T;st.vy=vy;st.vx=vx;
  },
  read(p,st){return [['Range R',st.R?.toFixed(2)+' m'],['Max height H',st.H?.toFixed(2)+' m'],['Time of flight',st.T?.toFixed(2)+' s'],['vₓ (constant)',st.vx?.toFixed(2)+' m/s'],['vᵧ now',st.vy?.toFixed(2)+' m/s'],['Range at 90°−θ',st.R?.toFixed(2)+' m (same)']];}
};
function niceStep(r){const raw=r/6, e=Math.pow(10,Math.floor(Math.log10(raw))), n=raw/e;return (n<1.5?1:n<3.5?2:n<7.5?5:10)*e;}

/* ============ 11-4 Incline with friction ============ */
S.incline = {
  title:'Block on a rough incline', hint:'Raise the angle until the block slips. At that point tanθ equals μ, the angle of repose.',
  aspect:.62, controls:[{k:'th',label:'Incline angle θ',min:0,max:60,step:1,v:25,unit:'°'},{k:'mu',label:'Friction μ',min:0,max:1,step:.05,v:.35},{k:'m',label:'Mass m',min:1,max:20,step:1,v:5,unit:'kg'}],
  reset:true, init(){return {s:0,v:0,wait:0};},
  draw(c,W,H,p,st,C,t,dt){
    const g=9.8, th=Math.max(p.th,.5)*D2R, yb=H-36, x0=40;
    const Lb=Math.min(W-90,(H-110)/Math.tan(th)), top=[x0,yb-Lb*Math.tan(th)], bot=[x0+Lb,yb], S=Math.hypot(Lb,Lb*Math.tan(th));
    c.fillStyle=C.panel;c.beginPath();c.moveTo(top[0],top[1]);c.lineTo(bot[0],bot[1]);c.lineTo(x0,yb);c.closePath();c.fill();c.strokeStyle=C.line;c.lineWidth=2;c.stroke();
    c.strokeStyle=C.muted;c.lineWidth=1;c.beginPath();c.arc(bot[0],bot[1],34,Math.PI,Math.PI+th,false);c.stroke();txt(c,'θ',bot[0]-48,bot[1]-6,C.fg,13);
    const slides=Math.tan(th)>p.mu, a=slides?g*(Math.sin(th)-p.mu*Math.cos(th)):0, pxm=S/4;
    if(slides){ if(st.wait>0){st.wait-=dt;if(st.wait<=0){st.s=0;st.v=0;}} else {st.v+=a*dt;st.s+=st.v*dt*pxm; if(st.s>S-60){st.s=S-60;st.wait=.8;}} } else {st.s=S*.35;st.v=0;}
    const d=[Math.cos(th),Math.sin(th)], n=[Math.sin(th),-Math.cos(th)], bs=36;
    const cx=top[0]+d[0]*(st.s+30)+n[0]*bs/2, cy=top[1]+d[1]*(st.s+30)+n[1]*bs/2;
    c.save();c.translate(cx,cy);c.rotate(th);c.fillStyle=C.accent;rrect(c,-bs/2,-bs/2,bs,bs,4);c.fill();txt(c,p.m+'kg',0,4,C.bg,11,'center',700);c.restore();
    const sc=70/(20*g)*1.6+1.2, mg=p.m*g, N=mg*Math.cos(th), f=slides?p.mu*N:mg*Math.sin(th), k=Math.min(2.2,90/mg);
    arrow(c,cx,cy,cx,cy+mg*k,C.fg,2,'mg');arrow(c,cx,cy,cx+n[0]*N*k,cy+n[1]*N*k,C.good,2,'N');
    if(f>0.01) arrow(c,cx-d[0]*bs/2,cy-d[1]*bs/2,cx-d[0]*(bs/2+f*k),cy-d[1]*(bs/2+f*k),C.bad,2,'f');
    st.res={N,f,a,slides,mg};
  },
  read(p,st){const r=st.res||{};return [['Status',r.slides?'Sliding':'At rest'],['mg sinθ',(r.mg*Math.sin(p.th*D2R)).toFixed(1)+' N'],['Normal force N',r.N?.toFixed(1)+' N'],['Friction f',r.f?.toFixed(1)+' N'],['Acceleration',r.a?.toFixed(2)+' m/s²'],['Angle of repose',(Math.atan(p.mu)/D2R).toFixed(1)+'°']];}
};

/* ============ 11-5 Bouncing ball energy ============ */
S.bounce = {
  title:'Energy bar chart', hint:'With restitution 1 the total stays fixed. Lower it and watch mechanical energy leak away as heat and sound on each bounce.',
  aspect:.6, controls:[{k:'h',label:'Drop height h',min:1,max:10,step:.5,v:6,unit:'m'},{k:'e',label:'Restitution e',min:.3,max:1,step:.05,v:.8},{k:'m',label:'Mass m',min:.5,max:5,step:.5,v:1,unit:'kg'}],
  reset:true, init(p){return {y:p.h,v:0,lost:0,rest:0};},
  draw(c,W,H,p,st,C,t,dt){
    const g=9.8, steps=4; for(let i=0;i<steps;i++){const h=dt/steps; if(st.rest>0){st.rest-=h;if(st.rest<=0){st.y=p.h;st.v=0;st.lost=0;}continue;}
      st.v-=g*h;st.y+=st.v*h; if(st.y<=0){st.y=0; const ke=.5*p.m*st.v*st.v; st.v=-st.v*p.e; st.lost+=ke-.5*p.m*st.v*st.v; if(Math.abs(st.v)<.6||p.e===1&&false){st.rest=1;}}}
    const top=24, bot=H-30, s=(bot-top)/10.5, bx=W*.22;
    c.strokeStyle=C.line;c.lineWidth=2;line(c,20,bot,W*.45,bot);
    for(let m=0;m<=10;m+=2){const y=bot-m*s;txt(c,m+' m',20,y+4,C.muted,10);c.strokeStyle=C.grid;line(c,52,y,W*.45,y);}
    c.strokeStyle=C.muted;c.setLineDash([3,4]);line(c,bx-30,bot-p.h*s,bx+30,bot-p.h*s);c.setLineDash([]);
    const r=10+p.m*2, by=bot-st.y*s-r;c.fillStyle=C.accent;c.beginPath();c.arc(bx,by,r,0,TAU);c.fill();
    const E0=p.m*9.8*p.h, PE=p.m*9.8*st.y, KE=.5*p.m*st.v*st.v, L=Math.max(0,E0-PE-KE);
    const bx0=W*.55, bw=Math.min(54,(W*.4)/4), gap=bw*.45, bh=H-90;
    [['PE',PE,C.accent],['KE',KE,C.accent2],['Heat/sound',L,C.bad],['Total ME',PE+KE,C.good]].forEach((b,i)=>bar(c,bx0+i*(bw+gap),40,bw,bh,b[1]/E0,b[2],C,b[0],b[1].toFixed(0)+' J'));
    c.strokeStyle=C.fg;c.setLineDash([4,3]);line(c,bx0-6,40,bx0+4*(bw+gap),40);c.setLineDash([]);txt(c,'mgh = '+E0.toFixed(0)+' J',bx0,30,C.fg,11);
    st.PE=PE;st.KE=KE;st.L=L;st.E0=E0;
  },
  read(p,st){return [['Height',(st.y||0).toFixed(2)+' m'],['Speed',Math.abs(st.v||0).toFixed(2)+' m/s'],['PE = mgh',(st.PE||0).toFixed(1)+' J'],['KE = ½mv²',(st.KE||0).toFixed(1)+' J'],['Lost to heat',(st.L||0).toFixed(1)+' J'],['Bounce height ratio','e² = '+(p.e*p.e).toFixed(2)]];}
};

/* ============ 11-6 Rolling race ============ */
const BODIES=[['Ring',1,'ring'],['Hollow sphere',2/3,'hs'],['Disc',.5,'disc'],['Solid sphere',.4,'ss']];
S.rolling = {
  title:'Rolling race', hint:'All four have the same mass and radius. The ones with mass near the rim spend more energy spinning and roll down slower.',
  aspect:.6, controls:[{k:'th',label:'Incline angle θ',min:5,max:45,step:1,v:15,unit:'°'},{k:'go',label:'Restart race',type:'button'}],
  reset:true, init(){return {t:0,wait:0};}, onButton(k,st){st.t=0;st.wait=0;},
  draw(c,W,H,p,st,C,t,dt){
    const L=4, g=9.8, th=p.th*D2R;
    st.t+=dt; const tmax=Math.sqrt(2*L/(g*Math.sin(th)/2));
    if(st.t>tmax+1.6){st.t=0;}
    const x0=70, x1=W-40, laneH=(H-70)/4, R=Math.min(16,laneH*.32);
    // incline icon
    c.strokeStyle=C.muted;c.lineWidth=1.2;const ix=W-90,iy=26;line(c,ix,iy,ix+60,iy);line(c,ix,iy,ix+60,iy-60*Math.tan(th)*.3);txt(c,p.th+'°',ix+14,iy-3,C.muted,10);
    txt(c,'distance along slope →',x0,22,C.muted,10);
    c.strokeStyle=C.accent2;c.setLineDash([5,4]);line(c,x1,30,x1,H-14);c.setLineDash([]);txt(c,'4 m',x1,H-2,C.accent2,10,'center');
    st.times=[];
    BODIES.forEach((b,i)=>{
      const y=40+laneH*i+laneH/2, a=g*Math.sin(th)/(1+b[1]), s=Math.min(.5*a*st.t*st.t,L), tf=Math.sqrt(2*L/a), x=x0+s/L*(x1-x0-R);
      st.times.push(tf);
      c.strokeStyle=C.line;c.lineWidth=1;line(c,x0,y+R,x1,y+R);
      txt(c,b[0],8,y+4,C.fg,11);
      c.save();c.translate(x,y);c.rotate((x-x0)/R);
      if(b[2]==='ring'){c.strokeStyle=C.accent;c.lineWidth=4;c.beginPath();c.arc(0,0,R-2,0,TAU);c.stroke();}
      else if(b[2]==='hs'){c.strokeStyle=C.good;c.lineWidth=2.5;c.beginPath();c.arc(0,0,R-1,0,TAU);c.stroke();c.globalAlpha=.25;c.fillStyle=C.good;c.fill();c.globalAlpha=1;}
      else if(b[2]==='disc'){c.fillStyle=C.accent2;c.beginPath();c.arc(0,0,R,0,TAU);c.fill();}
      else {c.fillStyle=C.bad;c.beginPath();c.arc(0,0,R,0,TAU);c.fill();}
      c.strokeStyle=C.fg;c.lineWidth=1.5;line(c,0,0,R*.9,0);c.restore();
      if(s>=L) txt(c,tf.toFixed(2)+' s',x1-R*2-6,y-R-2,C.fg,10,'right',600);
    });
  },
  read(p,st){const t=st.times||[];return BODIES.map((b,i)=>[b[0]+' (k²/R² = '+(b[1]===2/3?'⅔':b[1])+')',t[i]?t[i].toFixed(2)+' s':'']);}
};

/* ============ 11-7 Orbits ============ */
S.orbit = {
  title:'Orbit launcher', hint:'v/v꜀ = 1 gives a circle. Between 1 and √2 (≈ 1.41) the orbit stretches into an ellipse. At √2 the satellite escapes.',
  aspect:.66, controls:[{k:'k',label:'Launch speed v / v_circular',min:.6,max:1.55,step:.01,v:1.18},{k:'tr',label:'Show swept areas',type:'toggle',v:true}],
  reset:true, init(p){return {x:1,y:0,vx:0,vy:p.k,trail:[],crash:false,esc:false,sw:[],swt:0};},
  draw(c,W,H,p,st,C,t,dt){
    const k=p.k, ra=k<Math.SQRT2?k*k/(2-k*k):Infinity, rp=Math.min(1,ra);
    const view=Math.min(isFinite(ra)?Math.max(ra,1):6,6.5), sc=Math.min(W,H)/2/(view*1.12+.1);
    const cx=W/2+(isFinite(ra)&&ra>1.5?(ra-1)/2*sc*.9:0), cy=H/2;
    if(!st.crash&&!st.esc){
      const sub=60, h=dt*1.2/sub*Math.max(1,Math.min(6,isFinite(ra)?Math.pow((1+ra)/2,1.5):3));
      for(let i=0;i<sub;i++){const r=Math.hypot(st.x,st.y),r3=r*r*r;st.vx-=st.x/r3*h;st.vy-=st.y/r3*h;st.x+=st.vx*h;st.y+=st.vy*h;
        if(r<.32){st.crash=true;break;} if(r>9){st.esc=true;break;}}
      st.trail.push([st.x,st.y]); if(st.trail.length>2400) st.trail.shift();
      st.swt+=dt; if(st.swt>.5){st.swt=0;st.sw.push([st.x,st.y]); if(st.sw.length>40) st.sw.shift();}
    }
    // stars
    c.fillStyle=C.muted;for(let i=0;i<40;i++){const sx=(i*97)%W, sy=(i*57+i*i)%H;c.fillRect(sx,sy,1.2,1.2);}
    if(p.tr&&st.sw.length>1){for(let i=1;i<st.sw.length;i+=2){c.fillStyle=C.accent;c.globalAlpha=.13;c.beginPath();c.moveTo(cx,cy);c.lineTo(cx+st.sw[i-1][0]*sc,cy-st.sw[i-1][1]*sc);c.lineTo(cx+st.sw[i][0]*sc,cy-st.sw[i][1]*sc);c.fill();}c.globalAlpha=1;}
    // circular reference
    c.strokeStyle=C.grid;c.setLineDash([3,4]);c.beginPath();c.arc(cx,cy,sc,0,TAU);c.stroke();c.setLineDash([]);
    plot(c,st.trail.map(q=>[cx+q[0]*sc,cy-q[1]*sc]),C,C.accent,1.8);
    const g=c.createRadialGradient(cx-8,cy-8,4,cx,cy,.32*sc);g.addColorStop(0,C.good);g.addColorStop(1,C.accentDeep);c.fillStyle=g;c.beginPath();c.arc(cx,cy,.32*sc,0,TAU);c.fill();
    const sx=cx+st.x*sc, sy=cy-st.y*sc;arrow(c,sx,sy,sx+st.vx*40,sy-st.vy*40,C.accent2,2,'v');
    c.fillStyle=C.fg;c.beginPath();c.arc(sx,sy,5,0,TAU);c.fill();
    if(st.crash) txt(c,'Too slow: the satellite hit the planet',W/2,30,C.bad,13,'center',700);
    if(st.esc) txt(c,'Escaped: it will never return',W/2,30,C.accent2,13,'center',700);
  },
  read(p,st){const k=p.k;let type=Math.abs(k-1)<.015?'Circle':k<1?'Ellipse (launch at apogee)':k<Math.SQRT2-.005?'Ellipse (launch at perigee)':'Escape (parabola/hyperbola)';
    if(k<.72) type='Crashes (perigee inside planet)';
    const a=1/(2-k*k);return [['Orbit type',type],['v / v_escape',(k/Math.SQRT2).toFixed(3)],['Total energy','E '+(k<Math.SQRT2?'< 0 (bound)':'≥ 0 (unbound)')],['Period vs circular',k<Math.SQRT2?(Math.pow(a,1.5)).toFixed(2)+' ×':'—'],['Kepler II','equal areas per ½ s']];}
};

/* ============ 11-8 Stress–strain ============ */
const MATS={steel:{Y:200e9,sy:250e6,su:400e6,eu:.15,ef:.25,name:'Steel'},copper:{Y:120e9,sy:70e6,su:220e6,eu:.3,ef:.45,name:'Copper'},aluminium:{Y:70e9,sy:95e6,su:110e6,eu:.12,ef:.18,name:'Aluminium'}};
S.stress = {
  title:'Stress–strain tester', hint:'Load the wire past the yield point and the strain stops being proportional. Past the ultimate stress the wire necks and breaks. Values are typical, not exact.',
  aspect:.62, controls:[{k:'mat',label:'Material',type:'select',opts:[['steel','Steel'],['copper','Copper'],['aluminium','Aluminium']],v:'steel'},{k:'sig',label:'Applied stress',min:0,max:450,step:2,v:180,unit:'MPa'},{k:'L',label:'Wire length',min:1,max:3,step:.5,v:2,unit:'m'},{k:'d',label:'Diameter',min:.5,max:2,step:.1,v:1,unit:'mm'}],
  draw(c,W,H,p,st,C){
    const m=MATS[p.mat], s=p.sig*1e6, ey=m.sy/m.Y;
    // schematic strain axis: elastic part occupies 22%
    const X=e=> e<=ey? e/ey*.22 : .22+.78*(e-ey)/(m.ef-ey);
    const sigOf=e=>{ if(e<=ey) return m.Y*e; if(e<=m.eu){const xi=(e-ey)/(m.eu-ey);return m.sy+(m.su-m.sy)*(1-(1-xi)**2);} const xi=(e-m.eu)/(m.ef-m.eu);return m.su*(1-.15*xi*xi); };
    let e, region, broke=false;
    if(s<=m.sy){e=s/m.Y;region=s<=m.sy*.9?'Elastic (Hooke\'s law)':'Near yield point';}
    else if(s<=m.su){const r=(s-m.sy)/(m.su-m.sy);e=ey+(m.eu-ey)*(1-Math.sqrt(1-r));region='Plastic: permanent set';}
    else {e=m.ef;region='Fractured';broke=true;}
    const gx=W*.34, gy=24, gw=W*.56, gh=H-64, smax=480e6;
    axes(c,gx,gy,gw,gh,C,'strain (elastic part enlarged)','stress (MPa)');
    for(let v=100;v<=400;v+=100){const y=gy+gh-v*1e6/smax*gh;txt(c,String(v),gx-6,y+4,C.muted,10,'right');}
    const pts=[];for(let i=0;i<=200;i++){const ee=i<=40?ey*i/40:ey+(m.ef-ey)*(i-40)/160;pts.push([gx+X(ee)*gw,gy+gh-sigOf(ee)/smax*gh]);}
    plot(c,pts,C,C.muted,2);
    const lab=(e,t)=>{const x=gx+X(e)*gw,y=gy+gh-sigOf(e)/smax*gh;c.fillStyle=C.fg;c.beginPath();c.arc(x,y,3,0,TAU);c.fill();txt(c,t,x+5,y-6,C.muted,10);};
    lab(ey,'yield');lab(m.eu,'ultimate');{const x=gx+X(m.ef)*gw,y=gy+gh-sigOf(m.ef)/smax*gh;c.fillStyle=C.fg;c.beginPath();c.arc(x,y,3,0,TAU);c.fill();txt(c,'fracture',x,y+16,C.muted,10,'right');}
    if(!broke){const px=gx+X(e)*gw,py=gy+gh-s/smax*gh;c.fillStyle=C.accent;c.beginPath();c.arc(px,py,7,0,TAU);c.fill();}
    // wire
    const wx=W*.15, wy=24, L0=H*.42, stretch=Math.min(H*.3,X(e)*H*.35);
    c.fillStyle=C.line;c.fillRect(wx-40,wy-8,80,8);
    const wl=L0+stretch, thick=Math.max(1.5,3*p.d*(broke?0:1-.5*Math.max(0,(e-m.eu)/(m.ef-m.eu))));
    c.strokeStyle=C.accent2;c.lineWidth=thick;
    if(broke){line(c,wx,wy,wx,wy+wl*.55);line(c,wx,wy+wl*.62,wx,wy+wl);} else line(c,wx,wy,wx,wy+wl);
    c.fillStyle=C.fg;rrect(c,wx-30,wy+wl,60,28,4);c.fill();
    const A=Math.PI*(p.d*1e-3/2)**2, F=s*A;txt(c,(F/9.8).toFixed(1)+' kg',wx,wy+wl+18,C.bg,10,'center',700);
    st.r={e,region,F,dl:e*p.L*1e3,broke};
  },
  read(p,st){const r=st.r||{};return [['Region',r.region],['Load on wire',(r.F||0).toFixed(1)+' N'],['Strain',r.broke?'—':(r.e||0).toExponential(2)],['Extension',r.broke?'—':(r.dl||0).toFixed(2)+' mm'],['Young\'s modulus',(MATS[p.mat].Y/1e9)+' GPa']];}
};

/* ============ 11-9 Terminal velocity ============ */
const FLUIDS={glycerine:[1.41,1260,'Glycerine'],castor:[.99,960,'Castor oil'],honey:[10,1420,'Honey'],water:[.001,1000,'Water']};
const BALLS={steel:[7850,'Steel'],glass:[2500,'Glass'],lead:[11340,'Lead']};
S.terminal = {
  title:'Falling-ball viscometer', hint:'Drag plus buoyancy grow until they balance weight. Try water to see Stokes\' law fail: Reynolds number becomes far greater than 1.',
  aspect:.62, controls:[{k:'r',label:'Ball radius',min:.5,max:5,step:.1,v:2,unit:'mm'},{k:'fl',label:'Liquid',type:'select',opts:Object.entries(FLUIDS).map(([k,v])=>[k,v[2]]),v:'glycerine'},{k:'b',label:'Ball material',type:'select',opts:Object.entries(BALLS).map(([k,v])=>[k,v[1]]),v:'steel'}],
  reset:true, init(){return {t:0,hist:[]};},
  draw(c,W,H,p,st,C,t,dt){
    const [eta,sig]=FLUIDS[p.fl], rho=BALLS[p.b][0], r=p.r*1e-3, g=9.8;
    const vt=2*r*r*(rho-sig)*g/(9*eta), tau=2*rho*r*r/(9*eta), Dp=.4;
    const tTrip=Dp/vt+tau, speed=Math.max(1,tTrip/4); st.speed=speed;
    st.t+=dt*speed; const y=vt*(st.t-tau*(1-Math.exp(-st.t/tau))), v=vt*(1-Math.exp(-st.t/tau));
    if(y>Dp){st.t=0;st.hist=[];}
    const cx=W*.2, top=30, bot=H-30, cw=Math.min(110,W*.2);
    c.fillStyle=C.panel2;rrect(c,cx-cw/2,top,cw,bot-top,8);c.fill();c.strokeStyle=C.line;c.lineWidth=2;c.stroke();
    c.globalAlpha=.25;c.fillStyle=p.fl==='honey'?C.accent2:C.accent;rrect(c,cx-cw/2+3,top+16,cw-6,bot-top-19,6);c.fill();c.globalAlpha=1;
    for(let i=1;i<4;i++){const yy=top+16+(bot-top-30)*i/4;c.strokeStyle=C.muted;line(c,cx+cw/2-14,yy,cx+cw/2,yy);txt(c,(i*10)+' cm',cx+cw/2+4,yy+4,C.muted,10);}
    const py=top+16+(bot-top-30)*clamp(y/Dp,0,1), pr=clamp(p.r*2.2,4,13);c.fillStyle=C.fg;c.beginPath();c.arc(cx,py,pr,0,TAU);c.fill();
    const Wt=4/3*Math.PI*r**3*rho*g, Bu=4/3*Math.PI*r**3*sig*g, Fd=6*Math.PI*eta*r*v, ks=40/Wt;
    arrow(c,cx+pr+4,py,cx+pr+4,py+Wt*ks,C.fg,2,'W');arrow(c,cx-pr-4,py,cx-pr-4,py-Bu*ks,C.good,2,'B');arrow(c,cx-pr-14,py,cx-pr-14,py-Fd*ks,C.bad,2,'F');
    st.hist.push([st.t,v]);
    const gx=W*.45, gy=30, gw=W*.5, gh=H-70;axes(c,gx,gy,gw,gh,C,'time','speed');
    const tm=Math.max(tTrip,tau*4), yv=yy=>gy+gh-yy/(vt*1.15)*gh;
    c.strokeStyle=C.accent2;c.setLineDash([5,4]);line(c,gx,yv(vt),gx+gw,yv(vt));c.setLineDash([]);txt(c,'v_t',gx+gw-26,yv(vt)-6,C.accent2,11,'left',700);
    plot(c,st.hist.map(q=>[gx+q[0]/tm*gw,yv(q[1])]),C,C.accent,2.4);
    if(speed>1.5) txt(c,'playback ×'+f3(speed,2),gx,H-6,C.muted,10);
    st.vt=vt;st.tau=tau;st.Re=sig*vt*2*r/eta;
  },
  read(p,st){return [['Terminal velocity',f3(st.vt)+' m/s'],['Time constant τ',f3(st.tau)+' s'],['Reynolds number',f3(st.Re)],['Stokes\' law valid?',st.Re<1?'Yes (Re < 1)':'No: flow is not slow'],['Depends on r²','double r → 4× v_t']];}
};

/* ============ 11-10 Calorimetry ============ */
const METALS={copper:[390,'Copper'],aluminium:[900,'Aluminium'],iron:[450,'Iron']};
function heat(T,C){const f=clamp(T/200,0,1);return `hsl(${220-220*f},75%,${50+5*(1-f)}%)`;}
S.calorimetry = {
  title:'Calorimeter', hint:'Heat lost by the metal equals heat gained by the water. A metal with low specific heat barely warms the water.',
  aspect:.6, controls:[{k:'met',label:'Metal',type:'select',opts:Object.entries(METALS).map(([k,v])=>[k,v[1]]),v:'aluminium'},{k:'m1',label:'Metal mass',min:.1,max:1,step:.05,v:.3,unit:'kg'},{k:'T1',label:'Metal temperature',min:50,max:200,step:5,v:150,unit:'°C'},{k:'m2',label:'Water mass',min:.1,max:1,step:.05,v:.4,unit:'kg'},{k:'T2',label:'Water temperature',min:5,max:40,step:1,v:25,unit:'°C'}],
  reset:true, init(){return {t:0};},
  draw(c,W,H,p,st,C,t,dt){
    st.t+=dt; if(st.t>9) st.t=0;
    const c1=METALS[p.met][0], a=p.m1*c1, b=p.m2*4200, Tf=(a*p.T1+b*p.T2)/(a+b), e=Math.exp(-st.t/1.6);
    const Tm=Tf+(p.T1-Tf)*e, Tw=Tf+(p.T2-Tf)*e;
    const bx=30, bw=Math.min(160,W*.32), by=50, bh=H-90;
    c.strokeStyle=C.line;c.lineWidth=3;c.beginPath();c.moveTo(bx,by);c.lineTo(bx,by+bh);c.lineTo(bx+bw,by+bh);c.lineTo(bx+bw,by);c.stroke();
    const wl=by+bh*(1-.3-.5*p.m2);c.fillStyle=heat(Tw,C);c.globalAlpha=.55;c.fillRect(bx+2,wl,bw-4,by+bh-wl-2);c.globalAlpha=1;
    const ms=26+28*p.m1;c.fillStyle=heat(Tm,C);rrect(c,bx+bw/2-ms/2,by+bh-ms-6,ms,ms,3);c.fill();
    txt(c,Tw.toFixed(1)+' °C',bx+bw/2,wl-8,C.fg,12,'center',600);txt(c,'metal '+Tm.toFixed(1)+' °C',bx+bw/2,by+bh+18,C.fg,11,'center');
    const gx=bx+bw+50, gy=30, gw=W-gx-20, gh=H-70;axes(c,gx,gy,gw,gh,C,'time','T (°C)');
    const Tmax=Math.max(p.T1,60)*1.05, ty=T=>gy+gh-T/Tmax*gh;
    c.strokeStyle=C.muted;c.setLineDash([4,4]);line(c,gx,ty(Tf),gx+gw,ty(Tf));c.setLineDash([]);txt(c,'T_f = '+Tf.toFixed(1)+' °C',gx+gw,ty(Tf)-6,C.fg,11,'right',600);
    const P1=[],P2=[];for(let i=0;i<=100;i++){const tt=9*i/100;if(tt>st.t)break;const ee=Math.exp(-tt/1.6);P1.push([gx+gw*tt/9,ty(Tf+(p.T1-Tf)*ee)]);P2.push([gx+gw*tt/9,ty(Tf+(p.T2-Tf)*ee)]);}
    plot(c,P1,C,C.bad,2.4);plot(c,P2,C,C.accent,2.4);
    txt(c,'metal',gx+6,ty(p.T1)+14,C.bad,11);txt(c,'water',gx+6,ty(p.T2)-6,C.accent,11);
    st.Tf=Tf;st.Q=a*(p.T1-Tf);
  },
  read(p,st){return [['Final temperature',st.Tf?.toFixed(2)+' °C'],['Heat transferred',(st.Q/1000).toFixed(2)+' kJ'],['Metal heat capacity',(p.m1*METALS[p.met][0]).toFixed(0)+' J/K'],['Water heat capacity',(p.m2*4200).toFixed(0)+' J/K']];}
};

/* ============ 11-11 PV diagram ============ */
S.pv = {
  title:'PV diagram explorer', hint:'The shaded area is the work done by the gas. Compare isothermal and adiabatic curves for the same volume change.',
  aspect:.62, controls:[{k:'pr',label:'Process',type:'select',opts:[['iso','Isothermal'],['adi','Adiabatic'],['bar','Isobaric'],['cho','Isochoric']],v:'iso'},{k:'r',label:'Final ÷ initial (V, or T if isochoric)',min:.4,max:3,step:.05,v:2.5}],
  draw(c,W,H,p,st,C,t){
    const n=1,R=8.314,T1=300,V1=10,P1=n*R*T1/V1, gm=1.4, Cv=2.5*R, r=p.r;
    let V2=V1,P2=P1,T2=T1,Wk=0,Q,dU,curve;
    if(p.pr==='iso'){V2=V1*r;P2=P1/r;Wk=n*R*T1*Math.log(r);dU=0;curve=v=>n*R*T1/v;}
    else if(p.pr==='adi'){V2=V1*r;P2=P1*Math.pow(r,-gm);T2=T1*Math.pow(r,1-gm);Wk=n*R*(T1-T2)/(gm-1);dU=-Wk;curve=v=>P1*Math.pow(V1/v,gm);}
    else if(p.pr==='bar'){V2=V1*r;T2=T1*r;Wk=P1*(V2-V1);dU=n*Cv*(T2-T1);curve=()=>P1;}
    else {T2=T1*r;P2=P1*r;Wk=0;dU=n*Cv*(T2-T1);curve=null;}
    Q=dU+Wk;
    const gx=56, gy=24, gw=W*.62-56, gh=H-64, Vmax=32, Pmax=Math.max(800,P2*1.1,P1*1.1);
    axes(c,gx,gy,gw,gh,C,'V (L)','P (kPa)');
    const X=v=>gx+v/Vmax*gw, Y=P=>gy+gh-P/Pmax*gh;
    for(let v=0;v<=20;v+=10) txt(c,String(v),X(v),gy+gh+14,C.muted,10,'center');
    for(let P=200;P<Pmax;P+=200) txt(c,String(P),gx-6,Y(P)+4,C.muted,10,'right');
    c.globalAlpha=.35;for(let T=150;T<=1200;T+=150){const pts=[];for(let v=2;v<=Vmax;v+=.5)pts.push([X(v),Y(n*R*T/v)]);plot(c,pts.filter(q=>q[1]>gy),C,C.grid,1);} c.globalAlpha=1;
    txt(c,'faint lines: isotherms',gx+gw-4,gy+12,C.muted,10,'right');
    if(curve){const a=Math.min(V1,V2),b=Math.max(V1,V2);c.fillStyle=Wk>=0?C.accent:C.bad;c.globalAlpha=.22;c.beginPath();c.moveTo(X(a),Y(0));for(let v=a;v<=b+1e-9;v+=(b-a)/60)c.lineTo(X(v),Y(curve(v)));c.lineTo(X(b),Y(0));c.closePath();c.fill();c.globalAlpha=1;
      const pts=[];for(let i=0;i<=60;i++){const v=V1+(V2-V1)*i/60;pts.push([X(v),Y(curve(v))]);}plot(c,pts,C,C.accent,2.6);}
    else {c.strokeStyle=C.accent;c.lineWidth=2.6;line(c,X(V1),Y(P1),X(V2),Y(P2));}
    const ph=.5-.5*Math.cos(t*1.4), Vn=V1+(V2-V1)*ph, Pn=curve?curve(Vn):P1+(P2-P1)*ph, Tn=Pn*Vn/(n*R);
    [[V1,P1,'1'],[V2,P2,'2']].forEach(q=>{c.fillStyle=C.fg;c.beginPath();c.arc(X(q[0]),Y(q[1]),4,0,TAU);c.fill();txt(c,q[2],X(q[0])+6,Y(q[1])-6,C.fg,12,'left',700);});
    c.fillStyle=C.accent2;c.beginPath();c.arc(X(Vn),Y(Pn),6,0,TAU);c.fill();
    // piston
    const px=W*.68, pw=W*.28, py=gy+10, ph2=gh-20, cyl=ph2*.85, gasH=cyl*Vn/Vmax;
    c.strokeStyle=C.line;c.lineWidth=3;c.beginPath();c.moveTo(px,py);c.lineTo(px,py+cyl);c.lineTo(px+pw,py+cyl);c.lineTo(px+pw,py);c.stroke();
    c.fillStyle=heat((Tn-150)/5,C);c.globalAlpha=.6;c.fillRect(px+2,py+cyl-gasH,pw-4,gasH-2);c.globalAlpha=1;
    c.fillStyle=C.fg;c.fillRect(px+2,py+cyl-gasH-10,pw-4,10);c.fillRect(px+pw/2-4,py-6,8,cyl-gasH-4+6);
    txt(c,Tn.toFixed(0)+' K',px+pw/2,py+cyl-gasH/2+4,C.fg,12,'center',700);
    if(p.pr==='adi') txt(c,'insulated',px+pw/2,py+cyl+16,C.muted,10,'center');
    st.r={V2,P2,T2,Wk,Q,dU};
  },
  read(p,st){const r=st.r||{};return [['State 1','10 L, 249 kPa, 300 K'],['State 2',r.V2?.toFixed(1)+' L, '+r.P2?.toFixed(0)+' kPa, '+r.T2?.toFixed(0)+' K'],['Work by gas W',r.Wk?.toFixed(0)+' J'],['ΔU',r.dU?.toFixed(0)+' J'],['Heat Q = ΔU + W',r.Q?.toFixed(0)+' J'],['Gas','1 mol diatomic, γ = 1.4']];}
};

/* ============ 11-12 Kinetic gas ============ */
function gauss(){let u=0,v=0;while(!u)u=Math.random();while(!v)v=Math.random();return Math.sqrt(-2*Math.log(u))*Math.cos(TAU*v);}
S.gas = {
  title:'Gas in a box', hint:'Temperature sets the speeds. Pressure comes from wall impacts. PV/NT stays constant: that is the ideal gas law emerging from collisions.',
  aspect:.6, controls:[{k:'N',label:'Molecules N',min:20,max:260,step:10,v:120},{k:'T',label:'Temperature',min:100,max:1000,step:10,v:300,unit:'K'},{k:'Vf',label:'Box width (volume)',min:.5,max:1,step:.05,v:1}],
  init(){return {ps:[],T:300,imp:0,acc:0,Pm:0};},
  draw(c,W,H,p,st,C,t,dt){
    const bw=W*.58*p.Vf, bh=H-40, bx=16, by=20, rr=3.2, sig=48*Math.sqrt(p.T/300);
    if(st.T!==p.T){const f=Math.sqrt(p.T/st.T);st.ps.forEach(q=>{q.vx*=f;q.vy*=f;});st.T=p.T;}
    while(st.ps.length<p.N) st.ps.push({x:bx+rr+Math.random()*(bw-2*rr),y:by+rr+Math.random()*(bh-2*rr),vx:gauss()*sig,vy:gauss()*sig});
    while(st.ps.length>p.N) st.ps.pop();
    const h=Math.min(dt,.03);let imp=0;
    for(const q of st.ps){q.x+=q.vx*h;q.y+=q.vy*h;
      if(q.x<bx+rr){q.x=bx+rr;imp+=2*Math.abs(q.vx);q.vx=Math.abs(q.vx);} if(q.x>bx+bw-rr){q.x=bx+bw-rr;imp+=2*Math.abs(q.vx);q.vx=-Math.abs(q.vx);}
      if(q.y<by+rr){q.y=by+rr;imp+=2*Math.abs(q.vy);q.vy=Math.abs(q.vy);} if(q.y>by+bh-rr){q.y=by+bh-rr;imp+=2*Math.abs(q.vy);q.vy=-Math.abs(q.vy);}}
    const ps=st.ps;for(let i=0;i<ps.length;i++)for(let j=i+1;j<ps.length;j++){const a=ps[i],b=ps[j],dx=b.x-a.x,dy=b.y-a.y,d2=dx*dx+dy*dy;if(d2<4*rr*rr&&d2>0){const d=Math.sqrt(d2),nx=dx/d,ny=dy/d,rv=(a.vx-b.vx)*nx+(a.vy-b.vy)*ny;if(rv>0){a.vx-=rv*nx;a.vy-=rv*ny;b.vx+=rv*nx;b.vy+=rv*ny;}}}
    st.imp+=imp;st.acc+=h;if(st.acc>.6){const P=st.imp/st.acc/(2*(bw+bh));st.Pm=st.Pm?st.Pm*.5+P*.5:P;st.imp=0;st.acc=0;}
    c.strokeStyle=C.line;c.lineWidth=2.5;c.strokeRect(bx,by,bw,bh);
    ps.forEach((q,i)=>{c.fillStyle=i===0?C.accent2:C.accent;c.beginPath();c.arc(q.x,q.y,i===0?rr+1.5:rr,0,TAU);c.fill();});
    // histogram
    const hx=W*.64, hy=24, hw=W*.33, hh=H-60, vmax=sig*4, nb=14, bins=new Array(nb).fill(0);
    ps.forEach(q=>{const s=Math.hypot(q.vx,q.vy);const k=Math.floor(s/vmax*nb);if(k<nb)bins[k]++;});
    axes(c,hx,hy,hw,hh,C,'speed','count');
    const bwid=hw/nb, peak=Math.max(...bins,ps.length*.16);
    bins.forEach((n,i)=>{c.fillStyle=C.accent;c.globalAlpha=.6;c.fillRect(hx+i*bwid+1,hy+hh-n/peak*hh*.9,bwid-2,n/peak*hh*.9);c.globalAlpha=1;});
    const pts=[];for(let i=0;i<=60;i++){const v=vmax*i/60, f=v/(sig*sig)*Math.exp(-v*v/(2*sig*sig))*ps.length*vmax/nb;pts.push([hx+v/vmax*hw,hy+hh-f/peak*hh*.9]);}plot(c,pts,C,C.accent2,2);
    txt(c,'Maxwell curve',hx+hw-4,hy+46,C.accent2,10,'right');
    st.area=bw*bh;
  },
  read(p,st){const vr=Math.sqrt(3*8.314*p.T/.028), ratio=st.Pm*st.area/(p.N*p.T);return [['Pressure (from impacts)',(st.Pm||0).toFixed(1)+' units'],['PV / NT',isFinite(ratio)?ratio.toFixed(0)+' (≈ constant)':'—'],['v_rms of N₂ at this T',vr.toFixed(0)+' m/s'],['Avg KE per molecule',(1.5*1.38e-23*p.T).toExponential(2)+' J']];}
};

/* ============ 11-13 Spring SHM ============ */
S.shm = {
  title:'Spring–mass oscillator', hint:'Mass and spring constant set the period. Amplitude changes the energy but not the period.',
  aspect:.62, controls:[{k:'m',label:'Mass m',min:.5,max:5,step:.1,v:1,unit:'kg'},{k:'k',label:'Spring constant k',min:10,max:200,step:5,v:40,unit:'N/m'},{k:'A',label:'Amplitude A',min:.05,max:.3,step:.01,v:.2,unit:'m'}],
  reset:true, init(){return {t:0,hist:[]};},
  draw(c,W,H,p,st,C,t,dt){
    st.t+=dt;const w=Math.sqrt(p.k/p.m), x=p.A*Math.cos(w*st.t), v=-p.A*w*Math.sin(w*st.t), a=-w*w*x;
    st.hist.push(x);if(st.hist.length>360)st.hist.shift();
    const y0=H*.22, wall=24, eq=W*.5, sc=(W*.36)/.3, bx=eq+x*sc, bs=42;
    c.fillStyle=C.line;c.fillRect(wall-10,y0-40,10,80);c.strokeStyle=C.line;line(c,wall,y0+bs/2+2,W-20,y0+bs/2+2);
    c.strokeStyle=C.fg;c.lineWidth=1.6;spring(c,wall,y0,bx-bs/2,12,10);
    c.strokeStyle=C.muted;c.setLineDash([3,4]);[eq,eq-p.A*sc,eq+p.A*sc].forEach(X=>line(c,X,y0-38,X,y0+bs/2));c.setLineDash([]);
    txt(c,'mean',eq,y0-42,C.muted,10,'center');
    c.fillStyle=C.accent;rrect(c,bx-bs/2,y0-bs/2,bs,bs,5);c.fill();
    arrow(c,bx,y0-bs/2-8,bx+v*sc*.25,y0-bs/2-8,C.accent2,2,'v');arrow(c,bx,y0+bs/2+12,bx+a*sc*.04,y0+bs/2+12,C.bad,2,'a');
    const gx=40, gy=H*.48, gw=W*.62, gh=H*.44;axes(c,gx,gy,gw,gh,C,'time →','x');
    c.strokeStyle=C.muted;c.setLineDash([2,3]);line(c,gx,gy+gh/2,gx+gw,gy+gh/2);c.setLineDash([]);
    plot(c,st.hist.map((q,i)=>[gx+gw*i/360,gy+gh/2-q/.32*gh/2]),C,C.accent,2.2);
    const E=.5*p.k*p.A*p.A, PE=.5*p.k*x*x, KE=E-PE, bx0=W*.74, bw=Math.min(40,W*.08);
    bar(c,bx0,gy,bw,gh,PE/E,C.accent,C,'PE',PE.toFixed(2)+' J');bar(c,bx0+bw+16,gy,bw,gh,KE/E,C.accent2,C,'KE',KE.toFixed(2)+' J');
    st.w=w;st.x=x;
  },
  read(p,st){const w=Math.sqrt(p.k/p.m), T=TAU/w;return [['Period T = 2π√(m/k)',T.toFixed(3)+' s'],['Frequency',(1/T).toFixed(3)+' Hz'],['Max speed ωA',(w*p.A).toFixed(3)+' m/s'],['Max acceleration ω²A',(w*w*p.A).toFixed(2)+' m/s²'],['Total energy ½kA²',(.5*p.k*p.A*p.A).toFixed(3)+' J']];}
};

/* ============ 11-14 Standing waves ============ */
S.standing = {
  title:'Standing waves on a string', hint:'Each harmonic fits a whole number of half-wavelengths between the fixed ends. Turn on the travelling waves to see two opposite waves adding up.',
  aspect:.55, controls:[{k:'n',label:'Harmonic n',min:1,max:8,step:1,v:3},{k:'L',label:'Length L',min:.5,max:2,step:.05,v:1,unit:'m'},{k:'T',label:'Tension T',min:10,max:200,step:5,v:100,unit:'N'},{k:'mu',label:'Mass per length μ',min:.001,max:.02,step:.001,v:.005,unit:'kg/m'},{k:'tw',label:'Show travelling waves',type:'toggle',v:false}],
  draw(c,W,H,p,st,C,t){
    const x0=40, x1=W-40, y0=H*.5, A=H*.2, Om=TAU*.7, n=p.n, len=x1-x0;
    c.fillStyle=C.fg;[x0,x1].forEach(X=>{c.fillRect(X-5,y0-30,10,60);});
    c.strokeStyle=C.grid;c.setLineDash([4,4]);
    const env=s=>{const pts=[];for(let i=0;i<=200;i++){const u=i/200;pts.push([x0+u*len,y0+s*A*Math.sin(n*Math.PI*u)]);}plot(c,pts,C,C.muted,1);};
    env(1);env(-1);c.setLineDash([]);
    if(p.tw){const tw=(sgn,col)=>{const pts=[];for(let i=0;i<=200;i++){const u=i/200;pts.push([x0+u*len,y0+A/2*Math.sin(n*Math.PI*u-sgn*Om*t)]);}c.globalAlpha=.6;plot(c,pts,C,col,1.5);c.globalAlpha=1;};tw(1,C.accent2);tw(-1,C.good);}
    const pts=[];for(let i=0;i<=240;i++){const u=i/240;pts.push([x0+u*len,y0+A*Math.sin(n*Math.PI*u)*Math.cos(Om*t)]);}plot(c,pts,C,C.accent,3);
    for(let i=0;i<=n;i++){const X=x0+len*i/n;c.fillStyle=C.bad;c.beginPath();c.arc(X,y0,4,0,TAU);c.fill();txt(c,'N',X,y0+A+22,C.bad,11,'center',700);}
    for(let i=0;i<n;i++){const X=x0+len*(i+.5)/n;txt(c,'A',X,y0-A-10,C.accent,11,'center',700);}
    txt(c,'motion slowed down for viewing',W-10,H-8,C.muted,10,'right');
  },
  read(p){const v=Math.sqrt(p.T/p.mu), lam=2*p.L/p.n, f=p.n*v/(2*p.L);return [['Wave speed √(T/μ)',v.toFixed(1)+' m/s'],['Wavelength 2L/n',lam.toFixed(3)+' m'],['Frequency nv/2L',f.toFixed(1)+' Hz'],['Fundamental',(v/(2*p.L)).toFixed(1)+' Hz'],['Nodes / antinodes',(p.n+1)+' / '+p.n]];}
};

/* ============ 12-1 Electric field lines ============ */
S.efield = {
  title:'Field lines of two charges', hint:'Drag either charge. Hover anywhere to read the field. Opposite charges make a dipole; like charges leave a neutral point between them.',
  aspect:.62, controls:[{k:'q1',label:'Charge q₁',min:-5,max:5,step:1,v:3,unit:'μC'},{k:'q2',label:'Charge q₂',min:-5,max:5,step:1,v:-3,unit:'μC'},{k:'pot',label:'Shade potential',type:'toggle',v:true}],
  init(){return {pos:null,key:''};},
  drag(x,y,W,H,set,st,down){ if(!st.pos) return; if(down){const d0=Math.hypot(x-st.pos[0][0],y-st.pos[0][1]),d1=Math.hypot(x-st.pos[1][0],y-st.pos[1][1]);st.dragI=d0<d1?0:1;} st.pos[st.dragI??0]=[clamp(x,20,W-20),clamp(y,20,H-20)];st.key='';},
  draw(c,W,H,p,st,C){
    if(!st.pos||st.W!==W){st.pos=[[W*.33,H/2],[W*.67,H/2]];st.W=W;}
    const src=[{x:st.pos[0][0],y:st.pos[0][1],q:p.q1},{x:st.pos[1][0],y:st.pos[1][1],q:p.q2}].filter(s=>s.q!==0);
    const key=JSON.stringify([src,W,H,p.pot]);
    if(key!==st.key){st.key=key;st.lines=src.length?traceLines(src,W,H,14):[];
      if(p.pot&&src.length){const cell=10;st.heat=[];for(let y=0;y<H;y+=cell)for(let x=0;x<W;x+=cell){let V=0;src.forEach(s=>V+=s.q/Math.max(12,Math.hypot(x+5-s.x,y+5-s.y)));st.heat.push([x,y,V]);}} else st.heat=null;}
    if(p.pot&&st.heat){for(const [x,y,V] of st.heat){const a=clamp(Math.abs(V)*9,0,.32);c.fillStyle=V>0?C.pos:C.neg;c.globalAlpha=a;c.fillRect(x,y,10,10);}c.globalAlpha=1;}
    drawLines(c,st.lines||[],C.fg);
    [[st.pos[0],p.q1],[st.pos[1],p.q2]].forEach(([q,v])=>{c.fillStyle=v>0?C.pos:v<0?C.neg:C.muted;c.beginPath();c.arc(q[0],q[1],13,0,TAU);c.fill();txt(c,v>0?'+'+v:String(v),q[0],q[1]+4,'#fff',11,'center',700);});
    if(st.mouse&&src.length){const [mx,my]=st.mouse, m2px=.004;let ex=0,ey=0,V=0;src.forEach(s=>{const dx=(mx-s.x)*m2px,dy=(my-s.y)*m2px,r=Math.max(.02,Math.hypot(dx,dy));const k=9e9*s.q*1e-6;ex+=k*dx/r**3;ey+=k*dy/r**3;V+=k/r;});
      st.E=Math.hypot(ex,ey);st.V=V;const m=Math.hypot(ex,ey);arrow(c,mx,my,mx+ex/m*28,my+ey/m*28,C.accent2,2.4,'E');}
  },
  read(p,st){const d=st.pos?Math.hypot(st.pos[0][0]-st.pos[1][0],st.pos[0][1]-st.pos[1][1])*.004:0, F=9e9*Math.abs(p.q1*p.q2)*1e-12/(d*d||1);
    return [['Separation',(d*100).toFixed(1)+' cm'],['Force between charges',p.q1*p.q2===0?'0':F.toFixed(2)+' N ('+(p.q1*p.q2>0?'repulsive':'attractive')+')'],['|E| at pointer',st.E?f3(st.E)+' N/C':'hover the field'],['V at pointer',st.V?f3(st.V)+' V':'—']];}
};

/* ============ 12-2 Capacitor ============ */
S.capacitor = {
  title:'Parallel-plate capacitor', hint:'Slide the dielectric in. With the battery connected, V stays fixed, so more charge flows onto the plates.',
  aspect:.6, controls:[{k:'A',label:'Plate area',min:50,max:500,step:10,v:200,unit:'cm²'},{k:'d',label:'Separation d',min:1,max:10,step:.5,v:3,unit:'mm'},{k:'K',label:'Dielectric constant K',min:1,max:10,step:.1,v:4},{k:'f',label:'Dielectric inserted',min:0,max:1,step:.05,v:.5},{k:'V',label:'Battery voltage',min:1,max:100,step:1,v:12,unit:'V'}],
  draw(c,W,H,p,st,C){
    const e0=8.85e-12, A=p.A*1e-4, d=p.d*1e-3, Cap=e0*A/d*((1-p.f)+p.K*p.f), Q=Cap*p.V;
    const pw=Math.min(W*.6,80+Math.sqrt(p.A)*18), px=(W-pw)/2-30, gap=24+p.d*16, py=(H-gap)/2;
    c.fillStyle=C.pos;c.fillRect(px,py-10,pw,10);c.fillStyle=C.neg;c.fillRect(px,py+gap,pw,10);
    const dw=pw*p.f, dx=px+pw-dw;
    if(p.f>0){c.fillStyle=C.accent2;c.globalAlpha=.3+.04*p.K;c.fillRect(dx,py+2,dw+40*(1-p.f),gap-4);c.globalAlpha=1;txt(c,'K = '+p.K,dx+dw/2,py+gap/2+4,C.fg,11,'center',700);}
    const s1=1, s2=p.K;
    const drawSyms=(x0,w,s,yy,sym,col)=>{if(w<4)return;const k=clamp(Math.round(w/14*s/10),1,40);for(let i=0;i<k;i++)txt(c,sym,x0+w*(i+.5)/k,yy,col,12,'center',700);};
    drawSyms(px,pw-dw,s1,py-16,'+',C.pos);drawSyms(dx,dw,s2,py-16,'+',C.pos);drawSyms(px,pw-dw,s1,py+gap+26,'−',C.neg);drawSyms(dx,dw,s2,py+gap+26,'−',C.neg);
    c.strokeStyle=C.muted;c.lineWidth=1;const nl=Math.round(pw/18);for(let i=0;i<nl;i++){const X=px+pw*(i+.5)/nl;arrow(c,X,py+4,X,py+gap-4,C.muted,1);}
    const bxl=px+pw+50;c.strokeStyle=C.line;c.lineWidth=2;line(c,px+pw,py-5,bxl,py-5);line(c,px+pw,py+gap+5,bxl,py+gap+5);line(c,bxl,py-5,bxl,py+gap/2-8);line(c,bxl,py+gap/2+8,bxl,py+gap+5);
    c.lineWidth=3;line(c,bxl-14,py+gap/2-8,bxl+14,py+gap/2-8);c.lineWidth=5;line(c,bxl-8,py+gap/2+8,bxl+8,py+gap/2+8);txt(c,p.V+' V',bxl+20,py+gap/2+4,C.fg,12,'left',600);
    st.C=Cap;st.Q=Q;
  },
  read(p,st){const U=.5*st.C*p.V*p.V;return [['Capacitance',(st.C*1e12).toFixed(1)+' pF'],['Charge Q = CV',(st.Q*1e9).toFixed(2)+' nC'],['Energy ½CV²',f3(U*1e6)+' μJ'],['Field between plates',(p.V/(p.d*1e-3)/1000).toFixed(1)+' kV/m'],['Without dielectric',(8.85e-12*p.A*1e-4/(p.d*1e-3)*1e12).toFixed(1)+' pF']];}
};

/* ============ 12-3 Wheatstone bridge ============ */
S.wheatstone = {
  title:'Wheatstone bridge', hint:'Adjust S until the galvanometer needle reads zero. Then P/Q = R/S and no current crosses the bridge.',
  aspect:.66, controls:[{k:'P',label:'P',min:1,max:100,step:1,v:10,unit:'Ω'},{k:'Q',label:'Q',min:1,max:100,step:1,v:20,unit:'Ω'},{k:'R',label:'R',min:1,max:100,step:1,v:15,unit:'Ω'},{k:'S',label:'S (unknown)',min:1,max:100,step:1,v:22,unit:'Ω'}],
  init(){return {ph:0};},
  draw(c,W,H,p,st,C,t,dt){
    const E=6,G=40, a11=1/p.P+1/p.Q+1/G, a22=1/p.R+1/p.S+1/G, a12=-1/G, b1=E/p.P, b2=E/p.R, det=a11*a22-a12*a12;
    const VB=(b1*a22-a12*b2)/det, VD=(a11*b2-a12*b1)/det, Ig=(VB-VD)/G;
    const I={P:(E-VB)/p.P,Q:VB/p.Q,R:(E-VD)/p.R,S:VD/p.S,G:Ig}; st.I=I;st.Ig=Ig;
    const cx=W*.45, cy=H*.5, rx=Math.min(W*.3,200), ry=Math.min(H*.38,150);
    const A=[cx,cy-ry], Cn=[cx,cy+ry], B=[cx-rx,cy], D=[cx+rx,cy];
    const res=(p1,p2,lab,val,cur)=>{c.strokeStyle=C.line;c.lineWidth=2;line(c,p1[0],p1[1],p2[0],p2[1]);const mx=(p1[0]+p2[0])/2,my=(p1[1]+p2[1])/2, ang=Math.atan2(p2[1]-p1[1],p2[0]-p1[0]);
      c.save();c.translate(mx,my);c.rotate(ang);c.fillStyle=C.bg;c.fillRect(-26,-9,52,18);c.strokeStyle=C.accent;c.lineWidth=2;c.beginPath();c.moveTo(-24,0);for(let i=0;i<6;i++)c.lineTo(-20+i*8,i%2?7:-7);c.lineTo(24,0);c.stroke();c.restore();
      txt(c,lab+' = '+val+' Ω',mx+(mx<cx?-14:14),my+(my<cy?-12:22),C.fg,12,mx<cx?'right':'left',600);
      const L=Math.hypot(p2[0]-p1[0],p2[1]-p1[1]), sp=cur*1e3*6;for(let k=0;k<5;k++){const u=((st.ph*sp/L+k/5)%1+1)%1;c.fillStyle=C.accent2;c.beginPath();c.arc(p1[0]+(p2[0]-p1[0])*u,p1[1]+(p2[1]-p1[1])*u,2.6,0,TAU);c.fill();}};
    st.ph+=dt;
    res(A,B,'P',p.P,I.P);res(B,Cn,'Q',p.Q,I.Q);res(A,D,'R',p.R,I.R);res(D,Cn,'S',p.S,I.S);
    c.strokeStyle=C.line;c.lineWidth=2;line(c,B[0],B[1],cx-30,cy);line(c,cx+30,cy,D[0],D[1]);
    c.fillStyle=C.panel;c.beginPath();c.arc(cx,cy,30,0,TAU);c.fill();c.strokeStyle=C.fg;c.stroke();
    const ang=clamp(Ig*1e3*4,-1.2,1.2);c.strokeStyle=Math.abs(Ig)<2e-5?C.good:C.bad;c.lineWidth=2.5;line(c,cx,cy+18,cx+24*Math.sin(ang),cy+18-34*Math.cos(ang));txt(c,'G',cx,cy+26,C.muted,10,'center');
    // battery loop
    c.strokeStyle=C.line;c.lineWidth=2;const bxr=Math.min(W-30,D[0]+60);line(c,A[0],A[1],A[0],A[1]-16);line(c,A[0],A[1]-16,bxr,A[1]-16);line(c,bxr,A[1]-16,bxr,cy-8);line(c,bxr,cy+8,bxr,Cn[1]+16);line(c,bxr,Cn[1]+16,Cn[0],Cn[1]+16);line(c,Cn[0],Cn[1]+16,Cn[0],Cn[1]);
    c.lineWidth=3;line(c,bxr-12,cy-8,bxr+12,cy-8);c.lineWidth=5;line(c,bxr-6,cy+8,bxr+6,cy+8);txt(c,'6 V',bxr+16,cy+4,C.fg,11);
    [['A',A,-8],['C',Cn,20],['B',B,0],['D',D,0]].forEach(([l,q,o])=>{c.fillStyle=C.fg;c.beginPath();c.arc(q[0],q[1],4,0,TAU);c.fill();txt(c,l,q[0]+(l==='B'?-16:l==='D'?10:8),q[1]+o,C.muted,11);});
  },
  read(p,st){const bal=Math.abs(st.Ig||0)<2e-5;const ig=Math.abs(st.Ig||0);return [['Galvanometer current',ig>=1e-3?((st.Ig)*1e3).toFixed(2)+' mA':((st.Ig||0)*1e6).toFixed(1)+' μA'],['P / Q',(p.P/p.Q).toFixed(3)],['R / S',(p.R/p.S).toFixed(3)],['Bridge',bal?'Balanced ✓':'Not balanced'],['S needed for balance',(p.R*p.Q/p.P).toFixed(1)+' Ω']];}
};

/* ============ 12-4 Charge in magnetic field ============ */
const PARTS={electron:[9.11e-31,-1.6e-19,'Electron'],proton:[1.67e-27,1.6e-19,'Proton'],alpha:[6.64e-27,3.2e-19,'Alpha particle']};
S.magforce = {
  title:'Charge in a magnetic field', hint:'Change the speed: the circle grows but one lap takes the same time. The period depends only on q, m and B.',
  aspect:.62, controls:[{k:'pt',label:'Particle',type:'select',opts:Object.entries(PARTS).map(([k,v])=>[k,v[2]]),v:'proton'},{k:'v',label:'Speed',min:1,max:30,step:1,v:10,unit:'×10⁵ m/s'},{k:'B',label:'Field B',min:.05,max:1,step:.01,v:.2,unit:'T'},{k:'dir',label:'Field direction',type:'select',opts:[['out','Out of screen ⊙'],['in','Into screen ⊗']],v:'out'}],
  reset:true, init(){return {ang:0};},
  draw(c,W,H,p,st,C,t,dt){
    const [m,q]=PARTS[p.pt], v=p.v*1e5, r=m*v/(Math.abs(q)*p.B), rref=m*1e6/(Math.abs(q)*.2), sc=Math.min(W,H)*.22/rref;
    const rp=r*sc, vpx=60*(p.v/10), w=vpx/rp;
    const sgn=(q>0?1:-1)*(p.dir==='out'?1:-1); // +1 clockwise
    st.ang+=w*dt*sgn;
    for(let x=24;x<W;x+=40)for(let y=24;y<H;y+=40){c.strokeStyle=C.grid;c.fillStyle=C.muted;if(p.dir==='out'){c.beginPath();c.arc(x,y,5,0,TAU);c.stroke();c.beginPath();c.arc(x,y,1.5,0,TAU);c.fill();}else{c.lineWidth=1.2;line(c,x-4,y-4,x+4,y+4);line(c,x-4,y+4,x+4,y-4);}}
    const cx=W/2, cy=H/2;c.strokeStyle=C.accent;c.globalAlpha=.4;c.lineWidth=2;c.setLineDash([5,5]);c.beginPath();c.arc(cx,cy,rp,0,TAU);c.stroke();c.setLineDash([]);c.globalAlpha=1;
    const a=st.ang, px=cx+rp*Math.cos(a), py=cy+rp*Math.sin(a);
    const tx=-Math.sin(a)*sgn, ty=Math.cos(a)*sgn;
    arrow(c,px,py,px+tx*40,py+ty*40,C.accent2,2.4,'v');arrow(c,px,py,px+(cx-px)/rp*34,py+(cy-py)/rp*34,C.bad,2.4,'F');
    c.fillStyle=q>0?C.pos:C.neg;c.beginPath();c.arc(px,py,8,0,TAU);c.fill();txt(c,q>0?'+':'−',px,py+4,'#fff',12,'center',700);
    txt(c,'r = '+f3(r)+' m',cx,cy+4,C.fg,12,'center',600);
    st.r=r;st.T=TAU*m/(Math.abs(q)*p.B);
  },
  read(p,st){const [m,q]=PARTS[p.pt];return [['Radius r = mv/qB',f3(st.r)+' m'],['Period T = 2πm/qB',f3(st.T)+' s'],['Frequency',f3(1/st.T)+' Hz'],['Speed change','none (F ⊥ v)'],['Sense of rotation',((q>0)===(p.dir==='out'))?'clockwise':'anticlockwise']];}
};

/* ============ 12-5 Bar magnet ============ */
S.barmagnet = {
  title:'Bar magnet and compass', hint:'Move your pointer over the field: the compass needle lines up with B. Lines leave N and enter S, then close inside the magnet.',
  aspect:.62, controls:[{k:'len',label:'Magnet length',min:.15,max:.5,step:.01,v:.3},{k:'n',label:'Field lines',min:6,max:24,step:2,v:14},{k:'fil',label:'Iron filings',type:'toggle',v:false}],
  init(){return {key:''};},
  draw(c,W,H,p,st,C){
    const half=W*p.len/2, cx=W/2, cy=H/2, src=[{x:cx+half,y:cy,q:1},{x:cx-half,y:cy,q:-1}];
    const key=[W,H,p.len,p.n].join();if(key!==st.key){st.key=key;st.lines=traceLines(src,W,H,p.n);}
    if(p.fil){c.strokeStyle=C.muted;c.lineWidth=1;for(let x=10;x<W;x+=16)for(let y=10;y<H;y+=16){if(Math.abs(y-cy)<16&&Math.abs(x-cx)<half+10)continue;const [bx,by]=fieldAt(src,x,y),m=Math.hypot(bx,by);line(c,x-4*bx/m,y-4*by/m,x+4*bx/m,y+4*by/m);}}
    drawLines(c,st.lines,C.accent);
    const mh=Math.max(26,H*.09);c.fillStyle=C.neg;rrect(c,cx-half-14,cy-mh/2,half+14,mh,4);c.fill();c.fillStyle=C.pos;rrect(c,cx,cy-mh/2,half+14,mh,4);c.fill();
    txt(c,'S',cx-half/2-6,cy+5,'#fff',15,'center',700);txt(c,'N',cx+half/2+6,cy+5,'#fff',15,'center',700);
    const [mx,my]=st.mouse||[cx,cy-H*.32], [bx,by]=fieldAt(src,mx,my), a=Math.atan2(by,bx);st.Bm=Math.hypot(bx,by);
    c.fillStyle=C.panel;c.beginPath();c.arc(mx,my,20,0,TAU);c.fill();c.strokeStyle=C.fg;c.lineWidth=1.5;c.stroke();
    c.save();c.translate(mx,my);c.rotate(a);c.fillStyle=C.pos;c.beginPath();c.moveTo(16,0);c.lineTo(0,-4);c.lineTo(0,4);c.fill();c.fillStyle=C.muted;c.beginPath();c.moveTo(-16,0);c.lineTo(0,-4);c.lineTo(0,4);c.fill();c.restore();
    st.ref=Math.hypot(...fieldAt(src,cx,cy-W*p.len));st.ang=-a/D2R;
  },
  read(p,st){return [['Needle points',(st.ang||0).toFixed(0)+'° from +x'],['|B| at compass',((st.Bm||0)/(st.ref||1)).toFixed(2)+' × reference'],['Gauss\'s law','net flux through any closed surface = 0'],['Isolated poles?','none: lines are closed loops']];}
};

/* ============ 12-6 EMI ============ */
S.emi = {
  title:'Magnet through a coil', hint:'emf appears only while flux is changing. The needle flips as the magnet enters and leaves: that is Lenz\'s law at work.',
  aspect:.62, controls:[{k:'N',label:'Turns N',min:50,max:500,step:10,v:200},{k:'f',label:'Shaking rate',min:.2,max:2,step:.05,v:.6,unit:'Hz'},{k:'s',label:'Magnet strength',min:.5,max:2,step:.1,v:1},{k:'flip',label:'Flip magnet (S first)',type:'toggle',v:false}],
  reset:true, init(){return {t:0,hist:[],pk:0};},
  draw(c,W,H,p,st,C,t,dt){
    const Am=.1, a=.03, ph0=2e-4*p.s*(p.flip?-1:1), Phi=x=>ph0/Math.pow(1+(x/a)**2,1.5);
    st.t+=dt; const x=Am*Math.sin(TAU*p.f*st.t), h=1e-4, xp=Am*Math.sin(TAU*p.f*(st.t+h)), emf=-p.N*(Phi(xp)-Phi(x))/h;
    st.hist.push(emf);if(st.hist.length>300)st.hist.shift();st.pk=Math.max(st.pk*.995,Math.abs(emf));
    const cx=W/2, cy=H*.3, sc=(W*.36)/Am, mx=cx+x*sc;
    // coil back
    const loops=Math.round(4+p.N/60), cw=Math.min(90,W*.18), ch=H*.22;
    c.strokeStyle=C.accent2;c.lineWidth=2;for(let i=0;i<loops;i++){const X=cx-cw/2+cw*i/(loops-1);c.beginPath();c.ellipse(X,cy,7,ch/2,0,Math.PI/2,Math.PI*1.5);c.stroke();}
    const mw=Math.min(120,W*.24), mh=26;c.fillStyle=p.flip?C.pos:C.neg;rrect(c,mx-mw/2,cy-mh/2,mw/2,mh,3);c.fill();c.fillStyle=p.flip?C.neg:C.pos;rrect(c,mx,cy-mh/2,mw/2,mh,3);c.fill();
    txt(c,p.flip?'N':'S',mx-mw/4,cy+5,'#fff',13,'center',700);txt(c,p.flip?'S':'N',mx+mw/4,cy+5,'#fff',13,'center',700);
    c.strokeStyle=C.accent2;c.lineWidth=2;for(let i=0;i<loops;i++){const X=cx-cw/2+cw*i/(loops-1);c.beginPath();c.ellipse(X,cy,7,ch/2,0,-Math.PI/2,Math.PI/2);c.stroke();}
    const full=200*2e-4*2*TAU*.6*Am/a*1.2;
    // galvanometer
    const gx=W*.16, gy=H*.78, gr=Math.min(46,H*.14);c.fillStyle=C.panel;c.beginPath();c.arc(gx,gy,gr,Math.PI,0);c.fill();c.strokeStyle=C.fg;c.lineWidth=1.5;c.stroke();
    for(let k=-4;k<=4;k++){const an=-Math.PI/2+k*.3;line(c,gx+(gr-8)*Math.cos(an),gy+(gr-8)*Math.sin(an),gx+gr*Math.cos(an),gy+gr*Math.sin(an));}
    const an=-Math.PI/2+clamp(emf/full,-1,1)*1.2;c.strokeStyle=C.bad;c.lineWidth=2.5;line(c,gx,gy,gx+(gr-4)*Math.cos(an),gy+(gr-4)*Math.sin(an));txt(c,'0',gx,gy-gr-4,C.muted,10,'center');
    const px=W*.32, py=H*.56, pw=W*.64, ph=H*.4;axes(c,px,py,pw,ph,C,'time','emf');
    c.strokeStyle=C.muted;c.setLineDash([2,3]);line(c,px,py+ph/2,px+pw,py+ph/2);c.setLineDash([]);
    plot(c,st.hist.map((e,i)=>[px+pw*i/300,py+ph/2-clamp(e/full,-1,1)*ph/2]),C,C.accent,2);
    st.emf=emf;
  },
  read(p,st){return [['emf now',(st.emf||0).toFixed(3)+' V'],['Recent peak',(st.pk||0).toFixed(3)+' V'],['Doubling N','doubles emf'],['Doubling speed','doubles emf'],['Magnet at rest','no emf']];}
};

/* ============ 12-7 LCR ============ */
S.lcr = {
  title:'Series LCR circuit', hint:'Tune f until X_L = X_C. Current peaks, the phasors line up with V_R, and the power factor becomes 1.',
  aspect:.62, controls:[{k:'R',label:'Resistance R',min:10,max:200,step:5,v:40,unit:'Ω'},{k:'L',label:'Inductance L',min:10,max:500,step:10,v:100,unit:'mH'},{k:'Cc',label:'Capacitance C',min:1,max:100,step:1,v:40,unit:'μF'},{k:'f',label:'Frequency f',min:10,max:400,step:1,v:50,unit:'Hz'}],
  draw(c,W,H,p,st,C,t){
    const V=10, w=TAU*p.f, XL=w*p.L*1e-3, XC=1/(w*p.Cc*1e-6), Z=Math.hypot(p.R,XL-XC), I=V/Z, ph=Math.atan2(XL-XC,p.R), f0=1/(TAU*Math.sqrt(p.L*1e-3*p.Cc*1e-6));
    const cx=W*.24, cy=H*.5, rot=t*.8, sc=Math.min(W*.2,H*.36)/Math.max(V,I*XL,I*XC,1);
    const P=(m,a,col,lab)=>arrow(c,cx,cy,cx+m*sc*Math.cos(a+rot),cy-m*sc*Math.sin(a+rot),col,2.4,lab);
    c.strokeStyle=C.grid;c.beginPath();c.arc(cx,cy,V*sc,0,TAU);c.stroke();
    P(I*p.R,0,C.accent,'V_R');P(I*XL,Math.PI/2,C.good,'V_L');P(I*XC,-Math.PI/2,C.bad,'V_C');P(V,ph,C.fg,'V');P(I*14,0,C.accent2,'I');
    txt(c,'phasors (rotating)',cx,H-10,C.muted,10,'center');
    const gx=W*.5, gy=24, gw=W*.46, gh=H-64;axes(c,gx,gy,gw,gh,C,'f (Hz)','I (A)');
    const Imax=V/p.R*1.08, X=f=>gx+(f-10)/390*gw, Y=i=>gy+gh-i/Imax*gh;
    const pts=[];for(let f=10;f<=400;f+=2){const ww=TAU*f;pts.push([X(f),Y(V/Math.hypot(p.R,ww*p.L*1e-3-1/(ww*p.Cc*1e-6)))]);}plot(c,pts,C,C.accent,2.2);
    if(f0>=10&&f0<=400){c.strokeStyle=C.muted;c.setLineDash([3,4]);line(c,X(f0),gy,X(f0),gy+gh);c.setLineDash([]);txt(c,'f₀',X(f0)+4,gy+12,C.muted,11);}
    c.fillStyle=C.accent2;c.beginPath();c.arc(X(p.f),Y(I),6,0,TAU);c.fill();
    for(let f=100;f<=400;f+=100) txt(c,String(f),X(f),gy+gh+14,C.muted,10,'center');
    st.r={XL,XC,Z,I,ph,f0};
  },
  read(p,st){const r=st.r||{};return [['X_L = ωL',r.XL?.toFixed(1)+' Ω'],['X_C = 1/ωC',r.XC?.toFixed(1)+' Ω'],['Impedance Z',r.Z?.toFixed(1)+' Ω'],['Current (10 V rms)',r.I?.toFixed(3)+' A'],['Phase φ',(r.ph/D2R).toFixed(1)+'° '+(r.ph>0?'(current lags)':r.ph<0?'(current leads)':'')],['Resonant f₀',r.f0?.toFixed(1)+' Hz'],['Power factor',Math.cos(r.ph||0).toFixed(3)]];}
};

/* ============ 12-8 EM waves ============ */
const BANDS=[[-13,-12,'Gamma rays','cancer radiotherapy, sterilising equipment'],[-12,-9,'X-rays','medical imaging, airport scanners'],[-9,Math.log10(4e-7),'Ultraviolet','water purification, LASIK eye surgery'],[Math.log10(4e-7),Math.log10(7e-7),'Visible','vision, photosynthesis, optical fibres'],[Math.log10(7e-7),-3,'Infrared','TV remotes, thermal cameras'],[-3,-1,'Microwaves','ovens, radar, Wi-Fi, mobile networks'],[-1,3,'Radio waves','AM/FM radio, TV broadcast']];
S.emwave = {
  title:'Electromagnetic wave', hint:'E (vertical) and B (horizontal, drawn in perspective) oscillate in phase and at right angles. Slide through the spectrum; only the wavelength changes.',
  aspect:.6, controls:[{k:'lg',label:'Wavelength (log scale)',min:-13,max:3,step:.02,v:-6.28,fmt:v=>f3(Math.pow(10,v))+' m'}],
  draw(c,W,H,p,st,C,t){
    const lam=Math.pow(10,p.lg), nm=lam*1e9, col=wlColor(nm)||C.accent, y0=H*.38, x0=40, x1=W-30, A=H*.2, kp=TAU/Math.max(80,Math.min(260,W/3)), w=2.2;
    c.strokeStyle=C.muted;c.lineWidth=1;arrow(c,x0,y0,x1,y0,C.muted,1.2,'x');
    const E=[],B=[];for(let X=x0;X<=x1;X+=3){const ph=kp*(X-x0)-w*t, s=Math.sin(ph);E.push([X,y0-A*s]);B.push([X+A*.55*s*.6,y0+A*.35*s]);}
    for(let i=0;i<E.length;i+=5){c.strokeStyle=col;c.globalAlpha=.35;line(c,E[i][0],y0,E[i][0],E[i][1]);c.strokeStyle=C.accent2;line(c,E[i][0],y0,B[i][0],B[i][1]);c.globalAlpha=1;}
    plot(c,E,C,col,2.6);plot(c,B,C,C.accent2,2);
    txt(c,'E',x0+4,y0-A-8,col,13,'left',700);txt(c,'B',x0+4,y0+A*.5+18,C.accent2,13,'left',700);
    const sy=H*.82, sh=22, X=v=>x0+(v+13)/16*(x1-x0);
    BANDS.forEach((b,i)=>{c.fillStyle=i%2?C.panel2:C.panel;c.fillRect(X(b[0]),sy,X(b[1])-X(b[0]),sh);if(b[2]!=='Visible'&&X(b[1])-X(b[0])>40)txt(c,b[2].split(' ')[0],(X(b[0])+X(b[1]))/2,sy+15,C.muted,10,'center');});
    const vg=c.createLinearGradient(X(BANDS[3][0]),0,X(BANDS[3][1]),0);[400,450,500,550,600,650,700].forEach((n,i)=>vg.addColorStop(i/6,wlColor(n)));c.fillStyle=vg;c.fillRect(X(BANDS[3][0]),sy,X(BANDS[3][1])-X(BANDS[3][0]),sh);
    txt(c,'← shorter λ, higher f',x0,sy-8,C.muted,10);txt(c,'longer λ →',x1,sy-8,C.muted,10,'right');
    const mxp=X(p.lg);c.fillStyle=C.fg;c.beginPath();c.moveTo(mxp,sy-2);c.lineTo(mxp-6,sy-12);c.lineTo(mxp+6,sy-12);c.fill();c.fillRect(mxp-1,sy,2,sh);
    txt(c,'(wave drawn at a fixed screen scale)',x1,H-6,C.muted,10,'right');
  },
  read(p){const lam=Math.pow(10,p.lg), f=3e8/lam, E=6.626e-34*f/1.6e-19, b=BANDS.find(b=>p.lg>=b[0]&&p.lg<b[1])||BANDS[BANDS.length-1];return [['Wavelength',f3(lam)+' m'],['Frequency',f3(f)+' Hz'],['Photon energy',f3(E)+' eV'],['Band',b[2]],['Used for',b[3]]];}
};

/* ============ 12-9 Thin lens ============ */
S.lens = {
  title:'Thin lens ray tracer', hint:'Drag the object along the axis. Inside F, a convex lens becomes a magnifying glass. A concave lens always gives a small, upright, virtual image.',
  aspect:.56, controls:[{k:'ty',label:'Lens',type:'select',opts:[['cx','Convex (converging)'],['cc','Concave (diverging)']],v:'cx'},{k:'f',label:'Focal length |f|',min:5,max:30,step:1,v:15,unit:'cm'},{k:'u',label:'Object distance',min:4,max:65,step:1,v:35,unit:'cm'}],
  drag(x,y,W,H,set){const sc=(W-40)/140;set('u',clamp(Math.round((W/2-x)/sc),4,65));},
  draw(c,W,H,p,st,C){
    const sc=(W-40)/140, cx=W/2, cy=H*.55, fs=p.ty==='cx'?p.f:-p.f, u=-p.u, ho=6, inv=1/fs+1/u, v=Math.abs(inv)<1e-6?Infinity:1/inv, m=v/u, hi=m*ho;
    const X=x=>cx+x*sc, Y=y=>cy-y*sc*1.2;
    c.strokeStyle=C.muted;c.lineWidth=1;line(c,10,cy,W-10,cy);
    [-2,-1,1,2].forEach(k=>{const xx=X(k*p.f);c.fillStyle=C.fg;c.beginPath();c.arc(xx,cy,3,0,TAU);c.fill();txt(c,(Math.abs(k)===2?'2F':'F'),xx,cy+16,C.muted,10,'center');});
    const lh=H*.4;c.strokeStyle=C.accent;c.lineWidth=2;c.fillStyle=C.accent;c.globalAlpha=.15;c.beginPath();
    if(p.ty==='cx'){c.ellipse(cx,cy,9,lh,0,0,TAU);}else{c.moveTo(cx-10,cy-lh);c.quadraticCurveTo(cx-2,cy,cx-10,cy+lh);c.lineTo(cx+10,cy+lh);c.quadraticCurveTo(cx+2,cy,cx+10,cy-lh);c.closePath();}
    c.fill();c.globalAlpha=1;c.stroke();
    arrow(c,X(u),cy,X(u),Y(ho),C.accent2,3);
    const xR=(W-10-cx)/sc, xL=(10-cx)/sc;
    const ray=(y0,yAt,col)=>{c.strokeStyle=col;c.lineWidth=1.6;line(c,X(u),Y(ho),X(0),Y(y0));line(c,X(0),Y(y0),X(xR),Y(yAt(xR)));
      if(v<0&&isFinite(v)){c.setLineDash([4,4]);c.globalAlpha=.7;line(c,X(0),Y(y0),X(Math.max(v*1.05,xL)),Y(yAt(Math.max(v*1.05,xL))));c.setLineDash([]);c.globalAlpha=1;}};
    ray(ho,x=>ho*(1-x/fs),C.good);
    ray(0,x=>ho/u*x,C.fg);
    if(Math.abs(u+fs)>.5){const y3=ho*fs/(u+fs);if(Math.abs(y3)<lh/(sc*1.2))ray(y3,()=>y3,C.bad);}
    if(isFinite(v)&&Math.abs(v)<200&&Math.abs(hi)<60){c.save();if(v<0)c.setLineDash([5,4]);arrow(c,X(v),cy,X(v),Y(hi),v>0?C.accent:C.muted,3);c.restore();txt(c,'image',X(v),Y(hi)+(hi>0?-8:16),C.fg,11,'center',600);}
    txt(c,'object',X(u),Y(ho)-8,C.accent2,11,'center',600);
    st.v=v;st.m=m;
  },
  read(p,st){const v=st.v, m=st.m;const fs=p.ty==='cx'?p.f:-p.f;return [['u (sign convention)','−'+p.u+' cm'],['Image distance v',isFinite(v)?v.toFixed(1)+' cm':'at infinity'],['Magnification m',isFinite(v)?m.toFixed(2):'—'],['Nature',!isFinite(v)?'parallel rays':v>0?'real, inverted':'virtual, upright'],['Power P = 100/f',(100/fs).toFixed(2)+' D']];}
};

/* ============ 12-10 YDSE ============ */
S.ydse = {
  title:'Young\'s double slit', hint:'Fringe width β = λD/d. Red light gives wider fringes than blue; moving the slits apart squeezes the pattern.',
  aspect:.58, controls:[{k:'l',label:'Wavelength λ',min:380,max:750,step:5,v:550,unit:'nm'},{k:'d',label:'Slit separation d',min:.1,max:1,step:.02,v:.3,unit:'mm'},{k:'D',label:'Screen distance D',min:.5,max:2,step:.05,v:1,unit:'m'}],
  draw(c,W,H,p,st,C,t){
    const col=wlColor(p.l), beta=p.l*1e-9*p.D/(p.d*1e-3)*1e3, ymax=8;
    const sx=W*.08, slx=W*.22, scx=W*.62, cy=H/2, sep=10+p.d*40;
    c.fillStyle=C.fg;c.beginPath();c.arc(sx,cy,6,0,TAU);c.fill();
    c.fillStyle=C.line;c.fillRect(slx-3,20,6,cy-sep/2-24);c.fillRect(slx-3,cy-sep/2+4,6,sep-8);c.fillRect(slx-3,cy+sep/2+4,6,H-20-(cy+sep/2+4));
    c.save();c.beginPath();c.rect(slx,10,scx-slx,H-20);c.clip();c.strokeStyle=col;c.lineWidth=1.2;
    const wl=14+(p.l-380)/370*14;for(const yy of [cy-sep/2,cy+sep/2])for(let k=0;k<14;k++){const r=((t*30)%wl)+k*wl;c.globalAlpha=.4*(1-k/14);c.beginPath();c.arc(slx,yy,r,-1.2,1.2);c.stroke();}
    c.restore();c.globalAlpha=1;
    c.strokeStyle=col;c.globalAlpha=.5;for(const yy of [-sep/2,sep/2]){line(c,sx,cy,slx,cy+yy);}c.globalAlpha=1;
    const sw=24, top=16, bh=H-32;
    for(let i=0;i<bh;i++){const y=(i/bh-.5)*2*ymax, I=Math.cos(Math.PI*y/beta)**2;c.fillStyle=col;c.globalAlpha=I;c.fillRect(scx,top+i,sw,1);}c.globalAlpha=1;
    c.strokeStyle=C.line;c.strokeRect(scx,top,sw,bh);
    const gx=scx+sw+12, gw=W-gx-16;c.strokeStyle=C.grid;line(c,gx,top,gx,top+bh);
    const pts=[];for(let i=0;i<=bh;i+=1){const y=(i/bh-.5)*2*ymax;pts.push([gx+gw*Math.cos(Math.PI*y/beta)**2,top+i]);}plot(c,pts,C,C.fg,1.6);
    const b2=beta/(2*ymax)*bh;c.strokeStyle=C.accent2;c.lineWidth=1.5;line(c,gx+gw+2,cy,gx+gw+2,cy-b2*2);txt(c,'β',gx+gw-10,cy-b2+4,C.accent2,12,'right',700);
    txt(c,'+8 mm',scx-4,top+10,C.muted,10,'right');txt(c,'−8 mm',scx-4,top+bh,C.muted,10,'right');txt(c,'D = '+p.D+' m',(slx+scx)/2,H-4,C.muted,10,'center');
  },
  read(p){const b=p.l*1e-9*p.D/(p.d*1e-3);return [['Fringe width β',(b*1e3).toFixed(3)+' mm'],['Angular width λ/d',(p.l*1e-9/(p.d*1e-3)).toExponential(2)+' rad'],['Bright fringes in ±8 mm',String(2*Math.floor(.008/b)+1)],['Colour',p.l<450?'violet':p.l<495?'blue':p.l<570?'green':p.l<590?'yellow':p.l<620?'orange':'red']];}
};

/* ============ 12-11 Photoelectric ============ */
const PE_METALS={Cs:[2.14,'Caesium'],K:[2.30,'Potassium'],Na:[2.75,'Sodium'],Ca:[3.20,'Calcium'],Mo:[4.17,'Molybdenum'],Ni:[5.15,'Nickel']};
S.photo = {
  title:'Photoelectric effect', hint:'Below the threshold frequency nothing comes out, however bright the light. Above it, brightness sets how many electrons and colour sets how fast.',
  aspect:.6, controls:[{k:'mt',label:'Metal',type:'select',opts:Object.entries(PE_METALS).map(([k,v])=>[k,v[1]+' (φ = '+v[0]+' eV)']),v:'Na'},{k:'l',label:'Wavelength λ',min:150,max:800,step:5,v:400,unit:'nm'},{k:'I',label:'Intensity',min:0,max:100,step:5,v:60,unit:'%'}],
  init(){return {ph:[],el:[],acc:0,acc2:0};},
  draw(c,W,H,p,st,C,t,dt){
    const phi=PE_METALS[p.mt][0], E=1240/p.l, K=E-phi, emit=K>0, col=wlColor(p.l)||(p.l<380?C.accent:C.bad);
    const tx=20, ty=40, tw=W*.56, th=H-80, plx=tx+30, clx=tx+tw-30;
    c.strokeStyle=C.line;c.lineWidth=2;rrect(c,tx,ty,tw,th,30);c.stroke();txt(c,'vacuum',tx+tw/2,ty+th-10,C.muted,10,'center');
    c.fillStyle=C.muted;c.fillRect(plx-6,ty+30,8,th-60);c.fillStyle=C.fg;c.fillRect(clx,ty+30,6,th-60);
    const lx=tx+tw*.55, ly=12;c.fillStyle=col;c.beginPath();c.arc(lx,ly+6,8,0,TAU);c.fill();
    st.acc+=dt*p.I*.4;while(st.acc>1){st.acc--;st.ph.push({u:0,y:ty+40+Math.random()*(th-80)});}
    st.ph=st.ph.filter(q=>{q.u+=dt*1.6;const x=lx+(plx-lx)*q.u, y=ly+(q.y-ly)*q.u;c.strokeStyle=col;c.lineWidth=1.6;c.beginPath();for(let k=0;k<10;k++){const xx=x+k*1.5*(lx-plx)/120, yy=y+k*1.5*(ly-q.y)/120+3*Math.sin(k*1.4);k?c.lineTo(xx,yy):c.moveTo(xx,yy);}c.stroke();
      if(q.u>=1){if(emit&&Math.random()<.8)st.el.push({x:plx,y:q.y,v:40+70*Math.sqrt(K)});return false;}return true;});
    st.el=st.el.filter(e=>{e.x+=e.v*dt;c.fillStyle=C.accent;c.beginPath();c.arc(e.x,e.y,3,0,TAU);c.fill();return e.x<clx;});
    const cur=emit?p.I:0;txt(c,'photocurrent '+(cur*.02).toFixed(2)+' μA',tx+tw/2,ty-8,C.fg,11,'center',600);
    const gx=tx+tw+40, gy=30, gw=W-gx-16, gh=H-70;axes(c,gx,gy,gw,gh,C,'ν (10¹⁴ Hz)','V₀ (V)');
    const nmax=20, X=n=>gx+n/nmax*gw, Y=v=>gy+gh-v/6*gh, n0=phi/4.136e-15/1e14;
    c.strokeStyle=C.accent;c.lineWidth=2;line(c,X(n0),Y(0),X(nmax),Y(4.136e-15*nmax*1e14-phi));
    txt(c,'ν₀',X(n0),Y(0)+14,C.accent,11,'center',700);
    const nu=3e8/(p.l*1e-9)/1e14;c.fillStyle=emit?C.accent2:C.bad;c.beginPath();c.arc(X(Math.min(nu,nmax)),Y(Math.max(0,K)),6,0,TAU);c.fill();
    txt(c,'slope = h/e',gx+gw,gy+12,C.muted,10,'right');
  },
  read(p){const phi=PE_METALS[p.mt][0], E=1240/p.l, K=E-phi;return [['Photon energy hc/λ',E.toFixed(2)+' eV'],['Work function φ₀',phi+' eV'],['K_max',K>0?K.toFixed(2)+' eV':'no emission'],['Stopping potential V₀',K>0?K.toFixed(2)+' V':'—'],['Threshold λ₀',(1240/phi).toFixed(0)+' nm']];}
};

/* ============ 12-12 Bohr atom ============ */
S.bohr = {
  title:'Bohr model of hydrogen', hint:'Pick a starting and final level. Dropping down emits a photon; jumping up needs one absorbed. Lines ending on n = 2 are the visible Balmer series.',
  aspect:.6, controls:[{k:'ni',label:'Initial level nᵢ',min:1,max:7,step:1,v:3},{k:'nf',label:'Final level n_f',min:1,max:7,step:1,v:2}],
  reset:true, init(){return {t:0,a:0};},
  draw(c,W,H,p,st,C,t,dt){
    st.t+=dt;if(st.t>3.4)st.t=0;st.a+=dt*2.2;
    const ni=p.ni,nf=p.nf,cx=W*.3,cy=H/2,R=n=>14+Math.min(W*.27,H*.44)/7*n;
    for(let n=1;n<=7;n++){c.strokeStyle=n===ni||n===nf?C.accent:C.grid;c.lineWidth=n===ni||n===nf?1.6:1;c.beginPath();c.arc(cx,cy,R(n),0,TAU);c.stroke();}
    c.fillStyle=C.pos;c.beginPath();c.arc(cx,cy,6,0,TAU);c.fill();
    const dE=13.6*(1/(nf*nf)-1/(ni*ni)), lam=Math.abs(dE)>0?1240/Math.abs(dE):0, col=wlColor(lam)||C.accent2;
    let n=ni, r;
    if(ni===nf||st.t<1.4) r=R(ni); else if(st.t<1.7){const u=(st.t-1.4)/.3;r=R(ni)+(R(nf)-R(ni))*u;} else r=R(nf);
    const ex=cx+r*Math.cos(st.a), ey=cy+r*Math.sin(st.a);c.fillStyle=C.accent;c.beginPath();c.arc(ex,ey,5,0,TAU);c.fill();
    if(ni!==nf&&st.t>1.5){const d=(st.t-1.5)*120, emitting=ni>nf, dir=emitting?1:-1, sx=emitting?cx+R(nf)+d:cx+R(Math.max(ni,nf))+120-d*.9, sy=cy-H*.25;
      if(emitting||d<100){c.strokeStyle=col;c.lineWidth=2;c.beginPath();for(let k=0;k<40;k++){const xx=sx+k*1.5,yy=sy+5*Math.sin(k*.8);k?c.lineTo(xx,yy):c.moveTo(xx,yy);}c.stroke();txt(c,emitting?'photon out':'photon in',sx,sy-10,col,10);}}
    const lx=W*.64, lw=W*.3, top=24, bot=H-30, Y=E=>top+(-E/14)*(bot-top)*-1+ (bot-top), YE=E=>bot-(E+14)/14*(bot-top);
    for(let k=1;k<=7;k++){const E=-13.6/(k*k), y=YE(E);c.strokeStyle=k===ni||k===nf?C.accent:C.muted;c.lineWidth=k===ni||k===nf?2:1;line(c,lx,y,lx+lw,y);if(k<=4||k===7)txt(c,'n='+k+'  '+E.toFixed(2)+' eV',lx+lw,y-3,C.muted,9,'right');}
    c.strokeStyle=C.muted;c.setLineDash([3,3]);line(c,lx,YE(0),lx+lw,YE(0));c.setLineDash([]);txt(c,'0 (free)',lx,YE(0)-4,C.muted,9);
    if(ni!==nf) arrow(c,lx+lw*.35,YE(-13.6/(ni*ni)),lx+lw*.35,YE(-13.6/(nf*nf)),col,2.6);
  },
  read(p){const ni=p.ni,nf=p.nf;if(ni===nf)return [['Transition','none (choose different levels)']];const dE=13.6*(1/(Math.min(ni,nf)**2)-1/(Math.max(ni,nf)**2)), lam=1240/dE, low=Math.min(ni,nf), ser=['Lyman','Balmer','Paschen','Brackett','Pfund','Humphreys'][low-1];
    return [['Process',ni>nf?'Emission':'Absorption'],['Photon energy',dE.toFixed(3)+' eV'],['Wavelength',lam.toFixed(1)+' nm'],['Series',ser],['Region',lam<400?'Ultraviolet':lam<=700?'Visible':'Infrared'],['Orbit radius ratio','r ∝ n² → '+(ni*ni)+' : '+(nf*nf)]];}
};

/* ============ 12-13 Binding energy curve ============ */
const BE_PTS=[[2,1.11,'²H'],[3,2.83,'³H'],[4,7.07,'⁴He'],[6,5.33,'⁶Li'],[7,5.61,'⁷Li'],[9,6.46,'⁹Be'],[12,7.68,'¹²C'],[14,7.48,'¹⁴N'],[16,7.98,'¹⁶O'],[20,8.03,'²⁰Ne'],[56,8.79,'⁵⁶Fe'],[235,7.59,'²³⁵U'],[238,7.57,'²³⁸U']];
function beA(A){ if(A<20){let i=BE_PTS.findIndex(q=>q[0]>=A);if(i<=0)return A<2?0:BE_PTS[0][1];const a=BE_PTS[i-1],b=BE_PTS[i];return a[1]+(b[1]-a[1])*(A-a[0])/(b[0]-a[0]);}
  const Z=A/(2+.0155*Math.pow(A,2/3)), B=15.75*A-17.8*Math.pow(A,2/3)-.711*Z*Z/Math.pow(A,1/3)-23.7*Math.pow(A-2*Z,2)/A;return B/A; }
S.binding = {
  title:'Binding energy per nucleon', hint:'Move along the curve. Anything that moves nuclei towards the iron peak releases energy: fusion from the left, fission from the right.',
  aspect:.58, controls:[{k:'A',label:'Mass number A',min:2,max:240,step:1,v:235}],
  draw(c,W,H,p,st,C){
    const gx=50, gy=24, gw=W-80, gh=H-64, X=A=>gx+A/240*gw, Y=b=>gy+gh-b/9.5*gh;
    axes(c,gx,gy,gw,gh,C,'mass number A','B/A (MeV)');
    for(let b=2;b<=8;b+=2)txt(c,String(b),gx-6,Y(b)+4,C.muted,10,'right');for(let A=50;A<=200;A+=50)txt(c,String(A),X(A),gy+gh+14,C.muted,10,'center');
    c.fillStyle=C.accent;c.globalAlpha=.08;c.fillRect(X(2),gy,X(56)-X(2),gh);c.fillStyle=C.accent2;c.fillRect(X(56),gy,X(240)-X(56),gh);c.globalAlpha=1;
    txt(c,'fusion releases energy →',X(4),gy+14,C.accent,10);txt(c,'← fission releases energy',X(236),gy+14,C.accent2,10,'right');
    const pts=[];for(let A=2;A<=240;A++)pts.push([X(A),Y(beA(A))]);plot(c,pts,C,C.fg,2);
    BE_PTS.forEach(q=>{c.fillStyle=C.accent;c.beginPath();c.arc(X(q[0]),Y(q[1]),3.5,0,TAU);c.fill();if(['⁴He','⁵⁶Fe','²³⁵U','²H','¹²C'].includes(q[2]))txt(c,q[2],X(q[0])+5,Y(q[1])-6,C.fg,11,'left',600);});
    const b=beA(p.A);c.strokeStyle=C.muted;c.setLineDash([3,3]);line(c,X(p.A),Y(0),X(p.A),Y(b));c.setLineDash([]);c.fillStyle=C.accent2;c.beginPath();c.arc(X(p.A),Y(b),7,0,TAU);c.fill();
  },
  read(p){const A=p.A,b=beA(A), R=1.2*Math.pow(A,1/3);let ex;
    if(A>=100){const h=A/2;ex=['Split into two A ≈ '+Math.round(h),'releases ≈ '+(A*(beA(h)-b)).toFixed(0)+' MeV'];}
    else if(A<=28){ex=['Fuse two of these','releases ≈ '+(2*A*(beA(2*A)-b)).toFixed(1)+' MeV'];}
    else ex=['Near the peak','little to gain either way'];
    return [['B/A',b.toFixed(2)+' MeV'],['Total binding energy',(b*A).toFixed(0)+' MeV'],['Nuclear radius 1.2A^⅓',R.toFixed(2)+' fm'],[ex[0],ex[1]]];}
};

/* ============ 12-14 Rectifier ============ */
S.rectifier = {
  title:'Diode rectifier', hint:'A half-wave rectifier throws away every other half-cycle. Full-wave flips them, doubling the ripple frequency to 100 Hz.',
  aspect:.62, controls:[{k:'mode',label:'Circuit',type:'select',opts:[['half','Half-wave (1 diode)'],['full','Full-wave (2 diodes)']],v:'half'},{k:'Vm',label:'Peak input V_m',min:2,max:20,step:.5,v:10,unit:'V'},{k:'si',label:'Real silicon diode (0.7 V drop)',type:'toggle',v:true}],
  draw(c,W,H,p,st,C,t){
    const drop=p.si?.7:0, Vm=p.Vm, cyc=3, gx=40, gw=W*.62, gh=(H-80)/2;
    const out=s=>{const v=Vm*Math.sin(s); if(p.mode==='half') return v>drop?v-drop:0; return Math.abs(v)>drop?Math.abs(v)-drop:0;};
    const draw=(gy,fn,col,lab,sym)=>{axes(c,gx,gy,gw,gh,C,'',lab);const z=sym?gy+gh/2:gy+gh;c.strokeStyle=C.muted;c.setLineDash([2,3]);line(c,gx,z,gx+gw,z);c.setLineDash([]);
      const pts=[];for(let i=0;i<=300;i++){const s=TAU*cyc*i/300;pts.push([gx+gw*i/300,z-fn(s)/(Vm*1.1)*(sym?gh/2:gh)]);}plot(c,pts,C,col,2.2);
      const s0=(t*1.5)%(TAU*cyc);c.fillStyle=col;c.beginPath();c.arc(gx+gw*s0/(TAU*cyc),z-fn(s0)/(Vm*1.1)*(sym?gh/2:gh),5,0,TAU);c.fill();};
    draw(24,s=>Vm*Math.sin(s),C.accent2,'input (AC)',true);
    draw(24+gh+36,out,C.accent,'output (pulsating DC)',false);
    // I-V curve
    const ix=gx+gw+40, iw=W-ix-16, iy=24, ih=H-70;axes(c,ix,iy,iw,ih,C,'V','I');
    const V0=p.si?.7:.02, Xv=v=>ix+iw*.35+v/1.5*iw*.6, Yi=i=>iy+ih*.8-i*ih*.75;
    const pts=[];for(let v=-1;v<=1.4;v+=.01){const i=v<0?-.01:Math.min(1.1,(Math.exp((v-V0)*12)-Math.exp(-V0*12))/1);pts.push([Xv(v),Yi(Math.min(i,1.05))]);}plot(c,pts.filter(q=>q[1]>iy),C,C.fg,2);
    c.strokeStyle=C.muted;c.setLineDash([2,3]);line(c,Xv(0),iy,Xv(0),iy+ih);line(c,ix,Yi(0),ix+iw,Yi(0));c.setLineDash([]);
    txt(c,'knee '+(p.si?'0.7':'0')+' V',Xv(V0),Yi(0)+14,C.muted,10,'center');txt(c,'forward',ix+iw-4,iy+12,C.muted,10,'right');txt(c,'reverse',ix+2,Yi(0)-6,C.muted,10);
  },
  read(p){const drop=p.si?.7:0, Vp=Math.max(0,p.Vm-drop), avg=(p.mode==='half'?1:2)*Vp/Math.PI;return [['Ripple frequency',p.mode==='half'?'50 Hz':'100 Hz'],['Output peak',Vp.toFixed(2)+' V'],['Average DC (≈)',avg.toFixed(2)+' V'],['Diodes used',p.mode==='half'?'1':'2 (centre-tap)']];}
};

/* ============ framework ============ */
function readColors(el){const cs=getComputedStyle(el);const g=k=>cs.getPropertyValue(k).trim();
  return {bg:g('--bg'),fg:g('--ink'),muted:g('--ink-3'),grid:g('--grid'),line:g('--line'),panel:g('--panel'),panel2:g('--panel-2'),accent:g('--accent'),accentDeep:g('--accent-deep'),accent2:g('--trace'),good:g('--good'),bad:g('--bad'),pos:g('--pos'),neg:g('--neg')};}

window.mountSim = function(host, key, onTouch){
  const def=S[key]; if(!def){host.textContent='Simulation missing';return ()=>{};}
  host.innerHTML='';
  const root=document.createElement('div');root.className='sim';
  root.innerHTML=`<div class="sim-stage"><canvas aria-label="${def.title} simulation" role="img"></canvas><button class="sim-pause" type="button" aria-label="Pause">❚❚</button></div>
  <div class="sim-side"><p class="sim-hint">${def.hint}</p><div class="sim-ctrls"></div><dl class="sim-read"></dl></div>`;
  host.appendChild(root);
  const cv=root.querySelector('canvas'), ctx=cv.getContext('2d'), ctrls=root.querySelector('.sim-ctrls'), rd=root.querySelector('.sim-read'), pauseB=root.querySelector('.sim-pause');
  const p={}; const inputs={};
  def.controls.forEach(ct=>{
    const id='c-'+key+'-'+ct.k, w=document.createElement('div');w.className='ctl';
    if(ct.type==='button'){w.innerHTML=`<button type="button" class="btn small" id="${id}">${ct.label}</button>`;w.querySelector('button').onclick=()=>{def.onButton&&def.onButton(ct.k,st,p);touch();};}
    else if(ct.type==='toggle'){p[ct.k]=ct.v;w.innerHTML=`<label class="tog"><input type="checkbox" id="${id}" ${ct.v?'checked':''}><span>${ct.label}</span></label>`;w.querySelector('input').onchange=e=>{p[ct.k]=e.target.checked;changed();};}
    else if(ct.type==='select'){p[ct.k]=ct.v;w.innerHTML=`<label for="${id}">${ct.label}</label><select id="${id}">${ct.opts.map(o=>`<option value="${o[0]}" ${String(o[0])===String(ct.v)?'selected':''}>${o[1]}</option>`).join('')}</select>`;
      w.querySelector('select').onchange=e=>{const v=e.target.value;p[ct.k]=isNaN(+v)?v:+v;changed();};}
    else {p[ct.k]=ct.v;const fmt=v=>ct.fmt?ct.fmt(v):(+v).toFixed(ct.step<.01?3:ct.step<.1?2:ct.step<1?1:0)+(ct.unit?' '+ct.unit:'');
      w.innerHTML=`<div class="ctl-top"><label for="${id}">${ct.label}</label><output>${fmt(ct.v)}</output></div><input type="range" id="${id}" min="${ct.min}" max="${ct.max}" step="${ct.step}" value="${ct.v}">`;
      const inp=w.querySelector('input'), out=w.querySelector('output');inp.oninput=()=>{p[ct.k]=+inp.value;out.textContent=fmt(inp.value);changed();};
      inputs[ct.k]={set(v){inp.value=v;p[ct.k]=+v;out.textContent=fmt(v);}};}
    ctrls.appendChild(w);
  });
  let st=def.init?def.init(p):{}, C=readColors(root), t=0, last=performance.now(), raf=0, paused=false, frame=0, W=0, H=0, touched=false;
  function touch(){ if(!touched){touched=true;onTouch&&onTouch();} }
  function changed(){ if(def.reset) st=def.init(p); touch(); }
  const setP=(k,v)=>{inputs[k]&&inputs[k].set(v); if(def.reset) st=def.init(p);};
  function size(){const r=cv.parentElement.getBoundingClientRect();W=Math.max(280,r.width);H=Math.max(240,Math.min(520,W*(def.aspect||.6)));const dpr=Math.min(2,window.devicePixelRatio||1);cv.width=W*dpr;cv.height=H*dpr;cv.style.height=H+'px';ctx.setTransform(dpr,0,0,dpr,0,0);}
  const ro=new ResizeObserver(size);ro.observe(cv.parentElement);size();
  const pos=e=>{const r=cv.getBoundingClientRect();return [e.clientX-r.left,e.clientY-r.top];};
  let down=false;
  cv.addEventListener('pointerdown',e=>{down=true;cv.setPointerCapture(e.pointerId);const [x,y]=pos(e);st.mouse=[x,y];if(def.drag){def.drag(x,y,W,H,setP,st,true);touch();}});
  cv.addEventListener('pointermove',e=>{const [x,y]=pos(e);st.mouse=[x,y];if(down&&def.drag)def.drag(x,y,W,H,setP,st,false);});
  cv.addEventListener('pointerup',()=>{down=false;});
  pauseB.onclick=()=>{paused=!paused;pauseB.textContent=paused?'▶':'❚❚';pauseB.setAttribute('aria-label',paused?'Play':'Pause');};
  const mq=matchMedia('(prefers-color-scheme: dark)'), mqh=()=>{C=readColors(root);};mq.addEventListener('change',mqh);
  const mo=new MutationObserver(mqh);mo.observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']});
  function loop(now){const dt=Math.min(.05,(now-last)/1000);last=now;if(!paused)t+=dt;
    ctx.clearRect(0,0,W,H);ctx.lineCap='round';ctx.lineJoin='round';
    try{def.draw(ctx,W,H,p,st,C,t,paused?0:dt);}catch(err){console.error(key,err);}
    if(frame++%8===0&&def.read){try{rd.innerHTML=def.read(p,st).map(([a,b])=>`<div><dt>${a}</dt><dd>${b??''}</dd></div>`).join('');}catch(e){}}
    raf=requestAnimationFrame(loop);}
  raf=requestAnimationFrame(loop);
  return ()=>{cancelAnimationFrame(raf);ro.disconnect();mo.disconnect();mq.removeEventListener('change',mqh);};
};
})();
