# 🚀 FutureSelf

> **Don't let important things quietly disappear.** The reminder system for your future self — simple, contextual, and impossible to ignore when it matters most.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-purple?logo=framer)](https://www.framer.com/motion/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

---

## 📋 Problem Statement

We live in a world of constant notifications — yet the things that truly matter still slip through the cracks.

Traditional reminders fail because:

| Problem | Description |
|---------|-------------|
| **🧠 Mental Overload** | Trying to remember everything creates anxiety. Your brain uses processing power just to hold onto data. |
| **⚡ Broken Context** | Reminders pop up at the wrong time or place. A "Buy Milk" alert during a deep-focus meeting is just noise. |
| **📱 Digital Noise** | Important tasks get buried under a sea of social media pings, news alerts, and spam notifications. |

---

## 💡 Solution

**FutureSelf** is a time-capsule inspired reminder platform that lets you write messages to your future self. Instead of nagging you with instant pings, it delivers meaningful reminders at the *exact* moment they become relevant — days, weeks, or months from now.

Think of it as a **letter to your future self**, encrypted and sealed until the right moment.

### How It Works

```
📝 Write  →  🎯 Choose  →  ⚡ Nudge
```

1. **Write** — Jot down a thought, goal, or follow-up instantly
2. **Choose** — Set the delivery date (tomorrow, next month, next year)
3. **Nudge** — Receive a gentle, inescapable reminder exactly when it's relevant

---

## ✨ Features

### Core
- 📨 **Future Reminders** — Create time-capsule messages delivered on your chosen date
- 📊 **Analytics Dashboard** — Track consistency trends, completion rates, and habit streaks
- 🔍 **Smart Timeline** — Search, filter, and sort reminders with grouped sections (Upcoming / Delivered / Archived)
- 🎯 **Category System** — Organize by Goals, Habits, Ideas, Follow-ups, or General
- 🔐 **Encrypted Until Delivery** — Messages stay sealed until their delivery date

### UI / UX
- 🌙 **Dark Mode First** — Premium dark charcoal theme with violet gradient accents
- 💎 **Glassmorphism** — Frosted-glass modals and overlays with backdrop blur
- 🎬 **Framer Motion Animations** — Page transitions, hover effects, staggered lists, slide-in panels
- 📱 **Responsive Design** — Optimized for desktop and tablet viewports
- ⚡ **Collapsible Sidebar** — Animated expand/collapse with active route indicator

### Pages (9 Screens)
| Screen | Route | Description |
|--------|-------|-------------|
| Landing Page | `/` | Hero, problem section, how-it-works, features, testimonial, CTA |
| Login | `/login` | Split-panel with Google OAuth + email/password |
| Register | `/register` | Account creation with Google OAuth |
| Onboarding | `/onboarding` | Focus area selection (Goals, Habits, Ideas, Follow-ups) |
| Dashboard | `/dashboard` | Stat cards, upcoming pipeline, recent time capsules |
| Timeline | `/dashboard/timeline` | Full reminder list with search, filter, sort |
| Analytics | `/dashboard/analytics` | Area chart, donut chart, stat cards |
| Settings | `/dashboard/settings` | Preferences, notifications, identity, danger zone |
| Detail Overlay | *(slide-in panel)* | Full reminder detail with archive/delete actions |

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | Next.js 16 (App Router, Turbopack) |
| **Language** | TypeScript 5 |
| **Styling** | TailwindCSS 4 (`@theme` directive) |
| **Animations** | Framer Motion 12 |
| **Charts** | Recharts 3 (Area + Pie) |
| **State** | Zustand 5 |
| **Auth** | NextAuth v5 (Email + Google OAuth) |
| **Database** | Prisma 6 + PostgreSQL |
| **UI Primitives** | Radix UI |
| **Toasts** | Sonner |
| **Icons** | Lucide React |
| **Font** | Inter (Google Fonts) |

---

## 📁 Project Structure

```
futureSelf/
├── prisma/
│   └── schema.prisma              # Database schema (User, Reminder, Analytics, NextAuth)
├── src/
│   ├── app/
│   │   ├── globals.css            # Design system (dark theme, violet gradients, glassmorphism)
│   │   ├── layout.tsx             # Root layout (Inter font, Sonner toast provider)
│   │   ├── page.tsx               # Landing page
│   │   ├── login/
│   │   │   └── page.tsx           # Login screen
│   │   ├── register/
│   │   │   └── page.tsx           # Registration screen
│   │   ├── onboarding/
│   │   │   └── page.tsx           # Onboarding screen
│   │   └── dashboard/
│   │       ├── layout.tsx         # Dashboard layout (Sidebar + modals)
│   │       ├── page.tsx           # Main dashboard
│   │       ├── timeline/
│   │       │   └── page.tsx       # Timeline / reminder list
│   │       ├── analytics/
│   │       │   └── page.tsx       # Analytics & charts
│   │       └── settings/
│   │           └── page.tsx       # Account settings
│   ├── components/
│   │   ├── Sidebar.tsx            # Collapsible sidebar navigation
│   │   ├── DashboardLayout.tsx    # Sidebar + modal wrapper
│   │   ├── StatCard.tsx           # Stat card with gradient & trend
│   │   ├── ReminderCard.tsx       # Reminder card with status badge
│   │   ├── CreateReminderModal.tsx # New reminder modal (glassmorphism)
│   │   ├── ReminderDetailOverlay.tsx # Slide-in detail panel
│   │   ├── LoadingSkeleton.tsx    # Skeleton loading states
│   │   └── EmptyState.tsx         # Empty state placeholder
│   ├── store/
│   │   ├── reminders.ts           # Zustand: reminders CRUD, search, filter, sort
│   │   └── ui.ts                  # Zustand: modals, sidebar, theme
│   └── lib/
│       ├── utils.ts               # cn(), formatDate, formatTime, getGreeting, getDaysUntil
│       ├── db.ts                  # Prisma client singleton
│       └── mock-data.ts           # 12 sample reminders + analytics chart data
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9
- **PostgreSQL** (optional — app works with mock data out of the box)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/futureself.git
cd futureself

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables (Optional)

Create a `.env` file for database and OAuth:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/futureself"
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
NEXTAUTH_SECRET="your-nextauth-secret"
NEXTAUTH_URL="http://localhost:3000"
```

### Database Setup (Optional)

```bash
# Generate Prisma client
npx prisma generate

# Run migrations
npx prisma migrate dev --name init
```

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (Turbopack) |
| `npm run build` | Create production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## 🎨 Design System

| Token | Value | Usage |
|-------|-------|-------|
| `--color-background` | `#09090b` | Page background |
| `--color-card` | `#18181b` | Card surfaces |
| `--color-primary` | `#7c3aed` | Violet accent (buttons, links, indicators) |
| `--color-violet-start` | `#7c3aed` | Gradient start |
| `--color-violet-end` | `#a78bfa` | Gradient end |
| `--color-destructive` | `#ef4444` | Danger zone actions |

### Utility Classes
- `.glass` — Glassmorphism (backdrop blur + semi-transparent bg)
- `.gradient-text` — Violet gradient text
- `.gradient-btn` — Gradient button with hover glow
- `.gradient-border` — Subtle gradient border effect
- `.pulse-glow` — Animated pulsing glow
- `.timeline-line` — Vertical timeline connector

---

## 🗺 Roadmap

- [ ] Email delivery via SendGrid
- [ ] Push notifications (Web + Mobile)
- [ ] AI mood analysis on delivered reminders
- [ ] Stripe subscriptions (Free / Premium)
- [ ] Voice capture for reminders
- [ ] Location-based contextual triggers
- [ ] Mobile app (React Native)

---

## 📄 License

This project is licensed under the MIT License.

---

<p align="center">
  <strong>FutureSelf</strong> — Your future self will thank you. ✨
</p>
