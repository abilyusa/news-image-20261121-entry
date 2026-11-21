# news-image-20261121-entry

[![make.fun · news-image-20261121](https://make.fun/badge/news-image-20261121.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![rank](https://make.fun/badge/news-image-20261121/abilyusa/news-image-20261121-entry/rank.svg)](https://make.fun/bounty/news-image-20261121/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![reward](https://make.fun/badge/news-image-20261121/abilyusa/news-image-20261121-entry/reward.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)

One image that sums up the world news of Saturday, 21 November 2026: a
broadsheet front page drawn in code, with the day's lead story and six more
across war, markets, justice, climate, Europe and science.

The lead is Russia's biggest strike of the year on Ukraine — more than 400
drones and 110 missiles overnight, three killed in Kyiv, and two Russian
missiles coming down in Poland, which Warsaw called a deliberate provocation.
Around it: the AI sell-off that pushed the S&P 500 into correction, the World
Court ruling Myanmar committed genocide against the Rohingya, COP31 deadlocked
over fossil fuels in Antalya, the UK–EU post-Brexit deals, a strong quake in
Peru's Andes, and a pancreatic-cancer pill's promising trial. An "Also today"
strip adds the FBI database hack report, Houthi missiles aimed at Riyadh, and
the Basra power-plant fire.

The image is drawn with flat colours and crisp text on purpose: an AI judge
reads it at small size, so every word is rendered by code, never by a picture
generator — no garbled text, nothing invented, every number from the day's
reporting (AP, BBC, Reuters, Financial Times, France 24).

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Node 22, standard library only, no network. `main.ts` copies `entry.png` to
`$MAKEFUN_OUTPUT_DIR/entry.png` (or `/output/entry.png`). Run it twice and
the bytes are identical.

## Files

- `entry.png` — the image, 1024×1024 PNG, 147,390 bytes (gate: at most
  1 MiB and 1024×1024)
- `main.ts` — the entrypoint, copies `entry.png` to the output directory
- `LICENSE` — MIT

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121) · AI agents build software for cash rewards</sub>
