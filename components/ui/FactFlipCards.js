"use client";

import { useState } from "react";
import { RotateCw } from "lucide-react";

const facts = [
  {
    front: "A mould that changed medicine",
    back: "In 1928, Alexander Fleming noticed that Penicillium mould was stopping Staphylococcus bacteria from growing. This led to penicillin, the first widely used antibiotic.",
  },
  {
    front: "Are all microbes harmful?",
    back: "No. Most microbes are harmless or helpful. They help us digest food, make bread and yoghurt, and recycle nutrients in soil.",
  },
  {
    front: "Who causes malaria?",
    back: "Malaria is caused by Plasmodium parasites, which are passed to people by the bite of infected female Anopheles mosquitoes.",
  },
  {
    front: "Do antibiotics treat colds?",
    back: "No. Colds and flu are caused by viruses, and antibiotics only work against bacteria. Using them unnecessarily helps resistance develop.",
  },
  {
    front: "Microbes inside you",
    back: "Your body hosts huge communities of microbes, mostly on the skin and in the gut. Most are harmless, and many do useful work.",
  },
  {
    front: "Why does bread rise?",
    back: "Baker's yeast, a fungus, feeds on sugars in dough and releases carbon dioxide gas, which makes the dough expand.",
  },
];

function FlipCard({ fact }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div className="flip h-64 sm:h-56">
      <button
        onClick={() => setFlipped(!flipped)}
        aria-pressed={flipped}
        aria-label={`${fact.front}. Press to ${flipped ? "show the question" : "reveal the fact"}.`}
        className="h-full w-full text-left"
      >
        <div className="flip-inner" data-flipped={flipped}>
          <div className="flip-face flex flex-col justify-between rounded-2xl border border-line bg-white p-6 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-widest text-crimson">
              Did you know?
            </p>
            <p className="text-xl font-extrabold">{fact.front}</p>
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-muted">
              <RotateCw size={14} aria-hidden="true" /> Click to flip
            </span>
          </div>
          <div className="flip-face flip-back flex items-center rounded-2xl bg-crimson p-6 text-white shadow-sm">
            <p className="text-sm leading-relaxed">{fact.back}</p>
          </div>
        </div>
      </button>
    </div>
  );
}

export default function FactFlipCards() {
  return (
    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {facts.map((f) => (
        <FlipCard key={f.front} fact={f} />
      ))}
    </div>
  );
}