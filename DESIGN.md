---
name: devkernels — Ankit Mishra
description: A dark instrument console for AI engineering measured on commodity hardware.
colors:
  ground: "#0B1014"
  ground-2: "#121A20"
  ground-3: "#18232A"
  fg: "#E8EEF1"
  fg-2: "#A8B6BF"
  fg-3: "#6F818C"
  rule: "#22303A"
  rule-2: "#2E414D"
  signal: "#3FD0C9"
  signal-dim: "#1B6B68"
  event: "#F2A93B"
  focus: "#7FE3DE"
  mesh: "#35505E"
  mesh-node: "#4A6A7A"
  fg-3-on-b2: "#798A94"
  fg-3-on-b3: "#93A2AA"
  plate-fg: "#0B1014"
  plate-fg-2: "#33383C"
  plate-fg-3: "#585E61"
typography:
  display-sm:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(2.1rem, 9.5vw, 3rem)"
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: "-.035em"
    fontVariation: "'wdth' 112"
  display:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(2.4rem, 6.6vw, 4.5rem)"
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: "-.035em"
    fontVariation: "'wdth' 112"
  headline:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 3vw, 2rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-.03em"
    fontVariation: "'wdth' 108"
  title:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-.01em"
  lede:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "clamp(1.0625rem, 1.6vw, 1.3125rem)"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "IBM Plex Mono, ui-monospace, Menlo, monospace"
    fontSize: "0.74rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.09em"
  page-title:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(2rem, 5vw, 3.25rem)"
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: "-.04em"
    fontVariation: "'wdth' 112"
  stat:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(2rem, 5vw, 3.25rem)"
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: "-.035em"
    fontVariation: "'wdth' 112"
    fontFeature: "tabular-nums"
  row-body:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  linkrow:
    fontFamily: "IBM Plex Mono, ui-monospace, Menlo, monospace"
    fontSize: "0.82rem"
    fontWeight: 400
    letterSpacing: "0.03em"
  eyebrow:
    fontFamily: "IBM Plex Mono, ui-monospace, Menlo, monospace"
    fontSize: "0.7rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.14em"
  status:
    fontFamily: "IBM Plex Mono, ui-monospace, Menlo, monospace"
    fontSize: "0.68rem"
    fontWeight: 400
    letterSpacing: "0.12em"
  data:
    fontFamily: "IBM Plex Mono, ui-monospace, Menlo, monospace"
    fontSize: "0.78rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.03em"
    fontFeature: "tabular-nums"
rounded:
  none: "0"
  focus: "2px"
  pill: "99px"
spacing:
  row-tight: "0.9rem"
  row: "1.4rem"
  row-loose: "1.75rem"
  gap-col: "2.5rem"
  block: "2rem"
  section: "clamp(3rem, 6vw, 5rem)"
  cover: "clamp(4rem, 9vw, 7rem)"
  gutter: "max(20px, env(safe-area-inset-left, 0px))"
components:
  nav:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.fg-2}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.9rem 0"
  nav-link-hover:
    textColor: "{colors.signal}"
  wordmark:
    textColor: "{colors.fg}"
    typography: "{typography.title}"
    padding: "0"
  row-two-column:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.fg-2}"
    rounded: "{rounded.none}"
    padding: "1.75rem 0"
  row-label:
    textColor: "{colors.fg-3}"
    typography: "{typography.label}"
  prose:
    textColor: "{colors.fg-2}"
    typography: "{typography.body}"
    width: "68ch"
  link:
    textColor: "{colors.fg}"
    rounded: "{rounded.none}"
  link-hover:
    textColor: "{colors.signal}"
  band:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.fg-2}"
    rounded: "{rounded.none}"
    padding: "clamp(3rem, 6vw, 5rem) 0"
  band-2:
    backgroundColor: "{colors.ground-2}"
  band-3:
    backgroundColor: "{colors.ground-3}"
  band-plate:
    backgroundColor: "{colors.fg}"
    textColor: "{colors.ground}"
  eyebrow:
    textColor: "{colors.fg-3}"
    typography: "{typography.eyebrow}"
  stat:
    textColor: "{colors.fg}"
    typography: "{typography.stat}"
  status:
    textColor: "{colors.fg-2}"
    typography: "{typography.status}"
    rounded: "{rounded.none}"
  specplate:
    textColor: "{colors.fg-3}"
    typography: "{typography.label}"
  coverfoot:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.fg-3}"
    typography: "{typography.label}"
    padding: "0.7rem 0"
  footer:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.fg-3}"
    typography: "{typography.label}"
    padding: "1.75rem 0"
---

# Design System: devkernels — Ankit Mishra

Derived from the shipped artifacts: `index.html`, `findings.html`, `writing.html` and
`about.html` at the repo root. **All four are generated from one widget kit** (see
*Widget kit*, below); the landing page adds the cover and its mesh, and nothing else
differs. `design/landing.html` is the byte-identical source
prototype minus head metadata. `design/direction-a.html`, `design/direction-b.html` and
`design/README.md` are superseded history in an abandoned cream/oxblood and paper/teal
palette; **`design/README.md` documents a palette this site does not ship and must not be
inherited from.** Nothing here was taken from intent; every value below is read out of the
shipped stylesheet.

## Overview

**Creative North Star: "The Instrument Console"**

This is the read-out of a working machine, not a portfolio. The ground is ink-navy
near-black (`#0B1014`) because an instrument panel is dark so its signals read; the body
text is a serif because the claims are sentences a hiring manager must actually read; the
mono is reserved for the things that are measurements. Structure is carried entirely by
1px hairlines and a two-column row rhythm — there are no cards, no fills, no raised
surfaces, no corner radii above 2px anywhere in the page. Hierarchy is produced by type
size, weight, width-axis and luminance, never by boxing content off.

Colour is rationed to the point of austerity. Of fourteen tokens, eleven are greys in a
cool blue-green cast; exactly two are chromatic accents, and each one carries a single
meaning everywhere it appears. The hero headline — the most tempting surface on the page
for an accent — is deliberately set in the *secondary* text grey with its key phrase lifted
to full white, so the teal is never spent on decoration.

The only ornament in the entire design is the hero's node mesh: a topology of nodes, edges
and amber pips moving along bezier paths, drawn behind a directional scrim. It is the
site's thesis rendered as the background — data moving through pipes on one box — and it is
the sole place motion exists. Every animated element is styled so that its resting state is
already the correct state; with JS absent and motion reduced, the page is complete.

**Key Characteristics:**
- Ink-navy ground by default, with a light theme that is a redefinition of the same
  tokens — `color-scheme: light dark`, and no `dark:` variants anywhere. Everything that
  differs between the two is a token, including the values that are not colours: the nav
  wash (`--nav-bg`, `--nav-blur`), the cover scrim stops (`--scrim-*`), the mesh weight
  (`--mesh-w`), the per-band `--fg-3`, and the inverted band's link colour
  (`--plate-link`). A component rule never knows which theme it is in.
- **The one script on the site** is the theme switch: ~10 inline lines, no dependencies.
  A pre-paint snippet in `<head>` resolves "follow the OS" to an explicit `data-theme`
  so there is no flash of the wrong theme, and a button in the nav flips it and stores
  the choice in `localStorage`. With JS off, `@media (prefers-color-scheme: light)` on
  `:root:not([data-theme=dark])` does the whole job and the button is simply absent of
  effect. All three paths are verified by rendering: OS light with no JS, `data-theme`
  forced against the OS in both directions.
- Three-face type system: Archivo variable (display), Source Serif 4 (prose), IBM Plex Mono (data/labels).
- 1px hairlines as the only structural device; zero cards, zero shadows on content, radius 0.
- A single repeating `13rem / 1fr` two-column row carries four different sections.
- Two accents, one meaning each: teal = link or live node, amber = data in flight.
- Motion animates from an already-correct resting state, so nothing depends on it.

## Colors

A cool blue-green grey ramp over an ink-navy ground, with exactly two chromatic accents
whose scarcity is the system's main discipline.

### Primary
- **Signal Teal** (`signal`): the one structural accent. It appears on link hover, on the
  "kernels" half of the wordmark, on the `Now` marker in the experience timeline, on the
  live (`.hot`) mesh nodes, and on selection background. Nowhere else.
- **Signal Teal Dim** (`signal-dim`): the desaturated teal used only as the stroke of the
  mesh's current-carrying edges, so a live edge reads as teal without competing with a link.
- **Focus Teal** (`focus`): the lighter teal used for the `:focus-visible` outline and for
  the wordmark core on hover — a brighter sibling so focus is distinguishable from a link.

### Secondary
- **Event Amber** (`event`): the second accent, used only for the pips travelling the mesh
  paths and their glow. It is the colour of a packet in motion.

### Neutral
- **Ink Navy Ground** (`ground`): the page background, the scrollbar track, the scrim
  colour, the selection foreground, and the safe-area cap strip above the sticky nav.
- **Console Panel** (`ground-2`) / **Console Panel Raised** (`ground-3`): the two tonal
  steps above the ground. They carry the **band** rhythm — alternating full-bleed section
  backgrounds, with `ground-3` reserved for one dense band per page — and they double as
  the hero mesh's node fills (`ground-3` dormant, `ground-2` live). They are backgrounds
  only: a band's *content* is still flat, and neither tone may be used to box a block off
  inside a band.
- **Instrument White** (`fg`): primary text — body default, headings' emphasis, link rest
  colour, wordmark, `<strong>` inside prose and lede.
- **Readout Grey** (`fg-2`): the workhorse secondary text — the hero headline itself, the
  lede, all prose, all row bodies and list items, and the mesh orbit stroke.
- **Dim Readout** (`fg-3`): tertiary metadata — dates, organisation lines, row labels,
  cover footer, page footer, and scrollbar thumb hover.
- **Hairline** (`rule`): every 1px divider in the page — nav bottom, cover bottom, section
  separators, and the top border of each two-column row.
- **Hairline Strong** (`rule-2`): the slightly brighter hairline, used for link
  underline at rest, list-item markers, and the scrollbar thumb.
- **Mesh Edge** (`mesh`) / **Mesh Node** (`mesh-node`): the hero topology's inert edge
  stroke and node stroke. Decorative-layer only; never used on content.
- **Band-lifted tertiary** (`fg-3-on-b2` `#798A94`, `fg-3-on-b3` `#93A2AA`): `fg-3` holds
  4.79:1 on `ground` but only 4.3:1 on `ground-2` and 4.0:1 on `ground-3`. Each band above
  the ground therefore redefines `--fg-3` locally to the value that restores 4.5:1. These
  are not new greys in the ramp; they are the same rung measured against a brighter floor,
  and nothing may use them off a band.
- **Plate inks** (`plate-fg` = `ground`, `plate-fg-2` `#33383C`, `plate-fg-3` `#585E61`):
  the inverted `.plate` band's text ramp, produced with `color-mix` from `ground` and `fg`
  rather than declared as literals, so the plate stays tied to the palette. Links on the
  plate rest at `plate-fg` and hover to `signal-dim`, because `signal` holds under 2:1 on
  a light ground.

### Named Rules

**The Two Meanings Rule.** Teal means exactly one thing — "this is a link or a live node" —
and amber means exactly one thing — "this is data in flight." No third accent exists, and
neither accent may be borrowed for emphasis, decoration, section theming, headline colour,
category coding or mood. If a new surface needs to emphasise something, it uses luminance
(`fg-2` → `fg`) and weight, the way the hero headline does.

**The Luminance Hierarchy Rule.** Text importance is encoded by position on the
`fg-3 → fg-2 → fg` grey ramp, not by hue. A heading that needs to feel louder gets
`fg`, more weight, or a wider width axis — not an accent colour.

**The Hairline-Only Rule.** Separation and grouping are expressed with 1px `rule`
hairlines. Content is never placed on a filled panel; `ground-2` and `ground-3` exist for
the hero mesh and are not promoted to content backgrounds.

**The Browser Surface Rule.** The browser chrome is part of the design and must be themed
on every new surface: selection is teal-on-ground, the scrollbar is an 11px `rule-2` thumb
inset 3px against a `ground` track with a `fg-3` hover, `scrollbar-color` is set for
Firefox, the caret and UI inherit `color-scheme: dark`, and `:focus-visible` is a 2px
`focus` outline offset 3px with a 2px radius. Shipping a surface with default browser
scrollbars or a default focus ring is a defect.

## Typography

**Display Font:** Archivo variable (fallback `system-ui, sans-serif`), loaded across
`wdth 62..125, wght 400..700`
**Body Font:** Source Serif 4 variable (fallback Georgia, serif), `opsz 8..60` at weights
400 and 600, with `font-optical-sizing: auto` on `body`
**Label/Mono Font:** IBM Plex Mono at weights 400 and 500

**Character:** An engineering journal set on a console. The serif gives the prose the
authority of something written rather than marketed; the Archivo width axis gives the
headings a slightly condensed, tightly-tracked machine-stamped feel; the mono appears only
where there is literally data.

### Hierarchy
- **Display** (Archivo 500, `wdth` 112, `clamp(2.4rem, 6.6vw, 4.5rem)`, line-height 1.0,
  tracking `-.035em`): the hero `h1` only. Capped at `max-width: 18ch` with
  `text-wrap: balance`, set in `fg-2`, with its key phrase in `<em>` reset to
  `font-style: normal` at weight 700 in `fg`. On ≤48rem the cap is removed and the size
  drops to `clamp(2.1rem, 9.5vw, 3rem)`.
- **Headline** (Archivo 700, `wdth` 108, `clamp(1.5rem, 3vw, 2rem)`, line-height 1.1,
  tracking `-.03em`, `text-wrap: balance`, 2rem bottom margin): every section `h2`. The
  closing contact `h2` is the one escalation: `clamp(2rem, 5vw, 3.25rem)` at `-.04em`.
- **Title** (Archivo 600, `1.0625rem`, tracking `-.01em`): row titles — job titles, build
  names, post titles. Post titles drop their underline and rely on the row hover.
- **Lede** (Source Serif 4 400, `clamp(1.0625rem, 1.6vw, 1.3125rem)`, line-height 1.55,
  `max-width: 52ch`, `fg-2`, `text-shadow: 0 1px 14px var(--ground)` so it holds over the
  mesh): the hero paragraph and the contact paragraph.
- **Body** (Source Serif 4 400, `1.125rem`, line-height 1.7, `fg-2`, `max-width: 68ch` via
  `--measure`): the `.prose` block. The document default is `1.0625rem` / 1.65.
- **Data** (IBM Plex Mono 400, `.78rem`, tracking `.03em`, `font-variant-numeric:
  tabular-nums`): dates and organisation lines. `.82rem` for inline link rows.
- **Label** (IBM Plex Mono 400, `.70–.76rem`, tracking `.06–.09em`, uppercase): nav links,
  stack row labels, cover footer, page footer.

### Named Rules

**The Width-Axis Rule.** Archivo's width axis is a hierarchy tool, set with both
`font-stretch` and `font-variation-settings: "wdth" N` so it applies with or without
variable-font support. Display is 112; nav wordmark and section headings are 108. Only
those two values are in the system; do not invent intermediate widths.

**The Mono Means Measurement Rule.** IBM Plex Mono is confined to data and labels: dates,
timespans, organisations, pipeline strings, hardware specs, uppercase nav/section labels,
and anything with a number in it. Mono is never used for prose, for a heading, for a
pull-quote, or to make a sentence look technical. Numbers set as data carry
`tabular-nums` so columns of digits align.

**The One Serif Voice Rule.** Everything a human reads as a sentence is Source Serif 4.
Everything that names or measures is Archivo or mono. There is no fourth face.

## Layout

A single centred column of `max-width: 76rem` (`.shell`), gutters of
`max(20px, env(safe-area-inset-*))` so the layout respects notches, and one breakpoint at
`48rem`. Sections are `padding-block: clamp(3rem, 6vw, 5rem)` and separated by
`<hr class="rule">` hairlines rather than by background changes.

**The 13rem Row.** Four different sections — experience (`.role`), builds (`.build`),
stack (`.srow`) and writing (`.post`) — are all the same grid primitive:
`grid-template-columns: 13rem 1fr; gap: 0 2.5rem;` with a 1px `rule` top border and no
bottom border, so a run of rows reads as one ruled table. Only the vertical padding
changes by density: 1.75rem for experience, 1.6rem for builds, 1.4rem for writing, 0.9rem
for stack. Stack and writing rows align on `baseline`; the first experience row drops its
top border. Measure caps inside the right column: 58ch for build descriptions, 68ch for
prose.

At ≤48rem every one of those rows collapses to `grid-template-columns: 1fr` with a
`.45rem` gap, the label column's top padding is removed, and the timeline's `Now`/period
marker goes inline with a `.6rem` right margin. The cover switches from a flex row to a
block so the cover footer stacks beneath the headline instead of becoming a sibling column,
the scrim rotates from a 100deg horizontal wash to a vertical one, and the cover footer
loses its absolute positioning and backdrop blur in favour of a 2.5rem top margin.

**The Band.** Sections are full-bleed `<section class="band">` elements whose background
reaches the viewport edge, with the content held inside an inner `.shell`. The boundary
between two sections is therefore a real edge and a 1px `rule` top border, never a margin.
Bands alternate down the page across the ground ladder — `ground`, `ground-2`, with
`ground-3` used once for the densest band — so the page reads as a stack of distinct
readouts rather than one scroll. Vertical padding varies by section weight rather than
being uniform: `.tight` `clamp(2.25rem,4vw,3.25rem)`, default `clamp(3rem,6vw,5rem)`,
`.loose` `clamp(3.5rem,7vw,6rem)`, `.tall` `clamp(4rem,8vw,7rem)`, `.punct`
`clamp(4.5rem,9vw,7.5rem)`.

**The Adjacent-Silhouette Rule.** No two neighbouring bands may share a shape. The
repertoire is: full-measure prose with no label column; the `13rem / 1fr` row with the
label left; the same row mirrored (`.role.rev`, `1fr / 13rem`, label right-aligned); the
two-column readout strip; and the inverted plate. If a new band would repeat its
neighbour's silhouette, change one of the two.

**The One Punctuation Rule.** Exactly one band per page is the inverted `.plate` — `fg`
ground, `ground` text — and it is the contact band. It is the only inverted surface in
the build and the only hard break in the scroll. It costs nothing to theme: its
background is `var(--fg)`, so under the light theme it becomes the one dark band and
goes on being the punctuation. Striping more than one band inverted
destroys the effect and is a defect, not a variation.

**The Row-Not-Grid Rule.** Repeated page content is a ruled row list with a fixed label
column, not a grid of equal tiles. A new section with repeating items reuses the
`13rem / 1fr` row before it considers any other shape.

## Elevation & Depth

**There are no shadows on content.** No card, row, nav, or footer carries a `box-shadow`;
`--radius` is effectively zero everywhere. Depth exists in exactly three forms, all of them
atmospheric rather than object-level:

1. **Backdrop blur on floating chrome.** The sticky nav is `color-mix(in srgb, ground 86%,
   transparent)` with `backdrop-filter: blur(14px)`; the cover footer is `ground 72%` with
   `blur(6px)`. Both sit on a 1px hairline rather than a shadow.
2. **The cover scrim.** A two-layer gradient — a 100deg linear wash from opaque ground to
   6% ground plus a `radial-gradient(62% 58% at 6% 44%)` pool of ground — sits between the
   mesh and the text at `z-index: -1` to hold body text above 4.5:1 over the artwork.
3. **Glow, as signal.** Live mesh nodes carry
   `drop-shadow(0 0 10px color-mix(in srgb, signal 60%, transparent))` and the amber pips
   `drop-shadow(0 0 11px event)`. These read as emitted light inside the decorative layer,
   not as elevation.

### Named Rules

**The Flat-Content Rule.** Content is flat, always. Blur and glow belong to floating chrome
and to the hero's decorative layer; neither may be used to lift a content block. If a block
needs to separate from what is above it, it gets a hairline.

**The Legibility Scrim Rule.** Any text placed over the mesh must sit above a scrim that
holds it at 4.5:1, and the lede additionally carries `text-shadow: 0 1px 14px var(--ground)`.
Artwork never wins over reading.

## Shapes

Right angles. `--radius` does not exist as a concept in this build: the only curves in the
page are the 2px radius on the focus ring (so the outline doesn't look snagged), the 99px
pill on the scrollbar thumb, and the circles of the mark and the mesh. Everything
rectangular is 0px. Borders are 1px hairlines, always `rule` except link underlines and
list markers which use `rule-2`. There are no outlines, chips, pills, tags or capsules in
the content.

The brand mark is three concentric circles — a dashed `fg-2` orbit (r=10, dash `3 3`), a
solid `fg` ring (r=6) and a filled `signal` core (r=2.5) — at `1.65rem` in the nav and
`1.1rem` at `0.5` opacity in the footer sign-off.

## Components

### Navigation (`nav` > `.shell.navrow`)
Quiet, sticky, hairline-bottomed.
- **Shape:** full-bleed bar, radius 0, 1px `rule` bottom border, `position: sticky` at
  `top: env(safe-area-inset-top)`, `z-index: 20`. A `body::before` strip paints the
  safe-area inset in `ground` at `z-index: 21` so nothing shows through on notched devices.
- **Background:** `color-mix(in srgb, ground 86%, transparent)` + `blur(14px)`.
- **Layout:** `display: flex; align-items: baseline; gap: 1.5rem; padding-block: .9rem;
  flex-wrap: wrap`. The wordmark takes `margin-right: auto`; the links sit right.
- **Links:** mono `.76rem`, tracking `.06em`, uppercase, `fg-2`, no underline; hover
  `signal`. No active/current state exists in the shipped markup.

### Wordmark + Mark (`a.wordmark`, `svg.mark`, `svg.mark.endmark`)
- Archivo 700 at `wdth` 108, `1.0625rem`, tracking `-.015em`, mixed case, `fg`, no
  underline, `inline-flex` with a `.6rem` gap to the mark.
- The name is split: "dev" in `fg`, "kernels" in `signal`. This is the one place teal is
  used on static text, and it is a mark, not a heading.
- Hover lifts the mark's core to `focus` and its ring to `signal` over `.18s`.
- `.endmark` repeats the mark at `1.1rem`, `opacity .5`, `vertical-align: -.2em`, with its
  orbit animation disabled — a quieter sign-off in the footer.

### Cover (`header.cover` > `.cover-bg`, `::after` scrim, `.shell.cover-inner.hero`, `.coverfoot`)
The signature component: a full-viewport instrument readout.
- **Frame:** `min-height: clamp(32rem, 86vh, 54rem)`, `display: flex; align-items: center`,
  `isolation: isolate; overflow: hidden`, 1px `rule` bottom border.
- **`.cover-bg`:** absolutely positioned at `z-index: -2`, holding a `1600×900`
  `preserveAspectRatio="xMidYMid slice"` SVG with three groups — `.mesh-edges` (37 bezier
  paths), `.mesh-nodes` (13 circles, five flagged `.hot`), `.mesh-pips` (20 `.mp` circles
  each bound to one `offset-path`).
- **Scrim:** `::after` at `z-index: -1`, `pointer-events: none`, the two-layer gradient
  described in Elevation.
- **`.cover-inner`:** `padding-block: clamp(4rem, 9vw, 7rem)`, full width, holds the
  display `h1`, the `.lede`, and a `.herolinks` row.
- **`.coverfoot`:** absolutely pinned to the bottom edge, 1px `rule` top border,
  `ground 72%` + `blur(6px)`, inner `.shell` as a `space-between` flex row of two mono
  `.7rem` uppercase `fg-3` spans carrying the pipeline string and the hardware spec.

### Two-Column Rows (`.role`, `.role.rev`, `.srow`, `.post`, `.find`)
The structural workhorse; see Layout for the shared `13rem / 1fr` grid and *Widget kit*
for what each one is for.
- **`.role`** — left: `.when` (mono `.78rem`, `fg-3`, `tabular-nums`, `.3rem` top padding)
  with an optional `<b>` period/`Now` marker as a `signal` 500-weight block line; right:
  `.what` with an Archivo 600 `h3`, a mono `.org` line in `fg-3`, and one `.did` line at
  `1rem`/1.6 capped at 58ch.
- **`.role.rev`** — the same row at `1fr / 13rem` with the label column on the right and
  right-aligned. Collapses to the same single column at 48rem.
- **`.srow`** — a `dl` row: uppercase mono `.74rem` `dt` at tracking `.09em` in `fg-3`,
  `dd` as a middot-separated `1rem`/1.55 `fg-2` run. This is the system's answer to a tag
  wall.
- **`.post`** — mono date left; right an Archivo 600 `h3` link with the underline removed,
  a `.sum` hook in `fg-2`, and a `.where` line in uppercase mono `fg-3`.
- **`.find`** — mono `.meta` left carrying a `.status`; a `.claim` sentence right.

### Prose Block (`.prose`)
- Source Serif 4 `1.125rem`/1.7 in `fg-2`, capped at `--measure` (68ch), `<strong>`
  promoted to `fg` at weight 600. No drop caps, no pull quotes, no first-line treatments.

### Links (`a`, `a:hover`, `.herolinks`)
- **Rest:** `fg` text with a 1px `rule-2` underline at `.22em` offset — present, not loud.
- **Hover:** both colour and underline go to `signal` over `.18s cubic-bezier(.16,1,.3,1)`.
- **Focus:** the global 2px `focus` ring at 3px offset, 2px radius.
- **`.herolinks`:** a `flex` row, `gap: 1.75rem`, `flex-wrap: wrap`, mono `.82rem`,
  tracking `.03em` — the inline link cluster used in the hero, writing and contact sections.

### Footer (`.shell > footer`)
- 1px `rule` top border, `padding-block: 1.75rem`, mono `.74rem` at tracking `.04em` in
  `fg-3`, `space-between` flex row with `flex-wrap`. Left cell opens with `.endmark`.

### Motion
One motion vocabulary, one easing, one hard rule.
- **Easing:** `cubic-bezier(.16, 1, .3, 1)` for every entrance and state change;
  `linear` for the two looping behaviours (pip travel, edge current).
- **State transitions:** `.18s` on link colour, link underline colour, and mark core fill.
- **Entrances:** `spin-in` rotates the nav mark from `-120deg` and 0 opacity over `1.4s`;
  `draw-mesh` draws every edge from `stroke-dasharray: 0 1400` and 0 opacity over `2.2s`;
  `settle` fades and lifts nodes from `opacity .2` / `translateY(8px)` over `.9s`.
- **Loops:** `flow` drives each pip `0% → 100%` along its `offset-path` over `2.03–3.39s`
  with staggered `.71s–3.75s` delays; `current` pulls `stroke-dashoffset` to `-32` on every
  fourth edge; `pulse` breathes live nodes between `.75` and `1` opacity over `3.4s`.

**The Correct-At-Rest Rule.** Every animation runs *from* an already-correct resting state,
never *to* one. All entrance animations use `animation-fill-mode: both` on properties whose
static values are the finished values, so the page is complete with no JS, with animations
disabled, and at frame zero. `prefers-reduced-motion: reduce` cancels the mark orbit, the
mesh draw, the edge current, the node settle and the node pulse, and parks the pips at
`offset-distance: 58%` so the topology still reads as populated. There is no JavaScript in
this page at all; any future motion must keep that property.

## Widget kit

Every repeating thing on this site is one of the pieces below. They are defined once, in
the `WIDGET KIT` block of each page's stylesheet, and the four pages are generated from
that one block so they cannot drift. **Do not invent a tenth widget before checking that
none of these nine fits.** Two of them are defined and deliberately unused, because there
is nothing real to put in them yet.

### 1. Findings readout strip — `.readouts` > `.readout`
The findings as instrument readings, sitting directly under the cover on the landing page
and heading `findings.html`. A two-column grid separated by a 1px `rule` left border, each
column a `.stat`, a `.claim` sentence and a `.srcline` carrying a `.status` and a dated
link. Collapses to stacked rows with top hairlines at 48rem.

```html
<article class="readout">
  <span class="stat">0.98<span class="unit">recall@10</span></span>
  <p class="claim">…sentence with the number in it…</p>
  <p class="srcline"><span class="status preliminary">Preliminary</span>
    <a href="…">Argued 12 May 2026 ↗</a></p>
</article>
```

**Only ever instantiate it with claims that are real.** The strip takes as many columns as
there are true claims; two is a complete strip. A placeholder readout is worse than no
strip at all.

### 2. Spec plate — `.specplate`
A mono key/value strip naming what the numbers were measured on, plus when the spec was
read: `4 vCPU · 7.6 GB · no GPU · read 1 Nov 2026`. A `space-between` flex row of
uppercase `.7rem` mono in `fg-3`, with `tabular-nums`. It is the cover footer on the
landing page and a `band b3 tight` strip under the page head on `about.html` and
`findings.html`. The constraint is the credibility asset, so it is stated, not implied.

### 3. Status — `.status.measured` / `.status.preliminary` / `.status.retracted`
The three states a claim can be in. An uppercase mono token sitting on a 1px bottom
hairline, graded by luminance: `measured` is `fg` over `fg-3`, `preliminary` is `fg-2`
over `rule-2`, `retracted` is `fg-3` over `rule`. **It is not a capsule and not a traffic
light** — the word carries the meaning, the hairline carries the weight, and no accent
colour is spent on it.

### 4. Stat figure — `.stat` > `.unit`
One number in the display face at `clamp(2rem,5vw,3.25rem)`, `wdth` 112, `tabular-nums`,
with its unit as a small mono `.unit` lifted to superscript position in `fg-3`. Used as
the headline of a readout. The number is always restated inside the claim sentence, so the
figure is never the only place a reader can find it.

### 5. Timeline row — `.role` (and `.role.rev`)
`13rem / 1fr`: `.when` (mono dates, optional `<b>Now</b>` in `signal`) on the left,
`.what` on the right holding an Archivo 600 `h3`, a mono `.org` line, and **one** `.did`
line of substance at `1rem`/1.6 capped at 58ch. `.role.rev` mirrors it to `1fr / 13rem`
with the label right-aligned, which is how a band avoids repeating its neighbour's
silhouette. Used on `index.html` and `about.html`.

### 6. Writing row — `.post`
`13rem / 1fr`: mono date left; right, an Archivo 600 `h3` link with its underline removed,
a `.sum` one-line hook in `fg-2` capped at 58ch, and a `.where` line in uppercase mono
`fg-3` naming where it was published. Used for the landing page's latest items and the
full list on `writing.html`.

### 7. Repro block — `.repro` *(defined, unused)*
A `rule`-bordered band of mono: a `.cmd` command, a `.pinned` dependency line, and a
`.clock` expected wall-clock. It is a credibility signal read without being used, so it
must be visible at a glance and must not become the structure of a page. **Nothing
instantiates it yet**, because no experiment has shipped. Leave it empty rather than
filling it with a command that has never been run.

### 8. Chart frame — `.figure` *(defined, unused)*
A `<figure>` wrapper for one inline SVG chart carrying one claim: `.axis` hairlines in
`rule-2`, `.axis-label` in mono `fg-3`, `.series` in `fg-2` and `.series-2` in
`signal-dim`, and a mono `figcaption` restating the number with `<b>` promoting it to
`fg-2`. Series colour is deliberately separate from `signal`, which still only means link
or live node. **Nothing instantiates it yet**; a chart with invented data would be the
single worst thing this site could ship.

### 9. Last-updated stamp — `.stamp`
A `tabular-nums` mono date in the right cell of the footer. The site sat dark for six
months once; a visible stamp makes that impossible to miss, which is the point. Update it
whenever a page changes.

### Supporting pieces
`.band` and its modifiers (Layout), `.eyebrow` (the numbered band label), `.pagehead`
(the quiet counterpart to the cover), `.srow` (the stack row), `.find` (the status
explainer row), `.lede`, `.herolinks`, `.prose` and `.mailto`.

## Do's and Don'ts

### Do:
- **Do** keep teal to "link or live node" and amber to "data in flight". Audit test: if you
  can remove an accent from an element and the element still reads correctly, the accent was
  decoration and must come out.
- **Do** emphasise with luminance and weight — `fg-2` → `fg`, 500 → 700 — the way the hero
  headline lifts its key phrase.
- **Do** reuse the `13rem / 1fr` hairline row for any new repeating section, and collapse it
  to one column at 48rem.
- **Do** set Archivo's width axis with both `font-stretch` and `font-variation-settings`,
  at 112 for display and 108 for headings and the wordmark.
- **Do** keep prose in Source Serif 4 inside a 68ch measure (52ch for a lede).
- **Do** carry `tabular-nums` on every date, duration and figure.
- **Do** theme selection, scrollbar, caret and focus ring on every new surface.
- **Do** write motion so the resting state is already correct, and honour
  `prefers-reduced-motion: reduce` in the same stylesheet that declares the animation.
- **Do** scrim any text placed over artwork to 4.5:1 before shipping it.

### Don't:
- **Don't** put an *unnumbered* eyebrow or marketing kicker above a heading. The one label
  this design allows is the numbered band tag — `01 / FINDINGS` — which is a repeating
  instrument landmark, not a kicker: it is mono, uppercase, `fg-3`, carries the band's
  position in the page, and appears on **every** band without exception. A label that
  appears on some headings and not others is the borrowed template gesture, and that is
  still banned.
- **Don't** structure a page as a grid of same-size cards. There is not one card in this
  build; repeating content is a ruled row list with a label column.
- **Don't** build badge, pill or chip walls, and don't give any token a four-sided border.
  The stack section is the precedent: a label and a middot-separated prose run, not thirty
  capsules. `.status` is the one token-like element in the build and it is a word on a
  bottom hairline, not a capsule, for exactly this reason.
- **Don't** put a gradient on text, or on any heading fill. Gradients exist in this system
  only as the cover scrim's legibility wash — a background device, never a type treatment.
- **Don't** use mono as a technical costume. If the content is not a measurement, a date, an
  identifier or a label, it is not mono.
- **Don't** encode status, state or category by colour alone. Every accent in this build is
  accompanied by a word or a shape — `Now` is the word plus teal, a live node is a thicker
  stroke plus teal. A legend is not an acceptable substitute.
- **Don't** add a third accent or a theme-per-section colour. There are two themes and
  they are the same build: light is the fourteen tokens redefined under
  `prefers-color-scheme: light`, plus the two per-band `--fg-3` overrides and a lighter
  cover scrim, and nothing else. Any rule that hardcodes a colour outside `:root` breaks
  both at once. The single inverted `.plate` band is punctuation, not a theme: one band
  per page, always the contact band. Inside it the link colour has to move *away* from
  the band's ground — `signal-dim` on the dark theme's light plate, `signal` on the light
  theme's dark plate — because neither accent holds 4.5:1 on both.
- **Don't** introduce a corner radius on a content block, or a `box-shadow` on anything.
- **Don't** make content depend on JavaScript or on animation completing.
- **Don't** take any value from `design/README.md`, `design/direction-a.html` or
  `design/direction-b.html`. They describe abandoned cream/oxblood and paper/teal palettes
  that this site does not ship.

## Known Gaps

Recorded honestly, as of this pass. None of these are design rules; they are the state of
the artifact.

- **The source of the shipped site is not in this repo.** `master` holds a Next.js static
  export (build output only: `_next/`, `__next.*.txt`, per-route `.html` and `.txt`). The
  root `index.html` is a hand-authored single file committed directly over that output
  ("Make the new design the homepage"), and `index-legacy.html` is the previous homepage
  kept beside it. **Porting this design system happens in the Next source on the owner's
  machine, not here.** Editing files in this repo does not change the source.
- **Porting trap 1 — palette as custom properties.** Define the fourteen colour tokens as
  CSS custom properties on `:root` and have `tailwind.config.ts` reference them
  (`colors: { ground: 'var(--ground)' }`). Both themes then live entirely in the token
  block and no `dark:` variants are needed anywhere; duplicating the palette into the
  Tailwind config as literals is what forces them back.
- **Porting trap 2 — zero out shadcn first.** Before adding any shadcn/ui component, set
  `--radius: 0` and empty the shadow scale. Left at defaults, card, input and popover
  components reintroduce rounded corners and elevation — the exact abandoned look this
  design replaced.
- **Four pages are conformant; the rest of the export is not.** `index.html`,
  `findings.html`, `writing.html` and `about.html` are generated from the widget kit.
  `blog.html`, `projects.html`, `uses.html` and `contact.html` (plus `404.html` and
  `index-legacy.html`) still carry the old design from the Next export: DM Sans / Playfair
  Display / JetBrains Mono, a shadcn-style token set (`--card`, `--border`, `--accent`,
  `--destructive: #c4541c`, `--radius`), `rounded-full` utilities and a light-mode
  `--background: #fff`. **Nothing in the nav links into them any more**, so they are
  orphaned rather than visible; whether to delete them is the owner's call.

- **The widget kit is duplicated inline in four files.** Each page inlines the same
  `WIDGET KIT` stylesheet, matching how `index.html` was originally hand-written. They are
  byte-identical today because all four are emitted from one generator, but the generator
  is not in this repo. The right fix travels with the Next source port: one stylesheet,
  one copy. Until then, **change the kit in all four files or in none**.

- **`/lab` does not exist and should not yet.** No experiment has shipped. An empty lab
  shell is visible abandonment, which is the exact signal the site is trying to avoid.
  Build it when the first measurement lands, and build the `.repro` and `.figure` widgets
  into it rather than inventing new ones.
- **`design/README.md` is wrong and should be corrected or deleted.** It documents an
  oxblood/cream "Ledger" and a paper/teal "Lab" direction, their porting advice, and a
  "Direction A / B" choice that the shipped page does not implement.

### Self-inconsistencies in the shipped pages

Found across the four generated pages; recorded, not repaired.

- `.mp` declares `r: 4.2` in CSS while every pip's markup declares `r="3"`. The CSS wins;
  the radius has two sources of truth.
- The wordmark's "dev" span uses an inline `style="color:var(--fg)"` to override
  `.navrow a.wordmark span { color: var(--signal) }`, instead of a class. The `.wm` class on
  its parent is declared in markup but never styled.
- `.herolinks` and one `.prose` block carry inline `style="margin-top:…"` /
  `style="margin-bottom:…"` rather than a modifier class.
- The detector reports `cramped-padding` on every `padding-block` row and band. It is a
  false positive: the detector does not read the `padding-block` shorthand, reproduced
  with a two-div test case. Suppressed per file in `.impeccable/config.json`.
- `h3` in `.role` and `.post` sets Archivo at weight 600 but no `font-stretch` /
  `wdth`, so titles render at width 100 while the headings above them are 108 — the width
  ramp has a hole at title level.
- `h2` carries no `scroll-margin-top`; `.band` carries `4.5rem`, so a band anchor lands
  correctly but a deep link to a heading inside one would not.
- `.post a { text-decoration: none }` removes the underline from writing links, leaving
  those links distinguished from surrounding text by position and hover colour only — the
  one place the page's own link affordance is weaker than its rule.
