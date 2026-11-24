// One-Line Office Joke: 24-Hour Sprint
// Entry program: writes a single one-line office joke to /output/entry.txt.
// Deterministic: the joke is a fixed string, no randomness, no I/O besides
// the single output file, so every run produces byte-identical output.

import { mkdirSync, writeFileSync } from "node:fs";

// The joke turns on one word: "fishing" in the out-of-office trips IT's
// phishing filter, so the holiday auto-reply locks its own author out.
// Setup and payoff share the same word, and the detail (an out-of-office
// reply, an IT lockout) is specific to office life, not a generic complaint.
const JOKE =
  "My out-of-office says 'gone fishing' — IT flagged it as a phishing attempt and locked me out before my holiday even started.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
