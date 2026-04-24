---
name: Scrollytelling steps pattern
description: Sticky-left heading + scroll-highlighted step cards on the right; reused for every numbered "process / timeline" section sitewide
type: design
---
The site uses a single `ScrollytellingSteps` component (`src/components/ScrollytellingSteps.tsx`) for every numbered process or timeline section. It must replace any new ordered step list rather than re-creating bespoke variants.

Behavior:
- Sticky left column on `lg+`: eyebrow (uppercase gold, tracking-[0.2em]), serif heading (`text-xl-editorial`), optional intro paragraph, plus a vertical progress indicator (gold bars filling as steps pass viewport center).
- Right column: ordered list of step cards. Each card has a 2-digit serif number (e.g. "01"), optional uppercase label (e.g. "Step 1", "Q2 2026"), serif title, and body copy.
- Active state (closest to viewport center): gold border + gold step number + gold label.
- Passed state (above active): gold border, foreground-colored number.
- Pending state (below active): muted border + muted number/title.
- Mobile: stacks normally, same scroll-triggered highlight.

Wrap usages in `<EditorialSection centered={false}>` so the grid takes the full width.

Currently used on:
- `/program` — "A Bespoke Process / From first conversation to approved residency" (5 steps)
- `/guides/argentina-real-estate-investment` — "A Bespoke Process / From eligibility to keys in hand" (5 steps)
- `/guides/argentina-golden-visa-program` — "Program Timeline / A short window to position early" (3 milestones)
