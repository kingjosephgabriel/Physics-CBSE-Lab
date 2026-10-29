/* Full lessons — Class 12, Chapters 6–10. Original explanations written for NCERT Physics Lab. */
(function(){
const L = (id, o) => { (window.LESSONS = window.LESSONS || {})[id] = o; };

L('c12-6', {
intro:'Oersted showed that currents make magnetic fields. Faraday asked the reverse question: can magnetism make a current? It can, but only when the magnetism is changing. Electromagnetic induction powers generators, transformers, induction cooktops and wireless chargers.',
sections:[
{t:'The experiments of Faraday and Henry', b:[
 ['list',['<b>Magnet and coil:</b> push a bar magnet into a coil connected to a galvanometer, and the needle deflects. Hold the magnet still, and the needle returns to zero. Pull it out, and the needle deflects the other way. Moving the coil instead of the magnet has the same effect. A faster motion gives a bigger deflection.','<b>Two coils:</b> place a coil near another coil carrying a steady current: nothing happens. Move one coil relative to the other, and a current is induced.','<b>Switching a current:</b> with two coils at rest, switching the current in one on or off momentarily induces a current in the other. An iron rod through both makes the effect much stronger.']],
 ['p','The common feature: a current is induced in a circuit whenever the magnetic field through it <b>changes</b>. Relative motion or a change in current are just two ways of changing it.'],
 ['simple','A steady magnetic field induces nothing. A changing one induces a voltage.']
]},
{t:'Magnetic flux', b:[
 ['p','To make "how much field passes through a circuit" precise, we use <b>magnetic flux</b>. For a flat area A in a uniform field B, with the area\'s normal at angle θ to B:'],
 ['eq','Φ<sub>B</sub> = <b>B</b>·<b>A</b> = BA cosθ &nbsp;(1 weber, Wb = 1 T m²)'],
 ['p','For a non-uniform field or curved surface, Φ<sub>B</sub> = ∫<b>B</b>·d<b>A</b>. Flux can be changed by changing B, the area A, or the angle θ (for example by rotating the coil).']
]},
{t:'Faraday\'s law of induction', b:[
 ['p','<b>Faraday\'s law:</b> the magnitude of the emf induced in a circuit equals the rate of change of magnetic flux through it. For a coil of N turns, each turn contributes:'],
 ['eq','ε = −N dΦ<sub>B</sub>/dt'],
 ['p','The minus sign gives the direction of the emf (Lenz\'s law, next section). The induced emf exists even if the circuit is open; a closed circuit lets it drive a current I = ε/R.'],
 ['ex','A square loop of side 10 cm and resistance 0.5 Ω sits in a field that drops uniformly from 0.1 T to zero in 0.7 s, perpendicular to the loop. Find the induced emf and current.',['ΔΦ = BA = 0.1 × 0.01 = 10⁻³ Wb','ε = ΔΦ/Δt = 10⁻³/0.7 ≈ 1.43 mV','I = ε/R'],'ε ≈ 1.43 mV; I ≈ 2.9 mA']
]},
{t:'Lenz\'s law and conservation of energy', b:[
 ['p','<b>Lenz\'s law:</b> the induced current flows in a direction that opposes the change in magnetic flux that produced it.'],
 ['list',['Push the north pole of a magnet towards a coil: the flux into the coil increases. The induced current makes the near face of the coil a north pole, repelling the magnet.','Pull the north pole away: the flux decreases. The induced current makes the near face a south pole, attracting the magnet back.']],
 ['p','Lenz\'s law is a consequence of <b>conservation of energy</b>. If the induced current helped the change instead of opposing it, pushing the magnet a little would accelerate it further, generating more current and more energy from nothing. Because the induced current opposes the motion, you must do work to move the magnet, and that work becomes the electrical energy (and heat) in the circuit.'],
 ['simple','Nature resists any change in magnetic flux. The effort you spend overcoming that resistance is where the electrical energy comes from.']
]},
{t:'Motional emf', b:[
 ['der','emf across a rod moving through a field',[
   'A straight rod of length l slides at speed v along two rails, perpendicular to a uniform field B. The rails and rod form a loop.',
   'The area of the loop changes at rate lv, so dΦ/dt = Blv. Therefore ε = Blv.',
   'Microscopic view: each free charge q in the rod moves with velocity v, so it feels a Lorentz force qvB along the rod. This pushes charges to one end, creating the emf.',
   'Work done by this force per unit charge over length l is vBl, which equals ε.']],
 ['eq','ε = Blv'],
 ['der','Energy check',[
   'If the circuit has resistance R, the current is I = Blv/R.',
   'The current-carrying rod in the field feels a force IlB = B²l²v/R, opposing its motion (Lenz).',
   'To keep the rod moving at constant speed, an external agent must supply power P = Fv = B²l²v²/R.',
   'The electrical power dissipated is I²R = B²l²v²/R. The two are equal: mechanical work becomes electrical energy, then heat.']],
 ['ex','A 1 m metal rod rotates at 400 rad/s about one end, perpendicular to a uniform 0.5 T field. Find the emf between its ends.',['Each small piece at distance r moves at v = ωr. Average speed of the rod = ωl/2.','ε = Bl(ωl/2) = ½Bωl² = ½ × 0.5 × 400 × 1'],'100 V']
]},
{t:'Eddy currents', x:true, b:[
 ['p','When a solid piece of metal moves through a changing magnetic field, or the field through it changes, circulating currents are induced throughout its bulk, like whirlpools. These are <b>eddy currents</b>. By Lenz\'s law they oppose the change, causing damping and heating.'],
 ['list',['A metal plate swinging between magnet poles stops quickly; cutting slots in it reduces the eddy currents and it swings freely.','Transformer and motor cores are made of thin insulated sheets (laminations) to reduce energy lost to eddy currents.','<b>Uses:</b> magnetic braking in trains, damping of galvanometer needles, electric power meters, and induction furnaces that melt metal using strong eddy currents.']]
]},
{t:'Self-inductance', b:[
 ['p','A changing current in a coil changes the flux through the coil itself, inducing an emf in the coil. This is <b>self-induction</b>. The flux linkage is proportional to the current:'],
 ['eq','NΦ<sub>B</sub> = LI, &nbsp; ε = −L dI/dt &nbsp;(1 henry, H = 1 Wb/A = 1 V s/A)'],
 ['p','L is the <b>self-inductance</b>. The self-induced emf opposes any change in current, so it is often called the <b>back emf</b>. An inductor plays the role in circuits that mass plays in mechanics: it resists changes in current the way mass resists changes in velocity.'],
 ['der','Self-inductance of a long solenoid',[
   'A solenoid of length l, cross-section A, with n turns per unit length (total N = nl) carries I. Inside, B = μ₀nI.',
   'Flux linkage NΦ = (nl)(μ₀nI)A = μ₀n²AlI.',
   'L = NΦ/I = μ₀n²Al. With a core of relative permeability μ<sub>r</sub>: L = μ<sub>r</sub>μ₀n²Al.']],
 ['der','Energy stored in an inductor',[
   'To build up current against the back emf, work must be done: dW = |ε| I dt = L I dI.',
   'Integrating from 0 to I: W = ½LI².',
   'This energy is stored in the magnetic field. For a solenoid it can be written as u = B²/(2μ₀) per unit volume.']],
 ['eq','L = μ₀n²Al, &nbsp; U = ½LI²']
]},
{t:'Mutual inductance', b:[
 ['p','When the current in one coil changes, the flux it produces through a nearby coil changes, inducing an emf there. This is <b>mutual induction</b>.'],
 ['eq','N₂Φ₂ = MI₁, &nbsp; ε₂ = −M dI₁/dt'],
 ['der','Mutual inductance of two coaxial solenoids',[
   'An inner solenoid S₁ (radius r₁, n₁ turns per unit length) sits inside an outer solenoid S₂ (n₂ turns per unit length), both of length l.',
   'Current I₂ in S₂ makes a field B₂ = μ₀n₂I₂ throughout S₁.',
   'Flux linkage with S₁: N₁Φ₁ = (n₁l)(πr₁²)(μ₀n₂I₂). So M₁₂ = μ₀n₁n₂πr₁²l.',
   'Doing it the other way round gives the same value: M₁₂ = M₂₁ = M.']],
 ['p','M depends on the shapes, the number of turns, the separation and orientation of the coils, and the material between them. Mutual induction is the principle of the transformer and of wireless charging.']
]},
{t:'The AC generator', b:[
 ['der','emf of a coil rotating in a magnetic field',[
   'A coil of N turns and area A rotates at constant angular speed ω in a uniform field B.',
   'At time t, the angle between the coil\'s normal and B is θ = ωt, so Φ = BA cos ωt.',
   'ε = −N dΦ/dt = NBAω sin ωt.',
   'The emf varies sinusoidally between +NBAω and −NBAω. Its peak value is ε₀ = NBAω.']],
 ['eq','ε = ε₀ sin ωt, &nbsp; ε₀ = NBAω = 2πνNBA'],
 ['p','Slip rings and carbon brushes take the alternating current out of the rotating coil. In India, mains AC is 50 Hz. Power stations turn the coil using steam (coal, nuclear), falling water (hydro) or wind. In large generators, usually the magnets rotate and the coils are fixed.'],
 ['ex','A 100-turn coil of area 0.1 m² rotates at 50 revolutions per second in a 0.01 T field. Find the peak emf.',['ω = 2π × 50 = 314 rad/s','ε₀ = 100 × 0.01 × 0.1 × 314'],'≈ 31.4 V']
]}
],
recap:['Φ = BA cosθ; emf is induced only when flux changes.','Faraday: ε = −N dΦ/dt. Lenz: induced current opposes the change (energy conservation).','Motional emf ε = Blv; rotating rod ε = ½Bωl².','Self-inductance ε = −L dI/dt, L = μ₀n²Al, energy ½LI².','Mutual inductance M = μ₀n₁n₂πr₁²l.','AC generator: ε = NBAω sin ωt.'],
exam:['Describe Faraday\'s experiments; state Faraday\'s and Lenz\'s laws.','Show that Lenz\'s law follows from energy conservation.','Derive motional emf and the force/power needed to move the rod.','Derive self-inductance of a solenoid, mutual inductance of coaxial solenoids, and energy in an inductor.','Derive the emf of an AC generator.']
});

L('c12-7', {
intro:'Almost all electricity in homes and industries is alternating current, which reverses direction many times a second. This chapter explains how resistors, inductors and capacitors behave with AC, introduces phasors and impedance, and covers resonance, power factor and transformers.',
sections:[
{t:'Why alternating current', b:[
 ['p','An <b>alternating voltage</b> varies sinusoidally with time: v = v<sub>m</sub> sin ωt. It drives an alternating current that changes direction regularly. AC is preferred over DC because its voltage can be changed easily and efficiently with transformers, which makes long-distance transmission practical.'],
 ['p','The <b>root mean square</b> (rms) value of an alternating quantity is the steady DC value that would produce the same heating in a resistor. For a sine wave:'],
 ['eq','I<sub>rms</sub> = I<sub>m</sub>/√2 ≈ 0.707 I<sub>m</sub>, &nbsp; V<sub>rms</sub> = V<sub>m</sub>/√2'],
 ['der','Where the √2 comes from',[
   'Instantaneous power in a resistor: p = i²R = I<sub>m</sub>²R sin²ωt.',
   'The average of sin²ωt over a cycle is ½. So average power = ½I<sub>m</sub>²R.',
   'Setting this equal to I<sub>rms</sub>²R gives I<sub>rms</sub> = I<sub>m</sub>/√2.']],
 ['p','Indian mains are 230 V rms, so the peak voltage is about 325 V. AC meters read rms values. The average value of AC over a full cycle is zero.']
]},
{t:'AC through a resistor', b:[
 ['p','For v = v<sub>m</sub> sin ωt across R: i = (v<sub>m</sub>/R) sin ωt. Current and voltage rise and fall together: they are <b>in phase</b>. Ohm\'s law holds at every instant, and the average power is I<sub>rms</sub>²R = V<sub>rms</sub>I<sub>rms</sub>.']
]},
{t:'Phasors', b:[
 ['p','A <b>phasor</b> is a rotating arrow used to represent a sinusoidal quantity. It has length equal to the peak value and rotates anticlockwise at angular speed ω. Its projection on the vertical axis gives the instantaneous value.'],
 ['p','Phasors make AC easy: the phase difference between voltage and current is simply the angle between their arrows, and voltages in series add as vectors. For a resistor, the V and I phasors point the same way.'],
 ['simple','Think of each AC quantity as the shadow of a spinning arrow. The angle between two arrows is their phase difference.']
]},
{t:'AC through an inductor', b:[
 ['der','Current through a pure inductor',[
   'Applied voltage v = v<sub>m</sub> sin ωt equals the back emf: v = L di/dt.',
   'di/dt = (v<sub>m</sub>/L) sin ωt. Integrating: i = −(v<sub>m</sub>/ωL) cos ωt = (v<sub>m</sub>/ωL) sin(ωt − π/2).',
   'The current <b>lags</b> the voltage by π/2 (a quarter cycle).',
   'Peak current i<sub>m</sub> = v<sub>m</sub>/X<sub>L</sub>, where X<sub>L</sub> = ωL is the <b>inductive reactance</b>.']],
 ['eq','X<sub>L</sub> = ωL = 2πνL &nbsp;(ohms)'],
 ['list',['X<sub>L</sub> increases with frequency: an inductor blocks high frequencies and passes DC (for which X<sub>L</sub> = 0).','The average power taken by a pure inductor is zero. Over a cycle, energy is stored in its magnetic field and then returned to the source.']],
 ['ex','A 44 mH inductor is connected to 220 V, 50 Hz mains. Find the rms current.',['X<sub>L</sub> = 2π × 50 × 0.044 ≈ 13.8 Ω','I<sub>rms</sub> = 220/13.8'],'≈ 15.9 A']
]},
{t:'AC through a capacitor', b:[
 ['der','Current through a capacitor',[
   'For v = v<sub>m</sub> sin ωt across C, the charge is q = Cv<sub>m</sub> sin ωt.',
   'i = dq/dt = ωCv<sub>m</sub> cos ωt = (v<sub>m</sub>/(1/ωC)) sin(ωt + π/2).',
   'The current <b>leads</b> the voltage by π/2.',
   'Peak current i<sub>m</sub> = v<sub>m</sub>/X<sub>C</sub>, where X<sub>C</sub> = 1/ωC is the <b>capacitive reactance</b>.']],
 ['eq','X<sub>C</sub> = 1/ωC = 1/(2πνC)'],
 ['list',['X<sub>C</sub> decreases with frequency: a capacitor blocks DC (infinite reactance) but passes high-frequency AC.','A pure capacitor also takes zero average power.','Memory aid: in an inductor (L) voltage leads current ("ELI": E before I); in a capacitor (C) current leads voltage ("ICE").']],
 ['ex','A 15 μF capacitor is connected to 220 V, 50 Hz. Find the rms current. What happens if the frequency is doubled?',['X<sub>C</sub> = 1/(2π × 50 × 15 × 10⁻⁶) ≈ 212 Ω','I<sub>rms</sub> = 220/212 ≈ 1.04 A','At 100 Hz, X<sub>C</sub> halves, so the current doubles.'],'≈ 1.04 A; doubles to ≈ 2.08 A']
]},
{t:'Series LCR circuit', b:[
 ['der','Impedance and phase angle using phasors',[
   'In series, the same current i = i<sub>m</sub> sin(ωt + φ) flows through R, L and C. Draw the current phasor as reference.',
   'V<sub>R</sub> = i<sub>m</sub>R is in phase with I. V<sub>L</sub> = i<sub>m</sub>X<sub>L</sub> leads I by 90°. V<sub>C</sub> = i<sub>m</sub>X<sub>C</sub> lags I by 90°.',
   'V<sub>L</sub> and V<sub>C</sub> point in opposite directions, so they combine to (V<sub>L</sub> − V<sub>C</sub>).',
   'Total: v<sub>m</sub>² = V<sub>R</sub>² + (V<sub>L</sub> − V<sub>C</sub>)² = i<sub>m</sub>²[R² + (X<sub>L</sub> − X<sub>C</sub>)²].',
   'So i<sub>m</sub> = v<sub>m</sub>/Z with impedance Z = √[R² + (X<sub>L</sub> − X<sub>C</sub>)²].',
   'The voltage leads the current by φ, where tanφ = (X<sub>L</sub> − X<sub>C</sub>)/R.']],
 ['eq','Z = √[R² + (X<sub>L</sub> − X<sub>C</sub>)²], &nbsp; tanφ = (X<sub>L</sub> − X<sub>C</sub>)/R'],
 ['list',['X<sub>L</sub> > X<sub>C</sub>: the circuit is inductive; current lags voltage.','X<sub>C</sub> > X<sub>L</sub>: the circuit is capacitive; current leads voltage.','X<sub>L</sub> = X<sub>C</sub>: the circuit is purely resistive; resonance.']],
 ['ex','A 200 Ω resistor and a 15 μF capacitor are in series across 220 V, 50 Hz. Find the current and the phase angle.',['X<sub>C</sub> = 212.3 Ω; Z = √(200² + 212.3²) ≈ 291.7 Ω','I<sub>rms</sub> = 220/291.7 ≈ 0.755 A','tanφ = −212.3/200 ⇒ φ ≈ −46.7° (current leads)'],'0.755 A; current leads voltage by about 47°']
]},
{t:'Resonance', b:[
 ['der','Resonant frequency',[
   'The current i<sub>m</sub> = v<sub>m</sub>/√[R² + (ωL − 1/ωC)²] is largest when the reactances cancel: ωL = 1/ωC.',
   'ω₀ = 1/√(LC), so ν₀ = 1/(2π√(LC)).',
   'At resonance Z = R, the current is v<sub>m</sub>/R, and voltage and current are in phase.']],
 ['eq','ω₀ = 1/√(LC), &nbsp; ν₀ = 1/(2π√(LC))'],
 ['p','The <b>sharpness</b> of the resonance is described by the quality factor Q = ω₀L/R = 1/(ω₀CR). A small R gives a tall, narrow peak. At resonance, the voltages across L and C separately can be Q times the applied voltage, even though they cancel each other.'],
 ['p','<b>Tuning a radio:</b> the antenna picks up signals from many stations. Turning the dial changes C in an LCR circuit until its resonant frequency matches the station you want; only that signal produces a large current.'],
 ['warn','Resonance needs both L and C. A circuit with only R and L, or only R and C, cannot resonate.']
]},
{t:'Power in AC circuits and power factor', b:[
 ['der','Average power in an LCR circuit',[
   'Instantaneous power p = vi = v<sub>m</sub>i<sub>m</sub> sin ωt sin(ωt + φ).',
   'Using 2 sinA sinB = cos(A − B) − cos(A + B): p = ½v<sub>m</sub>i<sub>m</sub>[cosφ − cos(2ωt + φ)].',
   'The second term averages to zero over a cycle.',
   'P = ½v<sub>m</sub>i<sub>m</sub> cosφ = V<sub>rms</sub>I<sub>rms</sub> cosφ.']],
 ['eq','P = V<sub>rms</sub>I<sub>rms</sub> cosφ, &nbsp; power factor cosφ = R/Z'],
 ['list',['Purely resistive (φ = 0): cosφ = 1, maximum power.','Purely inductive or capacitive (φ = ±90°): cosφ = 0, no average power. The current flowing is called <b>wattless current</b>.','At resonance cosφ = 1. Power is used only in the resistance.','Industries with large motors (inductive loads) add capacitors to bring the power factor close to 1, because a low power factor means a large current (and large line losses) for the same useful power.']],
 ['ex','A circuit draws 2 A rms from 230 V rms mains with a power factor of 0.8. Find the average power.',['P = 230 × 2 × 0.8'],'368 W']
]},
{t:'LC oscillations', x:true, b:[
 ['p','Connect a charged capacitor across an inductor. The capacitor discharges through the inductor, building a current and storing energy in its magnetic field. When the capacitor is empty, the inductor keeps the current going, charging the capacitor the other way. Energy sloshes back and forth between electric and magnetic forms.'],
 ['eq','q = q<sub>m</sub> cos(ω₀t), &nbsp; ω₀ = 1/√(LC)'],
 ['p','This is exactly like a mass on a spring: L plays the role of mass, 1/C the spring constant, charge the displacement and current the velocity. Real circuits have resistance, so the oscillations die out unless energy is supplied, as in radio transmitters.']
]},
{t:'Transformers', b:[
 ['p','A <b>transformer</b> changes an AC voltage to a higher or lower value. Two coils, the primary (N<sub>p</sub> turns) and secondary (N<sub>s</sub> turns), are wound on the same laminated soft-iron core, so almost all the flux of one passes through the other (mutual induction).'],
 ['der','Voltage and current ratios (ideal transformer)',[
   'The changing flux through each turn is the same in both coils: dΦ/dt.',
   'Primary: v<sub>p</sub> = N<sub>p</sub> dΦ/dt (it balances the applied voltage). Secondary: ε<sub>s</sub> = N<sub>s</sub> dΦ/dt.',
   'Dividing: v<sub>s</sub>/v<sub>p</sub> = N<sub>s</sub>/N<sub>p</sub>.',
   'With no losses, power in = power out: i<sub>p</sub>v<sub>p</sub> = i<sub>s</sub>v<sub>s</sub>, so i<sub>s</sub>/i<sub>p</sub> = N<sub>p</sub>/N<sub>s</sub>.']],
 ['eq','V<sub>s</sub>/V<sub>p</sub> = N<sub>s</sub>/N<sub>p</sub> = I<sub>p</sub>/I<sub>s</sub>'],
 ['list',['<b>Step-up</b> (N<sub>s</sub> > N<sub>p</sub>): raises voltage, lowers current. Used at power stations.','<b>Step-down</b> (N<sub>s</sub> < N<sub>p</sub>): lowers voltage, raises current. Used near homes and in chargers.','<b>Energy losses:</b> flux leakage (not all flux links both coils), resistance of windings (I²R heating, reduced by thick wires), eddy currents in the core (reduced by laminations), and hysteresis (reduced by soft iron). Large transformers are about 95–99% efficient.']],
 ['p','<b>Power transmission:</b> sending power P at voltage V needs current I = P/V, and the line wastes I²R = P²R/V². Raising the voltage 100 times cuts the loss 10,000 times. So electricity is stepped up to hundreds of kV for transmission and stepped down to 230 V for homes.'],
 ['ex','A step-down transformer converts 2200 V to 220 V. The primary has 3000 turns. How many turns are on the secondary? If the secondary supplies 10 A, what is the primary current (ideal)?',['N<sub>s</sub> = N<sub>p</sub> × V<sub>s</sub>/V<sub>p</sub> = 3000 × 220/2200 = 300','I<sub>p</sub> = I<sub>s</sub> × N<sub>s</sub>/N<sub>p</sub> = 10 × 300/3000'],'300 turns; 1 A']
]}
],
recap:['V<sub>rms</sub> = V<sub>m</sub>/√2; meters read rms values.','R: in phase. L: current lags by 90°, X<sub>L</sub> = ωL. C: current leads by 90°, X<sub>C</sub> = 1/ωC.','Z = √[R² + (X<sub>L</sub> − X<sub>C</sub>)²], tanφ = (X<sub>L</sub> − X<sub>C</sub>)/R.','Resonance at ω₀ = 1/√LC: Z = R, current maximum.','P = V<sub>rms</sub>I<sub>rms</sub>cosφ; pure L or C uses no average power.','Transformer: V<sub>s</sub>/V<sub>p</sub> = N<sub>s</sub>/N<sub>p</sub> = I<sub>p</sub>/I<sub>s</sub>.'],
exam:['Derive rms value; show the phase relations for R, L and C with phasor diagrams.','Derive impedance and phase angle for a series LCR circuit; condition and frequency of resonance.','Derive average power and explain power factor and wattless current.','Explain the principle, working and energy losses of a transformer; why AC is transmitted at high voltage.']
});

L('c12-8', {
intro:'Maxwell noticed a gap in the laws of electricity and magnetism. Filling it revealed that changing electric and magnetic fields can sustain each other and travel through empty space as a wave, at exactly the speed of light. Light, it turned out, is an electromagnetic wave.',
sections:[
{t:'Displacement current', b:[
 ['p','Ampère\'s law says ∮B·dl = μ₀I. Maxwell applied it to a capacitor being charged. Take a loop around the wire leading to the capacitor. For a flat surface bounded by the loop and pierced by the wire, the current through it is I. But for a balloon-shaped surface with the same loop as its rim, passing between the plates, no current crosses it. Same loop, two different answers: the law must be incomplete.'],
 ['der','Maxwell\'s fix',[
   'Between the plates, there is no current, but the electric field is changing as charge builds up.',
   'The field between the plates is E = Q/(ε₀A), so the electric flux is Φ<sub>E</sub> = EA = Q/ε₀.',
   'Its rate of change: dΦ<sub>E</sub>/dt = (1/ε₀)dQ/dt = I/ε₀. So ε₀dΦ<sub>E</sub>/dt = I.',
   'Maxwell called ε₀dΦ<sub>E</sub>/dt the <b>displacement current</b> i<sub>d</sub>. It acts as a source of magnetic field just like a real (conduction) current.',
   'The corrected law: ∮B·dl = μ₀(i<sub>c</sub> + i<sub>d</sub>) = μ₀i<sub>c</sub> + μ₀ε₀ dΦ<sub>E</sub>/dt.']],
 ['eq','i<sub>d</sub> = ε₀ dΦ<sub>E</sub>/dt'],
 ['p','So a changing magnetic field makes an electric field (Faraday), and a changing electric field makes a magnetic field (Maxwell). Each can generate the other, which is what allows a wave to travel through empty space.'],
 ['ex','A capacitor with circular plates of radius 6 cm is charged by a current of 0.15 A. What is the displacement current between its plates?',['Displacement current equals the conduction current feeding the plates'],'0.15 A']
]},
{t:'Maxwell\'s equations', b:[
 ['list',['<b>Gauss\'s law for E:</b> ∮E·dA = Q/ε₀. Charges create electric fields.','<b>Gauss\'s law for B:</b> ∮B·dA = 0. There are no magnetic monopoles.','<b>Faraday\'s law:</b> ∮E·dl = −dΦ<sub>B</sub>/dt. Changing magnetic fields create electric fields.','<b>Ampère–Maxwell law:</b> ∮B·dl = μ₀i<sub>c</sub> + μ₀ε₀dΦ<sub>E</sub>/dt. Currents and changing electric fields create magnetic fields.']],
 ['p','Together with the Lorentz force F = q(E + v × B), these four equations describe all of classical electricity, magnetism and optics. Maxwell showed that they predict waves travelling at 1/√(μ₀ε₀) ≈ 3 × 10⁸ m/s, the measured speed of light.']
]},
{t:'Electromagnetic waves', b:[
 ['p','A stationary charge makes only an electric field. A steady current makes a steady magnetic field. But an <b>accelerating charge</b>, such as a charge oscillating back and forth, makes fields that change in time and radiate away as an electromagnetic wave with the charge\'s frequency. In 1887 Heinrich Hertz produced and detected such waves with an oscillating spark circuit; J.C. Bose and Marconi soon used them to send signals.'],
 ['list',['E and B oscillate perpendicular to each other and to the direction of travel. EM waves are <b>transverse</b>.','E and B oscillate in phase and reach their maxima together.','For a wave travelling along z: E<sub>x</sub> = E₀ sin(kz − ωt), B<sub>y</sub> = B₀ sin(kz − ωt).','In vacuum all EM waves travel at c = 1/√(μ₀ε₀) = 3 × 10⁸ m/s, whatever their frequency. In a medium their speed is v = 1/√(με) = c/n.','The ratio of amplitudes is E₀/B₀ = c. The electric field is the "large" one in SI units.','They need no medium. Light from distant galaxies crosses empty space for billions of years.']],
 ['eq','c = 1/√(μ₀ε₀) = νλ, &nbsp; E₀ = cB₀'],
 ['ex','A plane EM wave of frequency 25 MHz has, at one point, E = 6.3 V/m. What is B there?',['B = E/c = 6.3/(3 × 10⁸)'],'2.1 × 10⁻⁸ T']
]},
{t:'Energy and momentum of EM waves', b:[
 ['p','EM waves carry energy, which is why sunlight warms you. The energy is shared equally between the electric and magnetic fields: energy densities ½ε₀E² and B²/(2μ₀) are equal for an EM wave.'],
 ['p','They also carry momentum. If a wave delivers energy U to a surface that absorbs it completely, the momentum delivered is p = U/c. This exerts a tiny <b>radiation pressure</b>. Sunlight pushes on Earth with only about 7 × 10⁻⁶ N/m², but it is enough to push comet tails away from the Sun and to propel experimental solar sails.']
]},
{t:'The electromagnetic spectrum', b:[
 ['tbl',['Type','Wavelength range','How produced','How detected','Uses'],[
  ['Radio waves','> 0.1 m','Accelerating electrons in aerials','Receiver aerials','AM, FM, TV, mobile phones (UHF)'],
  ['Microwaves','0.1 m to 1 mm','Klystrons, magnetrons, Gunn diodes','Point-contact diodes','Radar, microwave ovens (2.45 GHz), satellite links, Wi-Fi'],
  ['Infrared','1 mm to 700 nm','Hot bodies, vibrating molecules','Thermopiles, bolometers, the skin','Remote controls, night vision, physiotherapy, greenhouse effect'],
  ['Visible light','700 nm to 400 nm','Electrons in atoms changing energy level','The eye, photocells, film','Vision, photography, optical fibres'],
  ['Ultraviolet','400 nm to 1 nm','Very hot bodies, special lamps, the Sun','Photocells, film','Water purification, sterilising, LASIK surgery'],
  ['X-rays','1 nm to 10⁻³ nm','X-ray tubes, inner electrons in atoms','Film, Geiger counters','Medical imaging, cancer treatment, crystal structure'],
  ['Gamma rays','< 10⁻³ nm','Radioactive nuclei','Film, ionisation chambers','Cancer radiotherapy, sterilising food and equipment']]],
 ['list',['Radio and microwaves pass easily through the atmosphere; much UV is absorbed by the ozone layer, protecting life.','Our eyes evolved to be most sensitive near 550 nm, where sunlight is strongest.','Higher frequency means more energy per photon: UV, X-rays and gamma rays can damage living cells and must be used with care.']],
 ['simple','All of these are the same kind of wave. Only the wavelength changes, from kilometres (radio) to less than an atom (gamma).']
]}
],
recap:['Displacement current i<sub>d</sub> = ε₀dΦ<sub>E</sub>/dt makes Ampère\'s law consistent.','Maxwell\'s four equations predict EM waves travelling at c = 1/√(μ₀ε₀).','EM waves are transverse; E ⊥ B ⊥ direction; in phase; E₀/B₀ = c.','They carry energy and momentum and need no medium.','Spectrum: radio, microwave, IR, visible, UV, X-ray, gamma, with uses for each.'],
exam:['Explain the need for displacement current and write the Ampère–Maxwell law.','State the properties of EM waves; sketch E and B for a plane wave.','Arrange the EM spectrum in order of wavelength or frequency, with sources and uses.']
});

L('c12-9', {
intro:'If you ignore wave effects and treat light as rays travelling in straight lines, a few simple rules explain mirrors, lenses, prisms, the eye, microscopes and telescopes. This chapter develops those rules carefully, with one consistent sign convention.',
sections:[
{t:'Reflection and spherical mirrors', b:[
 ['p','<b>Laws of reflection:</b> the angle of reflection equals the angle of incidence, and the incident ray, reflected ray and normal all lie in one plane. These hold for every surface, curved or flat, using the normal at the point where the ray strikes.'],
 ['p','For a spherical mirror: the <b>pole</b> P is the centre of the mirror\'s surface, the <b>centre of curvature</b> C is the centre of the sphere it is part of, the radius of curvature is R = PC, and the <b>principal axis</b> passes through P and C. Rays parallel to the axis meet (concave) or seem to diverge from (convex) the <b>principal focus</b> F. For small apertures (paraxial rays):'],
 ['eq','f = R/2'],
 ['p','<b>Cartesian sign convention:</b> measure every distance from the pole (or optical centre of a lens). Distances in the direction of incident light (usually left to right) are positive; against it, negative. Heights above the principal axis are positive, below are negative. With light coming from the left, a real object has a negative distance u.']
]},
{t:'The mirror equation', b:[
 ['der','Deriving 1/v + 1/u = 1/f',[
   'An object AB stands at distance u in front of a concave mirror; its image A′B′ forms at v.',
   'A ray from B parallel to the axis strikes the mirror at M and reflects through F. For a small mirror, PM ≈ AB, and triangles A′B′F and PMF are similar: A′B′/AB = FA′/FP = (v − f)/f.',
   'A ray from B to the pole P reflects at an equal angle, so triangles A′B′P and ABP are similar: A′B′/AB = PA′/PA = v/u.',
   'Equating, with signed distances: (v − f)/f = v/u. Divide by v: 1/f − 1/v = 1/u, so 1/v + 1/u = 1/f.']],
 ['eq','1/v + 1/u = 1/f, &nbsp; m = h′/h = −v/u'],
 ['list',['Negative m: inverted (real) image. Positive m: upright (virtual) image. |m| > 1 means magnified.','Concave mirror: real, inverted images for objects beyond F; a virtual, upright, magnified image when the object is between F and P (shaving and make-up mirrors).','Convex mirror: always a virtual, upright, diminished image, with a wide field of view (rear-view mirrors).']],
 ['ex','An object is 27 cm in front of a concave mirror of radius 36 cm. Find the image position and nature. Repeat for 9 cm.',['f = −18 cm, u = −27: 1/v = 1/f − 1/u = −1/18 + 1/27 = −1/54 ⇒ v = −54 cm, m = −2 (real, inverted, magnified)','u = −9: 1/v = −1/18 + 1/9 = 1/18 ⇒ v = +18 cm, m = +2 (virtual, upright, magnified)'],'v = −54 cm (real); v = +18 cm (virtual)']
]},
{t:'Refraction', b:[
 ['p','When light passes from one medium to another, it changes direction at the boundary. <b>Snell\'s law:</b> the ratio sin i/sin r is constant for a given pair of media:'],
 ['eq','n₁ sin i = n₂ sin r, &nbsp; n₂₁ = n₂/n₁ = v₁/v₂'],
 ['list',['The <b>refractive index</b> n of a medium = c/v, the speed of light in vacuum divided by its speed in the medium. Water ≈ 1.33, glass ≈ 1.5, diamond ≈ 2.42.','Light going into a denser medium (higher n) bends towards the normal; into a rarer medium, away from it.','Frequency never changes on refraction. Speed and wavelength change: λ<sub>medium</sub> = λ<sub>vacuum</sub>/n.','A slab with parallel faces displaces a ray sideways but does not change its direction.']],
 ['p','<b>Apparent depth:</b> a pool looks shallower than it is. Viewed from directly above, apparent depth = real depth ÷ n. A coin at the bottom of 1.33 m of water appears to be only 1 m down.'],
 ['p','The Sun is visible for about 2 minutes before it actually rises and after it sets, because the atmosphere bends its light. It also looks oval near the horizon.']
]},
{t:'Total internal reflection', b:[
 ['p','When light travels from a denser to a rarer medium, the refracted ray bends away from the normal. At one particular angle of incidence, the <b>critical angle</b> i<sub>c</sub>, the refracted ray grazes along the surface (r = 90°). For any larger angle, no light is refracted; it is all reflected back. This is <b>total internal reflection</b> (TIR).'],
 ['eq','sin i<sub>c</sub> = 1/n &nbsp;(for the dense medium against air)'],
 ['list',['Conditions: light must go from denser to rarer, and the angle of incidence must exceed the critical angle.','Glass (n = 1.5): i<sub>c</sub> ≈ 42°. Water: 48.6°. Diamond: 24.4°.','<b>Mirage:</b> on a hot road, air near the ground is hotter and less dense. Light from the sky bends upward and is totally reflected, so you see what looks like water.','<b>Diamond sparkle:</b> its tiny critical angle and careful cutting make light reflect many times inside before escaping.','<b>Prisms:</b> right-angled prisms (critical angle 42° < 45°) bend light by 90° or 180° in binoculars and periscopes, better than mirrors.','<b>Optical fibres:</b> thin glass fibres with a core of higher n than the cladding carry light by repeated TIR with very little loss. They carry internet data and are used in endoscopes.']]
]},
{t:'Refraction at a spherical surface', b:[
 ['der','The refraction formula',[
   'Light passes from a medium n₁ into n₂ across a spherical surface of radius R. A point object O at distance u forms an image I at distance v.',
   'For small angles, Snell\'s law becomes n₁i = n₂r. Using the geometry of the rays with the normal through the centre C: i = α + γ and r = γ − β (angles the rays and the normal make with the axis).',
   'Substituting and using tan ≈ angle (α ≈ MN/OM, β ≈ MN/MI, γ ≈ MN/MC): n₁/OM + n₂/MI = (n₂ − n₁)/MC.',
   'With the sign convention (OM = −u, MI = +v, MC = +R): n₂/v − n₁/u = (n₂ − n₁)/R.']],
 ['eq','n₂/v − n₁/u = (n₂ − n₁)/R']
]},
{t:'Thin lenses: the lens maker\'s formula and lens formula', b:[
 ['der','Lens maker\'s formula',[
   'A thin lens of refractive index n₂ in a medium n₁ has two surfaces of radii R₁ and R₂.',
   'Apply the refraction formula at the first surface: it forms an intermediate image I₁ at v₁: n₂/v₁ − n₁/u = (n₂ − n₁)/R₁.',
   'I₁ acts as the object for the second surface: n₁/v − n₂/v₁ = (n₁ − n₂)/R₂.',
   'Adding (the lens is thin, so v₁ terms cancel): n₁/v − n₁/u = (n₂ − n₁)(1/R₁ − 1/R₂).',
   'For an object at infinity, v = f: 1/f = (n₂₁ − 1)(1/R₁ − 1/R₂), where n₂₁ = n₂/n₁.']],
 ['eq','1/f = (n − 1)(1/R₁ − 1/R₂), &nbsp; 1/v − 1/u = 1/f, &nbsp; m = v/u'],
 ['list',['Convex (converging) lenses have positive f; concave (diverging) lenses have negative f.','A convex lens forms real, inverted images for objects beyond F and a virtual, magnified, upright image for objects inside F (a magnifying glass).','A concave lens always forms a virtual, upright, diminished image.','A glass lens in a liquid of higher refractive index reverses its behaviour: a convex lens then diverges light.']],
 ['p','<b>Power</b> of a lens P = 1/f, with f in metres, measured in dioptres (D). Convex lenses have positive power. Opticians prescribe spectacles in dioptres.'],
 ['ex','A double-convex lens has both radii 10 cm and n = 1.5. Find its focal length and power.',['1/f = (1.5 − 1)(1/10 − 1/(−10)) = 0.5 × 0.2 = 0.1 cm⁻¹','f = 10 cm = 0.1 m'],'f = 10 cm; P = +10 D']
]},
{t:'Combination of thin lenses', b:[
 ['der','Two thin lenses in contact',[
   'Lens 1 forms an image at v₁: 1/v₁ − 1/u = 1/f₁.',
   'That image is the object for lens 2: 1/v − 1/v₁ = 1/f₂.',
   'Adding: 1/v − 1/u = 1/f₁ + 1/f₂. The pair acts as one lens with 1/f = 1/f₁ + 1/f₂.']],
 ['eq','1/f = 1/f₁ + 1/f₂ + …, &nbsp; P = P₁ + P₂ + …, &nbsp; m = m₁m₂…'],
 ['p','Camera and microscope lenses use combinations to increase magnification and reduce colour defects (an achromatic doublet combines a convex and a concave lens of different glasses).']
]},
{t:'Refraction through a prism', b:[
 ['der','The prism formula',[
   'A ray enters face AB of a prism (angle A) at angle i, refracts to r₁, meets face AC at r₂, and emerges at angle e.',
   'Geometry of the prism gives r₁ + r₂ = A.',
   'Total deviation δ = (i − r₁) + (e − r₂) = i + e − A.',
   'As i increases, δ first decreases, reaches a minimum δ<sub>m</sub>, then increases. At minimum deviation the ray passes symmetrically: i = e and r₁ = r₂ = A/2, so i = (A + δ<sub>m</sub>)/2.',
   'Snell\'s law at the first face: n = sin i/sin r₁ = sin[(A + δ<sub>m</sub>)/2]/sin(A/2).']],
 ['eq','n = sin[(A + δ<sub>m</sub>)/2] / sin(A/2); &nbsp; thin prism: δ = (n − 1)A'],
 ['p','Different colours have slightly different refractive indices in glass (violet bends most, red least), so a prism splits white light into a spectrum. This is <b>dispersion</b>.'],
 ['ex','For a 60° prism, the angle of minimum deviation is 40°. Find n.',['n = sin(50°)/sin(30°) = 0.766/0.5'],'n ≈ 1.53']
]},
{t:'Natural phenomena: rainbow and scattering', x:true, b:[
 ['p','<b>Rainbow:</b> sunlight entering raindrops is refracted, dispersed into colours, reflected inside the drop and refracted out again. Red light emerges at about 42° and violet at about 40° from the direction opposite the Sun, so a primary rainbow has red outside. A fainter secondary rainbow, from two internal reflections, has the colours reversed.'],
 ['p','<b>Scattering:</b> molecules in the air scatter short wavelengths much more than long ones (scattering ∝ 1/λ⁴). Blue light is scattered all over the sky, so the sky looks blue. At sunrise and sunset, sunlight passes through much more air; most of the blue is scattered out, and the Sun looks red. Clouds have larger droplets that scatter all colours equally, so they look white.']
]},
{t:'Optical instruments: the eye and the simple microscope', b:[
 ['p','The <b>human eye</b> focuses light on the retina with the cornea and an adjustable lens. The ciliary muscles change the lens\'s focal length (<b>accommodation</b>) to see objects from far away down to the <b>near point</b>, about 25 cm (D) for a normal eye. Common defects: <b>myopia</b> (short sight; distant objects focus in front of the retina; corrected with a concave lens), <b>hypermetropia</b> (long sight; corrected with a convex lens), and <b>presbyopia</b> (loss of accommodation with age; bifocals).'],
 ['p','A <b>simple microscope</b> is a convex lens of short focal length held close to the eye, with the object inside F, so it forms an enlarged virtual image.'],
 ['eq','Image at near point: m = 1 + D/f; &nbsp; image at infinity: m = D/f'],
 ['p','Magnification here really means angular magnification: how much bigger the image looks compared with the object viewed at 25 cm with the naked eye.']
]},
{t:'Compound microscope and telescopes', b:[
 ['p','A <b>compound microscope</b> uses two convex lenses. The <b>objective</b> (very short focal length f<sub>o</sub>) forms a real, magnified image of a nearby object. The <b>eyepiece</b> (f<sub>e</sub>) acts as a simple microscope to magnify that image further.'],
 ['eq','m = m<sub>o</sub> × m<sub>e</sub> ≈ (L/f<sub>o</sub>)(D/f<sub>e</sub>) &nbsp;(final image at infinity; L = tube length)'],
 ['p','A <b>refracting telescope</b> has an objective of long focal length f<sub>o</sub> and large aperture (to gather light) and an eyepiece of short focal length f<sub>e</sub>. In normal adjustment the final image is at infinity:'],
 ['eq','m = f<sub>o</sub>/f<sub>e</sub>, &nbsp; tube length = f<sub>o</sub> + f<sub>e</sub>'],
 ['p','Large lenses are heavy, sag and show colour fringes, so the biggest telescopes are <b>reflecting telescopes</b> using a concave mirror as the objective. In a <b>Cassegrain</b> design, a small convex secondary mirror reflects light back through a hole in the primary to the eyepiece, making the telescope compact. A reflector has no chromatic aberration, and a parabolic mirror removes spherical aberration.'],
 ['ex','A telescope has an objective of 144 cm and an eyepiece of 6 cm focal length. Find its magnifying power and tube length in normal adjustment.',['m = 144/6 = 24','L = 144 + 6 = 150 cm'],'m = 24; tube length 150 cm']
]}
],
recap:['Mirrors: f = R/2, 1/v + 1/u = 1/f, m = −v/u. Use the Cartesian sign convention.','Snell: n₁ sin i = n₂ sin r; n = c/v; apparent depth = real depth/n.','TIR from dense to rare beyond i<sub>c</sub>, sin i<sub>c</sub> = 1/n (fibres, mirages, diamonds).','Spherical surface: n₂/v − n₁/u = (n₂ − n₁)/R. Lens maker: 1/f = (n − 1)(1/R₁ − 1/R₂). Lens: 1/v − 1/u = 1/f.','Lenses in contact: P = P₁ + P₂. Prism: n = sin[(A + δ<sub>m</sub>)/2]/sin(A/2).','Microscope m ≈ (L/f<sub>o</sub>)(D/f<sub>e</sub>); telescope m = f<sub>o</sub>/f<sub>e</sub>.'],
exam:['Derive the mirror formula, refraction at a spherical surface, lens maker\'s formula and lens formula.','Explain TIR with applications; derive the prism formula for minimum deviation.','Derive the focal length of lenses in contact.','Draw ray diagrams and derive magnifying power for a compound microscope and an astronomical telescope; compare refracting and reflecting telescopes.']
});

L('c12-10', {
intro:'Ray optics cannot explain why light spreads around edges, makes coloured patterns on soap bubbles, or is blocked by crossed polaroids. These effects show that light is a wave. This chapter uses Huygens\' wave picture to explain reflection and refraction, then studies interference, diffraction and polarisation.',
sections:[
{t:'Huygens\' principle', b:[
 ['p','A <b>wavefront</b> is a surface on which every point vibrates in the same phase. A point source makes spherical wavefronts; very far from the source they are effectively plane. Rays are perpendicular to wavefronts.'],
 ['p','<b>Huygens\' principle:</b> every point on a wavefront acts as a source of secondary wavelets, which spread out in all directions at the speed of the wave. A short time later, the new wavefront is the surface that touches (envelopes) all these wavelets in the forward direction.'],
 ['simple','To find where a wave goes next, imagine every point on it sending out a tiny ripple, then draw the curve that touches the fronts of all those ripples.']
]},
{t:'Refraction and reflection using wavefronts', b:[
 ['der','Snell\'s law from Huygens\' principle',[
   'A plane wavefront AB meets a surface at angle i. Light travels at v₁ above the surface and v₂ below.',
   'While the wavelet from B travels to C in the first medium (distance BC = v₁τ), the wavelet from A travels into the second medium a distance AE = v₂τ.',
   'The refracted wavefront CE touches the wavelet from A. From the two right triangles sharing hypotenuse AC: sin i = BC/AC and sin r = AE/AC.',
   'sin i/sin r = v₁/v₂ = n₂/n₁. This is Snell\'s law, and it shows that light is slower in a denser medium, as experiments confirm.']],
 ['list',['Frequency is set by the source and does not change on refraction; the wavelength changes: λ₂/λ₁ = v₂/v₁.','The same construction for reflection gives angle of incidence = angle of reflection.','Huygens\' picture also explains how prisms, lenses and mirrors reshape wavefronts: a convex lens turns a plane wavefront into a converging spherical one.']]
]},
{t:'The Doppler effect for light', x:true, b:[
 ['p','If a light source moves away from us, the wavefronts are stretched and the observed frequency decreases (<b>red shift</b>); if it approaches, the frequency increases (<b>blue shift</b>). For speeds much smaller than c: Δν/ν = −v<sub>radial</sub>/c. Astronomers use red shifts to measure how fast galaxies recede, which led to the discovery that the universe is expanding.']
]},
{t:'Coherent sources and interference', b:[
 ['p','When two waves overlap, their displacements add (superposition). If they meet in phase, they reinforce: <b>constructive interference</b>. If they meet exactly out of phase, they cancel: <b>destructive interference</b>.'],
 ['der','Resultant intensity of two waves',[
   'Two waves of equal amplitude a with a phase difference φ meet at a point. Their resultant amplitude is A = 2a cos(φ/2).',
   'Intensity is proportional to amplitude squared: I = 4I₀ cos²(φ/2), where I₀ is the intensity of each wave.',
   'φ = 0, 2π, 4π…: I = 4I₀ (bright). φ = π, 3π…: I = 0 (dark).',
   'In terms of path difference Δ = S₂P − S₁P: bright when Δ = nλ, dark when Δ = (n + ½)λ.']],
 ['p','A steady pattern needs <b>coherent sources</b>: sources with a constant phase difference. Two separate bulbs emit light in random bursts, so their phase difference changes millions of times a second and the pattern averages out to uniform intensity 2I₀. Coherent sources are obtained by splitting light from one source, for example with two slits.']
]},
{t:'Young\'s double-slit experiment', b:[
 ['p','In 1801 Thomas Young passed light from one narrow slit S through two close parallel slits S₁ and S₂. Being derived from the same source, these behave as coherent sources. On a screen far away he saw a series of bright and dark bands: <b>interference fringes</b>.'],
 ['der','Positions of fringes and fringe width',[
   'Let the slit separation be d and the screen distance D (D ≫ d). Consider a point P on the screen at distance x from the centre.',
   'Geometry gives S₂P² − S₁P² = 2xd, so the path difference is S₂P − S₁P ≈ xd/D.',
   'Bright fringes: xd/D = nλ ⇒ x<sub>n</sub> = nλD/d.',
   'Dark fringes: xd/D = (n + ½)λ ⇒ x<sub>n</sub> = (n + ½)λD/d.',
   'Fringe width (distance between consecutive bright or dark fringes): β = λD/d.']],
 ['eq','β = λD/d, &nbsp; angular fringe width θ = λ/d'],
 ['list',['The central fringe (x = 0, zero path difference) is always bright.','Fringes are equally spaced. They get wider with longer wavelength (red wider than blue) and larger D, and narrower with larger d.','With white light, the central fringe is white; the others are coloured, with violet edges nearer the centre.','In a medium of refractive index n, the wavelength becomes λ/n, so β shrinks to β/n.','Energy is not destroyed in dark fringes; it is redistributed to the bright ones.']],
 ['ex','In a double-slit experiment, d = 0.28 mm and D = 1.4 m. The distance between the central bright fringe and the fourth bright fringe is 1.2 cm. Find λ.',['x₄ = 4λD/d ⇒ λ = x₄d/(4D) = 0.012 × 0.28 × 10⁻³/(4 × 1.4)'],'λ = 600 nm']
]},
{t:'Diffraction at a single slit', b:[
 ['p','Light bends slightly round obstacles and spreads after passing through narrow openings. This is <b>diffraction</b>. It is noticeable when the opening is comparable to the wavelength. You can see it by looking at a distant light through a narrow gap between two fingers or razor blades.'],
 ['der','Minima of a single-slit pattern',[
   'A slit of width a is lit by a plane wave. Each point in the slit sends out wavelets (Huygens).',
   'In the straight-ahead direction (θ = 0), all wavelets arrive in phase: a bright central maximum.',
   'At angle θ, the path difference between the two edges is a sinθ. Divide the slit into two halves. If a sinθ = λ, each point in the upper half has a partner in the lower half exactly λ/2 behind, and all pairs cancel: a dark band.',
   'In general, minima occur at a sinθ = nλ (n = ±1, ±2, …). Weaker secondary maxima lie roughly midway, near a sinθ = (n + ½)λ.']],
 ['eq','Minima: a sinθ = nλ; &nbsp; central maximum width = 2λD/a'],
 ['list',['The central maximum is twice as wide as each secondary maximum, and much brighter. Secondary maxima get fainter quickly.','A narrower slit gives a wider pattern: diffraction spreads light more.','Interference vs diffraction: interference (YDSE) comes from two sources and gives equally bright, equally spaced fringes; diffraction comes from many wavelets across one opening and gives a wide bright centre with fading side bands.','Diffraction is why sound bends round corners easily (long wavelength) while light seems to travel straight (very short wavelength).']],
 ['ex','Red light of 650 nm passes through a slit 0.2 mm wide onto a screen 1.5 m away. Find the width of the central maximum.',['Width = 2λD/a = 2 × 650 × 10⁻⁹ × 1.5/(0.2 × 10⁻³)'],'≈ 9.75 mm']
]},
{t:'Resolving power and the validity of ray optics', x:true, b:[
 ['p','Because of diffraction, even a perfect lens forms a point source\'s image as a tiny spot with rings, not a point. Two nearby objects can be seen as separate (resolved) only if their spots do not overlap too much. For a telescope of aperture D, the smallest resolvable angle is about Δθ ≈ 1.22λ/D: bigger mirrors and lenses see finer detail. For a microscope, the smallest separable distance is about 1.22λ/(2n sinβ), which is why using shorter wavelengths (or electrons) reveals smaller structures.'],
 ['p','A beam passing through an aperture a spreads by diffraction to a width of about the aperture size after a distance z<sub>F</sub> ≈ a²/λ, the <b>Fresnel distance</b>. For distances much less than this, diffraction is negligible and ray optics works well. For a 3 mm aperture and visible light, z<sub>F</sub> is about 18 m.']
]},
{t:'Polarisation', b:[
 ['p','In a light wave, the electric field oscillates perpendicular to the direction of travel. In ordinary (unpolarised) light from the Sun or a bulb, this direction changes randomly and rapidly. If the electric field oscillates in one fixed plane only, the light is <b>plane-polarised</b>.'],
 ['p','A <b>polaroid</b> is a sheet containing long aligned molecules that absorb light with E along one direction and transmit light with E along the perpendicular direction (the <b>pass axis</b>). Unpolarised light passing through one polaroid emerges polarised, with half the original intensity.'],
 ['eq','Malus\'s law: I = I₀ cos²θ'],
 ['list',['Here I₀ is the intensity of polarised light falling on a second polaroid (the analyser), and θ is the angle between the two pass axes.','Rotating the analyser makes the light brighten and dim twice per turn; crossed polaroids (θ = 90°) block it completely.','Only transverse waves can be polarised. Polarisation is the proof that light is a transverse wave; sound in air cannot be polarised.']],
 ['p','<b>Polarisation by scattering:</b> sunlight scattered by air molecules at 90° to its original direction is polarised. Bees use the polarisation of skylight to navigate.'],
 ['p','<b>Polarisation by reflection (Brewster\'s law):</b> light reflected from glass or water is partly polarised. At a particular angle of incidence, the Brewster angle, the reflected light is completely polarised and the reflected and refracted rays are at 90° to each other. Then tan i<sub>B</sub> = n. For glass, i<sub>B</sub> ≈ 57°. Polaroid sunglasses with vertical pass axes cut glare from horizontal reflecting surfaces such as roads and water.'],
 ['ex','Unpolarised light of intensity I₀ passes through two polaroids whose axes are at 60°. What intensity emerges?',['After the first polaroid: I₀/2','After the second: (I₀/2)cos²60° = (I₀/2)(1/4)'],'I₀/8']
]}
],
recap:['Huygens: every point on a wavefront is a source of wavelets; this gives the laws of reflection and refraction.','Interference needs coherent sources; I = 4I₀cos²(φ/2).','YDSE: bright at Δ = nλ, dark at (n + ½)λ; β = λD/d.','Single slit: minima at a sinθ = nλ; central maximum width 2λD/a.','Polarisation shows light is transverse; Malus: I = I₀cos²θ; Brewster: tan i<sub>B</sub> = n.'],
exam:['State Huygens\' principle and use it to derive Snell\'s law (and the law of reflection).','Explain coherent sources; derive the expression for fringe width in YDSE.','Explain single-slit diffraction and compare it with interference.','Explain polarisation, Malus\'s law and Brewster\'s law with uses of polaroids.']
});
})();
