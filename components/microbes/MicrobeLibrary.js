"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Search, X, SearchX } from "lucide-react";
import MicrobeCard from "./MicrobeCard";
import { categories } from "@/data/categories";

export default function MicrobeLibrary({ microbes }) {
  const params = useSearchParams();
  const urlCategory = params.get("category") || "all";

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(urlCategory);

  // If the URL changes (e.g. from a homepage card), update the filter.
  useEffect(() => {
    setCategory(urlCategory);
  }, [urlCategory]);

  const filters = [{ slug: "all", name: "All" }, ...categories];

  const text = query.trim().toLowerCase();
  const results = microbes.filter((m) => {
    const matchesCategory = category === "all" || m.category === category;
    const matchesText =
      text === "" ||
      m.name.toLowerCase().includes(text) ||
      m.commonName.toLowerCase().includes(text) ||
      m.shortDescription.toLowerCase().includes(text);
    return matchesCategory && matchesText;
  });

  function clearAll() {
    setQuery("");
    setCategory("all");
  }

  return (
    <div>
      {/* Search box */}
      <div className="relative mx-auto max-w-xl">
        <label htmlFor="microbe-search" className="sr-only">
          Search microorganisms by name
        </label>
        <Search
          size={20}
          aria-hidden="true"
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted"
        />
        <input
          id="microbe-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by name, e.g. E. coli or malaria"
          className="w-full rounded-full border border-line bg-white py-3.5 pl-12 pr-12 text-base shadow-sm sm:text-sm outline-none transition focus:border-crimson"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            aria-label="Clear search"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1.5 text-muted hover:bg-blush hover:text-crimson"
          >
            <X size={18} />
          </button>
        )}
      </div>

      {/* Category filters */}
      <div
        className="mt-6 flex flex-wrap justify-center gap-2"
        role="group"
        aria-label="Filter by category"
      >
        {filters.map((f) => {
          const active = category === f.slug;
          return (
            <button
              key={f.slug}
              onClick={() => setCategory(f.slug)}
              aria-pressed={active}
              className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${
                active
                  ? "border-crimson bg-crimson text-white"
                  : "border-line bg-white text-ink hover:border-crimson hover:text-crimson"
              }`}
            >
              {f.name}
            </button>
          );
        })}
      </div>

      {/* Result count (read aloud by screen readers when it changes) */}
      <p className="mt-8 text-center text-sm text-muted" aria-live="polite">
        Showing {results.length} of {microbes.length} organisms
      </p>

      {/* Results or empty state */}
      {results.length > 0 ? (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {results.map((m, i) => (
            <MicrobeCard key={m.slug} microbe={m} index={i} />
          ))}
        </div>
      ) : (
        <div className="mx-auto mt-10 max-w-md rounded-2xl border border-line bg-blush p-10 text-center">
          <SearchX size={40} className="mx-auto text-crimson" aria-hidden="true" />
          <h3 className="mt-4 text-xl">No organisms found</h3>
          <p className="mt-2 text-sm text-muted">
            Try a different spelling or choose another category. We are adding
            more organisms over time.
          </p>
          <button
            onClick={clearAll}
            className="mt-6 rounded-full bg-crimson px-6 py-3 text-sm font-semibold text-white transition hover:bg-crimson-dark"
          >
            Clear search and filters
          </button>
        </div>
      )}
    </div>
  );
}