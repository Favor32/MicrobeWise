// Educational content. Verify against reliable sources before publishing.
// Where `references` is empty, add sources before going live.

import {
  Apple,
  Milk,
  Droplets,
  Pill,
  Users,
  Sprout,
  Lightbulb,
  Dna,
} from "lucide-react";

export const learnTopics = [
  {
    slug: "why-food-spoils",
    title: "Why food spoils",
    icon: Apple,
    summary:
      "Bacteria, yeasts, and moulds feed on food just as we do. Here is what helps them grow, and how to slow them down.",
    intro:
      "Food spoils because microorganisms land on it, find nutrients, moisture, and warmth, and multiply. Spoilage microbes change how food looks, smells, and tastes.",
    sections: [
      {
        heading: "What microbes need to grow",
        bullets: [
          "Nutrients, which most foods supply",
          "Moisture, which is why dried foods keep longer",
          "Warmth, because many microbes multiply fastest at room temperature",
          "Time, because even a few cells can become millions",
        ],
      },
      {
        heading: "Spoilage is not the same as danger",
        paragraphs: [
          "Spoilage microbes make food unpleasant. Disease-causing microbes can make you ill. Some harmful microbes do not noticeably change how food smells or tastes, so the smell test is not a reliable safety check.",
        ],
      },
      {
        heading: "How people slow spoilage",
        bullets: [
          "Refrigeration or freezing slows growth",
          "Cooking kills many microbes",
          "Drying, smoking, salting, and sugar reduce the water microbes can use",
          "Clean storage containers keep new microbes out",
        ],
      },
    ],
    references: [
      {
        label: "WHO: Food safety fact sheet",
        url: "https://www.who.int/news-room/fact-sheets/detail/food-safety",
      },
    ],
  },
  {
    slug: "microbes-in-drinking-water",
    title: "Microorganisms in drinking water",
    icon: Droplets,
    summary:
      "Clear water is not always safe water. Learn which microbes can hide in it and how treatment helps.",
    intro:
      "Water that looks clean can still carry bacteria, viruses, or parasites, especially if it has been contaminated by faeces. Unsafe drinking water is a major cause of diarrhoeal disease.",
    sections: [
      {
        heading: "Which microbes can be in water",
        paragraphs: [
          "Bacteria such as some strains of E. coli, viruses such as hepatitis A, and protozoan parasites can all spread through contaminated water.",
        ],
      },
      {
        heading: "How water is made safer",
        bullets: [
          "Boiling at a rolling boil kills most disease-causing microbes",
          "Filtration can remove some microbes and particles",
          "Chlorination is widely used by treatment plants and in household treatment products",
          "Safe storage in a clean, covered container stops recontamination",
        ],
      },
      {
        heading: "Why testing matters",
        paragraphs: [
          "Laboratories often test water for indicator bacteria such as E. coli. Finding them suggests faecal contamination, and that other disease-causing microbes could be present.",
        ],
      },
    ],
    references: [
      {
        label: "WHO: Drinking-water fact sheet",
        url: "https://www.who.int/news-room/fact-sheets/detail/drinking-water",
      },
    ],
  },
  {
    slug: "helpful-microbes-in-food",
    title: "Helpful microbes in food production",
    icon: Milk,
    summary:
      "Yoghurt, bread, and many traditional foods depend on microbes working for us.",
    intro:
      "People have used microbes for thousands of years, long before anyone knew they existed. Fermentation is the process where microbes change food in useful ways.",
    sections: [
      {
        heading: "Familiar examples",
        bullets: [
          "Bread: baker's yeast produces carbon dioxide that makes dough rise",
          "Yoghurt: lactic acid bacteria turn milk sugar into lactic acid",
          "Many traditional fermented foods and drinks around the world rely on microbes",
        ],
      },
      {
        heading: "Why fermentation is useful",
        paragraphs: [
          "Fermentation can change flavour and texture, and in some foods the acid produced helps slow the growth of unwanted microbes. Safe fermentation still needs clean ingredients, clean equipment, and correct methods.",
        ],
      },
    ],
    references: [],
  },
  {
    slug: "how-antibiotics-work",
    title: "How antibiotics work",
    icon: Pill,
    summary:
      "Antibiotics target bacteria, not viruses. Understanding this helps protect the medicines we have.",
    intro:
      "Antibiotics are medicines that kill bacteria or stop them from multiplying. They have saved countless lives, but they only work against bacterial infections.",
    sections: [
      {
        heading: "How they act on bacteria",
        paragraphs: [
          "Different antibiotics target different features of bacterial cells, such as the cell wall or the machinery that makes proteins. Human cells do not have the same structures, which is why many antibiotics can harm bacteria with limited effect on us.",
        ],
      },
      {
        heading: "Why they do not work on viruses",
        paragraphs: [
          "Viruses are not cells and lack the structures antibiotics target. Colds and flu are caused by viruses, so antibiotics will not help them.",
        ],
      },
      {
        heading: "Using them responsibly",
        bullets: [
          "Take them only when prescribed by a qualified health worker",
          "Follow the instructions exactly",
          "Never share them or keep leftovers for next time",
        ],
        paragraphs: [
          "Misuse helps resistant bacteria survive and spread. See our article on antimicrobial resistance for more.",
        ],
      },
    ],
    references: [
      {
        label: "WHO: Antimicrobial resistance fact sheet",
        url: "https://www.who.int/news-room/fact-sheets/detail/antimicrobial-resistance",
      },
    ],
  },
  {
    slug: "microbes-in-the-human-body",
    title: "Microbes in the human body",
    icon: Users,
    summary:
      "You carry trillions of microbes. Most are harmless, and many do useful work.",
    intro:
      "Your skin, mouth, and gut are home to large communities of microorganisms, together called the microbiome. Most live with us without causing harm.",
    sections: [
      {
        heading: "What they do",
        bullets: [
          "Help digest some foods in the gut",
          "Compete with harmful microbes for space and food",
          "Interact with the immune system as it develops",
        ],
      },
      {
        heading: "When balance is disturbed",
        paragraphs: [
          "Sometimes a microbe that is normally harmless can cause infection, for example if it enters a wound or if a person's defences are weakened. Some medicines, including antibiotics, can also change the balance of microbes in the body.",
        ],
      },
      {
        heading: "A note of caution",
        paragraphs: [
          "Research on the microbiome is active, and new findings appear often. Be careful with products that claim to cure many conditions by changing your microbes.",
        ],
      },
    ],
    references: [],
  },
  {
    slug: "microbes-in-soil-and-environment",
    title: "Microbes in soil and the environment",
    icon: Sprout,
    summary:
      "Microbes recycle nutrients and keep ecosystems running, mostly out of sight.",
    intro:
      "Soil, water, and air are full of microorganisms. Most are harmless, and many are essential to life on Earth.",
    sections: [
      {
        heading: "Recycling nutrients",
        paragraphs: [
          "Bacteria and fungi break down dead plants and animals and return nutrients to the soil, where plants can use them again.",
        ],
      },
      {
        heading: "Helping plants",
        paragraphs: [
          "Some soil bacteria help convert nitrogen from the air into forms plants can use. Certain fungi form partnerships with plant roots that help them take up water and nutrients.",
        ],
      },
      {
        heading: "Environment and health",
        paragraphs: [
          "A few environmental microbes can cause disease, which is why clean water, safe waste disposal, and good sanitation matter.",
        ],
      },
    ],
    references: [],
  },
  {
    slug: "common-microbiology-myths",
    title: "Common microbiology myths",
    icon: Lightbulb,
    summary:
      "Clearing up widespread misunderstandings about germs, illness, and medicine.",
    intro:
      "Some beliefs about infections are common but wrong. Here are a few, with the science.",
    sections: [
      {
        heading: "Myths and facts",
        bullets: [
          "Myth: Antibiotics cure colds and flu. Fact: These are caused by viruses, and antibiotics do not work on viruses.",
          "Myth: All germs are harmful. Fact: Most microbes are harmless or helpful.",
          "Myth: Malaria comes from eating certain foods or drinking dirty water. Fact: It is spread by the bite of infected Anopheles mosquitoes.",
          "Myth: TB spreads through shared plates or handshakes. Fact: It spreads through the air from a person with active lung TB.",
          "Myth: If food smells fine, it is safe. Fact: Some harmful microbes do not change the smell or taste of food.",
          "Myth: Hepatitis B spreads by hugging or sharing meals. Fact: It spreads through blood and body fluids.",
        ],
      },
    ],
    references: [
      {
        label: "WHO: Malaria fact sheet",
        url: "https://www.who.int/news-room/fact-sheets/detail/malaria",
      },
      {
        label: "WHO: Tuberculosis fact sheet",
        url: "https://www.who.int/news-room/fact-sheets/detail/tuberculosis",
      },
    ],
  },
  {
    slug: "microbes-in-biotechnology",
    title: "Microbes in biotechnology",
    icon: Dna,
    summary:
      "From medicines to research tools, microbes help scientists solve real problems.",
    intro:
      "Biotechnology uses living organisms, often microbes, to make useful products and to study how life works.",
    sections: [
      {
        heading: "Examples",
        bullets: [
          "Some medicines, including insulin, are made using microbes that scientists have modified",
          "E. coli is widely used in laboratories as a research organism",
          "Yeasts and bacteria are used in brewing, baking, and food production",
          "Some microbes are being studied for cleaning up pollution",
        ],
      },
      {
        heading: "Why microbes are useful",
        paragraphs: [
          "They grow quickly, are cheap to maintain, and many are easy to study and modify, which makes them practical tools for science and industry.",
        ],
      },
    ],
    references: [],
  },
];

export function getLearnTopicBySlug(slug) {
  return learnTopics.find((t) => t.slug === slug);
}