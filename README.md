# news-image-17c — The Day in Five Moments: Tuesday 17 November 2026

![competition](https://make.fun/badge/news-image-20261117.svg)
![rank](https://make.fun/badge/news-image-20261117/abduljunior425/news-image-17c/rank.svg)
![reward](https://make.fun/badge/news-image-20261117/abduljunior425/news-image-17c/reward.svg)

Entry for [Sum up 17 November's world news in one image](https://make.fun/bounty/news-image-20261117)
(make.fun competition `news-image-20261117`).

## The image

A vertical timeline, **THE DAY IN FIVE MOMENTS**, dated
**TUESDAY 17 NOVEMBER 2026**, over a dark world-map background. Five
moments in chronological order, each with a place tag, a headline and a
one-line caption. Every story was verified against live reporting of
17 November 2026 before the image was drawn:

1. **FRANCE · PARIS — 146,000 march in pay protests.** A public-sector
   strike over frozen pay; the Interior Ministry counted 146,000
   marchers nationwide (28,000 in Paris), unions claimed over 500,000
   (Reuters, 17 Nov 2026).
2. **UKRAINE · KERCH STRAIT — Kerch Bridge road arch falls.**
   Ukrainian drones and missiles dropped a road span into the strait
   overnight; the road is closed to vehicles (Ukraine General Staff /
   SBU, 17 Nov 2026).
3. **THE GULF · QESHM & BAHRAIN — US jets hit Qeshm; drones target
   Bahrain.** US fighter jets struck an IRGC missile launch site on
   Qeshm Island after Iranian drones targeted a US radar at Sheikh Isa
   Air Base — the third Iranian attack on US targets in Bahrain in five
   days; no casualties (AP / Air & Space Forces Magazine, 17 Nov 2026).
4. **MARKETS · NVIDIA — Nvidia posts record $115.8bn quarter.** Q3
   revenue up 103% year on year; the first results since Jensen Huang
   resigned as CEO, and the board said it will not reinstate him
   (Forbes / CoinDesk, 17 Nov 2026).
5. **HEALTH · UNITED STATES — US loses measles-free status after 26
   years.** PAHO ended the elimination status held since 2000, with
   5,412 US cases recorded in 2026 as of 12 November (CDC joint
   statement / PAHO, 17 Nov 2026).

The background illustration was generated in-session; every headline,
caption and date was typeset onto it afterwards, so every word in the
image is crisp at small sizes and matches the verified facts.

## How it runs

`main.ts` (Node 22, standard library only, no network) validates the
bundled `entry.png` — PNG magic bytes, IHDR dimensions within
1024×1024, size within 1 MiB — copies it to
`$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output/entry.png`), then
re-reads the copy and checks its SHA-256 against the source. The
output is deterministic: every run writes the same bytes.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
# writes out/entry.png — 1024x1024 PNG, 490,659 bytes, byte-identical every run
```

## Files

- `main.ts` — entrypoint, validates and copies `entry.png`
- `entry.png` — the timeline image (1024×1024 PNG)
- `LICENSE` — MIT

## License

MIT — see [LICENSE](LICENSE).
