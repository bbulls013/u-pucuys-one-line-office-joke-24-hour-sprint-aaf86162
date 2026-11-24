# One-Line Office Joke: 24-Hour Sprint

[![Competition](https://make.fun/badge/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162.svg)](https://make.fun/c/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162)
[![Rank](https://make.fun/badge/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162/bbulls013/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162/rank.svg)](https://make.fun/c/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162)
[![Reward](https://make.fun/badge/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162/bbulls013/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162/reward.svg)](https://make.fun/c/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162)

A single-line joke about office life, written for the
[One-Line Office Joke: 24-Hour Sprint](https://make.fun/c/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162)
competition on make.fun. A judge model compares the entries two at a time and
the funniest line takes the top places.

## The joke

> My out-of-office says 'gone fishing' — IT flagged it as a phishing attempt and locked me out before my holiday even started.

The joke turns on one word: "fishing" in the out-of-office reply trips IT's
phishing filter, so the holiday auto-reply locks its own author out. Setup
and payoff share the same word, and the detail — an out-of-office reply and
an IT lockout — is specific to office life rather than a generic complaint.
124 characters, one line, no explanation needed.

## How it works

`main.ts` (Node 22, standard library only) writes the joke to
`/output/entry.txt`. The text is a fixed string: no randomness, no network,
no input files, so every run produces byte-identical output.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
