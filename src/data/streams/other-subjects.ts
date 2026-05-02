import { Subject } from '@/types'

// ─── ELECTRICAL ENGINEERING ───────────────────────────────────────
export const EE_SUBJECTS: Subject[] = [
  {
    id: 'ee-circuits', name: 'Electric Circuits', code: 'EC',
    weightage: 13, color: 'from-yellow-500 to-orange-500', icon: '⚡',
    description: 'Network analysis, theorems, transients and AC circuits.',
    topics: [
      { id: 'ee-ec-01', name: 'KVL & KCL — Mesh & Node Analysis', difficulty: 'Easy', done: false, estimatedHours: 4 },
      { id: 'ee-ec-02', name: 'Thevenin, Norton, Superposition Theorems', difficulty: 'Medium', done: false, estimatedHours: 4 },
      { id: 'ee-ec-03', name: 'Transient Analysis — RL, RC, RLC Circuits', difficulty: 'Hard', done: false, estimatedHours: 6 },
      { id: 'ee-ec-04', name: 'Steady State AC Analysis — Phasors', difficulty: 'Medium', done: false, estimatedHours: 5 },
      { id: 'ee-ec-05', name: 'Power in AC Circuits — Power Factor', difficulty: 'Medium', done: false, estimatedHours: 4 },
      { id: 'ee-ec-06', name: 'Resonance Circuits', difficulty: 'Medium', done: false, estimatedHours: 3 },
      { id: 'ee-ec-07', name: 'Two-Port Networks', difficulty: 'Hard', done: false, estimatedHours: 5 },
      { id: 'ee-ec-08', name: 'Laplace Transform for Circuits', difficulty: 'Hard', done: false, estimatedHours: 5 },
    ]
  },
  {
    id: 'ee-machines', name: 'Electrical Machines', code: 'EM',
    weightage: 14, color: 'from-red-500 to-rose-500', icon: '⚙️',
    description: 'DC machines, transformers, induction and synchronous machines.',
    topics: [
      { id: 'ee-em-01', name: 'DC Generator — Types & Characteristics', difficulty: 'Medium', done: false, estimatedHours: 4 },
      { id: 'ee-em-02', name: 'DC Motor — Characteristics & Speed Control', difficulty: 'Medium', done: false, estimatedHours: 5 },
      { id: 'ee-em-03', name: 'Single-Phase Transformer — Theory & Equivalent Circuit', difficulty: 'Medium', done: false, estimatedHours: 5 },
      { id: 'ee-em-04', name: 'Three-Phase Transformer — Connections, OC & SC Tests', difficulty: 'Hard', done: false, estimatedHours: 5 },
      { id: 'ee-em-05', name: 'Three-Phase Induction Motor — Theory & Torque-Speed', difficulty: 'Hard', done: false, estimatedHours: 6 },
      { id: 'ee-em-06', name: 'Induction Motor — Starting & Speed Control', difficulty: 'Hard', done: false, estimatedHours: 5 },
      { id: 'ee-em-07', name: 'Synchronous Generator — EMF Equation, OCC, SCC', difficulty: 'Hard', done: false, estimatedHours: 6 },
      { id: 'ee-em-08', name: 'Synchronous Motor — V-Curves, Hunting', difficulty: 'Hard', done: false, estimatedHours: 5 },
      { id: 'ee-em-09', name: 'Special Machines — Stepper, BLDC, Servo', difficulty: 'Medium', done: false, estimatedHours: 3 },
    ]
  },
  {
    id: 'ee-power-systems', name: 'Power Systems', code: 'PS',
    weightage: 13, color: 'from-teal-500 to-cyan-500', icon: '🔋',
    description: 'Power generation, transmission, distribution and protection systems.',
    topics: [
      { id: 'ee-ps-01', name: 'Power System Structure — Generation to Load', difficulty: 'Easy', done: false, estimatedHours: 3 },
      { id: 'ee-ps-02', name: 'Per Unit System & Base Quantities', difficulty: 'Medium', done: false, estimatedHours: 4 },
      { id: 'ee-ps-03', name: 'Transmission Line Parameters & Models', difficulty: 'Hard', done: false, estimatedHours: 6 },
      { id: 'ee-ps-04', name: 'Power Flow Analysis — Gauss-Seidel, Newton-Raphson', difficulty: 'Hard', done: false, estimatedHours: 6 },
      { id: 'ee-ps-05', name: 'Symmetrical Fault Analysis', difficulty: 'Hard', done: false, estimatedHours: 5 },
      { id: 'ee-ps-06', name: 'Symmetrical Components & Unsymmetrical Faults', difficulty: 'Hard', done: false, estimatedHours: 6 },
      { id: 'ee-ps-07', name: 'Power System Protection — Relays & Circuit Breakers', difficulty: 'Medium', done: false, estimatedHours: 5 },
      { id: 'ee-ps-08', name: 'Economic Load Dispatch & Optimal Power Flow', difficulty: 'Hard', done: false, estimatedHours: 5 },
    ]
  },
  {
    id: 'ee-control', name: 'Control Systems', code: 'CS',
    weightage: 8, color: 'from-purple-500 to-indigo-500', icon: '🎮',
    description: 'Open and closed loop systems, stability, root locus and frequency response.',
    topics: [
      { id: 'ee-ctrl-01', name: 'Transfer Functions & Block Diagrams', difficulty: 'Easy', done: false, estimatedHours: 3 },
      { id: 'ee-ctrl-02', name: 'Time Response — Transient & Steady State Error', difficulty: 'Medium', done: false, estimatedHours: 5 },
      { id: 'ee-ctrl-03', name: 'Routh-Hurwitz Criterion', difficulty: 'Medium', done: false, estimatedHours: 4 },
      { id: 'ee-ctrl-04', name: 'Root Locus Technique', difficulty: 'Hard', done: false, estimatedHours: 6 },
      { id: 'ee-ctrl-05', name: 'Bode Plots & Frequency Response', difficulty: 'Hard', done: false, estimatedHours: 6 },
      { id: 'ee-ctrl-06', name: 'Nyquist Criterion & Polar Plots', difficulty: 'Hard', done: false, estimatedHours: 5 },
      { id: 'ee-ctrl-07', name: 'Compensators & PID Controllers', difficulty: 'Hard', done: false, estimatedHours: 5 },
      { id: 'ee-ctrl-08', name: 'State Space Representation', difficulty: 'Hard', done: false, estimatedHours: 5 },
    ]
  },
  {
    id: 'ee-power-electronics', name: 'Power Electronics', code: 'PE',
    weightage: 8, color: 'from-green-500 to-teal-500', icon: '🔌',
    description: 'Power devices, rectifiers, inverters, choppers and AC drives.',
    topics: [
      { id: 'ee-pe-01', name: 'Power Semiconductor Devices — SCR, MOSFET, IGBT', difficulty: 'Medium', done: false, estimatedHours: 4 },
      { id: 'ee-pe-02', name: 'Rectifiers — Uncontrolled & Controlled', difficulty: 'Medium', done: false, estimatedHours: 5 },
      { id: 'ee-pe-03', name: 'AC Voltage Controllers', difficulty: 'Medium', done: false, estimatedHours: 4 },
      { id: 'ee-pe-04', name: 'DC-DC Converters — Buck, Boost, Buck-Boost', difficulty: 'Hard', done: false, estimatedHours: 6 },
      { id: 'ee-pe-05', name: 'Inverters — Single Phase & Three Phase', difficulty: 'Hard', done: false, estimatedHours: 6 },
      { id: 'ee-pe-06', name: 'PWM Techniques', difficulty: 'Hard', done: false, estimatedHours: 5 },
    ]
  },
  {
    id: 'ee-signals', name: 'Signals & Systems', code: 'SS',
    weightage: 9, color: 'from-blue-500 to-cyan-500', icon: '📊',
    description: 'Continuous and discrete-time signals, LTI systems, Fourier and Laplace.',
    topics: [
      { id: 'ee-ss-01', name: 'Classification of Signals & Systems', difficulty: 'Easy', done: false, estimatedHours: 3 },
      { id: 'ee-ss-02', name: 'Convolution — CT & DT', difficulty: 'Medium', done: false, estimatedHours: 5 },
      { id: 'ee-ss-03', name: 'Fourier Series & Transform', difficulty: 'Hard', done: false, estimatedHours: 6 },
      { id: 'ee-ss-04', name: 'Laplace Transform & Applications', difficulty: 'Hard', done: false, estimatedHours: 6 },
      { id: 'ee-ss-05', name: 'Z-Transform & DTFT', difficulty: 'Hard', done: false, estimatedHours: 5 },
      { id: 'ee-ss-06', name: 'Sampling Theorem & Reconstruction', difficulty: 'Medium', done: false, estimatedHours: 4 },
    ]
  },
  {
    id: 'ee-analog', name: 'Analog Electronics', code: 'AE',
    weightage: 8, color: 'from-pink-500 to-red-500', icon: '🔬',
    description: 'Diodes, transistors, op-amps and analog circuit design.',
    topics: [
      { id: 'ee-ae-01', name: 'Diodes & Rectifier Circuits', difficulty: 'Easy', done: false, estimatedHours: 3 },
      { id: 'ee-ae-02', name: 'BJT Biasing & Amplifiers', difficulty: 'Hard', done: false, estimatedHours: 6 },
      { id: 'ee-ae-03', name: 'Operational Amplifiers & Applications', difficulty: 'Medium', done: false, estimatedHours: 5 },
      { id: 'ee-ae-04', name: 'Oscillators & Feedback Amplifiers', difficulty: 'Hard', done: false, estimatedHours: 5 },
    ]
  },
  {
    id: 'ee-digital', name: 'Digital Electronics', code: 'DE',
    weightage: 7, color: 'from-violet-500 to-purple-500', icon: '💡',
    description: 'Logic circuits, flip-flops, counters and digital system design.',
    topics: [
      { id: 'ee-de-01', name: 'Boolean Algebra & Logic Minimization', difficulty: 'Easy', done: false, estimatedHours: 3 },
      { id: 'ee-de-02', name: 'Combinational Circuit Design', difficulty: 'Medium', done: false, estimatedHours: 5 },
      { id: 'ee-de-03', name: 'Sequential Circuits — Flip-Flops & Counters', difficulty: 'Medium', done: false, estimatedHours: 5 },
      { id: 'ee-de-04', name: 'Analog to Digital & Digital to Analog Converters', difficulty: 'Medium', done: false, estimatedHours: 4 },
    ]
  },
  {
    id: 'ee-measurement', name: 'Electrical Measurements', code: 'EM2',
    weightage: 5, color: 'from-amber-500 to-yellow-400', icon: '📏',
    description: 'Measurement of electrical quantities and instrumentation.',
    topics: [
      { id: 'ee-meas-01', name: 'PMMC, MI & Electrodynamometer Instruments', difficulty: 'Medium', done: false, estimatedHours: 4 },
      { id: 'ee-meas-02', name: 'Measurement of R, L, C — Bridges', difficulty: 'Medium', done: false, estimatedHours: 4 },
      { id: 'ee-meas-03', name: 'CRO & Digital Meters', difficulty: 'Easy', done: false, estimatedHours: 3 },
      { id: 'ee-meas-04', name: 'Transducers & Signal Conditioning', difficulty: 'Medium', done: false, estimatedHours: 3 },
    ]
  },
  {
    id: 'ee-math', name: 'Engineering Mathematics', code: 'MATH',
    weightage: 13, color: 'from-sky-500 to-blue-500', icon: '∫',
    description: 'Linear algebra, calculus, differential equations and probability.',
    topics: [
      { id: 'ee-math-01', name: 'Linear Algebra — Matrices, Eigenvalues', difficulty: 'Medium', done: false, estimatedHours: 5 },
      { id: 'ee-math-02', name: 'Calculus — Differentiation & Integration', difficulty: 'Medium', done: false, estimatedHours: 5 },
      { id: 'ee-math-03', name: 'Differential Equations (ODEs & PDEs)', difficulty: 'Hard', done: false, estimatedHours: 6 },
      { id: 'ee-math-04', name: 'Complex Analysis', difficulty: 'Hard', done: false, estimatedHours: 5 },
      { id: 'ee-math-05', name: 'Probability & Statistics', difficulty: 'Hard', done: false, estimatedHours: 5 },
      { id: 'ee-math-06', name: 'Numerical Methods', difficulty: 'Medium', done: false, estimatedHours: 4 },
    ]
  },
  {
    id: 'ee-aptitude', name: 'General Aptitude', code: 'GA',
    weightage: 15, color: 'from-fuchsia-500 to-violet-500', icon: '🎯',
    description: 'Verbal ability, numerical ability and analytical reasoning.',
    topics: [
      { id: 'ee-ga-01', name: 'English Grammar & Verbal Reasoning', difficulty: 'Easy', done: false, estimatedHours: 4 },
      { id: 'ee-ga-02', name: 'Numerical Ability & Arithmetic', difficulty: 'Easy', done: false, estimatedHours: 4 },
      { id: 'ee-ga-03', name: 'Data Interpretation & Logical Reasoning', difficulty: 'Medium', done: false, estimatedHours: 4 },
    ]
  },
]

// ─── MECHANICAL ENGINEERING ───────────────────────────────────────
export const ME_SUBJECTS: Subject[] = [
  {
    id: 'me-thermo', name: 'Thermodynamics', code: 'THERMO',
    weightage: 12, color: 'from-red-500 to-orange-500', icon: '🔥',
    description: 'Laws of thermodynamics, power cycles, refrigeration and mixtures.',
    topics: [
      { id: 'me-th-01', name: 'Basic Concepts — System, Properties, State', difficulty: 'Easy', done: false, estimatedHours: 3 },
      { id: 'me-th-02', name: 'First Law of Thermodynamics', difficulty: 'Medium', done: false, estimatedHours: 5 },
      { id: 'me-th-03', name: 'Second Law — Entropy & Carnot Cycle', difficulty: 'Hard', done: false, estimatedHours: 6 },
      { id: 'me-th-04', name: 'Properties of Pure Substances & Steam Tables', difficulty: 'Medium', done: false, estimatedHours: 4 },
      { id: 'me-th-05', name: 'Gas Power Cycles (Otto, Diesel, Brayton)', difficulty: 'Hard', done: false, estimatedHours: 6 },
      { id: 'me-th-06', name: 'Vapour Power Cycles (Rankine, Reheat, Regenerative)', difficulty: 'Hard', done: false, estimatedHours: 5 },
      { id: 'me-th-07', name: 'Refrigeration & Heat Pumps', difficulty: 'Medium', done: false, estimatedHours: 4 },
      { id: 'me-th-08', name: 'Psychrometrics & Air Conditioning', difficulty: 'Medium', done: false, estimatedHours: 4 },
    ]
  },
  {
    id: 'me-fluid', name: 'Fluid Mechanics', code: 'FM',
    weightage: 11, color: 'from-blue-500 to-cyan-500', icon: '💧',
    description: 'Fluid statics, kinematics, momentum equations and flow analysis.',
    topics: [
      { id: 'me-fm-01', name: 'Fluid Properties — Viscosity, Surface Tension', difficulty: 'Easy', done: false, estimatedHours: 3 },
      { id: 'me-fm-02', name: 'Fluid Statics — Pressure & Buoyancy', difficulty: 'Easy', done: false, estimatedHours: 3 },
      { id: 'me-fm-03', name: 'Kinematics — Streamlines, Pathlines, Streak Lines', difficulty: 'Medium', done: false, estimatedHours: 4 },
      { id: 'me-fm-04', name: 'Continuity & Bernoulli\'s Equation', difficulty: 'Medium', done: false, estimatedHours: 4 },
      { id: 'me-fm-05', name: 'Reynolds Number & Flow Types', difficulty: 'Easy', done: false, estimatedHours: 3 },
      { id: 'me-fm-06', name: 'Momentum Equation — Control Volume Analysis', difficulty: 'Hard', done: false, estimatedHours: 5 },
      { id: 'me-fm-07', name: 'Pipe Flow — Friction Factor, Moody Chart', difficulty: 'Hard', done: false, estimatedHours: 5 },
      { id: 'me-fm-08', name: 'Boundary Layer Theory', difficulty: 'Hard', done: false, estimatedHours: 5 },
      { id: 'me-fm-09', name: 'Flow Measurements — Orifice, Venturimeter', difficulty: 'Medium', done: false, estimatedHours: 3 },
      { id: 'me-fm-10', name: 'Turbomachinery — Pumps & Turbines', difficulty: 'Hard', done: false, estimatedHours: 5 },
    ]
  },
  {
    id: 'me-som', name: 'Strength of Materials', code: 'SOM',
    weightage: 10, color: 'from-orange-500 to-amber-500', icon: '🏗️',
    description: 'Stress, strain, beams, columns and failure theories.',
    topics: [
      { id: 'me-som-01', name: 'Stress-Strain Relationship & Elastic Constants', difficulty: 'Easy', done: false, estimatedHours: 3 },
      { id: 'me-som-02', name: 'Axially Loaded Members & Statically Indeterminate', difficulty: 'Medium', done: false, estimatedHours: 4 },
      { id: 'me-som-03', name: 'Bending of Beams — SFD & BMD', difficulty: 'Medium', done: false, estimatedHours: 5 },
      { id: 'me-som-04', name: 'Bending Stresses & Flexure Formula', difficulty: 'Medium', done: false, estimatedHours: 4 },
      { id: 'me-som-05', name: 'Shear Stress in Beams', difficulty: 'Medium', done: false, estimatedHours: 4 },
      { id: 'me-som-06', name: 'Deflection of Beams — Macaulay\'s Method', difficulty: 'Hard', done: false, estimatedHours: 5 },
      { id: 'me-som-07', name: 'Torsion of Circular Shafts', difficulty: 'Medium', done: false, estimatedHours: 4 },
      { id: 'me-som-08', name: 'Columns & Buckling — Euler\'s Formula', difficulty: 'Hard', done: false, estimatedHours: 4 },
      { id: 'me-som-09', name: 'Principal Stresses & Mohr\'s Circle', difficulty: 'Hard', done: false, estimatedHours: 5 },
      { id: 'me-som-10', name: 'Strain Energy & Castigliano\'s Theorem', difficulty: 'Hard', done: false, estimatedHours: 4 },
    ]
  },
  {
    id: 'me-machine-design', name: 'Machine Design', code: 'MD',
    weightage: 8, color: 'from-gray-500 to-slate-600', icon: '🔩',
    description: 'Design of mechanical elements — shafts, gears, bearings, fasteners.',
    topics: [
      { id: 'me-md-01', name: 'Design for Static Loading — Failure Theories', difficulty: 'Medium', done: false, estimatedHours: 4 },
      { id: 'me-md-02', name: 'Design for Fatigue — Soderberg, Goodman', difficulty: 'Hard', done: false, estimatedHours: 5 },
      { id: 'me-md-03', name: 'Shaft Design & Keys', difficulty: 'Medium', done: false, estimatedHours: 4 },
      { id: 'me-md-04', name: 'Gear Design — Spur, Helical, Bevel', difficulty: 'Hard', done: false, estimatedHours: 5 },
      { id: 'me-md-05', name: 'Bearing Selection & Design', difficulty: 'Medium', done: false, estimatedHours: 4 },
      { id: 'me-md-06', name: 'Spring Design — Helical, Leaf', difficulty: 'Medium', done: false, estimatedHours: 3 },
      { id: 'me-md-07', name: 'Fasteners, Welded & Riveted Joints', difficulty: 'Medium', done: false, estimatedHours: 4 },
    ]
  },
  {
    id: 'me-manufacturing', name: 'Manufacturing Engineering', code: 'MFG',
    weightage: 12, color: 'from-yellow-600 to-amber-500', icon: '🏭',
    description: 'Metal casting, forming, machining, metrology and quality control.',
    topics: [
      { id: 'me-mfg-01', name: 'Metal Casting — Processes & Design', difficulty: 'Medium', done: false, estimatedHours: 4 },
      { id: 'me-mfg-02', name: 'Metal Forming — Rolling, Forging, Drawing', difficulty: 'Medium', done: false, estimatedHours: 4 },
      { id: 'me-mfg-03', name: 'Machining — Turning, Milling, Drilling', difficulty: 'Medium', done: false, estimatedHours: 5 },
      { id: 'me-mfg-04', name: 'Cutting Tool Geometry & Taylor\'s Tool Life', difficulty: 'Hard', done: false, estimatedHours: 5 },
      { id: 'me-mfg-05', name: 'Welding Processes & Design', difficulty: 'Medium', done: false, estimatedHours: 4 },
      { id: 'me-mfg-06', name: 'Metrology — Limits, Fits & Tolerances', difficulty: 'Medium', done: false, estimatedHours: 4 },
      { id: 'me-mfg-07', name: 'Quality Control — SQC, Control Charts', difficulty: 'Medium', done: false, estimatedHours: 4 },
      { id: 'me-mfg-08', name: 'Unconventional Machining — EDM, LBM, USM', difficulty: 'Hard', done: false, estimatedHours: 4 },
    ]
  },
  {
    id: 'me-tom', name: 'Theory of Machines', code: 'TOM',
    weightage: 10, color: 'from-teal-500 to-green-500', icon: '⚙️',
    description: 'Kinematics, dynamics, vibrations and mechanisms.',
    topics: [
      { id: 'me-tom-01', name: 'Kinematics of Mechanisms — Links, Joints', difficulty: 'Medium', done: false, estimatedHours: 4 },
      { id: 'me-tom-02', name: 'Velocity & Acceleration Analysis', difficulty: 'Hard', done: false, estimatedHours: 5 },
      { id: 'me-tom-03', name: 'Gear Trains — Simple, Compound, Epicyclic', difficulty: 'Hard', done: false, estimatedHours: 6 },
      { id: 'me-tom-04', name: 'Cams & Followers', difficulty: 'Medium', done: false, estimatedHours: 4 },
      { id: 'me-tom-05', name: 'Balancing — Static & Dynamic', difficulty: 'Hard', done: false, estimatedHours: 5 },
      { id: 'me-tom-06', name: 'Flywheels & Governors', difficulty: 'Medium', done: false, estimatedHours: 4 },
      { id: 'me-tom-07', name: 'Vibrations — Free, Forced, Damped', difficulty: 'Hard', done: false, estimatedHours: 6 },
    ]
  },
  {
    id: 'me-heat', name: 'Heat Transfer', code: 'HT',
    weightage: 9, color: 'from-red-600 to-pink-500', icon: '🌡️',
    description: 'Conduction, convection, radiation and heat exchangers.',
    topics: [
      { id: 'me-ht-01', name: 'Conduction — Fourier\'s Law, Steady State 1D', difficulty: 'Medium', done: false, estimatedHours: 4 },
      { id: 'me-ht-02', name: 'Conduction — Extended Surfaces (Fins)', difficulty: 'Hard', done: false, estimatedHours: 4 },
      { id: 'me-ht-03', name: 'Transient Conduction — Lumped System Analysis', difficulty: 'Hard', done: false, estimatedHours: 4 },
      { id: 'me-ht-04', name: 'Convection — Newton\'s Law of Cooling, Dimensionless Numbers', difficulty: 'Medium', done: false, estimatedHours: 4 },
      { id: 'me-ht-05', name: 'Forced & Natural Convection Correlations', difficulty: 'Hard', done: false, estimatedHours: 5 },
      { id: 'me-ht-06', name: 'Radiation — Stefan-Boltzmann, View Factors', difficulty: 'Hard', done: false, estimatedHours: 5 },
      { id: 'me-ht-07', name: 'Heat Exchangers — LMTD & NTU Methods', difficulty: 'Hard', done: false, estimatedHours: 5 },
    ]
  },
  {
    id: 'me-engineering-math', name: 'Engineering Mathematics', code: 'MATH',
    weightage: 13, color: 'from-sky-500 to-blue-500', icon: '∫',
    description: 'Calculus, linear algebra, differential equations and probability for GATE ME.',
    topics: [
      { id: 'me-math-01', name: 'Linear Algebra & Matrix Operations', difficulty: 'Medium', done: false, estimatedHours: 5 },
      { id: 'me-math-02', name: 'Calculus — Differentiation & Integration', difficulty: 'Medium', done: false, estimatedHours: 5 },
      { id: 'me-math-03', name: 'Differential Equations (ODEs)', difficulty: 'Hard', done: false, estimatedHours: 6 },
      { id: 'me-math-04', name: 'Laplace Transform', difficulty: 'Hard', done: false, estimatedHours: 5 },
      { id: 'me-math-05', name: 'Probability & Statistics', difficulty: 'Medium', done: false, estimatedHours: 5 },
      { id: 'me-math-06', name: 'Numerical Methods', difficulty: 'Medium', done: false, estimatedHours: 4 },
    ]
  },
  {
    id: 'me-aptitude', name: 'General Aptitude', code: 'GA',
    weightage: 15, color: 'from-fuchsia-500 to-violet-500', icon: '🎯',
    description: 'Verbal ability, numerical ability and analytical reasoning.',
    topics: [
      { id: 'me-ga-01', name: 'English Grammar & Verbal Reasoning', difficulty: 'Easy', done: false, estimatedHours: 4 },
      { id: 'me-ga-02', name: 'Numerical Ability & Arithmetic', difficulty: 'Easy', done: false, estimatedHours: 4 },
      { id: 'me-ga-03', name: 'Data Interpretation & Logical Reasoning', difficulty: 'Medium', done: false, estimatedHours: 4 },
    ]
  },
]

// ─── CIVIL ENGINEERING ────────────────────────────────────────────
export const CE_SUBJECTS: Subject[] = [
  {
    id: 'ce-structures', name: 'Structural Analysis', code: 'SA',
    weightage: 13, color: 'from-amber-600 to-orange-500', icon: '🏛️',
    description: 'Statically determinate and indeterminate structures, energy methods.',
    topics: [
      { id: 'ce-sa-01', name: 'Determinate Structures — Beams, Trusses, Frames', difficulty: 'Medium', done: false, estimatedHours: 5 },
      { id: 'ce-sa-02', name: 'Influence Lines', difficulty: 'Hard', done: false, estimatedHours: 5 },
      { id: 'ce-sa-03', name: 'Indeterminate Structures — Force Method', difficulty: 'Hard', done: false, estimatedHours: 6 },
      { id: 'ce-sa-04', name: 'Slope Deflection & Moment Distribution', difficulty: 'Hard', done: false, estimatedHours: 6 },
      { id: 'ce-sa-05', name: 'Stiffness Matrix Method', difficulty: 'Hard', done: false, estimatedHours: 5 },
      { id: 'ce-sa-06', name: 'Arches & Cables', difficulty: 'Medium', done: false, estimatedHours: 4 },
    ]
  },
  {
    id: 'ce-concrete', name: 'RCC & Steel Design', code: 'RCC',
    weightage: 12, color: 'from-gray-600 to-slate-500', icon: '🏗️',
    description: 'Design of reinforced concrete and steel structures per IS codes.',
    topics: [
      { id: 'ce-rcc-01', name: 'Working Stress & Limit State Method', difficulty: 'Medium', done: false, estimatedHours: 4 },
      { id: 'ce-rcc-02', name: 'RCC Beams — Design for Flexure & Shear', difficulty: 'Hard', done: false, estimatedHours: 6 },
      { id: 'ce-rcc-03', name: 'RCC Slabs — One-Way & Two-Way', difficulty: 'Hard', done: false, estimatedHours: 5 },
      { id: 'ce-rcc-04', name: 'RCC Columns & Footings', difficulty: 'Hard', done: false, estimatedHours: 5 },
      { id: 'ce-rcc-05', name: 'Steel Design — Tension & Compression Members', difficulty: 'Hard', done: false, estimatedHours: 5 },
      { id: 'ce-rcc-06', name: 'Welded & Bolted Connections', difficulty: 'Medium', done: false, estimatedHours: 4 },
      { id: 'ce-rcc-07', name: 'Steel Beams & Plate Girders', difficulty: 'Hard', done: false, estimatedHours: 5 },
    ]
  },
  {
    id: 'ce-geotech', name: 'Geotechnical Engineering', code: 'GEO',
    weightage: 12, color: 'from-yellow-700 to-amber-600', icon: '🌍',
    description: 'Soil mechanics, site investigation, foundations and stability.',
    topics: [
      { id: 'ce-geo-01', name: 'Soil Classification & Phase Relations', difficulty: 'Easy', done: false, estimatedHours: 3 },
      { id: 'ce-geo-02', name: 'Permeability & Seepage Analysis', difficulty: 'Medium', done: false, estimatedHours: 5 },
      { id: 'ce-geo-03', name: 'Consolidation — Terzaghi\'s Theory', difficulty: 'Hard', done: false, estimatedHours: 5 },
      { id: 'ce-geo-04', name: 'Shear Strength — Mohr-Coulomb Criterion', difficulty: 'Hard', done: false, estimatedHours: 5 },
      { id: 'ce-geo-05', name: 'Earth Pressure Theories — Rankine, Coulomb', difficulty: 'Hard', done: false, estimatedHours: 5 },
      { id: 'ce-geo-06', name: 'Bearing Capacity of Soil', difficulty: 'Hard', done: false, estimatedHours: 5 },
      { id: 'ce-geo-07', name: 'Slope Stability Analysis', difficulty: 'Hard', done: false, estimatedHours: 5 },
      { id: 'ce-geo-08', name: 'Foundation Types & Pile Design', difficulty: 'Hard', done: false, estimatedHours: 5 },
    ]
  },
  {
    id: 'ce-fluid', name: 'Fluid Mechanics & Hydraulics', code: 'FMH',
    weightage: 12, color: 'from-blue-500 to-cyan-500', icon: '💧',
    description: 'Fluid properties, flow analysis, open channel flow and hydraulic machines.',
    topics: [
      { id: 'ce-fmh-01', name: 'Hydrostatics & Pressure Measurement', difficulty: 'Easy', done: false, estimatedHours: 3 },
      { id: 'ce-fmh-02', name: 'Bernoulli\'s Equation & Applications', difficulty: 'Medium', done: false, estimatedHours: 4 },
      { id: 'ce-fmh-03', name: 'Pipe Flow & Network Analysis', difficulty: 'Hard', done: false, estimatedHours: 5 },
      { id: 'ce-fmh-04', name: 'Open Channel Flow — Manning\'s Equation', difficulty: 'Hard', done: false, estimatedHours: 5 },
      { id: 'ce-fmh-05', name: 'Hydraulic Jump & Flow Profiles', difficulty: 'Hard', done: false, estimatedHours: 5 },
      { id: 'ce-fmh-06', name: 'Dimensional Analysis & Similitude', difficulty: 'Medium', done: false, estimatedHours: 4 },
      { id: 'ce-fmh-07', name: 'Hydraulic Pumps & Turbines', difficulty: 'Medium', done: false, estimatedHours: 4 },
    ]
  },
  {
    id: 'ce-transportation', name: 'Transportation Engineering', code: 'TE',
    weightage: 10, color: 'from-green-600 to-teal-500', icon: '🛣️',
    description: 'Highway engineering, traffic engineering and pavement design.',
    topics: [
      { id: 'ce-te-01', name: 'Highway Geometric Design', difficulty: 'Medium', done: false, estimatedHours: 4 },
      { id: 'ce-te-02', name: 'Pavement Design — Flexible & Rigid', difficulty: 'Hard', done: false, estimatedHours: 5 },
      { id: 'ce-te-03', name: 'Traffic Engineering — Volume Studies, Capacity', difficulty: 'Medium', done: false, estimatedHours: 4 },
      { id: 'ce-te-04', name: 'Signal Design & Intersection Design', difficulty: 'Hard', done: false, estimatedHours: 5 },
      { id: 'ce-te-05', name: 'Railway Engineering', difficulty: 'Medium', done: false, estimatedHours: 3 },
      { id: 'ce-te-06', name: 'Airport & Harbour Engineering', difficulty: 'Easy', done: false, estimatedHours: 2 },
    ]
  },
  {
    id: 'ce-water', name: 'Water Resources Engineering', code: 'WRE',
    weightage: 11, color: 'from-sky-500 to-blue-500', icon: '🌊',
    description: 'Hydrology, water demand, irrigation and dam engineering.',
    topics: [
      { id: 'ce-wre-01', name: 'Hydrology — Rainfall, Runoff, Hydrographs', difficulty: 'Hard', done: false, estimatedHours: 5 },
      { id: 'ce-wre-02', name: 'Unit Hydrograph Theory', difficulty: 'Hard', done: false, estimatedHours: 5 },
      { id: 'ce-wre-03', name: 'Ground Water — Darcy\'s Law, Well Hydraulics', difficulty: 'Hard', done: false, estimatedHours: 5 },
      { id: 'ce-wre-04', name: 'Reservoir & Dam Engineering', difficulty: 'Medium', done: false, estimatedHours: 4 },
      { id: 'ce-wre-05', name: 'Irrigation Methods & Canal Design', difficulty: 'Medium', done: false, estimatedHours: 4 },
    ]
  },
  {
    id: 'ce-env', name: 'Environmental Engineering', code: 'EE2',
    weightage: 9, color: 'from-emerald-500 to-green-500', icon: '🌿',
    description: 'Water treatment, waste water treatment, air pollution and solid waste.',
    topics: [
      { id: 'ce-env-01', name: 'Water Demand & Distribution', difficulty: 'Easy', done: false, estimatedHours: 3 },
      { id: 'ce-env-02', name: 'Water Treatment — Coagulation, Filtration, Disinfection', difficulty: 'Medium', done: false, estimatedHours: 4 },
      { id: 'ce-env-03', name: 'Sewage Treatment — Primary, Secondary, Tertiary', difficulty: 'Medium', done: false, estimatedHours: 5 },
      { id: 'ce-env-04', name: 'BOD, COD & Oxygen Sag Curve', difficulty: 'Hard', done: false, estimatedHours: 4 },
      { id: 'ce-env-05', name: 'Air Pollution — Sources, Standards, Control', difficulty: 'Medium', done: false, estimatedHours: 3 },
      { id: 'ce-env-06', name: 'Solid Waste Management', difficulty: 'Easy', done: false, estimatedHours: 2 },
    ]
  },
  {
    id: 'ce-surveying', name: 'Surveying', code: 'SUR',
    weightage: 6, color: 'from-violet-500 to-purple-500', icon: '📐',
    description: 'Basic surveying, levelling, theodolite work and remote sensing.',
    topics: [
      { id: 'ce-sur-01', name: 'Levelling & Differential Levelling', difficulty: 'Easy', done: false, estimatedHours: 3 },
      { id: 'ce-sur-02', name: 'Theodolite Surveying & Traversing', difficulty: 'Medium', done: false, estimatedHours: 4 },
      { id: 'ce-sur-03', name: 'Errors & Adjustments in Surveying', difficulty: 'Medium', done: false, estimatedHours: 3 },
      { id: 'ce-sur-04', name: 'Remote Sensing & GIS Basics', difficulty: 'Easy', done: false, estimatedHours: 2 },
    ]
  },
  {
    id: 'ce-math', name: 'Engineering Mathematics', code: 'MATH',
    weightage: 13, color: 'from-sky-500 to-indigo-500', icon: '∫',
    description: 'Linear algebra, calculus, complex analysis and probability.',
    topics: [
      { id: 'ce-math-01', name: 'Linear Algebra', difficulty: 'Medium', done: false, estimatedHours: 5 },
      { id: 'ce-math-02', name: 'Calculus & ODEs', difficulty: 'Medium', done: false, estimatedHours: 6 },
      { id: 'ce-math-03', name: 'Fourier Series & Transform', difficulty: 'Hard', done: false, estimatedHours: 4 },
      { id: 'ce-math-04', name: 'Probability & Statistics', difficulty: 'Medium', done: false, estimatedHours: 5 },
      { id: 'ce-math-05', name: 'Numerical Methods', difficulty: 'Medium', done: false, estimatedHours: 4 },
    ]
  },
  {
    id: 'ce-aptitude', name: 'General Aptitude', code: 'GA',
    weightage: 15, color: 'from-fuchsia-500 to-violet-500', icon: '🎯',
    description: 'Verbal ability, numerical ability and analytical reasoning.',
    topics: [
      { id: 'ce-ga-01', name: 'English Grammar & Verbal Reasoning', difficulty: 'Easy', done: false, estimatedHours: 4 },
      { id: 'ce-ga-02', name: 'Numerical Ability & Arithmetic', difficulty: 'Easy', done: false, estimatedHours: 4 },
      { id: 'ce-ga-03', name: 'Data Interpretation & Logical Reasoning', difficulty: 'Medium', done: false, estimatedHours: 4 },
    ]
  },
]

// ─── BIOTECHNOLOGY ────────────────────────────────────────────────
export const BT_SUBJECTS: Subject[] = [
  {
    id: 'bt-microbiology', name: 'Microbiology', code: 'MICRO',
    weightage: 14, color: 'from-green-500 to-emerald-500', icon: '🦠',
    description: 'Prokaryotes, eukaryotes, microbial growth, pathogenicity and control.',
    topics: [
      { id: 'bt-micro-01', name: 'Cell Structure — Prokaryotes vs Eukaryotes', difficulty: 'Easy', done: false, estimatedHours: 3 },
      { id: 'bt-micro-02', name: 'Microbial Taxonomy & Classification', difficulty: 'Medium', done: false, estimatedHours: 4 },
      { id: 'bt-micro-03', name: 'Microbial Growth Kinetics & Growth Curve', difficulty: 'Medium', done: false, estimatedHours: 4 },
      { id: 'bt-micro-04', name: 'Sterilization & Disinfection Methods', difficulty: 'Easy', done: false, estimatedHours: 3 },
      { id: 'bt-micro-05', name: 'Virology — Virus Structure & Replication', difficulty: 'Medium', done: false, estimatedHours: 4 },
      { id: 'bt-micro-06', name: 'Fungi & Algae — Characteristics', difficulty: 'Easy', done: false, estimatedHours: 3 },
      { id: 'bt-micro-07', name: 'Microbial Genetics — Transformation, Transduction', difficulty: 'Hard', done: false, estimatedHours: 5 },
      { id: 'bt-micro-08', name: 'Industrial Microbiology', difficulty: 'Medium', done: false, estimatedHours: 4 },
    ]
  },
  {
    id: 'bt-biochemistry', name: 'Biochemistry', code: 'BIOCHEM',
    weightage: 13, color: 'from-blue-500 to-indigo-500', icon: '🧪',
    description: 'Biomolecules, metabolism, enzymology and bioenergetics.',
    topics: [
      { id: 'bt-bc-01', name: 'Amino Acids, Peptides & Proteins', difficulty: 'Medium', done: false, estimatedHours: 4 },
      { id: 'bt-bc-02', name: 'Protein Structure — Primary to Quaternary', difficulty: 'Medium', done: false, estimatedHours: 4 },
      { id: 'bt-bc-03', name: 'Carbohydrates — Structure & Function', difficulty: 'Easy', done: false, estimatedHours: 3 },
      { id: 'bt-bc-04', name: 'Lipids & Membranes', difficulty: 'Easy', done: false, estimatedHours: 3 },
      { id: 'bt-bc-05', name: 'Nucleic Acids — DNA & RNA Structure', difficulty: 'Medium', done: false, estimatedHours: 4 },
      { id: 'bt-bc-06', name: 'Enzymes — Kinetics, Michaelis-Menten', difficulty: 'Hard', done: false, estimatedHours: 6 },
      { id: 'bt-bc-07', name: 'Glycolysis & Gluconeogenesis', difficulty: 'Medium', done: false, estimatedHours: 5 },
      { id: 'bt-bc-08', name: 'TCA Cycle & Oxidative Phosphorylation', difficulty: 'Hard', done: false, estimatedHours: 5 },
      { id: 'bt-bc-09', name: 'Fatty Acid Metabolism', difficulty: 'Hard', done: false, estimatedHours: 4 },
      { id: 'bt-bc-10', name: 'Amino Acid Catabolism & Urea Cycle', difficulty: 'Hard', done: false, estimatedHours: 4 },
    ]
  },
  {
    id: 'bt-molecular-biology', name: 'Molecular Biology & Genetics', code: 'MBG',
    weightage: 14, color: 'from-violet-500 to-purple-500', icon: '🧬',
    description: 'DNA replication, transcription, translation, gene regulation and mutations.',
    topics: [
      { id: 'bt-mbg-01', name: 'DNA Replication — Prokaryotic & Eukaryotic', difficulty: 'Hard', done: false, estimatedHours: 5 },
      { id: 'bt-mbg-02', name: 'Transcription & RNA Processing', difficulty: 'Medium', done: false, estimatedHours: 4 },
      { id: 'bt-mbg-03', name: 'Translation & Genetic Code', difficulty: 'Medium', done: false, estimatedHours: 4 },
      { id: 'bt-mbg-04', name: 'Gene Regulation — Operons', difficulty: 'Hard', done: false, estimatedHours: 5 },
      { id: 'bt-mbg-05', name: 'Mendelian Genetics & Extensions', difficulty: 'Medium', done: false, estimatedHours: 4 },
      { id: 'bt-mbg-06', name: 'Chromosomal Basis of Inheritance', difficulty: 'Medium', done: false, estimatedHours: 4 },
      { id: 'bt-mbg-07', name: 'Mutations & DNA Repair Mechanisms', difficulty: 'Hard', done: false, estimatedHours: 5 },
      { id: 'bt-mbg-08', name: 'Recombinant DNA Technology — Cloning, PCR', difficulty: 'Hard', done: false, estimatedHours: 6 },
    ]
  },
  {
    id: 'bt-process', name: 'Bioprocess Engineering', code: 'BPE',
    weightage: 12, color: 'from-orange-500 to-amber-500', icon: '⚗️',
    description: 'Bioreactor design, fermentation, downstream processing and mass transfer.',
    topics: [
      { id: 'bt-bpe-01', name: 'Bioreactor Types & Design', difficulty: 'Hard', done: false, estimatedHours: 6 },
      { id: 'bt-bpe-02', name: 'Fermentation Kinetics & Media Optimization', difficulty: 'Hard', done: false, estimatedHours: 5 },
      { id: 'bt-bpe-03', name: 'Sterilization in Bioprocesses', difficulty: 'Medium', done: false, estimatedHours: 3 },
      { id: 'bt-bpe-04', name: 'Mass Transfer — Oxygen Transfer Rate', difficulty: 'Hard', done: false, estimatedHours: 5 },
      { id: 'bt-bpe-05', name: 'Downstream Processing — Filtration, Centrifugation', difficulty: 'Medium', done: false, estimatedHours: 4 },
      { id: 'bt-bpe-06', name: 'Chromatographic Separations', difficulty: 'Hard', done: false, estimatedHours: 4 },
      { id: 'bt-bpe-07', name: 'Scale-up of Bioprocesses', difficulty: 'Hard', done: false, estimatedHours: 4 },
    ]
  },
  {
    id: 'bt-immunology', name: 'Immunology', code: 'IMMUNO',
    weightage: 9, color: 'from-pink-500 to-rose-500', icon: '🛡️',
    description: 'Innate and adaptive immunity, antibodies, vaccines and immunotechnology.',
    topics: [
      { id: 'bt-imm-01', name: 'Innate & Adaptive Immunity', difficulty: 'Medium', done: false, estimatedHours: 4 },
      { id: 'bt-imm-02', name: 'Antigens & Antibody Structure', difficulty: 'Medium', done: false, estimatedHours: 4 },
      { id: 'bt-imm-03', name: 'B & T Cell Development & Activation', difficulty: 'Hard', done: false, estimatedHours: 5 },
      { id: 'bt-imm-04', name: 'MHC & Antigen Presentation', difficulty: 'Hard', done: false, estimatedHours: 4 },
      { id: 'bt-imm-05', name: 'Monoclonal Antibodies & Hybridoma Technology', difficulty: 'Hard', done: false, estimatedHours: 4 },
      { id: 'bt-imm-06', name: 'Vaccines — Types, Development', difficulty: 'Medium', done: false, estimatedHours: 3 },
    ]
  },
  {
    id: 'bt-bioinfo-basics', name: 'Bioinformatics Basics', code: 'BINFO',
    weightage: 5, color: 'from-cyan-500 to-teal-500', icon: '💻',
    description: 'Sequence analysis, databases, BLAST and phylogenetics basics.',
    topics: [
      { id: 'bt-bi-01', name: 'Biological Databases — NCBI, UniProt, PDB', difficulty: 'Easy', done: false, estimatedHours: 2 },
      { id: 'bt-bi-02', name: 'Sequence Alignment — Pairwise, BLAST', difficulty: 'Medium', done: false, estimatedHours: 4 },
      { id: 'bt-bi-03', name: 'Multiple Sequence Alignment & Phylogenetics', difficulty: 'Hard', done: false, estimatedHours: 4 },
      { id: 'bt-bi-04', name: 'Protein Structure Prediction', difficulty: 'Hard', done: false, estimatedHours: 3 },
    ]
  },
  {
    id: 'bt-math', name: 'Engineering Mathematics', code: 'MATH',
    weightage: 13, color: 'from-sky-500 to-blue-500', icon: '∫',
    description: 'Linear algebra, calculus, probability and statistics for GATE BT.',
    topics: [
      { id: 'bt-math-01', name: 'Linear Algebra', difficulty: 'Medium', done: false, estimatedHours: 4 },
      { id: 'bt-math-02', name: 'Calculus & Differential Equations', difficulty: 'Medium', done: false, estimatedHours: 5 },
      { id: 'bt-math-03', name: 'Probability & Statistics', difficulty: 'Hard', done: false, estimatedHours: 5 },
      { id: 'bt-math-04', name: 'Optimization Methods', difficulty: 'Medium', done: false, estimatedHours: 3 },
    ]
  },
  {
    id: 'bt-aptitude', name: 'General Aptitude', code: 'GA',
    weightage: 15, color: 'from-fuchsia-500 to-violet-500', icon: '🎯',
    description: 'Verbal ability, numerical ability and analytical reasoning.',
    topics: [
      { id: 'bt-ga-01', name: 'English Grammar & Verbal Reasoning', difficulty: 'Easy', done: false, estimatedHours: 4 },
      { id: 'bt-ga-02', name: 'Numerical Ability & Arithmetic', difficulty: 'Easy', done: false, estimatedHours: 4 },
      { id: 'bt-ga-03', name: 'Logical Reasoning', difficulty: 'Medium', done: false, estimatedHours: 4 },
    ]
  },
]

// ─── DATA SCIENCE & AI (DA) ───────────────────────────────────────
export const DA_SUBJECTS: Subject[] = [
  {
    id: 'da-prob-stats', name: 'Probability & Statistics', code: 'PROB',
    weightage: 20, color: 'from-blue-500 to-indigo-500', icon: '📊',
    description: 'Core probability theory, distributions and statistical inference for GATE DA.',
    topics: [
      { id: 'da-ps-01', name: 'Sample Space, Events & Axioms of Probability', difficulty: 'Easy', done: false, estimatedHours: 3 },
      { id: 'da-ps-02', name: 'Conditional Probability & Bayes\' Theorem', difficulty: 'Medium', done: false, estimatedHours: 4 },
      { id: 'da-ps-03', name: 'Random Variables — Discrete & Continuous', difficulty: 'Medium', done: false, estimatedHours: 5 },
      { id: 'da-ps-04', name: 'Probability Distributions — Bernoulli, Binomial, Poisson', difficulty: 'Hard', done: false, estimatedHours: 5 },
      { id: 'da-ps-05', name: 'Normal, Exponential & Uniform Distributions', difficulty: 'Hard', done: false, estimatedHours: 5 },
      { id: 'da-ps-06', name: 'Joint Distributions & Independence', difficulty: 'Hard', done: false, estimatedHours: 5 },
      { id: 'da-ps-07', name: 'Expectation, Variance, Covariance & Correlation', difficulty: 'Medium', done: false, estimatedHours: 4 },
      { id: 'da-ps-08', name: 'Central Limit Theorem & Law of Large Numbers', difficulty: 'Hard', done: false, estimatedHours: 4 },
      { id: 'da-ps-09', name: 'Point Estimation — MLE & MAP', difficulty: 'Hard', done: false, estimatedHours: 5 },
      { id: 'da-ps-10', name: 'Hypothesis Testing & Confidence Intervals', difficulty: 'Hard', done: false, estimatedHours: 5 },
    ]
  },
  {
    id: 'da-linear-algebra', name: 'Linear Algebra', code: 'LA',
    weightage: 12, color: 'from-violet-500 to-purple-500', icon: '🔢',
    description: 'Vectors, matrices, eigenvalues and their applications in data science.',
    topics: [
      { id: 'da-la-01', name: 'Vectors — Spaces, Subspaces, Basis', difficulty: 'Medium', done: false, estimatedHours: 4 },
      { id: 'da-la-02', name: 'Matrix Operations — Rank, Nullspace', difficulty: 'Medium', done: false, estimatedHours: 4 },
      { id: 'da-la-03', name: 'Solving Linear Systems — Gauss Elimination', difficulty: 'Medium', done: false, estimatedHours: 4 },
      { id: 'da-la-04', name: 'Eigenvalues & Eigenvectors', difficulty: 'Hard', done: false, estimatedHours: 5 },
      { id: 'da-la-05', name: 'Singular Value Decomposition (SVD)', difficulty: 'Hard', done: false, estimatedHours: 5 },
      { id: 'da-la-06', name: 'PCA & Dimensionality Reduction', difficulty: 'Hard', done: false, estimatedHours: 5 },
    ]
  },
  {
    id: 'da-calculus', name: 'Calculus & Optimization', code: 'CALC',
    weightage: 10, color: 'from-teal-500 to-green-500', icon: '∫',
    description: 'Differential and integral calculus, multivariable calculus and optimization.',
    topics: [
      { id: 'da-calc-01', name: 'Limits, Continuity & Differentiability', difficulty: 'Medium', done: false, estimatedHours: 4 },
      { id: 'da-calc-02', name: 'Partial Derivatives & Gradient', difficulty: 'Medium', done: false, estimatedHours: 4 },
      { id: 'da-calc-03', name: 'Chain Rule & Jacobians', difficulty: 'Hard', done: false, estimatedHours: 4 },
      { id: 'da-calc-04', name: 'Maxima, Minima & Lagrange Multipliers', difficulty: 'Hard', done: false, estimatedHours: 5 },
      { id: 'da-calc-05', name: 'Gradient Descent & Variants', difficulty: 'Hard', done: false, estimatedHours: 5 },
      { id: 'da-calc-06', name: 'Convexity & Convex Optimization', difficulty: 'Hard', done: false, estimatedHours: 5 },
    ]
  },
  {
    id: 'da-ml', name: 'Machine Learning', code: 'ML',
    weightage: 22, color: 'from-orange-500 to-red-500', icon: '🤖',
    description: 'Supervised, unsupervised learning, neural networks and model evaluation.',
    topics: [
      { id: 'da-ml-01', name: 'Supervised Learning — Regression & Classification', difficulty: 'Medium', done: false, estimatedHours: 5 },
      { id: 'da-ml-02', name: 'Linear & Logistic Regression', difficulty: 'Medium', done: false, estimatedHours: 5 },
      { id: 'da-ml-03', name: 'Decision Trees & Random Forests', difficulty: 'Medium', done: false, estimatedHours: 4 },
      { id: 'da-ml-04', name: 'Support Vector Machines (SVM)', difficulty: 'Hard', done: false, estimatedHours: 5 },
      { id: 'da-ml-05', name: 'k-NN Algorithm', difficulty: 'Easy', done: false, estimatedHours: 3 },
      { id: 'da-ml-06', name: 'Naive Bayes Classifier', difficulty: 'Medium', done: false, estimatedHours: 3 },
      { id: 'da-ml-07', name: 'Unsupervised — k-Means, Hierarchical Clustering', difficulty: 'Medium', done: false, estimatedHours: 4 },
      { id: 'da-ml-08', name: 'Neural Networks — Feedforward & Backpropagation', difficulty: 'Hard', done: false, estimatedHours: 6 },
      { id: 'da-ml-09', name: 'CNN & RNN Basics', difficulty: 'Hard', done: false, estimatedHours: 6 },
      { id: 'da-ml-10', name: 'Bias-Variance Tradeoff & Regularization', difficulty: 'Hard', done: false, estimatedHours: 5 },
      { id: 'da-ml-11', name: 'Cross Validation & Model Selection', difficulty: 'Medium', done: false, estimatedHours: 4 },
      { id: 'da-ml-12', name: 'Evaluation Metrics — Accuracy, F1, AUC-ROC', difficulty: 'Medium', done: false, estimatedHours: 4 },
    ]
  },
  {
    id: 'da-programming', name: 'Programming & Data Structures', code: 'PDS',
    weightage: 18, color: 'from-yellow-500 to-orange-400', icon: '💻',
    description: 'Python, algorithms and data structures for data science.',
    topics: [
      { id: 'da-pds-01', name: 'Python Basics — Data Types, Control Flow', difficulty: 'Easy', done: false, estimatedHours: 3 },
      { id: 'da-pds-02', name: 'Python — Functions, OOP, Libraries (NumPy, Pandas)', difficulty: 'Medium', done: false, estimatedHours: 5 },
      { id: 'da-pds-03', name: 'Data Structures — Arrays, Lists, Stacks, Queues', difficulty: 'Easy', done: false, estimatedHours: 3 },
      { id: 'da-pds-04', name: 'Trees, Graphs & Hashing', difficulty: 'Medium', done: false, estimatedHours: 5 },
      { id: 'da-pds-05', name: 'Sorting & Searching Algorithms', difficulty: 'Medium', done: false, estimatedHours: 4 },
      { id: 'da-pds-06', name: 'SQL & Relational Databases', difficulty: 'Medium', done: false, estimatedHours: 5 },
      { id: 'da-pds-07', name: 'Big Data Concepts — MapReduce, Hadoop', difficulty: 'Hard', done: false, estimatedHours: 4 },
    ]
  },
  {
    id: 'da-ai', name: 'Artificial Intelligence', code: 'AI',
    weightage: 10, color: 'from-pink-500 to-violet-500', icon: '🧠',
    description: 'Search algorithms, knowledge representation and reasoning.',
    topics: [
      { id: 'da-ai-01', name: 'Search Strategies — BFS, DFS, A*', difficulty: 'Medium', done: false, estimatedHours: 4 },
      { id: 'da-ai-02', name: 'Constraint Satisfaction Problems', difficulty: 'Hard', done: false, estimatedHours: 4 },
      { id: 'da-ai-03', name: 'Game Playing — Minimax & Alpha-Beta', difficulty: 'Hard', done: false, estimatedHours: 4 },
      { id: 'da-ai-04', name: 'Propositional & Predicate Logic', difficulty: 'Medium', done: false, estimatedHours: 4 },
      { id: 'da-ai-05', name: 'Bayesian Networks & Inference', difficulty: 'Hard', done: false, estimatedHours: 5 },
      { id: 'da-ai-06', name: 'Reinforcement Learning Basics', difficulty: 'Hard', done: false, estimatedHours: 5 },
    ]
  },
  {
    id: 'da-aptitude', name: 'General Aptitude', code: 'GA',
    weightage: 15, color: 'from-fuchsia-500 to-violet-500', icon: '🎯',
    description: 'Verbal ability, numerical ability and analytical reasoning.',
    topics: [
      { id: 'da-ga-01', name: 'English Grammar & Verbal Reasoning', difficulty: 'Easy', done: false, estimatedHours: 4 },
      { id: 'da-ga-02', name: 'Numerical Ability & Arithmetic', difficulty: 'Easy', done: false, estimatedHours: 4 },
      { id: 'da-ga-03', name: 'Logical Reasoning', difficulty: 'Medium', done: false, estimatedHours: 4 },
    ]
  },
]