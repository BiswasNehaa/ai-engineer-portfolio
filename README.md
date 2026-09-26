# Neha Biswas — AI Engineer Portfolio

A conventional, fast, content-first portfolio for Neha Biswas, an AI Engineer specializing in production
RAG systems, LLM applications, and open-source contributions. Bold editorial typography (inspired by a
reference the user liked), but built entirely around real content — no stock photography, no fabricated
skill percentages, no client testimonials.

This is the "fast" companion to a separate, more experimental illustrated-world prototype — the one meant
to actually go on a resume/LinkedIn link, readable and scannable in seconds.

## Stack

- React + TypeScript + Vite
- Tailwind CSS v4
- Framer Motion (reveal animations, the rotating badge, hover states)

## Sections

Hero · About · Skills (categorized tag groups, no percentages) · Projects (ASTRA, CheckMyNotes, AI
Academic Advisor — each a real case study with architecture, engineering decisions, and tech stack) ·
Open Source · Experience & Education · Contact

## Getting started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Design notes

- No skill-percentage bars, no client testimonials, no "available for freelance" framing — this is an
  engineer's portfolio, not a freelance-designer template.
- Fully semantic HTML, real anchor-link navigation, and no interaction is required to reach any content —
  unlike the illustrated-world prototype, everything here is visible and scannable immediately.
- The rotating circular badge in the hero is decorative and hidden on small screens to avoid crowding.
