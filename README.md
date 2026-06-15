# PopX — React Assignment

A pixel-perfect React implementation of the **PopX** mobile app UI, based on the provided Adobe XD design.

## Live Demo

> 🔗 https://popx-app-react-kappa.vercel.app/

## Screens

| Route | Screen | Description |
|-------|--------|-------------|
| `/` | Landing | Welcome screen with Create Account & Login buttons |
| `/login` | Login | Email + password login with validation |
| `/signup` | Signup | Full registration form with inline validation |
| `/profile` | Account Settings | Displays the signed-in user's data dynamically |

## Features

- ✅ **Dynamic Profile** — Signup/Login data saved to `localStorage`; Profile reads and shows it
- ✅ **Form Validation** — Email format, 10-digit phone, password length; errors shown inline on blur
- ✅ **Disabled Buttons** — Login/Signup buttons disabled (`cursor: not-allowed`) until form is valid
- ✅ **Exact XD Colors** — `#6C25FF` (primary), `#CEBAFB` (secondary accent)
- ✅ **Hover & Active Effects** — Buttons respond to hover/active states
- ✅ **Mobile Responsive** — Full-width layout on small screens; no horizontal scrolling
- ✅ **Local Avatar** — No external image dependencies

## Tech Stack

- **React 18** — UI library
- **Vite** — Build tool
- **React Router DOM** — Client-side navigation
- **localStorage** — User data persistence across pages

## Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Build for Production

```bash
npm run build
```

## Deploy to Vercel

```bash
npm install -g vercel
vercel --prod
```

Or connect your GitHub repo at [vercel.com](https://vercel.com) for automatic deploys.
