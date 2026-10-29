/* Full lessons — Class 12, Chapters 1–5. Original explanations written for NCERT Physics Lab. */
(function(){
const L = (id, o) => { (window.LESSONS = window.LESSONS || {})[id] = o; };

L('c12-1', {
intro:'Rub a comb through dry hair and it picks up bits of paper. This chapter explains what electric charge is, how charges push and pull (Coulomb\'s law), and how the idea of an electric field, together with Gauss\'s law, makes even complicated charge arrangements easy to handle.',
sections:[
{t:'Electric charge', b:[
 ['p','Rubbing two suitable materials together transfers electrons from one to the other. Glass rubbed with silk loses electrons and becomes <b>positive</b>; the silk becomes <b>negative</b>. Benjamin Franklin named the two kinds of charge positive and negative. <b>Like charges repel; unlike charges attract.</b>'],
 ['p','A simple <b>gold-leaf electroscope</b> detects charge: when a charged body touches its metal cap, charge spreads to two thin gold leaves, which repel each other and spread apart.'],
 ['simple','Charging by rubbing does not create charge. It just moves electrons from one body to another.']
]},
{t:'Conductors, insulators and charging by induction', b:[
 ['p','<b>Conductors</b> (metals, the human body, Earth, salty water) let charge move through them freely, because they have electrons that are not tied to particular atoms. <b>Insulators</b> (glass, plastic, rubber, dry wood) hold charge where it is placed. Semiconductors fall in between.'],
 ['p','Connecting a charged conductor to Earth lets its excess charge flow away: this is <b>earthing</b> or grounding. Household appliances have an earth wire for safety.'],
 ['der','Charging a metal sphere by induction',[
   'Bring a negatively charged rod near (but not touching) an insulated metal sphere. Free electrons in the sphere are pushed to the far side, leaving the near side positive.',
   'Connect the far side to earth with a wire. The repelled electrons flow away to the ground.',
   'Remove the earth connection, then take the rod away.',
   'The sphere is left with a net positive charge, spread evenly over its surface. The rod has lost none of its own charge.']],
 ['p','Induction also explains why a charged comb attracts uncharged paper bits: the comb polarises the paper (pulling opposite charge nearer), and the nearer opposite charge is attracted more strongly than the farther like charge is repelled.']
]},
{t:'Basic properties of charge', b:[
 ['list',['<b>Additivity:</b> charges add like ordinary numbers, with their signs. A body with charges +2q, −5q and +q has total charge −2q.','<b>Conservation:</b> the total charge of an isolated system never changes. Charge can be transferred, and particle pairs can be created or destroyed, but always with zero net change.','<b>Quantisation:</b> every charge is a whole-number multiple of the basic charge e = 1.602 × 10⁻¹⁹ C: q = ne. An electron carries −e and a proton +e.']],
 ['p','Because e is so tiny, everyday charges (microcoulombs) involve about 10¹³ electrons, so quantisation is not noticed at large scales and charge seems continuous.'],
 ['ex','How many electrons must be removed from a body to give it a charge of +1 μC?',['n = q/e = 10⁻⁶/(1.6 × 10⁻¹⁹)'],'n ≈ 6.25 × 10¹²']
]},
{t:'Coulomb\'s law', b:[
 ['p','Charles Coulomb used a torsion balance to measure the force between charged spheres. For two point charges q₁ and q₂ a distance r apart in vacuum:'],
 ['eq','F = k |q₁q₂|/r² = (1/4πε₀) |q₁q₂|/r², &nbsp; k ≈ 9 × 10⁹ N m² C⁻²'],
 ['list',['ε₀ = 8.854 × 10⁻¹² C² N⁻¹ m⁻² is the <b>permittivity of free space</b>.','The force acts along the line joining the charges: repulsive for like charges, attractive for unlike.','In vector form, the force on q₂ due to q₁ is <b>F</b>₂₁ = (1/4πε₀)(q₁q₂/r²) <b>r̂</b>₁₂, where <b>r̂</b>₁₂ points from q₁ to q₂. It automatically gives the right direction for either sign.','Coulomb forces obey Newton\'s third law: F₁₂ = −F₂₁.','In a medium of dielectric constant K, the force is reduced K times.']],
 ['p','Electric forces are enormously stronger than gravity: between a proton and an electron, the electric force is about 10³⁹ times the gravitational force.'],
 ['ex','Two charges of +2 μC and −3 μC are 30 cm apart in air. Find the force between them.',['F = 9 × 10⁹ × 2 × 10⁻⁶ × 3 × 10⁻⁶/(0.3)² = 0.054/0.09'],'0.6 N, attractive']
]},
{t:'Forces between multiple charges', b:[
 ['p','<b>Principle of superposition:</b> the force on a charge due to several other charges is the vector sum of the forces due to each charge alone. Each pair interacts as if the others were not there.'],
 ['eq','<b>F</b>₁ = <b>F</b>₁₂ + <b>F</b>₁₃ + … + <b>F</b>₁ₙ'],
 ['ex','Three equal charges q are placed at the corners of an equilateral triangle of side l. What is the force on a charge Q at its centre?',['Each charge is at distance l/√3 from the centre and gives the same size of force.','The three forces are 120° apart, so by symmetry they add to zero.'],'Zero net force']
]},
{t:'Electric field', b:[
 ['p','Instead of thinking of charges acting directly at a distance, we say that a charge sets up an <b>electric field</b> in the space around it. Another charge placed there feels a force from the field. The field at a point is the force per unit positive test charge placed there:'],
 ['eq','<b>E</b> = <b>F</b>/q₀, &nbsp; for a point charge E = (1/4πε₀) q/r² &nbsp;(N/C, or V/m)'],
 ['list',['For a positive charge the field points away; for a negative charge it points towards the charge.','The force on any charge q in a field is <b>F</b> = q<b>E</b>. A positive charge moves along the field; an electron moves against it.','Fields from several charges add as vectors (superposition).','The field is real: it carries energy and momentum, and changes in it travel at the speed of light. This is what makes electromagnetic waves possible.']],
 ['ex','An electron falls through 1.5 cm in a uniform field of 2.0 × 10⁴ N/C. How long does it take? Compare with a proton.',['a = eE/m = 1.6 × 10⁻¹⁹ × 2 × 10⁴/9.1 × 10⁻³¹ ≈ 3.5 × 10¹⁵ m/s²','t = √(2s/a) = √(0.03/3.5 × 10¹⁵) ≈ 2.9 × 10⁻⁹ s','For a proton, mass is 1836 times larger, so t is √1836 ≈ 43 times longer ≈ 1.3 × 10⁻⁷ s'],'Electron ≈ 2.9 ns; proton ≈ 0.13 μs. Gravity is negligible in comparison.']
]},
{t:'Electric field lines', b:[
 ['p','<b>Field lines</b> are curves drawn so that the tangent at any point gives the direction of the field there. Faraday introduced them to picture fields.'],
 ['list',['Field lines start on positive charges and end on negative charges (or go to or come from infinity).','The number of lines from a charge is proportional to its size; where lines are closer together the field is stronger.','In a charge-free region, field lines are continuous smooth curves without breaks.','Two field lines never cross, because the field cannot point two ways at once.','Electrostatic field lines never form closed loops (the field is conservative).']],
 ['p','Typical patterns: radial lines for a single charge; lines curving from + to − for a dipole; lines bending away from each other, with a neutral point between, for two like charges; parallel equally spaced lines for a uniform field.']
]},
{t:'Electric flux', b:[
 ['p','<b>Electric flux</b> through a surface measures how many field lines pass through it. For a small flat area ΔS with its normal at angle θ to the field:'],
 ['eq','ΔΦ = <b>E</b>·Δ<b>S</b> = E ΔS cosθ, &nbsp; Φ = ∮<b>E</b>·d<b>S</b> for a closed surface &nbsp;(N m²/C)'],
 ['list',['The area vector Δ<b>S</b> points perpendicular to the surface; for a closed surface it points outward.','Flux is greatest when the surface faces the field directly (θ = 0) and zero when the field skims along it (θ = 90°).','Field lines leaving a closed surface count as positive flux, lines entering count as negative.']]
]},
{t:'Electric dipole', b:[
 ['p','An <b>electric dipole</b> is a pair of equal and opposite charges +q and −q separated by a small distance 2a. Its <b>dipole moment</b> is <b>p</b> = q × 2a, pointing from −q to +q (unit C m). Many molecules, such as H₂O, are permanent dipoles; others become dipoles (are polarised) in an external field.'],
 ['der','Field on the axis of a dipole (distance r from centre)',[
   'Point P is on the line through the charges, nearer to +q. Distances: r − a from +q, r + a from −q.',
   'E<sub>+q</sub> = kq/(r − a)² away from +q; E<sub>−q</sub> = kq/(r + a)² towards −q. Both lie along the axis, in opposite directions.',
   'E = kq[1/(r − a)² − 1/(r + a)²] = kq × 4ar/(r² − a²)².',
   'For r ≫ a: E = 2k(2qa)/r³ = 2kp/r³, pointing along <b>p</b>.']],
 ['der','Field on the equatorial line (perpendicular bisector)',[
   'P is at distance r from the centre, at distance √(r² + a²) from each charge. Each field has magnitude kq/(r² + a²).',
   'Their components perpendicular to the axis cancel; components parallel to the axis add.',
   'E = 2 × kq/(r² + a²) × a/√(r² + a²) = kp/(r² + a²)<sup>3/2</sup>.',
   'For r ≫ a: E = kp/r³, pointing opposite to <b>p</b>.']],
 ['eq','E<sub>axial</sub> = 2kp/r³, &nbsp; E<sub>equatorial</sub> = kp/r³ &nbsp;(r ≫ a)'],
 ['p','A dipole\'s field falls off as 1/r³, faster than the 1/r² of a single charge, because at large distances the fields of +q and −q nearly cancel.']
]},
{t:'Dipole in a uniform external field', b:[
 ['der','Torque on a dipole',[
   'Place a dipole at angle θ to a uniform field <b>E</b>. Force on +q is q<b>E</b>; force on −q is −q<b>E</b>. They cancel, so the <b>net force is zero</b>.',
   'But they act at different points and form a couple. Its torque = force × perpendicular separation = qE × 2a sinθ = pE sinθ.',
   'In vector form: <b>τ</b> = <b>p</b> × <b>E</b>.',
   'The torque turns the dipole to line up with the field. It is zero when <b>p</b> is parallel (stable) or antiparallel (unstable) to <b>E</b>.']],
 ['eq','<b>τ</b> = <b>p</b> × <b>E</b>, &nbsp; |τ| = pE sinθ'],
 ['p','In a <b>non-uniform</b> field there is also a net force: a dipole aligned with the field is pulled towards stronger field. This is why a charged comb attracts neutral bits of paper.']
]},
{t:'Continuous charge distributions', b:[
 ['p','For charge spread over a body, we use charge densities and add (integrate) the fields of small pieces.'],
 ['list',['<b>Linear charge density</b> λ = charge per unit length (C/m), for a wire.','<b>Surface charge density</b> σ = charge per unit area (C/m²), for a sheet or the surface of a conductor.','<b>Volume charge density</b> ρ = charge per unit volume (C/m³), for a charged solid.']]
]},
{t:'Gauss\'s law', b:[
 ['p','<b>Gauss\'s law:</b> the total electric flux through any closed surface equals the total charge enclosed by the surface divided by ε₀.'],
 ['eq','∮<b>E</b>·d<b>S</b> = q<sub>enclosed</sub>/ε₀'],
 ['der','Checking it for a point charge',[
   'Surround a point charge q with a sphere of radius r centred on it.',
   'Everywhere on the sphere, E = kq/r², pointing straight outward, parallel to d<b>S</b>.',
   'Flux = E × (area) = [q/(4πε₀r²)] × 4πr² = q/ε₀. The radius cancels, as it must.']],
 ['list',['It holds for <b>any</b> closed surface (a "Gaussian surface"), whatever its shape.','Charges outside the surface contribute zero net flux: every line that enters also leaves.','The field E in the law is the total field from all charges, inside and outside.','Gauss\'s law is most useful when symmetry lets you choose a surface on which E is constant and perpendicular (or parallel) to the surface.']],
 ['simple','Count the charge inside a closed bag, divide by ε₀, and you know how much field leaks out through the bag.']
]},
{t:'Applications of Gauss\'s law', b:[
 ['der','Infinitely long straight charged wire (charge density λ)',[
   'By symmetry, E points radially outward from the wire and depends only on the distance r.',
   'Choose a Gaussian cylinder of radius r and length l around the wire.',
   'Flux through the flat end caps is zero (E is parallel to them). Flux through the curved surface = E × 2πrl.',
   'Charge enclosed = λl. Gauss: E × 2πrl = λl/ε₀ ⇒ E = λ/(2πε₀r).']],
 ['der','Infinite plane sheet (surface density σ)',[
   'By symmetry, E is perpendicular to the sheet, pointing away from it on both sides.',
   'Choose a cylinder (a "pillbox") of end area A crossing the sheet.',
   'Flux through the curved side is zero; through the two ends it is 2EA.',
   'Charge enclosed = σA. So 2EA = σA/ε₀ ⇒ E = σ/(2ε₀). It does not depend on distance.']],
 ['der','Uniformly charged thin spherical shell (radius R, charge q)',[
   '<b>Outside</b> (r > R): a concentric Gaussian sphere of radius r encloses all of q. E × 4πr² = q/ε₀ ⇒ E = q/(4πε₀r²), as if all the charge were at the centre.',
   '<b>Inside</b> (r < R): a Gaussian sphere inside encloses no charge, so E = 0 everywhere inside the shell.']],
 ['eq','Wire: λ/2πε₀r &nbsp;·&nbsp; Sheet: σ/2ε₀ &nbsp;·&nbsp; Shell: q/4πε₀r² outside, 0 inside'],
 ['p','Two oppositely charged parallel sheets (as in a capacitor) give E = σ/ε₀ between them and zero outside.'],
 ['ex','An infinite line charge produces a field of 9 × 10⁴ N/C at 2 cm. Find λ.',['From E = λ/(2πε₀r): λ = 2πε₀rE = 2π × 8.85 × 10⁻¹² × 0.02 × 9 × 10⁴'],'λ = 10⁻⁷ C/m = 0.1 μC/m']
]}
],
recap:['Charge is additive, conserved and quantised (q = ne).','Coulomb: F = kq₁q₂/r²; forces from many charges superpose.','E = F/q₀; point charge E = kq/r²; field lines never cross.','Dipole: p = 2qa; E<sub>axial</sub> = 2kp/r³, E<sub>eq</sub> = kp/r³; τ = p × E, no net force in uniform field.','Gauss: ∮E·dS = q<sub>enc</sub>/ε₀. Wire λ/2πε₀r, sheet σ/2ε₀, shell 0 inside.'],
exam:['State Coulomb\'s law in vector form; problems with several charges.','Derive the field of a dipole on its axis and equatorial line.','Derive torque on a dipole in a uniform field.','State Gauss\'s law; derive fields of an infinite wire, an infinite sheet and a spherical shell.']
});

L('c12-2', {
intro:'Electric potential is to electric fields what height is to gravity: a scalar that tells you how much energy a charge gains or loses as it moves. This chapter builds the idea of potential and then uses it to understand capacitors, devices that store charge and energy.',
sections:[
{t:'Electrostatic potential energy and potential', b:[
 ['p','The electrostatic force is <b>conservative</b>: the work it does moving a charge between two points does not depend on the path. So we can define a potential energy U, just as for gravity. Moving a test charge q from point R to point P against the field, the external work done (slowly, without acceleration) equals the increase in potential energy:'],
 ['eq','U<sub>P</sub> − U<sub>R</sub> = W<sub>RP</sub>'],
 ['p','The <b>electric potential</b> V at a point is the potential energy per unit positive charge, or the work done per unit charge in bringing a test charge from infinity to that point. Its unit is the volt (1 V = 1 J/C). Only potential <b>differences</b> are physically meaningful; we usually choose V = 0 at infinity.'],
 ['eq','V = W/q, &nbsp; V<sub>P</sub> − V<sub>R</sub> = (U<sub>P</sub> − U<sub>R</sub>)/q'],
 ['simple','A volt is "joules per coulomb": a 12 V battery gives each coulomb of charge 12 J of energy.']
]},
{t:'Potential due to a point charge', b:[
 ['der','V at distance r from a point charge Q',[
   'Bring a unit positive test charge from infinity to distance r along a radial line.',
   'At distance r′ the field is E = Q/(4πε₀r′²), outward. The external force needed is equal and opposite.',
   'Work done per unit charge = −∫<sub>∞</sub><sup>r</sup> Q/(4πε₀r′²) dr′ = Q/(4πε₀r).',
   'So V(r) = Q/(4πε₀r). It is positive near a positive charge and negative near a negative one.']],
 ['eq','V = (1/4πε₀) Q/r'],
 ['p','Potential falls off as 1/r, while the field falls off as 1/r². Potential is a scalar, so it has no direction and potentials from several charges just add algebraically:'],
 ['eq','V = (1/4πε₀)(q₁/r₁ + q₂/r₂ + … + qₙ/rₙ)'],
 ['ex','Find the potential 9 cm from a charge of 4 × 10⁻⁷ C, and the work to bring a 2 × 10⁻⁹ C charge there from infinity.',['V = 9 × 10⁹ × 4 × 10⁻⁷/0.09 = 4 × 10⁴ V','W = qV = 2 × 10⁻⁹ × 4 × 10⁴'],'V = 4 × 10⁴ V; W = 8 × 10⁻⁵ J']
]},
{t:'Potential due to a dipole and a charged shell', b:[
 ['der','Potential of a dipole at a distant point',[
   'Point P is at distance r from the dipole centre, at angle θ to the dipole axis. Distances to +q and −q are approximately r − a cosθ and r + a cosθ.',
   'V = kq[1/(r − a cosθ) − 1/(r + a cosθ)] ≈ kq(2a cosθ)/r² for r ≫ a.',
   'V = kp cosθ/r² = k(<b>p</b>·<b>r̂</b>)/r².',
   'On the axis (θ = 0): V = kp/r². On the equatorial plane (θ = 90°): V = 0.']],
 ['eq','V<sub>dipole</sub> = (1/4πε₀) p cosθ/r²'],
 ['p','Note: the equatorial plane of a dipole has zero potential but a non-zero field. Zero potential does not mean zero field.'],
 ['p','<b>Uniformly charged spherical shell</b> (radius R, charge q): outside, V = kq/r, as for a point charge. Inside, the field is zero, so no work is done moving a charge around inside, and the potential is constant, equal to its surface value kq/R.']
]},
{t:'Equipotential surfaces', b:[
 ['p','An <b>equipotential surface</b> is a surface on which the potential has the same value everywhere. No work is done in moving a charge along it.'],
 ['list',['For a point charge, equipotentials are concentric spheres.','For a uniform field (say along x), equipotentials are flat planes perpendicular to x.','The field at every point is perpendicular to the equipotential surface through that point. If it were not, it would have a component along the surface and work would be done along it.','Equipotentials are closer together where the field is stronger.','Two equipotential surfaces never intersect.']],
 ['der','Relation between field and potential',[
   'Move a small distance δl perpendicular to the equipotentials, from potential V to V − |δV|, in the direction of the field.',
   'Work done by the field on a unit charge = E δl. This equals the drop in potential |δV|.',
   'So E = |δV|/δl, or in general E = −dV/dl.',
   'The field points in the direction in which potential decreases fastest. In one dimension, E = −dV/dx.']],
 ['eq','E = −dV/dr'],
 ['ex','The potential in a region is V = 6x − 8y (in volts, with x, y in m). Find the field.',['E<sub>x</sub> = −∂V/∂x = −6 V/m; E<sub>y</sub> = −∂V/∂y = +8 V/m'],'|E| = 10 V/m']
]},
{t:'Potential energy of a system of charges', b:[
 ['der','Two charges',[
   'Bring q₁ from infinity to its place: no work, because there is no field yet.',
   'Bring q₂ from infinity to distance r₁₂ from q₁: work = q₂ × (potential of q₁ there) = kq₁q₂/r₁₂.',
   'So U = kq₁q₂/r₁₂. It is positive for like charges (work was needed to push them together) and negative for unlike ones.']],
 ['eq','U = (1/4πε₀) q₁q₂/r₁₂; &nbsp; three charges: U = k(q₁q₂/r₁₂ + q₁q₃/r₁₃ + q₂q₃/r₂₃)'],
 ['der','Potential energy of a dipole in a uniform field',[
   'Rotating a dipole from angle θ₀ to θ in field E requires work W = ∫τ dθ = ∫pE sinθ dθ = pE(cosθ₀ − cosθ).',
   'Taking U = 0 at θ = 90°: U(θ) = −pE cosθ = −<b>p</b>·<b>E</b>.',
   'U is lowest (−pE) when <b>p</b> lines up with <b>E</b>, the stable position.']],
 ['p','A single charge q in an external potential V(r) has potential energy qV(r). The <b>electron volt</b> (eV) is the energy gained by an electron moving through 1 V: 1 eV = 1.6 × 10⁻¹⁹ J.'],
 ['ex','Four charges +q, −q, +q, −q sit at the corners of a square of side a, alternating. Find the work needed to assemble them.',['Four adjacent pairs (unlike, distance a): 4 × (−kq²/a)','Two diagonal pairs (like, distance √2a): 2 × kq²/(√2a)','U = (kq²/a)(−4 + √2)'],'U ≈ −2.59 kq²/a (negative: the arrangement holds together)']
]},
{t:'Conductors in electrostatics', b:[
 ['list',['<b>Inside a conductor, E = 0.</b> Free electrons would move if there were any field, and they keep moving until the field inside is cancelled.','<b>Just outside, E is perpendicular to the surface.</b> Any sideways component would push charges along the surface.','<b>Excess charge lives only on the surface.</b> A Gaussian surface just inside encloses no charge, because E = 0 there.','<b>The whole conductor is at one potential.</b> E = 0 inside means no work is needed to move charge from point to point.','<b>The field just outside is E = σ/ε₀</b> (from a Gaussian pillbox with one face inside the conductor).','<b>The field inside a hollow cavity is zero</b> (with no charge in the cavity), whatever the outside field. This is <b>electrostatic shielding</b>.']],
 ['p','Charge piles up at sharp points of a conductor, where σ and hence the field is largest. Lightning conductors use this: their sharp points discharge the surrounding air safely. Sensitive instruments are shielded inside metal boxes, and people in cars are protected during lightning.']
]},
{t:'Dielectrics and polarisation', b:[
 ['p','A <b>dielectric</b> is an insulator. Its charges cannot flow freely, but they can shift slightly in a field. In <b>non-polar</b> molecules (like O₂), the field pulls the electron cloud and nucleus apart a little, creating induced dipoles. In <b>polar</b> molecules (like H₂O), existing dipoles partly line up with the field.'],
 ['p','Either way, the dielectric becomes <b>polarised</b>. Its dipole moment per unit volume is the polarisation <b>P</b>. Inside the material the dipoles cancel, but they leave a thin layer of bound charge on each face, opposite in sign to the charges that created the field. These surface charges produce a field that partly cancels the applied field.'],
 ['eq','E<sub>inside</sub> = E₀/K, &nbsp; K = ε/ε₀ = dielectric constant (relative permittivity)'],
 ['p','For vacuum K = 1, air about 1.0006, paper about 3.5, glass 5–10, water about 80.']
]},
{t:'Capacitors and capacitance', b:[
 ['p','A <b>capacitor</b> is two conductors separated by an insulator. Connected to a battery, one conductor gets charge +Q and the other −Q. The potential difference V between them is proportional to Q:'],
 ['eq','C = Q/V &nbsp;(1 farad = 1 C/V)'],
 ['p','<b>Capacitance</b> depends only on the shapes, sizes and separation of the conductors and the insulator between them, not on Q or V. A farad is huge; practical capacitors are measured in μF, nF and pF.'],
 ['der','Parallel-plate capacitor',[
   'Two large plates of area A are separated by a small distance d. Charge densities are +σ and −σ, with σ = Q/A.',
   'Between the plates, the two sheets\' fields add: E = σ/2ε₀ + σ/2ε₀ = σ/ε₀. Outside they cancel.',
   'V = Ed = σd/ε₀ = Qd/(ε₀A).',
   'C = Q/V = ε₀A/d.']],
 ['eq','C = ε₀A/d &nbsp;(vacuum), &nbsp; C = Kε₀A/d &nbsp;(with dielectric)'],
 ['p','Inserting a dielectric of constant K multiplies the capacitance by K, because the dielectric reduces the field (and voltage) for the same charge. A dielectric also helps a capacitor withstand higher voltages before the insulator breaks down (dielectric strength; about 3 × 10⁶ V/m for air).'],
 ['ex','What plate area gives a 1 F capacitor with plates 1 cm apart in air?',['A = Cd/ε₀ = 1 × 0.01/8.85 × 10⁻¹²'],'≈ 1.1 × 10⁹ m², about 30 km × 30 km. That is why 1 F is a huge capacitance.']
]},
{t:'Combining capacitors', b:[
 ['der','Capacitors in series',[
   'In series, the same charge Q sits on every capacitor (charge on the inner plates is induced).',
   'Voltages add: V = V₁ + V₂ + … = Q/C₁ + Q/C₂ + ….',
   'V/Q = 1/C<sub>eq</sub> = 1/C₁ + 1/C₂ + ….',
   'The equivalent capacitance is smaller than the smallest one.']],
 ['der','Capacitors in parallel',[
   'In parallel, every capacitor has the same voltage V.',
   'Charges add: Q = Q₁ + Q₂ + … = C₁V + C₂V + ….',
   'C<sub>eq</sub> = Q/V = C₁ + C₂ + ….']],
 ['eq','Series: 1/C = 1/C₁ + 1/C₂ + … &nbsp;·&nbsp; Parallel: C = C₁ + C₂ + …'],
 ['simple','Capacitors combine the opposite way to resistors: series capacitors use the reciprocal rule, parallel ones just add.'],
 ['ex','Three capacitors of 2, 3 and 6 μF are connected (a) in series, (b) in parallel. Find the equivalent capacitance each way.',['Series: 1/C = 1/2 + 1/3 + 1/6 = 1 ⇒ C = 1 μF','Parallel: C = 2 + 3 + 6 = 11 μF'],'1 μF in series; 11 μF in parallel']
]},
{t:'Energy stored in a capacitor', b:[
 ['der','Work needed to charge a capacitor',[
   'Charge a capacitor gradually. When its charge is q′, the voltage is q′/C.',
   'Moving a further charge dq′ from one plate to the other needs work dW = (q′/C)dq′.',
   'Total work from 0 to Q: W = ∫₀<sup>Q</sup> (q′/C) dq′ = Q²/2C.',
   'This work is stored as electric potential energy.']],
 ['eq','U = Q²/2C = ½CV² = ½QV'],
 ['der','Where the energy lives: energy density',[
   'For a parallel-plate capacitor: U = ½CV² = ½(ε₀A/d)(Ed)² = ½ε₀E²(Ad).',
   'Ad is the volume between the plates, so the energy per unit volume is u = ½ε₀E².',
   'This holds for any electric field: energy is stored in the field itself.']],
 ['eq','u = ½ε₀E²'],
 ['p','When two charged capacitors are joined, charge redistributes until they share one voltage. Total charge is conserved, but some energy is always lost as heat and radiation in the connecting wires.'],
 ['ex','A 900 pF capacitor is charged to 100 V and then connected to an identical uncharged capacitor. How much energy is lost?',['Initial energy = ½ × 900 × 10⁻¹² × 10⁴ = 4.5 × 10⁻⁶ J','Charge shares equally: each has 50 V. Final energy = 2 × ½ × 900 × 10⁻¹² × 2500 = 2.25 × 10⁻⁶ J'],'2.25 × 10⁻⁶ J lost (half the original)']
]}
],
recap:['V = W/q; V = kQ/r for a point charge; potentials add as scalars.','E = −dV/dr; field lines are perpendicular to equipotentials.','U = kq₁q₂/r for two charges; dipole U = −p·E.','In a conductor E = 0 inside, charge sits on the surface, and the whole body is at one potential.','C = Q/V; parallel plates C = Kε₀A/d.','Series: 1/C adds; parallel: C adds. U = ½CV², u = ½ε₀E².'],
exam:['Derive the potential of a point charge and of a dipole.','Derive E = −dV/dr and explain equipotentials.','Derive PE of a system of charges and of a dipole in a field.','Derive the capacitance of a parallel-plate capacitor with and without a dielectric slab.','Derive series and parallel combinations and the energy stored in a capacitor.']
});

L('c12-3', {
intro:'When charges flow, we have an electric current. This chapter explains what happens inside a wire when current flows, introduces Ohm\'s law and resistivity, and gives you Kirchhoff\'s rules to solve any DC circuit.',
sections:[
{t:'Electric current', b:[
 ['p','<b>Electric current</b> is the rate of flow of charge through a cross-section. If a net charge q passes in time t, the average current is I = q/t. For a varying current, I = dq/dt. The SI unit is the ampere: 1 A = 1 C/s.'],
 ['p','By convention, current flows in the direction positive charges would move. In metal wires the actual carriers are electrons, which move the opposite way. In electrolytes and gases both positive and negative ions move.'],
 ['list',['Lightning: tens of thousands of amperes, for microseconds.','Household circuits: a few amperes.','Nerve signals: microamperes.']]
]},
{t:'Current in conductors and drift velocity', b:[
 ['p','In a metal, free electrons zoom around randomly at about 10⁵ m/s, colliding with the vibrating ions. With no field, their velocities average to zero: no current. Applying a field E gives each electron an acceleration −eE/m between collisions, so on top of the random motion there is a slow average drift against the field.'],
 ['der','Drift velocity and current',[
   'Each electron accelerates at a = −eE/m. The average time between collisions is the <b>relaxation time</b> τ.',
   'Averaging over all electrons gives the <b>drift velocity</b> v<sub>d</sub> = −(eE/m)τ.',
   'In time Δt, electrons within a length v<sub>d</sub>Δt of a cross-section of area A pass through it. That is nA v<sub>d</sub>Δt electrons (n = free electrons per unit volume).',
   'Charge passing = neAv<sub>d</sub>Δt, so I = neAv<sub>d</sub>.']],
 ['eq','v<sub>d</sub> = eEτ/m, &nbsp; I = neAv<sub>d</sub>'],
 ['p','<b>Mobility</b> μ = v<sub>d</sub>/E = eτ/m is the drift speed per unit field.'],
 ['ex','A copper wire of cross-section 1.0 × 10⁻⁷ m² carries 1.5 A. Find the drift speed. (n = 8.5 × 10²⁸ m⁻³)',['v<sub>d</sub> = I/(neA) = 1.5/(8.5 × 10²⁸ × 1.6 × 10⁻¹⁹ × 10⁻⁷)'],'≈ 1.1 mm/s'],
 ['warn','The drift speed is tiny, yet a bulb lights the instant you switch on. That is because the electric field travels along the wire at nearly the speed of light, starting all the electrons drifting at once.']
]},
{t:'Ohm\'s law and resistivity', b:[
 ['p','<b>Ohm\'s law:</b> for many conductors at constant temperature, the current is proportional to the potential difference across them:'],
 ['eq','V = IR &nbsp;(1 ohm, Ω = 1 V/A)'],
 ['p','Resistance R depends on the material and the shape of the conductor. Doubling the length doubles R (electrons have twice as far to struggle); doubling the area halves R (twice as many paths):'],
 ['eq','R = ρL/A, &nbsp; ρ = resistivity (Ω m)'],
 ['der','Ohm\'s law from the drift model',[
   'From I = neAv<sub>d</sub> and v<sub>d</sub> = eEτ/m: I = (ne²τ/m)AE.',
   'Current density j = I/A = (ne²τ/m)E = σE, where σ = ne²τ/m is the <b>conductivity</b>.',
   'For a wire of length L, E = V/L. So I = σAV/L, giving V = I(L/σA) = IR with ρ = 1/σ = m/(ne²τ).']],
 ['list',['Metals have ρ ≈ 10⁻⁸ Ω m, insulators ≈ 10¹⁴ Ω m or more, semiconductors in between.','Resistivity is a property of the material; resistance also depends on dimensions.','If a wire is stretched to n times its length (same volume), its resistance becomes n² times larger.']],
 ['ex','A 2 m long wire of cross-section 0.5 mm² has a resistance of 0.07 Ω. Find its resistivity.',['ρ = RA/L = 0.07 × 0.5 × 10⁻⁶/2'],'1.75 × 10⁻⁸ Ω m (copper)']
]},
{t:'Limits of Ohm\'s law', b:[
 ['p','Ohm\'s law is not a fundamental law of nature. Materials that obey it are <b>ohmic</b>; many devices are <b>non-ohmic</b>:'],
 ['list',['V and I are not proportional: a filament bulb\'s resistance rises as it heats up.','The relation depends on the sign of V: a diode conducts well one way and barely at all the other way.','V is not a single-valued function of I: in some devices (like GaAs), the same current can occur at two different voltages.']]
]},
{t:'Temperature dependence of resistivity', b:[
 ['eq','ρ<sub>T</sub> = ρ₀[1 + α(T − T₀)]'],
 ['list',['In <b>metals</b>, ρ increases with temperature (α positive). Hotter ions vibrate more, collisions become more frequent, and τ decreases.','<b>Alloys</b> such as nichrome, manganin and constantan have high ρ and a very small α, so they are used for heaters (nichrome) and standard resistors (manganin).','In <b>semiconductors</b> and insulators, ρ decreases with temperature (α negative), because more charge carriers are freed as temperature rises. This is used in thermistors.']],
 ['ex','A heating element\'s resistance is 75.3 Ω at 27 °C. At its working temperature it draws 2.68 A from 230 V. Find that temperature. (α = 1.70 × 10⁻⁴ /°C)',['Hot resistance = 230/2.68 ≈ 85.8 Ω','85.8 = 75.3[1 + 1.7 × 10⁻⁴(T − 27)] ⇒ T − 27 ≈ 820'],'T ≈ 847 °C']
]},
{t:'Electrical energy and power', b:[
 ['der','Power dissipated in a resistor',[
   'A charge ΔQ moves through a potential drop V, losing potential energy VΔQ, which turns into heat (collisions with ions).',
   'Power P = VΔQ/Δt = VI.',
   'With V = IR: P = I²R = V²/R.']],
 ['eq','P = VI = I²R = V²/R'],
 ['p','This <b>Joule heating</b> is useful in heaters, irons and filament lamps, but it wastes energy in transmission lines. Since P<sub>loss</sub> = I²R and P = VI, sending the same power at a higher voltage needs a smaller current and loses much less. That is why power is transmitted at very high voltages.']
]},
{t:'Cells, emf and internal resistance', b:[
 ['p','A cell keeps a potential difference between its terminals by chemical reactions. Its <b>emf</b> ε is the potential difference between its terminals when no current flows: the energy it gives each coulomb. Real cells have <b>internal resistance</b> r from the electrolyte between the plates.'],
 ['der','Terminal voltage with a load',[
   'A cell of emf ε and internal resistance r drives current I through an external resistor R.',
   'Total resistance = R + r, so I = ε/(R + r).',
   'Voltage across the terminals: V = IR = ε − Ir. Some voltage is "lost" inside the cell.',
   'When charging a cell (current pushed in), V = ε + Ir.']],
 ['eq','I = ε/(R + r), &nbsp; V = ε − Ir'],
 ['ex','A 12 V battery with internal resistance 0.4 Ω powers a 5.6 Ω lamp. Find the current and the terminal voltage.',['I = 12/(5.6 + 0.4) = 2 A','V = 12 − 2 × 0.4'],'2 A; 11.2 V'],
 ['warn','A short circuit (R ≈ 0) gives the largest possible current ε/r, which can overheat or damage a battery.']
]},
{t:'Cells in series and parallel', b:[
 ['der','Combining cells',[
   '<b>Series</b>: emfs add (with sign) and internal resistances add. ε<sub>eq</sub> = ε₁ + ε₂, r<sub>eq</sub> = r₁ + r₂.',
   '<b>Parallel</b> (positive terminals joined): ε<sub>eq</sub> = (ε₁r₂ + ε₂r₁)/(r₁ + r₂), 1/r<sub>eq</sub> = 1/r₁ + 1/r₂.',
   'For n identical cells in parallel: ε<sub>eq</sub> = ε, r<sub>eq</sub> = r/n. They do not raise the voltage but can supply more current with less internal loss.']]
]},
{t:'Kirchhoff\'s rules', b:[
 ['p','For circuits with several loops, series and parallel rules are not enough. Kirchhoff\'s two rules solve any circuit.'],
 ['list',['<b>Junction rule (current law):</b> at any junction, the sum of currents entering equals the sum leaving. This is conservation of charge.','<b>Loop rule (voltage law):</b> around any closed loop, the algebraic sum of potential changes is zero. This is conservation of energy.']],
 ['p','<b>How to use them:</b> mark an assumed current direction in each branch. Going round a loop, a resistor traversed in the current direction gives a drop −IR; against it, +IR. Crossing a cell from − to + gives +ε, from + to −, −ε. Write enough junction and loop equations, then solve. A negative answer just means the current flows opposite to the way you guessed.'],
 ['ex','A 6 V cell and a 4 V cell (negligible internal resistance) are connected in a single loop so that their emfs oppose each other. The loop also contains a 2 Ω and a 3 Ω resistor. Find the current.',['Going round the single loop: 6 − 4 = I(2 + 3)','I = 2/5'],'0.4 A, driven by the 6 V cell']
]},
{t:'The Wheatstone bridge', b:[
 ['p','The <b>Wheatstone bridge</b> has four resistors P, Q, R, S arranged in a diamond, with a battery across one diagonal and a galvanometer G across the other. Adjusting one resistor until G reads zero "balances" the bridge.'],
 ['der','Balance condition',[
   'At balance, no current flows through G, so points B and D are at the same potential.',
   'The current I₁ through P also flows through Q; the current I₂ through R also flows through S.',
   'Equal potential drops: I₁P = I₂R and I₁Q = I₂S.',
   'Dividing: P/Q = R/S.']],
 ['eq','P/Q = R/S'],
 ['p','If three resistances are known, the fourth is found accurately. The method is precise because it depends on detecting zero current, not on reading a meter scale, and the result does not depend on the battery emf.'],
 ['ex','In a balanced bridge P = 100 Ω, Q = 10 Ω, and R = 15 Ω. Find S.',['S = RQ/P = 15 × 10/100'],'1.5 Ω']
]},
{t:'Meter bridge and potentiometer', x:true, b:[
 ['p','A <b>meter bridge</b> is a practical Wheatstone bridge: a 1 m uniform wire replaces two arms. A sliding contact finds the balance point at distance l from one end, so R/S = l/(100 − l).'],
 ['p','A <b>potentiometer</b> is a long uniform wire carrying a steady current, so the potential drop along it is proportional to length. Balancing a cell against a length of wire (no current drawn from the cell) measures its emf exactly. It can also compare two emfs (ε₁/ε₂ = l₁/l₂) and find a cell\'s internal resistance r = R(l₁ − l₂)/l₂.']
]}
],
recap:['I = dq/dt; I = neAv<sub>d</sub>; v<sub>d</sub> = eEτ/m.','V = IR; R = ρL/A; ρ = m/(ne²τ).','Metals: ρ rises with T. Semiconductors: ρ falls with T.','P = VI = I²R = V²/R.','Cell: I = ε/(R + r), V = ε − Ir.','Kirchhoff: junction (charge) and loop (energy) rules. Bridge balance: P/Q = R/S.'],
exam:['Derive I = neAv<sub>d</sub> and Ohm\'s law from the drift model; define mobility.','Explain the temperature dependence of resistivity in metals and semiconductors.','Derive V = ε − Ir and combinations of cells.','State Kirchhoff\'s rules and derive the balance condition of a Wheatstone bridge.']
});

L('c12-4', {
intro:'In 1820, Oersted saw a compass needle twitch near a current-carrying wire. Electricity and magnetism turned out to be two sides of one force. This chapter shows how moving charges feel magnetic forces, how currents create magnetic fields, and how this leads to motors and meters.',
sections:[
{t:'Magnetic force on a moving charge', b:[
 ['p','A charge q moving with velocity <b>v</b> through a magnetic field <b>B</b> feels the <b>Lorentz force</b>. If there is also an electric field, the total force is:'],
 ['eq','<b>F</b> = q[<b>E</b> + <b>v</b> × <b>B</b>], &nbsp; |F<sub>magnetic</sub>| = qvB sinθ'],
 ['list',['The magnetic force is zero for a charge at rest or moving parallel (or antiparallel) to <b>B</b>.','It is perpendicular to both <b>v</b> and <b>B</b> (right-hand rule), and reverses for a negative charge.','Because it is always perpendicular to velocity, it does <b>no work</b>: it changes direction but never speed.','The SI unit of B is the tesla (T): 1 T = 1 N/(A m). Earth\'s field is about 3.6 × 10⁻⁵ T; a strong lab magnet about 1 T.']],
 ['simple','Magnetic forces steer moving charges but never speed them up or slow them down.']
]},
{t:'Force on a current-carrying conductor', b:[
 ['der','F = I l × B',[
   'A straight wire of length l and cross-section A carries current I. It has n free charges per unit volume, each q, drifting at v<sub>d</sub>.',
   'Force on each charge: q<b>v</b><sub>d</sub> × <b>B</b>. Number of charges = nAl.',
   'Total force: <b>F</b> = (nAl)q<b>v</b><sub>d</sub> × <b>B</b>. Since I = nqAv<sub>d</sub>: <b>F</b> = I<b>l</b> × <b>B</b>.',
   'Magnitude: F = IlB sinθ.']],
 ['eq','<b>F</b> = I<b>l</b> × <b>B</b>'],
 ['p','Use Fleming\'s left-hand rule to find the direction: forefinger along the field, middle finger along the current, thumb gives the force.'],
 ['ex','A 0.2 m long wire of mass 0.06 kg hangs horizontally in a horizontal magnetic field of 0.6 T perpendicular to it. What current makes it float?',['IlB = mg ⇒ I = mg/(lB) = 0.06 × 9.8/(0.2 × 0.6)'],'≈ 4.9 A']
]},
{t:'Motion of a charge in a magnetic field', b:[
 ['der','Circular motion perpendicular to B',[
   'A charge q of mass m moves at speed v perpendicular to a uniform field B. The force qvB is always perpendicular to v, so it acts as a centripetal force.',
   'qvB = mv²/r ⇒ r = mv/(qB).',
   'Angular frequency ω = v/r = qB/m. Period T = 2πm/(qB). Frequency ν = qB/(2πm).',
   'T and ν do not depend on speed: faster particles move in bigger circles but take the same time per lap.']],
 ['eq','r = mv/qB, &nbsp; T = 2πm/qB'],
 ['p','If the velocity has a component along B (v<sub>∥</sub>) as well as perpendicular (v<sub>⊥</sub>), the particle moves in a <b>helix</b>: circles of radius mv<sub>⊥</sub>/qB while drifting along B. The distance moved along B in one revolution is the <b>pitch</b>, p = v<sub>∥</sub>T = 2πmv<sub>∥</sub>/qB. Charged particles from the Sun spiral along Earth\'s field lines towards the poles, causing auroras.'],
 ['ex','An electron at 3 × 10⁷ m/s moves perpendicular to a 6 × 10⁻⁴ T field. Find the radius of its path and its frequency.',['r = mv/(eB) = 9.1 × 10⁻³¹ × 3 × 10⁷/(1.6 × 10⁻¹⁹ × 6 × 10⁻⁴) ≈ 0.28 m','ν = eB/(2πm) = 1.6 × 10⁻¹⁹ × 6 × 10⁻⁴/(2π × 9.1 × 10⁻³¹)'],'r ≈ 28 cm; ν ≈ 17 MHz']
]},
{t:'Velocity selector and the cyclotron', x:true, b:[
 ['p','<b>Velocity selector:</b> crossed E and B fields, both perpendicular to the beam. The electric force qE and magnetic force qvB act in opposite directions. Only particles with v = E/B pass straight through undeflected. Mass spectrometers use this to select one speed.'],
 ['p','<b>Cyclotron:</b> a machine to accelerate charged particles. Two hollow D-shaped electrodes ("dees") sit in a strong magnetic field, with an alternating voltage across the gap between them. The particle circles inside a dee, and each time it crosses the gap it gains energy. Because the period 2πm/qB does not depend on speed, a fixed AC frequency (the cyclotron frequency ν = qB/2πm) keeps it in step. The final kinetic energy is q²B²R²/2m, where R is the dee radius. Cyclotrons make radioactive isotopes for hospitals.']
]},
{t:'The Biot–Savart law', b:[
 ['p','Currents create magnetic fields. The <b>Biot–Savart law</b> gives the field d<b>B</b> due to a small element d<b>l</b> of a wire carrying current I, at a point at displacement <b>r</b> from it:'],
 ['eq','d<b>B</b> = (μ₀/4π) I d<b>l</b> × <b>r</b>/r³, &nbsp; |dB| = (μ₀/4π) I dl sinθ/r²'],
 ['list',['μ₀ = 4π × 10⁻⁷ T m/A is the permeability of free space.','Like Coulomb\'s law, it is an inverse-square law, but the field is perpendicular to both d<b>l</b> and <b>r</b>, and zero along the line of the wire element.','The constants are linked to the speed of light: c = 1/√(μ₀ε₀).']]
]},
{t:'Field on the axis of a circular loop', b:[
 ['der','B on the axis of a loop of radius R at distance x from its centre',[
   'Each small element dl of the loop is at distance √(x² + R²) from the point, and dl is perpendicular to r, so dB = (μ₀/4π) I dl/(x² + R²).',
   'By symmetry, components of dB perpendicular to the axis cancel. The components along the axis add: dB<sub>x</sub> = dB × R/√(x² + R²).',
   'Integrating round the loop (∮dl = 2πR): B = μ₀IR²/[2(x² + R²)<sup>3/2</sup>].',
   'At the centre (x = 0): B = μ₀I/2R. For N turns, multiply by N.']],
 ['eq','B<sub>axis</sub> = μ₀IR²/[2(x² + R²)<sup>3/2</sup>], &nbsp; B<sub>centre</sub> = μ₀NI/2R'],
 ['p','Direction: curl the fingers of your right hand along the current; your thumb points along B through the loop. One face of the loop acts like a north pole and the other like a south pole.'],
 ['ex','A coil of 100 turns, radius 10 cm, carries 1 A. Find B at its centre.',['B = μ₀NI/2R = 4π × 10⁻⁷ × 100 × 1/(2 × 0.1)'],'≈ 6.28 × 10⁻⁴ T']
]},
{t:'Ampère\'s circuital law', b:[
 ['eq','∮<b>B</b>·d<b>l</b> = μ₀I<sub>enclosed</sub>'],
 ['p','The line integral of the magnetic field around any closed loop equals μ₀ times the net current threading through the loop. It plays the same role for magnetism as Gauss\'s law does for electricity: with enough symmetry it gives B very quickly.'],
 ['der','Long straight wire',[
   'By symmetry, B forms circles around the wire and has the same size at the same distance r.',
   'Choose a circular Amperian loop of radius r. B is along the loop everywhere: ∮B·dl = B × 2πr.',
   'B × 2πr = μ₀I ⇒ B = μ₀I/(2πr).',
   'Direction: right-hand thumb rule (thumb along current, fingers curl along B).']],
 ['der','Long solenoid',[
   'A solenoid with n turns per unit length carries current I. Inside, the field is uniform and along the axis; outside it is nearly zero.',
   'Choose a rectangular loop with one side of length h inside, parallel to the axis, and one side outside.',
   'Only the inside side contributes: ∮B·dl = Bh. Current enclosed = nhI.',
   'Bh = μ₀nhI ⇒ B = μ₀nI. It does not depend on the solenoid\'s radius or the position inside.']],
 ['eq','Wire: B = μ₀I/2πr &nbsp;·&nbsp; Solenoid: B = μ₀nI'],
 ['p','A <b>toroid</b> (a solenoid bent into a ring) has B = μ₀NI/(2πr) inside its core and zero outside and in the central hole.']
]},
{t:'Force between two parallel currents', b:[
 ['der','Force per unit length between parallel wires',[
   'Wire a carries I<sub>a</sub>. At wire b, a distance d away, its field is B<sub>a</sub> = μ₀I<sub>a</sub>/(2πd).',
   'Wire b carries I<sub>b</sub>, so a length L of it feels F = I<sub>b</sub>LB<sub>a</sub> = μ₀I<sub>a</sub>I<sub>b</sub>L/(2πd).',
   'Force per unit length: f = μ₀I<sub>a</sub>I<sub>b</sub>/(2πd).',
   'Currents in the same direction attract; opposite directions repel. (Notice this is the reverse of electric charges: like currents attract.)']],
 ['eq','F/L = μ₀I₁I₂/(2πd)'],
 ['p','This gave the classical definition of the ampere: the current which, flowing in two infinitely long parallel wires 1 m apart in vacuum, produces a force of 2 × 10⁻⁷ N per metre between them. (Since 2019 the ampere is defined by fixing the value of e.)']
]},
{t:'Torque on a current loop and the magnetic dipole', b:[
 ['der','Torque on a rectangular loop in a uniform field',[
   'A rectangular coil of N turns and area A carries current I in a uniform field B. Its normal makes angle θ with B.',
   'Forces on the two sides parallel to the axis are equal and opposite but not along the same line; they form a couple. Forces on the other two sides cancel and lie along the same line.',
   'Torque τ = NIAB sinθ.',
   'Defining the magnetic moment <b>m</b> = NI<b>A</b> (along the normal, right-hand rule): <b>τ</b> = <b>m</b> × <b>B</b>.']],
 ['eq','<b>τ</b> = <b>m</b> × <b>B</b>, &nbsp; m = NIA &nbsp;(A m²)'],
 ['p','A current loop behaves exactly like a tiny bar magnet (a magnetic dipole). Its field at large distances along its axis is B = μ₀(2m)/(4πx³), just like an electric dipole with p replaced by m. Even an orbiting electron in an atom is a tiny current loop with a magnetic moment; the smallest natural unit is the Bohr magneton, about 9.27 × 10⁻²⁴ A m².'],
 ['ex','A 100-turn circular coil of radius 8 cm carries 0.4 A. What is its magnetic moment? What torque does it feel in a 2 T field at 30°?',['m = NIA = 100 × 0.4 × π(0.08)² ≈ 0.80 A m²','τ = mB sin30° = 0.80 × 2 × 0.5'],'m ≈ 0.80 A m²; τ ≈ 0.80 N m']
]},
{t:'The moving-coil galvanometer', b:[
 ['p','A <b>galvanometer</b> detects and measures small currents. A coil of N turns and area A hangs between the curved poles of a permanent magnet, with a soft-iron core inside. The curved poles make the field radial, so the coil\'s plane is always parallel to B and the torque is NIAB.'],
 ['der','Deflection proportional to current',[
   'Magnetic torque NIAB turns the coil. A spring provides a restoring torque kφ, where φ is the deflection.',
   'At equilibrium: kφ = NIAB ⇒ φ = (NAB/k)I.',
   'The deflection is proportional to current, so the scale is linear.',
   '<b>Current sensitivity</b> = φ/I = NAB/k. <b>Voltage sensitivity</b> = φ/V = NAB/(kR<sub>G</sub>).']],
 ['p','Increasing the number of turns raises current sensitivity, but also raises the coil\'s resistance, so voltage sensitivity need not increase.']
]},
{t:'Converting a galvanometer to an ammeter or voltmeter', b:[
 ['der','Ammeter: low resistance in parallel (shunt)',[
   'A galvanometer of resistance G gives full-scale deflection at a small current I<sub>g</sub>. To measure up to I, most of the current must bypass the coil.',
   'Connect a small shunt S in parallel. Same voltage across both: I<sub>g</sub>G = (I − I<sub>g</sub>)S.',
   'S = I<sub>g</sub>G/(I − I<sub>g</sub>).',
   'The ammeter\'s total resistance is very low, so it barely affects the circuit when connected in series.']],
 ['der','Voltmeter: high resistance in series',[
   'To measure up to V, add a large resistance R in series so that only I<sub>g</sub> flows at full scale: I<sub>g</sub>(G + R) = V.',
   'R = V/I<sub>g</sub> − G.',
   'The voltmeter\'s resistance is very high, so connected in parallel it draws almost no current.']],
 ['ex','A galvanometer with G = 15 Ω gives full-scale deflection at 4 mA. How would you convert it to (a) a 6 A ammeter and (b) a 10 V voltmeter?',['(a) S = 0.004 × 15/(6 − 0.004) ≈ 0.01 Ω in parallel','(b) R = 10/0.004 − 15 = 2485 Ω in series'],'Shunt ≈ 0.01 Ω; series resistance 2485 Ω']
]}
],
recap:['Lorentz force F = q(E + v × B); magnetic force does no work.','Force on a wire F = Il × B.','In a uniform B: r = mv/qB, T = 2πm/qB (independent of speed).','Biot–Savart: loop centre B = μ₀NI/2R. Ampère: wire μ₀I/2πr, solenoid μ₀nI.','Parallel wires: F/L = μ₀I₁I₂/2πd; like currents attract.','Coil torque τ = m × B, m = NIA; galvanometer → ammeter (shunt) or voltmeter (series R).'],
exam:['Derive the radius and period of a charge in a uniform field; explain helical motion.','Derive the field on the axis of a circular loop using Biot–Savart.','Use Ampère\'s law for a straight wire and a solenoid.','Derive the force between parallel currents and define the ampere.','Derive the torque on a current loop; explain the moving-coil galvanometer and its conversion.']
});

L('c12-5', {
intro:'Magnets have fascinated people since ancient times, and Earth itself behaves like a giant magnet. This chapter treats bar magnets as magnetic dipoles, introduces Gauss\'s law for magnetism, and explains how different materials respond to magnetic fields.',
sections:[
{t:'Basic ideas about magnets', b:[
 ['list',['A freely suspended bar magnet settles roughly north–south. The end pointing north is its north pole.','Like poles repel, unlike poles attract.','Magnetic poles always come in pairs. Cutting a magnet in half gives two smaller magnets, each with a north and south pole. Isolated magnetic poles (monopoles) have never been found.','Iron filings sprinkled around a magnet line up along its field lines.']]
]},
{t:'The bar magnet and its field lines', b:[
 ['p','The field of a bar magnet looks almost exactly like the field of a current-carrying solenoid. This is no coincidence: a magnet\'s field comes from tiny current loops inside its atoms (orbiting and spinning electrons). A bar magnet is effectively a solenoid.'],
 ['list',['Magnetic field lines form <b>continuous closed loops</b>. Outside the magnet they run from N to S; inside, from S back to N.','The tangent to a field line gives the direction of B; the closer the lines, the stronger the field.','Field lines never cross.']],
 ['p','Unlike electric field lines, which start on positive charges and end on negative ones, magnetic field lines have no beginning or end.']
]},
{t:'The bar magnet as a magnetic dipole', b:[
 ['p','A bar magnet has a <b>magnetic moment</b> <b>m</b>, pointing from its S pole to its N pole inside the magnet. At large distances its field matches that of an electric dipole, with p replaced by m and 1/ε₀ replaced by μ₀:'],
 ['eq','Axial: B = (μ₀/4π)(2m/r³) &nbsp;·&nbsp; Equatorial: B = −(μ₀/4π)(m/r³)'],
 ['tbl',['Electrostatics','Magnetism'],[['1/ε₀','μ₀'],['Dipole moment p','Magnetic moment m'],['Axial field 2p/4πε₀r³','Axial field μ₀2m/4πr³'],['Equatorial field −p/4πε₀r³','Equatorial field −μ₀m/4πr³'],['Torque p × E','Torque m × B'],['Energy −p·E','Energy −m·B']]],
 ['ex','A bar magnet of moment 0.48 A m² lies along the north–south axis. Find B at 10 cm from its centre on its axis and on its equator.',['Axial: 10⁻⁷ × 2 × 0.48/(0.1)³ = 9.6 × 10⁻⁵ T','Equatorial: half that'],'Axial 9.6 × 10⁻⁵ T; equatorial 4.8 × 10⁻⁵ T']
]},
{t:'Dipole in a uniform magnetic field', b:[
 ['p','In a uniform field, a magnetic dipole feels a torque that tries to line it up with the field, but no net force:'],
 ['eq','<b>τ</b> = <b>m</b> × <b>B</b>, &nbsp; U = −<b>m</b>·<b>B</b> = −mB cosθ'],
 ['list',['U is lowest (−mB) at θ = 0°: stable equilibrium (aligned with B).','U is highest (+mB) at θ = 180°: unstable equilibrium.','Work needed to turn a dipole from 0° to 180° is 2mB.']],
 ['p','A compass needle of moment m and moment of inertia I, slightly disturbed in a field B, oscillates in SHM. For small angles, Iα = −mBθ, so its period is T = 2π√(I/mB). Timing the oscillations is a way to measure B or m.'],
 ['ex','A short magnet placed at 30° to a uniform 0.25 T field feels a torque of 4.5 × 10⁻² N m. Find its magnetic moment.',['τ = mB sinθ ⇒ m = 4.5 × 10⁻²/(0.25 × 0.5)'],'m = 0.36 A m²']
]},
{t:'Gauss\'s law for magnetism', b:[
 ['eq','∮<b>B</b>·d<b>S</b> = 0'],
 ['p','The net magnetic flux through any closed surface is always zero. Every field line that enters a closed surface also leaves it, because magnetic field lines are closed loops. This is the mathematical statement that isolated magnetic poles do not exist.'],
 ['p','Compare with Gauss\'s law for electricity, ∮E·dS = q/ε₀: the right-hand side here is zero because there is no "magnetic charge".']
]},
{t:'Earth\'s magnetism', x:true, b:[
 ['p','Earth behaves roughly like a huge bar magnet tilted about 11° from its rotation axis. Its field is thought to come from electric currents in its molten iron-nickel outer core (the dynamo effect). The geomagnetic north pole is near the geographic north, but it is actually a magnetic <b>south</b> pole, since it attracts the north pole of a compass.'],
 ['list',['<b>Declination:</b> the angle between geographic north and magnetic north at a place.','<b>Inclination (dip):</b> the angle the field makes with the horizontal. It is 0 at the magnetic equator and 90° at the magnetic poles.','Horizontal component H<sub>E</sub> = B<sub>E</sub> cos(dip); vertical component Z<sub>E</sub> = B<sub>E</sub> sin(dip).']]
]},
{t:'Magnetisation and magnetic intensity', b:[
 ['p','Inside atoms, electrons orbit and spin, giving each atom a tiny magnetic moment. In most materials these point randomly and cancel. A field can line them up. The net magnetic moment per unit volume is the <b>magnetisation</b> M (unit A/m).'],
 ['p','In a solenoid with a material core, the total field has two parts: one from the current in the windings and one from the material\'s magnetisation. We write:'],
 ['eq','<b>B</b> = μ₀(<b>H</b> + <b>M</b>)'],
 ['list',['<b>H</b> is the <b>magnetic intensity</b>, set by the external currents (for a solenoid, H = nI). Unit A/m.','For many materials M is proportional to H: <b>M</b> = χ<b>H</b>, where χ is the dimensionless <b>magnetic susceptibility</b>.','Then <b>B</b> = μ₀(1 + χ)<b>H</b> = μ₀μ<sub>r</sub><b>H</b> = μ<b>H</b>. μ<sub>r</sub> = 1 + χ is the relative permeability.']],
 ['ex','A solenoid with 1000 turns/m carries 2 A and has an iron core of relative permeability 400. Find H, B and M.',['H = nI = 2000 A/m','B = μ₀μ<sub>r</sub>H = 4π × 10⁻⁷ × 400 × 2000 ≈ 1.0 T','M = (μ<sub>r</sub> − 1)H = 399 × 2000 ≈ 8 × 10⁵ A/m'],'H = 2000 A/m, B ≈ 1.0 T, M ≈ 8 × 10⁵ A/m']
]},
{t:'Diamagnetism, paramagnetism and ferromagnetism', b:[
 ['tbl',['Property','Diamagnetic','Paramagnetic','Ferromagnetic'],[['Susceptibility χ','Small, negative (−1 ≤ χ < 0)','Small, positive','Very large, positive'],['Behaviour in a field','Weakly repelled; moves from strong to weak field','Weakly attracted; moves from weak to strong field','Strongly attracted'],['Field lines','Pushed out of the material','Slightly concentrated in it','Strongly concentrated in it'],['Origin','No permanent atomic moments; induced currents oppose the field (Lenz)','Atoms have permanent moments that partly line up','Moments line up spontaneously in domains'],['Effect of temperature','Almost none','χ ∝ 1/T (Curie\'s law)','Becomes paramagnetic above Curie temperature'],['Examples','Bismuth, copper, water, gold, superconductors','Aluminium, sodium, oxygen, calcium','Iron, cobalt, nickel, gadolinium']]],
 ['p','<b>Superconductors</b> are perfect diamagnets (χ = −1): they expel magnetic fields completely (the Meissner effect). A magnet can float above one.'],
 ['p','In <b>ferromagnets</b>, neighbouring atomic moments line up strongly with each other inside small regions called <b>domains</b> (about 1 mm across). Normally the domains point in random directions. An external field makes favourably oriented domains grow and others shrink, producing huge magnetisation. Above the <b>Curie temperature</b> (770 °C for iron), thermal motion destroys the domains and the material becomes paramagnetic.'],
 ['eq','Curie\'s law (paramagnets): χ = Cμ₀/T']
]},
{t:'Hysteresis, permanent magnets and electromagnets', x:true, b:[
 ['p','If you magnetise a ferromagnet by increasing H, then decrease H back to zero, B does not return to zero. The leftover field is the <b>retentivity</b> (remanence). A reverse field, the <b>coercivity</b>, is needed to bring B to zero. The B–H graph forms a closed loop called the <b>hysteresis loop</b>; its area is the energy lost as heat in each cycle.'],
 ['list',['<b>Permanent magnets</b> need high retentivity and high coercivity, so they stay magnetised: steel, alnico, neodymium alloys.','<b>Electromagnets and transformer cores</b> need high permeability, low retentivity and a narrow hysteresis loop (low energy loss): soft iron.']]
]}
],
recap:['Magnetic poles always come in pairs; field lines form closed loops.','Bar magnet = magnetic dipole: axial B = μ₀2m/4πr³, equatorial B = μ₀m/4πr³.','τ = m × B, U = −m·B; no net force in a uniform field.','Gauss\'s law for magnetism: ∮B·dS = 0 (no monopoles).','B = μ₀(H + M), M = χH, μ<sub>r</sub> = 1 + χ.','Diamagnets (χ < 0), paramagnets (small χ > 0, χ ∝ 1/T), ferromagnets (huge χ, domains, Curie temperature).'],
exam:['Show that a current loop or solenoid behaves as a magnetic dipole; compare electric and magnetic dipoles.','Derive torque and potential energy of a magnetic dipole in a uniform field; period of oscillation of a compass.','State Gauss\'s law for magnetism and its meaning.','Compare dia-, para- and ferromagnetic materials with examples.']
});
})();
