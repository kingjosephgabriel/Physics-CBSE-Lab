/* Full lessons — Class 11, Chapters 11–14. Original explanations written for NCERT Physics Lab. */
(function(){
const L = (id, o) => { (window.LESSONS = window.LESSONS || {})[id] = o; };

L('c11-11', {
intro:'Thermodynamics is the physics of heat, work and internal energy for large systems like a gas in a cylinder. It does not care about individual molecules. Its laws decide what engines, refrigerators and even living cells can and cannot do.',
sections:[
{t:'Systems, surroundings and thermal equilibrium', b:[
 ['p','A <b>thermodynamic system</b> is the part of the world we study, such as a gas in a cylinder with a piston. Everything else is the <b>surroundings</b>. The state of a system is described by a few large-scale variables: pressure P, volume V, temperature T and amount of substance.'],
 ['p','A system is in <b>thermal equilibrium</b> when its state variables no longer change with time. Two systems placed in contact through a conducting (diathermic) wall exchange heat until they reach the same temperature. An insulating (adiabatic) wall prevents heat flow.']
]},
{t:'The zeroth law', b:[
 ['p','<b>Zeroth law:</b> if two systems A and B are each in thermal equilibrium with a third system C, then A and B are in thermal equilibrium with each other.'],
 ['p','It sounds obvious, but it is what makes thermometers work. The thermometer is system C: if it reads the same on A and on B, we know A and B would not exchange heat. The zeroth law tells us that temperature is a real property that systems in equilibrium share.'],
 ['simple','If two things each agree with the thermometer, they agree with each other.']
]},
{t:'Heat, work and internal energy', b:[
 ['p','<b>Internal energy</b> U is the sum of the kinetic and potential energies of all the molecules, measured in a frame where the system as a whole is at rest. It depends only on the state of the system (it is a <b>state variable</b>). For an ideal gas it depends only on temperature.'],
 ['p','There are two ways to change U. <b>Heat</b> ΔQ is energy that flows because of a temperature difference. <b>Work</b> ΔW is energy transferred by other means, such as pushing a piston. Heat and work are not state variables: they describe a process, not a state. A gas does not "contain" work or heat.'],
 ['der','Work done by a gas',[
   'A gas at pressure P pushes a piston of area A outward by a small distance Δx.',
   'Force = PA, so work done by the gas ΔW = PAΔx = PΔV.',
   'For a larger change, W = ∫P dV, which equals the area under the curve on a P–V diagram.',
   'If the gas expands, W is positive (the gas does work). If it is compressed, W is negative (work is done on the gas).']]
]},
{t:'The first law of thermodynamics', b:[
 ['eq','ΔQ = ΔU + ΔW'],
 ['p','Heat given to a system goes partly into raising its internal energy and partly into the work the system does on its surroundings. The first law is simply <b>conservation of energy</b> applied to heat.'],
 ['list',['Sign convention used here: ΔQ is positive when heat goes <b>into</b> the system; ΔW is positive when work is done <b>by</b> the system.','ΔU depends only on the start and end states, but ΔQ and ΔW separately depend on the path.','Boiling water: when 1 g of water at 100 °C turns to steam at 1 atm, it absorbs 2256 J, does about 169 J of work expanding against the atmosphere, and its internal energy rises by about 2087 J.']],
 ['ex','A gas absorbs 400 J of heat and does 150 J of work. What is the change in its internal energy?',['ΔU = ΔQ − ΔW = 400 − 150'],'ΔU = +250 J'],
 ['warn','A perpetual-motion machine that produces work from nothing is forbidden by the first law.']
]},
{t:'Specific heat capacity of gases', b:[
 ['p','A gas can be heated at constant volume (no work done) or at constant pressure (it expands and does work). At constant pressure, some heat is used for that work, so more heat is needed for the same temperature rise. Hence C<sub>P</sub> > C<sub>V</sub>.'],
 ['der','Mayer\'s relation: C<sub>P</sub> − C<sub>V</sub> = R',[
   'Take 1 mole of ideal gas. At constant volume ΔW = 0, so ΔQ = ΔU = C<sub>V</sub>ΔT.',
   'At constant pressure: ΔQ = ΔU + PΔV. Since U depends only on T, ΔU is still C<sub>V</sub>ΔT.',
   'For 1 mole of ideal gas, PV = RT, so at constant P, PΔV = RΔT.',
   'C<sub>P</sub>ΔT = C<sub>V</sub>ΔT + RΔT ⇒ C<sub>P</sub> − C<sub>V</sub> = R.']],
 ['eq','C<sub>P</sub> − C<sub>V</sub> = R, &nbsp; γ = C<sub>P</sub>/C<sub>V</sub>'],
 ['p','Water\'s specific heat is about 4186 J/kg K, or 75.3 J/mol K. Values for solids near room temperature are close to 3R (Dulong and Petit), as explained in the next chapter.']
]},
{t:'Quasi-static processes', b:[
 ['p','On a P–V diagram, every point is an equilibrium state. But real processes, like a sudden expansion, pass through non-equilibrium states with no single P or T. To use the diagram, we imagine an idealised <b>quasi-static</b> process: one carried out so slowly that the system stays in equilibrium at every step, changing only by tiny amounts.'],
 ['p','Moving a piston very slowly, or heating with a series of reservoirs that differ by tiny temperature steps, approximates a quasi-static process.']
]},
{t:'Isothermal process', b:[
 ['p','In an <b>isothermal</b> process the temperature stays constant. The gas is kept in contact with a large heat reservoir and changed slowly. For an ideal gas, PV = constant (Boyle\'s law), so the curve on a P–V diagram is a hyperbola called an isotherm.'],
 ['der','Work done in an isothermal expansion',[
   'For μ moles of ideal gas at temperature T: P = μRT/V.',
   'W = ∫<sub>V₁</sub><sup>V₂</sup> P dV = μRT ∫ dV/V = μRT ln(V₂/V₁).',
   'Since T is constant, ΔU = 0. So by the first law, ΔQ = W: all the heat absorbed becomes work.']],
 ['eq','W = μRT ln(V₂/V₁) = 2.303 μRT log₁₀(V₂/V₁)'],
 ['ex','2 mol of an ideal gas at 300 K expand isothermally from 10 L to 20 L. Find the work done and heat absorbed.',['W = 2 × 8.31 × 300 × ln 2 = 4986 × 0.693'],'W ≈ 3456 J = ΔQ']
]},
{t:'Adiabatic process', b:[
 ['p','In an <b>adiabatic</b> process no heat enters or leaves (ΔQ = 0). It happens when the system is well insulated or the change is very fast, like a bicycle pump or the compression stroke of an engine. Then ΔU = −ΔW: if the gas does work it cools; if work is done on it, it heats up.'],
 ['eq','PV<sup>γ</sup> = constant, &nbsp; TV<sup>γ−1</sup> = constant'],
 ['der','Work done in an adiabatic change',[
   'PV<sup>γ</sup> = K, so P = K/V<sup>γ</sup>.',
   'W = ∫<sub>V₁</sub><sup>V₂</sup> K V<sup>−γ</sup> dV = K[V<sup>1−γ</sup>/(1 − γ)] from V₁ to V₂.',
   'Using K = P₁V₁<sup>γ</sup> = P₂V₂<sup>γ</sup>: W = (P₁V₁ − P₂V₂)/(γ − 1).',
   'With PV = μRT: W = μR(T₁ − T₂)/(γ − 1).']],
 ['p','An adiabatic curve is steeper than an isotherm through the same point, because pressure falls both from the expansion and from the cooling. The slope ratio is exactly γ.'],
 ['ex','Air (γ = 1.4) at 27 °C is suddenly compressed to 1/8 of its volume. Find its final temperature.',['TV<sup>γ−1</sup> = constant ⇒ T₂ = T₁(V₁/V₂)<sup>0.4</sup> = 300 × 8<sup>0.4</sup>','8<sup>0.4</sup> ≈ 2.30'],'T₂ ≈ 690 K ≈ 417 °C (the principle of the diesel engine)']
]},
{t:'Isochoric, isobaric and cyclic processes', b:[
 ['tbl',['Process','What is constant','Work done','First law'],[['Isochoric','Volume','0','ΔQ = ΔU (all heat raises temperature)'],['Isobaric','Pressure','PΔV = μRΔT','ΔQ = ΔU + PΔV'],['Isothermal','Temperature','μRT ln(V₂/V₁)','ΔU = 0, ΔQ = W'],['Adiabatic','No heat flow','μR(T₁ − T₂)/(γ − 1)','ΔQ = 0, ΔU = −W'],['Cyclic','Returns to start','Area enclosed by the loop','ΔU = 0, ΔQ = W']]],
 ['p','In a <b>cyclic process</b> the system returns to its initial state, so ΔU = 0 and the net work equals the net heat absorbed. On a P–V diagram, the work is the area inside the loop: positive if the loop is traced clockwise, negative if anticlockwise.'],
 ['simple','On a P–V diagram: area under a curve = work in that step; area inside a loop = net work in a full cycle.']
]},
{t:'Heat engines and refrigerators', x:true, b:[
 ['p','A <b>heat engine</b> takes heat Q₁ from a hot reservoir, converts part of it to work W, and rejects the rest Q₂ to a cold reservoir, then repeats in a cycle. Car engines, steam turbines and thermal power stations are heat engines.'],
 ['eq','η = W/Q₁ = 1 − Q₂/Q₁'],
 ['p','A <b>refrigerator</b> (or heat pump) runs the cycle backwards: work W is used to take heat Q₂ out of the cold space and dump Q₁ = Q₂ + W into the warm room. Its <b>coefficient of performance</b> is α = Q₂/W, and it can be much greater than 1.'],
 ['p','A refrigerator works by letting a refrigerant gas expand suddenly (cooling it), so it absorbs heat from the food compartment; a compressor then squeezes it, heating it, and it gives that heat to the room through coils at the back.']
]},
{t:'The second law of thermodynamics', b:[
 ['p','The first law allows many things that never happen: heat flowing on its own from a cold object to a hot one, or an engine turning heat completely into work. The <b>second law</b> rules these out.'],
 ['list',['<b>Kelvin–Planck statement:</b> no process is possible whose only result is the absorption of heat from a reservoir and its complete conversion into work. No heat engine can be 100% efficient.','<b>Clausius statement:</b> no process is possible whose only result is the transfer of heat from a colder body to a hotter body. A refrigerator needs work to do this.']],
 ['p','The two statements are equivalent: a violation of one would allow a violation of the other.']
]},
{t:'Reversible and irreversible processes', b:[
 ['p','A process is <b>reversible</b> if it can be run backwards so that both the system and its surroundings return exactly to their original states. That requires the process to be quasi-static and free of dissipative effects like friction and viscosity.'],
 ['p','Every real process is <b>irreversible</b>. Heat flows from a hot stove to a cold pan, not back. A gas that expands into a vacuum never squeezes itself back. Friction turns work into heat that cannot be fully turned back into work. Reversible processes are an ideal limit that helps us find the best possible performance.']
]},
{t:'The Carnot engine', x:true, b:[
 ['p','Sadi Carnot asked: what is the most efficient engine that could work between a hot reservoir at T₁ and a cold one at T₂? His answer is an engine running a reversible cycle of four steps:'],
 ['list',['Isothermal expansion at T₁, absorbing heat Q₁.','Adiabatic expansion, cooling the gas from T₁ to T₂.','Isothermal compression at T₂, rejecting heat Q₂.','Adiabatic compression, warming the gas back to T₁.']],
 ['eq','η<sub>Carnot</sub> = 1 − T₂/T₁ &nbsp;&nbsp;(T in kelvin)'],
 ['p','<b>Carnot\'s theorem:</b> no engine working between two given temperatures can be more efficient than a reversible (Carnot) engine, and all reversible engines between those temperatures have the same efficiency, regardless of the working substance. Efficiency is 100% only if T₂ = 0 K, which can never be reached.'],
 ['ex','A steam engine works between 500 K and 300 K. What is its maximum possible efficiency?',['η = 1 − 300/500'],'40%']
]}
],
recap:['Zeroth law makes temperature meaningful; first law ΔQ = ΔU + ΔW is energy conservation.','Work by a gas W = ∫P dV = area under the P–V curve.','C<sub>P</sub> − C<sub>V</sub> = R; γ = C<sub>P</sub>/C<sub>V</sub>.','Isothermal: W = μRT ln(V₂/V₁), ΔU = 0. Adiabatic: PV<sup>γ</sup> = constant, ΔQ = 0.','Second law: no engine is 100% efficient; heat does not flow on its own from cold to hot.'],
exam:['State and explain the zeroth and first laws.','Derive Mayer\'s relation C<sub>P</sub> − C<sub>V</sub> = R.','Derive the work done in isothermal and adiabatic processes.','State the second law (Kelvin–Planck and Clausius); explain reversible vs irreversible processes.']
});

L('c11-12', {
intro:'Kinetic theory explains the behaviour of gases by treating them as huge numbers of tiny molecules in random motion. From simple assumptions it derives the gas laws, gives temperature a physical meaning, and predicts specific heats.',
sections:[
{t:'The molecular nature of matter', b:[
 ['p','Everything is made of atoms and molecules, an idea first suggested in ancient India by Kanada and in Greece by Democritus, and put on a scientific footing by John Dalton. In solids, molecules are tightly bound; in liquids they are close but can move past each other; in gases they are far apart (about 10 times their own size) and move freely, colliding with each other and the walls.'],
 ['p','Gay-Lussac found that gases combine in simple volume ratios, and Avogadro proposed that equal volumes of all gases at the same temperature and pressure contain the same number of molecules. One mole contains N<sub>A</sub> = 6.02 × 10²³ particles, and occupies 22.4 L at STP (273 K, 1 atm).']
]},
{t:'The ideal gas and its laws', b:[
 ['p','At low pressure and high temperature, all gases obey a simple relation, the <b>ideal gas equation</b>:'],
 ['eq','PV = μRT = Nk<sub>B</sub>T, &nbsp; R = 8.314 J/mol K, &nbsp; k<sub>B</sub> = R/N<sub>A</sub> = 1.38 × 10⁻²³ J/K'],
 ['list',['<b>Boyle\'s law</b> (fixed T and amount): PV = constant.','<b>Charles\'s law</b> (fixed P): V ∝ T.','<b>Dalton\'s law of partial pressures:</b> in a mixture of gases that do not react, the total pressure is the sum of the pressures each gas would exert alone: P = P₁ + P₂ + ….','Real gases deviate from ideal behaviour at high pressure and low temperature, where molecular size and attractions matter.']],
 ['ex','An oxygen cylinder of 30 L holds gas at 15 atm and 27 °C. How many moles does it contain?',['μ = PV/RT = (15 × 1.013 × 10⁵ × 0.030)/(8.31 × 300)'],'≈ 18.3 mol']
]},
{t:'Assumptions of the kinetic theory', b:[
 ['list',['A gas consists of a very large number of identical molecules moving at random in all directions.','The molecules are tiny points compared with the distances between them; their total volume is negligible.','Molecules exert no forces on each other except during collisions.','Collisions between molecules and with the walls are perfectly elastic and last a negligible time.','Between collisions, molecules move in straight lines at constant speed.','Newton\'s laws apply to the molecules.']]
]},
{t:'Pressure of an ideal gas', b:[
 ['der','Deriving P = ⅓nm v̄²',[
   'Take a cube of side l containing N molecules, each of mass m. Look at one molecule with velocity components (v<sub>x</sub>, v<sub>y</sub>, v<sub>z</sub>).',
   'When it hits the wall perpendicular to x, its x-velocity reverses: momentum change = 2mv<sub>x</sub>, delivered to the wall.',
   'In time Δt, the molecules that hit this wall are those within distance v<sub>x</sub>Δt, moving towards it: half of n × A v<sub>x</sub>Δt (n = number per unit volume, A = wall area).',
   'Momentum given to the wall: Q = (½nAv<sub>x</sub>Δt)(2mv<sub>x</sub>) = nmv<sub>x</sub>²AΔt. So pressure P = Q/(AΔt) = nmv<sub>x</sub>².',
   'Averaging over all molecules: P = nm⟨v<sub>x</sub>²⟩. Motion is random, so ⟨v<sub>x</sub>²⟩ = ⟨v<sub>y</sub>²⟩ = ⟨v<sub>z</sub>²⟩ = ⅓⟨v²⟩.',
   'P = ⅓nm⟨v²⟩ = ⅓ρ⟨v²⟩, where ρ = nm is the gas density.']],
 ['eq','P = ⅓ n m v̄² = ⅓ ρ v̄²'],
 ['p','The derivation does not depend on the shape of the container, and collisions between molecules do not change the result, because they do not change the total momentum carried towards the wall.']
]},
{t:'Kinetic interpretation of temperature', b:[
 ['der','Average kinetic energy is proportional to temperature',[
   'From P = ⅓nmv̄², multiply by V: PV = ⅓Nmv̄² = ⅔N(½mv̄²) = ⅔E, where E is the total translational KE.',
   'Compare with the ideal gas law PV = Nk<sub>B</sub>T: ⅔E = Nk<sub>B</sub>T.',
   'So the average KE per molecule, E/N = ½mv̄² = (3/2)k<sub>B</sub>T.']],
 ['eq','½mv̄² = (3/2)k<sub>B</sub>T, &nbsp; v<sub>rms</sub> = √(3k<sub>B</sub>T/m) = √(3RT/M)'],
 ['list',['Temperature is a measure of the average translational kinetic energy of molecules. At absolute zero this motion would (classically) stop.','At the same temperature, all gases have the same average KE per molecule, whatever their mass.','Lighter molecules move faster: v<sub>rms</sub> ∝ 1/√M. This is why lighter gases diffuse faster (Graham\'s law), and why uranium isotopes can be separated by gas diffusion.','At 300 K, v<sub>rms</sub> is about 1930 m/s for hydrogen, 517 m/s for nitrogen and 483 m/s for oxygen.']],
 ['ex','At what temperature is the rms speed of argon atoms (M = 39.9 g/mol) equal to that of helium atoms (M = 4.0 g/mol) at −20 °C?',['v<sub>rms</sub> equal ⇒ T/M equal','T<sub>Ar</sub> = 253 × 39.9/4.0'],'≈ 2.52 × 10³ K']
]},
{t:'Degrees of freedom and equipartition', b:[
 ['p','A <b>degree of freedom</b> is an independent way a molecule can store energy. A single atom can move along x, y and z: 3 translational degrees of freedom. A rigid diatomic molecule (like O₂ or N₂) can also rotate about two axes perpendicular to its length: 2 rotational degrees, total 5. At high temperatures, the two atoms can also vibrate, adding 2 more (one kinetic, one potential).'],
 ['p','<b>Law of equipartition of energy:</b> in thermal equilibrium, the total energy is shared equally among all degrees of freedom, with an average of ½k<sub>B</sub>T for each translational and rotational degree, and k<sub>B</sub>T for each vibrational mode (because it has both kinetic and potential energy).'],
 ['simple','Every way a molecule can wiggle, spin or move gets an equal share of ½k<sub>B</sub>T.']
]},
{t:'Specific heats of gases and solids', b:[
 ['der','Molar specific heats from equipartition',[
   '<b>Monatomic gas</b> (He, Ar): 3 degrees of freedom. U = (3/2)RT per mole, so C<sub>V</sub> = dU/dT = (3/2)R, C<sub>P</sub> = (5/2)R, γ = 5/3 ≈ 1.67.',
   '<b>Rigid diatomic gas</b> (N₂, O₂ at room temperature): 5 degrees. C<sub>V</sub> = (5/2)R, C<sub>P</sub> = (7/2)R, γ = 7/5 = 1.4.',
   '<b>Diatomic with vibration</b>: 5 + vibrational mode (k<sub>B</sub>T). C<sub>V</sub> = (7/2)R, γ = 9/7 ≈ 1.29.',
   '<b>Polyatomic gas</b> (non-linear, rigid): 3 translational + 3 rotational. C<sub>V</sub> = 3R, γ = 4/3.']],
 ['eq','γ = 1 + 2/f, &nbsp; C<sub>V</sub> = (f/2)R'],
 ['p','<b>Solids:</b> each atom vibrates in 3 dimensions, each with kinetic and potential energy: 6 × ½k<sub>B</sub>T = 3k<sub>B</sub>T per atom. So U = 3RT per mole and C = 3R ≈ 25 J/mol K. This is the <b>Dulong–Petit law</b>, which works well for many solids at room temperature.'],
 ['p','<b>Water:</b> treated like a solid, each molecule has 3 atoms, giving C ≈ 9R ≈ 75 J/mol K, which matches the measured 75.3 J/mol K.'],
 ['warn','At low temperatures, specific heats fall below these predictions, because some degrees of freedom "freeze out". Classical physics cannot explain this; quantum mechanics does.']
]},
{t:'Mean free path', b:[
 ['p','Molecules move fast (hundreds of m/s), yet a smell takes seconds to cross a room. That is because each molecule travels only a tiny distance before hitting another and changing direction. The average distance between collisions is the <b>mean free path</b>.'],
 ['der','Estimating the mean free path',[
   'Model each molecule as a sphere of diameter d. A moving molecule collides with any other whose centre comes within distance d, sweeping out a cylinder of cross-section πd².',
   'In time t it travels vt and sweeps a volume πd²vt, containing nπd²vt molecules. That is how many collisions it makes.',
   'Mean free path = distance per collision = vt/(nπd²vt) = 1/(nπd²).',
   'Allowing for the motion of the other molecules gives a factor √2: l = 1/(√2 nπd²).']],
 ['eq','l = 1/(√2 n π d²)'],
 ['ex','Estimate the mean free path of nitrogen molecules at STP (n ≈ 2.7 × 10²⁵ m⁻³, d ≈ 3 × 10⁻¹⁰ m).',['l = 1/(1.414 × 2.7 × 10²⁵ × 3.14 × 9 × 10⁻²⁰)'],'≈ 0.1 μm, roughly 300 times the molecular size'],
 ['p','The mean free path is larger at low pressure (fewer molecules per volume). This idea underlies diffusion, viscosity and heat conduction in gases.']
]}
],
recap:['PV = μRT = Nk<sub>B</sub>T; Dalton: total pressure = sum of partial pressures.','P = ⅓ρv̄², derived from momentum change at the walls.','Average KE per molecule = (3/2)k<sub>B</sub>T; v<sub>rms</sub> = √(3RT/M).','Equipartition: ½k<sub>B</sub>T per degree of freedom; C<sub>V</sub> = (f/2)R, γ = 1 + 2/f.','Mean free path l = 1/(√2 nπd²).'],
exam:['State the assumptions of kinetic theory and derive the expression for pressure.','Derive the relation between KE and temperature, and the rms speed.','State the law of equipartition and use it to find C<sub>V</sub>, C<sub>P</sub>, γ for mono-, di- and polyatomic gases.','Explain mean free path and its dependence on n and d.']
});

L('c11-13', {
intro:'A swing, a guitar string, the needle of a sewing machine and the atoms in a crystal all move back and forth about a fixed position. This chapter studies the simplest and most important kind of such motion, simple harmonic motion, and uses it for springs and pendulums.',
sections:[
{t:'Periodic and oscillatory motion', b:[
 ['p','<b>Periodic motion</b> repeats itself at regular time intervals. The Earth going round the Sun, the hands of a clock and a rotating fan are periodic. <b>Oscillatory (vibratory) motion</b> is periodic motion back and forth about a mean position, like a swinging pendulum or a vibrating string. Every oscillation is periodic, but not every periodic motion is an oscillation.'],
 ['p','Oscillation needs a <b>restoring force</b> that always tries to bring the body back to its equilibrium position, and the body\'s <b>inertia</b>, which carries it past that position.']
]},
{t:'Period, frequency and displacement', b:[
 ['list',['<b>Period</b> T: the time for one complete oscillation, in seconds.','<b>Frequency</b> ν = 1/T: oscillations per second, in hertz (Hz).','<b>Angular frequency</b> ω = 2πν = 2π/T, in rad/s.','<b>Displacement</b> x: how far the body is from its mean position at any time; it can be positive or negative. It could be a length, an angle, a voltage, or any quantity that oscillates.']],
 ['p','Any periodic function can be built from sine and cosine waves of different frequencies (Fourier). That is why understanding sinusoidal motion lets us understand all oscillations.']
]},
{t:'Simple harmonic motion', b:[
 ['p','A body is in <b>simple harmonic motion</b> (SHM) when its displacement from the mean position varies sinusoidally with time:'],
 ['eq','x(t) = A cos(ωt + φ)'],
 ['list',['<b>Amplitude</b> A: the maximum displacement. The motion goes between x = +A and x = −A.','<b>Phase</b> (ωt + φ): tells you the state of motion (position and direction) at time t.','<b>Phase constant</b> φ: the phase at t = 0, set by where and how the motion started.','The motion repeats when the phase increases by 2π, that is when t increases by T = 2π/ω.']],
 ['p','<b>SHM and circular motion:</b> if a particle moves round a circle of radius A at constant angular speed ω, the shadow of the particle on a diameter moves in SHM. This is the reference circle picture, and it is why ω appears in both.'],
 ['simple','SHM is what you see when you look edge-on at something going round in a circle.']
]},
{t:'Velocity and acceleration in SHM', b:[
 ['der','Differentiating the displacement',[
   'x(t) = A cos(ωt + φ).',
   'Velocity: v(t) = dx/dt = −ωA sin(ωt + φ). Its maximum value is ωA, at the mean position.',
   'Since sin² + cos² = 1: v = ±ω√(A² − x²). Speed is zero at the extremes (x = ±A).',
   'Acceleration: a(t) = dv/dt = −ω²A cos(ωt + φ) = −ω²x.',
   'Acceleration is proportional to displacement and always points towards the mean position. Its maximum is ω²A, at the extremes.']],
 ['eq','v = ±ω√(A² − x²), &nbsp; a = −ω²x'],
 ['tbl',['Position','Displacement','Speed','Acceleration'],[['Mean position','0','Maximum (ωA)','0'],['Extreme position','±A','0','Maximum (ω²A), towards centre']]],
 ['p','Velocity is a quarter cycle (π/2) ahead of displacement, and acceleration is half a cycle (π) out of phase with displacement.'],
 ['ex','A body oscillates as x = 5 cos(2πt + π/4) m. At t = 1.5 s, find its displacement, speed and acceleration.',['Phase = 3π + π/4. cos(3π + π/4) = −cos(π/4) = −0.707 ⇒ x = −3.54 m','v = −ωA sin(phase) = −2π × 5 × (−0.707) ≈ +22 m/s','a = −ω²x = −(4π²)(−3.54) ≈ +140 m/s²'],'x ≈ −3.54 m, v ≈ 22 m/s, a ≈ 140 m/s²']
]},
{t:'Force law for SHM', b:[
 ['p','From Newton\'s second law, F = ma = −mω²x. Writing k = mω²:'],
 ['eq','F = −kx, &nbsp; ω = √(k/m), &nbsp; T = 2π√(m/k)'],
 ['p','So SHM happens whenever the restoring force is directly proportional to displacement and opposite in direction. This is a "linear" restoring force. The constant k is the force constant. A force like −kx³ also restores, but gives oscillations that are not simple harmonic.'],
 ['warn','Not every oscillation is SHM. A ball bouncing on the floor is periodic, but its restoring force is not proportional to its displacement.']
]},
{t:'Energy in SHM', b:[
 ['der','Kinetic, potential and total energy',[
   'Kinetic energy: K = ½mv² = ½mω²A² sin²(ωt + φ) = ½k(A² − x²).',
   'Potential energy: for F = −kx, U = ½kx² = ½kA² cos²(ωt + φ).',
   'Total: E = K + U = ½kA²[sin² + cos²] = ½kA².',
   'Total energy is constant and proportional to the square of the amplitude.']],
 ['eq','E = ½kA² = ½mω²A²'],
 ['p','Energy keeps changing form: all potential at the extremes, all kinetic at the mean position. Both K and U oscillate at twice the frequency of the motion. The average KE over a cycle equals the average PE, each being ½E.'],
 ['ex','A 1 kg block on a spring (k = 50 N/m) is pulled 10 cm from equilibrium and released. Find its total energy and its speed 5 cm from equilibrium.',['E = ½ × 50 × 0.01 = 0.25 J','At x = 0.05 m: U = ½ × 50 × 0.0025 = 0.0625 J; K = 0.1875 J','v = √(2K/m) = √0.375'],'E = 0.25 J; v ≈ 0.61 m/s']
]},
{t:'The spring–mass system', b:[
 ['p','A block of mass m on a frictionless surface, attached to a spring of constant k, is the classic example of SHM. Pull it to x and release: the spring force −kx gives SHM with:'],
 ['eq','T = 2π√(m/k), &nbsp; ν = (1/2π)√(k/m)'],
 ['list',['The period does not depend on the amplitude (for an ideal spring).','A heavier block or a softer spring gives a longer period.','A vertical spring with a hanging mass has the same period; gravity only shifts the equilibrium position down by mg/k.','Springs in series: 1/k = 1/k₁ + 1/k₂ (softer). Springs in parallel: k = k₁ + k₂ (stiffer).']],
 ['ex','A 5 kg collar on a spring (k = 500 N/m) slides on a frictionless rod. It is pulled 10 cm and released. Find its period and maximum speed.',['ω = √(500/5) = 10 rad/s; T = 2π/10 ≈ 0.63 s','v<sub>max</sub> = ωA = 10 × 0.1'],'T ≈ 0.63 s, v<sub>max</sub> = 1 m/s']
]},
{t:'The simple pendulum', b:[
 ['der','Period of a simple pendulum',[
   'A bob of mass m hangs from a light string of length L. Displace it by a small angle θ.',
   'Gravity has a component mg sinθ along the arc, pulling it back. Its torque about the support is τ = −mgL sinθ.',
   'Rotational second law: τ = Iα with I = mL². So mL²α = −mgL sinθ.',
   'For small angles, sinθ ≈ θ (in radians): α = −(g/L)θ.',
   'This has the SHM form α = −ω²θ with ω² = g/L. So T = 2π√(L/g).']],
 ['eq','T = 2π√(L/g)'],
 ['list',['The period is independent of the mass of the bob and (for small angles, below about 15°) of the amplitude. Galileo noticed this by timing a swinging chandelier with his pulse.','A pendulum with T = 2 s (a "seconds pendulum") has L ≈ 1 m on Earth.','Measuring T and L is a simple, accurate way to find g.','A pendulum taken to the Moon (g/6) swings √6 times more slowly. In a freely falling lift it does not swing at all.']],
 ['ex','What length of simple pendulum ticks seconds (period 2 s)? (g = 9.8 m/s²)',['L = gT²/4π² = 9.8 × 4/39.48'],'≈ 0.99 m']
]},
{t:'Damped and forced oscillations', x:true, b:[
 ['p','Real oscillators slowly lose energy to friction and air resistance, so their amplitude dies away. These are <b>damped oscillations</b>. With a damping force −bv, the amplitude decays exponentially: A(t) = A e<sup>−bt/2m</sup>. Car shock absorbers are designed to damp oscillations quickly.'],
 ['p','If a periodic external force of angular frequency ω<sub>d</sub> keeps driving an oscillator, it settles into <b>forced oscillations</b> at the driving frequency. The amplitude is largest when ω<sub>d</sub> is close to the natural frequency ω of the system: this is <b>resonance</b>.'],
 ['list',['Pushing a child\'s swing at just the right moments makes it go higher and higher.','Soldiers break step when crossing a bridge so their marching cannot set it into resonance.','Earthquakes do the most damage to buildings whose natural frequency matches the shaking.','Radios use resonance to pick out one station\'s frequency.']]
]}
],
recap:['SHM: x = A cos(ωt + φ); ω = 2π/T.','v = ±ω√(A² − x²); a = −ω²x, always towards the mean position.','SHM requires F = −kx; then ω = √(k/m).','E = ½kA², constant; it swaps between KE and PE.','Spring: T = 2π√(m/k). Pendulum (small angles): T = 2π√(L/g).'],
exam:['Show that SHM is the projection of uniform circular motion.','Derive expressions for velocity, acceleration and energy in SHM.','Derive the period of a spring–mass system and a simple pendulum.','Find springs-in-series and parallel periods; problems on pendulums at different g.']
});

L('c11-14', {
intro:'A wave carries energy and information from place to place without carrying the medium along with it. This chapter describes mechanical waves on strings and in air, how their speed is set, what happens when waves meet, and how standing waves create the notes of musical instruments.',
sections:[
{t:'What a wave is', b:[
 ['p','Drop a stone into a pond and ripples spread out, yet a leaf floating on the water only bobs up and down. The water passes the disturbance along, but does not travel with it. A <b>wave</b> is a disturbance that moves through a medium (or through space) carrying energy, without transporting the medium itself.'],
 ['list',['<b>Mechanical waves</b> need a medium, governed by Newton\'s laws: waves on strings, sound, water waves, seismic waves.','<b>Electromagnetic waves</b> (light, radio, X-rays) need no medium and travel at the speed of light in vacuum.','<b>Matter waves</b> are associated with moving particles such as electrons (Class 12).']]
]},
{t:'Transverse and longitudinal waves', b:[
 ['p','In a <b>transverse wave</b>, particles of the medium vibrate perpendicular to the direction the wave travels, forming crests and troughs. Waves on a string are transverse. They can travel only through media that resist change of shape (solids, or along strings under tension), so they cannot travel through the bulk of liquids or gases.'],
 ['p','In a <b>longitudinal wave</b>, particles vibrate along the direction of travel, forming <b>compressions</b> (crowded, high pressure) and <b>rarefactions</b> (spread out, low pressure). Sound in air is longitudinal. Longitudinal waves can travel through solids, liquids and gases.'],
 ['p','Some waves combine both: in water waves, surface particles move in circles or ellipses.']
]},
{t:'Displacement relation for a progressive wave', b:[
 ['p','A sinusoidal wave travelling in the +x direction can be written as:'],
 ['eq','y(x, t) = a sin(kx − ωt + φ)'],
 ['list',['<b>Amplitude</b> a: maximum displacement of a particle from equilibrium.','<b>Wavelength</b> λ: distance between two consecutive points in the same phase (crest to crest). <b>Angular wave number</b> k = 2π/λ, in rad/m.','<b>Period</b> T: time for one complete vibration of a particle. <b>Angular frequency</b> ω = 2π/T = 2πν.','The phase (kx − ωt + φ) stays constant for a point moving with the wave; if x increases with time, the wave moves in +x. A wave moving in −x is written y = a sin(kx + ωt + φ).']],
 ['der','Speed of a travelling wave',[
   'Follow a point of fixed phase, such as a crest: kx − ωt = constant.',
   'Differentiate with respect to time: k(dx/dt) − ω = 0.',
   'Wave speed v = dx/dt = ω/k = (2πν)/(2π/λ) = νλ = λ/T.']],
 ['eq','v = ω/k = νλ = λ/T'],
 ['ex','A wave is y(x, t) = 0.005 sin(80x − 3t) in SI units. Find its amplitude, wavelength, period, frequency and speed.',['a = 0.005 m = 5 mm','k = 80 ⇒ λ = 2π/80 ≈ 7.85 cm','ω = 3 ⇒ T = 2π/3 ≈ 2.09 s, ν ≈ 0.48 Hz','v = ω/k = 3/80'],'a = 5 mm, λ ≈ 7.85 cm, T ≈ 2.09 s, ν ≈ 0.48 Hz, v ≈ 0.0375 m/s']
]},
{t:'Speed of a transverse wave on a string', b:[
 ['p','The speed of a wave depends on the properties of the medium, not on the source. On a stretched string, two properties matter: the tension T (the restoring force) and the linear mass density μ = mass per unit length (the inertia).'],
 ['der','Using dimensional analysis',[
   'Assume v = C T<sup>a</sup> μ<sup>b</sup>. Dimensions: [T] = [MLT⁻²], [μ] = [ML⁻¹].',
   '[LT⁻¹] = [MLT⁻²]<sup>a</sup>[ML⁻¹]<sup>b</sup> ⇒ M: a + b = 0; L: a − b = 1; T: −2a = −1.',
   'a = ½, b = −½. So v = C√(T/μ). A detailed calculation gives C = 1.']],
 ['eq','v = √(T/μ)'],
 ['ex','A 0.72 m long steel wire of mass 5.0 g is under a tension of 60 N. Find the speed of transverse waves on it.',['μ = 5.0 × 10⁻³/0.72 = 6.9 × 10⁻³ kg/m','v = √(60/6.9 × 10⁻³)'],'≈ 93 m/s']
]},
{t:'Speed of sound: Newton\'s formula and Laplace\'s correction', b:[
 ['p','For longitudinal waves, the restoring property is how hard it is to compress the medium (its bulk modulus B), and the inertia is its density ρ:'],
 ['eq','v = √(B/ρ) in a fluid, &nbsp; v = √(Y/ρ) in a solid rod'],
 ['p','<b>Newton</b> assumed that air temperature stays constant as sound passes (isothermal compression), so B = P and v = √(P/ρ). For air at STP this gives about 280 m/s, but the measured value is about 331 m/s, roughly 15% higher.'],
 ['p','<b>Laplace</b> explained the difference: compressions and rarefactions happen so fast that there is no time for heat to flow. The process is adiabatic, so B = γP. Then:'],
 ['eq','v = √(γP/ρ) &nbsp;(γ = 1.4 for air gives ≈ 331 m/s)'],
 ['list',['Pressure has no effect on the speed of sound (at constant temperature, P/ρ stays the same).','Speed rises with temperature: v ∝ √T. It increases by about 0.6 m/s for each 1 °C rise.','Sound travels faster in humid air (moist air is less dense) and much faster in liquids and solids: about 1480 m/s in water and 5000–6000 m/s in steel.']]
]},
{t:'The principle of superposition', b:[
 ['p','When two or more waves overlap, the resulting displacement at any point is the algebraic sum of the displacements due to each wave separately. After passing through each other, the waves continue unchanged.'],
 ['eq','y = y₁ + y₂ + …'],
 ['der','Two waves of the same frequency travelling the same way',[
   'Let y₁ = a sin(kx − ωt) and y₂ = a sin(kx − ωt + φ).',
   'Using sinA + sinB = 2 sin[(A + B)/2] cos[(A − B)/2]: y = [2a cos(φ/2)] sin(kx − ωt + φ/2).',
   'The result is a wave of the same frequency with amplitude A = 2a cos(φ/2).',
   'φ = 0 (in phase): A = 2a, constructive interference. φ = π (opposite phase): A = 0, destructive interference.']]
]},
{t:'Reflection of waves', b:[
 ['list',['At a <b>rigid boundary</b> (a string tied to a wall), the reflected wave is inverted: it undergoes a phase change of π (180°). The fixed end is always a node.','At an <b>open (free) boundary</b> (a string end free to slide on a ring), the wave reflects without inversion. The free end is an antinode.','At the boundary between two media, part of the wave is reflected and part transmitted, which is how echoes and sonar work.']]
]},
{t:'Standing waves and normal modes', b:[
 ['der','Superposing two identical waves moving in opposite directions',[
   'y₁ = a sin(kx − ωt) (moving right) and y₂ = a sin(kx + ωt) (moving left, after reflection).',
   'y = y₁ + y₂ = 2a sin(kx) cos(ωt).',
   'This does not travel. Each point simply oscillates with amplitude 2a sin(kx), which depends on where it is.',
   '<b>Nodes</b> (zero amplitude) occur where sin(kx) = 0: x = 0, λ/2, λ, 3λ/2, …. <b>Antinodes</b> (maximum amplitude) are halfway between, at x = λ/4, 3λ/4, ….',
   'Adjacent nodes are λ/2 apart.']],
 ['eq','y = 2a sin(kx) cos(ωt)'],
 ['p','In a standing wave, energy is not carried along; it stays trapped between the nodes. Only certain frequencies, called <b>normal modes</b>, can form standing waves in a system with fixed boundaries.']
]},
{t:'Strings and air columns', b:[
 ['der','String fixed at both ends (length L)',[
   'Both ends must be nodes, so L must hold a whole number of half wavelengths: L = nλ/2.',
   'λ<sub>n</sub> = 2L/n and ν<sub>n</sub> = nv/2L, with n = 1, 2, 3, ….',
   'ν₁ = v/2L is the <b>fundamental</b> (first harmonic). ν₂ = 2ν₁ is the second harmonic (first overtone), and so on. All harmonics are present.']],
 ['der','Pipe closed at one end (length L)',[
   'The closed end is a node and the open end an antinode, so L = (2n − 1)λ/4.',
   'ν = (2n − 1)v/4L: v/4L, 3v/4L, 5v/4L, …',
   'Only odd harmonics are present.']],
 ['der','Pipe open at both ends (length L)',[
   'Both ends are antinodes, so L = nλ/2, giving ν = nv/2L. All harmonics are present.',
   'An open pipe\'s fundamental (v/2L) is twice that of a closed pipe of the same length.']],
 ['p','The mix of harmonics an instrument produces gives it its characteristic <b>quality</b> (timbre). That is why a flute and a violin playing the same note sound different.'],
 ['ex','A pipe 30 cm long is open at both ends. Which harmonic of the pipe resonates with a 1.1 kHz source? Speed of sound = 330 m/s.',['ν₁ = v/2L = 330/0.6 = 550 Hz','1100/550 = 2'],'The second harmonic. (Closed at one end, ν₁ = 275 Hz and 1100 Hz would be the 4th harmonic, which is absent, so no resonance.)']
]},
{t:'Beats', b:[
 ['p','When two sounds of slightly different frequencies ν₁ and ν₂ are heard together, the loudness rises and falls regularly. These periodic variations are <b>beats</b>.'],
 ['der','Beat frequency',[
   'At one place: s₁ = a cos(ω₁t), s₂ = a cos(ω₂t).',
   's = 2a cos(ω<sub>b</sub>t) cos(ω<sub>a</sub>t), with ω<sub>b</sub> = (ω₁ − ω₂)/2 and ω<sub>a</sub> = (ω₁ + ω₂)/2.',
   'You hear the average frequency, with an amplitude 2a cos(ω<sub>b</sub>t) that swells and fades.',
   'Loudness peaks whenever |cos(ω<sub>b</sub>t)| = 1, which happens at a rate ν<sub>beat</sub> = ν₁ − ν₂.']],
 ['eq','ν<sub>beat</sub> = |ν₁ − ν₂|'],
 ['p','Musicians tune instruments by listening for beats against a reference: as the frequencies get closer, the beats slow down and vanish when they match.'],
 ['ex','A tuning fork of unknown frequency gives 4 beats/s with a 256 Hz fork. When the unknown fork is loaded with a little wax, the beats drop to 2/s. What is its original frequency?',['Possible: 260 Hz or 252 Hz','Wax lowers frequency. If it were 252 Hz, loading would increase the beats; if 260 Hz, loading brings it closer to 256 Hz and beats decrease.'],'260 Hz']
]},
{t:'The Doppler effect', x:true, b:[
 ['p','The pitch of an ambulance siren rises as it comes towards you and falls as it moves away. When a source of sound or an observer moves, the observed frequency changes. This is the <b>Doppler effect</b>.'],
 ['eq','ν = ν₀ (v + v<sub>o</sub>)/(v − v<sub>s</sub>)'],
 ['p','Here v is the speed of sound, v<sub>o</sub> is the observer\'s speed towards the source, and v<sub>s</sub> is the source\'s speed towards the observer. Change the sign of a speed when the motion is away. Doppler shifts are used in police radar guns, ultrasound scans of blood flow, and to measure the speeds of stars and galaxies (using light).']
]}
],
recap:['Waves carry energy, not matter: transverse (string) or longitudinal (sound).','y = a sin(kx − ωt); v = ω/k = νλ.','String: v = √(T/μ). Sound: v = √(γP/ρ) (Laplace correction).','Superposition: displacements add. Standing waves: y = 2a sin kx cos ωt, nodes λ/2 apart.','String fixed at both ends and open pipe: all harmonics nv/2L. Closed pipe: odd harmonics (2n − 1)v/4L.','Beat frequency = |ν₁ − ν₂|.'],
exam:['Derive v = ω/k and the speed of waves on a string (dimensionally).','Explain Newton\'s formula for the speed of sound and Laplace\'s correction; effects of pressure, temperature and humidity.','Derive the standing wave equation and positions of nodes and antinodes.','Find the harmonics of strings, open pipes and closed pipes; solve beat problems.']
});
})();
