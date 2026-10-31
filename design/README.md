# ankitmishra.dev — two visual directions

Two self-contained comps. Open either file directly in a browser; no build, no JS.
Each contains three screens on one scroll, separated by a black **comp separator** bar
(that bar is scaffolding for comparison, not part of the design — delete it when porting):

1. Landing page
2. `/lab` index
3. One experiment page (`LAB-014`)

All findings, numbers, dates and LAB ids are **placeholder**, flagged in an HTML comment
above each block. Replace every figure before this goes near a hiring manager.

---

## The shared problem both directions solve

The audience is a Staff-level engineer or hiring manager at a big-tech AI platform org.
They will give the page about eight seconds before deciding whether this is a person who
measures things or a person who talks about measuring things. So both directions put
**three numeric claims above the fold**, each one a complete sentence with a number in it,
each one linked to a lab entry with a status and a date. Everything else — links,
writing list, experience, stack — is secondary and set smaller.

Neither direction has a hero slogan, a card grid, a badge wall, a gradient, a rounded
corner above 0px, a drop shadow, or an emoji. The only decorative gesture in either file
is a hairline rule.

### Anti-slop decisions made in both files
- **Line weight carries structure.** 1px rules in a `--rule` token, 2px rules for
  section boundaries. No elevation, no fills to delineate — except the one sunk panel used
  for TL;DR and code.
- **Numbers are typeset as data.** `font-variant-numeric: lining-nums tabular-nums` on
  every table cell, date and figure, so columns of digits align. Direction A additionally
  uses **oldstyle figures in prose** so a number inside a sentence reads as a word, and
  lining figures the moment it becomes data. That distinction is the whole monospace
  policy: mono means "this is a measurement", not "this looks technical".
- **Status is never colour alone.** Each of measured / preliminary / retracted ships a
  glyph + an uppercase word + a colour.
- **Retracted entries stay visible**, struck through, with the reason inline. That is the
  single most credibility-generating element on the `/lab` page and it is deliberately not
  hidden behind a filter.
- **The inconclusive run is in the results table**, shaded, footnoted with why it is
  inconclusive. Staff reviewers read for this.
- **Limitations sit above Reproduce**, as briefed — you admit the holes before you invite
  someone to dig.

---

## Direction A — "The Ledger"

**Serif, print, asymmetric.** A working engineer's journal set like a research note:
one narrow text column with a marginal column to its left carrying section labels and
metadata in small tracked mono. Warm paper, black-brown ink, one oxblood accent that only
ever means "this is a link" or "this is the number". Rules instead of boxes.

The three findings are set as **numbered journal entries**: a drop figure in oxblood mono
in the margin (`0.71`, `κ 0.41`, `$0.00019`), the claim beside it at 22px, provenance
underneath in 11px mono. You can read the three numbers without reading a word.

### What it optimises for
Being *read*. Prose at 18px Source Serif on a 34rem measure is the most comfortable
long-form setting in this file, so the experiment page carries narrative weight well.
It signals "I write things people finish." It also looks the least like every other
engineer's site, because almost nobody ships a serif.

### Where it is weaker
Serif + warm paper reads slightly academic. A reviewer skimming for density may feel it
is a blog first and a lab second. The marginal column is dead space below 52rem.

### Fonts
| Role | Face | Why |
|---|---|---|
| Prose, headings | **Source Serif 4** (400/600/700 + italic) | A variable optical-size serif drawn for screen reading, not a web-rendered print revival. Its `opsz` axis keeps 34px headings tight and 18px body open. Open-source, on Google Fonts, no licensing story. Has real oldstyle figures. |
| Data, labels, code | **IBM Plex Mono** (400/500/600) | Narrower than JetBrains Mono, so six-column tables fit on a phone. Humanist enough to sit next to a serif without looking pasted in. |

Weights used: 400 body, 600 headings, 700 name only. No 300, no 800.

### Type scale (ratio ≈ 1.26, base 18px)
```
--t--2  0.6875rem  11px   mono micro-label, letter-spacing .09–.22em, uppercase
--t--1  0.8125rem  13px   tables, captions, spec lists
--t-0   1.125rem   18px   prose                     line-height 1.62
--t-1   1.375rem   22px   finding claim, standfirst line-height 1.42
--t-2   1.75rem    28px   h2
--t-3   2.125rem   34px   h1 / experiment title     line-height 1.18
--t-4   clamp(2.25rem, 1.4rem + 3.6vw, 3.25rem)     name
```
Measure `--measure: 34rem` ≈ 68ch. Margin column `--margin-col: 8.5rem`.

### Colour tokens
```
light                          dark
--paper       #FBF8F2          #16140F
--paper-sunk  #F2EDE2          #1E1B15
--ink         #1A1814          #EDE7DA
--ink-2       #413C34          #C5BCAB
--ink-3       #6B6459          #938B7C
--rule        #DED6C6          #332E25
--rule-strong #B9AF9B          #4C4537
--accent      #9A2B1E          #E0836E
--accent-sunk #F0DED9          #38231D
--ok/--warn/--dead  #2F6A41 / #8A6410 / #8E3B30   →  #6FAE82 / #C79A3A / #D4716A
```
Dark mode is **warm**, not `#0a0a0a` + neon: `#16140F` is ink-on-paper inverted, and the
oxblood lifts to a terracotta so it stays legible without glowing.

---

## Direction B — "The Datasheet"

**Sans + mono, grid, full width.** A component datasheet or an instrument front panel.
The page is a visible hairline grid: full-bleed horizontal bands, a sticky 11rem left rail
carrying a single uppercase mono label per section, content to the right. Cool neutral
greys, one signal blue.

The three findings are a **readout strip** — three equal columns divided by vertical
hairlines, each with a huge mono figure in signal blue above two lines of explanation.
It reads like three gauges. No boxes, no radii, no shadows; the dividing rules do the work
that a card would otherwise do badly.

### What it optimises for
Density and scannability. A reviewer can see the whole landing page without scrolling on a
laptop and can skim the `/lab` table like a changelog. It says "this person's default
output format is a table with units on it." It is also the direction that ports to Next.js
with the least friction, because it is already thinking in rows and columns.

### Where it is weaker
Sans + grid is closer to the centre of gravity of engineering sites, so it is less
distinctive than A. The experiment page's prose sections are the weakest part of the
layout — 17px Plex Sans on 38rem is fine but not lovely.

### Fonts
| Role | Face | Why |
|---|---|---|
| Everything non-numeric | **IBM Plex Sans** (400/500/600 + italic) | Not Inter. Plex was commissioned as a *technical documentation* family — slightly narrower, more idiosyncratic letterforms (the `a`, the `g`, the flared `l`), and it does not carry the "I used the default" signal Inter now carries. |
| Numbers, labels, code | **IBM Plex Mono** (400/500/600) | Same superfamily: identical cap height, x-height and baseline, so a mono figure inside a sans table cell does not shift the row. That metric compatibility is the actual reason for choosing one superfamily here rather than mixing two designers' work. |

Mono is load-bearing in B: it marks every uppercase label, every date, every measurement,
every spec value. Sans never contains a number that is data.

### Type scale (ratio ≈ 1.22, base 17px)
```
--t--2      0.6875rem  11px   mono label, letter-spacing .14em, uppercase
--t--1      0.8125rem  13px   tables, captions, spec lists
--t-0       1.0625rem  17px   prose                    line-height 1.6
--t-1       1.25rem    20px   lede
--t-2       1.5rem     24px   h2
--t-3       2rem       32px   h1
--t-4       clamp(2.4rem, 1.2rem + 4.6vw, 3.9rem)      name, tracking -0.035em
--t-readout clamp(1.9rem, 1rem + 3.4vw, 2.9rem)        the three big figures
```
Measure `--measure: 38rem` ≈ 70ch. Rail `--rail: 11rem`. Page `max-width: 72rem`.

### Colour tokens
```
light                          dark
--bg          #FFFFFF          #11161B
--panel       #F5F8FA          #171E25
--panel-2     #EBF0F4          #1E262E
--ink         #0D141B          #E6EBEF
--ink-2       #39454F          #B2BDC6
--ink-3       #68757F          #7E8B95
--rule        #DCE3E9          #28313A
--rule-2      #B4C0C9          #3F4C57
--accent      #0B5FA4          #6FAEE6
--accent-sunk #E6F0F8          #152532
--ok/--warn/--dead  #197A4A / #8A6410 / #A5342A  →  #4FAE7C / #C79A3A / #E0786C
```
Dark mode is a blue-grey `#11161B`, picked as its own step rather than inverted, so the
hairline grid stays visible without becoming a glowing wireframe.

---

## The chart (identical data, styled per direction)

One hand-written inline SVG, `viewBox="0 0 720 368"`, `width:100%; height:auto`.
Recall@10 against cumulative churn, three series.

- Series colours are CSS custom properties with separate light and dark steps, and were
  **validated, not eyeballed** — OKLCH lightness band, chroma floor, protan/deutan/tritan
  separation, normal-vision separation and contrast against each surface all pass:
  `light #1C6DB4 / #C2610A / #8A3C8F` → `dark #4E92CE / #C87F3A / #A869B0`.
  Worst adjacent CVD ΔE is 18.8 (dark, deutan); the floor is 8.
- Identity is carried three ways, never by colour alone: a legend, direct end-labels on
  every line, and the results table beneath.
- The rebuild event is a dashed vertical connector plus an annotation, not a tooltip —
  the brief forbids JS, so there is no hover layer. The table immediately below is the
  data-inspection affordance that hover would otherwise provide.
- Grid and axes are recessive (`--grid`, `--rule-2`), 2px data lines, markers only on the
  one decision point at 40% churn. No marker on every point, no value labels on every point.
- Axis titles and tick labels are mono so digits align under the gridlines.
- `role="img"` with `<title>` and a full numeric `<desc>`, so a screen reader gets the
  finding without the picture.

---

## Which I recommend

**Direction A, the Ledger** — with one transplant from B.

The thesis is "AI engineering, measured on commodity hardware". A is the direction that
makes the *writing* the product, and a Staff AI-platform hire is won by someone reading
one experiment page end to end and thinking "this person is careful". A also differentiates:
a serif editorial site from an infra engineer reads as a deliberate choice by someone with
taste, where B reads as a competent engineer who picked good defaults. For a 7-year
engineer pushing from Senior to Staff, "has judgement" is the thing being assessed, and the
serif argues it before a word is read.

The transplant: take **B's readout strip** for the three findings on the landing page only.
A's marginal drop figures are elegant but B's three-gauge row hits harder in the eight
seconds you get. Everything below the fold stays A.

If he wants the safer outcome — or if he expects most traffic to arrive at `/lab` rather
than at `/` — ship B unchanged. B's `/lab` table is the better of the two.

Do not ship a blend of the two typographic systems. Pick the body face first; everything
else follows from it.

---

## How to port this to Tailwind

1. **Tokens become CSS variables, not Tailwind colours.** Paste each `:root` block into
   `app/globals.css` verbatim, including the two dark-mode blocks (the
   `@media (prefers-color-scheme: dark)` one guarded with `:root:not([data-theme="light"])`
   and the explicit `:root[data-theme="dark"]` one, so a manual toggle can override the OS).
   Then reference them in `tailwind.config.ts`:
   ```ts
   theme: { extend: {
     colors: {
       paper: 'var(--paper)', ink: 'var(--ink)', 'ink-2': 'var(--ink-2)',
       rule: 'var(--rule)', accent: 'var(--accent)', /* … */
     },
     fontFamily: { serif: ['var(--font-serif)'], mono: ['var(--font-mono)'] },
     fontSize: {
       label: ['var(--t--2)', { lineHeight: '1.5', letterSpacing: '0.14em' }],
       sm:    ['var(--t--1)', { lineHeight: '1.5' }],
       base:  ['var(--t-0)',  { lineHeight: '1.62' }],
       lg:    ['var(--t-1)',  { lineHeight: '1.42' }],
       h2:    ['var(--t-2)',  { lineHeight: '1.18' }],
       h1:    ['var(--t-3)',  { lineHeight: '1.18' }],
       display:['var(--t-4)', { lineHeight: '1' }],
     },
     maxWidth: { measure: 'var(--measure)' },
   }}
   ```
   Keeping the values in CSS variables means dark mode needs no `dark:` variant on any
   utility — one `:root` override flips the whole site. Do not duplicate the palette into
   `dark:` classes.
2. **Fonts go through `next/font/google`**, not a `<link>`:
   ```ts
   import { Source_Serif_4, IBM_Plex_Mono } from 'next/font/google'
   const serif = Source_Serif_4({ subsets:['latin'], axes:['opsz'], variable:'--font-serif' })
   const mono  = IBM_Plex_Mono({ subsets:['latin'], weight:['400','500','600'], variable:'--font-mono' })
   ```
   Put both `.variable` classes on `<html>`. Set `display: 'swap'`.
3. **Components to extract** (the markup is already shaped for this):
   `<Masthead>`, `<FindingReadout>` (the three claims), `<ConstraintLine>`, `<RowList>`
   (writing + roles, one component, two variants), `<LabTable>` + `<StatusChip>`,
   `<TLDR>`, `<SpecList>` (the `<dl>`), `<Figure>`, `<DataTable>`, `<Limitations>`,
   `<Reproduce>`, `<Artifacts>`.
4. **Keep the prose classes, not utilities, for long text.** Use
   `@layer components { .prose-note { … } }` or `@tailwind` with
   `@apply max-w-measure text-base` — a 34rem measure, a 1.62 line-height and oldstyle
   figures are three properties you will otherwise re-type on every page.
5. **Tables are real `<table>`s.** Do not rebuild them as flex rows; the tabular numeral
   alignment and the mobile `display:block` collapse in Direction A both depend on it.
6. **Chart.** Keep it as an SVG React component whose `points` strings are computed from a
   committed `results.csv` at build time — the whole credibility argument is that the
   figure is regenerated from the data, not hand-drawn. The `class` → `className` rename
   and the CSS-variable `stroke` values port unchanged.
7. **shadcn/ui.** You will need almost none of it. If you keep it, delete the default
   `--radius` (set it to `0`) and the shadow scale before anything else, or the card
   defaults will reintroduce exactly the look he is trying to leave.
