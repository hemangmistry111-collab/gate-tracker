import { Stream } from '@/types'
import { CS_SUBJECTS } from '@/data/cs/subjects'
import { ECE_SUBJECTS } from '@/data/ece/subjects'
import { EE_SUBJECTS, ME_SUBJECTS, CE_SUBJECTS, BT_SUBJECTS, DA_SUBJECTS } from '@/data/streams/other-subjects'

export const ALL_STREAMS: Stream[] = [
  {
    id: 'cs',
    name: 'Computer Science & Information Technology',
    shortName: 'CS/IT',
    icon: '💻',
    color: 'from-violet-600 to-purple-700',
    examCode: 'CS',
    description: 'One of the most popular GATE papers covering algorithms, OS, DBMS, networks, TOC, COA and more.',
    subjects: CS_SUBJECTS,
  },
  {
    id: 'ece',
    name: 'Electronics & Communication Engineering',
    shortName: 'ECE',
    icon: '📡',
    color: 'from-blue-600 to-cyan-700',
    examCode: 'EC',
    description: 'Covers signals & systems, analog/digital circuits, communications, control systems and electromagnetics.',
    subjects: ECE_SUBJECTS,
  },
  {
    id: 'ee',
    name: 'Electrical Engineering',
    shortName: 'EE',
    icon: '⚡',
    color: 'from-yellow-500 to-orange-600',
    examCode: 'EE',
    description: 'Covers electric circuits, power systems, machines, control systems, power electronics and measurements.',
    subjects: EE_SUBJECTS,
  },
  {
    id: 'me',
    name: 'Mechanical Engineering',
    shortName: 'ME',
    icon: '⚙️',
    color: 'from-gray-500 to-slate-700',
    examCode: 'ME',
    description: 'Covers thermodynamics, fluid mechanics, manufacturing, strength of materials, heat transfer and machine design.',
    subjects: ME_SUBJECTS,
  },
  {
    id: 'ce',
    name: 'Civil Engineering',
    shortName: 'CE',
    icon: '🏗️',
    color: 'from-amber-600 to-yellow-700',
    examCode: 'CE',
    description: 'Covers structural analysis, geotechnical engineering, fluid mechanics, transportation and environmental engineering.',
    subjects: CE_SUBJECTS,
  },
  {
    id: 'bt',
    name: 'Biotechnology',
    shortName: 'BT',
    icon: '🧬',
    color: 'from-green-600 to-emerald-700',
    examCode: 'BT',
    description: 'Covers microbiology, biochemistry, molecular biology, bioprocess engineering and immunology.',
    subjects: BT_SUBJECTS,
  },
  {
    id: 'da',
    name: 'Data Science & Artificial Intelligence',
    shortName: 'DA',
    icon: '🤖',
    color: 'from-pink-600 to-rose-700',
    examCode: 'DA',
    description: 'New GATE paper covering probability, linear algebra, ML, programming, AI and data analytics.',
    subjects: DA_SUBJECTS,
  },
  // Additional streams (simplified)
  {
    id: 'bi',
    name: 'Biomedical Engineering',
    shortName: 'BM',
    icon: '🏥',
    color: 'from-red-500 to-rose-600',
    examCode: 'BM',
    description: 'Covers human physiology, medical imaging, biomechanics and biomedical signal processing.',
    subjects: [
      {
        id: 'bi-physiology', name: 'Human Anatomy & Physiology', code: 'HAP',
        weightage: 20, color: 'from-red-500 to-rose-500', icon: '🫀',
        topics: [
          { id: 'bi-hap-01', name: 'Cardiovascular System', difficulty: 'Medium', done: false },
          { id: 'bi-hap-02', name: 'Respiratory System', difficulty: 'Medium', done: false },
          { id: 'bi-hap-03', name: 'Nervous System', difficulty: 'Hard', done: false },
          { id: 'bi-hap-04', name: 'Musculoskeletal System', difficulty: 'Medium', done: false },
          { id: 'bi-hap-05', name: 'Renal & Endocrine Systems', difficulty: 'Medium', done: false },
        ]
      },
      {
        id: 'bi-signals', name: 'Biomedical Signal Processing', code: 'BSP',
        weightage: 15, color: 'from-violet-500 to-purple-500', icon: '📊',
        topics: [
          { id: 'bi-bsp-01', name: 'ECG, EEG, EMG Signal Analysis', difficulty: 'Hard', done: false },
          { id: 'bi-bsp-02', name: 'Digital Signal Processing for Biomedical', difficulty: 'Hard', done: false },
          { id: 'bi-bsp-03', name: 'Biosensors & Transducers', difficulty: 'Medium', done: false },
        ]
      },
      {
        id: 'bi-imaging', name: 'Medical Imaging Systems', code: 'MIS',
        weightage: 15, color: 'from-cyan-500 to-blue-500', icon: '🔬',
        topics: [
          { id: 'bi-mis-01', name: 'X-Ray & CT Imaging', difficulty: 'Medium', done: false },
          { id: 'bi-mis-02', name: 'MRI & Ultrasound', difficulty: 'Hard', done: false },
          { id: 'bi-mis-03', name: 'Nuclear Imaging — PET, SPECT', difficulty: 'Hard', done: false },
        ]
      },
      {
        id: 'bi-biomech', name: 'Biomechanics', code: 'BM2',
        weightage: 12, color: 'from-orange-500 to-amber-500', icon: '🦴',
        topics: [
          { id: 'bi-bm-01', name: 'Static & Dynamic Biomechanics', difficulty: 'Medium', done: false },
          { id: 'bi-bm-02', name: 'Biomaterials — Properties & Biocompatibility', difficulty: 'Medium', done: false },
          { id: 'bi-bm-03', name: 'Prosthetics & Orthotics Design', difficulty: 'Hard', done: false },
        ]
      },
      {
        id: 'bi-math', name: 'Engineering Mathematics', code: 'MATH',
        weightage: 15, color: 'from-sky-500 to-blue-500', icon: '∫',
        topics: [
          { id: 'bi-math-01', name: 'Linear Algebra & Calculus', difficulty: 'Medium', done: false },
          { id: 'bi-math-02', name: 'Differential Equations', difficulty: 'Hard', done: false },
          { id: 'bi-math-03', name: 'Probability & Statistics', difficulty: 'Hard', done: false },
        ]
      },
      {
        id: 'bi-aptitude', name: 'General Aptitude', code: 'GA',
        weightage: 15, color: 'from-fuchsia-500 to-violet-500', icon: '🎯',
        topics: [
          { id: 'bi-ga-01', name: 'Verbal Ability', difficulty: 'Easy', done: false },
          { id: 'bi-ga-02', name: 'Numerical Ability', difficulty: 'Easy', done: false },
          { id: 'bi-ga-03', name: 'Logical Reasoning', difficulty: 'Medium', done: false },
        ]
      },
    ]
  },
  {
    id: 'ae',
    name: 'Aerospace Engineering',
    shortName: 'AE',
    icon: '✈️',
    color: 'from-sky-600 to-blue-800',
    examCode: 'AE',
    description: 'Covers flight mechanics, aerodynamics, structures, propulsion and space dynamics.',
    subjects: [
      { id: 'ae-aero', name: 'Aerodynamics', code: 'AERO', weightage: 25, color: 'from-sky-500 to-blue-500', icon: '🌬️',
        topics: [
          { id: 'ae-aero-01', name: 'Basic Fluid Mechanics & Thermodynamics', difficulty: 'Medium', done: false },
          { id: 'ae-aero-02', name: 'Airfoil Theory & Thin Airfoil Theory', difficulty: 'Hard', done: false },
          { id: 'ae-aero-03', name: 'Subsonic & Supersonic Flow', difficulty: 'Hard', done: false },
          { id: 'ae-aero-04', name: 'Boundary Layer Theory', difficulty: 'Hard', done: false },
        ]
      },
      { id: 'ae-flight', name: 'Flight Mechanics', code: 'FM', weightage: 20, color: 'from-indigo-500 to-violet-500', icon: '🛩️',
        topics: [
          { id: 'ae-fm-01', name: 'Atmosphere & Standard Atmosphere', difficulty: 'Easy', done: false },
          { id: 'ae-fm-02', name: 'Static & Dynamic Stability', difficulty: 'Hard', done: false },
          { id: 'ae-fm-03', name: 'Aircraft Performance — Climb, Range, Endurance', difficulty: 'Hard', done: false },
        ]
      },
      { id: 'ae-structures', name: 'Aerospace Structures', code: 'AS', weightage: 20, color: 'from-orange-500 to-amber-500', icon: '🏗️',
        topics: [
          { id: 'ae-as-01', name: 'Stress-Strain & Failure Theories', difficulty: 'Medium', done: false },
          { id: 'ae-as-02', name: 'Bending & Torsion of Thin-Walled Structures', difficulty: 'Hard', done: false },
          { id: 'ae-as-03', name: 'Buckling of Aerospace Structures', difficulty: 'Hard', done: false },
        ]
      },
      { id: 'ae-propulsion', name: 'Propulsion', code: 'PROP', weightage: 15, color: 'from-red-500 to-orange-500', icon: '🚀',
        topics: [
          { id: 'ae-prop-01', name: 'Jet Propulsion — Turbojet, Turbofan', difficulty: 'Hard', done: false },
          { id: 'ae-prop-02', name: 'Rocket Propulsion & Specific Impulse', difficulty: 'Hard', done: false },
        ]
      },
      { id: 'ae-math', name: 'Engineering Mathematics', code: 'MATH', weightage: 15, color: 'from-sky-500 to-blue-500', icon: '∫',
        topics: [
          { id: 'ae-math-01', name: 'Linear Algebra & Calculus', difficulty: 'Medium', done: false },
          { id: 'ae-math-02', name: 'ODEs & PDEs', difficulty: 'Hard', done: false },
          { id: 'ae-math-03', name: 'Probability & Statistics', difficulty: 'Medium', done: false },
        ]
      },
      { id: 'ae-aptitude', name: 'General Aptitude', code: 'GA', weightage: 15, color: 'from-fuchsia-500 to-violet-500', icon: '🎯',
        topics: [
          { id: 'ae-ga-01', name: 'Verbal Ability', difficulty: 'Easy', done: false },
          { id: 'ae-ga-02', name: 'Numerical Ability', difficulty: 'Easy', done: false },
        ]
      },
    ]
  },
  {
    id: 'ch',
    name: 'Chemical Engineering',
    shortName: 'CH',
    icon: '⚗️',
    color: 'from-teal-600 to-green-700',
    examCode: 'CH',
    description: 'Covers mass & energy balances, thermodynamics, heat & mass transfer, reaction engineering.',
    subjects: [
      { id: 'ch-thermo', name: 'Chemical Engineering Thermodynamics', code: 'CET', weightage: 18, color: 'from-red-500 to-orange-500', icon: '🔥',
        topics: [
          { id: 'ch-th-01', name: 'Laws of Thermodynamics & Equations of State', difficulty: 'Hard', done: false },
          { id: 'ch-th-02', name: 'Phase Equilibria & VLE', difficulty: 'Hard', done: false },
          { id: 'ch-th-03', name: 'Solution Thermodynamics & Activity Coefficients', difficulty: 'Hard', done: false },
        ]
      },
      { id: 'ch-masstransfer', name: 'Mass Transfer', code: 'MT', weightage: 15, color: 'from-blue-500 to-cyan-500', icon: '💧',
        topics: [
          { id: 'ch-mt-01', name: 'Diffusion — Fick\'s Laws', difficulty: 'Medium', done: false },
          { id: 'ch-mt-02', name: 'Absorption & Stripping', difficulty: 'Hard', done: false },
          { id: 'ch-mt-03', name: 'Distillation — McCabe-Thiele', difficulty: 'Hard', done: false },
          { id: 'ch-mt-04', name: 'Extraction & Leaching', difficulty: 'Medium', done: false },
        ]
      },
      { id: 'ch-reaction', name: 'Chemical Reaction Engineering', code: 'CRE', weightage: 18, color: 'from-purple-500 to-violet-500', icon: '⚗️',
        topics: [
          { id: 'ch-cre-01', name: 'Batch & Continuous Reactors (CSTR, PFR)', difficulty: 'Hard', done: false },
          { id: 'ch-cre-02', name: 'Reaction Kinetics & Rate Laws', difficulty: 'Hard', done: false },
          { id: 'ch-cre-03', name: 'Non-Ideal Flow & RTD', difficulty: 'Hard', done: false },
        ]
      },
      { id: 'ch-fluid', name: 'Fluid Mechanics & Mechanical Operations', code: 'FMMO', weightage: 14, color: 'from-teal-500 to-green-500', icon: '🌊',
        topics: [
          { id: 'ch-fm-01', name: 'Fluid Statics & Bernoulli Equation', difficulty: 'Medium', done: false },
          { id: 'ch-fm-02', name: 'Pipe Flow & Pumps', difficulty: 'Hard', done: false },
          { id: 'ch-fm-03', name: 'Filtration, Sedimentation & Centrifugation', difficulty: 'Medium', done: false },
        ]
      },
      { id: 'ch-math', name: 'Engineering Mathematics', code: 'MATH', weightage: 15, color: 'from-sky-500 to-blue-500', icon: '∫',
        topics: [
          { id: 'ch-math-01', name: 'Linear Algebra & ODEs', difficulty: 'Medium', done: false },
          { id: 'ch-math-02', name: 'Probability & Numerical Methods', difficulty: 'Medium', done: false },
        ]
      },
      { id: 'ch-aptitude', name: 'General Aptitude', code: 'GA', weightage: 15, color: 'from-fuchsia-500 to-violet-500', icon: '🎯',
        topics: [
          { id: 'ch-ga-01', name: 'Verbal & Numerical Ability', difficulty: 'Easy', done: false },
          { id: 'ch-ga-02', name: 'Logical Reasoning', difficulty: 'Medium', done: false },
        ]
      },
    ]
  },
  {
    id: 'ph',
    name: 'Physics',
    shortName: 'PH',
    icon: '⚛️',
    color: 'from-indigo-600 to-blue-800',
    examCode: 'PH',
    description: 'Covers classical mechanics, quantum mechanics, thermodynamics, electromagnetism and solid state physics.',
    subjects: [
      { id: 'ph-classical', name: 'Classical Mechanics', code: 'CM', weightage: 16, color: 'from-blue-500 to-indigo-500', icon: '🌍',
        topics: [
          { id: 'ph-cm-01', name: 'Lagrangian & Hamiltonian Mechanics', difficulty: 'Hard', done: false },
          { id: 'ph-cm-02', name: 'Central Force Motion & Kepler\'s Laws', difficulty: 'Hard', done: false },
          { id: 'ph-cm-03', name: 'Rigid Body Dynamics', difficulty: 'Hard', done: false },
          { id: 'ph-cm-04', name: 'Small Oscillations', difficulty: 'Hard', done: false },
        ]
      },
      { id: 'ph-quantum', name: 'Quantum Mechanics', code: 'QM', weightage: 20, color: 'from-violet-500 to-purple-500', icon: '🔬',
        topics: [
          { id: 'ph-qm-01', name: 'Schrödinger Equation & Wave Functions', difficulty: 'Hard', done: false },
          { id: 'ph-qm-02', name: 'Operators, Commutators & Uncertainty', difficulty: 'Hard', done: false },
          { id: 'ph-qm-03', name: 'Angular Momentum & Spin', difficulty: 'Hard', done: false },
          { id: 'ph-qm-04', name: 'Perturbation Theory', difficulty: 'Hard', done: false },
        ]
      },
      { id: 'ph-em', name: 'Electrodynamics', code: 'ED', weightage: 15, color: 'from-yellow-500 to-orange-500', icon: '⚡',
        topics: [
          { id: 'ph-em-01', name: 'Maxwell\'s Equations & Wave Propagation', difficulty: 'Hard', done: false },
          { id: 'ph-em-02', name: 'Radiation & Multipole Expansion', difficulty: 'Hard', done: false },
        ]
      },
      { id: 'ph-solid', name: 'Solid State Physics', code: 'SSP', weightage: 15, color: 'from-teal-500 to-green-500', icon: '💎',
        topics: [
          { id: 'ph-ssp-01', name: 'Crystal Structure & Reciprocal Lattice', difficulty: 'Hard', done: false },
          { id: 'ph-ssp-02', name: 'Band Theory & Semiconductors', difficulty: 'Hard', done: false },
          { id: 'ph-ssp-03', name: 'Magnetism & Superconductivity', difficulty: 'Hard', done: false },
        ]
      },
      { id: 'ph-math', name: 'Mathematical Physics', code: 'MATH', weightage: 15, color: 'from-sky-500 to-blue-500', icon: '∫',
        topics: [
          { id: 'ph-math-01', name: 'Complex Analysis & Contour Integration', difficulty: 'Hard', done: false },
          { id: 'ph-math-02', name: 'Linear Algebra & Tensor Analysis', difficulty: 'Hard', done: false },
          { id: 'ph-math-03', name: 'Group Theory Basics', difficulty: 'Hard', done: false },
        ]
      },
      { id: 'ph-aptitude', name: 'General Aptitude', code: 'GA', weightage: 15, color: 'from-fuchsia-500 to-violet-500', icon: '🎯',
        topics: [
          { id: 'ph-ga-01', name: 'Verbal & Numerical Ability', difficulty: 'Easy', done: false },
          { id: 'ph-ga-02', name: 'Logical Reasoning', difficulty: 'Medium', done: false },
        ]
      },
    ]
  },
]

export const getStreamById = (id: string) => ALL_STREAMS.find(s => s.id === id)
export const getStreamSubject = (streamId: string, subjectId: string) => {
  const stream = getStreamById(streamId)
  return stream?.subjects.find(s => s.id === subjectId)
}
