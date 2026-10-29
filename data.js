/* NCERT Physics Lab — chapter content (Class 11 & 12, rationalised NCERT, 2026-27 session) */
(function(){
const pick = a => a[Math.floor(Math.random()*a.length)];
const sci = (x, s=3) => {
  if (x === 0) return '0';
  const ax = Math.abs(x);
  if (ax >= 1e5 || ax < 1e-3) {
    const e = Math.floor(Math.log10(ax));
    let m = x / Math.pow(10, e);
    m = Number(m.toPrecision(s));
    if (Math.abs(m) >= 10) { m = m / 10; return `${Number(m.toPrecision(s))}×10<sup>${e+1}</sup>`; }
    return `${m}×10<sup>${e}</sup>`;
  }
  return String(Number(x.toPrecision(s)));
};
window.PHX = { pick, sci };

const g = 9.8;

window.CHAPTERS = [
/* ================= CLASS 11 ================= */
{ id:'c11-1', cls:11, n:1, title:'Units and Measurements', unit:'Physical World and Measurement', sim:'vernier',
  hook:'A measurement is only as useful as its unit and its uncertainty. This chapter teaches you to read instruments, carry errors honestly through a calculation, and check any formula with dimensions alone.',
  concepts:[
    ['SI base units','Seven base quantities: length (m), mass (kg), time (s), electric current (A), temperature (K), amount of substance (mol), luminous intensity (cd). Every other unit is built from these.'],
    ['Significant figures','All non-zero digits count. Zeros between non-zero digits count. Leading zeros never count (0.0045 has 2). Trailing zeros count only when there is a decimal point (2.500 has 4). In multiplication/division, keep as many significant figures as the least precise factor; in addition/subtraction, keep the fewest decimal places.'],
    ['Errors in measurement','Systematic errors push readings one way (zero error, faulty calibration); random errors scatter both ways and shrink by averaging. Absolute error is |true − measured|; relative error is Δa/a; percentage error is relative error × 100.'],
    ['Combining errors','Adding or subtracting quantities adds their absolute errors. Multiplying or dividing adds their relative errors. Raising to a power multiplies the relative error by that power, so the quantity with the highest power dominates.'],
    ['Dimensional analysis','Every physical quantity can be written as [M<sup>a</sup>L<sup>b</sup>T<sup>c</sup>]. A correct equation must have the same dimensions on both sides. You can use this to check equations and to guess how a quantity depends on others, but it cannot find dimensionless constants like 2π.']
  ],
  formulas:[
    ['Mean absolute error','Δa<sub>mean</sub> = (Σ|Δa<sub>i</sub>|) / n'],
    ['Sum or difference','Z = A ± B &nbsp;⇒&nbsp; ΔZ = ΔA + ΔB'],
    ['Product or quotient','Z = AB or A/B &nbsp;⇒&nbsp; ΔZ/Z = ΔA/A + ΔB/B'],
    ['Powers','Z = A<sup>p</sup>B<sup>q</sup>/C<sup>r</sup> &nbsp;⇒&nbsp; ΔZ/Z = pΔA/A + qΔB/B + rΔC/C'],
    ['Vernier least count','LC = 1 MSD − 1 VSD (= 0.1 mm for a 10-division vernier)'],
    ['Reading','Reading = MSR + (coinciding VSD × LC) − zero error']
  ],
  apps:[
    ['GPS needs nanoseconds','Light travels about 30 cm in one nanosecond. A satellite clock off by 100 ns would place you 30 m away from where you actually are, which is why GPS satellites carry atomic clocks.'],
    ['Engine part tolerances','A piston might be specified as 80.00 ± 0.02 mm. Machinists use vernier and micrometer readings with these exact error rules to decide whether a part is accepted or scrapped.'],
    ['Medicine doses','A 5% error in measuring a child\'s mass becomes a 5% error in a mass-based dose. For drugs with a narrow safe range, nurses use calibrated scales for this reason.']
  ],
  mcq:[
    {q:'How many significant figures are in 0.007020?', o:['3','4','6','7'], a:1, s:'Leading zeros (0.00) are not significant. The digits 7, 0, 2 and the trailing 0 after the decimal point are significant, so there are 4.'},
    {q:'The dimensional formula of Planck\'s constant h is:', o:['[ML<sup>2</sup>T<sup>−2</sup>]','[ML<sup>2</sup>T<sup>−1</sup>]','[MLT<sup>−1</sup>]','[M<sup>0</sup>L<sup>0</sup>T<sup>0</sup>]'], a:1, s:'From E = hν, h = E/ν. Energy is [ML<sup>2</sup>T<sup>−2</sup>] and frequency is [T<sup>−1</sup>], so h = [ML<sup>2</sup>T<sup>−1</sup>].'},
    {q:'g is found from g = 4π<sup>2</sup>L/T<sup>2</sup>. If L has 1% error and T has 2% error, the error in g is:', o:['3%','4%','5%','1%'], a:2, s:'Δg/g = ΔL/L + 2(ΔT/T) = 1% + 2 × 2% = 5%. The time measurement matters more because it is squared.'},
    {q:'Which pair of quantities has the same dimensions?', o:['Force and pressure','Work and torque','Power and energy','Force and momentum'], a:1, s:'Work = force × distance and torque = force × lever arm. Both are [ML<sup>2</sup>T<sup>−2</sup>], even though torque is a vector and work is a scalar.'},
    {q:'Rounded to 3 significant figures using the NCERT rule, 2.745 becomes:', o:['2.75','2.74','2.7','2.750'], a:1, s:'When the digit dropped is exactly 5 and the preceding digit is even (4), the preceding digit is left unchanged. So 2.745 → 2.74. (2.735 would become 2.74 because 3 is odd.)'}
  ],
  gen(){
    const p = pick([1,2,3]), q = pick([1,2]), r = pick([1,2]);
    const a = pick([0.5,1,1.5,2]), b = pick([0.5,1,2,3]), c = pick([0.5,1,1.5]);
    const ans = p*a + q*b + r*c;
    return { q:`A quantity is calculated as Z = A<sup>${p}</sup>B<sup>${q}</sup>/C<sup>${r}</sup>. The percentage errors are ${a}% in A, ${b}% in B and ${c}% in C. What is the maximum percentage error in Z?`,
      ans, unit:'%', steps:[
        'For a product of powers, relative errors add, each multiplied by its power. Division adds errors too; it never subtracts them.',
        `ΔZ/Z = ${p}(ΔA/A) + ${q}(ΔB/B) + ${r}(ΔC/C)`,
        `= ${p}×${a} + ${q}×${b} + ${r}×${c} = <b>${ans}%</b>`]};
  }
},
{ id:'c11-2', cls:11, n:2, title:'Motion in a Straight Line', unit:'Kinematics', sim:'kinematics',
  hook:'Position, velocity and acceleration are three views of the same motion. Learn to move between them using graph slopes and areas, and you can answer almost any one-dimensional question.',
  concepts:[
    ['Distance vs displacement','Distance is the total path length (always positive). Displacement is the change in position, with a sign that shows direction. A runner finishing one lap of a track covers 400 m of distance but has zero displacement.'],
    ['Velocity','Average velocity is displacement ÷ time. Instantaneous velocity is dx/dt, the slope of the position–time graph at that instant. Speed is the magnitude of velocity.'],
    ['Acceleration','Acceleration a = dv/dt is the slope of the velocity–time graph. Negative acceleration does not always mean slowing down: an object moving in the negative direction with negative acceleration is speeding up.'],
    ['Area under a v–t graph','The area between the v–t graph and the time axis equals displacement. Areas below the axis count as negative displacement.'],
    ['Free fall','Without air resistance, every object near Earth\'s surface falls with the same acceleration g ≈ 9.8 m/s² downward, whatever its mass.'],
    ['Relative velocity','The velocity of A as seen by B is v<sub>AB</sub> = v<sub>A</sub> − v<sub>B</sub>. Two cars moving in the same direction at similar speeds appear almost stationary to each other.']
  ],
  formulas:[
    ['First equation','v = u + at'],
    ['Second equation','s = ut + ½at<sup>2</sup>'],
    ['Third equation','v<sup>2</sup> = u<sup>2</sup> + 2as'],
    ['Distance in n<sup>th</sup> second','s<sub>n</sub> = u + a(2n − 1)/2'],
    ['Relative velocity','v<sub>AB</sub> = v<sub>A</sub> − v<sub>B</sub>'],
    ['Free fall from rest','v = √(2gh), &nbsp; t = √(2h/g)']
  ],
  apps:[
    ['Why speed limits are strict','Braking distance is u²/2a, so it grows with the square of speed. At 80 km/h a car needs four times the braking distance it needs at 40 km/h. Add the distance covered during your reaction time and the gap becomes larger still.'],
    ['Reaction-time ruler test','Drop a ruler between a friend\'s fingers. The distance it falls before they catch it gives their reaction time from t = √(2h/g). A 20 cm fall means about 0.2 s.'],
    ['Train overtaking on parallel tracks','From inside a train overtaking another, the other train seems to move slowly backwards. You are seeing the relative velocity, which is the difference of the two speeds.']
  ],
  mcq:[
    {q:'A ball is thrown straight up at 20 m/s. Taking g = 10 m/s², its maximum height is:', o:['10 m','20 m','40 m','2 m'], a:1, s:'At the top v = 0. Using v² = u² − 2gh: 0 = 400 − 20h, so h = 20 m.'},
    {q:'The area under a velocity–time graph gives:', o:['Acceleration','Displacement','Jerk','Average speed'], a:1, s:'Area = velocity × time, which is displacement. The slope of the same graph gives acceleration.'},
    {q:'A car starts from rest with acceleration 2 m/s². How far does it go in 5 s?', o:['10 m','20 m','25 m','50 m'], a:2, s:'s = ut + ½at² = 0 + ½ × 2 × 25 = 25 m.'},
    {q:'Two trains move in the same direction at 54 km/h and 36 km/h. The speed of the faster one relative to the slower is:', o:['90 km/h','5 m/s','15 m/s','10 m/s'], a:1, s:'Relative speed = 54 − 36 = 18 km/h = 18 × (5/18) m/s = 5 m/s.'},
    {q:'A straight-line v–t graph slopes downward and crosses the time axis. The body:', o:['Moves with constant velocity','Slows down, stops, then moves in the opposite direction','Is always at rest','Speeds up forever'], a:1, s:'A constant negative slope means constant negative acceleration. Velocity falls to zero where the line meets the axis and then becomes negative, so the body reverses.'}
  ],
  gen(){
    const v = pick([36,54,72,90,108]), a = pick([4,5,6,8]), tr = pick([0.5,0.7,1.0]);
    const vm = v/3.6, d1 = vm*tr, d2 = vm*vm/(2*a), ans = d1+d2;
    return { q:`A driver moving at ${v} km/h sees an obstacle. Her reaction time is ${tr} s and the brakes then give a steady deceleration of ${a} m/s². What is the total stopping distance?`,
      ans, unit:'m', steps:[
        `Convert speed: ${v} km/h × 5/18 = ${sci(vm)} m/s`,
        `During the reaction time the car moves at constant speed: d₁ = ${sci(vm)} × ${tr} = ${sci(d1)} m`,
        `While braking, v² = u² − 2ad ⇒ d₂ = u²/2a = ${sci(vm)}²/(2×${a}) = ${sci(d2)} m`,
        `Total = ${sci(d1)} + ${sci(d2)} = <b>${sci(ans)} m</b>`]};
  }
},
{ id:'c11-3', cls:11, n:3, title:'Motion in a Plane', unit:'Kinematics', sim:'projectile',
  hook:'Two-dimensional motion splits into two independent one-dimensional motions. A projectile moves at constant speed sideways while falling freely downward, and the two combine into a parabola.',
  concepts:[
    ['Scalars and vectors','Scalars have magnitude only (mass, time, energy). Vectors have magnitude and direction (displacement, velocity, force) and add by the triangle or parallelogram law, not by simple arithmetic.'],
    ['Resolving vectors','Any vector A at angle θ to the x-axis splits into A<sub>x</sub> = A cosθ and A<sub>y</sub> = A sinθ. Adding vectors is easiest by adding their components separately.'],
    ['Projectile motion','With no air resistance, horizontal velocity u cosθ stays constant while vertical motion has acceleration −g. The path is a parabola.'],
    ['Complementary angles','Launch angles θ and 90° − θ give the same range (30° and 60°, for example). The range is greatest at 45°.'],
    ['Uniform circular motion','Speed is constant but direction keeps changing, so there is an acceleration v²/r pointing towards the centre (centripetal acceleration).']
  ],
  formulas:[
    ['Resultant of two vectors','R = √(A<sup>2</sup> + B<sup>2</sup> + 2AB cosθ)'],
    ['Time of flight','T = 2u sinθ / g'],
    ['Maximum height','H = u<sup>2</sup>sin<sup>2</sup>θ / 2g'],
    ['Horizontal range','R = u<sup>2</sup>sin2θ / g &nbsp; (max u<sup>2</sup>/g at 45°)'],
    ['Path equation','y = x tanθ − gx<sup>2</sup> / (2u<sup>2</sup>cos<sup>2</sup>θ)'],
    ['Centripetal acceleration','a<sub>c</sub> = v<sup>2</sup>/r = ω<sup>2</sup>r, &nbsp; v = ωr']
  ],
  apps:[
    ['Javelin and shot-put','The ideal angle is 45° only when launch and landing heights are equal. Shot-putters release the shot about 2 m above ground, so their best angle is slightly less than 45°, closer to 40°.'],
    ['Garden hose and sprinklers','Tilting a hose changes the range exactly as R = u²sin2θ/g predicts. Sprinklers set at about 45° cover the widest circle.'],
    ['Rain and umbrellas','When you walk in vertical rain, the rain seems to come at you at an angle because of relative velocity. You tilt your umbrella forward by angle tan⁻¹(v<sub>you</sub>/v<sub>rain</sub>).']
  ],
  mcq:[
    {q:'For a fixed launch speed, the horizontal range is maximum when the launch angle is:', o:['30°','45°','60°','90°'], a:1, s:'R = u²sin2θ/g is greatest when sin2θ = 1, which means 2θ = 90°, so θ = 45°.'},
    {q:'Which pair of launch angles gives equal ranges for the same speed?', o:['20° and 40°','30° and 60°','45° and 90°','10° and 20°'], a:1, s:'sin2θ = sin(180° − 2θ), so θ and 90° − θ give the same range. 30° and 60° are complementary.'},
    {q:'At the highest point of a projectile\'s path:', o:['Velocity and acceleration are both zero','Velocity is horizontal and acceleration is g downward','Velocity is zero and acceleration is g','Acceleration is horizontal'], a:1, s:'Only the vertical component of velocity becomes zero. The horizontal component u cosθ remains, and gravity still acts downward.'},
    {q:'The resultant of 3 N and 4 N forces at right angles is:', o:['7 N','1 N','5 N','12 N'], a:2, s:'R = √(3² + 4²) = √25 = 5 N.'},
    {q:'A stone on a 0.5 m string is whirled at 2 revolutions per second. Its centripetal acceleration is about:', o:['79 m/s²','12.6 m/s²','39 m/s²','4 m/s²'], a:0, s:'ω = 2π × 2 = 4π rad/s. a = ω²r = 16π² × 0.5 = 8π² ≈ 79 m/s².'}
  ],
  gen(){
    const u = pick([10,12,15,18,20,25,30]), th = pick([15,20,30,40,50,60,70]);
    const rad = th*Math.PI/180, ans = u*u*Math.sin(2*rad)/g;
    return { q:`A ball is kicked at ${u} m/s at ${th}° above the horizontal on level ground. Find its horizontal range (g = 9.8 m/s²).`,
      ans, unit:'m', steps:[
        'R = u² sin 2θ / g',
        `sin 2θ = sin ${2*th}° = ${sci(Math.sin(2*rad),4)}`,
        `R = ${u}² × ${sci(Math.sin(2*rad),4)} / 9.8 = <b>${sci(ans)} m</b>`]};
  }
},
{ id:'c11-4', cls:11, n:4, title:'Laws of Motion', unit:'Laws of Motion', sim:'incline',
  hook:'Newton\'s three laws explain why things start, stop and turn. The key skill is drawing a clean free-body diagram for each object, then writing F = ma along each direction.',
  concepts:[
    ['First law (inertia)','A body stays at rest or in uniform straight-line motion unless a net external force acts on it. Passengers lurch forward when a bus brakes because their bodies tend to keep moving.'],
    ['Second law','Net force equals the rate of change of momentum: F = dp/dt. For constant mass this is F = ma. Force and acceleration point the same way.'],
    ['Third law','Forces come in equal and opposite pairs acting on different bodies. They never cancel each other, because they act on different objects.'],
    ['Impulse and momentum','Impulse = force × time = change in momentum. Spreading a collision over a longer time reduces the peak force for the same change in momentum.'],
    ['Conservation of momentum','If no external force acts on a system, its total momentum stays constant. Guns recoil and rockets fly because of this.'],
    ['Friction','Static friction adjusts itself up to a maximum μ<sub>s</sub>N. Once sliding starts, kinetic friction μ<sub>k</sub>N acts, and it is usually a little smaller. Friction does not depend on contact area (to a good approximation).'],
    ['Circular motion and banking','Moving in a circle needs a net centripetal force mv²/r. On a level road friction supplies it; on a banked road, part of the normal force helps.']
  ],
  formulas:[
    ['Second law','F = dp/dt = ma'],
    ['Impulse','J = FΔt = Δp = m(v − u)'],
    ['Friction','f<sub>s</sub> ≤ μ<sub>s</sub>N, &nbsp; f<sub>k</sub> = μ<sub>k</sub>N'],
    ['Block on rough incline','a = g(sinθ − μ<sub>k</sub>cosθ); angle of repose: tanθ = μ<sub>s</sub>'],
    ['Level curve, max speed','v<sub>max</sub> = √(μ<sub>s</sub>rg)'],
    ['Banked road','v<sub>max</sub> = √[rg(μ + tanθ)/(1 − μtanθ)], &nbsp; v<sub>0</sub> = √(rg tanθ)'],
    ['Lift (apparent weight)','N = m(g + a) going up with acceleration a, m(g − a) going down']
  ],
  apps:[
    ['Crumple zones and airbags','In a crash your momentum must drop to zero. Airbags and crumple zones stretch the stopping time from a few milliseconds to tens of milliseconds, cutting the force on your body by the same factor.'],
    ['Rocket launches from Sriharikota','A rocket pushes hot gas backwards at high speed; by conservation of momentum the rocket gains forward momentum. No air is needed to push against.'],
    ['Banked race tracks and highway curves','Highway curves are tilted so that at the design speed v₀ = √(rg tanθ), cars can turn without relying on friction at all. That matters on wet roads.']
  ],
  mcq:[
    {q:'A gun recoils when fired. This is best explained by:', o:['Newton\'s first law only','Conservation of momentum','Conservation of energy only','Friction'], a:1, s:'Before firing, total momentum is zero. The bullet gains forward momentum, so the gun must gain an equal backward momentum. This is also an example of Newton\'s third law.'},
    {q:'A 2 kg block on a frictionless floor is pulled by a 10 N force. Its acceleration is:', o:['20 m/s²','5 m/s²','0.2 m/s²','12 m/s²'], a:1, s:'a = F/m = 10/2 = 5 m/s².'},
    {q:'A block just begins to slide when an incline is raised to angle θ. The coefficient of static friction is:', o:['sinθ','cosθ','tanθ','cotθ'], a:2, s:'At the point of slipping, mg sinθ = μ<sub>s</sub> mg cosθ, so μ<sub>s</sub> = tanθ. This θ is called the angle of repose.'},
    {q:'You stand on a scale in a lift accelerating upward at a. The scale reads:', o:['mg','m(g − a)','m(g + a)','zero'], a:2, s:'Net upward force must equal ma: N − mg = ma, so N = m(g + a). You feel heavier.'},
    {q:'A fielder pulls his hands back while catching a fast ball so that:', o:['The change in momentum is smaller','The impulse is larger','The catching time increases and the force decreases','The ball speeds up'], a:2, s:'The change in momentum is fixed by the ball. Increasing Δt in F = Δp/Δt reduces the force on the hands.'}
  ],
  gen(){
    const th = pick([30,37,45,53,60]), mu = pick([0.1,0.2,0.3,0.4]), m = pick([2,5,10]);
    const r = th*Math.PI/180, ans = g*(Math.sin(r)-mu*Math.cos(r));
    return { q:`A ${m} kg crate slides down a ramp inclined at ${th}°. The coefficient of kinetic friction is ${mu}. Find its acceleration down the ramp (g = 9.8 m/s²).`,
      ans, unit:'m/s²', steps:[
        'Along the slope: mg sinθ − μN = ma, and perpendicular to it N = mg cosθ.',
        'So a = g(sinθ − μ cosθ). The mass cancels.',
        `a = 9.8 × (sin${th}° − ${mu} × cos${th}°) = 9.8 × (${sci(Math.sin(r),3)} − ${sci(mu*Math.cos(r),3)})`,
        `a = <b>${sci(ans)} m/s²</b>`]};
  }
},
{ id:'c11-5', cls:11, n:5, title:'Work, Energy and Power', unit:'Work, Energy and Power', sim:'bounce',
  hook:'Energy is the accounting system of physics. Forces do work to move energy between kinetic and potential forms, and power tells you how fast that happens.',
  concepts:[
    ['Work','Work W = F·d = Fd cosθ. A force does no work if it is perpendicular to the displacement, which is why the string does no work on a stone whirled in a circle.'],
    ['Work–energy theorem','The net work done on a body equals its change in kinetic energy: W<sub>net</sub> = ΔK.'],
    ['Potential energy','Energy stored because of position or configuration. Near Earth, U = mgh. A spring compressed or stretched by x stores ½kx².'],
    ['Conservative forces','Gravity and spring forces are conservative: the work they do depends only on the start and end points. Friction is non-conservative; it turns mechanical energy into heat.'],
    ['Conservation of mechanical energy','If only conservative forces do work, K + U stays constant. Energy changes form but the total does not change.'],
    ['Collisions','Momentum is conserved in every collision. Kinetic energy is also conserved only in elastic collisions. In a perfectly inelastic collision the bodies stick together and the most KE is lost.']
  ],
  formulas:[
    ['Work','W = F·d = Fd cosθ'],
    ['Kinetic energy','K = ½mv<sup>2</sup> = p<sup>2</sup>/2m'],
    ['Spring PE','U = ½kx<sup>2</sup>'],
    ['Power','P = dW/dt = F·v'],
    ['Elastic collision (B at rest)','v<sub>1</sub> = (m<sub>1</sub> − m<sub>2</sub>)u<sub>1</sub>/(m<sub>1</sub>+m<sub>2</sub>), &nbsp; v<sub>2</sub> = 2m<sub>1</sub>u<sub>1</sub>/(m<sub>1</sub>+m<sub>2</sub>)'],
    ['Perfectly inelastic','v = (m<sub>1</sub>u<sub>1</sub> + m<sub>2</sub>u<sub>2</sub>)/(m<sub>1</sub> + m<sub>2</sub>)']
  ],
  apps:[
    ['Regenerative braking in EVs','Electric vehicles use the motor as a generator when braking, turning kinetic energy back into stored battery energy instead of wasting it as heat in brake pads.'],
    ['Hydroelectric dams','Water stored high up has potential energy mgh. As it falls through turbines it becomes kinetic energy and then electrical energy. Taller dams and larger flow give more power.'],
    ['Lift motor ratings','A lift carrying 8 people (about 600 kg) up 3 m in 2 s needs at least mgh/t ≈ 8.8 kW, before allowing for friction and motor losses.']
  ],
  mcq:[
    {q:'If the momentum of a body is doubled, its kinetic energy becomes:', o:['2 times','4 times','½ times','unchanged'], a:1, s:'K = p²/2m. Doubling p makes K four times larger.'},
    {q:'The work done by the centripetal force on a body in uniform circular motion is:', o:['Positive','Negative','Zero','mv²'], a:2, s:'The centripetal force is always perpendicular to the velocity, so cos 90° = 0 and no work is done. That is why the speed stays constant.'},
    {q:'A spring with k = 200 N/m is compressed by 0.1 m. The energy stored is:', o:['20 J','1 J','10 J','2 J'], a:1, s:'U = ½kx² = ½ × 200 × 0.01 = 1 J.'},
    {q:'In a head-on elastic collision of two equal masses, one initially at rest:', o:['Both move together','The moving one stops and the other moves off with its velocity','Both stop','The moving one bounces back with the same speed'], a:1, s:'With m₁ = m₂: v₁ = 0 and v₂ = u₁. The velocities are exchanged, as with Newton\'s cradle.'},
    {q:'A motor lifts 50 kg through 10 m in 5 s (g = 10 m/s²). Its minimum power is:', o:['100 W','500 W','1000 W','2500 W'], a:2, s:'P = mgh/t = 50 × 10 × 10 / 5 = 1000 W.'}
  ],
  gen(){
    const V = pick([500,1000,1500,2000]), h = pick([10,15,20,25]), t = pick([5,10]), eta = pick([0.6,0.7,0.8]);
    const out = V*g*h/(t*60), ans = out/eta;
    return { q:`A pump fills an overhead tank holding ${V} litres of water, ${h} m above the pump, in ${t} minutes. The pump is ${eta*100}% efficient. What electrical power does it draw? (1 L of water = 1 kg, g = 9.8 m/s²)`,
      ans, unit:'W', steps:[
        `Useful work = mgh = ${V} × 9.8 × ${h} = ${sci(V*g*h)} J`,
        `Useful power = work / time = ${sci(V*g*h)} / ${t*60} s = ${sci(out)} W`,
        `Input power = useful power / efficiency = ${sci(out)} / ${eta} = <b>${sci(ans)} W</b>`]};
  }
},
{ id:'c11-6', cls:11, n:6, title:'System of Particles and Rotational Motion', unit:'Motion of System of Particles and Rigid Body', sim:'rolling',
  hook:'Rotation mirrors linear motion: torque plays the role of force, moment of inertia plays the role of mass, and angular momentum is conserved just like linear momentum.',
  concepts:[
    ['Centre of mass','The point that moves as if all the mass were concentrated there and all external forces acted on it. A thrown spanner wobbles, but its centre of mass traces a clean parabola.'],
    ['Torque','Torque τ = r × F measures the turning effect of a force. It is larger when the force is applied farther from the axis and perpendicular to the lever arm.'],
    ['Angular momentum','L = r × p, or L = Iω for a rigid body about a fixed axis. If the net external torque is zero, L stays constant.'],
    ['Moment of inertia','I = Σmr² measures how hard it is to change a body\'s rotation. Mass placed farther from the axis increases I a lot, because r is squared.'],
    ['Rolling without slipping','The contact point is momentarily at rest and v = ωR. Kinetic energy splits into translation ½mv² and rotation ½Iω². Bodies with more mass near the rim spend more energy on rotating, so they roll down slopes more slowly.'],
    ['Equilibrium of a rigid body','Both the net force and the net torque must be zero. This is how a see-saw, a beam balance or a ladder against a wall is analysed.']
  ],
  formulas:[
    ['Centre of mass','R<sub>cm</sub> = Σm<sub>i</sub>r<sub>i</sub> / M'],
    ['Torque','τ = r × F, &nbsp; |τ| = rF sinθ, &nbsp; τ = Iα'],
    ['Angular momentum','L = Iω, &nbsp; τ = dL/dt'],
    ['Rotational KE','K = ½Iω<sup>2</sup>'],
    ['Common I values','Ring MR<sup>2</sup> · Disc ½MR<sup>2</sup> · Solid sphere ⅖MR<sup>2</sup> · Rod (centre) ML<sup>2</sup>/12'],
    ['Rolling down an incline','a = g sinθ / (1 + k<sup>2</sup>/R<sup>2</sup>), &nbsp; v = √[2gh/(1 + k<sup>2</sup>/R<sup>2</sup>)]']
  ],
  apps:[
    ['Figure skaters and divers','Pulling the arms in reduces I. Angular momentum Iω is conserved, so ω increases and the spin speeds up dramatically.'],
    ['Door handles far from hinges','Placing the handle at the edge maximises the lever arm, so a small push gives a large torque. Try pushing a door near its hinge to feel the difference.'],
    ['Flywheels','A heavy wheel with mass near the rim has a large I. It stores rotational energy and smooths out jerky power delivery in engines and some energy-storage systems.']
  ],
  mcq:[
    {q:'A spinning skater pulls her arms in. Her angular velocity:', o:['Decreases, angular momentum constant','Increases, angular momentum constant','Increases, angular momentum increases','Stays the same'], a:1, s:'No external torque acts, so L = Iω is conserved. I decreases, so ω must increase.'},
    {q:'A ring, a disc and a solid sphere roll down the same incline from rest. Which reaches the bottom first?', o:['Ring','Disc','Solid sphere','All together'], a:2, s:'a = g sinθ/(1 + k²/R²). k²/R² is 1 for the ring, ½ for the disc and ⅖ for the solid sphere. The sphere has the smallest value, so the largest acceleration.'},
    {q:'A 20 N force is applied perpendicular to a 0.5 m spanner. The torque is:', o:['40 N m','10 N m','20 N m','0.025 N m'], a:1, s:'τ = rF sin90° = 0.5 × 20 = 10 N m.'},
    {q:'A 1 kg mass is at x = 0 and a 3 kg mass is at x = 4 m. The centre of mass is at:', o:['x = 1 m','x = 2 m','x = 3 m','x = 4 m'], a:2, s:'x<sub>cm</sub> = (1×0 + 3×4)/(1+3) = 12/4 = 3 m. It lies closer to the heavier mass.'},
    {q:'A 2 kg disc of radius 0.5 m spins at 10 rad/s. Its rotational kinetic energy is:', o:['25 J','12.5 J','50 J','6.25 J'], a:1, s:'I = ½MR² = ½ × 2 × 0.25 = 0.25 kg m². K = ½Iω² = ½ × 0.25 × 100 = 12.5 J.'}
  ],
  gen(){
    const b = pick([['ring',1,'1'],['disc',0.5,'½'],['solid sphere',0.4,'⅖'],['hollow sphere',2/3,'⅔']]), h = pick([1,1.5,2,3,4,5]);
    const ans = Math.sqrt(2*g*h/(1+b[1]));
    return { q:`A ${b[0]} rolls without slipping from rest down a slope, dropping through a height of ${h} m. What is its speed at the bottom? (g = 9.8 m/s²)`,
      ans, unit:'m/s', steps:[
        'Energy conservation: mgh = ½mv² + ½Iω², with ω = v/R and I = mk².',
        `For a ${b[0]}, k²/R² = ${b[2]}. So mgh = ½mv²(1 + ${b[2]}).`,
        `v = √[2gh / (1 + ${b[2]})] = √[2 × 9.8 × ${h} / ${sci(1+b[1],3)}]`,
        `v = <b>${sci(ans)} m/s</b>`]};
  }
},
{ id:'c11-7', cls:11, n:7, title:'Gravitation', unit:'Gravitation', sim:'orbit',
  hook:'The same force that drops an apple keeps the Moon in orbit. Speed decides everything: too slow and a satellite falls back, just right and it circles, fast enough and it escapes for good.',
  concepts:[
    ['Kepler\'s laws','(1) Planets move in ellipses with the Sun at one focus. (2) The line from Sun to planet sweeps equal areas in equal times, so planets move faster when closer. (3) T² ∝ a³, where a is the semi-major axis.'],
    ['Universal law of gravitation','Every two masses attract with force Gm₁m₂/r², along the line joining them. G = 6.67 × 10⁻¹¹ N m² kg⁻² is very small, which is why gravity between everyday objects is not noticeable.'],
    ['Variation of g','g decreases with height above the surface and also with depth below it. At Earth\'s centre g is zero.'],
    ['Gravitational potential energy','U = −GMm/r. It is negative because work must be done to separate the masses to infinity, where U is taken as zero.'],
    ['Escape speed','The minimum launch speed needed to never return: √(2GM/R), about 11.2 km/s for Earth. It does not depend on the mass of the object launched.'],
    ['Satellites','Orbital speed √(GM/r) is 1/√2 of the escape speed at that radius. A geostationary satellite orbits above the equator with a 24-hour period at about 36,000 km altitude, so it appears fixed in the sky.'],
    ['Weightlessness','Astronauts float because they and their spacecraft fall freely together, not because gravity is absent. At ISS height, g is still about 90% of its surface value.']
  ],
  formulas:[
    ['Newton\'s law','F = Gm<sub>1</sub>m<sub>2</sub>/r<sup>2</sup>'],
    ['g at the surface','g = GM/R<sup>2</sup>'],
    ['g at height h (h ≪ R)','g<sub>h</sub> ≈ g(1 − 2h/R)'],
    ['g at depth d','g<sub>d</sub> = g(1 − d/R)'],
    ['Escape speed','v<sub>e</sub> = √(2GM/R) = √(2gR)'],
    ['Orbit','v<sub>o</sub> = √(GM/r), &nbsp; T = 2π√(r<sup>3</sup>/GM), &nbsp; E = −GMm/2r']
  ],
  apps:[
    ['Why ISRO launches eastward from Sriharikota','Earth spins eastward at about 0.45 km/s at the equator. Launching east from a site near the equator gives the rocket that speed for free, saving fuel.'],
    ['Geostationary satellites for TV and weather','INSAT and GSAT satellites sit about 35,800 km above the equator. Because their period matches Earth\'s rotation, dish antennas can point at one fixed spot.'],
    ['GPS orbits','GPS satellites orbit at about 20,200 km with a period close to 12 hours. Kepler\'s third law links that height and period exactly.']
  ],
  mcq:[
    {q:'If the distance between two masses is doubled, the gravitational force becomes:', o:['½','¼','2 times','4 times'], a:1, s:'F ∝ 1/r². Doubling r gives 1/4 of the force.'},
    {q:'The escape speed from a planet depends on:', o:['The mass of the object launched','The planet\'s mass and radius','The launch angle','The object\'s shape'], a:1, s:'v<sub>e</sub> = √(2GM/R). The mass of the object cancels out, so a pebble and a rocket need the same escape speed.'},
    {q:'Kepler\'s second law (equal areas in equal times) follows from conservation of:', o:['Energy','Linear momentum','Angular momentum','Mass'], a:2, s:'Gravity is a central force, so it exerts no torque about the Sun. Angular momentum is conserved, which makes areal velocity constant.'},
    {q:'An astronaut floats inside an orbiting spacecraft because:', o:['There is no gravity in space','She and the craft are in free fall together','The craft is beyond Earth\'s gravity','Air pressure balances gravity'], a:1, s:'Both are falling with the same acceleration around Earth. The floor never pushes on her, so she feels weightless.'},
    {q:'A planet orbits at 4 times Earth\'s orbital radius. Its period is:', o:['4 years','8 years','16 years','2 years'], a:1, s:'T² ∝ r³. T = (4)<sup>3/2</sup> years = 8 years.'}
  ],
  gen(){
    const h = pick([300,400,600,800,1000,2000]), R = 6.4e6, r = R + h*1e3, GM = g*R*R;
    const T = 2*Math.PI*Math.sqrt(r*r*r/GM), ans = T/60;
    return { q:`A satellite orbits ${h} km above Earth's surface. Taking R = 6400 km and g = 9.8 m/s², find its orbital period in minutes.`,
      ans, unit:'min', steps:[
        `Orbit radius r = R + h = 6400 + ${h} = ${6400+h} km = ${sci(r,4)} m`,
        `GM = gR² = 9.8 × (6.4×10⁶)² = ${sci(GM,4)} m³/s²`,
        `T = 2π√(r³/GM) = ${sci(T,4)} s`,
        `T = ${sci(T,4)} / 60 = <b>${sci(ans)} min</b>`]};
  }
},
{ id:'c11-8', cls:11, n:8, title:'Mechanical Properties of Solids', unit:'Properties of Bulk Matter', sim:'stress',
  hook:'Pull a wire and it stretches; pull harder and it stays stretched; pull harder still and it snaps. The stress–strain curve tells engineers exactly where those limits are.',
  concepts:[
    ['Elasticity and plasticity','An elastic body returns to its original shape when the load is removed. Beyond the elastic limit the deformation becomes permanent (plastic).'],
    ['Stress and strain','Stress is the restoring force per unit area (N/m², same unit as pressure). Strain is the fractional change in size and has no units. Tensile strain is ΔL/L, shear strain is Δx/L, volume strain is ΔV/V.'],
    ['Hooke\'s law','For small deformations, stress is proportional to strain. The constant of proportionality is the modulus of elasticity.'],
    ['Stress–strain curve','Linear up to the proportional limit, then the yield point where the material starts flowing plastically. Stress peaks at the ultimate tensile strength before the material necks and fractures. Ductile metals have a long plastic region; brittle materials snap soon after the elastic limit.'],
    ['Three moduli','Young\'s modulus Y (length change), shear modulus G (shape change) and bulk modulus B (volume change). Solids have all three; fluids have only a bulk modulus.'],
    ['Engineering use','Crane ropes are sized from the yield strength with a safety factor. Beams are made I-shaped because most bending stress sits in the top and bottom flanges, so material in the middle can be removed.']
  ],
  formulas:[
    ['Stress','σ = F/A'],
    ['Longitudinal strain','ε = ΔL/L'],
    ['Young\'s modulus','Y = (F/A)/(ΔL/L) = FL/(AΔL)'],
    ['Shear modulus','G = (F/A)/(Δx/L) = F/(Aθ)'],
    ['Bulk modulus','B = −p/(ΔV/V); compressibility k = 1/B'],
    ['Extension of a wire','ΔL = FL/(AY), &nbsp; A = πd<sup>2</sup>/4']
  ],
  apps:[
    ['Crane cables','A cable is chosen so that the working load gives a stress well below the yield stress. A safety factor of about 10 is common, and the cable is made of many thin twisted wires for flexibility.'],
    ['I-beams in buildings and rail tracks','When a beam bends, the top is compressed and the bottom is stretched. An I-section puts most of the material where the stress is greatest, giving high strength with less steel.'],
    ['Bones','Bone has a Young\'s modulus of about 9 GPa and is strong in compression, which suits its job of carrying body weight. It is weaker in tension and twisting, which is how many fractures happen.']
  ],
  mcq:[
    {q:'Steel is considered more elastic than rubber because:', o:['It stretches more','It needs a larger stress for the same strain','It is heavier','It has a lower Young\'s modulus'], a:1, s:'In physics, "more elastic" means a larger modulus: more restoring stress for a given strain. Steel\'s Y is about 200 GPa; rubber\'s is a few MPa.'},
    {q:'Doubling the length of a wire (same material, cross-section and load) makes its extension:', o:['Half','Double','Four times','Unchanged'], a:1, s:'ΔL = FL/(AY), so ΔL ∝ L. Y is a material property and does not change.'},
    {q:'The unit of strain is:', o:['N/m²','m','N','None (dimensionless)'], a:3, s:'Strain is a ratio of two lengths (or volumes), so it has no unit.'},
    {q:'The bulk modulus of a perfectly rigid body is:', o:['Zero','Infinite','1','Equal to Y'], a:1, s:'A perfectly rigid body has zero volume change for any pressure, so B = p/(ΔV/V) is infinite.'},
    {q:'Two wires of the same material and length have radii in the ratio 1:2 and carry equal loads. Their extensions are in the ratio:', o:['1:2','2:1','4:1','1:4'], a:2, s:'ΔL ∝ 1/A ∝ 1/r². With r ratio 1:2, area ratio is 1:4, so extensions are 4:1.'}
  ],
  gen(){
    const mat = pick([['steel',2.0e11],['copper',1.2e11],['aluminium',7.0e10]]), L = pick([1,2,3]), d = pick([0.5,1,2]), M = pick([5,10,20]);
    const A = Math.PI*Math.pow(d*1e-3/2,2), F = M*g, dl = F*L/(A*mat[1]), ans = dl*1e3;
    return { q:`A ${M} kg load hangs from a ${mat[0]} wire ${L} m long and ${d} mm in diameter. Y for ${mat[0]} = ${sci(mat[1],2)} N/m². Find the extension in mm (g = 9.8 m/s²).`,
      ans, unit:'mm', steps:[
        `Force F = mg = ${M} × 9.8 = ${sci(F)} N`,
        `Area A = πd²/4 = π × (${d}×10⁻³)²/4 = ${sci(A)} m²`,
        `ΔL = FL/(AY) = ${sci(F)} × ${L} / (${sci(A)} × ${sci(mat[1],2)}) = ${sci(dl)} m`,
        `ΔL = <b>${sci(ans)} mm</b>`]};
  }
},
{ id:'c11-9', cls:11, n:9, title:'Mechanical Properties of Fluids', unit:'Properties of Bulk Matter', sim:'terminal',
  hook:'Fluids push equally in all directions, speed up where pipes narrow, and resist motion through viscosity. These ideas run hydraulic brakes, aircraft wings and the gentle fall of raindrops.',
  concepts:[
    ['Pressure','Pressure is force per unit area. In a fluid at rest it increases with depth by ρgh and is the same at all points at the same depth.'],
    ['Pascal\'s law','Pressure applied to an enclosed fluid is transmitted undiminished to every part of it. A small force on a small piston produces a large force on a large piston.'],
    ['Continuity','For steady flow of an incompressible fluid, Av is constant. Water speeds up where a pipe narrows; that is why you put a thumb over a hose.'],
    ['Bernoulli\'s principle','Along a streamline, P + ½ρv² + ρgh is constant. Faster flow means lower pressure. It explains aerofoil lift, atomisers and the Venturi meter.'],
    ['Viscosity','Internal friction between fluid layers. A sphere moving slowly through a fluid feels drag 6πηrv (Stokes\' law). When drag plus buoyancy balance weight, the sphere falls at a constant terminal velocity.'],
    ['Reynolds number','Re = ρvd/η decides whether flow is smooth (laminar, Re below about 1000) or turbulent (above about 2000).'],
    ['Surface tension','Liquid surfaces behave like a stretched membrane. It makes drops spherical, lets insects walk on water, and pulls water up thin tubes (capillary rise).']
  ],
  formulas:[
    ['Pressure at depth','P = P<sub>0</sub> + ρgh'],
    ['Continuity','A<sub>1</sub>v<sub>1</sub> = A<sub>2</sub>v<sub>2</sub>'],
    ['Bernoulli','P + ½ρv<sup>2</sup> + ρgh = constant'],
    ['Stokes\' law','F = 6πηrv'],
    ['Terminal velocity','v<sub>t</sub> = 2r<sup>2</sup>(ρ − σ)g / 9η'],
    ['Capillary rise','h = 2S cosθ / (ρgr)'],
    ['Excess pressure','Drop: 2S/r &nbsp;·&nbsp; Soap bubble: 4S/r']
  ],
  apps:[
    ['Hydraulic brakes and car lifts','Your foot presses a small piston; the pressure reaches larger pistons at each wheel, multiplying the force. Garage lifts raise cars the same way.'],
    ['Why rain does not hurt','Without air drag a raindrop falling 2 km would hit at about 200 m/s. Drag limits it to a terminal velocity of only a few m/s, and since v<sub>t</sub> ∝ r², small drizzle drops fall even more slowly.'],
    ['Aircraft wings','The wing shape and angle make air flow faster over the top than underneath. By Bernoulli\'s principle the pressure on top is lower, producing lift.']
  ],
  mcq:[
    {q:'A hydraulic lift works on:', o:['Archimedes\' principle','Pascal\'s law','Bernoulli\'s principle','Stokes\' law'], a:1, s:'Pressure applied on the small piston is transmitted fully to the large piston, so F₂ = F₁ × (A₂/A₁).'},
    {q:'Water flowing in a pipe reaches a section with half the cross-sectional area. Its speed there:', o:['Halves','Doubles','Quadruples','Stays the same'], a:1, s:'A₁v₁ = A₂v₂. Halving A doubles v.'},
    {q:'For a small sphere falling through a viscous liquid, terminal velocity is proportional to:', o:['r','r²','1/r','r³'], a:1, s:'v<sub>t</sub> = 2r²(ρ − σ)g/9η, so v<sub>t</sub> ∝ r².'},
    {q:'The absolute pressure 10 m below the surface of a lake is about:', o:['1 atm','2 atm','10 atm','0.5 atm'], a:1, s:'ρgh = 1000 × 9.8 × 10 ≈ 1 × 10⁵ Pa ≈ 1 atm. Adding atmospheric pressure gives about 2 atm.'},
    {q:'Detergents help wash clothes mainly because they:', o:['Increase surface tension','Reduce surface tension','Increase viscosity','Raise the boiling point'], a:1, s:'Lower surface tension lets water spread and wet the fabric fully, so it can get between fibres and lift out grease.'}
  ],
  gen(){
    const r = pick([1,1.5,2,2.5]), eta = pick([0.8,1.0,1.2,1.5]), rho = 7800, sig = 900;
    const rm = r*1e-3, ans = 2*rm*rm*(rho-sig)*g/(9*eta);
    return { q:`A steel ball (density 7800 kg/m³) of radius ${r} mm is dropped into oil of density 900 kg/m³ and viscosity ${eta} Pa s. Find its terminal velocity in m/s (g = 9.8 m/s²).`,
      ans, unit:'m/s', steps:[
        'At terminal velocity: weight = buoyancy + Stokes drag ⇒ v<sub>t</sub> = 2r²(ρ − σ)g / 9η',
        `r = ${r} mm = ${rm} m, ρ − σ = 7800 − 900 = 6900 kg/m³`,
        `v<sub>t</sub> = 2 × (${rm})² × 6900 × 9.8 / (9 × ${eta})`,
        `v<sub>t</sub> = <b>${sci(ans)} m/s</b>`]};
  }
},
{ id:'c11-10', cls:11, n:10, title:'Thermal Properties of Matter', unit:'Properties of Bulk Matter', sim:'calorimetry',
  hook:'Heat flows from hot to cold until temperatures match. Calorimetry tracks that flow with simple bookkeeping: heat lost by the hot body equals heat gained by the cold one.',
  concepts:[
    ['Temperature scales','Celsius and Fahrenheit are linked by T<sub>F</sub> = (9/5)T<sub>C</sub> + 32. The kelvin scale starts at absolute zero: T<sub>K</sub> = T<sub>C</sub> + 273.15.'],
    ['Thermal expansion','Most materials expand when heated: ΔL = αLΔT. Area and volume coefficients are roughly 2α and 3α.'],
    ['Anomalous expansion of water','Water contracts as it warms from 0 °C to 4 °C and is densest at 4 °C. Lakes freeze from the top down, so fish survive in the 4 °C water below.'],
    ['Specific heat capacity','The heat needed to raise 1 kg of a substance by 1 K. Water\'s value (about 4186 J/kg K) is unusually high, which is why it is used for cooling and why coastal climates are mild.'],
    ['Latent heat','During melting or boiling, temperature stays constant while heat breaks molecular bonds: Q = mL. Steam at 100 °C burns worse than water at 100 °C because it also releases its latent heat.'],
    ['Heat transfer','Conduction through solids (H = KAΔT/L), convection by fluid motion (sea breezes), and radiation, which needs no medium (sunlight).'],
    ['Newton\'s law of cooling','For small temperature differences, the rate of cooling is proportional to the difference between the body and its surroundings.']
  ],
  formulas:[
    ['Scale conversion','T<sub>F</sub> = (9/5)T<sub>C</sub> + 32, &nbsp; T<sub>K</sub> = T<sub>C</sub> + 273.15'],
    ['Linear expansion','ΔL = αLΔT, &nbsp; β ≈ 3α'],
    ['Heat and temperature','Q = mcΔT'],
    ['Latent heat','Q = mL'],
    ['Conduction','H = KA(T<sub>1</sub> − T<sub>2</sub>)/L'],
    ['Newton\'s cooling','dT/dt = −k(T − T<sub>s</sub>)'],
    ['Mixture final temperature','T<sub>f</sub> = (m<sub>1</sub>c<sub>1</sub>T<sub>1</sub> + m<sub>2</sub>c<sub>2</sub>T<sub>2</sub>)/(m<sub>1</sub>c<sub>1</sub> + m<sub>2</sub>c<sub>2</sub>)']
  ],
  apps:[
    ['Gaps in rails and bridges','A 12 m steel rail heated by 40 °C expands by about 6 mm. Expansion joints leave room for this so the track does not buckle in summer.'],
    ['Copper-bottomed vessels','Copper conducts heat about 25 times better than steel, so a copper base spreads the flame\'s heat evenly and prevents hot spots.'],
    ['Sea and land breezes','Land heats up and cools down faster than the sea. By day hot air rises over land and cool sea air flows in; at night the flow reverses.']
  ],
  mcq:[
    {q:'Water has its maximum density at:', o:['0 °C','4 °C','100 °C','−4 °C'], a:1, s:'Between 0 °C and 4 °C water contracts on heating. Above 4 °C it expands normally, so density peaks at 4 °C.'},
    {q:'Heat needed to warm 2 kg of water from 20 °C to 70 °C (c = 4200 J/kg K):', o:['42 kJ','210 kJ','420 kJ','840 kJ'], a:2, s:'Q = mcΔT = 2 × 4200 × 50 = 420,000 J = 420 kJ.'},
    {q:'A 10 m steel rail (α = 1.2 × 10⁻⁵ /K) warms by 30 K. It expands by:', o:['0.36 mm','3.6 mm','36 mm','0.036 mm'], a:1, s:'ΔL = αLΔT = 1.2×10⁻⁵ × 10 × 30 = 3.6 × 10⁻³ m = 3.6 mm.'},
    {q:'A daytime sea breeze is caused mainly by:', o:['Conduction','Convection','Radiation from the sea','Evaporation only'], a:1, s:'Land heats faster, warm air over it rises, and cooler air from the sea moves in to replace it. This circulation is convection.'},
    {q:'At what temperature do the Celsius and Fahrenheit scales read the same number?', o:['0','−40','40','−32'], a:1, s:'Set T = (9/5)T + 32 ⇒ −(4/5)T = 32 ⇒ T = −40.'}
  ],
  gen(){
    const met = pick([['copper',390],['aluminium',900],['iron',450]]), m1 = pick([0.1,0.2,0.3,0.5]), T1 = pick([80,100,120,150]), m2 = pick([0.2,0.3,0.4,0.5]), T2 = pick([20,25,30]);
    const a = m1*met[1], b = m2*4200, ans = (a*T1+b*T2)/(a+b);
    return { q:`A ${m1} kg block of ${met[0]} (c = ${met[1]} J/kg K) at ${T1} °C is dropped into ${m2} kg of water (c = 4200 J/kg K) at ${T2} °C. Ignoring heat losses, find the final temperature.`,
      ans, unit:'°C', steps:[
        'Heat lost by metal = heat gained by water: m₁c₁(T₁ − T) = m₂c₂(T − T₂)',
        `m₁c₁ = ${m1} × ${met[1]} = ${sci(a)} J/K; &nbsp; m₂c₂ = ${m2} × 4200 = ${sci(b)} J/K`,
        `T = (m₁c₁T₁ + m₂c₂T₂)/(m₁c₁ + m₂c₂) = (${sci(a*T1)} + ${sci(b*T2)})/${sci(a+b)}`,
        `T = <b>${sci(ans)} °C</b>`]};
  }
},
{ id:'c11-11', cls:11, n:11, title:'Thermodynamics', unit:'Thermodynamics', sim:'pv',
  hook:'Heat and work are two ways of moving energy in and out of a gas. The first law keeps the books; the PV diagram shows the work as an area you can see.',
  concepts:[
    ['Zeroth law','If A and B are each in thermal equilibrium with C, they are in equilibrium with each other. This is what makes thermometers meaningful.'],
    ['Internal energy','For an ideal gas, internal energy depends only on temperature. Heat and work are not properties of a state; they are energy in transit.'],
    ['First law','Heat supplied = increase in internal energy + work done by the gas: ΔQ = ΔU + ΔW. It is energy conservation applied to heat.'],
    ['Four key processes','Isothermal (T constant, ΔU = 0), adiabatic (no heat exchange, Q = 0), isobaric (P constant), isochoric (V constant, W = 0).'],
    ['Work on a PV diagram','The work done by a gas equals the area under its curve on a pressure–volume diagram. For a closed cycle it equals the enclosed area.'],
    ['Specific heats of gases','C<sub>P</sub> is larger than C<sub>V</sub> because at constant pressure some heat goes into doing work. Mayer\'s relation: C<sub>P</sub> − C<sub>V</sub> = R.'],
    ['Second law','Heat cannot flow by itself from a colder to a hotter body (Clausius), and no engine can turn heat completely into work (Kelvin–Planck). Reversible processes are an idealisation; real processes are irreversible.']
  ],
  formulas:[
    ['First law','ΔQ = ΔU + ΔW'],
    ['Work','W = ∫P dV; isobaric W = PΔV'],
    ['Isothermal work','W = nRT ln(V<sub>2</sub>/V<sub>1</sub>)'],
    ['Adiabatic','PV<sup>γ</sup> = const, &nbsp; W = (P<sub>1</sub>V<sub>1</sub> − P<sub>2</sub>V<sub>2</sub>)/(γ − 1)'],
    ['Mayer\'s relation','C<sub>P</sub> − C<sub>V</sub> = R, &nbsp; γ = C<sub>P</sub>/C<sub>V</sub>'],
    ['Ideal gas','PV = nRT']
  ],
  apps:[
    ['Bicycle pumps get hot','Pumping quickly compresses air faster than heat can escape, which is close to adiabatic. Work done on the gas raises its internal energy and temperature.'],
    ['Diesel engines have no spark plugs','Air is compressed adiabatically to about 1/20 of its volume, heating it to over 500 °C. Fuel sprayed in ignites from the heat alone.'],
    ['Refrigerators and ACs','They move heat from cold to hot, which the second law says cannot happen on its own. Electrical work drives the compressor to make it happen.']
  ],
  mcq:[
    {q:'In an isothermal process for an ideal gas, the change in internal energy is:', o:['Positive','Negative','Zero','Equal to the work done'], a:2, s:'Internal energy of an ideal gas depends only on T. T is constant, so ΔU = 0 and all heat supplied goes into work.'},
    {q:'A gas absorbs 100 J of heat and does 40 J of work. Its internal energy changes by:', o:['140 J','60 J','−60 J','40 J'], a:1, s:'ΔU = ΔQ − ΔW = 100 − 40 = 60 J.'},
    {q:'On a PV diagram, the area under the process curve represents:', o:['Heat supplied','Change in internal energy','Work done by the gas','Temperature'], a:2, s:'W = ∫P dV, which is the area under the P–V curve.'},
    {q:'In an adiabatic process:', o:['ΔU = 0','Q = 0','W = 0','P is constant'], a:1, s:'Adiabatic means no heat exchange with the surroundings. Any work done comes from (or goes into) internal energy.'},
    {q:'The air in a bicycle pump warms when compressed quickly because:', o:['Friction alone heats it','The compression is nearly adiabatic, so work increases internal energy','Heat flows in from your hand','Pressure falls'], a:1, s:'With little time for heat to escape, Q ≈ 0 and ΔU = −W. Work is done on the gas (W negative), so ΔU and T rise.'}
  ],
  gen(){
    const n = pick([1,2,0.5]), T = pick([300,350,400]), r = pick([2,3,4,5]);
    const ans = n*8.314*T*Math.log(r);
    return { q:`${n} mol of an ideal gas expands isothermally at ${T} K until its volume is ${r} times the original. How much work does the gas do? (R = 8.314 J/mol K)`,
      ans, unit:'J', steps:[
        'For an isothermal process, W = nRT ln(V₂/V₁).',
        `ln(${r}) = ${sci(Math.log(r),4)}`,
        `W = ${n} × 8.314 × ${T} × ${sci(Math.log(r),4)} = <b>${sci(ans)} J</b>`,
        'Since ΔU = 0, the gas absorbs exactly this much heat.']};
  }
},
{ id:'c11-12', cls:11, n:12, title:'Kinetic Theory', unit:'Behaviour of Perfect Gas and Kinetic Theory', sim:'gas',
  hook:'Gas pressure is the drumming of billions of molecules on the walls. Temperature is simply a measure of their average kinetic energy.',
  concepts:[
    ['Assumptions of kinetic theory','Molecules are tiny compared with the gaps between them, move randomly, collide elastically, and exert no forces except during collisions.'],
    ['Pressure from collisions','Each molecule hitting a wall transfers momentum. Adding up all the impacts gives P = ⅓nmv̄², where n is the number of molecules per unit volume.'],
    ['Meaning of temperature','The average translational KE of a molecule is (3/2)k<sub>B</sub>T. At the same temperature, all gases have the same average KE per molecule; lighter molecules simply move faster.'],
    ['Speed distribution','Molecules have a spread of speeds. The rms speed √(3RT/M) is a convenient average and rises with temperature.'],
    ['Equipartition of energy','Each degree of freedom gets ½k<sub>B</sub>T on average. A monatomic gas has 3, a rigid diatomic gas has 5 (3 translation + 2 rotation).'],
    ['Specific heats','From equipartition, C<sub>V</sub> = (f/2)R. This predicts γ = 5/3 for monatomic and 7/5 for diatomic gases, which matches experiments well.'],
    ['Mean free path','The average distance between collisions. It is about 0.1 μm in air at room conditions, hundreds of times the size of a molecule.']
  ],
  formulas:[
    ['Ideal gas','PV = nRT = Nk<sub>B</sub>T'],
    ['Kinetic pressure','P = ⅓ n m v̄<sup>2</sup>'],
    ['Average KE','KE = (3/2)k<sub>B</sub>T per molecule'],
    ['rms speed','v<sub>rms</sub> = √(3RT/M) = √(3k<sub>B</sub>T/m)'],
    ['Specific heats','C<sub>V</sub> = (f/2)R, &nbsp; γ = 1 + 2/f'],
    ['Mean free path','λ = 1/(√2 nπd<sup>2</sup>)']
  ],
  apps:[
    ['Why Earth has little hydrogen','At the same temperature, H₂ molecules move 4 times faster than O₂. A noticeable fraction exceeds escape speed, so light gases slowly leak to space.'],
    ['Tyre pressure in summer','At fixed volume, P ∝ T. A tyre at 30 °C (303 K) inflated at 15 °C (288 K) has about 5% higher pressure.'],
    ['Smell spreading slowly','Molecules move at hundreds of m/s, yet perfume takes seconds to cross a room. Constant collisions (short mean free path) make each molecule zigzag rather than fly straight.']
  ],
  mcq:[
    {q:'If the absolute temperature of a gas is doubled, its rms speed:', o:['Doubles','Becomes √2 times','Becomes 4 times','Halves'], a:1, s:'v<sub>rms</sub> ∝ √T. Doubling T multiplies v<sub>rms</sub> by √2.'},
    {q:'The average kinetic energy of a gas molecule depends only on:', o:['Pressure','Volume','Temperature','Molar mass'], a:2, s:'Average translational KE = (3/2)k<sub>B</sub>T, which depends on temperature alone.'},
    {q:'For a monatomic ideal gas, γ = C<sub>P</sub>/C<sub>V</sub> is:', o:['7/5','5/3','4/3','1'], a:1, s:'f = 3, so C<sub>V</sub> = (3/2)R and C<sub>P</sub> = (5/2)R. γ = 5/3.'},
    {q:'A diatomic molecule at room temperature has how many degrees of freedom?', o:['3','5','6','7'], a:1, s:'3 translational + 2 rotational = 5. Vibration is not usually excited at room temperature.'},
    {q:'At the same temperature, the rms speed of H₂ compared with O₂ is:', o:['Same','4 times','16 times','¼'], a:1, s:'v<sub>rms</sub> ∝ 1/√M. M(O₂)/M(H₂) = 32/2 = 16, so H₂ is √16 = 4 times faster.'}
  ],
  gen(){
    const gas = pick([['nitrogen (N₂)',0.028],['oxygen (O₂)',0.032],['helium (He)',0.004],['hydrogen (H₂)',0.002],['carbon dioxide (CO₂)',0.044]]), T = pick([273,300,400,500]);
    const ans = Math.sqrt(3*8.314*T/gas[1]);
    return { q:`Find the rms speed of ${gas[0]} molecules at ${T} K. (Molar mass = ${gas[1]*1000} g/mol, R = 8.314 J/mol K)`,
      ans, unit:'m/s', steps:[
        'v<sub>rms</sub> = √(3RT/M), with M in kg/mol.',
        `M = ${gas[1]} kg/mol`,
        `v<sub>rms</sub> = √(3 × 8.314 × ${T} / ${gas[1]}) = √${sci(3*8.314*T/gas[1],4)}`,
        `v<sub>rms</sub> = <b>${sci(ans)} m/s</b>`]};
  }
},
{ id:'c11-13', cls:11, n:13, title:'Oscillations', unit:'Oscillations and Waves', sim:'shm',
  hook:'Anything pulled back towards equilibrium by a force proportional to its displacement oscillates in simple harmonic motion. Springs, pendulums and the atoms in a quartz watch all follow the same equation.',
  concepts:[
    ['Periodic and oscillatory motion','Periodic motion repeats at regular intervals. Oscillatory motion is periodic motion back and forth about an equilibrium position.'],
    ['Simple harmonic motion','Displacement x = A cos(ωt + φ). A is the amplitude, ω the angular frequency and (ωt + φ) the phase.'],
    ['The SHM condition','Restoring force F = −kx, so acceleration a = −ω²x. Acceleration always points towards the mean position and is largest at the extremes.'],
    ['Velocity in SHM','v = ±ω√(A² − x²). Speed is greatest at the mean position and zero at the extremes.'],
    ['Energy in SHM','Total energy ½kA² stays constant. It changes from all potential at the extremes to all kinetic at the centre.'],
    ['Spring and pendulum','A mass on a spring has T = 2π√(m/k). A simple pendulum with small swings has T = 2π√(L/g), independent of the bob\'s mass and (for small angles) of the amplitude.']
  ],
  formulas:[
    ['Displacement','x = A cos(ωt + φ)'],
    ['Velocity','v = −ωA sin(ωt + φ), &nbsp; |v| = ω√(A<sup>2</sup> − x<sup>2</sup>)'],
    ['Acceleration','a = −ω<sup>2</sup>x'],
    ['Period and frequency','T = 2π/ω, &nbsp; ν = 1/T'],
    ['Spring–mass','T = 2π√(m/k)'],
    ['Simple pendulum','T = 2π√(L/g)'],
    ['Energy','E = ½kA<sup>2</sup> = ½mω<sup>2</sup>A<sup>2</sup>']
  ],
  apps:[
    ['Car suspension','Springs let the wheels follow bumps while the car body oscillates slowly. Shock absorbers then damp out the oscillation so the ride does not keep bouncing.'],
    ['Quartz watches','A tiny quartz crystal vibrates 32,768 times per second when driven electrically. Counting these regular oscillations gives very accurate time.'],
    ['Pendulum clocks and seismometers','A pendulum\'s period depends only on its length and g, so it keeps steady time. Seismometers use a heavy mass on a spring that stays nearly still while the ground shakes around it.']
  ],
  mcq:[
    {q:'In SHM, acceleration is greatest at:', o:['The mean position','The extreme positions','Halfway between','It is constant'], a:1, s:'a = −ω²x is proportional to displacement, so it is largest where |x| = A.'},
    {q:'If the mass on a spring is made 4 times larger, the period:', o:['Halves','Doubles','Becomes 4 times','Stays the same'], a:1, s:'T = 2π√(m/k), so T ∝ √m. √4 = 2.'},
    {q:'A pendulum taken to the Moon (g<sub>Moon</sub> = g/6) has a period:', o:['6 times','√6 times','1/6 times','unchanged'], a:1, s:'T ∝ 1/√g. With g reduced 6 times, T increases √6 times.'},
    {q:'At the mean position of SHM, kinetic energy is:', o:['Zero','Maximum','Half the total','Negative'], a:1, s:'Speed is greatest at x = 0, and potential energy is zero there, so all the energy is kinetic.'},
    {q:'For x = 5 cos(2πt) (t in seconds), the period is:', o:['2π s','1 s','0.5 s','5 s'], a:1, s:'ω = 2π rad/s, so T = 2π/ω = 1 s.'}
  ],
  gen(){
    const m = pick([0.2,0.5,1,2]), k = pick([20,50,80,100,200]);
    const ans = 2*Math.PI*Math.sqrt(m/k);
    return { q:`A ${m} kg block on a frictionless table is attached to a spring of constant ${k} N/m. Find the period of its oscillation.`,
      ans, unit:'s', steps:[
        'T = 2π√(m/k)',
        `m/k = ${m}/${k} = ${sci(m/k,4)} s²`,
        `T = 2π × √${sci(m/k,4)} = 2π × ${sci(Math.sqrt(m/k),4)}`,
        `T = <b>${sci(ans)} s</b> &nbsp;(frequency ${sci(1/ans)} Hz)`]};
  }
},
{ id:'c11-14', cls:11, n:14, title:'Waves', unit:'Oscillations and Waves', sim:'standing',
  hook:'A wave carries energy without carrying matter. When waves reflect and overlap they form standing patterns, and those patterns set the notes of every guitar, sitar and flute.',
  concepts:[
    ['Transverse and longitudinal','In transverse waves the medium vibrates perpendicular to the wave direction (string waves). In longitudinal waves it vibrates along the direction (sound in air).'],
    ['Describing a wave','y(x,t) = a sin(kx − ωt + φ). Wavelength λ = 2π/k, period T = 2π/ω, and speed v = λ/T = ω/k.'],
    ['Wave speed','On a string, v = √(T/μ) depends on tension and mass per unit length. In a gas, Newton\'s formula √(P/ρ) was too low; Laplace corrected it to √(γP/ρ) because compressions are adiabatic.'],
    ['Superposition','When waves overlap, displacements add. This produces interference, standing waves and beats.'],
    ['Standing waves on a string','A string fixed at both ends vibrates only at frequencies that fit whole half-wavelengths: L = nλ/2. Points of zero motion are nodes, points of maximum motion are antinodes.'],
    ['Air columns','An open pipe supports all harmonics (nv/2L). A pipe closed at one end supports only odd harmonics ((2n − 1)v/4L), which gives clarinets their distinctive sound.'],
    ['Beats','Two sounds of slightly different frequencies produce a loudness that rises and falls |ν₁ − ν₂| times per second.']
  ],
  formulas:[
    ['Wave relation','v = νλ, &nbsp; k = 2π/λ, &nbsp; ω = 2πν'],
    ['String wave speed','v = √(T/μ)'],
    ['Sound speed (Laplace)','v = √(γP/ρ)'],
    ['String fixed at both ends','ν<sub>n</sub> = nv/2L, &nbsp; n = 1, 2, 3…'],
    ['Closed pipe','ν = (2n − 1)v/4L'],
    ['Open pipe','ν<sub>n</sub> = nv/2L'],
    ['Beat frequency','ν<sub>beat</sub> = |ν<sub>1</sub> − ν<sub>2</sub>|']
  ],
  apps:[
    ['Tuning a guitar or veena','Tightening a string raises the tension, increasing v = √(T/μ) and so the frequency. Musicians listen for beats against a reference note and adjust until the beats disappear.'],
    ['Thicker strings play lower notes','Bass strings are heavier (larger μ), so waves travel more slowly on them and the frequency is lower for the same length and tension.'],
    ['Flutes and whistles','Covering holes changes the effective length of the air column, which changes the resonant wavelength and the note you hear.']
  ],
  mcq:[
    {q:'Sound waves in air are:', o:['Transverse','Longitudinal','Electromagnetic','Standing only'], a:1, s:'Air molecules vibrate back and forth along the direction the sound travels, making compressions and rarefactions.'},
    {q:'If the tension in a string is made 4 times larger, the wave speed:', o:['Doubles','Quadruples','Halves','Stays the same'], a:0, s:'v = √(T/μ), so v ∝ √T. √4 = 2.'},
    {q:'A pipe closed at one end produces:', o:['All harmonics','Only even harmonics','Only odd harmonics','No harmonics'], a:2, s:'The closed end must be a node and the open end an antinode, so L = (2n − 1)λ/4. Only odd multiples of the fundamental fit.'},
    {q:'Two tuning forks of 256 Hz and 260 Hz sound together. The number of beats per second is:', o:['516','4','2','258'], a:1, s:'Beat frequency = |260 − 256| = 4 Hz.'},
    {q:'A 1 m string fixed at both ends carries waves at 200 m/s. Its fundamental frequency is:', o:['200 Hz','100 Hz','400 Hz','50 Hz'], a:1, s:'ν₁ = v/2L = 200/2 = 100 Hz.'}
  ],
  gen(){
    const L = pick([0.5,0.65,0.75,1]), T = pick([50,80,100,200]), mu = pick([0.005,0.01,0.02]), n = pick([1,2,3]);
    const v = Math.sqrt(T/mu), ans = n*v/(2*L);
    return { q:`A string ${L} m long with mass per unit length ${mu} kg/m is stretched to a tension of ${T} N between two fixed points. Find the frequency of harmonic n = ${n}.`,
      ans, unit:'Hz', steps:[
        `Wave speed v = √(T/μ) = √(${T}/${mu}) = ${sci(v,4)} m/s`,
        'Fixed at both ends: ν<sub>n</sub> = nv/2L',
        `ν<sub>${n}</sub> = ${n} × ${sci(v,4)} / (2 × ${L})`,
        `ν = <b>${sci(ans)} Hz</b>`]};
  }
},
/* ================= CLASS 12 ================= */
{ id:'c12-1', cls:12, n:1, title:'Electric Charges and Fields', unit:'Electrostatics', sim:'efield',
  hook:'Charges push and pull across empty space. The idea of a field, a property of space around a charge, turns that strange action at a distance into something you can map and measure.',
  concepts:[
    ['Properties of charge','Charge is additive, conserved, and quantised: every charge is a whole-number multiple of e = 1.6 × 10⁻¹⁹ C.'],
    ['Coulomb\'s law','The force between two point charges is kq₁q₂/r² along the line joining them, with k = 1/(4πε₀) ≈ 9 × 10⁹ N m²/C². Like charges repel, unlike charges attract.'],
    ['Superposition','The force on a charge from many others is the vector sum of the forces from each one taken separately.'],
    ['Electric field','E = F/q₀ is the force per unit positive test charge. Field lines start on positive charges, end on negative charges, never cross, and are closer together where the field is stronger.'],
    ['Electric dipole','Two equal and opposite charges separated by 2a. Dipole moment p = q × 2a points from − to +. In a uniform field it feels torque p × E but no net force.'],
    ['Electric flux and Gauss\'s law','Flux measures how much field passes through a surface. Gauss\'s law: total flux out of any closed surface equals the charge enclosed divided by ε₀.'],
    ['Applications of Gauss\'s law','It gives the field of an infinite wire (λ/2πε₀r), an infinite sheet (σ/2ε₀), and a charged shell (kq/r² outside, zero inside).']
  ],
  formulas:[
    ['Coulomb\'s law','F = kq<sub>1</sub>q<sub>2</sub>/r<sup>2</sup>, &nbsp; k = 9 × 10<sup>9</sup> N m<sup>2</sup>C<sup>−2</sup>'],
    ['Point charge field','E = kq/r<sup>2</sup>'],
    ['Dipole field','Axial: 2kp/r<sup>3</sup> &nbsp;·&nbsp; Equatorial: kp/r<sup>3</sup>'],
    ['Torque on dipole','τ = p × E, &nbsp; |τ| = pE sinθ'],
    ['Gauss\'s law','Φ = ∮E·dA = q<sub>enc</sub>/ε<sub>0</sub>'],
    ['Wire / sheet / shell','λ/2πε<sub>0</sub>r &nbsp;·&nbsp; σ/2ε<sub>0</sub> &nbsp;·&nbsp; kq/r<sup>2</sup> (outside), 0 (inside)']
  ],
  apps:[
    ['Photocopiers and laser printers','A drum is charged, light discharges parts of it, and charged toner sticks only where charge remains. Heat then fuses the toner to paper.'],
    ['Safe inside a car in lightning','The metal body acts as a conducting shell. Charge stays on the outside surface and the field inside is nearly zero, as Gauss\'s law predicts.'],
    ['Electrostatic precipitators','Factory chimneys charge smoke particles and collect them on oppositely charged plates, removing most of the fine dust before it reaches the air.']
  ],
  mcq:[
    {q:'Which of these cannot be the charge on a body?', o:['3.2 × 10⁻¹⁹ C','4.8 × 10⁻¹⁹ C','2.4 × 10⁻¹⁹ C','1.6 × 10⁻¹⁸ C'], a:2, s:'Charge must be a whole multiple of e = 1.6 × 10⁻¹⁹ C. 2.4 × 10⁻¹⁹ C is 1.5e, which is not allowed.'},
    {q:'If the distance between two charges is halved, the force becomes:', o:['Half','Double','4 times','¼'], a:2, s:'F ∝ 1/r². Halving r multiplies F by 4.'},
    {q:'The electric field inside a charged hollow conducting sphere is:', o:['Maximum','kq/R²','Zero','Infinite'], a:2, s:'A Gaussian surface inside the shell encloses no charge, so the field there is zero.'},
    {q:'The total flux through a closed surface that encloses an electric dipole is:', o:['2q/ε₀','q/ε₀','Zero','Depends on surface shape'], a:2, s:'Net enclosed charge is +q − q = 0, so the flux is zero by Gauss\'s law.'},
    {q:'Electric field lines never cross because:', o:['They repel each other','The field has a single direction at any point','They are parallel','Charges are quantised'], a:1, s:'At a crossing point the field would have two directions at once, which is impossible.'}
  ],
  gen(){
    const q1 = pick([1,2,3,4,5,8])*pick([1,-1]), q2 = pick([1,2,3,5,10])*pick([1,-1]), r = pick([5,10,20,30]);
    const ans = 9e9*Math.abs(q1*q2)*1e-12/Math.pow(r/100,2);
    return { q:`Two point charges of ${q1} μC and ${q2} μC are ${r} cm apart in air. Find the magnitude of the force between them.`,
      ans, unit:'N', steps:[
        'F = k|q₁q₂|/r², k = 9 × 10⁹ N m²/C²',
        `|q₁q₂| = ${Math.abs(q1)}×10⁻⁶ × ${Math.abs(q2)}×10⁻⁶ = ${sci(Math.abs(q1*q2)*1e-12)} C²; r = ${r/100} m`,
        `F = 9×10⁹ × ${sci(Math.abs(q1*q2)*1e-12)} / ${sci(Math.pow(r/100,2))} = <b>${sci(ans)} N</b>`,
        `The charges are ${q1*q2>0?'alike, so the force is repulsive':'opposite, so the force is attractive'}.`]};
  }
},
{ id:'c12-2', cls:12, n:2, title:'Electrostatic Potential and Capacitance', unit:'Electrostatics', sim:'capacitor',
  hook:'Potential is to electricity what height is to gravity. Capacitors use it to store energy in an electric field between two conductors and release it in a flash.',
  concepts:[
    ['Electric potential','The work done per unit charge to bring a test charge from infinity to a point. For a point charge V = kq/r. Potential is a scalar, so potentials from several charges simply add.'],
    ['Field and potential','The field points in the direction of fastest decrease of potential: E = −dV/dr.'],
    ['Equipotential surfaces','Surfaces of constant potential. No work is needed to move a charge along one, and field lines always cross them at right angles.'],
    ['Conductors in electrostatics','Inside a conductor E = 0, the whole conductor is at one potential, excess charge sits on the surface, and the field just outside is perpendicular to the surface.'],
    ['Dielectrics','Insulators that become polarised in a field. Their induced charges partly cancel the applied field, reducing it by the dielectric constant K.'],
    ['Capacitance','C = Q/V depends only on geometry and the material between the plates. For parallel plates C = Kε₀A/d.'],
    ['Combinations and energy','In parallel, capacitances add. In series, their reciprocals add. A charged capacitor stores ½CV², held in the electric field between its plates.']
  ],
  formulas:[
    ['Point charge potential','V = kq/r'],
    ['Field from potential','E = −dV/dr'],
    ['PE of two charges','U = kq<sub>1</sub>q<sub>2</sub>/r'],
    ['Parallel plate','C = Kε<sub>0</sub>A/d, &nbsp; ε<sub>0</sub> = 8.85 × 10<sup>−12</sup> F/m'],
    ['Series / parallel','1/C = Σ1/C<sub>i</sub> &nbsp;·&nbsp; C = ΣC<sub>i</sub>'],
    ['Stored energy','U = ½CV<sup>2</sup> = Q<sup>2</sup>/2C = ½QV']
  ],
  apps:[
    ['Camera flash','A battery slowly charges a capacitor over a second or two. The capacitor then dumps its energy through the flash tube in about a millisecond, giving a bright burst a battery alone could not supply.'],
    ['Defibrillators','A capacitor stores roughly 200 J and delivers it through the chest in a few milliseconds to reset a dangerously irregular heartbeat.'],
    ['Phone touchscreens','Your finger changes the capacitance at the point you touch. The phone measures these tiny changes across a grid to find where you tapped.']
  ],
  mcq:[
    {q:'The work done in moving a charge along an equipotential surface is:', o:['Positive','Negative','Zero','qV'], a:2, s:'W = qΔV and ΔV = 0 along an equipotential, so W = 0.'},
    {q:'A slab with K = 5 fills the gap of a capacitor still connected to its battery. The capacitance:', o:['Becomes 1/5','Becomes 5 times','Stays the same','Becomes 25 times'], a:1, s:'C = Kε₀A/d, so it increases by a factor K = 5. With the battery connected, the charge also increases 5 times.'},
    {q:'Two 6 μF capacitors in series have an equivalent capacitance of:', o:['12 μF','6 μF','3 μF','36 μF'], a:2, s:'1/C = 1/6 + 1/6 = 1/3, so C = 3 μF.'},
    {q:'Energy stored in a 10 μF capacitor charged to 100 V:', o:['0.5 J','0.05 J','5 J','0.005 J'], a:1, s:'U = ½CV² = ½ × 10×10⁻⁶ × 10⁴ = 0.05 J.'},
    {q:'Electric field lines and equipotential surfaces are:', o:['Parallel','Perpendicular','At 45°','Unrelated'], a:1, s:'If the field had a component along an equipotential, moving along it would need work. So the field must be perpendicular to it.'}
  ],
  gen(){
    const A = pick([100,200,400]), d = pick([0.5,1,2]), K = pick([1,2.2,5]), V = pick([10,50,100]);
    const C = K*8.85e-12*A*1e-4/(d*1e-3), ans = C*1e12;
    return { q:`A parallel-plate capacitor has plates of area ${A} cm² separated by ${d} mm, filled with a dielectric of K = ${K}. Find its capacitance in pF.`,
      ans, unit:'pF', steps:[
        'C = Kε₀A/d',
        `A = ${A} cm² = ${sci(A*1e-4)} m², d = ${d} mm = ${sci(d*1e-3)} m`,
        `C = ${K} × 8.85×10⁻¹² × ${sci(A*1e-4)} / ${sci(d*1e-3)} = ${sci(C)} F = <b>${sci(ans)} pF</b>`,
        `Bonus: charged to ${V} V it stores U = ½CV² = ${sci(0.5*C*V*V)} J.`]};
  }
},
{ id:'c12-3', cls:12, n:3, title:'Current Electricity', unit:'Current Electricity', sim:'wheatstone',
  hook:'A current is charge on the move. Ohm\'s law, internal resistance and Kirchhoff\'s two rules are enough to solve almost any DC circuit you will meet.',
  concepts:[
    ['Current and drift','Free electrons in a wire drift slowly (millimetres per second) against the field, yet a lamp lights instantly because the field travels through the wire at nearly the speed of light.'],
    ['Ohm\'s law','For many conductors at fixed temperature, V = IR. Resistance R = ρL/A depends on the material (resistivity ρ) and the wire\'s shape.'],
    ['Temperature and resistivity','Metals become more resistive when hot because ions vibrate more and scatter electrons. Semiconductors become less resistive because more charge carriers are freed.'],
    ['EMF and internal resistance','A cell\'s emf ε is the energy it gives each coulomb. Some is lost inside the cell, so the terminal voltage V = ε − Ir drops as current rises.'],
    ['Kirchhoff\'s rules','Junction rule: currents in = currents out (charge conservation). Loop rule: the sum of potential changes around any closed loop is zero (energy conservation).'],
    ['Wheatstone bridge','Four resistors in a diamond with a galvanometer across the middle. When P/Q = R/S, no current flows through the galvanometer, and an unknown resistance can be found precisely.']
  ],
  formulas:[
    ['Current and drift velocity','I = neAv<sub>d</sub>, &nbsp; v<sub>d</sub> = eEτ/m'],
    ['Resistance','R = ρL/A'],
    ['Temperature dependence','ρ<sub>T</sub> = ρ<sub>0</sub>[1 + α(T − T<sub>0</sub>)]'],
    ['Terminal voltage','V = ε − Ir, &nbsp; I = ε/(R + r)'],
    ['Power','P = VI = I<sup>2</sup>R = V<sup>2</sup>/R'],
    ['Series / parallel','R = ΣR<sub>i</sub> &nbsp;·&nbsp; 1/R = Σ1/R<sub>i</sub>'],
    ['Bridge balance','P/Q = R/S']
  ],
  apps:[
    ['Household wiring is parallel','Every appliance gets the full 230 V and can be switched independently. Adding appliances lowers the total resistance and raises the current, which is why circuits have fuses or MCBs.'],
    ['Strain gauges','A thin wire glued to a bridge or aircraft wing stretches with the structure, changing its resistance slightly. A Wheatstone bridge detects that tiny change.'],
    ['Heating elements','Nichrome has high resistivity and resists oxidation when red-hot, making it ideal for heaters, toasters and irons.']
  ],
  mcq:[
    {q:'A wire is stretched to twice its length (volume unchanged). Its resistance becomes:', o:['2 times','4 times','½','unchanged'], a:1, s:'Doubling L halves A (same volume). R = ρL/A becomes ρ(2L)/(A/2) = 4R.'},
    {q:'A Wheatstone bridge has P = 2 Ω, Q = 4 Ω, R = 6 Ω. For balance, S must be:', o:['3 Ω','12 Ω','8 Ω','6 Ω'], a:1, s:'P/Q = R/S ⇒ 2/4 = 6/S ⇒ S = 12 Ω.'},
    {q:'Kirchhoff\'s junction rule is based on conservation of:', o:['Energy','Momentum','Charge','Mass'], a:2, s:'Charge cannot pile up at a junction, so whatever flows in must flow out.'},
    {q:'A 2 V cell with internal resistance 0.5 Ω is connected to a 3.5 Ω resistor. The current is:', o:['0.5 A','0.57 A','4 A','1 A'], a:0, s:'I = ε/(R + r) = 2/(3.5 + 0.5) = 0.5 A.'},
    {q:'When a metal wire is heated, its resistivity:', o:['Decreases','Increases','Stays the same','Becomes zero'], a:1, s:'Hotter ions vibrate more and scatter electrons more often, so the relaxation time falls and resistivity rises.'}
  ],
  gen(){
    const e = pick([1.5,2,6,9,12]), r = pick([0.2,0.5,1]), R = pick([2,4,5,10]);
    const I = e/(R+r), ans = I*R;
    return { q:`A cell of emf ${e} V and internal resistance ${r} Ω is connected to an external ${R} Ω resistor. Find the terminal voltage of the cell.`,
      ans, unit:'V', steps:[
        `Current I = ε/(R + r) = ${e}/(${R} + ${r}) = ${sci(I)} A`,
        `Terminal voltage V = IR = ${sci(I)} × ${R}`,
        `V = <b>${sci(ans)} V</b> (also = ε − Ir = ${e} − ${sci(I*r)})`]};
  }
},
{ id:'c12-4', cls:12, n:4, title:'Moving Charges and Magnetism', unit:'Magnetic Effects of Current and Magnetism', sim:'magforce',
  hook:'Moving charges create magnetic fields, and magnetic fields push on moving charges. Electric motors, MRI scanners and every analogue meter depend on this two-way link.',
  concepts:[
    ['Oersted\'s discovery','A current-carrying wire deflects a nearby compass. Currents produce magnetic fields.'],
    ['Lorentz force','A charge moving through a field feels F = q(E + v × B). The magnetic part is perpendicular to the velocity, so it changes direction but never speed, and does no work.'],
    ['Motion in a uniform field','A charge moving perpendicular to B travels in a circle of radius mv/qB. Its period 2πm/qB does not depend on speed. With a velocity component along B, the path becomes a helix.'],
    ['Biot–Savart law','Each small current element contributes dB = (μ₀/4π) I dl × r̂ / r². It gives the field at the centre of a loop and along its axis.'],
    ['Ampère\'s circuital law','∮B·dl = μ₀I<sub>enclosed</sub>. It quickly gives the field of a long straight wire (μ₀I/2πr) and of a long solenoid (μ₀nI inside, uniform).'],
    ['Forces between currents','Parallel currents in the same direction attract; opposite currents repel. The ampere was historically defined from this force.'],
    ['Current loop as a dipole','A loop in a field feels torque NIAB sinθ. The moving-coil galvanometer uses this torque, balanced by a spring, to measure current.']
  ],
  formulas:[
    ['Lorentz force','F = q(v × B), &nbsp; |F| = qvB sinθ'],
    ['Radius and period','r = mv/qB, &nbsp; T = 2πm/qB'],
    ['Long straight wire','B = μ<sub>0</sub>I/2πr'],
    ['Loop centre','B = μ<sub>0</sub>NI/2R'],
    ['Solenoid','B = μ<sub>0</sub>nI'],
    ['Force between wires','F/L = μ<sub>0</sub>I<sub>1</sub>I<sub>2</sub>/2πd'],
    ['Torque on coil','τ = NIAB sinθ'],
    ['Meter conversion','Ammeter shunt S = I<sub>g</sub>G/(I − I<sub>g</sub>) · Voltmeter series R = V/I<sub>g</sub> − G']
  ],
  apps:[
    ['MRI scanners','Superconducting solenoids create fields of 1.5–3 T, tens of thousands of times Earth\'s field, using B = μ₀nI with huge currents and many turns.'],
    ['Electric motors','A current loop in a magnetic field feels a torque. A commutator or electronic controller flips the current every half turn to keep it spinning.'],
    ['Mass spectrometers','Ions of the same speed bend into circles with r = mv/qB. Heavier ions curve less, so they land at different spots and can be identified.']
  ],
  mcq:[
    {q:'The magnetic force on a moving charge does no work because it is:', o:['Very small','Always perpendicular to the velocity','Parallel to the velocity','Conservative'], a:1, s:'F ⊥ v means F·v = 0, so the power and work are zero. Speed stays constant.'},
    {q:'Doubling the speed of a charged particle in a uniform B (perpendicular) makes the circle\'s radius:', o:['Half','Double','Four times','Unchanged'], a:1, s:'r = mv/qB, so r ∝ v.'},
    {q:'Two long parallel wires carry currents in the same direction. They:', o:['Repel','Attract','Feel no force','Twist'], a:1, s:'Each wire sits in the other\'s field. Using the right-hand rule, the force on each points towards the other.'},
    {q:'A long solenoid has 1000 turns/m and carries 2 A. The field inside is about:', o:['2.5 × 10⁻³ T','2.5 × 10⁻⁶ T','0.25 T','2.5 T'], a:0, s:'B = μ₀nI = 4π×10⁻⁷ × 1000 × 2 ≈ 2.51 × 10⁻³ T.'},
    {q:'To convert a galvanometer into an ammeter, connect:', o:['A high resistance in series','A low resistance in parallel','A high resistance in parallel','A low resistance in series'], a:1, s:'A small shunt in parallel carries most of the current, so the meter can measure large currents while its own resistance stays low.'}
  ],
  gen(){
    const p = pick([['proton',1.67e-27],['electron',9.11e-31]]), v = pick([1,2,5]), B = pick([0.1,0.5,1]);
    const r = p[1]*v*1e6/(1.6e-19*B), ans = r*1e3;
    return { q:`A ${p[0]} moves at ${v} × 10⁶ m/s perpendicular to a uniform magnetic field of ${B} T. Find the radius of its circular path in mm. (m = ${sci(p[1])} kg, e = 1.6 × 10⁻¹⁹ C)`,
      ans, unit:'mm', steps:[
        'The magnetic force supplies the centripetal force: qvB = mv²/r ⇒ r = mv/qB',
        `r = ${sci(p[1])} × ${v}×10⁶ / (1.6×10⁻¹⁹ × ${B})`,
        `r = ${sci(r)} m = <b>${sci(ans)} mm</b>`]};
  }
},
{ id:'c12-5', cls:12, n:5, title:'Magnetism and Matter', unit:'Magnetic Effects of Current and Magnetism', sim:'barmagnet',
  hook:'A bar magnet behaves exactly like a current loop. Materials respond to magnetic fields in three different ways, and that response decides whether they float away from a magnet or stick to it.',
  concepts:[
    ['Bar magnet as a solenoid','The field of a bar magnet matches that of a solenoid. Cutting a magnet never isolates a pole; you just get two smaller magnets.'],
    ['Magnetic dipole in a field','A dipole of moment m in field B feels torque m × B and has potential energy −m·B. In a uniform field there is no net force.'],
    ['Gauss\'s law for magnetism','The net magnetic flux through any closed surface is zero. Field lines always form closed loops, which means isolated magnetic poles (monopoles) do not exist.'],
    ['Magnetisation and intensity','Magnetisation M is the magnetic moment per unit volume. Magnetic intensity H relates to the applied field, and B = μ₀(H + M). Susceptibility χ = M/H.'],
    ['Diamagnetic materials','Weakly repelled by magnets (χ small and negative): copper, water, bismuth. A superconductor is a perfect diamagnet that expels all field.'],
    ['Paramagnetic materials','Weakly attracted (χ small and positive): aluminium, oxygen. Their atoms have magnetic moments that partly line up with the field.'],
    ['Ferromagnetic materials','Strongly attracted (χ very large): iron, cobalt, nickel. Domains of aligned moments grow in a field. Above the Curie temperature they become paramagnetic.']
  ],
  formulas:[
    ['Axial field','B = μ<sub>0</sub>2m / 4πr<sup>3</sup>'],
    ['Equatorial field','B = μ<sub>0</sub>m / 4πr<sup>3</sup>'],
    ['Torque and energy','τ = m × B, &nbsp; U = −mB cosθ'],
    ['Gauss\'s law','∮B·dA = 0'],
    ['B, H and M','B = μ<sub>0</sub>(H + M), &nbsp; χ = M/H'],
    ['Permeability','μ<sub>r</sub> = 1 + χ, &nbsp; μ = μ<sub>0</sub>μ<sub>r</sub>']
  ],
  apps:[
    ['Maglev and levitation','Superconductors push away magnetic fields completely, so a magnet can float steadily above one. Some maglev train designs use this effect.'],
    ['Electromagnets in scrap yards','A soft-iron core multiplies the field of a coil hundreds of times. Switching off the current releases the load, because soft iron keeps little magnetism.'],
    ['Data storage','Hard drives store bits as tiny regions of a ferromagnetic film magnetised one way or the other, read by sensing their field.']
  ],
  mcq:[
    {q:'A superconductor is a perfect:', o:['Paramagnet','Ferromagnet','Diamagnet','Conductor of magnetism'], a:2, s:'It expels all magnetic field from its interior (Meissner effect), so χ = −1.'},
    {q:'The net magnetic flux through any closed surface is:', o:['μ₀I','Zero','Infinite','Depends on the magnet'], a:1, s:'Gauss\'s law for magnetism: field lines are closed loops, so every line entering a closed surface also leaves it.'},
    {q:'A ferromagnet heated above its Curie temperature becomes:', o:['Diamagnetic','Paramagnetic','More ferromagnetic','Superconducting'], a:1, s:'Thermal agitation destroys the domain alignment, leaving only weak paramagnetism.'},
    {q:'A magnetic dipole placed in a uniform field experiences:', o:['A net force only','A torque but no net force','Neither','Both force and torque always'], a:1, s:'The forces on the two "poles" are equal and opposite, so they cancel, but they form a couple that exerts a torque.'},
    {q:'Work needed to turn a dipole of m = 2 A m² from θ = 0° to 180° in B = 0.5 T:', o:['1 J','2 J','0.5 J','0 J'], a:1, s:'W = U(180°) − U(0°) = mB − (−mB) = 2mB = 2 × 2 × 0.5 = 2 J.'}
  ],
  gen(){
    const m = pick([0.5,1,2,5]), B = pick([0.1,0.2,0.5]), th = pick([30,45,60,90]);
    const ans = m*B*Math.sin(th*Math.PI/180);
    return { q:`A bar magnet with magnetic moment ${m} A m² sits at ${th}° to a uniform ${B} T field. Find the torque on it.`,
      ans, unit:'N m', steps:[
        'τ = mB sinθ',
        `τ = ${m} × ${B} × sin${th}° = ${m} × ${B} × ${sci(Math.sin(th*Math.PI/180),3)}`,
        `τ = <b>${sci(ans)} N m</b>`]};
  }
},
{ id:'c12-6', cls:12, n:6, title:'Electromagnetic Induction', unit:'Electromagnetic Induction and Alternating Currents', sim:'emi',
  hook:'Change the magnetic flux through a coil and a voltage appears. Every power station, transformer and wireless charger relies on this one fact.',
  concepts:[
    ['Faraday and Henry\'s experiments','Moving a magnet near a coil, or switching a nearby current on and off, produces a current. What matters is change in magnetic flux, not the flux itself.'],
    ['Magnetic flux','Φ = B·A = BA cosθ, measured in webers. Flux can change if B, A or the angle changes.'],
    ['Faraday\'s law','The induced emf equals the rate of change of flux linkage: ε = −N dΦ/dt.'],
    ['Lenz\'s law','The induced current flows so as to oppose the change that causes it. This is energy conservation: you must do work to push a magnet into a coil.'],
    ['Motional emf','A rod of length l moving at v through field B develops emf Blv between its ends.'],
    ['Inductance','A changing current in a coil induces an emf in itself (self-inductance L) and in nearby coils (mutual inductance M). An inductor resists changes in current, much as mass resists changes in velocity.'],
    ['AC generator','A coil rotating in a field has a sinusoidally changing flux, giving ε = NBAω sin ωt.']
  ],
  formulas:[
    ['Flux','Φ = BA cosθ'],
    ['Faraday\'s law','ε = −N dΦ/dt'],
    ['Motional emf','ε = Blv'],
    ['Self-induction','ε = −L dI/dt, &nbsp; L = μ<sub>0</sub>n<sup>2</sup>Al (solenoid)'],
    ['Mutual inductance','M = μ<sub>0</sub>n<sub>1</sub>n<sub>2</sub>Al'],
    ['Energy in inductor','U = ½LI<sup>2</sup>'],
    ['AC generator','ε = NBAω sin ωt, &nbsp; ε<sub>0</sub> = NBAω']
  ],
  apps:[
    ['Induction cooktops','A coil under the glass carries fast-changing current. The changing flux induces currents in the metal pan, which heats up while the glass stays relatively cool.'],
    ['Wireless phone chargers','A coil in the pad and a coil in the phone form a transformer with an air gap. Changing current in one induces a current in the other.'],
    ['Airport metal detectors','A pulsing coil induces currents in metal objects. Those currents create their own fields, which a receiver coil picks up.']
  ],
  mcq:[
    {q:'Lenz\'s law is a consequence of conservation of:', o:['Charge','Momentum','Energy','Flux'], a:2, s:'If the induced current aided the change, energy would appear from nothing. Opposition means work must be done to create the current.'},
    {q:'A 1 m rod moves at 5 m/s perpendicular to a 0.2 T field. The emf across it is:', o:['0.04 V','1 V','25 V','5 V'], a:1, s:'ε = Blv = 0.2 × 1 × 5 = 1 V.'},
    {q:'A magnet dropped through a vertical copper pipe falls slowly because:', o:['Copper is magnetic','Induced currents in the pipe oppose its motion','Air resistance is high','Gravity is weaker inside'], a:1, s:'The moving magnet changes the flux through each ring of the pipe. The induced currents, by Lenz\'s law, create fields that oppose the fall.'},
    {q:'A 100-turn coil\'s flux changes by 0.01 Wb in 0.1 s. The average induced emf is:', o:['0.1 V','1 V','10 V','100 V'], a:2, s:'ε = NΔΦ/Δt = 100 × 0.01/0.1 = 10 V.'},
    {q:'One henry is equal to:', o:['1 Wb/A','1 V/A','1 T m²','1 A/Wb'], a:0, s:'From NΦ = LI, L = NΦ/I, so 1 H = 1 Wb/A (equivalently 1 V s/A).'}
  ],
  gen(){
    const N = pick([50,100,200]), B = pick([0.05,0.1,0.2]), A = pick([100,200,300]), rpm = pick([600,1200,1500,3000]);
    const w = 2*Math.PI*rpm/60, ans = N*B*A*1e-4*w;
    return { q:`A generator coil has ${N} turns, each of area ${A} cm², and rotates at ${rpm} rpm in a uniform field of ${B} T. Find the peak emf.`,
      ans, unit:'V', steps:[
        `ω = 2π × ${rpm}/60 = ${sci(w,4)} rad/s`,
        `A = ${A} cm² = ${sci(A*1e-4)} m²`,
        `ε₀ = NBAω = ${N} × ${B} × ${sci(A*1e-4)} × ${sci(w,4)}`,
        `ε₀ = <b>${sci(ans)} V</b> (rms value ${sci(ans/Math.SQRT2)} V)`]};
  }
},
{ id:'c12-7', cls:12, n:7, title:'Alternating Current', unit:'Electromagnetic Induction and Alternating Currents', sim:'lcr',
  hook:'In AC circuits, inductors and capacitors push voltage and current out of step. Phasors make that easy to picture, and resonance lets a radio pick one station out of hundreds.',
  concepts:[
    ['AC and rms values','Mains voltage varies as V₀ sin ωt. Its rms value V₀/√2 gives the same heating as that DC voltage. India\'s 230 V mains has a peak of about 325 V.'],
    ['Resistor','Current and voltage are in phase.'],
    ['Inductor','Current lags voltage by 90°. Opposition X<sub>L</sub> = ωL grows with frequency, so inductors block high frequencies.'],
    ['Capacitor','Current leads voltage by 90°. Opposition X<sub>C</sub> = 1/ωC falls with frequency, so capacitors block DC and pass high frequencies.'],
    ['Series LCR and phasors','Voltages are added as rotating arrows (phasors). Impedance Z = √(R² + (X<sub>L</sub> − X<sub>C</sub>)²), and the phase angle φ = tan⁻¹[(X<sub>L</sub> − X<sub>C</sub>)/R].'],
    ['Resonance','When X<sub>L</sub> = X<sub>C</sub>, impedance is smallest (Z = R) and current peaks. This happens at ω₀ = 1/√(LC).'],
    ['Power and transformers','Average power is V<sub>rms</sub>I<sub>rms</sub>cosφ; pure L or C circuits use no average power. Transformers change AC voltage in the ratio of their turns.']
  ],
  formulas:[
    ['rms values','V<sub>rms</sub> = V<sub>0</sub>/√2, &nbsp; I<sub>rms</sub> = I<sub>0</sub>/√2'],
    ['Reactances','X<sub>L</sub> = ωL, &nbsp; X<sub>C</sub> = 1/ωC'],
    ['Impedance','Z = √[R<sup>2</sup> + (X<sub>L</sub> − X<sub>C</sub>)<sup>2</sup>]'],
    ['Phase','tanφ = (X<sub>L</sub> − X<sub>C</sub>)/R'],
    ['Resonance','ν<sub>0</sub> = 1/(2π√(LC))'],
    ['Power','P = V<sub>rms</sub>I<sub>rms</sub>cosφ, &nbsp; power factor = cosφ = R/Z'],
    ['Transformer','V<sub>s</sub>/V<sub>p</sub> = N<sub>s</sub>/N<sub>p</sub> = I<sub>p</sub>/I<sub>s</sub> (ideal)']
  ],
  apps:[
    ['Tuning a radio','Turning the dial changes C in an LC circuit. Only the station whose frequency matches 1/(2π√LC) produces a large current, so you hear that one.'],
    ['High-voltage transmission','Power lines run at hundreds of kV. For the same power, higher voltage means lower current, and the I²R loss in the wires drops sharply. Transformers step it back down near your home.'],
    ['Phone chargers','A small transformer or switching circuit steps 230 V AC down, then a rectifier converts it to the 5–20 V DC the phone needs.']
  ],
  mcq:[
    {q:'At resonance in a series LCR circuit, the power factor is:', o:['0','0.5','1','√2'], a:2, s:'X<sub>L</sub> = X<sub>C</sub>, so Z = R and cosφ = R/Z = 1.'},
    {q:'The peak value of India\'s 230 V (rms) mains supply is about:', o:['230 V','163 V','325 V','460 V'], a:2, s:'V₀ = √2 × V<sub>rms</sub> = 1.414 × 230 ≈ 325 V.'},
    {q:'In a purely inductive AC circuit, the current:', o:['Leads voltage by 90°','Lags voltage by 90°','Is in phase','Leads by 45°'], a:1, s:'The inductor\'s back emf resists changes in current, so the current reaches its peak a quarter cycle after the voltage.'},
    {q:'Average power consumed by an ideal capacitor in an AC circuit is:', o:['V<sub>rms</sub>I<sub>rms</sub>','Zero','½CV²','Maximum'], a:1, s:'φ = 90°, so cosφ = 0. Energy is stored and returned each cycle with no net consumption.'},
    {q:'In a step-up transformer:', o:['N<sub>s</sub> < N<sub>p</sub> and current rises','N<sub>s</sub> > N<sub>p</sub> and current falls','Power is increased','Frequency changes'], a:1, s:'More secondary turns give higher voltage. For an ideal transformer power is unchanged, so current falls in the same ratio.'}
  ],
  gen(){
    const L = pick([10,50,100,200]), C = pick([1,10,22,47]);
    const ans = 1/(2*Math.PI*Math.sqrt(L*1e-3*C*1e-6));
    return { q:`A series circuit contains an inductor of ${L} mH and a capacitor of ${C} μF. Find its resonant frequency.`,
      ans, unit:'Hz', steps:[
        'ν₀ = 1/(2π√(LC))',
        `LC = ${L}×10⁻³ × ${C}×10⁻⁶ = ${sci(L*C*1e-9)} s²`,
        `√(LC) = ${sci(Math.sqrt(L*C*1e-9))} s`,
        `ν₀ = 1/(2π × ${sci(Math.sqrt(L*C*1e-9))}) = <b>${sci(ans)} Hz</b>`]};
  }
},
{ id:'c12-8', cls:12, n:8, title:'Electromagnetic Waves', unit:'Electromagnetic Waves', sim:'emwave',
  hook:'Radio, light and X-rays are the same thing: electric and magnetic fields regenerating each other as they race through space at 3 × 10⁸ m/s. Only the wavelength differs.',
  concepts:[
    ['Displacement current','Maxwell realised that a changing electric field produces a magnetic field, just as a current does. Between capacitor plates, this "displacement current" ε₀dΦ<sub>E</sub>/dt keeps Ampère\'s law consistent.'],
    ['Maxwell\'s equations','Four equations (Gauss for E, Gauss for B, Faraday, Ampère–Maxwell) describe all of electromagnetism and predict self-sustaining waves.'],
    ['Nature of EM waves','E and B oscillate in phase, perpendicular to each other and to the direction of travel. They are transverse and need no medium.'],
    ['Speed of light','In vacuum c = 1/√(μ₀ε₀) ≈ 3 × 10⁸ m/s. The ratio of field amplitudes is E₀/B₀ = c.'],
    ['Energy and momentum','EM waves carry energy and momentum, so they exert radiation pressure. Sunlight pushes very gently on solar sails.'],
    ['The spectrum','In order of decreasing wavelength: radio, microwaves, infrared, visible, ultraviolet, X-rays, gamma rays. Visible light spans only about 400–700 nm.']
  ],
  formulas:[
    ['Displacement current','i<sub>d</sub> = ε<sub>0</sub> dΦ<sub>E</sub>/dt'],
    ['Speed in vacuum','c = 1/√(μ<sub>0</sub>ε<sub>0</sub>)'],
    ['Field ratio','E<sub>0</sub>/B<sub>0</sub> = c'],
    ['Wave relation','c = νλ'],
    ['Photon energy','E = hν = hc/λ (≈ 1240/λ<sub>nm</sub> eV)']
  ],
  apps:[
    ['Microwave ovens','2.45 GHz microwaves (λ ≈ 12 cm) make water molecules in food rotate back and forth, heating it from within.'],
    ['TV remotes and night vision','Remotes flash infrared LEDs your eyes cannot see. Thermal cameras detect the infrared that every warm body gives off.'],
    ['X-ray imaging','X-rays pass through soft tissue but are absorbed more by bone, so bones cast a shadow on the detector.']
  ],
  mcq:[
    {q:'Electromagnetic waves carry:', o:['Only energy','Only momentum','Both energy and momentum','Neither'], a:2, s:'They carry energy (sunlight warms you) and momentum (radiation pressure).'},
    {q:'Which has the highest frequency?', o:['Microwaves','Visible light','X-rays','Gamma rays'], a:3, s:'Gamma rays have the shortest wavelength and so the highest frequency in the spectrum.'},
    {q:'In an EM wave, E₀/B₀ equals:', o:['1','c','1/c','c²'], a:1, s:'E₀ = cB₀. In SI units the electric field amplitude is c times the magnetic one.'},
    {q:'Radar systems mainly use:', o:['Radio waves','Microwaves','Ultraviolet','Gamma rays'], a:1, s:'Microwaves have short enough wavelengths to reflect clearly from aircraft and give good direction resolution.'},
    {q:'The idea of displacement current was introduced by:', o:['Faraday','Ampère','Maxwell','Hertz'], a:2, s:'Maxwell added it to fix Ampère\'s law for changing fields. Hertz later produced EM waves experimentally.'}
  ],
  gen(){
    const f = pick([91.1,93.5,98.3,101.3,104.8,106.4]);
    const ans = 3e8/(f*1e6);
    return { q:`An FM radio station broadcasts at ${f} MHz. What is the wavelength of its signal? (c = 3 × 10⁸ m/s)`,
      ans, unit:'m', steps:[
        'λ = c/ν',
        `λ = 3×10⁸ / (${f}×10⁶)`,
        `λ = <b>${sci(ans)} m</b>`,
        'A quarter-wave antenna would be about ' + sci(ans/4) + ' m long, close to a car\'s whip aerial.']};
  }
},
{ id:'c12-9', cls:12, n:9, title:'Ray Optics and Optical Instruments', unit:'Optics', sim:'lens',
  hook:'Treat light as straight rays that bend at boundaries, and you can design spectacles, microscopes and telescopes with a single formula and a careful sign convention.',
  concepts:[
    ['Sign convention','Measure all distances from the pole or optical centre. Distances in the direction of incident light are positive; against it, negative. Heights above the axis are positive.'],
    ['Spherical mirrors','Focal length is half the radius of curvature. Concave mirrors can form real or virtual images; convex mirrors always form small, upright, virtual images and give a wide view.'],
    ['Refraction and Snell\'s law','Light bends towards the normal when entering a denser medium: n₁ sin i = n₂ sin r. Refraction makes pools look shallower than they are.'],
    ['Total internal reflection','Going from dense to rare medium beyond the critical angle (sin C = 1/n), light is reflected entirely. Optical fibres and the sparkle of diamonds rely on this.'],
    ['Thin lenses','The lens formula 1/v − 1/u = 1/f and the lens maker\'s equation link image position to curvature and refractive index. Power P = 1/f in dioptres; powers of lenses in contact add.'],
    ['Prism','A prism deviates light. At minimum deviation, n = sin[(A + δ<sub>m</sub>)/2] / sin(A/2).'],
    ['Optical instruments','A compound microscope uses a short-focus objective and an eyepiece to magnify small, near objects. A telescope uses a long-focus objective, with magnifying power f<sub>o</sub>/f<sub>e</sub>.']
  ],
  formulas:[
    ['Mirror formula','1/v + 1/u = 1/f, &nbsp; f = R/2, &nbsp; m = −v/u'],
    ['Snell\'s law','n<sub>1</sub>sin i = n<sub>2</sub>sin r'],
    ['Critical angle','sin C = 1/n'],
    ['Spherical surface','n<sub>2</sub>/v − n<sub>1</sub>/u = (n<sub>2</sub> − n<sub>1</sub>)/R'],
    ['Lens formula','1/v − 1/u = 1/f, &nbsp; m = v/u'],
    ['Lens maker','1/f = (n − 1)(1/R<sub>1</sub> − 1/R<sub>2</sub>)'],
    ['Power','P = 1/f (m), &nbsp; P = P<sub>1</sub> + P<sub>2</sub>'],
    ['Prism','n = sin[(A + δ<sub>m</sub>)/2] / sin(A/2)'],
    ['Telescope','M = f<sub>o</sub>/f<sub>e</sub> (normal adjustment)']
  ],
  apps:[
    ['Optical fibre internet','Light bouncing by total internal reflection along a glass fibre loses very little energy. A single fibre carries terabits per second across oceans.'],
    ['Spectacles','A short-sighted eye focuses distant objects in front of the retina; a concave lens (negative power) moves the image back. Long-sightedness is corrected with a convex lens.'],
    ['Mirages on hot roads','Air near a hot road is less dense, so light from the sky bends upward towards your eye. You see an image of the sky on the road that looks like water.']
  ],
  mcq:[
    {q:'The critical angle for glass of n = 1.5 is about:', o:['30°','41.8°','48.6°','60°'], a:1, s:'sin C = 1/1.5 = 0.667, so C ≈ 41.8°.'},
    {q:'A lens of power +2.5 D has a focal length of:', o:['25 cm','40 cm','2.5 cm','−40 cm'], a:1, s:'f = 1/P = 1/2.5 m = 0.4 m = 40 cm (convex).'},
    {q:'An object at 2F in front of a convex lens forms an image that is:', o:['At F, small','At 2F, real, inverted, same size','At infinity','Virtual and magnified'], a:1, s:'With u = −2f: 1/v = 1/f − 1/(2f) = 1/(2f), so v = 2f and m = v/u = −1.'},
    {q:'Using the Cartesian sign convention, the focal length of a concave mirror is:', o:['Positive','Negative','Zero','Depends on object'], a:1, s:'The focus lies in front of the mirror, against the direction of incident light, so f is negative.'},
    {q:'A telescope has f<sub>o</sub> = 100 cm and f<sub>e</sub> = 5 cm. Its magnifying power in normal adjustment is:', o:['500','105','20','95'], a:2, s:'M = f<sub>o</sub>/f<sub>e</sub> = 100/5 = 20.'}
  ],
  gen(){
    let f, u;
    do { f = pick([10,15,20,25]); u = -pick([15,20,25,30,40,50,60]); } while (Math.abs(u) === f);
    const v = 1/(1/f + 1/u), m = v/u;
    return { q:`An object is placed ${-u} cm in front of a convex lens of focal length ${f} cm. Using the sign convention, find the image distance v (in cm, with sign).`,
      ans:v, unit:'cm', steps:[
        `u = ${u} cm (object on the left), f = +${f} cm`,
        `1/v = 1/f + 1/u = 1/${f} + 1/(${u}) = ${sci(1/f+1/u,4)}`,
        `v = <b>${sci(v)} cm</b>`,
        `m = v/u = ${sci(m)} → ${v>0?'real and inverted':'virtual and upright'}, ${Math.abs(m)>1?'magnified':'diminished'}.`]};
  }
},
{ id:'c12-10', cls:12, n:10, title:'Wave Optics', unit:'Optics', sim:'ydse',
  hook:'Light passing through two narrow slits does not make two bright lines. It makes a whole row of bright and dark fringes, and that pattern was the first strong evidence that light is a wave.',
  concepts:[
    ['Huygens\' principle','Every point on a wavefront acts as a source of secondary wavelets. The new wavefront is the surface touching all of them. This explains reflection and refraction with waves.'],
    ['Coherent sources','To produce a steady interference pattern, sources must have a constant phase difference. Two separate bulbs are not coherent; two slits lit by the same source are.'],
    ['Interference','Where path difference is a whole number of wavelengths, waves reinforce (bright). Where it is a half-odd number, they cancel (dark).'],
    ['Young\'s double-slit experiment','Equally spaced fringes appear with width β = λD/d. Wider slit separation or shorter wavelength gives narrower fringes.'],
    ['Single-slit diffraction','A single slit of width a spreads light into a broad central maximum with weaker side bands. Minima occur at a sinθ = nλ.'],
    ['Polarisation','Light is a transverse wave, so its vibration direction can be filtered. A polaroid passes half the intensity of unpolarised light, and Malus\'s law I = I₀cos²θ describes a second polaroid.']
  ],
  formulas:[
    ['Bright fringes','Path difference = nλ'],
    ['Dark fringes','Path difference = (n + ½)λ'],
    ['Fringe width','β = λD/d'],
    ['Intensity','I = 4I<sub>0</sub>cos<sup>2</sup>(φ/2)'],
    ['Single slit minima','a sinθ = nλ, &nbsp; central width = 2λD/a'],
    ['Malus\'s law','I = I<sub>0</sub>cos<sup>2</sup>θ'],
    ['Brewster\'s law','tan i<sub>B</sub> = n']
  ],
  apps:[
    ['Polarised sunglasses','Glare from roads and water is mostly horizontally polarised. Vertically aligned polaroid lenses block it while letting other light through.'],
    ['Anti-reflection coatings','A thin coating on spectacle and camera lenses makes light reflected from its two surfaces cancel by interference, so more light passes through.'],
    ['Colours of soap bubbles','Light reflecting from the front and back of the thin film interferes. Different thicknesses favour different colours, giving swirling rainbows.']
  ],
  mcq:[
    {q:'In YDSE, if slit separation d is doubled, the fringe width:', o:['Doubles','Halves','Quadruples','Is unchanged'], a:1, s:'β = λD/d, so β ∝ 1/d.'},
    {q:'A steady interference pattern requires:', o:['Two bright bulbs','Coherent sources','White light only','Very wide slits'], a:1, s:'The phase difference must stay constant in time, which only coherent sources provide.'},
    {q:'Polarisation of light shows that light is:', o:['Longitudinal','Transverse','Made of particles','Very fast'], a:1, s:'Only transverse waves have a vibration direction across the travel direction that can be filtered.'},
    {q:'Unpolarised light of intensity I₀ passes through one ideal polaroid. The transmitted intensity is:', o:['I₀','I₀/2','I₀/4','0'], a:1, s:'Averaging cos²θ over all random directions gives ½.'},
    {q:'The whole YDSE apparatus is immersed in water (n = 4/3). The fringe width becomes:', o:['4/3 times','3/4 times','Unchanged','Zero'], a:1, s:'The wavelength in water is λ/n, so β = λD/(nd) is reduced by the factor 3/4.'}
  ],
  gen(){
    const l = pick([450,500,550,600,650]), D = pick([1,1.5,2]), d = pick([0.2,0.3,0.5]);
    const ans = l*1e-9*D/(d*1e-3)*1e3;
    return { q:`In a double-slit experiment, light of wavelength ${l} nm falls on slits ${d} mm apart, and the screen is ${D} m away. Find the fringe width in mm.`,
      ans, unit:'mm', steps:[
        'β = λD/d',
        `β = ${l}×10⁻⁹ × ${D} / (${d}×10⁻³)`,
        `β = ${sci(ans*1e-3)} m = <b>${sci(ans)} mm</b>`]};
  }
},
{ id:'c12-11', cls:12, n:11, title:'Dual Nature of Radiation and Matter', unit:'Dual Nature of Radiation and Matter', sim:'photo',
  hook:'Shine light on a metal and electrons fly out, but only if each photon carries enough energy. Brightness cannot make up for the wrong colour. Electrons, in turn, behave like waves.',
  concepts:[
    ['Electron emission','Electrons need a minimum energy, the work function φ₀, to escape a metal surface. It can come from heat, a strong field, or light.'],
    ['Photoelectric observations','(1) Emission needs frequency above a threshold ν₀. (2) Maximum kinetic energy rises with frequency, not intensity. (3) Photocurrent rises with intensity. (4) Emission is instantaneous.'],
    ['Why waves fail','A classical wave would deliver energy gradually and let bright dim-red light eject electrons eventually. Experiments show neither happens.'],
    ['Einstein\'s explanation','Light comes in photons of energy hν. One photon gives all its energy to one electron: K<sub>max</sub> = hν − φ₀. More intensity means more photons, not more energetic ones.'],
    ['Stopping potential','The reverse voltage V₀ that just stops the fastest electrons: eV₀ = K<sub>max</sub>. Plotting V₀ against ν gives a straight line of slope h/e.'],
    ['Matter waves','De Broglie proposed that every moving particle has a wavelength λ = h/p. It is only noticeable for very light particles such as electrons.']
  ],
  formulas:[
    ['Photon energy','E = hν = hc/λ, &nbsp; E(eV) ≈ 1240/λ(nm)'],
    ['Einstein\'s equation','K<sub>max</sub> = hν − φ<sub>0</sub> = eV<sub>0</sub>'],
    ['Threshold','ν<sub>0</sub> = φ<sub>0</sub>/h, &nbsp; λ<sub>0</sub> = hc/φ<sub>0</sub>'],
    ['de Broglie','λ = h/p = h/mv = h/√(2mK)'],
    ['Electron through V volts','λ = 1.227/√V nm']
  ],
  apps:[
    ['Automatic doors and light sensors','Photocells produce current when light falls on them. Blocking the beam stops the current and triggers a door, alarm or counter.'],
    ['Electron microscopes','Electrons accelerated through thousands of volts have wavelengths far shorter than visible light, so they resolve details like viruses and crystal lattices.'],
    ['Night-vision tubes','Faint photons free electrons from a photocathode; these are multiplied and hit a phosphor screen, turning a dim scene into a visible image.']
  ],
  mcq:[
    {q:'The stopping potential in the photoelectric effect depends on:', o:['Intensity only','Frequency of light','Exposure time','Area of plate'], a:1, s:'eV₀ = hν − φ₀. It depends on frequency (and the metal), not on intensity.'},
    {q:'Increasing the intensity of light (above threshold frequency) increases:', o:['K<sub>max</sub>','Stopping potential','Photocurrent','Work function'], a:2, s:'More photons per second eject more electrons per second, so the current rises. Each electron\'s maximum energy is unchanged.'},
    {q:'Photons of 5 eV fall on a metal with work function 2 eV. K<sub>max</sub> is:', o:['7 eV','3 eV','2.5 eV','10 eV'], a:1, s:'K<sub>max</sub> = 5 − 2 = 3 eV.'},
    {q:'The de Broglie wavelength of an electron accelerated through 100 V is about:', o:['1.23 nm','0.123 nm','12.3 nm','0.0123 nm'], a:1, s:'λ = 1.227/√100 nm = 0.1227 nm, similar to X-ray wavelengths.'},
    {q:'Photoelectric emission begins:', o:['After a delay of seconds','Almost instantaneously','Only after heating','Only in a magnetic field'], a:1, s:'Each photon transfers its energy at once to a single electron, so emission starts within about 10⁻⁹ s.'}
  ],
  gen(){
    let met, l;
    do { met = pick([['sodium',2.75],['potassium',2.30],['caesium',2.14],['calcium',3.20]]); l = pick([200,250,300,350,400]); } while (1240/l <= met[1] + 0.1);
    const E = 1240/l, ans = E - met[1];
    return { q:`Light of wavelength ${l} nm falls on ${met[0]} (work function ${met[1]} eV). Find the stopping potential. (Use hc = 1240 eV nm)`,
      ans, unit:'V', steps:[
        `Photon energy E = 1240/λ = 1240/${l} = ${sci(E,4)} eV`,
        `K<sub>max</sub> = E − φ₀ = ${sci(E,4)} − ${met[1]} = ${sci(ans)} eV`,
        `eV₀ = K<sub>max</sub> ⇒ V₀ = <b>${sci(ans)} V</b>`]};
  }
},
{ id:'c12-12', cls:12, n:12, title:'Atoms', unit:'Atoms and Nuclei', sim:'bohr',
  hook:'Hydrogen glows in sharp colours, not a smooth rainbow. Bohr explained this with orbits of fixed energy, and each spectral line is an electron jumping between them.',
  concepts:[
    ['Alpha-particle scattering','Geiger and Marsden fired alpha particles at gold foil. Most passed straight through, but a few bounced almost straight back. This showed a tiny, dense, positive nucleus.'],
    ['Rutherford\'s model and its problem','Electrons orbit the nucleus like planets. But an accelerating charge should radiate energy and spiral inward, so classical physics predicts the atom collapses.'],
    ['Bohr\'s postulates','(1) Electrons move in certain stable orbits without radiating. (2) Allowed orbits have angular momentum nh/2π. (3) A photon is emitted or absorbed when an electron jumps: hν = E<sub>i</sub> − E<sub>f</sub>.'],
    ['Energy levels of hydrogen','E<sub>n</sub> = −13.6/n² eV. Negative energy means the electron is bound. Ionisation from the ground state needs 13.6 eV.'],
    ['Spectral series','Jumps ending on n = 1 form the Lyman series (UV), on n = 2 the Balmer series (visible), on n = 3 Paschen (IR), then Brackett and Pfund (far IR).'],
    ['De Broglie\'s explanation','An orbit is stable when a whole number of electron wavelengths fits around it: 2πr = nλ. This gives Bohr\'s quantisation rule directly.']
  ],
  formulas:[
    ['Orbit radius (H)','r<sub>n</sub> = 0.529 n<sup>2</sup> Å'],
    ['Energy levels (H)','E<sub>n</sub> = −13.6/n<sup>2</sup> eV'],
    ['Quantisation','mvr = nh/2π, &nbsp; 2πr = nλ'],
    ['Photon from a jump','hν = E<sub>i</sub> − E<sub>f</sub>'],
    ['Rydberg formula','1/λ = R(1/n<sub>f</sub><sup>2</sup> − 1/n<sub>i</sub><sup>2</sup>), &nbsp; R = 1.097 × 10<sup>7</sup> m<sup>−1</sup>']
  ],
  apps:[
    ['Neon and sodium lamps','Each gas has its own energy levels, so it glows in its own colours. Sodium street lamps give their typical orange-yellow from a single strong line near 589 nm.'],
    ['Reading starlight','Dark lines in a star\'s spectrum match the levels of particular elements. Astronomers use them to find what stars are made of and how hot they are.'],
    ['Lasers','A laser relies on many atoms dropping between the same two energy levels together, producing light of one precise wavelength.']
  ],
  mcq:[
    {q:'The energy needed to ionise a hydrogen atom from its ground state is:', o:['10.2 eV','13.6 eV','3.4 eV','1.51 eV'], a:1, s:'The electron must go from E₁ = −13.6 eV to E = 0, needing 13.6 eV.'},
    {q:'The Balmer series of hydrogen lies in the:', o:['Ultraviolet','Visible region','Infrared','X-ray region'], a:1, s:'Balmer lines end on n = 2. The first few (656, 486, 434, 410 nm) are visible.'},
    {q:'The radius of the second Bohr orbit compared with the first is:', o:['2 times','4 times','½','Same'], a:1, s:'r ∝ n². For n = 2, r is 4 times r₁.'},
    {q:'Most alpha particles passing straight through gold foil showed that:', o:['The atom is mostly empty space','Electrons are heavy','Gold is soft','Nuclei are negative'], a:0, s:'If mass and positive charge were spread out, all particles would deflect slightly. Mostly empty space with a tiny nucleus explains clean passage for most.'},
    {q:'A hydrogen electron drops from n = 3 to n = 2. The photon energy is:', o:['1.89 eV','10.2 eV','12.1 eV','3.4 eV'], a:0, s:'ΔE = 13.6(1/4 − 1/9) = 13.6 × 5/36 ≈ 1.89 eV (the red 656 nm Balmer line).'}
  ],
  gen(){
    const nf = pick([1,2,3]), ni = nf + pick([1,2,3]);
    const inv = 1.097e7*(1/(nf*nf) - 1/(ni*ni)), ans = 1e9/inv;
    const ser = ['Lyman','Balmer','Paschen'][nf-1];
    return { q:`A hydrogen atom\'s electron jumps from n = ${ni} to n = ${nf}. Find the wavelength of the emitted photon in nm. (R = 1.097 × 10⁷ m⁻¹)`,
      ans, unit:'nm', steps:[
        `1/λ = R(1/n<sub>f</sub>² − 1/n<sub>i</sub>²) = 1.097×10⁷ × (1/${nf*nf} − 1/${ni*ni})`,
        `1/λ = ${sci(inv,4)} m⁻¹`,
        `λ = ${sci(1/inv)} m = <b>${sci(ans)} nm</b>`,
        `This line belongs to the ${ser} series.`]};
  }
},
{ id:'c12-13', cls:12, n:13, title:'Nuclei', unit:'Atoms and Nuclei', sim:'binding',
  hook:'A nucleus weighs less than the protons and neutrons inside it. That missing mass is the binding energy, and the shape of the binding-energy curve explains why both splitting uranium and fusing hydrogen release energy.',
  concepts:[
    ['Composition','A nucleus has Z protons and N neutrons; A = Z + N is the mass number. Isotopes share Z but differ in N.'],
    ['Size and density','Radius R = R₀A<sup>1/3</sup> with R₀ ≈ 1.2 fm. Volume is proportional to A, so all nuclei have nearly the same enormous density, about 2.3 × 10¹⁷ kg/m³.'],
    ['Mass–energy equivalence','E = mc². One atomic mass unit (u) is equivalent to 931.5 MeV.'],
    ['Mass defect and binding energy','The mass defect Δm is the difference between the separate nucleon masses and the nucleus mass. Binding energy Δm c² is the energy needed to pull the nucleus apart.'],
    ['Binding energy per nucleon','Rises steeply for light nuclei, peaks near iron-56 at about 8.8 MeV, then falls slowly. Nuclei near the peak are the most stable.'],
    ['Nuclear force','Very strong, short range (a few fm), attractive between all nucleons regardless of charge. It saturates, so each nucleon interacts only with near neighbours.'],
    ['Fission and fusion','Heavy nuclei splitting into medium ones (fission) and light nuclei joining (fusion) both move towards the peak, so both release energy.']
  ],
  formulas:[
    ['Nuclear radius','R = R<sub>0</sub>A<sup>1/3</sup>, &nbsp; R<sub>0</sub> ≈ 1.2 fm'],
    ['Mass defect','Δm = Zm<sub>p</sub> + (A − Z)m<sub>n</sub> − M'],
    ['Binding energy','E<sub>b</sub> = Δm c<sup>2</sup>'],
    ['Conversion','1 u = 931.5 MeV/c<sup>2</sup> = 1.66 × 10<sup>−27</sup> kg'],
    ['Per nucleon','B/A = E<sub>b</sub>/A']
  ],
  apps:[
    ['Nuclear power at Kudankulam','Each uranium-235 fission releases about 200 MeV, millions of times more than burning a molecule of coal. The heat makes steam to drive turbines.'],
    ['The Sun\'s energy','In the Sun\'s core, hydrogen fuses into helium. About 0.7% of the mass turns into energy, which reaches us as sunlight.'],
    ['Nuclear medicine','PET scans use positron-emitting isotopes; when positrons meet electrons, their mass converts into gamma rays that detectors trace.']
  ],
  mcq:[
    {q:'Nuclear density:', o:['Increases with A','Decreases with A','Is nearly independent of A','Is zero for light nuclei'], a:2, s:'R³ ∝ A, so volume ∝ A and mass ∝ A. Their ratio stays constant.'},
    {q:'Binding energy per nucleon is greatest for nuclei near:', o:['Hydrogen','Helium','Iron-56','Uranium-238'], a:2, s:'The curve peaks around A ≈ 56–62 at about 8.8 MeV per nucleon.'},
    {q:'The radius of an aluminium-27 nucleus (R₀ = 1.2 fm) is:', o:['1.2 fm','3.6 fm','32 fm','9 fm'], a:1, s:'R = 1.2 × 27<sup>1/3</sup> = 1.2 × 3 = 3.6 fm.'},
    {q:'The energy equivalent of 1 u is:', o:['9.31 MeV','931.5 MeV','1 MeV','93.1 eV'], a:1, s:'1 u × c² = 931.5 MeV.'},
    {q:'Fission of a heavy nucleus releases energy because the products have:', o:['Lower binding energy per nucleon','Higher binding energy per nucleon','More protons','Less charge'], a:1, s:'The fragments sit nearer the peak of the curve, so they are more tightly bound. The difference in binding energy is released.'}
  ],
  gen(){
    const nuc = pick([['helium-4','⁴He',2,2,4.002603],['carbon-12','¹²C',6,6,12.000000],['oxygen-16','¹⁶O',8,8,15.994915],['iron-56','⁵⁶Fe',26,30,55.934937]]);
    const [nm,sym,Z,N,M] = nuc, dm = Z*1.007825 + N*1.008665 - M, E = dm*931.5, ans = E/(Z+N);
    return { q:`Find the binding energy per nucleon of ${nm} (${sym}). Atomic mass = ${M} u, m(¹H) = 1.007825 u, m<sub>n</sub> = 1.008665 u, 1 u = 931.5 MeV.`,
      ans, unit:'MeV', steps:[
        `Δm = ${Z}(1.007825) + ${N}(1.008665) − ${M} = ${sci(dm,5)} u`,
        `E<sub>b</sub> = ${sci(dm,5)} × 931.5 = ${sci(E,4)} MeV`,
        `B/A = ${sci(E,4)} / ${Z+N} = <b>${sci(ans)} MeV per nucleon</b>`,
        'Using the hydrogen atom mass (not the bare proton) makes the electron masses cancel.']};
  }
},
{ id:'c12-14', cls:12, n:14, title:'Semiconductor Electronics', unit:'Electronic Devices', sim:'rectifier',
  hook:'Add a few impurity atoms per million to pure silicon and you can control exactly how current flows. Join two kinds together and you get a diode, the one-way valve inside every phone charger.',
  concepts:[
    ['Energy bands','In solids, atomic energy levels spread into bands. Conductors have overlapping bands; insulators have a large gap (over 3 eV); semiconductors have a small gap (about 1.1 eV for Si, 0.7 eV for Ge).'],
    ['Intrinsic semiconductors','In pure silicon, heat breaks some bonds, creating equal numbers of free electrons and holes: n<sub>e</sub> = n<sub>h</sub> = n<sub>i</sub>.'],
    ['n-type and p-type','Adding pentavalent atoms (P, As) donates electrons, giving n-type with electrons as majority carriers. Trivalent atoms (B, Al) accept electrons, giving p-type with holes as majority carriers. The material stays electrically neutral.'],
    ['Mass action law','At equilibrium n<sub>e</sub>n<sub>h</sub> = n<sub>i</sub>². Doping raises one carrier type and suppresses the other.'],
    ['p-n junction','Electrons and holes diffuse across and recombine, leaving a depletion layer of fixed ions with a barrier potential (about 0.7 V for Si).'],
    ['Biasing','Forward bias (p to +) narrows the depletion layer and current rises sharply after the knee voltage. Reverse bias widens it and only a tiny leakage current flows until breakdown.'],
    ['Rectifiers','A half-wave rectifier uses one diode and passes alternate half-cycles. A full-wave rectifier uses two diodes (with a centre-tapped transformer) or four (bridge) and uses both halves, giving ripple at twice the mains frequency.']
  ],
  formulas:[
    ['Intrinsic','n<sub>e</sub> = n<sub>h</sub> = n<sub>i</sub>'],
    ['Mass action law','n<sub>e</sub>n<sub>h</sub> = n<sub>i</sub><sup>2</sup>'],
    ['n-type (N<sub>D</sub> ≫ n<sub>i</sub>)','n<sub>e</sub> ≈ N<sub>D</sub>, &nbsp; n<sub>h</sub> = n<sub>i</sub><sup>2</sup>/N<sub>D</sub>'],
    ['Barrier potential','≈ 0.7 V (Si), ≈ 0.3 V (Ge)'],
    ['Ripple frequency','Half-wave: ν &nbsp;·&nbsp; Full-wave: 2ν'],
    ['Average output (ideal)','Half-wave: V<sub>m</sub>/π &nbsp;·&nbsp; Full-wave: 2V<sub>m</sub>/π']
  ],
  apps:[
    ['Phone and laptop chargers','A diode bridge turns the AC from the wall into pulsing DC, then capacitors smooth it before it reaches your battery.'],
    ['LEDs','In some semiconductors, electrons falling across the band gap release light. The size of the gap sets the colour, which is why LEDs are so efficient and come in pure colours.'],
    ['Solar panels','Light falling on a large p-n junction frees electron–hole pairs; the junction\'s built-in field pushes them apart, driving a current through your load.']
  ],
  mcq:[
    {q:'Doping silicon with phosphorus produces:', o:['p-type','n-type','Intrinsic','An insulator'], a:1, s:'Phosphorus has 5 valence electrons. Four bond with silicon and the fifth becomes a free electron.'},
    {q:'Under forward bias, the depletion layer:', o:['Widens','Narrows','Is unchanged','Disappears in reverse'], a:1, s:'The applied voltage opposes the barrier, pushing carriers towards the junction and shrinking the depletion region.'},
    {q:'A full-wave rectifier runs on 50 Hz mains. The output ripple frequency is:', o:['25 Hz','50 Hz','100 Hz','200 Hz'], a:2, s:'Both half-cycles give an output pulse, so there are 100 pulses per second.'},
    {q:'In a p-type semiconductor, the majority carriers are:', o:['Electrons','Holes','Protons','Ions'], a:1, s:'Trivalent dopants create holes, which far outnumber the thermally generated electrons.'},
    {q:'The correct order of band gaps is:', o:['Conductor > semiconductor > insulator','Insulator > semiconductor > conductor','Semiconductor > insulator > conductor','All equal'], a:1, s:'Insulators have the largest gap, semiconductors a small one, and conductors effectively none.'}
  ],
  gen(){
    const ni = 1.5e16, ND = pick([1e20,5e21,1e22,5e22]);
    const ans = ni*ni/ND;
    return { q:`Pure silicon has n<sub>i</sub> = 1.5 × 10¹⁶ m⁻³. It is doped with ${sci(ND,2)} m⁻³ phosphorus atoms. Find the hole concentration (m⁻³).`,
      ans, unit:'m⁻³', steps:[
        `Phosphorus is a donor, so n<sub>e</sub> ≈ N<sub>D</sub> = ${sci(ND,2)} m⁻³`,
        'Mass action law: n<sub>h</sub> = n<sub>i</sub>²/n<sub>e</sub>',
        `n<sub>h</sub> = (1.5×10¹⁶)² / ${sci(ND,2)} = 2.25×10³² / ${sci(ND,2)}`,
        `n<sub>h</sub> = <b>${sci(ans)} m⁻³</b>, far fewer than electrons.`]};
  }
}
];
})();
