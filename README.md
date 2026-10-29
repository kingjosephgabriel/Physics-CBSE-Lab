# NCERT Physics Lab

An interactive study app for the full NCERT Physics syllabus, Class 11 and Class 12 (rationalised textbooks, CBSE 2026–27 session). It has 28 chapters, each with its own live simulation.

## What's inside

Each chapter has four tabs:

- **Learn**: a complete lesson for the chapter in plain language: every topic, step-by-step derivations, worked examples with hidden solutions, common mistakes, a recap and board-exam focus, plus a formula sheet. Sections marked "Extra depth" go beyond the current board syllabus (reference-book and JEE/NEET level).
- **Lab**: an interactive canvas simulation with sliders and live readouts
- **Real world**: everyday and engineering applications
- **Practice**: concept questions with full solutions, plus a numerical generator that makes new problems every time and shows step-by-step solutions

Gamification: XP and levels, combo multipliers, three stars per chapter, lesson read tracking, 14 badges, a daily streak and a 90-second **Blitz** mode with personal bests.

| Class 11 | Lab | Class 12 | Lab |
|---|---|---|---|
| 1 Units and Measurements | Vernier calliper | 1 Electric Charges and Fields | Draggable field lines |
| 2 Motion in a Straight Line | Live x–t / v–t graphs | 2 Electrostatic Potential and Capacitance | Parallel-plate capacitor |
| 3 Motion in a Plane | Projectile launcher | 3 Current Electricity | Wheatstone bridge |
| 4 Laws of Motion | Rough incline | 4 Moving Charges and Magnetism | Charge in a B field |
| 5 Work, Energy and Power | Energy bar chart | 5 Magnetism and Matter | Bar magnet and compass |
| 6 System of Particles and Rotational Motion | Rolling race | 6 Electromagnetic Induction | Magnet through a coil |
| 7 Gravitation | Orbit launcher | 7 Alternating Current | Series LCR and resonance |
| 8 Mechanical Properties of Solids | Stress–strain tester | 8 Electromagnetic Waves | EM wave and spectrum |
| 9 Mechanical Properties of Fluids | Terminal velocity | 9 Ray Optics | Thin lens ray tracer |
| 10 Thermal Properties of Matter | Calorimeter | 10 Wave Optics | Young's double slit |
| 11 Thermodynamics | PV diagram | 11 Dual Nature | Photoelectric effect |
| 12 Kinetic Theory | Gas in a box | 12 Atoms | Bohr model |
| 13 Oscillations | Spring–mass SHM | 13 Nuclei | Binding energy curve |
| 14 Waves | Standing waves | 14 Semiconductor Electronics | Diode rectifier |

## Run it

It is a static site with no build step and no dependencies.

- **Locally:** open `index.html` in a browser, or run `python3 -m http.server` in this folder and visit `http://localhost:8000`.
- **GitHub Pages:** push this folder to a repository, then go to *Settings → Pages* and choose *Deploy from a branch*, using `main` and `/ (root)`. The site appears at `https://<username>.github.io/<repo>/`.

## Files

| File | Contents |
|---|---|
| `index.html` | App shell, styles, navigation, XP/badges, Blitz mode |
| `data.js` | Chapter content: concepts, formulas, applications, questions, problem generators |
| `sims.js` | The 28 canvas simulations and the shared simulation framework |
| `lessons-11a.js` … `lessons-12c.js` | Full lessons for every chapter (Class 11 ch 1–5, 6–10, 11–14; Class 12 ch 1–5, 6–10, 11–14) |
| `.nojekyll` | Tells GitHub Pages to serve files as-is |

Progress is saved in the browser's `localStorage`, so it stays on that device and browser.

## Notes

- Chapter list and topic coverage follow the rationalised NCERT textbooks. Topics removed from the current syllabus appear only as clearly tagged "Extra depth" lesson sections.
- All lessons and practice questions are original and written to match each chapter. They are not copied from the NCERT textbooks or any reference book.
- Fonts load from Google Fonts. Everything else is self-contained.
