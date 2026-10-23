import {
  ShieldCheck,
  Pill,
  Droplets,
  Activity,
  Bug,
  HeartPulse,
} from "lucide-react";

export const healthTopics = [
  {
    slug: "preventing-infectious-diseases",
    title: "Preventing infectious diseases",
    description:
      "Hand hygiene, vaccination, safe food and water, and clean environments all help break the chain of transmission.",
    icon: ShieldCheck,
  },
  {
    slug: "antimicrobial-resistance",
    title: "Understanding antimicrobial resistance",
    description:
      "Resistance happens when microbes change so that medicines stop working. Responsible antibiotic use helps protect them.",
    icon: Pill,
  },
  {
    slug: "safe-food-and-water",
    title: "Safe food and water practices",
    description:
      "Learn how contamination happens and which simple habits reduce the risk of diarrhoeal disease.",
    icon: Droplets,
  },
  {
    slug: "hepatitis-b",
    title: "Hepatitis B awareness",
    description:
      "A viral infection of the liver. Vaccination prevents it, and testing helps people know their status.",
    icon: Activity,
  },
  {
    slug: "malaria-prevention",
    title: "Malaria prevention",
    description:
      "Spread by Anopheles mosquito bites. Insecticide-treated nets and prompt testing and treatment lower the risk.",
    icon: Bug,
  },
  {
    slug: "hpv-and-cervical-cancer",
    title: "HPV and cervical cancer",
    description:
      "Persistent infection with high-risk HPV types causes most cervical cancer. Vaccination and screening are key.",
    icon: HeartPulse,
  },
];