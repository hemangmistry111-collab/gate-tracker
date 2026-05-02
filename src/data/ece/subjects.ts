import { Subject } from '@/types'

export const ECE_SUBJECTS: Subject[] = [
  {
    id: 'ece-networks', name: 'Networks, Signals & Systems', code: 'NSS',
    weightage: 15, color: 'from-blue-500 to-cyan-500', icon: '📡',
    description: 'Circuit analysis, network theorems, signals and systems theory.',
    topics: [
      { id: 'ece-nss-01', name: 'KVL, KCL & Basic Circuit Analysis', difficulty: 'Easy', done: false, estimatedHours: 4 },
      { id: 'ece-nss-02', name: 'Thevenin & Norton Theorems', difficulty: 'Medium', done: false, estimatedHours: 4 },
      { id: 'ece-nss-03', name: 'Superposition & Maximum Power Transfer', difficulty: 'Easy', done: false, estimatedHours: 3 },
      { id: 'ece-nss-04', name: 'AC Circuit Analysis — Phasors, Impedance', difficulty: 'Medium', done: false, estimatedHours: 5 },
      { id: 'ece-nss-05', name: 'Two-Port Networks (Z, Y, h, ABCD Parameters)', difficulty: 'Hard', done: false, estimatedHours: 6 },
      { id: 'ece-nss-06', name: 'Resonance — Series & Parallel RLC', difficulty: 'Medium', done: false, estimatedHours: 4 },
      { id: 'ece-nss-07', name: 'Continuous & Discrete Time Signals', difficulty: 'Easy', done: false, estimatedHours: 3 },
      { id: 'ece-nss-08', name: 'LTI Systems — Properties, Convolution', difficulty: 'Medium', done: false, estimatedHours: 5 },
      { id: 'ece-nss-09', name: 'Fourier Series & Fourier Transform', difficulty: 'Hard', done: false, estimatedHours: 6 },
      { id: 'ece-nss-10', name: 'Laplace Transform & Applications', difficulty: 'Hard', done: false, estimatedHours: 6 },
      { id: 'ece-nss-11', name: 'Z-Transform & Discrete Systems', difficulty: 'Hard', done: false, estimatedHours: 5 },
      { id: 'ece-nss-12', name: 'Sampling Theorem & Nyquist Criterion', difficulty: 'Medium', done: false, estimatedHours: 4 },
    ]
  },
  {
    id: 'ece-em', name: 'Electromagnetics', code: 'EM',
    weightage: 8, color: 'from-yellow-500 to-red-500', icon: '⚡',
    description: 'Maxwell\'s equations, wave propagation, transmission lines and antennas.',
    topics: [
      { id: 'ece-em-01', name: 'Vector Calculus — Gradient, Divergence, Curl', difficulty: 'Hard', done: false, estimatedHours: 5 },
      { id: 'ece-em-02', name: 'Electrostatics — Coulomb\'s Law, Gauss\'s Law', difficulty: 'Medium', done: false, estimatedHours: 4 },
      { id: 'ece-em-03', name: 'Magnetostatics — Biot-Savart, Ampere\'s Law', difficulty: 'Medium', done: false, estimatedHours: 4 },
      { id: 'ece-em-04', name: 'Maxwell\'s Equations — Differential & Integral Form', difficulty: 'Hard', done: false, estimatedHours: 6 },
      { id: 'ece-em-05', name: 'Plane Wave Propagation in Media', difficulty: 'Hard', done: false, estimatedHours: 5 },
      { id: 'ece-em-06', name: 'Polarization & Poynting Vector', difficulty: 'Hard', done: false, estimatedHours: 4 },
      { id: 'ece-em-07', name: 'Transmission Lines — TL Equations, VSWR', difficulty: 'Hard', done: false, estimatedHours: 6 },
      { id: 'ece-em-08', name: 'Smith Chart & Impedance Matching', difficulty: 'Hard', done: false, estimatedHours: 5 },
      { id: 'ece-em-09', name: 'Waveguides — TE, TM, TEM Modes', difficulty: 'Hard', done: false, estimatedHours: 5 },
      { id: 'ece-em-10', name: 'Antenna Fundamentals & Radiation Pattern', difficulty: 'Medium', done: false, estimatedHours: 4 },
    ]
  },
  {
    id: 'ece-analog', name: 'Analog Circuits', code: 'AC',
    weightage: 13, color: 'from-green-500 to-emerald-500', icon: '🔌',
    description: 'Diodes, BJT, FET, op-amps and analog circuit design.',
    topics: [
      { id: 'ece-ac-01', name: 'Diode Characteristics & Applications', difficulty: 'Easy', done: false, estimatedHours: 3 },
      { id: 'ece-ac-02', name: 'Rectifiers & Clipper/Clamper Circuits', difficulty: 'Medium', done: false, estimatedHours: 4 },
      { id: 'ece-ac-03', name: 'Zener Diode & Voltage Regulation', difficulty: 'Easy', done: false, estimatedHours: 3 },
      { id: 'ece-ac-04', name: 'BJT — Characteristics, Biasing', difficulty: 'Medium', done: false, estimatedHours: 5 },
      { id: 'ece-ac-05', name: 'BJT Amplifiers — CE, CB, CC Configurations', difficulty: 'Hard', done: false, estimatedHours: 6 },
      { id: 'ece-ac-06', name: 'FET — MOSFET & JFET Characteristics', difficulty: 'Medium', done: false, estimatedHours: 5 },
      { id: 'ece-ac-07', name: 'FET Amplifiers & Biasing', difficulty: 'Hard', done: false, estimatedHours: 5 },
      { id: 'ece-ac-08', name: 'Operational Amplifiers — Ideal & Practical', difficulty: 'Easy', done: false, estimatedHours: 4 },
      { id: 'ece-ac-09', name: 'Op-Amp Applications (Differentiator, Integrator, Comparator)', difficulty: 'Medium', done: false, estimatedHours: 5 },
      { id: 'ece-ac-10', name: 'Feedback Amplifiers — Types & Stability', difficulty: 'Hard', done: false, estimatedHours: 6 },
      { id: 'ece-ac-11', name: 'Oscillators — RC, LC, Crystal', difficulty: 'Hard', done: false, estimatedHours: 5 },
      { id: 'ece-ac-12', name: 'Frequency Response & Bode Plots', difficulty: 'Hard', done: false, estimatedHours: 5 },
      { id: 'ece-ac-13', name: 'Power Amplifiers (Class A, B, AB, C)', difficulty: 'Medium', done: false, estimatedHours: 4 },
    ]
  },
  {
    id: 'ece-digital', name: 'Digital Circuits', code: 'DC',
    weightage: 9, color: 'from-violet-500 to-purple-600', icon: '🔲',
    description: 'Combinational and sequential digital circuits, PLDs and memories.',
    topics: [
      { id: 'ece-dc-01', name: 'Boolean Algebra & Logic Gates', difficulty: 'Easy', done: false, estimatedHours: 3 },
      { id: 'ece-dc-02', name: 'Combinational Circuits (Adders, MUX, Decoders)', difficulty: 'Medium', done: false, estimatedHours: 5 },
      { id: 'ece-dc-03', name: 'K-Map Minimization (up to 5 variables)', difficulty: 'Medium', done: false, estimatedHours: 4 },
      { id: 'ece-dc-04', name: 'Hazards in Combinational Circuits', difficulty: 'Hard', done: false, estimatedHours: 3 },
      { id: 'ece-dc-05', name: 'Flip-Flops — SR, JK, D, T', difficulty: 'Medium', done: false, estimatedHours: 4 },
      { id: 'ece-dc-06', name: 'Sequential Circuits — Counters & Shift Registers', difficulty: 'Medium', done: false, estimatedHours: 5 },
      { id: 'ece-dc-07', name: 'Finite State Machines — Mealy & Moore', difficulty: 'Hard', done: false, estimatedHours: 5 },
      { id: 'ece-dc-08', name: 'Memories — SRAM, DRAM, ROM types', difficulty: 'Easy', done: false, estimatedHours: 3 },
      { id: 'ece-dc-09', name: 'PLDs — PAL, PLA, FPGA Basics', difficulty: 'Medium', done: false, estimatedHours: 3 },
      { id: 'ece-dc-10', name: 'ADC & DAC Circuits', difficulty: 'Medium', done: false, estimatedHours: 4 },
    ]
  },
  {
    id: 'ece-comms', name: 'Communications', code: 'COMM',
    weightage: 13, color: 'from-pink-500 to-rose-500', icon: '📶',
    description: 'Analog & digital communications, noise, modulation and information theory.',
    topics: [
      { id: 'ece-comm-01', name: 'Random Variables & Noise in Communication', difficulty: 'Hard', done: false, estimatedHours: 5 },
      { id: 'ece-comm-02', name: 'AM Modulation — DSBSC, SSB, VSB', difficulty: 'Medium', done: false, estimatedHours: 5 },
      { id: 'ece-comm-03', name: 'FM & PM — Modulation Index, BW', difficulty: 'Hard', done: false, estimatedHours: 5 },
      { id: 'ece-comm-04', name: 'Pulse Modulation — PAM, PWM, PPM', difficulty: 'Medium', done: false, estimatedHours: 4 },
      { id: 'ece-comm-05', name: 'Sampling & Quantization', difficulty: 'Medium', done: false, estimatedHours: 4 },
      { id: 'ece-comm-06', name: 'PCM & Delta Modulation', difficulty: 'Medium', done: false, estimatedHours: 4 },
      { id: 'ece-comm-07', name: 'Digital Modulation — ASK, FSK, PSK, QPSK', difficulty: 'Hard', done: false, estimatedHours: 6 },
      { id: 'ece-comm-08', name: 'SNR, BER & Noise Figure Calculations', difficulty: 'Hard', done: false, estimatedHours: 5 },
      { id: 'ece-comm-09', name: 'Information Theory — Entropy, Channel Capacity', difficulty: 'Hard', done: false, estimatedHours: 5 },
      { id: 'ece-comm-10', name: 'Source & Channel Coding', difficulty: 'Hard', done: false, estimatedHours: 5 },
      { id: 'ece-comm-11', name: 'Matched Filter & Receiver Design', difficulty: 'Hard', done: false, estimatedHours: 5 },
    ]
  },
  {
    id: 'ece-control', name: 'Control Systems', code: 'CS',
    weightage: 8, color: 'from-orange-500 to-amber-500', icon: '🎮',
    description: 'Open and closed loop control, stability analysis and compensation.',
    topics: [
      { id: 'ece-ctrl-01', name: 'Open & Closed Loop Systems, Transfer Functions', difficulty: 'Easy', done: false, estimatedHours: 3 },
      { id: 'ece-ctrl-02', name: 'Block Diagram Reduction & Signal Flow Graph', difficulty: 'Medium', done: false, estimatedHours: 5 },
      { id: 'ece-ctrl-03', name: 'Time Domain Analysis — Transient & Steady State', difficulty: 'Medium', done: false, estimatedHours: 5 },
      { id: 'ece-ctrl-04', name: 'Routh-Hurwitz Stability Criterion', difficulty: 'Medium', done: false, estimatedHours: 4 },
      { id: 'ece-ctrl-05', name: 'Root Locus Method', difficulty: 'Hard', done: false, estimatedHours: 6 },
      { id: 'ece-ctrl-06', name: 'Bode Plots & Gain/Phase Margin', difficulty: 'Hard', done: false, estimatedHours: 6 },
      { id: 'ece-ctrl-07', name: 'Nyquist Criterion & Polar Plots', difficulty: 'Hard', done: false, estimatedHours: 5 },
      { id: 'ece-ctrl-08', name: 'Compensators — Lead, Lag, PID', difficulty: 'Hard', done: false, estimatedHours: 5 },
      { id: 'ece-ctrl-09', name: 'State Space Analysis', difficulty: 'Hard', done: false, estimatedHours: 6 },
      { id: 'ece-ctrl-10', name: 'Controllability & Observability', difficulty: 'Hard', done: false, estimatedHours: 4 },
    ]
  },
  {
    id: 'ece-devices', name: 'Electronic Devices', code: 'ED',
    weightage: 12, color: 'from-teal-500 to-green-500', icon: '⚛️',
    description: 'Semiconductor physics, PN junctions, BJT, FET device physics.',
    topics: [
      { id: 'ece-ed-01', name: 'Energy Bands & Semiconductor Physics', difficulty: 'Medium', done: false, estimatedHours: 4 },
      { id: 'ece-ed-02', name: 'Carrier Transport — Drift & Diffusion', difficulty: 'Hard', done: false, estimatedHours: 5 },
      { id: 'ece-ed-03', name: 'PN Junction — Diode Equation, I-V Characteristics', difficulty: 'Medium', done: false, estimatedHours: 4 },
      { id: 'ece-ed-04', name: 'Breakdown — Zener & Avalanche', difficulty: 'Medium', done: false, estimatedHours: 3 },
      { id: 'ece-ed-05', name: 'Bipolar Junction Transistor (BJT) Physics', difficulty: 'Hard', done: false, estimatedHours: 5 },
      { id: 'ece-ed-06', name: 'MOSFET Structure & Operation (Enhancement/Depletion)', difficulty: 'Hard', done: false, estimatedHours: 6 },
      { id: 'ece-ed-07', name: 'MOSFET — Small Signal Model', difficulty: 'Hard', done: false, estimatedHours: 5 },
      { id: 'ece-ed-08', name: 'JFET Characteristics', difficulty: 'Medium', done: false, estimatedHours: 3 },
      { id: 'ece-ed-09', name: 'Special Devices — SCR, UJT, Photodiode, LED, Solar Cell', difficulty: 'Medium', done: false, estimatedHours: 4 },
    ]
  },
  {
    id: 'ece-math', name: 'Engineering Mathematics', code: 'MATH',
    weightage: 13, color: 'from-sky-500 to-blue-500', icon: '∫',
    description: 'Linear algebra, calculus, complex analysis and probability for GATE ECE.',
    topics: [
      { id: 'ece-math-01', name: 'Linear Algebra — Matrices, Eigenvalues', difficulty: 'Medium', done: false, estimatedHours: 5 },
      { id: 'ece-math-02', name: 'Calculus — Limits, Differentiation, Integration', difficulty: 'Medium', done: false, estimatedHours: 5 },
      { id: 'ece-math-03', name: 'Differential Equations (ODE & PDE)', difficulty: 'Hard', done: false, estimatedHours: 6 },
      { id: 'ece-math-04', name: 'Complex Analysis — Functions, Cauchy\'s Theorem', difficulty: 'Hard', done: false, estimatedHours: 5 },
      { id: 'ece-math-05', name: 'Probability Theory & Random Variables', difficulty: 'Hard', done: false, estimatedHours: 6 },
      { id: 'ece-math-06', name: 'Vector Calculus — Theorems (Green, Stokes, Gauss)', difficulty: 'Hard', done: false, estimatedHours: 5 },
      { id: 'ece-math-07', name: 'Numerical Methods', difficulty: 'Medium', done: false, estimatedHours: 4 },
    ]
  },
  {
    id: 'ece-aptitude', name: 'General Aptitude', code: 'GA',
    weightage: 15, color: 'from-fuchsia-500 to-violet-500', icon: '🎯',
    description: 'Verbal ability, numerical ability and analytical reasoning — 15 marks in all GATE papers.',
    topics: [
      { id: 'ece-ga-01', name: 'English Grammar & Vocabulary', difficulty: 'Easy', done: false, estimatedHours: 4 },
      { id: 'ece-ga-02', name: 'Reading Comprehension', difficulty: 'Medium', done: false, estimatedHours: 3 },
      { id: 'ece-ga-03', name: 'Numerical Ability & Arithmetic', difficulty: 'Easy', done: false, estimatedHours: 3 },
      { id: 'ece-ga-04', name: 'Data Interpretation', difficulty: 'Medium', done: false, estimatedHours: 3 },
      { id: 'ece-ga-05', name: 'Logical Reasoning & Puzzles', difficulty: 'Medium', done: false, estimatedHours: 4 },
    ]
  },
]