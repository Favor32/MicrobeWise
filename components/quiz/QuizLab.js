"use client";

import { useState, useEffect } from "react";
import {
  Check,
  X,
  ArrowRight,
  RotateCcw,
  Play,
  Trophy,
  Flame,
  Clock,
} from "lucide-react";
import Button from "../ui/Button";
import { questions, topics, difficulties } from "@/data/quizzes";

const MAX_QUESTIONS = 10;
const TIME_PER_QUESTION = 20; // seconds
const LETTERS = ["A", "B", "C", "D"];
const RING = 2 * Math.PI * 30; // circle length for the timer ring

function shuffle(list) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function resultMessage(percent) {
  if (percent >= 80) return "Excellent work. You know your microbes.";
  if (percent >= 50) return "Good effort. Review the explanations and try again.";
  return "A good start. Explore the library and try again.";
}

function ChoiceGroup({ label, options, value, onChange }) {
  return (
    <div>
      <p className="text-sm font-bold">{label}</p>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label={label}>
        {options.map((o) => (
          <button
            key={o.slug}
            onClick={() => onChange(o.slug)}
            aria-pressed={value === o.slug}
            className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${
              value === o.slug
                ? "border-crimson bg-crimson text-white"
                : "border-line bg-white hover:border-crimson hover:text-crimson"
            }`}
          >
            {o.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function QuizLab() {
  const [stage, setStage] = useState("setup"); // "setup" | "playing" | "results"
  const [topic, setTopic] = useState("all");
  const [difficulty, setDifficulty] = useState("all");
  const [deck, setDeck] = useState([]);
  const [index, setIndex] = useState(0);
  // null = not answered, a number = chosen option, -1 = time ran out
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [timeLeft, setTimeLeft] = useState(TIME_PER_QUESTION);

  const available = questions.filter(
    (q) =>
      (topic === "all" || q.topic === topic) &&
      (difficulty === "all" || q.difficulty === difficulty)
  );

  // Countdown: ticks once a second while a question is open
  useEffect(() => {
    if (stage !== "playing" || selected !== null) return;
    if (timeLeft <= 0) {
      setSelected(-1); // time is up: lock the question
      setStreak(0);
      return;
    }
    const t = setTimeout(() => setTimeLeft((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [stage, selected, timeLeft]);

  function start() {
    if (available.length === 0) return;
    setDeck(shuffle(available).slice(0, MAX_QUESTIONS));
    setIndex(0);
    setSelected(null);
    setScore(0);
    setStreak(0);
    setBestStreak(0);
    setTimeLeft(TIME_PER_QUESTION);
    setStage("playing");
  }

  function choose(optionIndex) {
    if (selected !== null) return; // already answered or timed out
    setSelected(optionIndex);
    if (optionIndex === deck[index].answer) {
      const newStreak = streak + 1;
      setScore((s) => s + 1);
      setStreak(newStreak);
      setBestStreak((b) => Math.max(b, newStreak));
    } else {
      setStreak(0);
    }
  }

  function next() {
    if (index + 1 >= deck.length) {
      setStage("results");
    } else {
      setIndex(index + 1);
      setSelected(null);
      setTimeLeft(TIME_PER_QUESTION);
    }
  }

  /* ---------------- SETUP ---------------- */
  if (stage === "setup") {
    return (
      <div className="grid gap-8 lg:grid-cols-5">
        <div className="rounded-3xl bg-blush p-5 sm:p-8 lg:col-span-2">
          <p className="text-xs font-bold uppercase tracking-widest text-crimson">
            How it works
          </p>
          <h2 className="mt-3 text-2xl">Beat the clock, build a streak.</h2>
          <ul className="mt-6 space-y-4 text-sm">
            <li className="flex gap-3">
              <Clock size={18} className="mt-0.5 shrink-0 text-crimson" aria-hidden="true" />
              You have {TIME_PER_QUESTION} seconds for each question.
            </li>
            <li className="flex gap-3">
              <Flame size={18} className="mt-0.5 shrink-0 text-crimson" aria-hidden="true" />
              Answer correctly in a row to build a streak.
            </li>
            <li className="flex gap-3">
              <Check size={18} className="mt-0.5 shrink-0 text-crimson" aria-hidden="true" />
              Every answer comes with an explanation.
            </li>
          </ul>
        </div>

        <div className="rounded-3xl border border-line bg-white p-5 shadow-sm sm:p-8 lg:col-span-3">
          <h2 className="text-2xl">Set up your quiz</h2>
          <div className="mt-6 space-y-6">
            <ChoiceGroup label="Topic" options={topics} value={topic} onChange={setTopic} />
            <ChoiceGroup
              label="Difficulty"
              options={difficulties}
              value={difficulty}
              onChange={setDifficulty}
            />
          </div>
          <p className="mt-6 text-sm text-muted" aria-live="polite">
            {available.length > 0
              ? `${available.length} question${available.length === 1 ? "" : "s"} available. You'll get up to ${MAX_QUESTIONS}, in random order.`
              : "No questions match this combination yet. Try another topic or difficulty."}
          </p>
          <Button
            onClick={start}
            disabled={available.length === 0}
            className="mt-6 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Play size={16} aria-hidden="true" /> Start quiz
          </Button>
        </div>
      </div>
    );
  }

  /* ---------------- RESULTS ---------------- */
  if (stage === "results") {
    const percent = Math.round((score / deck.length) * 100);
    return (
      <div className="mx-auto max-w-xl rounded-3xl border border-line bg-white p-6 text-center shadow-sm sm:p-10">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blush text-crimson">
          <Trophy size={28} aria-hidden="true" />
        </span>
        <h2 className="mt-4 text-2xl">Quiz complete</h2>
        <p className="mt-4 text-5xl font-extrabold text-crimson">
          {score} / {deck.length}
        </p>
        <p className="mt-1 text-sm text-muted">{percent}% correct</p>
        <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-blush px-4 py-1.5 text-sm font-semibold text-crimson">
          <Flame size={16} aria-hidden="true" /> Best streak: {bestStreak}
        </p>
        <p className="mt-4">{resultMessage(percent)}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button onClick={start}>
            <RotateCcw size={16} aria-hidden="true" /> Restart quiz
          </Button>
          <Button variant="secondary" onClick={() => setStage("setup")}>
            Change topic or difficulty
          </Button>
          <Button variant="secondary" href="/microbes">
            Explore microbes
          </Button>
        </div>
      </div>
    );
  }

  /* ---------------- QUESTION ---------------- */
  const q = deck[index];
  const answered = selected !== null;
  const timedOut = selected === -1;
  const wasCorrect = selected === q.answer;
  const progress = Math.round(((index + (answered ? 1 : 0)) / deck.length) * 100);
  const offset = RING * (1 - timeLeft / TIME_PER_QUESTION);
  const low = timeLeft <= 5 && !answered;

  return (
    <div className="grid gap-6 lg:grid-cols-5">
      {/* LEFT: question, timer, streak */}
      <div className="flex flex-col rounded-3xl bg-blush p-5 sm:p-8 lg:col-span-2">
        <div className="flex items-center justify-between text-sm font-semibold">
          <span>
            Question {index + 1} of {deck.length}
          </span>
          <span className="text-crimson">Score: {score}</span>
        </div>
        <div
          className="mt-3 h-2 overflow-hidden rounded-full bg-white"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={progress}
          aria-label="Quiz progress"
        >
          <div
            className="h-full rounded-full bg-crimson transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="mt-8 text-xs font-bold uppercase tracking-widest text-muted">
          {topics.find((t) => t.slug === q.topic)?.name} · {q.difficulty}
        </p>
        <h2 className="mt-3 text-xl sm:text-2xl">{q.question}</h2>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-8">
          <div className="flex items-center gap-3">
            <div className="relative h-[72px] w-[72px]" aria-hidden="true">
              <svg viewBox="0 0 72 72" className="h-full w-full -rotate-90">
                <circle cx="36" cy="36" r="30" fill="none" stroke="#fff" strokeWidth="7" />
                <circle
                  cx="36"
                  cy="36"
                  r="30"
                  fill="none"
                  stroke="#C91832"
                  strokeWidth="7"
                  strokeLinecap="round"
                  strokeDasharray={RING}
                  strokeDashoffset={offset}
                  style={{ transition: "stroke-dashoffset 1s linear" }}
                />
              </svg>
              <span
                className={`absolute inset-0 flex items-center justify-center text-lg font-extrabold ${
                  low ? "text-crimson" : "text-ink"
                }`}
              >
                {timeLeft}
              </span>
            </div>
            <span className="sr-only">
              {TIME_PER_QUESTION} seconds are allowed for each question.
            </span>
            <span className="text-xs font-semibold text-muted">seconds left</span>
          </div>

          <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold">
            <Flame
              size={18}
              className={streak > 0 ? "text-crimson" : "text-muted"}
              aria-hidden="true"
            />
            <span>Streak: {streak}</span>
          </div>
        </div>
      </div>

      {/* RIGHT: answer tiles and feedback */}
      <div className="rounded-3xl border border-line bg-white p-6 shadow-sm sm:p-8 lg:col-span-3">
        <ul key={q.id} className="grid gap-4 sm:grid-cols-2">
          {q.options.map((option, i) => {
            const isCorrect = i === q.answer;
            const isChosen = i === selected;

            let style = "border-line bg-white hover:-translate-y-0.5 hover:border-crimson hover:shadow-md";
            if (answered && isCorrect) style = "border-crimson bg-blush text-crimson";
            else if (answered && isChosen) style = "border-ink bg-white text-ink";
            else if (answered) style = "border-line bg-white text-muted opacity-60";

            return (
              <li
                key={option}
                className="tile-in"
                style={{ animationDelay: `${i * 90}ms` }}
              >
                <button
                  onClick={() => choose(i)}
                  aria-disabled={answered}
                  className={`flex h-full min-h-28 w-full flex-col justify-between gap-4 rounded-2xl border-2 p-5 text-left text-sm font-semibold transition duration-200 ${style} ${
                    answered ? "cursor-default" : "cursor-pointer"
                  }`}
                >
                  <span className="flex items-center justify-between">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-current text-xs">
                      {LETTERS[i]}
                    </span>
                    {answered && isCorrect && (
                      <>
                        <Check size={20} aria-hidden="true" />
                        <span className="sr-only">Correct answer</span>
                      </>
                    )}
                    {answered && isChosen && !isCorrect && (
                      <>
                        <X size={20} aria-hidden="true" />
                        <span className="sr-only">Your answer, incorrect</span>
                      </>
                    )}
                  </span>
                  <span className="text-base leading-snug">{option}</span>
                </button>
              </li>
            );
          })}
        </ul>

        <div aria-live="polite">
          {answered && (
            <div className="mt-6 rounded-2xl bg-blush p-5 text-sm">
              <p className="font-bold text-crimson">
                {timedOut
                  ? `Time's up. The correct answer is ${LETTERS[q.answer]}.`
                  : wasCorrect
                    ? "Correct!"
                    : `Not quite. The correct answer is ${LETTERS[q.answer]}.`}
              </p>
              <p className="mt-2 text-muted">{q.explanation}</p>
            </div>
          )}
        </div>

        {answered && (
          <Button onClick={next} className="mt-6" autoFocus>
            {index + 1 >= deck.length ? "See results" : "Next question"}
            <ArrowRight size={16} aria-hidden="true" />
          </Button>
        )}
      </div>
    </div>
  );
}
