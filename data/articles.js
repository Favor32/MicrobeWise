// Educational content. Verify against the linked sources before publishing,
// and check any country-specific programme details with local health authorities.

export const articles = [
  {
    slug: "preventing-infectious-diseases",
    intro:
      "Infectious diseases spread when a germ gets from a source to a new person. Break any link in that chain and the spread stops. Most of the steps are simple and work for many different infections.",
    keyPoints: [
      "Handwashing with soap and clean water prevents many infections.",
      "Vaccines protect you and the people around you.",
      "Safe food, safe water, and clean surroundings reduce a lot of illness.",
      "Early care for serious symptoms saves lives.",
    ],
    sections: [
      {
        heading: "How infections spread",
        paragraphs: [
          "A germ leaves a source (a person, animal, water, or food), travels by some route, and enters a new person. Different diseases use different routes.",
        ],
        bullets: [
          "Direct contact, such as touching an infected wound",
          "Droplets or air, such as tuberculosis and influenza",
          "Contaminated food and water, such as diarrhoeal diseases",
          "Insect bites, such as malaria from Anopheles mosquitoes",
          "Blood and body fluids, such as hepatitis B",
        ],
      },
      {
        heading: "Everyday habits that help",
        bullets: [
          "Wash hands with soap and clean water before eating or preparing food, after using the toilet, and after caring for someone who is sick.",
          "Cover your mouth and nose when you cough or sneeze.",
          "Stay home when you are unwell, if you can.",
          "Keep cuts clean and covered.",
          "Keep up to date with recommended vaccinations.",
          "Use safe drinking water and handle food safely.",
          "Where malaria occurs, sleep under an insecticide-treated net.",
        ],
      },
      {
        heading: "Vaccination",
        paragraphs: [
          "Vaccines train the immune system to recognise a germ before it causes serious illness. Each country sets its own routine immunisation schedule. Your nearest health facility can tell you which vaccines are recommended for you and your children.",
        ],
      },
      {
        heading: "When to seek care",
        paragraphs: [
          "Seek care promptly for difficulty breathing, a high or persistent fever, repeated vomiting, signs of dehydration, or any illness that keeps getting worse. Young children, pregnant women, older adults, and people with long-term conditions should seek care early.",
        ],
      },
    ],
    references: [
      { label: "WHO: Immunization coverage fact sheet", url: "https://www.who.int/news-room/fact-sheets/detail/immunization-coverage" },
      { label: "CDC: Clean hands", url: "https://www.cdc.gov/clean-hands/" },
    ],
  },

  {
    slug: "antimicrobial-resistance",
    intro:
      "Antimicrobial resistance (AMR) happens when bacteria, viruses, fungi, and parasites change so that medicines no longer work well against them. Resistant infections can be harder to treat, last longer, and sometimes become life-threatening.",
    keyPoints: [
      "It is the microbes that become resistant, not the person.",
      "Antibiotics work against bacteria, not viruses such as colds and flu.",
      "Misuse and overuse of antimicrobials speed up resistance.",
      "Preventing infections in the first place reduces the need for antibiotics.",
    ],
    sections: [
      {
        heading: "How resistance develops",
        paragraphs: [
          "Microbes change naturally over time. When antimicrobial medicines are used, the microbes that survive can multiply and pass on their resistance. The more these medicines are used when they are not needed, the faster this happens.",
          "Resistance is not only about antibiotics. It also affects antivirals, antifungals, and antiparasitic medicines.",
        ],
      },
      {
        heading: "What you can do",
        bullets: [
          "Take antibiotics only when they have been prescribed by a qualified health worker.",
          "Follow the prescriber's instructions exactly, including how long to take them.",
          "Never share antibiotics or use leftovers from a previous illness.",
          "Do not ask for antibiotics for colds, flu, or other viral illnesses.",
          "Buy medicines from licensed pharmacies and outlets.",
          "Prevent infections with handwashing, safe food and water, and vaccination.",
        ],
      },
      {
        heading: "Why it matters in everyday life",
        paragraphs: [
          "Common procedures, from caesarean sections to cancer treatment, depend on antibiotics that work. If resistance keeps rising, infections that are easy to treat today may become difficult to treat.",
        ],
      },
    ],
    references: [
      { label: "WHO: Antimicrobial resistance fact sheet", url: "https://www.who.int/news-room/fact-sheets/detail/antimicrobial-resistance" },
    ],
  },

  {
    slug: "safe-food-and-water",
    intro:
      "Food and water that are contaminated with germs are a major cause of diarrhoeal disease. A few consistent habits at home and in the market can greatly reduce the risk.",
    keyPoints: [
      "Wash hands before handling food and after using the toilet.",
      "Keep raw and cooked food apart, and cook food thoroughly.",
      "Boil water of uncertain quality, then store it in a clean, covered container.",
      "Seek care early for children with diarrhoea, and for any diarrhoea with signs of dehydration.",
    ],
    sections: [
      {
        heading: "Five keys to safer food",
        paragraphs: [
          "The World Health Organization's Five Keys to Safer Food give a simple framework:",
        ],
        bullets: [
          "Keep clean: wash hands and surfaces, and protect food from pests.",
          "Separate raw and cooked: use different utensils and boards for raw meat, poultry, and fish.",
          "Cook thoroughly: especially meat, poultry, eggs, and fish.",
          "Keep food at safe temperatures: do not leave cooked food at room temperature for long, and refrigerate where possible.",
          "Use safe water and safe raw materials: wash fruit and vegetables, and check expiry dates.",
        ],
      },
      {
        heading: "Making water safer",
        bullets: [
          "Bring water of uncertain quality to a rolling boil, then let it cool.",
          "Store treated water in a clean container with a lid, and pour rather than dip cups into it.",
          "Where available, use water from protected, improved sources.",
          "Keep latrines and waste away from water sources.",
        ],
      },
      {
        heading: "If someone has diarrhoea",
        paragraphs: [
          "Diarrhoea can cause dangerous loss of fluids, especially in young children. Oral rehydration solution (ORS) is the recommended way to replace lost fluids. Seek care promptly if a child has diarrhoea, if there is blood in the stool, or if there are signs of dehydration such as a very dry mouth, sunken eyes, or unusual sleepiness.",
        ],
      },
    ],
    references: [
      { label: "WHO: Food safety fact sheet", url: "https://www.who.int/news-room/fact-sheets/detail/food-safety" },
      { label: "WHO: Drinking-water fact sheet", url: "https://www.who.int/news-room/fact-sheets/detail/drinking-water" },
      { label: "WHO: Sanitation fact sheet", url: "https://www.who.int/news-room/fact-sheets/detail/sanitation" },
    ],
  },

  {
    slug: "hepatitis-b",
    intro:
      "Hepatitis B is a viral infection of the liver. It can be prevented with a safe and effective vaccine. Many people who are infected have no symptoms, so testing is the only way to know.",
    keyPoints: [
      "Hepatitis B spreads through blood and body fluids, not through hugging or sharing meals.",
      "Vaccination prevents infection, and a birth dose protects newborns.",
      "Many infected people feel well, so testing matters.",
      "Long-term infection can damage the liver, so people who test positive need follow-up care.",
    ],
    sections: [
      {
        heading: "How it spreads",
        bullets: [
          "From mother to child during birth",
          "Contact with infected blood or body fluids",
          "Unsafe injections or sharing needles and sharp instruments",
          "Unprotected sex",
        ],
        paragraphs: [
          "Hepatitis B is common in many parts of Africa, and infection in early childhood is more likely to become long-lasting.",
        ],
      },
      {
        heading: "Prevention",
        bullets: [
          "Complete the hepatitis B vaccine series. Ask a health worker about the birth dose for newborns.",
          "Use only sterile needles and syringes, and screened blood.",
          "Pregnant women can be tested so that babies receive appropriate protection at birth.",
          "Safer sex practices reduce the risk of sexual transmission.",
          "Do not share razors, toothbrushes, or other items that may carry blood.",
        ],
      },
      {
        heading: "Testing and care",
        paragraphs: [
          "A blood test can show whether a person is infected or protected. Results must be interpreted by a health professional, who may recommend further tests of liver health. Some people with long-term infection benefit from treatment and regular monitoring, so it is important to get proper advice rather than relying on guesswork.",
        ],
      },
    ],
    references: [
      { label: "WHO: Hepatitis B fact sheet", url: "https://www.who.int/news-room/fact-sheets/detail/hepatitis-b" },
      { label: "CDC: Hepatitis B", url: "https://www.cdc.gov/hepatitis-b/" },
    ],
  },

  {
    slug: "malaria-prevention",
    intro:
      "Malaria is caused by Plasmodium parasites and spread by the bite of infected female Anopheles mosquitoes. It is both preventable and treatable, yet it remains a major cause of illness and death, especially in sub-Saharan Africa, including Nigeria.",
    keyPoints: [
      "Sleeping under an insecticide-treated net every night is one of the most effective tools.",
      "Fever in a malaria area needs prompt testing, not guessing.",
      "Pregnant women and young children are at higher risk.",
      "Treatment decisions should come from a health professional.",
    ],
    sections: [
      {
        heading: "Preventing mosquito bites",
        bullets: [
          "Sleep under an insecticide-treated mosquito net, and repair or replace damaged nets.",
          "Fit window and door screens where possible.",
          "Remove standing water around the home, where mosquitoes breed.",
          "Use indoor residual spraying where it is offered by health programmes.",
        ],
      },
      {
        heading: "Preventive medicines and vaccines",
        paragraphs: [
          "In some areas, health authorities provide preventive medicines for specific groups, for example seasonal malaria chemoprevention for young children in certain regions and preventive treatment during pregnancy. WHO now recommends malaria vaccines for children in areas with moderate to high transmission. Programmes differ between countries and regions, so ask your local health facility what is available and who is eligible.",
        ],
      },
      {
        heading: "Fever and testing",
        paragraphs: [
          "Fever, chills, headache, and body aches can be signs of malaria, but they are also signs of other illnesses. A rapid diagnostic test or blood film microscopy can confirm malaria, and testing before treatment is recommended wherever possible.",
          "Avoid taking leftover medicines on your own. Seek care urgently for severe symptoms such as confusion, difficulty breathing, repeated vomiting, convulsions, or severe weakness, particularly in children and pregnant women.",
        ],
      },
    ],
    references: [
      { label: "WHO: Malaria fact sheet", url: "https://www.who.int/news-room/fact-sheets/detail/malaria" },
      { label: "CDC: Malaria", url: "https://www.cdc.gov/malaria/" },
    ],
  },

  {
    slug: "hpv-and-cervical-cancer",
    intro:
      "Cervical cancer is one of the few cancers that can be largely prevented. Persistent infection with high-risk types of human papillomavirus (HPV) causes almost all cases, and two tools work together: vaccination and screening.",
    keyPoints: [
      "HPV is very common, and most infections clear by themselves.",
      "Vaccination works best before exposure, so before sexual activity begins.",
      "Screening can find changes early, when they are easier to treat.",
      "Early cervical changes often cause no symptoms.",
    ],
    sections: [
      {
        heading: "How HPV leads to cancer",
        paragraphs: [
          "Most HPV infections are cleared by the immune system. When a high-risk type persists for years, it can cause cell changes in the cervix that may become cancer. This usually takes many years, which gives time to find and treat changes early.",
        ],
      },
      {
        heading: "Vaccination",
        paragraphs: [
          "HPV vaccines are safe and effective. They are recommended for girls at a young age, and many countries now offer them through school or community programmes. The recommended ages and number of doses differ by country, so ask a local health worker what applies to you or your child.",
        ],
      },
      {
        heading: "Screening",
        bullets: [
          "Screening checks for HPV or for early cell changes before symptoms appear.",
          "Different methods exist, such as HPV testing, cytology, and visual inspection, depending on what is available locally.",
          "Women living with HIV are at higher risk and are advised to be screened regularly.",
          "Vaccinated women should still be screened as recommended.",
        ],
      },
      {
        heading: "When to see a health worker",
        paragraphs: [
          "Unusual vaginal bleeding (between periods, after sex, or after menopause), unusual discharge, or persistent pelvic pain should be checked by a health professional. These symptoms have many possible causes and are not a diagnosis on their own.",
        ],
      },
    ],
    references: [
      { label: "WHO: Cervical cancer fact sheet", url: "https://www.who.int/news-room/fact-sheets/detail/cervical-cancer" },
      { label: "WHO: HPV and cervical cancer fact sheet", url: "https://www.who.int/news-room/fact-sheets/detail/human-papillomavirus-(hpv)-and-cervical-cancer" },
      { label: "CDC: HPV", url: "https://www.cdc.gov/hpv/" },
    ],
  },
];

export function getArticleBySlug(slug) {
  return articles.find((a) => a.slug === slug);
}