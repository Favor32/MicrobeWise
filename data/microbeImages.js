const folder = "/images/microbes";

export const microbeImages = {
  "escherichia-coli": { alt: "Micrograph of rod-shaped Escherichia coli bacteria", credit: "" },
  "mycobacterium-tuberculosis": { alt: "Micrograph of Mycobacterium tuberculosis bacteria", credit: "" },
  "staphylococcus-aureus": { alt: "Micrograph of Staphylococcus aureus cells in clusters", credit: "" },
  "candida-albicans": { alt: "Micrograph of Candida albicans yeast cells", credit: "" },
  "hepatitis-b-virus": { alt: "Image of hepatitis B virus particles", credit: "" },
  "human-papillomavirus": { alt: "Image of human papillomavirus particles", credit: "" },
  "influenza-viruses": { alt: "Image of influenza virus particles", credit: "" },
  "plasmodium-falciparum": { alt: "Image of Plasmodium falciparum parasites in blood", credit: "" },
};

export function getMicrobeImage(slug) {
  const info = microbeImages[slug];
  if (!info) return null;
  return { src: `${folder}/${slug}.jpg`, ...info };
}
