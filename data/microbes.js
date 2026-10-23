// Educational summaries. Verify against the linked sources before publishing.

export const microbes = [
  {
    slug: "escherichia-coli",
    name: "Escherichia coli",
    commonName: "E. coli",
    category: "bacteria",
    shortDescription:
      "A rod-shaped bacterium that lives in the human gut. Most strains are harmless, but some cause serious illness.",
    classification: "Bacteria, Gram-negative, family Enterobacteriaceae",
    characteristics:
      "E. coli is a common inhabitant of the intestines of humans and animals. Most strains are harmless and are part of the normal gut community. Some strains carry genes that let them cause disease.",
    morphology:
      "Gram-negative, rod-shaped cell. Many strains have flagella for movement and hair-like pili for attaching to surfaces.",
    habitat:
      "The intestines of humans and warm-blooded animals. It is also found in faecally contaminated water, soil, and food.",
    diseases: [
      "Diarrhoeal illness (including Shiga toxin-producing strains)",
      "Urinary tract infections",
    ],
    transmission: [
      "Eating contaminated food, such as undercooked meat or unwashed produce",
      "Drinking water contaminated with faeces",
      "Contact with infected people or animals, especially without handwashing",
    ],
    symptoms: [
      "Diarrhoea, which can be bloody with some strains",
      "Stomach cramps",
      "Vomiting or nausea in some people",
    ],
    diagnosis: [
      "Stool culture and laboratory identification",
      "Urine culture for urinary tract infections",
    ],
    prevention: [
      "Wash hands with soap and clean water, especially after using the toilet and before preparing food",
      "Cook meat thoroughly",
      "Use safe, treated drinking water",
      "Wash fruit and vegetables well",
    ],
    note: "Most E. coli are harmless, and gut bacteria like it play a role in normal digestion. E. coli is also widely used in biotechnology research.",
    references: [
      { label: "WHO: E. coli fact sheet", url: "https://www.who.int/news-room/fact-sheets/detail/e-coli" },
    ],
  },
  {
    slug: "mycobacterium-tuberculosis",
    name: "Mycobacterium tuberculosis",
    commonName: "TB bacillus",
    category: "bacteria",
    shortDescription:
      "The slow-growing bacterium that causes tuberculosis, usually affecting the lungs.",
    classification: "Bacteria, acid-fast, family Mycobacteriaceae",
    characteristics:
      "M. tuberculosis grows slowly and can survive inside immune cells. Its waxy cell wall makes it hard to treat, which is why TB treatment uses several drugs over many months.",
    morphology:
      "Rod-shaped, with a lipid-rich cell wall. It does not stain well with the standard Gram stain and is identified using acid-fast staining.",
    habitat:
      "Humans are the main reservoir. The bacteria spread in tiny droplets from people with active lung TB.",
    diseases: ["Tuberculosis (TB), most often pulmonary TB"],
    transmission: [
      "Through the air, when a person with active lung TB coughs, speaks, or sings",
      "It does not spread through shaking hands, sharing food, or touching surfaces",
    ],
    symptoms: [
      "Persistent cough lasting weeks",
      "Fever and night sweats",
      "Weight loss",
      "Chest pain or coughing blood in some cases",
    ],
    diagnosis: [
      "Sputum smear microscopy and culture",
      "Molecular tests such as Xpert MTB/RIF",
      "Chest X-ray as supporting evidence",
      "Results must be interpreted by a clinician",
    ],
    prevention: [
      "Early diagnosis and completing the full course of treatment",
      "Good ventilation in shared indoor spaces",
      "BCG vaccination, which mainly protects young children from severe forms",
      "Preventive treatment for people at high risk, as advised by health workers",
    ],
    note: "TB is curable with the right treatment taken as prescribed. Stopping early can allow drug-resistant TB to develop.",
    references: [
      { label: "WHO: Tuberculosis fact sheet", url: "https://www.who.int/news-room/fact-sheets/detail/tuberculosis" },
      { label: "CDC: Tuberculosis", url: "https://www.cdc.gov/tb/" },
    ],
  },
  {
    slug: "staphylococcus-aureus",
    name: "Staphylococcus aureus",
    commonName: "Staph aureus",
    category: "bacteria",
    shortDescription:
      "A round bacterium found on the skin and in the nose of many healthy people, which can also cause infections.",
    classification: "Bacteria, Gram-positive, family Staphylococcaceae",
    characteristics:
      "Many healthy people carry S. aureus on their skin or in their nose without any problems. It can cause infection if it enters the body through a cut or wound, or in people with weakened defences.",
    morphology:
      "Gram-positive cocci (round cells) that grow in grape-like clusters under the microscope.",
    habitat: "Human skin and nasal passages, and sometimes surfaces and hospital environments.",
    diseases: [
      "Skin and soft tissue infections such as boils and abscesses",
      "Wound infections",
      "Bloodstream and bone infections in more serious cases",
      "Food poisoning from toxins in contaminated food",
    ],
    transmission: [
      "Direct skin contact with an infected wound or carrier",
      "Contaminated objects or surfaces",
      "Food contaminated during preparation",
    ],
    symptoms: [
      "Red, painful, swollen skin or pus-filled boils",
      "Fever when infection spreads",
      "Sudden vomiting and cramps after eating contaminated food",
    ],
    diagnosis: [
      "Culture of pus, wound swabs, or blood",
      "Laboratory tests to check which antibiotics will work (susceptibility testing)",
    ],
    prevention: [
      "Wash hands regularly",
      "Clean and cover cuts and wounds",
      "Do not share towels or razors",
      "Hospitals use infection control practices to limit spread",
    ],
    note: "Some strains, known as MRSA, are resistant to common antibiotics, which is one reason antimicrobial resistance is a major concern.",
    references: [
      { label: "WHO: Antimicrobial resistance fact sheet", url: "https://www.who.int/news-room/fact-sheets/detail/antimicrobial-resistance" },
    ],
  },
  {
    slug: "candida-albicans",
    name: "Candida albicans",
    commonName: "Candida (a yeast)",
    category: "fungi",
    shortDescription:
      "A yeast that normally lives on the skin and in the mouth, gut, and vagina, and can cause infection when the balance is disturbed.",
    classification: "Fungi, yeast, genus Candida",
    characteristics:
      "C. albicans is part of the normal microbial community in many healthy people. Overgrowth can happen when the immune system is weakened or the normal microbial balance is disturbed, for example after some antibiotic courses.",
    morphology:
      "A yeast that can grow as single oval cells or as longer thread-like forms called hyphae.",
    habitat: "Mouth, gut, skin, and genital tract of humans.",
    diseases: [
      "Oral thrush",
      "Vaginal yeast infection",
      "Skin and nail infections",
      "Invasive candidiasis in seriously ill or immunocompromised people",
    ],
    transmission: [
      "Usually an overgrowth of a person's own yeast, rather than catching it from others",
      "Can be passed between people in some situations, such as from mother to baby during birth",
    ],
    symptoms: [
      "White patches in the mouth (thrush)",
      "Itching and discharge in vaginal infection",
      "Red, itchy skin in skin folds",
    ],
    diagnosis: [
      "Microscopy of a sample",
      "Fungal culture",
      "Blood cultures for suspected invasive infection",
    ],
    prevention: [
      "Keep skin clean and dry",
      "Use antibiotics only when prescribed",
      "Good oral hygiene, including rinsing the mouth after using steroid inhalers",
      "Medical management of conditions such as diabetes",
    ],
    note: "Candida is a normal part of many people's microbiome, and it usually causes no harm.",
    references: [
      { label: "CDC: Candidiasis", url: "https://www.cdc.gov/candidiasis/" },
    ],
  },
  {
    slug: "hepatitis-b-virus",
    name: "Hepatitis B virus",
    commonName: "HBV",
    category: "viruses",
    shortDescription:
      "A virus that infects the liver. A safe, effective vaccine prevents it.",
    classification: "Virus, family Hepadnaviridae, DNA virus",
    characteristics:
      "HBV infects liver cells. Infection can be short-term (acute) or long-lasting (chronic). Chronic infection can lead to liver scarring (cirrhosis) and liver cancer over many years.",
    morphology:
      "A small, enveloped virus with a DNA genome. Blood tests detect different viral proteins, such as the surface antigen (HBsAg).",
    habitat: "Humans. The virus is found in blood and other body fluids.",
    diseases: ["Acute and chronic hepatitis B", "Cirrhosis and liver cancer (long-term complications)"],
    transmission: [
      "From mother to child during birth",
      "Contact with infected blood or body fluids",
      "Unsafe injections or sharing needles",
      "Unprotected sex",
      "It does not spread by casual contact such as hugging or sharing meals",
    ],
    symptoms: [
      "Many people have no symptoms",
      "When present: tiredness, nausea, abdominal pain, dark urine, and yellowing of the skin and eyes (jaundice)",
    ],
    diagnosis: [
      "Blood tests for viral markers such as HBsAg",
      "Results need interpretation by a health professional, along with further tests of liver health",
    ],
    prevention: [
      "Vaccination, including a birth dose for newborns",
      "Safe blood and injection practices",
      "Screening of pregnant women and appropriate care for infants",
      "Safer sex practices",
    ],
    note: "Because many people have no symptoms, testing is the only way to know your status.",
    references: [
      { label: "WHO: Hepatitis B fact sheet", url: "https://www.who.int/news-room/fact-sheets/detail/hepatitis-b" },
      { label: "CDC: Hepatitis B", url: "https://www.cdc.gov/hepatitis-b/" },
    ],
  },
  {
    slug: "human-papillomavirus",
    name: "Human papillomavirus",
    commonName: "HPV",
    category: "viruses",
    shortDescription:
      "A common group of viruses. Persistent infection with certain high-risk types causes most cervical cancer.",
    classification: "Virus, family Papillomaviridae, DNA virus",
    characteristics:
      "There are over 100 HPV types. Most infections clear on their own without causing problems. Persistent infection with high-risk types can lead to cell changes that may become cancer over many years.",
    morphology: "A small, non-enveloped virus with a DNA genome and a protein shell (capsid).",
    habitat: "Humans. It infects skin and mucosal surfaces.",
    diseases: [
      "Cervical cancer and other HPV-related cancers",
      "Genital warts (caused by low-risk types)",
    ],
    transmission: [
      "Skin-to-skin contact, most commonly through sexual contact",
    ],
    symptoms: [
      "Most infections cause no symptoms",
      "Warts with some types",
      "Cervical changes are usually found through screening, not symptoms",
    ],
    diagnosis: [
      "HPV DNA testing",
      "Cervical screening (such as cytology or visual inspection) to detect changes early",
      "Results require interpretation by a health professional",
    ],
    prevention: [
      "HPV vaccination, ideally before sexual activity begins",
      "Regular cervical screening for women, as recommended locally",
      "Condom use can reduce the risk but does not remove it completely",
    ],
    note: "HPV vaccination and screening together make cervical cancer largely preventable.",
    references: [
      { label: "WHO: HPV and cervical cancer", url: "https://www.who.int/news-room/fact-sheets/detail/human-papillomavirus-(hpv)-and-cervical-cancer" },
      { label: "CDC: HPV", url: "https://www.cdc.gov/hpv/" },
    ],
  },
  {
    slug: "influenza-viruses",
    name: "Influenza viruses",
    commonName: "Flu viruses",
    category: "viruses",
    shortDescription:
      "RNA viruses that cause seasonal flu. They change over time, so vaccines are updated regularly.",
    classification: "Viruses, family Orthomyxoviridae, RNA viruses",
    characteristics:
      "Influenza A and B viruses cause seasonal epidemics. The viruses change gradually, which is why the flu vaccine is updated regularly and why people can catch flu more than once.",
    morphology:
      "Enveloped viruses with surface proteins called haemagglutinin (H) and neuraminidase (N). Influenza A subtypes are named using these, such as H1N1 and H3N2.",
    habitat: "Humans, and some animals such as birds and pigs for certain influenza A viruses.",
    diseases: ["Seasonal influenza"],
    transmission: [
      "Respiratory droplets from coughing or sneezing",
      "Touching contaminated surfaces and then the face",
    ],
    symptoms: [
      "Sudden fever",
      "Cough and sore throat",
      "Muscle aches and tiredness",
      "Runny or blocked nose",
    ],
    diagnosis: [
      "Rapid antigen tests",
      "Molecular (PCR) tests",
      "Test results are interpreted along with symptoms and clinical findings",
    ],
    prevention: [
      "Annual vaccination, especially for people at higher risk",
      "Regular handwashing",
      "Covering coughs and sneezes",
      "Staying home when unwell",
    ],
    note: "Flu can be severe in older adults, young children, pregnant women, and people with some chronic conditions.",
    references: [
      { label: "WHO: Influenza (seasonal)", url: "https://www.who.int/news-room/fact-sheets/detail/influenza-(seasonal)" },
      { label: "CDC: Flu", url: "https://www.cdc.gov/flu/" },
    ],
  },
  {
    slug: "plasmodium-falciparum",
    name: "Plasmodium falciparum",
    commonName: "Malaria parasite",
    category: "parasites",
    shortDescription:
      "A single-celled parasite spread by Anopheles mosquitoes. It causes the most dangerous form of malaria.",
    classification: "Protozoan parasite, genus Plasmodium",
    characteristics:
      "P. falciparum is the most dangerous of the Plasmodium species that infect humans and is the main cause of severe malaria and malaria deaths, particularly in sub-Saharan Africa.",
    morphology:
      "A single-celled organism. Inside red blood cells it can be seen under the microscope in forms such as the ring stage.",
    habitat:
      "Human liver and red blood cells, and the gut and salivary glands of female Anopheles mosquitoes.",
    diseases: ["Malaria, including severe malaria"],
    transmission: [
      "Bite of an infected female Anopheles mosquito",
      "Less commonly from mother to baby, blood transfusion, or shared needles",
      "It does not spread through casual contact",
    ],
    symptoms: [
      "Fever and chills",
      "Headache and body aches",
      "Vomiting",
      "Severe malaria can cause confusion, breathing problems, and severe anaemia, and needs urgent care",
    ],
    diagnosis: [
      "Microscopy of blood films",
      "Rapid diagnostic tests",
      "Testing is recommended before treatment wherever possible",
    ],
    prevention: [
      "Sleeping under insecticide-treated mosquito nets",
      "Indoor residual spraying and removing standing water where mosquitoes breed",
      "Preventive medicines for some groups, as recommended by health authorities",
      "Malaria vaccines are now recommended by WHO for use in children in areas with moderate to high transmission",
      "Seek prompt testing and treatment for fever in malaria-affected areas",
    ],
    note: "Malaria is preventable and treatable. Treatment decisions should always come from a health professional.",
    references: [
      { label: "WHO: Malaria fact sheet", url: "https://www.who.int/news-room/fact-sheets/detail/malaria" },
      { label: "CDC: Malaria", url: "https://www.cdc.gov/malaria/" },
    ],
  },
];

export const categoryLabels = {
  bacteria: "Bacteria",
  viruses: "Viruses",
  fungi: "Fungi",
  parasites: "Parasites",
};

export function getMicrobeBySlug(slug) {
  return microbes.find((m) => m.slug === slug);
}