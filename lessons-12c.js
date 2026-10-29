/* Full lessons — Class 12, Chapters 11–14. Original explanations written for NCERT Physics Lab. */
(function(){
const L = (id, o) => { (window.LESSONS = window.LESSONS || {})[id] = o; };

L('c12-11', {
intro:'By 1900, light was firmly a wave. Then experiments showed light knocking electrons out of metals in a way no wave could explain. Einstein\'s answer, that light comes in packets called photons, was followed by de Broglie\'s even bolder idea: particles like electrons also behave as waves.',
sections:[
{t:'Electron emission', b:[
 ['p','Metals contain free electrons, but they are held inside by the attraction of the positive ions. To pull an electron out of the surface, a minimum energy must be supplied. This is the <b>work function</b> φ₀ of the metal, usually measured in electron volts (1 eV = 1.6 × 10⁻¹⁹ J).'],
 ['list',['<b>Thermionic emission:</b> heating gives electrons enough thermal energy to escape, as in old vacuum tubes and electron guns.','<b>Field emission:</b> a very strong electric field (about 10⁸ V/m) pulls electrons out, as in spark plugs.','<b>Photoelectric emission:</b> light of high enough frequency knocks electrons out.']],
 ['tbl',['Metal','Work function (eV)','Metal','Work function (eV)'],[['Caesium','2.14','Calcium','3.20'],['Potassium','2.30','Copper','4.65'],['Sodium','2.75','Nickel','5.15'],['Molybdenum','4.17','Platinum','5.65']]]
]},
{t:'The photoelectric effect: what experiments show', b:[
 ['p','Hertz (1887) noticed that sparks jumped more easily when UV light shone on his electrodes. Hallwachs and Lenard then studied it carefully. In a typical setup, light falls on a metal plate (the emitter) in an evacuated tube. Electrons released travel to a collector plate, and the current is measured while the voltage between the plates is varied.'],
 ['list',['<b>Intensity and current:</b> above the threshold frequency, the photocurrent is directly proportional to the intensity of light. More light means more electrons per second.','<b>Saturation current:</b> as the collector is made more positive, the current rises to a maximum (all emitted electrons collected). This saturation value grows with intensity.','<b>Stopping potential:</b> making the collector negative slows the electrons. At a certain retarding voltage V₀, even the fastest are stopped and the current becomes zero. So the maximum kinetic energy of photoelectrons is K<sub>max</sub> = eV₀.','<b>V₀ does not depend on intensity:</b> brighter light of the same colour gives more electrons but not faster ones.','<b>V₀ increases linearly with frequency</b>, and the graph of V₀ against ν has the same slope for every metal.','<b>Threshold frequency:</b> below a certain frequency ν₀, which depends on the metal, no electrons are emitted at all, however intense the light.','<b>No time lag:</b> emission starts within about 10⁻⁹ s of switching on the light, even for very dim light.']]
]},
{t:'Why the wave theory fails', b:[
 ['list',['A wave\'s energy is spread over its wavefront and grows with intensity. So brighter light should give faster electrons, but it does not.','Any frequency of light, if bright enough, should eventually give electrons enough energy to escape. But below ν₀ nothing is ever emitted.','With dim light, a wave would take a long time (hours, by calculation) to deliver enough energy to one electron. But emission is instantaneous.']],
 ['p','Each prediction of the wave picture is contradicted by experiment. A new idea was needed.']
]},
{t:'Einstein\'s photoelectric equation', b:[
 ['p','In 1905 Einstein proposed that light energy is not spread smoothly but comes in discrete packets, or <b>quanta</b>, each of energy hν. A photoelectron is produced when one quantum is absorbed completely by one electron. Part of the energy, φ₀, frees the electron from the metal; the rest becomes its kinetic energy:'],
 ['eq','K<sub>max</sub> = hν − φ₀ = eV₀'],
 ['list',['<b>Threshold:</b> emission needs hν ≥ φ₀, so ν₀ = φ₀/h. Below it, no single photon has enough energy.','<b>K<sub>max</sub> depends on frequency only:</b> each electron gets one photon\'s energy, however many photons there are.','<b>Intensity sets the number of photons</b> per second, and so the number of electrons and the current.','<b>No delay:</b> absorption of a single photon is instantaneous.','<b>Graph:</b> V₀ = (h/e)ν − φ₀/e is a straight line of slope h/e for every metal. Millikan measured this slope in 1916 and found h = 6.6 × 10⁻³⁴ J s, confirming Einstein\'s theory.']],
 ['eq','E = hν = hc/λ, &nbsp; E(eV) ≈ 1240/λ(nm)'],
 ['ex','Light of wavelength 400 nm falls on potassium (φ₀ = 2.30 eV). Find K<sub>max</sub>, the stopping potential and the threshold wavelength.',['Photon energy = 1240/400 = 3.10 eV','K<sub>max</sub> = 3.10 − 2.30 = 0.80 eV ⇒ V₀ = 0.80 V','λ₀ = 1240/2.30 ≈ 539 nm'],'0.80 eV; 0.80 V; λ₀ ≈ 539 nm']
]},
{t:'The photon', b:[
 ['list',['In its interaction with matter, light behaves as if made of particles called photons.','Each photon has energy E = hν and momentum p = hν/c = h/λ, and travels at c in vacuum.','All photons of a given frequency have the same energy and momentum, whatever the intensity. Intensity only changes the number of photons crossing an area per second.','Photons are electrically neutral and are not deflected by electric or magnetic fields.','In collisions with particles (such as electrons), total energy and total momentum are conserved, though photons may be absorbed or created.','A photon has zero rest mass.']],
 ['ex','How many photons per second does a 10 W sodium lamp emit at 589 nm (assuming all its power becomes light)?',['Energy per photon = hc/λ = 6.63 × 10⁻³⁴ × 3 × 10⁸/(589 × 10⁻⁹) ≈ 3.38 × 10⁻¹⁹ J','N = 10/3.38 × 10⁻¹⁹'],'≈ 3 × 10¹⁹ photons per second']
]},
{t:'Wave nature of matter: de Broglie\'s hypothesis', b:[
 ['p','Light behaves as a wave in interference and diffraction, and as particles in the photoelectric effect. In 1924 Louis de Broglie suggested that nature is symmetric: moving material particles should also behave as waves. The wavelength associated with a particle of momentum p is:'],
 ['eq','λ = h/p = h/mv'],
 ['list',['For everyday objects the wavelength is absurdly small. A 0.12 kg ball at 20 m/s has λ ≈ 2.8 × 10⁻³⁴ m: no experiment could detect it.','For electrons, it is comparable to the spacing of atoms in crystals, so their wave nature shows up clearly.','A particle with kinetic energy K has p = √(2mK), so λ = h/√(2mK).']],
 ['der','Wavelength of an electron accelerated through V volts',[
   'Kinetic energy gained K = eV, so p = √(2meV).',
   'λ = h/√(2meV) = 6.63 × 10⁻³⁴/√(2 × 9.11 × 10⁻³¹ × 1.6 × 10⁻¹⁹ × V).',
   'λ = 1.227/√V nm.',
   'For V = 100 V: λ ≈ 0.123 nm, similar to X-ray wavelengths.']],
 ['eq','λ<sub>electron</sub> = 1.227/√V nm'],
 ['ex','Compare the de Broglie wavelengths of an electron and a proton moving with the same kinetic energy.',['λ = h/√(2mK), so λ ∝ 1/√m','λ<sub>e</sub>/λ<sub>p</sub> = √(m<sub>p</sub>/m<sub>e</sub>) = √1836'],'The electron\'s wavelength is about 43 times longer'],
 ['p','Matter waves are the basis of the <b>electron microscope</b>: electrons accelerated through tens of kilovolts have wavelengths far shorter than light, so they reveal much finer detail. Wave–particle duality is at the heart of quantum mechanics.']
]},
{t:'The Davisson–Germer experiment', x:true, b:[
 ['p','In 1927 Davisson and Germer fired a beam of electrons accelerated through 54 V at a nickel crystal and measured how many scattered electrons came off at each angle. They found a sharp peak at 50°. The rows of atoms in the crystal acted like a diffraction grating for the electron waves.'],
 ['p','From the crystal spacing, the peak corresponds to a wavelength of 0.165 nm. De Broglie\'s formula predicts 1.227/√54 ≈ 0.167 nm, a striking agreement. This was the first direct proof that electrons behave as waves.']
]}
],
recap:['Work function φ₀ is the minimum energy to free an electron.','Photocurrent ∝ intensity; V₀ depends on frequency, not intensity; no emission below ν₀; no time lag.','Einstein: K<sub>max</sub> = hν − φ₀ = eV₀; V₀–ν graph slope = h/e.','Photon: E = hν, p = h/λ.','de Broglie: λ = h/p = h/√(2mK); for electrons λ = 1.227/√V nm.'],
exam:['State the experimental laws of the photoelectric effect and explain why wave theory fails.','Derive and use Einstein\'s photoelectric equation; interpret the V₀–ν and current–voltage graphs.','State de Broglie\'s hypothesis; derive the wavelength of an electron accelerated through V volts.']
});

L('c12-12', {
intro:'What does an atom look like inside? The answer came in steps: Thomson\'s plum pudding, Rutherford\'s tiny nucleus, and Bohr\'s quantised orbits. Bohr\'s model finally explained why hydrogen glows only at certain sharp wavelengths.',
sections:[
{t:'Early models of the atom', b:[
 ['p','By 1900 it was known that atoms are electrically neutral and contain negatively charged electrons. J.J. Thomson proposed that an atom is a uniform sphere of positive charge with electrons embedded in it, like seeds in a watermelon (the "plum pudding" model).'],
 ['p','Atoms of a heated gas emit light only at certain wavelengths, giving a <b>line spectrum</b> unique to each element, like a fingerprint. Cool gas absorbs the same wavelengths, giving dark lines in an otherwise continuous spectrum. Any successful model had to explain these lines.']
]},
{t:'Alpha-particle scattering and Rutherford\'s nuclear model', b:[
 ['p','In 1911 Rutherford suggested an experiment, carried out by Geiger and Marsden. A narrow beam of fast alpha particles (5.5 MeV, from radioactive bismuth) was aimed at a very thin gold foil (about 2 × 10⁻⁷ m thick). A movable zinc sulphide screen flashed wherever an alpha particle struck it.'],
 ['list',['Most alpha particles passed straight through or were deflected only slightly.','About 0.14% were scattered by more than 1°.','About 1 in 8000 bounced back by more than 90°.']],
 ['p','Thomson\'s spread-out positive charge could never stop a heavy alpha particle and turn it back. Rutherford concluded that all the positive charge and almost all the mass of an atom is packed into a tiny central <b>nucleus</b>, about 10⁻¹⁵–10⁻¹⁴ m across, roughly 10,000 to 100,000 times smaller than the atom. Electrons orbit at a distance, and the atom is mostly empty space.'],
 ['simple','If an atom were a cricket stadium, the nucleus would be a small marble at the centre spot.'],
 ['p','<b>Impact parameter</b> b is the perpendicular distance of an alpha particle\'s initial path from the nucleus. A small b means a close approach and large scattering; a head-on collision (b = 0) sends the particle straight back.'],
 ['der','Distance of closest approach',[
   'An alpha particle (charge 2e) with kinetic energy K heads straight for a nucleus of charge Ze.',
   'It slows down, stops momentarily at distance d, and turns back. At that point all its KE has become electric PE.',
   'K = (1/4πε₀)(2e)(Ze)/d ⇒ d = 2Ze²/(4πε₀K).',
   'For 7.7 MeV alpha particles on gold (Z = 79): d ≈ 3 × 10⁻¹⁴ m. The nucleus must be smaller than this.']],
 ['eq','d = (1/4πε₀) × 2Ze²/K']
]},
{t:'Problems with the Rutherford model', b:[
 ['p','In Rutherford\'s model, an electron orbits the nucleus like a planet orbits the Sun, held by electrical attraction. For hydrogen, the force balance gives the energy of an orbit of radius r: E = −e²/(8πε₀r). The negative sign shows the electron is bound.'],
 ['list',['<b>Instability:</b> an orbiting electron is accelerating, and classical electromagnetism says accelerating charges radiate energy. The electron should lose energy and spiral into the nucleus in about 10⁻⁸ s. Atoms would collapse, but they are stable.','<b>Wrong spectrum:</b> as the orbit shrinks, the frequency of radiation should change smoothly, producing a continuous spectrum. Real atoms produce sharp lines.']]
]},
{t:'Atomic spectra of hydrogen', b:[
 ['p','Hydrogen\'s visible lines (656, 486, 434, 410 nm) were found by Balmer in 1885 to fit a simple formula. Later, other series were discovered in the ultraviolet and infrared. All fit the <b>Rydberg formula</b>:'],
 ['eq','1/λ = R(1/n<sub>f</sub>² − 1/n<sub>i</sub>²), &nbsp; R = 1.097 × 10⁷ m⁻¹'],
 ['tbl',['Series','n<sub>f</sub>','n<sub>i</sub>','Region'],[['Lyman','1','2, 3, 4, …','Ultraviolet'],['Balmer','2','3, 4, 5, …','Visible (and near UV)'],['Paschen','3','4, 5, 6, …','Infrared'],['Brackett','4','5, 6, 7, …','Infrared'],['Pfund','5','6, 7, 8, …','Far infrared']]],
 ['p','The lines in each series crowd together towards a <b>series limit</b> (n<sub>i</sub> → ∞). The first Balmer line (n = 3 → 2) at 656.3 nm is called H<sub>α</sub> and is red.']
]},
{t:'Bohr\'s model of the hydrogen atom', b:[
 ['p','In 1913 Niels Bohr combined Rutherford\'s nucleus with Planck\'s quantum idea, using three postulates:'],
 ['list',['<b>Stationary orbits:</b> an electron can revolve in certain stable orbits without radiating energy. Each orbit has a definite total energy.','<b>Quantisation of angular momentum:</b> the allowed orbits are those for which the angular momentum is a whole-number multiple of h/2π: mvr = nh/2π, n = 1, 2, 3, ….','<b>Frequency condition:</b> an electron jumping from a higher orbit (energy E<sub>i</sub>) to a lower one (E<sub>f</sub>) emits a photon with hν = E<sub>i</sub> − E<sub>f</sub>. Absorbing a photon of exactly that energy lifts it back up.']],
 ['der','Radius, speed and energy of the nᵗʰ orbit',[
   'Force balance: mv²/r = e²/(4πε₀r²).',
   'Quantisation: mvr = nh/2π ⇒ v = nh/(2πmr).',
   'Substituting v into the force equation: r<sub>n</sub> = n²h²ε₀/(πme²) = n² × 0.529 Å. The smallest orbit, r₁ = 0.529 Å, is the <b>Bohr radius</b>.',
   'Speed: v<sub>n</sub> = e²/(2ε₀nh) = (2.2 × 10⁶ m/s)/n.',
   'Energy: E<sub>n</sub> = −e²/(8πε₀r<sub>n</sub>) = −me⁴/(8ε₀²h²n²) = −13.6/n² eV.']],
 ['eq','r<sub>n</sub> = 0.529 n² Å, &nbsp; E<sub>n</sub> = −13.6/n² eV'],
 ['list',['n = 1 is the <b>ground state</b> (−13.6 eV). Higher n are <b>excited states</b>.','The <b>ionisation energy</b> of hydrogen is 13.6 eV: the energy to remove the electron from the ground state completely (to E = 0).','Kinetic energy = +13.6/n² eV and potential energy = −27.2/n² eV, so KE = −E and PE = 2E.','The energy levels crowd together as n increases, approaching zero.']]
]},
{t:'The line spectrum explained', b:[
 ['der','Deriving the Rydberg formula from Bohr\'s model',[
   'Photon energy from a jump: hν = E<sub>i</sub> − E<sub>f</sub> = (me⁴/8ε₀²h²)(1/n<sub>f</sub>² − 1/n<sub>i</sub>²).',
   'Since ν = c/λ: 1/λ = (me⁴/8ε₀²h³c)(1/n<sub>f</sub>² − 1/n<sub>i</sub>²).',
   'The constant evaluates to 1.097 × 10⁷ m⁻¹, exactly the measured Rydberg constant.']],
 ['p','This was Bohr\'s triumph: the series that had been found by trial and error came straight out of his model. Each series is simply all the jumps that end on the same lower level. Absorption lines appear when electrons in a cool gas absorb photons of exactly these energies.'],
 ['ex','Find the wavelength of the photon emitted when a hydrogen atom drops from n = 3 to n = 2.',['ΔE = 13.6(1/4 − 1/9) = 13.6 × 5/36 ≈ 1.89 eV','λ = 1240/1.89'],'≈ 656 nm (red H<sub>α</sub> line, Balmer series)'],
 ['ex','A hydrogen atom in its ground state absorbs a 12.75 eV photon. To which level is it raised, and how many lines can it then emit?',['E = −13.6 + 12.75 = −0.85 eV = −13.6/n² ⇒ n² = 16 ⇒ n = 4','From n = 4, possible jumps: n(n − 1)/2 = 4 × 3/2'],'Raised to n = 4; up to 6 different spectral lines']
]},
{t:'de Broglie\'s explanation of Bohr\'s postulate', b:[
 ['p','Bohr gave no reason why angular momentum should be quantised. De Broglie\'s matter waves supplied one. An electron in an orbit behaves as a wave going round and round. It can only exist in a steady state if the wave fits exactly around the orbit, forming a standing wave; otherwise it would interfere with itself and cancel out.'],
 ['der','Quantisation from standing waves',[
   'For a standing wave around a circle of radius r, the circumference must hold a whole number of wavelengths: 2πr = nλ.',
   'Using de Broglie\'s relation λ = h/mv: 2πr = nh/mv.',
   'Rearranging: mvr = nh/2π, exactly Bohr\'s second postulate.']],
 ['p','The Bohr model works well for hydrogen and hydrogen-like ions (He⁺, Li²⁺), but cannot explain atoms with more electrons, the relative brightness of spectral lines, or their fine splitting. Full quantum mechanics replaced it, but its energy levels for hydrogen remain correct.']
]}
],
recap:['Alpha scattering showed a tiny, dense, positive nucleus; atoms are mostly empty.','Closest approach d = 2Ze²/(4πε₀K).','Rutherford\'s model fails: orbiting electrons should radiate and collapse.','Bohr: stationary orbits, mvr = nh/2π, hν = E<sub>i</sub> − E<sub>f</sub>.','r<sub>n</sub> = 0.529n² Å, E<sub>n</sub> = −13.6/n² eV; Lyman, Balmer, Paschen series.','de Broglie: 2πr = nλ gives Bohr\'s quantisation.'],
exam:['Describe the Geiger–Marsden experiment and the conclusions of Rutherford\'s model; distance of closest approach and impact parameter.','State Bohr\'s postulates; derive the radius and energy of the nᵗʰ orbit of hydrogen.','Derive the Rydberg formula and explain the spectral series with an energy-level diagram.','Explain Bohr\'s quantisation condition using de Broglie waves.']
});

L('c12-13', {
intro:'The nucleus holds almost all of an atom\'s mass in an incredibly small space. This chapter looks at what nuclei are made of, how big and dense they are, why they hold together, and how the binding-energy curve explains the enormous energy released by fission and fusion.',
sections:[
{t:'Atomic masses and composition of the nucleus', b:[
 ['p','Atoms are so light that we use the <b>atomic mass unit</b>: 1 u is 1/12 of the mass of a carbon-12 atom, about 1.661 × 10⁻²⁷ kg. A proton has mass 1.00727 u, a neutron 1.00866 u, an electron 0.00055 u.'],
 ['p','A nucleus contains <b>protons</b> (positive) and <b>neutrons</b> (neutral), together called <b>nucleons</b>. The neutron was discovered by Chadwick in 1932, by bombarding beryllium with alpha particles and observing neutral radiation that knocked protons out of paraffin.'],
 ['list',['<b>Atomic number</b> Z = number of protons (also the number of electrons in the neutral atom). It decides the element.','<b>Neutron number</b> N = number of neutrons.','<b>Mass number</b> A = Z + N = total nucleons. A nucleus is written as <sup>A</sup><sub>Z</sub>X, for example <sup>197</sup><sub>79</sub>Au.','<b>Isotopes:</b> same Z, different N (¹H, ²H deuterium, ³H tritium; ³⁵Cl and ³⁷Cl). They have identical chemistry.','<b>Isobars:</b> same A, different Z (³H and ³He).','<b>Isotones:</b> same N, different Z (¹⁹⁸Hg and ¹⁹⁷Au, both N = 118).']]
]},
{t:'Size and density of the nucleus', b:[
 ['p','Rutherford-type scattering experiments with fast electrons and alpha particles show that the radius of a nucleus grows with its mass number:'],
 ['eq','R = R₀A<sup>1/3</sup>, &nbsp; R₀ ≈ 1.2 × 10⁻¹⁵ m = 1.2 fm'],
 ['der','Nuclear density is nearly the same for all nuclei',[
   'Volume ∝ R³ ∝ A. Mass ≈ A × m (m = mass of one nucleon).',
   'Density = mass/volume = Am/[(4/3)πR₀³A] = m/[(4/3)πR₀³].',
   'A cancels: every nucleus has about the same density.',
   'Numerically: 1.66 × 10⁻²⁷/[(4/3)π(1.2 × 10⁻¹⁵)³] ≈ 2.3 × 10¹⁷ kg/m³.']],
 ['p','That is about 10¹⁴ times the density of water. A matchbox of nuclear matter would weigh billions of tonnes. Neutron stars are made of matter at roughly this density.'],
 ['ex','Find the radius of an iron-56 nucleus.',['R = 1.2 × 56<sup>1/3</sup> fm = 1.2 × 3.83'],'≈ 4.6 fm']
]},
{t:'Mass–energy equivalence', b:[
 ['p','Einstein showed that mass is a form of energy. A mass m is equivalent to an energy:'],
 ['eq','E = mc², &nbsp; 1 u ≡ 931.5 MeV'],
 ['p','In nuclear reactions, the total of mass and energy is conserved, not mass alone. Even chemical reactions involve tiny mass changes, far too small to measure; in nuclear reactions the changes are about a million times larger.'],
 ['ex','What energy is equivalent to 1 g of matter?',['E = mc² = 10⁻³ × (3 × 10⁸)²'],'9 × 10¹³ J, about what a large power station produces in a day']
]},
{t:'Mass defect and binding energy', b:[
 ['p','The mass of a nucleus is always <b>less</b> than the total mass of its separate protons and neutrons. This difference is the <b>mass defect</b>:'],
 ['eq','ΔM = [Zm<sub>p</sub> + (A − Z)m<sub>n</sub>] − M'],
 ['p','When nucleons come together to form a nucleus, energy ΔMc² is released. Equally, the same energy must be supplied to pull the nucleus apart into separate nucleons. This energy is the <b>binding energy</b> E<sub>b</sub> = ΔMc².'],
 ['der','Binding energy of oxygen-16',[
   'Mass of 8 protons + 8 neutrons = 8(1.00727) + 8(1.00866) = 16.12744 u.',
   'Mass of the ¹⁶O nucleus ≈ 15.99053 u.',
   'ΔM = 0.13691 u.',
   'E<sub>b</sub> = 0.13691 × 931.5 ≈ 127.5 MeV, or about 7.97 MeV per nucleon.']],
 ['tip','In problems, you can use atomic masses (including electrons) with the mass of a hydrogen atom (1.007825 u) in place of the proton mass. The electron masses then cancel.']
]},
{t:'Binding energy per nucleon', b:[
 ['p','The <b>binding energy per nucleon</b> E<sub>bn</sub> = E<sub>b</sub>/A is the average energy needed to remove one nucleon. It measures how tightly bound a nucleus is. Plotting it against A gives one of the most important graphs in physics:'],
 ['list',['For light nuclei it rises steeply: ²H 1.1 MeV, ⁴He 7.1 MeV (unusually high, a very stable nucleus), ¹²C 7.7 MeV.','For medium nuclei (A ≈ 30 to 170) it is nearly constant, about 8 MeV, with a broad maximum of about 8.75 MeV near A = 56 (iron).','For heavy nuclei it falls slowly: about 7.6 MeV for uranium-238.']],
 ['p','<b>What the curve tells us:</b>'],
 ['list',['The nuclear force is attractive and strong enough to give several MeV per nucleon.','The flat middle shows that the force <b>saturates</b>: each nucleon only attracts its near neighbours, so adding nucleons does not increase binding per nucleon. A nucleon deep inside a large nucleus feels the same neighbours as one in a medium nucleus.','A heavy nucleus like A = 240 split into two of A ≈ 120 moves up the curve from 7.6 to 8.5 MeV per nucleon. That releases about 0.9 × 240 ≈ 200 MeV: <b>fission</b>.','Two very light nuclei joining to form a heavier one also move up the curve, releasing energy: <b>fusion</b>.']]
]},
{t:'Nuclear force', b:[
 ['p','Inside the nucleus, protons repel each other strongly through the electric force. Something stronger must hold the nucleus together: the <b>nuclear force</b> (strong force).'],
 ['list',['It is the strongest force in nature, much stronger than the electric force at nuclear distances.','It is <b>short-ranged</b>: strongly attractive at distances of about 1–3 fm, and negligible beyond a few femtometres. That is why nuclei have a limited size.','At very short distances (below about 0.8 fm) it becomes strongly repulsive, which keeps nucleons from collapsing into each other.','It is nearly the same between proton–proton, proton–neutron and neutron–neutron pairs: it does not depend on electric charge.','No simple mathematical formula like Coulomb\'s law describes it.']],
 ['p','Neutrons help bind nuclei, because they feel the nuclear attraction but add no electric repulsion. Heavy nuclei need more neutrons than protons to stay stable.']
]},
{t:'Radioactivity', x:true, b:[
 ['p','Discovered by Becquerel in 1896, <b>radioactivity</b> is the spontaneous breakdown of unstable nuclei, with emission of radiation. There are three common kinds: <b>α decay</b> (emits a helium-4 nucleus; A falls by 4, Z by 2), <b>β⁻ decay</b> (a neutron becomes a proton, emitting an electron and an antineutrino; Z rises by 1), <b>β⁺ decay</b> (a proton becomes a neutron, emitting a positron and a neutrino), and <b>γ decay</b> (an excited nucleus emits a high-energy photon; A and Z unchanged).'],
 ['eq','N = N₀e<sup>−λt</sup>, &nbsp; T<sub>½</sub> = ln2/λ = 0.693/λ, &nbsp; τ = 1/λ'],
 ['p','Each nucleus decays at random, but a large number decays at a predictable rate. The <b>half-life</b> T<sub>½</sub> is the time for half the nuclei to decay; it ranges from fractions of a second to billions of years. <b>Activity</b> R = λN is measured in becquerel (1 Bq = 1 decay/s). Carbon-14 (T<sub>½</sub> ≈ 5730 years) is used to date ancient remains.']
]},
{t:'Nuclear energy: fission and fusion', b:[
 ['p','<b>Fission:</b> when a slow neutron strikes uranium-235, the nucleus becomes unstable and splits into two medium-mass fragments, releasing 2 or 3 neutrons and about 200 MeV of energy. For example:'],
 ['eq','¹n + ²³⁵U → ²³⁶U → ¹⁴⁴Ba + ⁸⁹Kr + 3¹n + ≈ 200 MeV'],
 ['list',['The neutrons released can cause more fissions: a <b>chain reaction</b>.','In a nuclear reactor, the chain reaction is controlled. A moderator (heavy water or graphite) slows the neutrons, which makes fission more likely; control rods (cadmium or boron) absorb extra neutrons. The heat generated boils water to drive turbines.','India runs nuclear power plants at Tarapur, Kudankulam and elsewhere. An uncontrolled chain reaction is the principle of the atomic bomb.','One fission releases about 50 million times more energy than burning one carbon atom.']],
 ['p','<b>Fusion:</b> light nuclei combine to form heavier ones, releasing energy. To overcome their electrical repulsion, they must collide at enormous speeds, which needs temperatures of tens of millions of kelvin. This is <b>thermonuclear fusion</b>.'],
 ['eq','²H + ³H → ⁴He + n + 17.6 MeV'],
 ['list',['The Sun shines by fusing hydrogen into helium in its core (about 1.5 × 10⁷ K). Overall, 4 protons become one helium nucleus, releasing about 26.7 MeV.','Fusion releases more energy per kilogram of fuel than fission, and its fuel (deuterium from seawater) is abundant. Controlled fusion reactors, such as the international ITER project in which India is a partner, are still being developed.']],
 ['ex','How much energy is released when 1 kg of uranium-235 undergoes complete fission (200 MeV per fission)?',['Number of nuclei = (1000/235) × 6.02 × 10²³ ≈ 2.56 × 10²⁴','Energy = 2.56 × 10²⁴ × 200 MeV ≈ 5.1 × 10²⁶ MeV × 1.6 × 10⁻¹³ J/MeV'],'≈ 8.2 × 10¹³ J']
]}
],
recap:['Nucleus = Z protons + N neutrons; A = Z + N; isotopes, isobars, isotones.','R = R₀A<sup>1/3</sup>; nuclear density ≈ 2.3 × 10¹⁷ kg/m³, the same for all nuclei.','E = mc²; 1 u = 931.5 MeV. Mass defect ΔM gives binding energy ΔMc².','B/A peaks near Fe-56 (≈ 8.75 MeV); fission and fusion both release energy by moving towards the peak.','Nuclear force: strongest, short-ranged, charge-independent, saturating.'],
exam:['Define mass defect and binding energy; calculate B/A from given masses.','Show that nuclear density is independent of A.','Draw and explain the binding-energy-per-nucleon curve and how it accounts for fission and fusion.','State the properties of the nuclear force; explain fission, chain reaction and fusion with examples.']
});

L('c12-14', {
intro:'Almost every electronic gadget runs on semiconductors. A few impurity atoms in pure silicon completely change how it conducts. Joining two kinds of doped silicon makes a p-n junction, the diode, which lets current flow one way only and turns AC into DC in every charger.',
sections:[
{t:'Metals, semiconductors and insulators', b:[
 ['p','Solids can be grouped by how well they conduct:'],
 ['tbl',['Type','Resistivity ρ (Ω m)','Conductivity σ (S/m)','Examples'],[['Metals','10⁻² to 10⁻⁸','10² to 10⁸','Copper, silver, aluminium'],['Semiconductors','10⁻⁵ to 10⁶','10⁵ to 10⁻⁶','Silicon, germanium, gallium arsenide'],['Insulators','10¹¹ to 10¹⁹','10⁻¹¹ to 10⁻¹⁹','Glass, rubber, diamond']]],
 ['p','Semiconductors are special because their conductivity can be controlled precisely by adding impurities, by temperature, by light, and by applied voltages. Elemental semiconductors are Si and Ge; compound semiconductors include GaAs, CdS and organic materials.']
]},
{t:'Energy bands', b:[
 ['p','In an isolated atom, electrons occupy sharp energy levels. In a crystal, atoms are so close that their outer electron levels overlap and spread into continuous <b>energy bands</b>.'],
 ['list',['The <b>valence band</b> holds the valence electrons. The <b>conduction band</b> above it holds electrons that are free to move and conduct.','Between them lies the <b>band gap</b> E<sub>g</sub>, a range of energies electrons cannot have.','<b>Metals:</b> the bands overlap, or the conduction band is partly filled. Plenty of free electrons; excellent conduction.','<b>Insulators:</b> a large gap (E<sub>g</sub> > 3 eV; about 6 eV for diamond). At ordinary temperatures, electrons cannot jump it.','<b>Semiconductors:</b> a small gap (about 1.1 eV for Si, 0.7 eV for Ge). At room temperature, a few electrons gain enough thermal energy to cross it.']],
 ['simple','The band gap is a step electrons must climb before they can carry current. Metals have no step, insulators a very tall one, and semiconductors a small one.']
]},
{t:'Intrinsic semiconductors', b:[
 ['p','In pure silicon, each atom shares its four valence electrons with four neighbours in covalent bonds. At absolute zero every electron is locked in a bond, and the crystal is an insulator.'],
 ['p','At room temperature, thermal energy breaks a few bonds. Each broken bond releases a free electron into the conduction band and leaves behind a vacancy, called a <b>hole</b>, which acts as a positive charge +e. A neighbouring electron can jump into the hole, so the hole effectively moves in the opposite direction. Both electrons and holes carry current.'],
 ['eq','n<sub>e</sub> = n<sub>h</sub> = n<sub>i</sub> &nbsp;(intrinsic carrier concentration)'],
 ['list',['Total current = electron current + hole current.','Electrons and holes are generated and also recombine continuously; at equilibrium their rates balance.','n<sub>i</sub> rises sharply with temperature, so the resistivity of a semiconductor falls as it gets hotter (the opposite of a metal). For silicon at room temperature n<sub>i</sub> ≈ 1.5 × 10¹⁶ m⁻³.']]
]},
{t:'Extrinsic semiconductors: n-type and p-type', b:[
 ['p','Pure semiconductors conduct too poorly to be useful. <b>Doping</b> adds a tiny, controlled amount of impurity, about one atom per million, which changes the conductivity enormously.'],
 ['p','<b>n-type:</b> dope silicon with a pentavalent atom (5 valence electrons), such as phosphorus, arsenic or antimony. Four of its electrons form bonds; the fifth is loosely held (about 0.05 eV) and is easily freed. The dopant is a <b>donor</b>. Electrons are the <b>majority carriers</b>; holes are minority carriers.'],
 ['p','<b>p-type:</b> dope with a trivalent atom (3 valence electrons), such as boron, aluminium or indium. One bond is incomplete, leaving a hole that a neighbouring electron can fill. The dopant is an <b>acceptor</b>. Holes are the majority carriers; electrons are minority carriers.'],
 ['eq','n<sub>e</sub> n<sub>h</sub> = n<sub>i</sub>² &nbsp;(mass action law)'],
 ['list',['In n-type, n<sub>e</sub> ≈ N<sub>D</sub> (donor concentration) and n<sub>h</sub> = n<sub>i</sub>²/N<sub>D</sub>.','In p-type, n<sub>h</sub> ≈ N<sub>A</sub> and n<sub>e</sub> = n<sub>i</sub>²/N<sub>A</sub>.','Doping adds donor levels just below the conduction band (n-type) or acceptor levels just above the valence band (p-type).']],
 ['warn','An n-type semiconductor is not negatively charged, and p-type is not positively charged. Each dopant atom is neutral when added, so the whole crystal stays electrically neutral.'],
 ['ex','Silicon (n<sub>i</sub> = 1.5 × 10¹⁶ m⁻³) is doped with 10²² m⁻³ arsenic atoms. Find the electron and hole concentrations.',['Arsenic is a donor: n<sub>e</sub> ≈ 10²² m⁻³','n<sub>h</sub> = (1.5 × 10¹⁶)²/10²² = 2.25 × 10¹⁰ m⁻³'],'n<sub>e</sub> ≈ 10²² m⁻³, n<sub>h</sub> ≈ 2.25 × 10¹⁰ m⁻³']
]},
{t:'Formation of a p-n junction', b:[
 ['p','A p-n junction is made in a single crystal, with one side doped p-type and the other n-type. At the boundary, two processes happen:'],
 ['list',['<b>Diffusion:</b> electrons are plentiful on the n side and holes on the p side, so electrons diffuse into the p side and holes into the n side, where they recombine. This creates a <b>diffusion current</b> from p to n.','Electrons leaving the n side leave behind fixed positive donor ions; holes leaving the p side leave fixed negative acceptor ions. A thin region near the junction, empty of free carriers, forms: the <b>depletion layer</b> (about 1 μm wide).','The fixed charges create an electric field from n to p, which opposes further diffusion and pushes minority carriers across: a <b>drift current</b> from n to p.','Equilibrium is reached when the drift and diffusion currents are equal, with no net current. The potential difference across the depletion layer is the <b>barrier potential</b>: about 0.7 V for Si and 0.3 V for Ge.']]
]},
{t:'The semiconductor diode and its I–V characteristics', b:[
 ['p','A p-n junction with metal contacts at each end is a <b>diode</b>. Its circuit symbol is an arrow pointing in the direction of conventional current (p to n) with a bar at the n side.'],
 ['p','<b>Forward bias:</b> connect p to the positive terminal and n to the negative. The applied voltage opposes the barrier, so the barrier height falls to (V₀ − V) and the depletion layer narrows. Majority carriers cross easily. Current is tiny until the voltage reaches the <b>threshold (knee) voltage</b> (about 0.7 V for Si), and then rises steeply (milliamperes).'],
 ['p','<b>Reverse bias:</b> connect p to negative and n to positive. The barrier rises to (V₀ + V), and the depletion layer widens. Majority carriers cannot cross. Only a tiny current of minority carriers flows (microamperes), nearly independent of voltage. At a large enough reverse voltage, the <b>breakdown voltage</b>, the current rises sharply; ordinary diodes are damaged by this.'],
 ['list',['The I–V curve is non-linear: the diode does not obey Ohm\'s law.','<b>Dynamic resistance</b> r<sub>d</sub> = ΔV/ΔI, which is small (a few ohms) in forward bias above the knee and huge in reverse bias.','A diode therefore behaves like a one-way valve: it conducts in forward bias and blocks in reverse bias.']],
 ['simple','A diode is a one-way street for current.']
]},
{t:'The diode as a rectifier', b:[
 ['p','<b>Rectification</b> means converting alternating current into direct current. Because a diode conducts only in forward bias, it can block one half of each AC cycle.'],
 ['der','Half-wave rectifier',[
   'An AC voltage from a transformer secondary is applied to a diode in series with a load resistor R<sub>L</sub>.',
   'During the positive half-cycle, the diode is forward biased and conducts: a voltage appears across R<sub>L</sub>.',
   'During the negative half-cycle, it is reverse biased and blocks: no output.',
   'The output is a series of positive pulses, one per cycle. For 50 Hz input, the ripple frequency is 50 Hz. Half the input wave is wasted.']],
 ['der','Full-wave rectifier (centre-tap)',[
   'A transformer secondary with a centre tap feeds two diodes D₁ and D₂, whose outputs join at the load; the centre tap is the common return.',
   'In one half-cycle, the top end is positive: D₁ conducts and D₂ is reverse biased.',
   'In the other half-cycle, the bottom end is positive: D₂ conducts and D₁ is reverse biased.',
   'Either way, current flows through R<sub>L</sub> in the same direction. Both halves are used, and the output has two pulses per cycle: ripple frequency 100 Hz for 50 Hz mains.']],
 ['p','The rectified output is pulsating DC. A <b>filter</b>, usually a large capacitor connected across the load, smooths it. The capacitor charges to the peak voltage during each pulse and discharges slowly through R<sub>L</sub> between pulses, giving a nearly steady DC voltage. A larger C or R<sub>L</sub> gives a smoother output. A <b>bridge rectifier</b> uses four diodes to achieve full-wave rectification without a centre-tapped transformer, which is the design inside most chargers.'],
 ['ex','What is the ripple frequency of the output of a full-wave rectifier connected to 50 Hz mains?',['Each half-cycle produces one output pulse','Pulses per second = 2 × 50'],'100 Hz']
]},
{t:'Special-purpose diodes and transistors', x:true, b:[
 ['list',['<b>Zener diode:</b> a heavily doped diode designed to work safely in reverse breakdown. Its voltage stays almost constant over a wide range of currents, so it is used as a voltage regulator.','<b>Photodiode:</b> operated in reverse bias; light falling on the junction creates electron–hole pairs, increasing the reverse current in proportion to intensity. Used as a light detector.','<b>Light-emitting diode (LED):</b> a heavily doped forward-biased junction in which electrons and holes recombine and release energy as light. The colour depends on the band gap of the material. LEDs are efficient, long-lasting and fast.','<b>Solar cell:</b> a large-area p-n junction with no external bias. Light creates electron–hole pairs; the junction field separates them, generating an emf of about 0.5–0.6 V per cell.','<b>Transistor:</b> a sandwich of three regions (n-p-n or p-n-p) that can amplify signals and act as a switch. Billions of transistors form the logic gates inside computer chips.']]
]}
],
recap:['Band gap: metals none, semiconductors ≈ 1 eV, insulators > 3 eV.','Intrinsic: n<sub>e</sub> = n<sub>h</sub> = n<sub>i</sub>; resistivity falls with temperature.','n-type (donors, electrons majority) and p-type (acceptors, holes majority); n<sub>e</sub>n<sub>h</sub> = n<sub>i</sub>².','p-n junction: diffusion and drift balance; depletion layer; barrier ≈ 0.7 V (Si).','Forward bias narrows the depletion layer and conducts; reverse bias widens it and blocks.','Half-wave: ripple ν; full-wave: ripple 2ν; capacitor filter smooths the output.'],
exam:['Explain energy bands and distinguish metals, semiconductors and insulators.','Explain intrinsic and extrinsic (n-type, p-type) semiconductors with diagrams; use the mass action law.','Explain the formation of the depletion layer and barrier potential; draw and explain forward and reverse I–V characteristics.','Draw circuit diagrams and waveforms for half-wave and full-wave rectifiers.']
});
})();
