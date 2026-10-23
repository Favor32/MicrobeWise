// Educational quiz. Verify the questions against WHO/CDC sources before publishing.

export const topics = [
  { slug: "all", name: "All topics" },
  { slug: "microbe-basics", name: "Microbe basics" },
  { slug: "infectious-diseases", name: "Infectious diseases" },
  { slug: "lab-science", name: "Laboratory science" },
  { slug: "prevention", name: "Prevention and resistance" },
];

export const difficulties = [
  { slug: "all", name: "Mixed" },
  { slug: "easy", name: "Easy" },
  { slug: "medium", name: "Medium" },
  { slug: "hard", name: "Hard" },
];

export const questions = [
  // ---------- MICROBE BASICS ----------
  {
    id: "b1",
    topic: "microbe-basics",
    difficulty: "easy",
    question: "Which of these is NOT a bacterium?",
    options: [
      "Escherichia coli",
      "Staphylococcus aureus",
      "Candida albicans",
      "Mycobacterium tuberculosis",
    ],
    answer: 2,
    explanation:
      "Candida albicans is a yeast, which is a type of fungus. The other three are bacteria.",
  },
  {
    id: "b2",
    topic: "microbe-basics",
    difficulty: "easy",
    question: "Where can a virus reproduce?",
    options: [
      "Only inside a living host cell",
      "On any damp surface",
      "In clean drinking water",
      "In soil only",
    ],
    answer: 0,
    explanation:
      "Viruses cannot reproduce on their own. They must enter a host cell and use its machinery to make copies of themselves.",
  },
  {
    id: "b3",
    topic: "microbe-basics",
    difficulty: "easy",
    question: "What type of organism is Plasmodium falciparum?",
    options: [
      "A virus",
      "A bacterium",
      "A single-celled parasite (protozoan)",
      "A mould",
    ],
    answer: 2,
    explanation:
      "Plasmodium species are single-celled parasites. P. falciparum causes the most dangerous form of malaria.",
  },
  {
    id: "b4",
    topic: "microbe-basics",
    difficulty: "easy",
    question: "Which statement about microbes is most accurate?",
    options: [
      "All microbes cause disease",
      "Most microbes are harmless or helpful, and only some cause disease",
      "Only bacteria are helpful",
      "Microbes only live in dirty places",
    ],
    answer: 1,
    explanation:
      "Microbes help us digest food, make foods like yoghurt and bread, and recycle nutrients. Only a minority cause disease.",
  },
  {
    id: "b5",
    topic: "microbe-basics",
    difficulty: "medium",
    question: "Fungal cells are best described as:",
    options: [
      "Cells with no nucleus",
      "Cells with a nucleus and a cell wall containing chitin",
      "Non-living particles",
      "Cells with chloroplasts",
    ],
    answer: 1,
    explanation:
      "Fungi are eukaryotes: their cells have a nucleus. Their cell walls contain chitin, and they have no chloroplasts.",
  },
  {
    id: "b6",
    topic: "microbe-basics",
    difficulty: "medium",
    question: "Under the microscope, Staphylococcus aureus typically appears as:",
    options: [
      "Spiral-shaped cells",
      "Long chains of rods",
      "Round cells in grape-like clusters",
      "Thread-like hyphae",
    ],
    answer: 2,
    explanation:
      "Staphylococci are round cells (cocci) that group in clusters. The name comes from the Greek word for a bunch of grapes.",
  },
  {
    id: "b7",
    topic: "microbe-basics",
    difficulty: "medium",
    question: "Which structure do bacterial cells lack?",
    options: [
      "A cell membrane",
      "Ribosomes",
      "A membrane-bound nucleus",
      "Genetic material",
    ],
    answer: 2,
    explanation:
      "Bacteria are prokaryotes. They have DNA, but it is not enclosed in a membrane-bound nucleus.",
  },
  {
    id: "b8",
    topic: "microbe-basics",
    difficulty: "hard",
    question: "Why are viruses not considered cells?",
    options: [
      "They are too large",
      "They have no genetic material",
      "They lack their own cell structure and metabolism, and depend on a host cell",
      "They only infect plants",
    ],
    answer: 2,
    explanation:
      "Viruses carry genetic material (DNA or RNA) in a protein coat, but have no cell structure of their own and rely on host cells to reproduce.",
  },

  // ---------- INFECTIOUS DISEASES ----------
  {
    id: "d1",
    topic: "infectious-diseases",
    difficulty: "easy",
    question: "Malaria is spread to people mainly by the bite of:",
    options: [
      "Infected Anopheles mosquitoes",
      "Houseflies",
      "Ticks",
      "Cockroaches",
    ],
    answer: 0,
    explanation:
      "Female Anopheles mosquitoes carry the Plasmodium parasite and pass it on when they bite.",
  },
  {
    id: "d2",
    topic: "infectious-diseases",
    difficulty: "easy",
    question: "How does tuberculosis (TB) of the lungs mainly spread?",
    options: [
      "Through the air from a person with active lung TB",
      "By sharing cups and plates",
      "By shaking hands",
      "By mosquito bites",
    ],
    answer: 0,
    explanation:
      "TB bacteria spread in tiny airborne droplets when a person with active lung TB coughs, speaks, or sings. It does not spread by handshakes or shared utensils.",
  },
  {
    id: "d3",
    topic: "infectious-diseases",
    difficulty: "medium",
    question: "Which of these is NOT a way hepatitis B virus spreads?",
    options: [
      "From mother to baby at birth",
      "Contact with infected blood",
      "Unsafe injections",
      "Sharing a meal or hugging",
    ],
    answer: 3,
    explanation:
      "Hepatitis B spreads through blood and body fluids, not through casual contact such as hugging or sharing food.",
  },
  {
    id: "d4",
    topic: "infectious-diseases",
    difficulty: "medium",
    question: "What is the main cause of cervical cancer?",
    options: [
      "Persistent infection with high-risk types of HPV",
      "Using public toilets",
      "Infection with influenza virus",
      "Eating contaminated food",
    ],
    answer: 0,
    explanation:
      "Persistent infection with high-risk HPV types causes almost all cervical cancer. Vaccination and screening make it largely preventable.",
  },
  {
    id: "d5",
    topic: "infectious-diseases",
    difficulty: "medium",
    question: "Why is the flu vaccine updated regularly?",
    options: [
      "The vaccine expires every month",
      "Influenza viruses change over time",
      "People forget the vaccine",
      "Flu is caused by bacteria",
    ],
    answer: 1,
    explanation:
      "Influenza viruses gradually change, so the vaccine is updated to match the viruses that are circulating.",
  },
  {
    id: "d6",
    topic: "infectious-diseases",
    difficulty: "medium",
    question: "Which statement about hepatitis B is correct?",
    options: [
      "Everyone infected has obvious symptoms",
      "Many infected people have no symptoms, so testing is important",
      "It can only be caught by children",
      "It cannot be prevented",
    ],
    answer: 1,
    explanation:
      "Many people with hepatitis B feel well, so a blood test is the only way to know. A vaccine can prevent it.",
  },
  {
    id: "d7",
    topic: "infectious-diseases",
    difficulty: "hard",
    question:
      "Why can a yeast infection such as thrush sometimes follow a course of antibiotics?",
    options: [
      "Antibiotics contain yeast",
      "Antibiotics can disturb the normal microbial balance, letting yeast overgrow",
      "Antibiotics kill all fungi",
      "Antibiotics make people allergic to yeast",
    ],
    answer: 1,
    explanation:
      "Antibiotics act on bacteria, not fungi. By reducing normal bacteria, they can let Candida grow more than usual in some people.",
  },
  {
    id: "d8",
    topic: "infectious-diseases",
    difficulty: "hard",
    question: "Why is TB treated with several medicines for many months?",
    options: [
      "TB bacteria grow slowly and are hard to kill, and combining medicines helps prevent drug resistance",
      "Each medicine treats a different symptom only",
      "Because TB is caused by a virus",
      "Because treatment is only a precaution",
    ],
    answer: 0,
    explanation:
      "M. tuberculosis grows slowly and has a tough, waxy cell wall. Using several medicines for the full course helps cure the disease and lowers the chance of resistance.",
  },

  // ---------- LABORATORY SCIENCE ----------
  {
    id: "l1",
    topic: "lab-science",
    difficulty: "easy",
    question: "What does 'culturing' a sample mean in a microbiology lab?",
    options: [
      "Painting it with dye",
      "Growing the microbes on a nutrient medium",
      "Freezing it",
      "Counting the people affected",
    ],
    answer: 1,
    explanation:
      "Culturing means giving microbes the nutrients and conditions they need to multiply so they can be identified.",
  },
  {
    id: "l2",
    topic: "lab-science",
    difficulty: "easy",
    question: "Which lab method is commonly used to see malaria parasites?",
    options: [
      "Microscopy of a stained blood film",
      "Urine dipstick only",
      "X-ray",
      "Stool culture",
    ],
    answer: 0,
    explanation:
      "Examining a stained blood film under the microscope is a standard method for finding malaria parasites. Rapid diagnostic tests are also widely used.",
  },
  {
    id: "l3",
    topic: "lab-science",
    difficulty: "medium",
    question: "In a Gram stain, Gram-positive bacteria appear:",
    options: ["Purple or violet", "Pink or red", "Colourless", "Yellow"],
    answer: 0,
    explanation:
      "Gram-positive bacteria keep the crystal violet stain and look purple. Gram-negative bacteria lose it and take up the pink counterstain.",
  },
  {
    id: "l4",
    topic: "lab-science",
    difficulty: "medium",
    question: "Acid-fast staining is mainly used to identify:",
    options: [
      "Mycobacteria such as the TB bacterium",
      "Yeasts",
      "Influenza viruses",
      "Malaria parasites",
    ],
    answer: 0,
    explanation:
      "The waxy cell wall of mycobacteria holds on to the stain even after an acid wash, so they are called acid-fast.",
  },
  {
    id: "l5",
    topic: "lab-science",
    difficulty: "medium",
    question: "What does antibiotic susceptibility testing show?",
    options: [
      "Which antibiotics are likely to work against a particular bacterium",
      "How old a patient is",
      "Whether a person is vaccinated",
      "Which food caused an infection",
    ],
    answer: 0,
    explanation:
      "Susceptibility tests help clinicians choose a suitable antibiotic and detect resistance.",
  },
  {
    id: "l6",
    topic: "lab-science",
    difficulty: "hard",
    question: "The Xpert MTB/RIF test is best described as:",
    options: [
      "A molecular test that detects TB bacteria's DNA and resistance to rifampicin",
      "A blood test for malaria",
      "A vaccine",
      "A Gram stain",
    ],
    answer: 0,
    explanation:
      "Xpert MTB/RIF is a rapid molecular test. It detects M. tuberculosis DNA and also flags resistance to rifampicin, a key TB medicine.",
  },

  // ---------- PREVENTION AND RESISTANCE ----------
  {
    id: "p1",
    topic: "prevention",
    difficulty: "easy",
    question:
      "Which simple habit helps reduce the spread of diarrhoeal disease?",
    options: [
      "Washing hands with soap and clean water",
      "Rinsing hands with a little dust",
      "Wiping hands on clothes",
      "Avoiding all contact with people",
    ],
    answer: 0,
    explanation:
      "Handwashing with soap, especially after using the toilet and before preparing or eating food, removes many germs.",
  },
  {
    id: "p2",
    topic: "prevention",
    difficulty: "easy",
    question: "How do insecticide-treated bed nets help prevent malaria?",
    options: [
      "They reduce mosquito bites during sleep",
      "They cure the infection",
      "They purify water",
      "They kill the parasite in the blood",
    ],
    answer: 0,
    explanation:
      "Nets form a barrier against mosquitoes, and the insecticide kills or repels those that land on them.",
  },
  {
    id: "p3",
    topic: "prevention",
    difficulty: "easy",
    question: "What is antimicrobial resistance (AMR)?",
    options: [
      "When the human body becomes immune to medicines",
      "When microbes change so that medicines no longer work well against them",
      "When medicines expire",
      "When vaccines fail to arrive",
    ],
    answer: 1,
    explanation:
      "It is the microbes that become resistant, not the person. Resistant infections can be harder to treat.",
  },
  {
    id: "p4",
    topic: "prevention",
    difficulty: "medium",
    question:
      "Which practice contributes to antibiotic resistance?",
    options: [
      "Taking antibiotics for viral infections like colds",
      "Washing hands regularly",
      "Getting vaccinated",
      "Using antibiotics only when prescribed",
    ],
    answer: 0,
    explanation:
      "Antibiotics do not work against viruses. Unnecessary use gives bacteria more chances to develop resistance.",
  },
  {
    id: "p5",
    topic: "prevention",
    difficulty: "medium",
    question: "When is HPV vaccination most effective?",
    options: [
      "Before a person is exposed to HPV, so before sexual activity begins",
      "Only after developing cancer",
      "Only after age 60",
      "It has no effect",
    ],
    answer: 0,
    explanation:
      "The vaccine prevents infection, so it works best when given before exposure. Health authorities recommend specific ages, so follow local guidance.",
  },
  {
    id: "p6",
    topic: "prevention",
    difficulty: "medium",
    question:
      "What is a reliable household way to make water of uncertain quality safer to drink?",
    options: [
      "Let it sit for a few minutes",
      "Bring it to a rolling boil",
      "Stir it with a spoon",
      "Add a little salt",
    ],
    answer: 1,
    explanation:
      "Bringing water to a rolling boil kills most disease-causing microbes. Let it cool and store it in a clean, covered container.",
  },
  {
    id: "p7",
    topic: "prevention",
    difficulty: "hard",
    question: "What does the BCG vaccine mainly protect against?",
    options: [
      "Malaria",
      "Severe forms of TB in young children",
      "Hepatitis B",
      "Influenza",
    ],
    answer: 1,
    explanation:
      "BCG protects babies and young children against severe forms of TB. It is less effective at preventing lung TB in adults.",
  },
  {
    id: "p8",
    topic: "prevention",
    difficulty: "hard",
    question: "Why is a hepatitis B vaccine dose recommended soon after birth?",
    options: [
      "To prevent infection passing from mother to baby",
      "To protect against malaria",
      "To treat jaundice",
      "To replace breastfeeding",
    ],
    answer: 0,
    explanation:
      "Hepatitis B can pass from mother to child at birth, and infection early in life often becomes chronic. A timely birth dose greatly lowers that risk.",
  },
];