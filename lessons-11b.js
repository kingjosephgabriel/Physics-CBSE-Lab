/* Full lessons — Class 11, Chapters 6–10. Original explanations written for NCERT Physics Lab. */
(function(){
const L = (id, o) => { (window.LESSONS = window.LESSONS || {})[id] = o; };

L('c11-6', {
intro:'Real objects are not points: they spin, tumble and roll. This chapter introduces the centre of mass, which lets a whole body be treated like one particle, and then builds rotational motion as a mirror image of linear motion, with torque, moment of inertia and angular momentum.',
sections:[
{t:'Rigid bodies and kinds of motion', b:[
 ['p','A <b>rigid body</b> is one whose shape and size do not change: the distance between any two of its particles stays fixed. Real bodies deform a little, but for many problems the rigid model works well.'],
 ['list',['<b>Pure translation:</b> every particle has the same velocity at any instant, like a block sliding down a slope.','<b>Pure rotation about a fixed axis:</b> every particle moves in a circle about the axis, like a ceiling fan or a door.','<b>Translation plus rotation:</b> a cylinder rolling down an incline both moves forward and spins.']],
 ['p','In rotation about a fixed axis, particles on the axis stay still, and every other particle moves in a circle in a plane perpendicular to the axis, with its centre on the axis. All particles share the same angular velocity ω, but farther ones move faster: v = ωr.']
]},
{t:'Centre of mass', b:[
 ['p','The <b>centre of mass</b> (CM) of a system is the mass-weighted average position of its particles. It is the point that moves as if all the mass were concentrated there and every external force acted on it.'],
 ['eq','<b>R</b><sub>cm</sub> = (m₁<b>r</b>₁ + m₂<b>r</b>₂ + …)/(m₁ + m₂ + …) = Σm<sub>i</sub><b>r</b><sub>i</sub>/M'],
 ['list',['Two particles: the CM lies on the line joining them, closer to the heavier one. x<sub>cm</sub> = (m₁x₁ + m₂x₂)/(m₁ + m₂).','For a uniform symmetric body (rod, ring, disc, sphere, cube), the CM is at its geometric centre.','The CM can lie outside the material, as with a ring or a boomerang.','For a continuous body: X<sub>cm</sub> = (1/M)∫x dm.']],
 ['ex','Particles of 100 g, 150 g and 200 g sit at the corners of an equilateral triangle of side 0.5 m: at (0, 0), (0.5, 0) and (0.25, 0.433). Find the CM.',['X = (100×0 + 150×0.5 + 200×0.25)/450 = 125/450 ≈ 0.28 m','Y = (200 × 0.433)/450 ≈ 0.19 m'],'CM at about (0.28 m, 0.19 m)']
]},
{t:'Motion of the centre of mass', b:[
 ['der','Why the CM moves like a single particle',[
   'Differentiate M<b>R</b><sub>cm</sub> = Σm<sub>i</sub><b>r</b><sub>i</sub> twice: M<b>A</b><sub>cm</sub> = Σm<sub>i</sub><b>a</b><sub>i</sub> = Σ<b>F</b><sub>i</sub>.',
   'Each F<sub>i</sub> includes internal forces from other particles and external forces.',
   'Internal forces come in equal and opposite pairs (third law), so they cancel in the sum.',
   'Result: M<b>A</b><sub>cm</sub> = <b>F</b><sub>ext</sub>.']],
 ['p','So internal forces, such as an explosion, cannot change how the CM moves. If a shell bursts in mid-air, its fragments fly apart, but their CM continues along the original parabola until a fragment hits the ground.'],
 ['p','Total momentum is <b>P</b> = M<b>V</b><sub>cm</sub>, and d<b>P</b>/dt = <b>F</b><sub>ext</sub>. If there is no external force, the total momentum, and the velocity of the CM, stay constant. In radioactive decay of a nucleus at rest, the fragments fly in opposite directions so that the CM stays still.'],
 ['simple','However complicated the motion of the parts, the centre of mass follows the simplest possible path set only by outside forces.']
]},
{t:'The vector (cross) product', b:[
 ['p','Torque and angular momentum need a product of two vectors that gives a vector. The <b>vector product</b> <b>C</b> = <b>A</b> × <b>B</b> has magnitude AB sinθ and points perpendicular to both <b>A</b> and <b>B</b>, in the direction given by the right-hand rule: curl the fingers of your right hand from <b>A</b> to <b>B</b>; your thumb points along <b>C</b>.'],
 ['list',['It is not commutative: A × B = −(B × A).','A × A = 0; parallel vectors give zero.','î × ĵ = k̂, ĵ × k̂ = î, k̂ × î = ĵ (cyclic order); reversing the order gives a minus sign.','|A × B| equals the area of the parallelogram formed by A and B.']],
 ['eq','<b>A</b>×<b>B</b> = (A<sub>y</sub>B<sub>z</sub> − A<sub>z</sub>B<sub>y</sub>)î + (A<sub>z</sub>B<sub>x</sub> − A<sub>x</sub>B<sub>z</sub>)ĵ + (A<sub>x</sub>B<sub>y</sub> − A<sub>y</sub>B<sub>x</sub>)k̂'],
 ['ex','Find (3î − 4ĵ + 5k̂) × (−2î + ĵ − 3k̂).',['x: (−4)(−3) − (5)(1) = 12 − 5 = 7','y: (5)(−2) − (3)(−3) = −10 + 9 = −1','z: (3)(1) − (−4)(−2) = 3 − 8 = −5'],'7î − ĵ − 5k̂']
]},
{t:'Angular velocity and angular acceleration', b:[
 ['p','For rotation about a fixed axis, the angular velocity <b>ω</b> is a vector along the axis (right-hand rule: curl fingers with the rotation; thumb gives ω). For a particle at perpendicular distance r from the axis, v = ωr, or in vector form <b>v</b> = <b>ω</b> × <b>r</b>.'],
 ['p','Angular acceleration α = dω/dt. With constant α, rotational kinematics copies linear kinematics exactly:'],
 ['tbl',['Linear (constant a)','Rotational (constant α)'],[['v = u + at','ω = ω₀ + αt'],['s = ut + ½at²','θ = ω₀t + ½αt²'],['v² = u² + 2as','ω² = ω₀² + 2αθ']]],
 ['ex','A flywheel speeds up from 1200 rpm to 3120 rpm in 16 s with constant angular acceleration. Find α.',['ω₀ = 2π × 1200/60 = 40π rad/s; ω = 2π × 3120/60 = 104π rad/s','α = (ω − ω₀)/t = 64π/16'],'α = 4π ≈ 12.6 rad/s²']
]},
{t:'Torque', b:[
 ['p','A force\'s ability to rotate an object is its <b>torque</b> (moment of force). It depends on how big the force is, where it is applied, and its direction.'],
 ['eq','<b>τ</b> = <b>r</b> × <b>F</b>, &nbsp; τ = rF sinθ = F × (perpendicular distance from axis to line of force)'],
 ['list',['Unit: N m (not written as J, even though dimensions match work).','Pushing at the hinge of a door (r = 0) or along the door towards the hinge (θ = 0) gives no torque.','A <b>couple</b> is a pair of equal, opposite, parallel forces not along the same line. It produces rotation with no translation; its torque is F × (distance between the forces). Turning a steering wheel or a tap uses a couple.']],
 ['simple','Torque is a twist. Long spanners and door handles far from hinges give a bigger twist for the same push.']
]},
{t:'Angular momentum and its conservation', b:[
 ['p','The <b>angular momentum</b> of a particle about a point is <b>l</b> = <b>r</b> × <b>p</b>, with magnitude rp sinθ = mvr<sub>⊥</sub>.'],
 ['der','Torque is the rate of change of angular momentum',[
   'd<b>l</b>/dt = d(<b>r</b> × <b>p</b>)/dt = (d<b>r</b>/dt × <b>p</b>) + (<b>r</b> × d<b>p</b>/dt).',
   'The first term is <b>v</b> × m<b>v</b> = 0 (parallel vectors).',
   'The second is <b>r</b> × <b>F</b> = <b>τ</b>. So d<b>l</b>/dt = <b>τ</b>.',
   'For a system: d<b>L</b>/dt = <b>τ</b><sub>ext</sub>. Internal torques cancel in pairs.']],
 ['p','<b>Conservation:</b> if the net external torque is zero, the total angular momentum is constant. For a body rotating about a fixed axis, L = Iω, so Iω = constant.'],
 ['list',['A skater pulls in her arms: I decreases, so ω increases.','A diver tucks in to spin faster, then stretches out to slow down before entering the water.','Planets move faster near the Sun: gravity is a central force (no torque about the Sun), so mvr stays constant. This is Kepler\'s second law.']],
 ['ex','A child stands at the centre of a turntable with arms out, turning at 40 rpm. Folding his arms reduces his moment of inertia to 2/5 of its value. What is the new speed?',['I₁ω₁ = I₂ω₂ ⇒ ω₂ = ω₁ × I₁/I₂ = 40 × 5/2'],'100 rpm']
]},
{t:'Equilibrium of a rigid body', b:[
 ['p','A rigid body is in <b>mechanical equilibrium</b> when it has neither linear nor angular acceleration. Two conditions must both hold:'],
 ['list',['<b>Translational equilibrium:</b> the vector sum of all external forces is zero.','<b>Rotational equilibrium:</b> the vector sum of all external torques about any point is zero.']],
 ['p','<b>Principle of moments (lever):</b> for a lever balanced on a fulcrum, load × load arm = effort × effort arm. Mechanical advantage = load/effort = effort arm/load arm. See-saws, crowbars, scissors and your forearm are levers.'],
 ['p','<b>Centre of gravity</b> (CG) is the point where the total gravitational torque on a body is zero, so the body balances when supported there. In a uniform gravitational field, the CG coincides with the centre of mass.'],
 ['ex','A 1 m metre-stick balances at its 50 cm mark. Two 5 g coins are stacked at the 12 cm mark, and the balance point moves to 45 cm. Find the mass of the stick.',['Taking torques about 45 cm: 10 g × (45 − 12) = m × (50 − 45)','330 = 5m'],'m = 66 g'],
 ['ex','A 3 m uniform beam weighing 200 N is held by two supports at its ends. A 400 N load sits 1 m from the left end. Find the support forces.',['Torques about the left end: R<sub>right</sub> × 3 = 400 × 1 + 200 × 1.5 = 700 ⇒ R<sub>right</sub> ≈ 233 N','Forces: R<sub>left</sub> + R<sub>right</sub> = 600 ⇒ R<sub>left</sub> ≈ 367 N'],'≈ 367 N (left) and 233 N (right)']
]},
{t:'Moment of inertia', b:[
 ['p','In rotation, <b>moment of inertia</b> I plays the role that mass plays in translation: it measures how hard it is to change the rotation.'],
 ['eq','I = Σm<sub>i</sub>r<sub>i</sub>², &nbsp; K<sub>rot</sub> = ½Iω², &nbsp; L = Iω'],
 ['der','Rotational kinetic energy',[
   'A particle at distance r<sub>i</sub> from the axis moves at v<sub>i</sub> = ωr<sub>i</sub>.',
   'Total KE = Σ½m<sub>i</sub>v<sub>i</sub>² = ½(Σm<sub>i</sub>r<sub>i</sub>²)ω² = ½Iω².']],
 ['p','I depends on the axis chosen and on how the mass is spread around it. Mass far from the axis counts much more because of r². The <b>radius of gyration</b> k is defined by I = Mk²: the distance at which all the mass could be placed to give the same I.'],
 ['tbl',['Body','Axis','I'],[['Thin ring, radius R','Through centre, perpendicular to plane','MR²'],['Ring','About a diameter','MR²/2'],['Thin rod, length L','Through centre, perpendicular','ML²/12'],['Disc, radius R','Through centre, perpendicular','MR²/2'],['Disc','About a diameter','MR²/4'],['Hollow cylinder','Its own axis','MR²'],['Solid cylinder','Its own axis','MR²/2'],['Solid sphere','About a diameter','2MR²/5'],['Thin spherical shell','About a diameter','2MR²/3']]],
 ['p','A <b>flywheel</b> is built with heavy mass near its rim to give a large I. It resists sudden changes in speed and smooths out jerky motion in engines.']
]},
{t:'Theorems of parallel and perpendicular axes', x:true, b:[
 ['p','These two theorems let you find I about new axes from known values.'],
 ['der','Perpendicular axes theorem (flat bodies only)',[
   'For a flat body in the x–y plane, take axes x and y in the plane and z perpendicular to it, all through the same point.',
   'A particle at (x, y) is at distance √(x² + y²) from the z-axis.',
   'I<sub>z</sub> = Σm(x² + y²) = Σmx² + Σmy² = I<sub>y</sub> + I<sub>x</sub>.',
   'Example: a disc has I<sub>z</sub> = MR²/2; by symmetry I<sub>x</sub> = I<sub>y</sub>, so each diameter has MR²/4.']],
 ['der','Parallel axes theorem (any body)',[
   'I about any axis = I about a parallel axis through the CM + Md², where d is the distance between the axes.',
   'I = I<sub>cm</sub> + Md².',
   'Example: a rod about one end: ML²/12 + M(L/2)² = ML²/3.',
   'Example: a ring about a tangent in its plane: MR²/2 + MR² = 3MR²/2.']]
]},
{t:'Dynamics of rotation about a fixed axis', b:[
 ['p','For rotation about a fixed axis, Newton\'s second law becomes <b>τ = Iα</b>. Work done by a torque turning through dθ is τ dθ, and power is P = τω.'],
 ['tbl',['Linear motion','Rotation about fixed axis'],[['Displacement x','Angular displacement θ'],['Velocity v','Angular velocity ω'],['Acceleration a','Angular acceleration α'],['Mass m','Moment of inertia I'],['Force F = ma','Torque τ = Iα'],['Momentum p = mv','Angular momentum L = Iω'],['KE ½mv²','KE ½Iω²'],['Work F dx','Work τ dθ'],['Power Fv','Power τω']]],
 ['ex','A 20 kg hollow cylinder of radius 0.25 m spins about its axis. A rope wound on it is pulled with 25 N. Find the angular acceleration.',['I = MR² = 20 × 0.0625 = 1.25 kg m²','τ = FR = 25 × 0.25 = 6.25 N m','α = τ/I'],'α = 5 rad/s²']
]},
{t:'Rolling motion', b:[
 ['p','In <b>rolling without slipping</b>, the point touching the ground is momentarily at rest. The CM moves at v<sub>cm</sub> = ωR. The top of the wheel moves at 2v<sub>cm</sub>.'],
 ['der','Kinetic energy of a rolling body',[
   'KE = translational KE of the CM + rotational KE about the CM.',
   'K = ½mv² + ½I<sub>cm</sub>ω². With I = mk² and ω = v/R:',
   'K = ½mv²(1 + k²/R²).']],
 ['der','Rolling down an incline of height h',[
   'Energy: mgh = ½mv²(1 + k²/R²) ⇒ v = √[2gh/(1 + k²/R²)].',
   'Acceleration along an incline of angle θ: a = g sinθ/(1 + k²/R²).',
   'Smaller k²/R² means faster: solid sphere (2/5) beats disc (1/2), which beats hollow sphere (2/3), which beats ring (1).',
   'The result does not depend on mass or radius, only on shape.']],
 ['ex','A solid cylinder rolls down from height 3 m. Find its speed at the bottom (g = 10 m/s²).',['k²/R² = ½','v = √(2 × 10 × 3/1.5) = √40'],'≈ 6.3 m/s (a frictionless sliding block would reach √60 ≈ 7.7 m/s)'],
 ['warn','Static friction is needed for rolling without slipping, but it does no work, because the contact point is not moving. Mechanical energy is conserved.']
]}
],
recap:['M A<sub>cm</sub> = F<sub>ext</sub>: internal forces never change the motion of the CM.','Torque τ = r × F; angular momentum L = r × p; τ = dL/dt.','With no external torque, Iω is constant.','Equilibrium needs zero net force and zero net torque.','I = Σmr²; rotational KE = ½Iω²; τ = Iα.','Rolling: K = ½mv²(1 + k²/R²); shapes with mass near the centre roll faster.'],
exam:['Find the CM of a system of particles; show that the CM moves under external forces only.','Show that τ = dL/dt and state conservation of angular momentum with examples.','Derive rotational KE and the expression for KE of a rolling body.','Solve lever, beam and balance problems using moments.']
});

L('c11-7', {
intro:'Gravity holds you to the ground, the Moon to Earth and Earth to the Sun. This chapter follows the story from Kepler\'s careful observations to Newton\'s universal law, then uses it to understand weight, the variation of g, potential energy, escape speed and satellites.',
sections:[
{t:'Kepler\'s laws of planetary motion', b:[
 ['p','Using Tycho Brahe\'s precise records, Johannes Kepler found three rules that describe how planets move.'],
 ['list',['<b>Law of orbits:</b> each planet moves in an ellipse with the Sun at one of the two foci.','<b>Law of areas:</b> the line joining a planet to the Sun sweeps out equal areas in equal times. A planet moves fastest at perihelion (closest point) and slowest at aphelion (farthest point).','<b>Law of periods:</b> the square of a planet\'s period is proportional to the cube of the semi-major axis of its orbit: T² ∝ a³.']],
 ['der','Law of areas follows from conservation of angular momentum',[
   'In a short time Δt, the planet moves through Δr. The area swept is ΔA = ½|r × vΔt|.',
   'So ΔA/Δt = ½|r × v| = L/(2m), where L = |r × p| is angular momentum.',
   'Gravity points along r (a central force), so its torque about the Sun is zero and L is constant.',
   'Therefore ΔA/Δt is constant: equal areas in equal times.']],
 ['ex','Mars orbits at about 1.52 AU. Estimate its year.',['T² ∝ a³ ⇒ T = (1.52)<sup>3/2</sup> years'],'≈ 1.87 Earth years']
]},
{t:'Universal law of gravitation', b:[
 ['p','Newton proposed that every particle in the universe attracts every other particle with a force proportional to the product of their masses and inversely proportional to the square of the distance between them.'],
 ['eq','F = G m₁m₂ / r², &nbsp; G = 6.67 × 10⁻¹¹ N m² kg⁻²'],
 ['list',['The force acts along the line joining the two masses and is always attractive.','It obeys Newton\'s third law: Earth pulls you as hard as you pull Earth.','It is the weakest fundamental force, which is why you do not feel the pull of a building, but it has infinite range and always adds up.','For a uniform sphere or spherical shell, the force on an outside mass is the same as if the whole mass were at its centre. A mass inside a uniform shell feels zero net force from that shell.']],
 ['p','Newton checked his idea with the Moon. The Moon\'s centripetal acceleration (v²/r, with r ≈ 60 Earth radii) is about 1/3600 of g, exactly what 1/r² predicts.'],
 ['ex','Find the gravitational force between two 50 kg students sitting 1 m apart.',['F = 6.67 × 10⁻¹¹ × 50 × 50/1²'],'≈ 1.7 × 10⁻⁷ N, far too small to notice']
]},
{t:'The gravitational constant and the mass of Earth', b:[
 ['p','G was first measured by Henry Cavendish in 1798 with a torsion balance: two small lead spheres on a light rod hung from a thin wire, near two large spheres. The tiny attraction twisted the wire by a measurable angle.'],
 ['p','Knowing G let Cavendish "weigh the Earth". At the surface, mg = GMm/R², so:'],
 ['eq','g = GM/R², &nbsp; M = gR²/G'],
 ['ex','Using g = 9.8 m/s², R = 6.37 × 10⁶ m, find Earth\'s mass.',['M = 9.8 × (6.37 × 10⁶)²/(6.67 × 10⁻¹¹)'],'≈ 5.97 × 10²⁴ kg']
]},
{t:'How g changes with height and depth', b:[
 ['der','Above the surface (height h)',[
   'g(h) = GM/(R + h)² = g × R²/(R + h)² = g/(1 + h/R)².',
   'For h ≪ R, using (1 + x)⁻² ≈ 1 − 2x: g(h) ≈ g(1 − 2h/R).']],
 ['der','Below the surface (depth d)',[
   'Assume Earth is a uniform sphere of density ρ. At depth d, the shell above you exerts no net force.',
   'Only the inner sphere of radius (R − d) pulls: its mass is M(R − d)³/R³.',
   'g(d) = G[M(R − d)³/R³]/(R − d)² = g(1 − d/R).',
   'At the centre (d = R), g = 0.']],
 ['list',['g decreases both going up and going down; it is greatest at the surface.','For the same small distance, g falls twice as fast going up as going down.','g also varies with latitude: Earth\'s rotation and its slight bulge make g a little less at the equator (≈ 9.78 m/s²) than at the poles (≈ 9.83 m/s²).']],
 ['ex','At what height above Earth is g reduced by 1%?',['g(1 − 2h/R) = 0.99g ⇒ 2h/R = 0.01','h = 0.005 × 6400 km'],'32 km']
]},
{t:'Gravitational potential energy', b:[
 ['p','Near the surface, U = mgh works because g is nearly constant. Far away, we need the full expression. Choose U = 0 at infinity, where the force vanishes.'],
 ['der','U(r) for a mass m at distance r from Earth\'s centre',[
   'Gravity pulls m towards Earth with force GMm/x² at distance x. As m moves in from infinity to r, gravity does positive work W = ∫<sub>r</sub><sup>∞</sup> GMm/x² dx = GMm/r.',
   'ΔU = −W, and U(∞) = 0, so U(r) = −GMm/r.',
   'U is negative everywhere: the mass is bound, and work must be done to pull it free.']],
 ['eq','U = −GMm/r, &nbsp; V = U/m = −GM/r &nbsp;(gravitational potential)'],
 ['p','For two points near the surface, U(R + h) − U(R) ≈ mgh, which recovers the familiar formula. For a system of several masses, add the potential energy of every pair.'],
 ['warn','A negative potential energy is not "less than nothing". It only means the system has less energy than when the masses are infinitely far apart.']
]},
{t:'Escape speed', b:[
 ['der','Minimum speed to escape Earth for ever',[
   'Launch with speed v from the surface. To just escape, the body arrives at infinity with zero speed.',
   'Energy conservation: ½mv² − GMm/R = 0 + 0.',
   'v<sub>e</sub> = √(2GM/R) = √(2gR).',
   'For Earth: √(2 × 9.8 × 6.4 × 10⁶) ≈ 11.2 km/s.']],
 ['list',['Escape speed does not depend on the mass of the object or (ignoring air) the direction of launch.','The Moon\'s escape speed is only about 2.3 km/s. Gas molecules there easily reach this, which is why the Moon has no atmosphere.','A body whose escape speed exceeds the speed of light would be a black hole.']]
]},
{t:'Earth satellites', b:[
 ['der','Orbital speed and period at height h',[
   'For a circular orbit of radius r = R + h, gravity supplies the centripetal force: mv²/r = GMm/r².',
   'Orbital speed: v₀ = √(GM/r) = √[gR²/(R + h)].',
   'Period: T = 2πr/v₀ = 2π√(r³/GM). This is Kepler\'s third law, T² ∝ r³.',
   'Close to the surface (h ≪ R): v₀ ≈ √(gR) ≈ 7.9 km/s and T ≈ 84 minutes.']],
 ['eq','v₀ = √(GM/r), &nbsp; T = 2π√(r³/GM), &nbsp; v<sub>e</sub> = √2 × v₀ (near surface)'],
 ['p','<b>Geostationary satellites</b> orbit in Earth\'s equatorial plane, moving west to east with a period of 24 hours, at a height of about 35,800 km. They appear fixed above one place, ideal for television and communication. <b>Polar satellites</b> fly low (500–800 km) over the poles with periods around 100 minutes; Earth turns beneath them, so they scan the whole surface for mapping and weather.'],
 ['ex','Find the height of a geostationary orbit. (GM = 4.0 × 10¹⁴ m³/s², T = 86400 s)',['r³ = GMT²/4π² = 4.0 × 10¹⁴ × (86400)²/39.5 ≈ 7.6 × 10²²','r ≈ 4.23 × 10⁷ m','h = r − R ≈ 42,300 − 6,400 km'],'≈ 35,900 km']
]},
{t:'Energy of an orbiting satellite', b:[
 ['der','Total energy in a circular orbit',[
   'Kinetic energy: K = ½mv₀² = GMm/2r.',
   'Potential energy: U = −GMm/r.',
   'Total: E = K + U = −GMm/2r.',
   'Note E = −K and U = 2E. The negative total means the satellite is bound to Earth.']],
 ['list',['To move a satellite to a higher orbit, you must supply energy, yet it ends up moving more slowly.','<b>Binding energy</b> of the satellite = GMm/2r: the energy needed to free it completely.','Air drag on a low satellite reduces E, so it spirals inward and, curiously, speeds up.']]
]},
{t:'Weightlessness', b:[
 ['p','Your <b>weight</b> as you feel it is the normal force a floor or scale pushes on you. In a freely falling lift, you and the floor fall together with acceleration g, so the floor pushes on you with zero force: you feel weightless.'],
 ['p','Astronauts in an orbiting spacecraft are in continuous free fall around Earth. Gravity still acts on them (at the ISS, about 90% of its surface value), and it is exactly what keeps them in orbit. Water poured from a glass forms floating blobs, and a pendulum stops swinging.'],
 ['simple','Orbiting is falling sideways so fast that you keep missing the ground.']
]}
],
recap:['Kepler: ellipses, equal areas (angular momentum), T² ∝ a³.','F = Gm₁m₂/r²; g = GM/R².','g(h) ≈ g(1 − 2h/R), g(d) = g(1 − d/R).','U = −GMm/r; escape speed √(2gR) ≈ 11.2 km/s.','Orbit: v₀ = √(GM/r), T = 2π√(r³/GM), E = −GMm/2r.'],
exam:['Derive the variation of g with height and depth.','Derive the escape speed and orbital speed; relate them.','Derive the period and energy of a satellite.','Show that Kepler\'s second law follows from angular momentum conservation.']
});

L('c11-8', {
intro:'Solids push back when you squeeze, stretch or twist them. This chapter measures that response with stress and strain, explains the stress–strain curve that engineers use, and defines the three elastic moduli.',
sections:[
{t:'Elasticity and plasticity', b:[
 ['p','When forces deform a solid, its atoms are pushed slightly closer or pulled slightly apart. The interatomic forces act like tiny springs and try to restore the original shape. <b>Elasticity</b> is the property of returning to the original size and shape once the deforming force is removed.'],
 ['list',['Steel, rubber (for moderate stretch) and quartz are highly elastic.','<b>Plastic</b> bodies, like putty, clay and wet mud, keep their new shape and show almost no restoring tendency.','No real material is perfectly elastic or perfectly plastic; every material has an elastic limit.']]
]},
{t:'Stress and strain', b:[
 ['p','<b>Stress</b> is the restoring force per unit area that develops inside a body when it is deformed. It has the same unit as pressure: N/m², or pascal (Pa).'],
 ['eq','Stress = F/A'],
 ['p','<b>Strain</b> is the fractional change in dimension. It is a ratio, so it has no unit.'],
 ['tbl',['Type','How it is caused','Stress','Strain'],[['Tensile / compressive (longitudinal)','Pull or push along the length','F/A','ΔL/L'],['Shearing','Equal and opposite forces parallel to opposite faces','F/A (force along surface)','Δx/L = tanθ ≈ θ'],['Hydraulic (volume)','Equal pressure from all sides, e.g. underwater','p','ΔV/V']]],
 ['simple','Stress is how hard the material is being loaded. Strain is how much it deforms in response, as a fraction of its size.']
]},
{t:'Hooke\'s law', b:[
 ['p','For small deformations, stress is directly proportional to strain:'],
 ['eq','Stress = k × Strain'],
 ['p','The constant k is the <b>modulus of elasticity</b>. Its value depends on the material and the kind of deformation, not on the size of the sample. Hooke\'s law holds only up to the proportional limit; beyond it, the graph curves.']
]},
{t:'The stress–strain curve', b:[
 ['p','Stretch a metal wire slowly and plot stress against strain. The curve has characteristic regions:'],
 ['list',['<b>O to A (linear region):</b> stress ∝ strain; Hooke\'s law holds. A is the proportional limit.','<b>A to B:</b> stress and strain are no longer proportional, but the wire still returns to its original length if unloaded. B is the <b>yield point</b> or elastic limit. The stress here is the <b>yield strength</b> σ<sub>y</sub>.','<b>B to D (plastic region):</b> small increases in stress give large strain. If unloaded at C, the wire does not return to its length; it keeps a <b>permanent set</b>.','<b>D (ultimate tensile strength σ<sub>u</sub>):</b> the maximum stress the wire can take.','<b>D to E:</b> the wire narrows in one spot ("necking"); strain increases even as stress falls, and the wire fractures at E.']],
 ['p','If D and E are far apart, the material is <b>ductile</b> (copper, mild steel): it can be drawn into wires. If they are close, it is <b>brittle</b> (cast iron, glass): it breaks soon after the elastic limit.'],
 ['p','Some materials, like rubber and the elastic tissue of the aorta, can stretch several times their length and still return. Such <b>elastomers</b> have no well-defined linear region.']
]},
{t:'Young\'s modulus', b:[
 ['eq','Y = (tensile stress)/(tensile strain) = (F/A)/(ΔL/L) = FL/(AΔL)'],
 ['der','Measuring Y in the laboratory (Searle\'s method idea)',[
   'Hang a long thin wire with a known load Mg. Measure its length L and its diameter d with a screw gauge, so A = πd²/4.',
   'Add loads in steps and measure the small extension ΔL each time with a vernier or micrometer, comparing against an identical reference wire to cancel temperature effects.',
   'Plot load against extension; it should be a straight line. Its slope (Mg/ΔL) gives Y = (slope) × L/A.',
   'A long, thin wire gives a larger, easier-to-measure extension for the same load.']],
 ['tbl',['Material','Y (10⁹ N/m²)','Material','Y (10⁹ N/m²)'],[['Steel','200','Aluminium','70'],['Iron','190','Glass','65'],['Copper','120','Wood','13'],['Brass','91','Bone','9.4']]],
 ['p','Steel\'s high Young\'s modulus is why it is used in machines and buildings: it deforms very little under load. Physicists call steel "more elastic" than rubber for this reason, even though rubber stretches more.'],
 ['ex','A copper wire 2.2 m long and 1.0 mm in diameter hangs a 10 kg mass. Y = 1.2 × 10¹¹ N/m². Find the extension.',['A = π(0.5 × 10⁻³)² ≈ 7.85 × 10⁻⁷ m²','ΔL = FL/(AY) = 98 × 2.2/(7.85 × 10⁻⁷ × 1.2 × 10¹¹)'],'≈ 2.3 × 10⁻³ m = 2.3 mm']
]},
{t:'Shear modulus and bulk modulus', b:[
 ['p','<b>Shear modulus</b> (modulus of rigidity) G measures resistance to change of shape:'],
 ['eq','G = (F/A)/(Δx/L) = F/(Aθ)'],
 ['p','For most solids G is about one-third of Y. Shearing happens when you twist a rod or slide a deck of cards.'],
 ['p','<b>Bulk modulus</b> B measures resistance to change of volume under uniform pressure:'],
 ['eq','B = −p/(ΔV/V), &nbsp; compressibility k = 1/B'],
 ['p','The minus sign makes B positive, because an increase in pressure reduces volume. Solids have the largest B and gases the smallest: air is roughly a million times more compressible than steel. Liquids and gases have only a bulk modulus, because they cannot hold a shape.'],
 ['ex','The average depth of the Indian Ocean is about 3000 m. By what fraction is water compressed at the bottom? (B = 2.2 × 10⁹ N/m², g = 10)',['p = ρgh = 1000 × 10 × 3000 = 3 × 10⁷ Pa','ΔV/V = p/B = 3 × 10⁷/2.2 × 10⁹'],'≈ 1.36%']
]},
{t:'Poisson\'s ratio and elastic energy', x:true, b:[
 ['p','When a wire is stretched it also becomes thinner. The ratio of lateral strain (Δd/d) to longitudinal strain (ΔL/L) is <b>Poisson\'s ratio</b> σ. It has no unit and is about 0.28–0.30 for steel.'],
 ['der','Elastic potential energy stored in a stretched wire',[
   'The stretching force grows from 0 to F as the extension grows from 0 to ΔL, like a spring.',
   'Work done = average force × extension = ½F × ΔL.',
   'Energy per unit volume = ½F ΔL/(AL) = ½ × stress × strain.']],
 ['eq','u = ½ × stress × strain = ½ Y (strain)²']
]},
{t:'Applications of elastic behaviour', b:[
 ['list',['<b>Crane ropes:</b> the stress on a rope must stay below the yield strength, with a safety factor (often 10). To lift 10 tonnes with steel of yield strength 300 MPa, you need a cross-section of at least about 3.3 × 10⁻⁴ m², radius ≈ 1 cm; with a safety factor, about 3 cm. Ropes are made of many thin wires twisted together for strength and flexibility.','<b>Beams in bridges and buildings:</b> the sag of a loaded beam is δ = WL³/(4bd³Y). It falls sharply with depth d (cubed), so beams are deep rather than wide. Very deep thin beams can buckle, so the I-section is used: it puts most material in the top and bottom flanges where stress is highest.','<b>Mountains:</b> rock at the base of a mountain must stay below its elastic limit under the weight above. Estimates give a maximum height of about 10 km, close to Mount Everest\'s 8.8 km.','<b>Pillars:</b> a pillar with rounded (distributed) ends carries more load than one with a flat top.']]
]}
],
recap:['Stress = F/A (Pa); strain = fractional change (no unit).','Hooke\'s law: stress ∝ strain, up to the proportional limit.','Stress–strain curve: linear region, yield point, plastic region, ultimate strength, fracture.','Y = FL/(AΔL); G = F/(Aθ); B = −p/(ΔV/V).','Ductile materials have a long plastic region; brittle ones break near the elastic limit.'],
exam:['Draw and explain the stress–strain curve for a metal wire.','Define Y, G and B and solve extension and compression problems.','Explain why beams are I-shaped and why steel is preferred over copper or rubber in construction.']
});

L('c11-9', {
intro:'Liquids and gases flow, take the shape of their containers, and push in every direction. This chapter covers pressure in fluids at rest, the flow of moving fluids (continuity and Bernoulli), viscosity, and the surface tension that shapes drops and bubbles.',
sections:[
{t:'Pressure', b:[
 ['p','A fluid at rest pushes perpendicular to any surface it touches. <b>Pressure</b> is that normal force per unit area:'],
 ['eq','P = F/A &nbsp;&nbsp;(1 Pa = 1 N/m²; 1 atm = 1.013 × 10⁵ Pa)'],
 ['p','Pressure is a scalar: at a point inside a fluid at rest it is the same in every direction. A sharp knife cuts better than a blunt one because the same force acts on a smaller area, giving more pressure. Camels and snowshoes spread weight over a larger area to reduce it.']
]},
{t:'Pressure and depth', b:[
 ['der','Variation of pressure with depth',[
   'Imagine a cylinder of fluid of cross-section A and height h, at rest.',
   'Forces on it: pressure P₁ pushes down on the top (P₁A), pressure P₂ pushes up on the bottom (P₂A), and its weight is ρhAg.',
   'Equilibrium: P₂A − P₁A = ρhAg ⇒ P₂ − P₁ = ρgh.',
   'If the top is open to the air: P = P<sub>a</sub> + ρgh.']],
 ['eq','P = P<sub>a</sub> + ρgh &nbsp;&nbsp;(gauge pressure = P − P<sub>a</sub> = ρgh)'],
 ['p','<b>Hydrostatic paradox:</b> pressure depends only on depth, not on the shape of the container or the amount of liquid. Vessels of very different shapes filled to the same height have the same pressure at the bottom.'],
 ['p','<b>Atmospheric pressure</b> is the weight of the air column above you. Torricelli\'s mercury barometer measures it: the air holds up a mercury column about 76 cm tall (ρgh = 13600 × 9.8 × 0.76 ≈ 1.01 × 10⁵ Pa). An open-tube <b>manometer</b> measures pressure differences by the difference in liquid levels.'],
 ['ex','What is the pressure on a swimmer 10 m below the surface of a lake?',['P = P<sub>a</sub> + ρgh = 1.01 × 10⁵ + 1000 × 10 × 10'],'≈ 2.0 × 10⁵ Pa, about 2 atm']
]},
{t:'Pascal\'s law and hydraulic machines', b:[
 ['p','<b>Pascal\'s law:</b> pressure applied to an enclosed fluid is transmitted undiminished to every part of the fluid and to the walls of its container.'],
 ['der','Force multiplication in a hydraulic lift',[
   'A small piston of area A₁ is pushed with force F₁, creating pressure P = F₁/A₁.',
   'That pressure reaches a large piston of area A₂, which feels F₂ = PA₂ = F₁(A₂/A₁).',
   'A large area ratio gives a large force. The trade-off: the small piston must move much farther (volume pushed is the same, A₁d₁ = A₂d₂), so energy is conserved.']],
 ['p','Hydraulic lifts, car brakes, dentist chairs, earth movers and hydraulic presses all use this. In brakes, your foot pushes a master cylinder; brake fluid carries the pressure to larger cylinders at each wheel.'],
 ['ex','Two syringes with piston diameters 1 cm and 3 cm are joined with water. A 10 N force is applied to the small one. What force acts on the large piston?',['F₂ = F₁ × (A₂/A₁) = 10 × (3/1)²'],'90 N']
]},
{t:'Streamline flow and the equation of continuity', b:[
 ['p','In <b>steady (streamline) flow</b>, the velocity of the fluid at each point does not change with time. Each particle follows a smooth path called a streamline; streamlines never cross. At high speeds the flow becomes <b>turbulent</b>, with eddies and swirls.'],
 ['der','Equation of continuity',[
   'Consider an incompressible fluid flowing through a pipe whose cross-section changes from A₁ to A₂.',
   'In time Δt, a volume A₁v₁Δt enters at one end and A₂v₂Δt leaves at the other.',
   'No fluid is created or lost, and it cannot be squeezed, so the two volumes are equal.',
   'A₁v₁ = A₂v₂: volume flow rate Av is constant.']],
 ['p','This is conservation of mass. Where a pipe narrows, the fluid speeds up, and streamlines crowd closer together. A river flows fastest where it is narrowest.']
]},
{t:'Bernoulli\'s principle', b:[
 ['der','Bernoulli\'s equation from the work–energy theorem',[
   'Follow a small mass of fluid Δm moving along a pipe from point 1 (pressure P₁, speed v₁, height h₁) to point 2 (P₂, v₂, h₂). Its volume is ΔV = Δm/ρ.',
   'Work done on it by the fluid pressure behind and in front: W = (P₁ − P₂)ΔV.',
   'Change in kinetic energy: ½Δm(v₂² − v₁²). Change in potential energy: Δm g(h₂ − h₁).',
   'Work–energy: (P₁ − P₂)ΔV = ½ρΔV(v₂² − v₁²) + ρΔV g(h₂ − h₁).',
   'Rearranging: P₁ + ½ρv₁² + ρgh₁ = P₂ + ½ρv₂² + ρgh₂.']],
 ['eq','P + ½ρv² + ρgh = constant along a streamline'],
 ['p','The three terms are pressure energy, kinetic energy and potential energy, each per unit volume. The principle assumes the fluid is incompressible, non-viscous and in steady flow.'],
 ['simple','Where a fluid moves faster, its pressure is lower.'],
 ['ex','Blood flows at 0.25 m/s through a large artery and speeds up to 0.75 m/s in a narrowed section at the same height. Find the pressure drop. (ρ = 1060 kg/m³)',['P₁ − P₂ = ½ρ(v₂² − v₁²) = ½ × 1060 × (0.5625 − 0.0625)'],'≈ 265 Pa']
]},
{t:'Applications of Bernoulli\'s principle', b:[
 ['list',['<b>Speed of efflux (Torricelli\'s law):</b> water leaving a small hole at depth h below the open surface of a tank exits at v = √(2gh), the same speed as a body falling freely through h.','<b>Venturi meter:</b> a pipe with a narrow throat. The pressure difference between the wide and narrow parts, read on a manometer, gives the flow speed. Carburettors and atomisers (perfume sprays) use the low pressure at a fast jet to draw up liquid.','<b>Blood flow and heart attacks:</b> where an artery is narrowed, blood speeds up and the pressure inside drops; the artery can be squeezed shut by the outside pressure.','<b>Lift on an aircraft wing:</b> the shape and tilt of the wing make air flow faster over the top than underneath, so pressure is lower on top and there is a net upward force.','<b>Spinning balls (Magnus effect):</b> a spinning ball drags air round with it, making the air faster on one side than the other. The pressure difference curves its path, as in swing bowling and curved free kicks.','<b>Roofs in storms:</b> fast wind over a roof lowers the pressure above it, and the still air inside can lift the roof off.']]
]},
{t:'Viscosity', b:[
 ['p','Real fluids resist flow. When layers of fluid slide past one another, each layer drags on its neighbours. This internal friction is <b>viscosity</b>. Honey is very viscous; water and air much less so.'],
 ['p','For fluid between a fixed plate and a moving plate, the fluid touching each plate moves with it, and the speed changes smoothly in between. The force needed to keep the plate moving is proportional to the area and to the velocity gradient:'],
 ['eq','F = ηA (dv/dx), &nbsp; η = coefficient of viscosity (Pa s, or poiseuille)'],
 ['list',['Viscosity of liquids decreases as temperature rises (warm honey flows easily); viscosity of gases increases with temperature.','Water at 20 °C: about 1.0 × 10⁻³ Pa s. Blood: about 2.7 × 10⁻³ Pa s. Glycerine: about 0.8–1.5 Pa s. Air: about 1.8 × 10⁻⁵ Pa s.']]
]},
{t:'Stokes\' law and terminal velocity', b:[
 ['p','A small sphere of radius a moving slowly at speed v through a fluid feels a viscous drag:'],
 ['eq','F = 6πηav'],
 ['der','Terminal velocity of a falling sphere',[
   'Forces on the sphere: weight (4/3)πa³ρg down; buoyancy (4/3)πa³σg up (σ = fluid density); drag 6πηav up.',
   'As it speeds up, drag grows until the forces balance and acceleration becomes zero.',
   '6πηav<sub>t</sub> = (4/3)πa³(ρ − σ)g.',
   'v<sub>t</sub> = 2a²(ρ − σ)g/(9η). Terminal velocity is proportional to a².']],
 ['p','This explains why raindrops and parachutists fall at steady, survivable speeds, and why tiny dust and fog droplets seem to float. Measuring v<sub>t</sub> of a ball in a liquid is also a standard way to find η.'],
 ['ex','A 2.0 mm radius copper ball (ρ = 8900 kg/m³) falls through oil (σ = 1500 kg/m³) at a terminal speed of 6.5 cm/s. Find the oil\'s viscosity.',['η = 2a²(ρ − σ)g/(9v<sub>t</sub>)','= 2 × (2 × 10⁻³)² × 7400 × 9.8/(9 × 0.065)'],'≈ 0.99 Pa s']
]},
{t:'Reynolds number', x:true, b:[
 ['p','Whether flow is smooth or turbulent depends on the dimensionless <b>Reynolds number</b>:'],
 ['eq','R<sub>e</sub> = ρvd/η'],
 ['p','Flow is streamline for R<sub>e</sub> below about 1000, turbulent above about 2000, and unstable in between. Turbulence wastes energy as heat, but it is useful for mixing; aircraft and cars are shaped to delay it. Blood flow in the heart can become turbulent in some heart conditions, which doctors hear as murmurs.']
]},
{t:'Surface tension', b:[
 ['p','Molecules inside a liquid are pulled equally in all directions by their neighbours. Molecules at the surface have neighbours only on one side, so they are pulled inward. The surface therefore behaves like a stretched elastic skin. <b>Surface tension</b> S is the force per unit length acting along the surface, or equally the extra energy per unit area of surface (N/m = J/m²).'],
 ['list',['Liquids tend to minimise their surface area, so free drops are spherical.','Small insects walk on water and a greased needle can float.','Surface tension decreases as temperature rises. Detergents and soap lower it, which helps water wet fabric and lift out grease.']],
 ['p','<b>Angle of contact</b> θ is the angle between the liquid surface and the solid, measured inside the liquid. Water on clean glass has θ < 90°: it wets the glass and spreads. Mercury on glass has θ > 90°: it does not wet, and forms beads. Waterproofing agents increase θ so water rolls off.']
]},
{t:'Excess pressure and capillary rise', b:[
 ['der','Excess pressure inside a liquid drop',[
   'A drop of radius r has inside pressure P<sub>i</sub> higher than outside P<sub>o</sub>, because the curved surface squeezes it.',
   'If the radius grows by Δr, the extra surface energy is S × 8πrΔr (area 4πr² grows by 8πrΔr).',
   'That energy equals the work done by the excess pressure: (P<sub>i</sub> − P<sub>o</sub>) × 4πr²Δr.',
   'P<sub>i</sub> − P<sub>o</sub> = 2S/r. For a soap bubble, which has two surfaces, it is 4S/r.']],
 ['der','Capillary rise',[
   'In a narrow tube of radius a dipped in water, the curved meniscus has radius a/cosθ, so the pressure just below it is lower than atmospheric by 2S cosθ/a.',
   'Water rises until the column\'s pressure ρgh makes up this difference.',
   'h = 2S cosθ/(ρga). Narrower tubes give higher rise.',
   'If θ > 90° (mercury), cosθ is negative: the level falls in the tube.']],
 ['p','Capillary action draws oil up a lamp wick, water through soil and up plant tissue, and ink into blotting paper.'],
 ['ex','How high does water rise in a glass tube of radius 0.05 cm? (S = 0.073 N/m, θ = 0°)',['h = 2 × 0.073/(1000 × 9.8 × 5 × 10⁻⁴)'],'≈ 2.98 cm']
]}
],
recap:['P = P<sub>a</sub> + ρgh; pressure depends only on depth.','Pascal\'s law: F₂ = F₁(A₂/A₁) in hydraulic machines.','Continuity: Av = constant. Bernoulli: P + ½ρv² + ρgh = constant.','Viscous drag F = 6πηav; terminal velocity v<sub>t</sub> = 2a²(ρ − σ)g/9η.','Surface tension: excess pressure 2S/r (drop), 4S/r (bubble); capillary rise h = 2S cosθ/ρga.'],
exam:['Derive P = P<sub>a</sub> + ρgh and explain the hydrostatic paradox.','Derive Bernoulli\'s equation and apply it (Torricelli, Venturi, lift).','Derive terminal velocity using Stokes\' law.','Derive excess pressure in a drop and bubble, and capillary rise.']
});

L('c11-10', {
intro:'Heat is energy that flows because of a temperature difference. This chapter explains how temperature is measured, how materials expand, how much heat it takes to warm or melt something, and the three ways heat travels.',
sections:[
{t:'Temperature and heat', b:[
 ['p','<b>Temperature</b> tells us how hot or cold a body is. <b>Heat</b> is the energy transferred from one body to another purely because of a temperature difference. Heat always flows on its own from the hotter body to the colder one, until both reach the same temperature (thermal equilibrium).'],
 ['simple','Temperature is a reading on a thermometer. Heat is energy on the move.'],
 ['warn','A body does not "contain heat". It contains internal energy. Heat is the name for energy while it is being transferred.']
]},
{t:'Measuring temperature', b:[
 ['p','A thermometer uses some property that changes steadily with temperature, such as the length of a mercury column. Two fixed points calibrate it: the ice point and the steam point at standard pressure.'],
 ['tbl',['Scale','Ice point','Steam point','Divisions'],[['Celsius','0 °C','100 °C','100'],['Fahrenheit','32 °F','212 °F','180'],['Kelvin','273.15 K','373.15 K','100']]],
 ['eq','(t<sub>F</sub> − 32)/180 = t<sub>C</sub>/100, &nbsp; T(K) = t<sub>C</sub> + 273.15'],
 ['p','Different liquids expand slightly differently, so liquid thermometers agree only at the fixed points. A <b>constant-volume gas thermometer</b> is more reliable: at low density all gases behave the same way. Its pressure falls linearly as it cools, and extrapolates to zero at −273.15 °C. This is <b>absolute zero</b>, the starting point of the <b>Kelvin scale</b>.'],
 ['p','<b>Ideal gas law:</b> PV = μRT, where μ is the number of moles and R = 8.31 J/mol K. Boyle\'s law (PV constant at constant T) and Charles\' law (V/T constant at constant P) are special cases.'],
 ['ex','At what temperature is the Fahrenheit reading twice the Celsius reading?',['Let t<sub>C</sub> = x, t<sub>F</sub> = 2x: (2x − 32)/180 = x/100','200x − 3200 = 180x ⇒ x = 160'],'160 °C = 320 °F']
]},
{t:'Thermal expansion', b:[
 ['p','Most materials expand when heated, because their atoms vibrate with larger amplitude and settle slightly farther apart on average.'],
 ['eq','ΔL/L = α<sub>l</sub>ΔT, &nbsp; ΔA/A = α<sub>A</sub>ΔT, &nbsp; ΔV/V = α<sub>V</sub>ΔT'],
 ['der','Why α<sub>V</sub> = 3α<sub>l</sub>',[
   'Take a cube of side l. After heating, its side becomes l(1 + α<sub>l</sub>ΔT).',
   'New volume = l³(1 + α<sub>l</sub>ΔT)³ ≈ l³(1 + 3α<sub>l</sub>ΔT), since α<sub>l</sub>ΔT is tiny and its square can be ignored.',
   'So ΔV/V = 3α<sub>l</sub>ΔT, giving α<sub>V</sub> = 3α<sub>l</sub>. Similarly α<sub>A</sub> = 2α<sub>l</sub>.']],
 ['list',['Typical α<sub>l</sub>: steel ≈ 1.2 × 10⁻⁵ /K, copper ≈ 1.7 × 10⁻⁵ /K, aluminium ≈ 2.5 × 10⁻⁵ /K, invar (a nickel–iron alloy) ≈ 1 × 10⁻⁶ /K.','Liquids expand roughly ten times more than solids; gases far more again (for an ideal gas at constant pressure, α<sub>V</sub> = 1/T).','<b>Thermal stress:</b> a rod clamped so it cannot expand develops stress YαΔT when heated. This can crack roads and buckle rails, which is why expansion gaps are left.','A <b>bimetallic strip</b> of two metals with different α bends when heated; it is used in thermostats and fire alarms.']],
 ['ex','A brass disc with a hole 4.24 cm wide at 27 °C is cooled to −197 °C. How much does the hole shrink? (α = 2.0 × 10⁻⁵ /K)',['ΔT = −224 K','Δd = αdΔT = 2.0 × 10⁻⁵ × 4.24 × (−224)'],'≈ −0.019 cm (the hole gets smaller, just like the metal)']
]},
{t:'The anomalous expansion of water', b:[
 ['p','Water behaves unusually. When heated from 0 °C to 4 °C it <b>contracts</b>, and only above 4 °C does it expand like other liquids. So water is densest at 4 °C.'],
 ['p','This matters for life. In winter, the top layer of a lake cools and sinks until the whole lake reaches 4 °C. Further cooling makes the surface water lighter, so it stays on top and freezes there. Ice is also a poor conductor, so the water below stays liquid at about 4 °C, and fish survive.']
]},
{t:'Specific heat capacity', b:[
 ['p','The heat needed to change a body\'s temperature depends on its mass, the material and the temperature change:'],
 ['eq','Q = mcΔT, &nbsp; heat capacity S = mc, &nbsp; molar specific heat C = Q/(μΔT)'],
 ['list',['c is the <b>specific heat capacity</b>, in J/kg K. Water has an unusually high value, about 4186 J/kg K; copper is about 387 J/kg K and aluminium about 900 J/kg K.','Because of water\'s high specific heat, coastal areas have mild climates, and water is used in car radiators and hot-water bottles.','For gases, the specific heat depends on how heat is supplied: at constant pressure (C<sub>p</sub>) or at constant volume (C<sub>v</sub>).']]
]},
{t:'Calorimetry', b:[
 ['p','<b>Calorimetry</b> means measuring heat. In an insulated container (a calorimeter), heat lost by hot bodies equals heat gained by cold bodies, provided none escapes.'],
 ['eq','Heat lost = heat gained'],
 ['ex','A 0.047 kg aluminium sphere is heated in boiling water to 100 °C, then dropped into a 0.14 kg copper calorimeter holding 0.25 kg of water at 20 °C. The final temperature is 23 °C. Find the specific heat of aluminium. (c<sub>water</sub> = 4180, c<sub>Cu</sub> = 386.4 J/kg K)',['Heat lost by sphere = 0.047 × c × (100 − 23) = 3.619c','Heat gained = (0.25 × 4180 + 0.14 × 386.4) × (23 − 20) = (1045 + 54.1) × 3 = 3297 J','3.619c = 3297'],'c ≈ 911 J/kg K']
]},
{t:'Change of state and latent heat', b:[
 ['p','Matter exists as solid, liquid or gas. During melting (solid → liquid), boiling (liquid → gas) and their reverses, the temperature stays constant even though heat keeps flowing. The heat goes into breaking or forming bonds between molecules, not into raising temperature.'],
 ['eq','Q = mL'],
 ['list',['<b>Latent heat of fusion</b> L<sub>f</sub>: heat to melt 1 kg at its melting point. Ice: 3.33 × 10⁵ J/kg.','<b>Latent heat of vaporisation</b> L<sub>v</sub>: heat to boil 1 kg at its boiling point. Water: 22.6 × 10⁵ J/kg.','A heating curve (temperature against heat supplied) has sloping parts (warming) and flat parts (changing state).','Melting and boiling points depend on pressure. Higher pressure lowers the melting point of ice (so ice skates glide on a thin water layer, and pressed ice refreezes: <b>regelation</b>) and raises the boiling point of water (pressure cookers cook faster). At high altitude water boils below 100 °C.','<b>Sublimation</b> goes directly from solid to gas: dry ice, camphor, naphthalene.','At the <b>triple point</b> (for water 273.16 K and 611 Pa), solid, liquid and vapour exist together.']],
 ['p','Steam at 100 °C causes worse burns than water at 100 °C, because it gives up its large latent heat as it condenses on the skin.'],
 ['ex','How much heat is needed to turn 3 kg of ice at −12 °C into water at 20 °C? (c<sub>ice</sub> = 2100, c<sub>water</sub> = 4186 J/kg K, L<sub>f</sub> = 3.35 × 10⁵ J/kg)',['Warm ice: 3 × 2100 × 12 = 75,600 J','Melt: 3 × 3.35 × 10⁵ = 1,005,000 J','Warm water: 3 × 4186 × 20 = 251,160 J'],'Total ≈ 1.33 × 10⁶ J']
]},
{t:'Heat transfer: conduction', b:[
 ['p','In <b>conduction</b>, heat passes through a material by collisions between neighbouring atoms and, in metals, by free electrons, without the material itself moving. It happens mainly in solids.'],
 ['der','Rate of heat flow through a bar',[
   'A bar of length L and cross-section A has its ends at temperatures T<sub>C</sub> and T<sub>D</sub> (T<sub>C</sub> > T<sub>D</sub>).',
   'Once steady, the heat current H (heat per second) is found to be proportional to A and to the temperature difference, and inversely proportional to L.',
   'H = KA(T<sub>C</sub> − T<sub>D</sub>)/L, where K is the thermal conductivity (W/m K).']],
 ['list',['Metals are good conductors (silver ≈ 406, copper ≈ 385, aluminium ≈ 205 W/m K). Wood, glass wool, air and plastics are poor conductors (insulators).','Cooking pots have copper bottoms to spread heat; their handles are plastic.','Houses with thick walls or double-glazed windows (trapping still air) keep heat in.','Ice is a poor conductor, which is how igloos stay warm inside.']],
 ['ex','A 1 m long steel rod (K = 50.2) of cross-section 0.04 m² joins two bodies at 100 °C and 0 °C. Find the heat current.',['H = 50.2 × 0.04 × 100/1'],'≈ 200 W']
]},
{t:'Convection and radiation', b:[
 ['p','In <b>convection</b>, heat is carried by the movement of the fluid itself. Warm fluid expands, becomes less dense, and rises; cooler fluid sinks to take its place. This sets up convection currents. When a fan or pump drives the flow, it is <b>forced convection</b>; otherwise it is <b>natural convection</b>.'],
 ['list',['<b>Sea breeze:</b> by day the land heats faster than the sea; warm air over the land rises and cool air from the sea flows in. At night the flow reverses (land breeze).','<b>Trade winds:</b> air heated at the equator rises and moves towards the poles; cooler air near the surface flows towards the equator, deflected by Earth\'s rotation.','Room heaters are placed low and air conditioners high, so convection spreads the warm or cool air.','In the human body, blood carries heat by forced convection.']],
 ['p','In <b>radiation</b>, heat travels as electromagnetic waves (mostly infrared) and needs no medium. It is how sunlight crosses empty space to reach Earth, and it travels at the speed of light. All bodies radiate, and hotter bodies radiate much more.'],
 ['list',['Dark, dull surfaces absorb and emit radiation well; shiny, light surfaces reflect it. That is why we wear white clothes in summer and why solar cookers are painted black inside.','A thermos flask stops all three: a vacuum between double glass walls blocks conduction and convection, and silvered surfaces reflect radiation.','<b>Greenhouse effect:</b> Earth\'s surface absorbs sunlight and re-radiates infrared, which gases like CO₂ and water vapour partly trap, keeping Earth warm.']]
]},
{t:'Black-body radiation and Stefan\'s law', x:true, b:[
 ['p','A <b>black body</b> absorbs all radiation falling on it and is also the best possible emitter. The radiation it emits depends only on its temperature. As temperature rises, the peak of its emission shifts to shorter wavelengths (red-hot, then white-hot).'],
 ['eq','Wien\'s law: λ<sub>m</sub>T = 2.9 × 10⁻³ m K'],
 ['eq','Stefan–Boltzmann law: H = eσAT⁴, &nbsp; σ = 5.67 × 10⁻⁸ W m⁻² K⁻⁴'],
 ['p','Here e is the emissivity (1 for a perfect black body). A body at temperature T in surroundings at T<sub>s</sub> loses heat at a net rate eσA(T⁴ − T<sub>s</sub>⁴). Wien\'s law lets astronomers find the surface temperature of stars from their colour; the Sun\'s peak near 480 nm gives about 6000 K.']
]},
{t:'Newton\'s law of cooling', b:[
 ['p','A hot cup of tea cools quickly at first and then more slowly. Newton found that for small temperature differences, the rate of loss of heat is proportional to the temperature difference between the body and its surroundings:'],
 ['eq','dQ/dt = −k(T₂ − T₁), &nbsp; dT/dt = −K(T₂ − T₁)'],
 ['p','A useful approximate form for problems: (T<sub>initial</sub> − T<sub>final</sub>)/t = K[(T<sub>initial</sub> + T<sub>final</sub>)/2 − T<sub>surroundings</sub>]. You use the average temperature during the interval.'],
 ['ex','A body cools from 80 °C to 50 °C in 5 minutes in a room at 20 °C. How long will it take to cool from 60 °C to 30 °C?',['First interval: 30/5 = K(65 − 20) ⇒ K = 6/45 = 2/15 per min','Second interval: 30/t = (2/15)(45 − 20) = 10/3','t = 30 × 3/10'],'9 minutes']
]}
],
recap:['Heat flows from hot to cold; T(K) = t<sub>C</sub> + 273.15.','ΔL = αLΔT; α<sub>V</sub> = 3α<sub>l</sub>; water is densest at 4 °C.','Q = mcΔT; heat lost = heat gained; Q = mL at a change of state.','Conduction: H = KAΔT/L. Convection moves fluid. Radiation needs no medium.','Newton\'s law of cooling: cooling rate ∝ temperature excess.'],
exam:['Convert between temperature scales; relate α<sub>l</sub>, α<sub>A</sub>, α<sub>V</sub>.','Solve calorimetry and latent-heat problems (including ice to steam).','Explain conduction, convection and radiation with everyday examples; anomalous expansion of water.','Apply Newton\'s law of cooling.']
});
})();
