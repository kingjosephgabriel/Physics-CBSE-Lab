/* Full lessons — Class 11, Chapters 1–5. Original explanations written for NCERT Physics Lab. */
(function(){
const L = (id, o) => { (window.LESSONS = window.LESSONS || {})[id] = o; };

L('c11-1', {
intro:'Physics is built on numbers that come from measurement. Before you can say a car is fast or a wire is thick, you need an agreed unit, a sensible number of digits, and a way to check that your formulas make sense. This chapter gives you those three tools.',
sections:[
{t:'Physical quantities and units', b:[
 ['p','A <b>physical quantity</b> is anything you can measure: length, mass, time, speed, force, temperature. Every measurement has two parts: a <b>number</b> and a <b>unit</b>. Saying a table is "2" long means nothing; saying it is "2 m" long is a measurement.'],
 ['eq','Physical quantity = (numerical value) × (unit)'],
 ['p','If you change to a smaller unit, the number gets bigger, but the quantity itself stays the same. 2 m = 200 cm = 2000 mm. So <b>n₁u₁ = n₂u₂</b>: the number is inversely proportional to the size of the unit.'],
 ['simple','A unit is just an agreed "measuring stick". The number tells you how many sticks fit.'],
 ['p','<b>Fundamental (base) quantities</b> are chosen as independent building blocks: length, mass, time and so on. Their units are <b>fundamental units</b>. Every other quantity, such as speed (length ÷ time) or force (mass × acceleration), is a <b>derived quantity</b> with a <b>derived unit</b>.'],
 ['list',['A good unit should be well defined, easy to reproduce anywhere, unchanging with time and place, and of a convenient size.','Older unit systems: CGS (centimetre, gram, second), FPS (foot, pound, second), MKS (metre, kilogram, second). The SI system grew out of MKS.']]
]},
{t:'The International System of Units (SI)', b:[
 ['p','In 1971 the world agreed on one system, the <b>Système Internationale d\'Unités</b>, or SI. It has seven base quantities. Since 2019, every base unit is defined from a fixed constant of nature (such as the speed of light or Planck\'s constant), so the definitions never drift.'],
 ['tbl',['Base quantity','SI unit','Symbol'],[['Length','metre','m'],['Mass','kilogram','kg'],['Time','second','s'],['Electric current','ampere','A'],['Thermodynamic temperature','kelvin','K'],['Amount of substance','mole','mol'],['Luminous intensity','candela','cd']]],
 ['p','Two more units measure angles. The <b>radian</b> (rad) measures a plane angle: θ = arc length ÷ radius. The <b>steradian</b> (sr) measures a solid angle (a 3D "cone" of directions): Ω = area on a sphere ÷ radius². A full circle is 2π rad; a full sphere is 4π sr.'],
 ['p','<b>Prefixes</b> scale units by powers of ten so numbers stay readable.'],
 ['tbl',['Prefix','Symbol','Factor','Prefix','Symbol','Factor'],[['kilo','k','10³','milli','m','10⁻³'],['mega','M','10⁶','micro','μ','10⁻⁶'],['giga','G','10⁹','nano','n','10⁻⁹'],['tera','T','10¹²','pico','p','10⁻¹²'],['peta','P','10¹⁵','femto','f','10⁻¹⁵']]],
 ['list',['Practical units you still meet: 1 light year ≈ 9.46 × 10¹⁵ m (distance light travels in a year), 1 astronomical unit (AU) ≈ 1.496 × 10¹¹ m (Earth–Sun distance), 1 parsec ≈ 3.08 × 10¹⁶ m, 1 ångström (Å) = 10⁻¹⁰ m, 1 fermi (fm) = 10⁻¹⁵ m, 1 atomic mass unit (u) ≈ 1.66 × 10⁻²⁷ kg.']],
 ['warn','Unit symbols never take a plural "s" and are never followed by a full stop: write 5 kg, not 5 kgs. Symbols named after people use a capital letter (N, J, W, Pa) but the unit name does not (newton, joule).']
]},
{t:'Measuring very large and very small lengths', x:true, b:[
 ['p','A metre scale reaches about 1 mm, a vernier calliper 0.1 mm, and a screw gauge 0.01 mm. For larger or smaller lengths we need clever methods.'],
 ['p','<b>Parallax method</b> for large distances: hold a pencil at arm\'s length and close each eye in turn. The pencil seems to jump against the background. The angle of that jump is the parallax angle θ. If the two viewing points are a distance b apart (the <b>basis</b>), the object\'s distance is D ≈ b/θ (θ in radians). Astronomers use two ends of Earth\'s orbit, or two observatories, as the basis.'],
 ['eq','D = b / θ &nbsp;&nbsp;(θ small, in radians)'],
 ['p','Once D is known, the size of a planet follows from the angle it fills in the sky: diameter d = Dα, where α is its angular diameter.'],
 ['p','For tiny lengths (molecules, atoms) we use electron microscopes, or estimate from a known volume spread into a thin film, such as an oleic acid layer on water: thickness = volume ÷ area.'],
 ['ex','The Moon is seen from two places 1.2 × 10⁶ m apart with a parallax angle of 3.1 × 10⁻³ rad. How far away is it?',['D = b/θ = 1.2 × 10⁶ / 3.1 × 10⁻³'],'D ≈ 3.9 × 10⁸ m (about 3.9 lakh km)']
]},
{t:'Accuracy, precision and errors', x:true, b:[
 ['p','<b>Accuracy</b> is how close a measurement is to the true value. <b>Precision</b> is how finely you can measure and how close repeated readings are to each other. A watch that is 5 minutes slow but shows seconds is precise but not accurate.'],
 ['simple','Accuracy = hitting the target. Precision = hitting the same spot every time.'],
 ['p','<b>Systematic errors</b> push every reading the same way: a zero error on an instrument, a wrongly calibrated thermometer, or a bad habit such as reading a scale at an angle (parallax error). You fix them by correcting the instrument or method. <b>Random errors</b> scatter readings both ways because of small uncontrolled changes. You reduce them by taking many readings and averaging. <b>Least count error</b> comes from the smallest division the instrument can show.'],
 ['der','How to calculate the error in repeated readings',[
   'Take n readings a₁, a₂, …, aₙ. The best estimate of the true value is the mean: a<sub>mean</sub> = (a₁ + a₂ + … + aₙ)/n.',
   'Absolute error of each reading: Δa<sub>i</sub> = |a<sub>mean</sub> − a<sub>i</sub>|.',
   'Mean absolute error: Δa<sub>mean</sub> = (Δa₁ + Δa₂ + … + Δaₙ)/n.',
   'Report the result as a = a<sub>mean</sub> ± Δa<sub>mean</sub>.',
   'Relative error = Δa<sub>mean</sub>/a<sub>mean</sub>; percentage error = relative error × 100%.']],
 ['ex','A pendulum\'s period is measured as 2.63, 2.56, 2.42, 2.71 and 2.80 s. Find the mean, the mean absolute error and the percentage error.',[
   'Mean = (2.63 + 2.56 + 2.42 + 2.71 + 2.80)/5 = 13.12/5 = 2.624 ≈ 2.62 s',
   'Deviations: 0.01, 0.06, 0.20, 0.09, 0.18. Mean absolute error = 0.54/5 = 0.108 ≈ 0.11 s',
   'Percentage error = 0.11/2.62 × 100 ≈ 4%'],'T = 2.62 ± 0.11 s (about 4% error)']
]},
{t:'How errors combine in calculations', x:true, b:[
 ['p','When you use measured values in a formula, their errors carry through. We always take the <b>worst case</b>, so errors are added, never subtracted.'],
 ['der','Rules for combining errors',[
   '<b>Sum or difference</b>, Z = A ± B: the absolute errors add. ΔZ = ΔA + ΔB.',
   '<b>Product or quotient</b>, Z = AB or Z = A/B: the relative errors add. ΔZ/Z = ΔA/A + ΔB/B.',
   '<b>Power</b>, Z = A<sup>n</sup>: the relative error is multiplied by n. ΔZ/Z = n(ΔA/A).',
   '<b>General case</b>, Z = A<sup>p</sup>B<sup>q</sup>/C<sup>r</sup>: ΔZ/Z = p(ΔA/A) + q(ΔB/B) + r(ΔC/C).']],
 ['warn','Even when you subtract two quantities or divide by one, their errors still add. Two lengths 50 ± 1 cm and 30 ± 1 cm give a difference of 20 ± 2 cm, not 20 ± 0 cm.'],
 ['tip','The quantity raised to the highest power contributes most to the error, so measure it most carefully. In g = 4π²L/T², time enters as T², so a small timing error matters twice as much.'],
 ['ex','The radius of a sphere is measured as (2.0 ± 0.1) cm. What is the percentage error in its volume?',['V = (4/3)πr³, so ΔV/V = 3(Δr/r)','Δr/r = 0.1/2.0 = 0.05 = 5%','ΔV/V = 3 × 5%'],'15%']
]},
{t:'Significant figures', b:[
 ['p','The digits in a measurement that you are sure of, plus the first uncertain digit, are its <b>significant figures</b>. They tell the reader how precise the measurement is. A length written 2.30 m claims more precision than 2.3 m.'],
 ['list',['All non-zero digits are significant: 2345 has 4.','Zeros between non-zero digits are significant: 2005 has 4.','Leading zeros are never significant: 0.0032 has 2. They only mark the decimal place.','Trailing zeros after a decimal point are significant: 3.500 has 4.','Trailing zeros in a whole number without a decimal point are ambiguous: 4500 could have 2, 3 or 4. Scientific notation removes the doubt: 4.5 × 10³ (2), 4.50 × 10³ (3).','Changing units does not change the number of significant figures: 2.308 cm = 23.08 mm = 0.02308 m, all with 4.']],
 ['simple','Write the number in scientific notation (a × 10ᵇ with 1 ≤ a < 10). Every digit in "a" is significant.'],
 ['p','<b>Arithmetic rules.</b> In multiplication and division, the answer keeps as many significant figures as the factor with the fewest. In addition and subtraction, the answer keeps as many decimal places as the number with the fewest decimal places.'],
 ['ex','Density = mass/volume = 4.237 g ÷ 2.51 cm³. Give the answer to the correct number of significant figures.',['Calculator: 1.68804…','Least precise factor (2.51) has 3 significant figures'],'1.69 g/cm³'],
 ['ex','Add 436.32 g, 227.2 g and 0.301 g.',['Sum = 663.821 g','The fewest decimal places is one (227.2)'],'663.8 g'],
 ['p','<b>Rounding off.</b> If the digit dropped is more than 5, round up; less than 5, leave it. If it is exactly 5 (with nothing after it), leave the previous digit unchanged when it is even and raise it by one when it is odd. So 2.745 → 2.74, but 2.735 → 2.74. This "round to even" rule stops rounding from always pushing values upward.'],
 ['warn','Exact numbers, such as the 2 in 2πr or a count of 10 objects, have infinite significant figures. They never limit the answer.']
]},
{t:'Dimensions of physical quantities', b:[
 ['p','Every physical quantity can be expressed in terms of the base quantities. The <b>dimensions</b> are the powers to which those base quantities are raised. We write them in square brackets: [M] for mass, [L] for length, [T] for time, [A] for current, [K] for temperature.'],
 ['der','Finding a dimensional formula: force',[
   'Force = mass × acceleration.',
   'Acceleration = velocity/time = (length/time)/time = [LT⁻²].',
   'So force = [M] × [LT⁻²] = [MLT⁻²]. Force has dimension 1 in mass, 1 in length and −2 in time.']],
 ['tbl',['Quantity','Formula','Dimensions','SI unit'],[['Velocity','distance/time','[LT⁻¹]','m s⁻¹'],['Acceleration','velocity/time','[LT⁻²]','m s⁻²'],['Force','ma','[MLT⁻²]','N'],['Work, energy','Fd','[ML²T⁻²]','J'],['Power','W/t','[ML²T⁻³]','W'],['Pressure, stress','F/A','[ML⁻¹T⁻²]','Pa'],['Momentum, impulse','mv','[MLT⁻¹]','kg m s⁻¹'],['Density','m/V','[ML⁻³]','kg m⁻³'],['Frequency','1/T','[T⁻¹]','Hz'],['Gravitational constant G','Fr²/m₁m₂','[M⁻¹L³T⁻²]','N m² kg⁻²'],['Planck\'s constant h','E/ν','[ML²T⁻¹]','J s'],['Strain, angle, refractive index','ratio','dimensionless','none']]],
 ['p','Quantities with no dimensions are called <b>dimensionless</b>: angles, strain, refractive index, relative density. Some quantities have units but no dimensions (the radian). And some pairs share the same dimensions though they mean different things: work and torque both have [ML²T⁻²].']
]},
{t:'Dimensional analysis and its uses', b:[
 ['p','The <b>principle of homogeneity</b> says you can only add, subtract or equate quantities with the same dimensions. You cannot add 3 kg to 4 m. That simple rule gives three powerful uses.'],
 ['der','Use 1: checking whether an equation is dimensionally correct',[
   'Check s = ut + ½at².',
   'Left side: [L]. First term ut: [LT⁻¹][T] = [L]. Second term at²: [LT⁻²][T²] = [L].',
   'Every term is [L], so the equation is dimensionally consistent.',
   'Dimensionally correct does not prove correct: the ½ cannot be checked this way. But dimensionally wrong always means wrong.']],
 ['der','Use 2: deriving a relation (period of a pendulum)',[
   'Guess that the period T depends on length l, mass m and g: T = k l<sup>a</sup> m<sup>b</sup> g<sup>c</sup>, where k is a dimensionless constant.',
   'Dimensions: [T] = [L]<sup>a</sup>[M]<sup>b</sup>[LT⁻²]<sup>c</sup> = [M<sup>b</sup> L<sup>a+c</sup> T<sup>−2c</sup>].',
   'Match powers: M: b = 0. T: −2c = 1 ⇒ c = −½. L: a + c = 0 ⇒ a = ½.',
   'So T = k√(l/g). Experiment (or full theory) gives k = 2π.']],
 ['der','Use 3: converting units between systems',[
   'Convert 1 joule into ergs (CGS). Energy has dimensions [ML²T⁻²].',
   'n₂ = n₁ (M₁/M₂)¹(L₁/L₂)²(T₁/T₂)⁻².',
   'M₁/M₂ = 1 kg/1 g = 10³; L₁/L₂ = 1 m/1 cm = 10²; T₁/T₂ = 1.',
   'n₂ = 1 × 10³ × (10²)² = 10⁷. So 1 J = 10⁷ erg.']],
 ['p','<b>Limitations.</b> Dimensional analysis cannot find dimensionless constants (2π, ½). It fails for relations involving trigonometric, logarithmic or exponential functions, and when a quantity depends on more than three others (we only have three equations from M, L, T in mechanics). It also cannot tell you whether a quantity is a scalar or a vector.'],
 ['ex','Check the dimensional correctness of ½mv² = mgh.',['Left: [M][LT⁻¹]² = [ML²T⁻²]','Right: [M][LT⁻²][L] = [ML²T⁻²]'],'Both sides match, so the equation is dimensionally correct.']
]}
],
recap:['Every measurement is a number times a unit, and the SI system has seven base units.','Significant figures show precision; follow the multiplication and addition rules for answers.','Errors always add; powers multiply the relative error.','Dimensions [M<sup>a</sup>L<sup>b</sup>T<sup>c</sup>] let you check equations, derive relations and convert units, but not find pure numbers.'],
exam:['Derive a formula by dimensional analysis (pendulum period, speed of a wave, centripetal force).','Check an equation for dimensional correctness and state the limitations of the method.','Count significant figures and apply the rounding-off rules.','Convert a unit between SI and CGS using dimensions.']
});

L('c11-2', {
intro:'This chapter describes motion along a single straight line, without asking what causes it. You learn the language of position, displacement, velocity and acceleration, how to read motion from graphs, and the three equations that solve any problem with constant acceleration.',
sections:[
{t:'Position, path length and displacement', b:[
 ['p','To describe motion we first choose a <b>reference point</b> (the origin) and a direction called positive. Together with a clock, this is a <b>frame of reference</b>. Position x is then just a number with a sign: x = +5 m means 5 m on the positive side; x = −3 m means 3 m on the other side.'],
 ['p','<b>Path length (distance)</b> is the total length of the path covered. It is always positive and never decreases. <b>Displacement</b> is the change in position, Δx = x₂ − x₁. It can be positive, negative or zero.'],
 ['ex','A car goes from x = 0 to x = +360 m, then turns back to x = +240 m. Find the path length and displacement.',['Path length = 360 + 120 = 480 m','Displacement = final − initial = 240 − 0 = +240 m'],'Distance 480 m, displacement +240 m'],
 ['simple','Distance is what your odometer shows. Displacement is the straight arrow from start to finish.'],
 ['warn','Displacement can be zero even when distance is large. A runner completing a full lap has zero displacement. And the magnitude of displacement is never more than the distance.']
]},
{t:'Speed and velocity', b:[
 ['p','<b>Average velocity</b> = displacement ÷ time taken = Δx/Δt. It has a direction (its sign). <b>Average speed</b> = total path length ÷ total time. It is always positive.'],
 ['eq','v̄ = Δx/Δt = (x₂ − x₁)/(t₂ − t₁)'],
 ['p','On an x–t graph, average velocity between two times is the slope of the straight line joining the two points. As the time interval shrinks to zero, that line becomes the tangent, and its slope is the <b>instantaneous velocity</b>:'],
 ['eq','v = lim<sub>Δt→0</sub> Δx/Δt = dx/dt'],
 ['p','The magnitude of instantaneous velocity is instantaneous speed, which is what a speedometer shows. For motion that does not reverse, average speed equals the magnitude of average velocity; if the motion reverses, average speed is larger.'],
 ['ex','The position of an object is x = 8.5 + 2.5t² (x in m, t in s). Find its velocity at t = 2 s and its average velocity between t = 2 s and t = 4 s.',['v = dx/dt = 5.0t, so at t = 2 s, v = 10 m/s','x(4) = 8.5 + 40 = 48.5 m; x(2) = 8.5 + 10 = 18.5 m','Average v = (48.5 − 18.5)/2 = 15 m/s'],'v(2 s) = 10 m/s; average = 15 m/s']
]},
{t:'Acceleration', b:[
 ['p','<b>Acceleration</b> tells how quickly velocity changes. Average acceleration = Δv/Δt; instantaneous acceleration a = dv/dt = d²x/dt². Its SI unit is m s⁻².'],
 ['p','On a v–t graph, acceleration is the slope. The sign of acceleration alone does not tell you whether the object is speeding up or slowing down. What matters is whether velocity and acceleration have the <b>same sign</b> (speeding up) or <b>opposite signs</b> (slowing down).'],
 ['tbl',['v','a','What happens'],[['+','+','Moving forward, speeding up'],['+','−','Moving forward, slowing down'],['−','−','Moving backward, speeding up'],['−','+','Moving backward, slowing down'],['0 (instant)','≠ 0','Momentarily at rest, about to turn around (top of a throw)']]],
 ['warn','At the highest point of a ball thrown upward, velocity is zero but acceleration is still g downward. Zero velocity does not mean zero acceleration.']
]},
{t:'Reading motion graphs', b:[
 ['p','Graphs are the fastest way to understand motion. Learn these three facts and most graph questions become easy.'],
 ['list',['<b>Slope of x–t graph = velocity.</b> A straight line means constant velocity; a curve means changing velocity. A horizontal line means rest.','<b>Slope of v–t graph = acceleration.</b> A straight line means constant (uniform) acceleration.','<b>Area under v–t graph = displacement.</b> Area above the time axis counts positive, below counts negative. Total area (all treated positive) gives distance.','<b>Area under a–t graph = change in velocity.</b>']],
 ['simple','Slope gives you the "next" quantity down (x → v → a). Area gives you the "previous" quantity back (a → v → x).'],
 ['warn','An x–t graph can never show two positions at the same time (no vertical lines or loops), and a real v–t graph cannot have a sudden vertical jump, which would mean infinite acceleration.']
]},
{t:'Equations of motion for uniform acceleration', b:[
 ['p','When acceleration is constant, three equations link initial velocity u, final velocity v, acceleration a, time t and displacement s. Here they are derived simply from a v–t graph.'],
 ['der','First equation: v = u + at',[
   'Acceleration is the slope of the v–t graph: a = (v − u)/t.',
   'Rearranging: v = u + at.']],
 ['der','Second equation: s = ut + ½at²',[
   'Displacement = area under the v–t graph from 0 to t.',
   'That area is a rectangle (height u, width t) plus a triangle (height v − u = at, width t).',
   's = ut + ½(t)(at) = ut + ½at².']],
 ['der','Third equation: v² = u² + 2as',[
   'Area under the graph is a trapezium: s = ½(u + v)t.',
   'From the first equation, t = (v − u)/a.',
   's = ½(u + v)(v − u)/a = (v² − u²)/2a, so v² = u² + 2as.']],
 ['der','Calculus derivation (also asked in exams)',[
   'a = dv/dt ⇒ dv = a dt. Integrating from (0, u) to (t, v): v − u = at.',
   'v = dx/dt ⇒ dx = (u + at) dt. Integrating: x − x₀ = ut + ½at².',
   'a = dv/dt = (dv/dx)(dx/dt) = v dv/dx ⇒ v dv = a dx. Integrating: (v² − u²)/2 = a(x − x₀).']],
 ['eq','s<sub>n</sub> = u + (a/2)(2n − 1) &nbsp;&nbsp;(distance in the nᵗʰ second)'],
 ['ex','A car moving at 72 km/h brakes with a deceleration of 4 m/s². How far does it travel before stopping, and how long does it take?',['u = 72 × 5/18 = 20 m/s, v = 0, a = −4 m/s²','v² = u² + 2as ⇒ 0 = 400 − 8s ⇒ s = 50 m','v = u + at ⇒ 0 = 20 − 4t ⇒ t = 5 s'],'50 m in 5 s'],
 ['warn','These equations work only when acceleration is constant. Always pick a positive direction first, and give every vector (u, v, a, s) its correct sign.']
]},
{t:'Free fall and vertical throws', b:[
 ['p','Near Earth\'s surface, ignoring air resistance, every object falls with the same constant acceleration g ≈ 9.8 m/s² downward. Feathers and hammers fall together in a vacuum, as astronauts showed on the Moon.'],
 ['list',['A body dropped from rest: v = gt, h = ½gt², v² = 2gh.','A body thrown up with speed u: it rises for t = u/g to a maximum height H = u²/2g.','The time to go up equals the time to come down, and it returns to the throwing point with the same speed u, now downward.','Galileo\'s law of odd numbers: in successive equal time intervals from rest, distances fallen are in the ratio 1 : 3 : 5 : 7 …']],
 ['ex','A ball is thrown upward at 20 m/s from the top of a 25 m tall building. When does it hit the ground? (g = 10 m/s²)',['Take up as positive, origin at the ground. y₀ = 25 m, u = +20 m/s, a = −10 m/s²','y = 25 + 20t − 5t² = 0 ⇒ t² − 4t − 5 = 0','(t − 5)(t + 1) = 0 ⇒ t = 5 s (reject the negative root)'],'5 s'],
 ['simple','Treat the whole flight in one equation with signs. You do not need to split it into "going up" and "coming down".']
]},
{t:'Relative velocity in one dimension', b:[
 ['p','Velocity always depends on who is watching. The velocity of A relative to B is how fast A seems to move to someone riding with B:'],
 ['eq','v<sub>AB</sub> = v<sub>A</sub> − v<sub>B</sub>, &nbsp;&nbsp; v<sub>BA</sub> = −v<sub>AB</sub>'],
 ['list',['Same direction: relative speed is the difference of speeds. Overtaking takes a long time.','Opposite directions: relative speed is the sum of speeds. Trains crossing each other pass very quickly.','If v<sub>A</sub> = v<sub>B</sub>, each sees the other at rest, which is why you can pass a cup of tea between two cars moving together.']],
 ['ex','Two trains, each 100 m long, run on parallel tracks at 72 km/h and 54 km/h in the same direction. How long does the faster one take to overtake the other completely?',['Relative speed = 72 − 54 = 18 km/h = 5 m/s','Distance to clear = 100 + 100 = 200 m','Time = 200/5'],'40 s']
]}
],
recap:['Displacement and velocity have direction (sign); distance and speed do not.','Slope of x–t is velocity; slope of v–t is acceleration; area under v–t is displacement.','For constant a: v = u + at, s = ut + ½at², v² = u² + 2as.','In free fall, a = g downward even at the top of the path.','Relative velocity v<sub>AB</sub> = v<sub>A</sub> − v<sub>B</sub>.'],
exam:['Derive the three equations of motion graphically and by calculus.','Interpret or draw x–t and v–t graphs, and find distance from the area under a v–t graph.','Solve stopping distance, vertical throw and overtaking problems.']
});

L('c11-3', {
intro:'In two dimensions, direction becomes central, so we need vectors. Once you can split a vector into components, a projectile or a boat crossing a river becomes two easy one-dimensional problems solved side by side.',
sections:[
{t:'Scalars and vectors', b:[
 ['p','A <b>scalar</b> has only magnitude: mass, time, temperature, energy, speed. Scalars add with ordinary arithmetic. A <b>vector</b> has magnitude and direction: displacement, velocity, acceleration, force, momentum. Vectors are drawn as arrows and printed in bold (<b>A</b>) or with an arrow on top.'],
 ['list',['Two vectors are <b>equal</b> only if they have the same magnitude and the same direction.','Multiplying a vector by a positive number λ stretches it λ times; by a negative number, it also flips direction.','The <b>null (zero) vector</b> has zero magnitude and no definite direction. A + (−A) = 0.','A <b>unit vector</b> Â = <b>A</b>/|<b>A</b>| has magnitude 1 and only shows direction. î, ĵ, k̂ point along x, y, z.']],
 ['warn','Not everything with direction is a vector. Electric current has a direction but adds like a scalar at a junction, so it is a scalar.']
]},
{t:'Adding and subtracting vectors graphically', b:[
 ['p','<b>Triangle law:</b> place the tail of <b>B</b> at the head of <b>A</b>. The arrow from the tail of <b>A</b> to the head of <b>B</b> is <b>A</b> + <b>B</b>. <b>Parallelogram law:</b> place both tails together, complete the parallelogram, and the diagonal from the common tail is the sum. Both give the same answer.'],
 ['list',['Vector addition is commutative: A + B = B + A.','It is associative: (A + B) + C = A + (B + C).','Subtraction is adding the negative: A − B = A + (−B).']],
 ['der','Magnitude and direction of the resultant',[
   'Let A and B make angle θ. Complete the parallelogram; drop a perpendicular from the far corner onto the line of A.',
   'The perpendicular has length B sinθ; the extra length along A is B cosθ.',
   'By Pythagoras: R² = (A + B cosθ)² + (B sinθ)² = A² + B² + 2AB cosθ.',
   'Direction (angle α with A): tanα = B sinθ/(A + B cosθ).']],
 ['eq','R = √(A² + B² + 2AB cosθ), &nbsp; tanα = B sinθ/(A + B cosθ)'],
 ['list',['θ = 0°: R = A + B (maximum).','θ = 180°: R = |A − B| (minimum).','θ = 90°: R = √(A² + B²).']],
 ['ex','Two forces of 5 N and 12 N act at right angles. Find the resultant.',['R = √(25 + 144) = √169','tanα = 12/5 ⇒ α ≈ 67.4° from the 5 N force'],'13 N at about 67° to the 5 N force']
]},
{t:'Resolving vectors into components', b:[
 ['p','Any vector can be split into perpendicular pieces. A vector <b>A</b> of magnitude A at angle θ to the x-axis has components:'],
 ['eq','A<sub>x</sub> = A cosθ, &nbsp; A<sub>y</sub> = A sinθ, &nbsp; <b>A</b> = A<sub>x</sub>î + A<sub>y</sub>ĵ'],
 ['eq','A = √(A<sub>x</sub>² + A<sub>y</sub>²), &nbsp; tanθ = A<sub>y</sub>/A<sub>x</sub>'],
 ['p','The big advantage: to add vectors, just add their components. If <b>R</b> = <b>A</b> + <b>B</b>, then R<sub>x</sub> = A<sub>x</sub> + B<sub>x</sub> and R<sub>y</sub> = A<sub>y</sub> + B<sub>y</sub>. In 3D, add z-components too: A = √(A<sub>x</sub>² + A<sub>y</sub>² + A<sub>z</sub>²).'],
 ['simple','Components are like the "east" and "north" parts of a trip. Add all the east parts, add all the north parts, then rebuild the arrow.'],
 ['ex','Find the resultant of <b>A</b> = 3î + 4ĵ and <b>B</b> = 2î − 7ĵ.',['R = (3 + 2)î + (4 − 7)ĵ = 5î − 3ĵ','|R| = √(25 + 9) = √34 ≈ 5.83','Angle below x-axis: tan⁻¹(3/5) ≈ 31°'],'5î − 3ĵ, magnitude ≈ 5.83']
]},
{t:'Position, velocity and acceleration in a plane', b:[
 ['p','Position in a plane is the vector <b>r</b> = xî + yĵ. Displacement is Δ<b>r</b> = Δxî + Δyĵ. Velocity and acceleration are found the same way as in 1D, component by component:'],
 ['eq','<b>v</b> = d<b>r</b>/dt = v<sub>x</sub>î + v<sub>y</sub>ĵ, &nbsp; <b>a</b> = d<b>v</b>/dt = a<sub>x</sub>î + a<sub>y</sub>ĵ'],
 ['p','The instantaneous velocity is always <b>tangent to the path</b>. Acceleration need not be along the path; it points the way velocity is changing.'],
 ['p','With constant acceleration, the vector equations look just like the 1D ones: <b>v</b> = <b>u</b> + <b>a</b>t and <b>r</b> = <b>r₀</b> + <b>u</b>t + ½<b>a</b>t². Each can be split into an x equation and a y equation that are solved separately. This independence of perpendicular motions is the key idea of the chapter.'],
 ['ex','A particle starts at the origin with velocity 5î m/s and has acceleration (3î + 2ĵ) m/s². Where is it at t = 2 s?',['x = 5(2) + ½(3)(4) = 10 + 6 = 16 m','y = 0 + ½(2)(4) = 4 m'],'r = 16î + 4ĵ m']
]},
{t:'Projectile motion', b:[
 ['p','A <b>projectile</b> is any object thrown into the air and then left to move under gravity alone. Its horizontal motion has no acceleration; its vertical motion has acceleration −g. Launch with speed u at angle θ above the horizontal:'],
 ['list',['Horizontal: u<sub>x</sub> = u cosθ stays constant. x = (u cosθ)t.','Vertical: u<sub>y</sub> = u sinθ, a = −g. y = (u sinθ)t − ½gt², v<sub>y</sub> = u sinθ − gt.']],
 ['der','Path, time of flight, maximum height and range',[
   '<b>Equation of path:</b> from x = (u cosθ)t, t = x/(u cosθ). Substitute into y: y = x tanθ − gx²/(2u²cos²θ). This is a parabola.',
   '<b>Time to the top:</b> v<sub>y</sub> = 0 ⇒ t<sub>m</sub> = u sinθ/g. <b>Total time of flight</b> T = 2t<sub>m</sub> = 2u sinθ/g.',
   '<b>Maximum height:</b> v<sub>y</sub>² = u²sin²θ − 2gH = 0 ⇒ H = u²sin²θ/2g.',
   '<b>Range:</b> R = (u cosθ) × T = (u cosθ)(2u sinθ/g) = u² sin2θ/g.',
   'R is largest when sin2θ = 1, that is θ = 45°: R<sub>max</sub> = u²/g.']],
 ['list',['Angles θ and (90° − θ) give the same range, but the higher angle stays up longer and climbs higher.','At the top, speed is u cosθ (not zero), and acceleration is still g downward.','Horizontally launched from height h: time to fall t = √(2h/g); horizontal distance = u√(2h/g).']],
 ['ex','A cricket ball is thrown at 28 m/s at 30° above the horizontal. Find its maximum height, time of flight and range. (g = 9.8 m/s²)',['H = (28)²(sin30°)²/(2 × 9.8) = 784 × 0.25/19.6 = 10 m','T = 2 × 28 × 0.5/9.8 ≈ 2.9 s','R = 784 × sin60°/9.8 ≈ 784 × 0.866/9.8 ≈ 69 m'],'H = 10 m, T ≈ 2.9 s, R ≈ 69 m'],
 ['warn','Air resistance is ignored. Real balls fall short of these ranges and their best angle is below 45°.']
]},
{t:'Uniform circular motion', b:[
 ['p','An object moving in a circle at constant speed is still accelerating, because its <b>direction</b> keeps changing. That acceleration always points to the centre and is called <b>centripetal acceleration</b>.'],
 ['der','Magnitude of centripetal acceleration',[
   'Take two nearby positions on the circle, separated by a small angle Δθ. The velocity vectors at these points have the same length v but differ in direction by Δθ.',
   'The position vectors form a triangle with sides r, r, |Δr|; the velocity vectors form a similar triangle with sides v, v, |Δv|.',
   'From similar triangles: |Δv|/v = |Δr|/r ⇒ |Δv| = v|Δr|/r.',
   'Divide by Δt and let Δt → 0: a = |Δv|/Δt = (v/r)(|Δr|/Δt) = v × v/r = v²/r.',
   'As Δt → 0, Δv points towards the centre.']],
 ['eq','a<sub>c</sub> = v²/r = ω²r, &nbsp; v = ωr, &nbsp; ω = 2π/T = 2πν'],
 ['list',['Angular displacement θ is measured in radians; angular speed ω = dθ/dt in rad/s.','T is the time for one revolution and ν = 1/T is the frequency.','In uniform circular motion, speed and the magnitude of acceleration are constant, but velocity and acceleration vectors keep changing direction.']],
 ['ex','An insect stuck in a groove of a record 12 cm from the centre turns 7 times in 100 s. Find its angular speed, linear speed and acceleration.',['ν = 7/100 = 0.07 Hz; ω = 2πν ≈ 0.44 rad/s','v = ωr = 0.44 × 0.12 ≈ 0.053 m/s','a = ω²r = 0.19 × 0.12 ≈ 0.023 m/s² towards the centre'],'ω ≈ 0.44 rad/s, v ≈ 5.3 cm/s, a ≈ 2.3 cm/s²']
]},
{t:'Relative velocity in two dimensions', x:true, b:[
 ['p','The 1D rule extends directly to vectors: <b>v</b><sub>AB</sub> = <b>v</b><sub>A</sub> − <b>v</b><sub>B</sub>. Draw both vectors, reverse the one you are subtracting, and add.'],
 ['p','<b>Rain and umbrella:</b> rain falls vertically at v<sub>r</sub>, and you walk at v<sub>m</sub>. Relative to you, rain velocity is <b>v</b><sub>r</sub> − <b>v</b><sub>m</sub>, which comes slanting towards you at angle tan⁻¹(v<sub>m</sub>/v<sub>r</sub>) from the vertical. Tilt the umbrella forward by that angle.'],
 ['p','<b>Boat and river:</b> a boat with speed v<sub>b</sub> in still water crosses a river of width d flowing at v<sub>w</sub>. Pointing straight across gives the shortest time t = d/v<sub>b</sub> but drifts downstream by v<sub>w</sub>t. To land straight opposite, aim upstream at angle sinα = v<sub>w</sub>/v<sub>b</sub>.'],
 ['ex','Rain falls vertically at 35 m/s. A woman rides a bicycle east at 12 m/s. Which way should she hold her umbrella?',['Rain relative to her = v<sub>r</sub> − v<sub>w</sub>: 35 m/s down and 12 m/s westward','tanθ = 12/35 ⇒ θ ≈ 19°'],'Tilt it about 19° from the vertical towards the east (forward)']
]}
],
recap:['Vectors add by the triangle or parallelogram law: R² = A² + B² + 2AB cosθ.','Split vectors into components; add components separately.','A projectile = constant horizontal velocity + free fall vertically. R = u²sin2θ/g, H = u²sin²θ/2g, T = 2u sinθ/g.','Uniform circular motion has centripetal acceleration v²/r towards the centre.'],
exam:['Derive the equation of the trajectory, time of flight, maximum height and range of a projectile.','Derive the expression for centripetal acceleration.','Show that ranges for θ and 90° − θ are equal.','Find the resultant of two vectors and its direction.']
});

L('c11-4', {
intro:'Kinematics described motion; dynamics explains it. Newton\'s three laws connect force to change in motion. With them, plus friction and a careful free-body diagram, you can analyse lifts, ramps, pulleys, collisions and cars turning corners.',
sections:[
{t:'Aristotle\'s mistake and Galileo\'s insight', b:[
 ['p','For centuries people followed Aristotle\'s idea that a force is needed to keep anything moving. Everyday experience seems to agree: stop pedalling and a bicycle slows down. Galileo realised the bicycle slows because friction and air resistance are forces acting on it.'],
 ['p','Galileo rolled balls down one incline and up another. The ball always rose to nearly its starting height. As he made the second slope gentler, it rolled farther. With a horizontal second surface and no friction, it would roll forever. Conclusion: <b>no force is needed to keep a body moving at constant velocity</b>. A force is needed only to <b>change</b> velocity.'],
 ['simple','Motion doesn\'t need a push. Changing motion does.']
]},
{t:'Newton\'s first law and inertia', b:[
 ['p','<b>First law:</b> every body continues in its state of rest or of uniform motion in a straight line unless a net external force acts on it. The tendency to resist change in motion is <b>inertia</b>, and mass is its measure.'],
 ['list',['Passengers fall forward when a bus brakes suddenly: their bodies tend to keep moving.','Dust leaves a carpet when you beat it: the carpet moves, the dust tends to stay.','A coin on a card over a glass drops into the glass when the card is flicked away.','In space, a spacecraft with engines off keeps moving at constant velocity.']],
 ['p','The first law also defines an <b>inertial frame</b>: a frame (non-accelerating) in which a body with no net force stays at rest or moves uniformly. Newton\'s laws hold in inertial frames.'],
 ['warn','The first law is about <b>net</b> force. A book resting on a table has two forces (weight and normal force), but they balance, so it stays at rest.']
]},
{t:'Momentum and Newton\'s second law', b:[
 ['p','<b>Momentum</b> <b>p</b> = m<b>v</b> combines mass and velocity. A heavy truck and a fast bullet are both hard to stop because both have large momentum.'],
 ['p','<b>Second law:</b> the rate of change of momentum of a body equals the net external force on it, and is in the direction of the force.'],
 ['der','From F = dp/dt to F = ma',[
   '<b>F</b> = d<b>p</b>/dt = d(m<b>v</b>)/dt.',
   'If the mass is constant: <b>F</b> = m d<b>v</b>/dt = m<b>a</b>.',
   'In component form: F<sub>x</sub> = ma<sub>x</sub>, F<sub>y</sub> = ma<sub>y</sub>, F<sub>z</sub> = ma<sub>z</sub>. Each direction can be treated separately.']],
 ['eq','<b>F</b> = d<b>p</b>/dt = m<b>a</b> &nbsp;&nbsp;(1 N = 1 kg m s⁻²)'],
 ['list',['If F = 0, then a = 0: the first law is contained in the second.','The law is local: the force at a point and time decides the acceleration at that point and time.','Acceleration responds instantly to force. A stone dropped from an accelerating train has, the moment it leaves, only gravity acting on it.']],
 ['ex','A bullet of mass 0.04 kg moving at 90 m/s enters a wooden block and stops after 60 cm. What is the average resistive force?',['v² = u² + 2as ⇒ 0 = 8100 + 2a(0.6) ⇒ a = −6750 m/s²','F = ma = 0.04 × 6750'],'270 N, opposing the motion']
]},
{t:'Impulse', b:[
 ['p','A large force acting for a very short time (a bat hitting a ball, a hammer on a nail) is hard to measure directly, but its effect, the change in momentum, is easy to measure. That product is the <b>impulse</b>:'],
 ['eq','<b>J</b> = <b>F</b><sub>avg</sub> Δt = Δ<b>p</b> = m<b>v</b> − m<b>u</b>'],
 ['p','For a fixed change in momentum, a longer stopping time means a smaller force. That is why we bend our knees when landing, why cricketers pull their hands back while catching, and why cars have crumple zones and airbags.'],
 ['ex','A batsman hits a 0.15 kg ball back along its path with the same speed of 12 m/s. What impulse does the bat give the ball?',['Δp = m(v − u) = 0.15 × (12 − (−12))'],'3.6 N s, directed back towards the bowler'],
 ['simple','You cannot change how much momentum must change. You can choose to change it slowly, which is gentler.']
]},
{t:'Newton\'s third law', b:[
 ['p','<b>Third law:</b> to every action there is always an equal and opposite reaction. When A pushes B, B pushes A back with a force of equal size, along the same line, in the opposite direction.'],
 ['list',['Action and reaction act on <b>different bodies</b>, so they never cancel each other.','They act at the same instant; neither causes the other.','They are always the same type of force (both gravitational, both contact, and so on).']],
 ['p','Examples: you walk because your foot pushes the ground backward and the ground pushes you forward. A rocket pushes gases out backward; the gases push the rocket forward. A swimmer pushes water back.'],
 ['warn','A book on a table: weight (Earth pulls book) and normal force (table pushes book) are <b>not</b> an action–reaction pair, even though they are equal and opposite here. Both act on the book. The partner of the weight is the book pulling Earth upward.']
]},
{t:'Conservation of momentum', b:[
 ['der','Deriving conservation of momentum from the third law',[
   'Two bodies A and B interact (collide, push apart) for a time Δt. A exerts F<sub>AB</sub> on B; B exerts F<sub>BA</sub> on A.',
   'By the second law: F<sub>AB</sub>Δt = Δp<sub>B</sub> and F<sub>BA</sub>Δt = Δp<sub>A</sub>.',
   'By the third law: F<sub>AB</sub> = −F<sub>BA</sub>, so Δp<sub>A</sub> = −Δp<sub>B</sub>.',
   'Therefore Δp<sub>A</sub> + Δp<sub>B</sub> = 0: the total momentum p<sub>A</sub> + p<sub>B</sub> does not change.']],
 ['p','<b>Law:</b> the total momentum of an isolated system of interacting particles is constant. Internal forces can move momentum between parts of a system, but cannot change the total.'],
 ['ex','A 4 kg gun fires a 0.02 kg bullet at 400 m/s. What is the recoil velocity of the gun?',['Initial momentum = 0','0 = (0.02)(400) + 4V ⇒ V = −8/4'],'2 m/s backward']
]},
{t:'Equilibrium of a particle and common forces', b:[
 ['p','A particle is in <b>equilibrium</b> when the net force on it is zero. For several concurrent forces: F₁ + F₂ + F₃ + … = 0, which means the x-components and y-components separately add to zero. Three forces in equilibrium can be drawn head-to-tail as a closed triangle.'],
 ['list',['<b>Weight</b> mg: Earth\'s pull, acting downward.','<b>Normal force</b> N: a surface pushes perpendicular to itself; it adjusts to whatever is needed to stop the body sinking in.','<b>Tension</b> T: the pull of a string, rope or chain along its length. For a light (massless) string, tension is the same throughout.','<b>Friction</b> f: a surface\'s push along itself, opposing (attempted) sliding.','<b>Spring force</b> −kx: pulls back towards the natural length.']],
 ['p','<b>Free-body diagrams</b> are the key skill. Isolate one body. Draw every force acting <b>on it</b> (not the forces it exerts). Choose axes, often along and perpendicular to the motion. Write F<sub>net</sub> = ma along each axis.'],
 ['ex','A 6 kg mass hangs from a rope. A horizontal force of 50 N pulls it aside until the rope makes an angle θ with the vertical. Find θ and the tension.',['Vertical: T cosθ = mg = 60 N (g = 10)','Horizontal: T sinθ = 50 N','tanθ = 50/60 ⇒ θ ≈ 40°; T = √(60² + 50²)'],'θ ≈ 40°, T ≈ 78 N'],
 ['ex','A 60 kg man stands on a scale in a lift. What does the scale read when the lift accelerates upward at 2 m/s²? (g = 10 m/s²)',['N − mg = ma ⇒ N = m(g + a) = 60 × 12'],'720 N (he feels heavier)']
]},
{t:'Connected bodies and pulleys', x:true, b:[
 ['p','When bodies are tied together by a light inextensible string, they share the same magnitude of acceleration. Write a separate free-body equation for each, then solve them together. Alternatively, treat the whole system as one body to find the acceleration first.'],
 ['der','Atwood machine (two masses over a pulley)',[
   'Masses m₁ > m₂ hang on either side of a light frictionless pulley. m₁ moves down, m₂ up, both with acceleration a; string tension T.',
   'For m₁: m₁g − T = m₁a. For m₂: T − m₂g = m₂a.',
   'Adding: (m₁ − m₂)g = (m₁ + m₂)a ⇒ a = (m₁ − m₂)g/(m₁ + m₂).',
   'Substituting back: T = 2m₁m₂g/(m₁ + m₂).']],
 ['ex','Two blocks of 3 kg and 2 kg on a frictionless table are pushed by 10 N applied to the 3 kg block. Find the force between them.',['Whole system: a = 10/5 = 2 m/s²','On the 2 kg block only the contact force acts: F = 2 × 2'],'4 N']
]},
{t:'Friction', b:[
 ['p','<b>Friction</b> is the force between two surfaces in contact that opposes relative sliding. It comes from microscopic bumps and molecular attraction between the surfaces.'],
 ['p','<b>Static friction</b> acts when there is no sliding. It is self-adjusting: push a heavy box gently and friction matches your push exactly. It has a maximum value called <b>limiting friction</b>: f<sub>s,max</sub> = μ<sub>s</sub>N. Once sliding begins, <b>kinetic friction</b> f<sub>k</sub> = μ<sub>k</sub>N acts, and μ<sub>k</sub> is usually a little less than μ<sub>s</sub>. That is why it is harder to start a box moving than to keep it moving.'],
 ['list',['Friction depends on the nature of the surfaces and the normal force, but (to a good approximation) not on the area of contact.','Rolling friction is much smaller than sliding friction, which is why wheels and ball bearings are used.','Friction is often useful: walking, braking, gripping and writing all need it. Lubricants and polishing reduce it where it wastes energy.']],
 ['der','Angle of repose',[
   'Place a block on an incline and slowly raise the angle. Forces: mg sinθ down the slope, normal force N = mg cosθ, friction up the slope.',
   'Just before it slips, friction is at its limit: mg sinθ = μ<sub>s</sub> mg cosθ.',
   'So μ<sub>s</sub> = tanθ<sub>r</sub>, where θ<sub>r</sub> is the angle of repose.']],
 ['der','Acceleration of a block sliding down a rough incline',[
   'Along the slope: mg sinθ − μ<sub>k</sub>N = ma; perpendicular: N = mg cosθ.',
   'a = g(sinθ − μ<sub>k</sub>cosθ).']],
 ['ex','A box on a truck bed has μ<sub>s</sub> = 0.15. What is the largest acceleration the truck can have without the box sliding?',['Friction is the only horizontal force on the box: μ<sub>s</sub>mg ≥ ma','a<sub>max</sub> = μ<sub>s</sub>g = 0.15 × 10'],'1.5 m/s²']
]},
{t:'Circular motion: level and banked roads', b:[
 ['p','To move in a circle, a body needs a net force mv²/r towards the centre. This "centripetal force" is not a new kind of force; it is supplied by tension, gravity, friction or a normal force.'],
 ['der','Car on a level circular road',[
   'Only friction can push the car towards the centre: f = mv²/r.',
   'Friction cannot exceed μ<sub>s</sub>N = μ<sub>s</sub>mg. So mv²/r ≤ μ<sub>s</sub>mg.',
   'v<sub>max</sub> = √(μ<sub>s</sub>rg). It does not depend on the car\'s mass.']],
 ['der','Car on a banked road (angle θ)',[
   'Forces: weight mg down, normal force N perpendicular to the road, friction f down the slope (when the car tends to slide outward at high speed).',
   'Vertical: N cosθ = mg + f sinθ. Horizontal (towards centre): N sinθ + f cosθ = mv²/r.',
   'At maximum speed f = μ<sub>s</sub>N. Dividing the equations: v<sub>max</sub>² = rg(μ<sub>s</sub> + tanθ)/(1 − μ<sub>s</sub>tanθ).',
   'With no friction needed at all (f = 0): v<sub>0</sub> = √(rg tanθ), the <b>optimum speed</b>. At this speed tyres wear least.']],
 ['ex','A circular race track of radius 300 m is banked at 15°. With μ<sub>s</sub> = 0.2, find the optimum speed and the maximum safe speed.',['v₀ = √(300 × 9.8 × tan15°) = √(300 × 9.8 × 0.268) ≈ 28 m/s','v<sub>max</sub> = √[300 × 9.8 × (0.2 + 0.268)/(1 − 0.2 × 0.268)] ≈ √(1376/0.946) ≈ 38 m/s'],'v₀ ≈ 28 m/s, v<sub>max</sub> ≈ 38 m/s'],
 ['warn','There is no outward "centrifugal force" acting on the car in an inertial frame. Passengers feel pushed outward only because their bodies tend to go straight while the car turns.']
]}
],
recap:['First law: no net force means no change in velocity (inertia).','Second law: F = dp/dt = ma; impulse = FΔt = Δp.','Third law: forces come in equal and opposite pairs on different bodies.','Momentum of an isolated system is conserved.','Static friction self-adjusts up to μ<sub>s</sub>N; kinetic friction is μ<sub>k</sub>N.','Circular motion needs a net inward force mv²/r; banking supplies it.'],
exam:['State Newton\'s laws and show that the second law contains the first and third.','Derive conservation of momentum from the second and third laws.','Derive the maximum speed on a level and on a banked road.','Solve lift, incline, pulley and recoil problems using free-body diagrams.']
});

L('c11-5', {
intro:'Energy is the one quantity physics never loses track of. This chapter defines work done by a force, shows how work changes kinetic energy, introduces potential energy for gravity and springs, and uses energy and momentum together to understand collisions.',
sections:[
{t:'The scalar (dot) product', b:[
 ['p','Work needs a way to multiply two vectors that gives a scalar. The <b>scalar product</b> of <b>A</b> and <b>B</b> is:'],
 ['eq','<b>A</b>·<b>B</b> = AB cosθ = A<sub>x</sub>B<sub>x</sub> + A<sub>y</sub>B<sub>y</sub> + A<sub>z</sub>B<sub>z</sub>'],
 ['list',['It is the magnitude of one vector times the component of the other along it.','It is commutative (A·B = B·A) and distributive (A·(B + C) = A·B + A·C).','î·î = ĵ·ĵ = k̂·k̂ = 1 and î·ĵ = ĵ·k̂ = k̂·î = 0.','A·B = 0 for perpendicular vectors; A·A = A².']],
 ['ex','Find the angle between F = (3î + 4ĵ − 5k̂) and d = (5î + 4ĵ + 3k̂).',['F·d = 15 + 16 − 15 = 16','|F| = |d| = √50','cosθ = 16/50 = 0.32'],'θ ≈ 71°']
]},
{t:'Work', b:[
 ['p','In physics, <b>work</b> is done when a force moves its point of application and has a component along the displacement:'],
 ['eq','W = <b>F</b>·<b>d</b> = Fd cosθ &nbsp;&nbsp;(1 J = 1 N m)'],
 ['list',['θ < 90°: positive work (force helps the motion), such as gravity on a falling ball.','θ = 90°: zero work, such as a porter carrying a load horizontally, or the centripetal force in circular motion.','θ > 90°: negative work (force opposes the motion), such as friction on a sliding block or gravity on a rising ball.','No displacement means no work: pushing hard against a wall does no work on the wall, however tired you get.']],
 ['p','For a <b>variable force</b>, split the path into tiny pieces and add the small amounts of work. This becomes an integral, equal to the area under the force–displacement graph:'],
 ['eq','W = ∫<sub>x₁</sub><sup>x₂</sup> F(x) dx'],
 ['simple','Work is "force times how far you moved in the direction of the force".'],
 ['ex','A cyclist brakes and skids 10 m. The road exerts a 200 N force opposing the motion. How much work does the road do on the cycle?',['θ = 180°, so W = Fd cos180°'],'W = −2000 J (negative: it removes kinetic energy)']
]},
{t:'Kinetic energy and the work–energy theorem', b:[
 ['p','<b>Kinetic energy</b> is energy of motion: K = ½mv². It is a scalar and is never negative.'],
 ['der','Work–energy theorem',[
   'For constant force and acceleration: v² − u² = 2as.',
   'Multiply by m/2: ½mv² − ½mu² = mas = Fs.',
   'So the work done by the net force equals the change in kinetic energy: W<sub>net</sub> = K<sub>f</sub> − K<sub>i</sub>.',
   'General proof: W = ∫F dx = ∫m(dv/dt)dx = ∫m v dv = ½mv² − ½mu². So it also holds for variable forces.']],
 ['eq','W<sub>net</sub> = ΔK = ½mv² − ½mu², &nbsp; K = p²/2m'],
 ['ex','A 50 g bullet at 200 m/s passes through a 2 cm wooden plank and leaves at 100 m/s. Find the average resistive force.',['ΔK = ½ × 0.05 × (100² − 200²) = −750 J','W = −F × 0.02 = −750'],'F = 3.75 × 10⁴ N'],
 ['warn','The theorem uses the work done by the <b>net</b> force, which includes friction and every other force, not just the applied force.']
]},
{t:'Potential energy and conservative forces', b:[
 ['p','<b>Potential energy</b> U is energy stored because of position or configuration. It can be defined only for <b>conservative forces</b>: forces whose work between two points does not depend on the path taken. Gravity and spring forces are conservative. Friction and air drag are not.'],
 ['list',['For a conservative force, work around any closed path is zero.','The change in potential energy equals the negative of the work done by the force: ΔU = −W, and F = −dU/dx.','Only changes in U matter physically, so you can choose where U = 0.']],
 ['der','Gravitational potential energy near the surface',[
   'Raise a mass m slowly through height h. Gravity (force mg downward) does work −mgh.',
   'So ΔU = −W = +mgh. With U = 0 at the ground: U = mgh.',
   'Check: F = −dU/dh = −mg, a downward force. ✓']],
 ['simple','Potential energy is like money in a savings account: work done against gravity is deposited, and you get it back when the object falls.']
]},
{t:'Conservation of mechanical energy', b:[
 ['der','Why K + U stays constant',[
   'If only conservative forces act, the work done by them equals the change in kinetic energy: W = ΔK.',
   'But for conservative forces W = −ΔU.',
   'So ΔK = −ΔU, which means ΔK + ΔU = 0, and K + U = constant.']],
 ['p','<b>Principle:</b> the total mechanical energy of a system stays constant if only conservative forces do work. With friction, some mechanical energy becomes heat, but total energy (including heat, sound, light) is still conserved.'],
 ['der','Free fall: energy at three points',[
   'Drop a ball of mass m from height H.',
   'At the top: K = 0, U = mgH, E = mgH.',
   'At height h: v² = 2g(H − h), so K = mg(H − h), U = mgh, and E = mgH.',
   'At the ground: K = mgH, U = 0, E = mgH. Energy has only changed form.']],
 ['ex','A pendulum bob is released from rest 20 cm above its lowest point. How fast is it moving at the bottom?',['mgh = ½mv² ⇒ v = √(2gh)','v = √(2 × 9.8 × 0.2)'],'≈ 1.98 m/s'],
 ['der','Vertical circle: minimum speed at the bottom',[
   'A bob on a string of length L moves in a vertical circle. At the top, the string can just go slack: T = 0, so mg = mv<sub>top</sub>²/L ⇒ v<sub>top</sub>² = gL.',
   'Energy from bottom to top (rise 2L): ½mv<sub>bottom</sub>² = ½mv<sub>top</sub>² + mg(2L).',
   'v<sub>bottom</sub>² = gL + 4gL = 5gL, so v<sub>bottom</sub> ≥ √(5gL) to complete the circle.']]
]},
{t:'Potential energy of a spring', b:[
 ['p','An ideal spring pulls back with a force proportional to how far it is stretched or compressed: F = −kx (<b>Hooke\'s law</b>). k is the <b>spring constant</b> in N/m; a stiffer spring has a larger k.'],
 ['der','Energy stored in a spring',[
   'The force needed to stretch the spring slowly is +kx. Work done from 0 to x is the area under the F–x graph, a triangle.',
   'W = ½ × x × kx = ½kx². This is stored as potential energy.',
   'By calculus: W = ∫₀<sup>x</sup> kx dx = ½kx².']],
 ['eq','U = ½kx², &nbsp; F = −kx'],
 ['p','A block on a spring trades energy back and forth: all potential at maximum stretch, all kinetic as it passes the natural length. With amplitude x<sub>m</sub>, ½kx<sub>m</sub>² = ½mv<sub>max</sub>².'],
 ['ex','A 1000 kg car hits a buffer spring at 18 km/h. The spring has k = 6.25 × 10³ N/m. Find its maximum compression.',['v = 5 m/s; K = ½ × 1000 × 25 = 12500 J','½kx² = 12500 ⇒ x² = 4'],'x = 2 m']
]},
{t:'Other forms of energy and power', b:[
 ['p','Mechanical energy is only one form. Heat (random molecular motion), chemical energy (bonds in fuel and food), electrical energy, nuclear energy and light are others. In every process energy changes form, but the total is conserved. Einstein showed that mass is also a form of energy: E = mc².'],
 ['p','<b>Power</b> is the rate of doing work or transferring energy:'],
 ['eq','P<sub>avg</sub> = W/t, &nbsp; P = dW/dt = <b>F</b>·<b>v</b> &nbsp;&nbsp;(1 W = 1 J/s)'],
 ['list',['1 horsepower (hp) = 746 W.','1 kilowatt-hour (kWh, the "unit" on electricity bills) = 1000 W × 3600 s = 3.6 × 10⁶ J. It is a unit of energy, not power.','Efficiency = useful output ÷ total input. It is always less than 100%.']],
 ['ex','A lift carrying a total mass of 1800 kg moves up at 2 m/s against a friction force of 4000 N. What minimum power must the motor deliver?',['Force needed = mg + friction = 1800 × 10 + 4000 = 22000 N','P = Fv = 22000 × 2'],'44 kW ≈ 59 hp']
]},
{t:'Collisions', b:[
 ['p','In every collision, <b>momentum is conserved</b> (collision forces are internal and very large compared with outside forces). Kinetic energy may or may not be conserved:'],
 ['list',['<b>Elastic collision:</b> both momentum and kinetic energy are conserved (collisions of atoms, nearly so for billiard balls).','<b>Inelastic collision:</b> momentum is conserved but some kinetic energy turns into heat, sound or deformation.','<b>Perfectly inelastic collision:</b> the bodies stick together. Maximum kinetic energy is lost.']],
 ['der','Elastic collision in one dimension (m₂ initially at rest)',[
   'Momentum: m₁u₁ = m₁v₁ + m₂v₂.',
   'Kinetic energy: ½m₁u₁² = ½m₁v₁² + ½m₂v₂².',
   'Rewrite: m₁(u₁ − v₁) = m₂v₂ and m₁(u₁² − v₁²) = m₂v₂². Divide: u₁ + v₁ = v₂.',
   'Solve: v₁ = (m₁ − m₂)u₁/(m₁ + m₂), v₂ = 2m₁u₁/(m₁ + m₂).']],
 ['list',['Equal masses: v₁ = 0, v₂ = u₁. The balls swap velocities (Newton\'s cradle).','Heavy hits light (m₁ ≫ m₂): v₁ ≈ u₁, v₂ ≈ 2u₁.','Light hits heavy (m₁ ≪ m₂): v₁ ≈ −u₁ (bounces back), v₂ ≈ 0, like a ball off a wall.']],
 ['der','Perfectly inelastic collision: kinetic energy lost',[
   'Common velocity: v = m₁u₁/(m₁ + m₂) (with m₂ at rest).',
   'KE lost = ½m₁u₁² − ½(m₁ + m₂)v² = ½m₁u₁² × m₂/(m₁ + m₂).']],
 ['p','<b>Collisions in two dimensions:</b> momentum is conserved separately along x and along y. For an elastic glancing collision of equal masses with one at rest, the two bodies move off at 90° to each other.'],
 ['ex','A 0.5 kg ball at 4 m/s hits a 1.5 kg ball at rest and they stick. Find their common speed and the KE lost.',['v = 0.5 × 4/(0.5 + 1.5) = 1 m/s','KE before = ½ × 0.5 × 16 = 4 J; after = ½ × 2 × 1 = 1 J'],'1 m/s; 3 J lost'],
 ['simple','Momentum is always conserved in a collision. Kinetic energy is conserved only if nothing gets squashed, heated or makes a noise.']
]}
],
recap:['W = Fd cosθ; for variable force W = ∫F dx = area under F–x graph.','Work–energy theorem: W<sub>net</sub> = ΔK.','U = mgh near Earth, ½kx² for a spring; F = −dU/dx for conservative forces.','If only conservative forces act, K + U is constant.','Power P = dW/dt = F·v.','Collisions always conserve momentum; elastic ones also conserve KE.'],
exam:['State and prove the work–energy theorem (constant and variable force).','Show that mechanical energy is conserved in free fall.','Derive the potential energy of a spring.','Derive final velocities in a 1D elastic collision and discuss the special cases.','Minimum speed for a bob to complete a vertical circle.']
});
})();
