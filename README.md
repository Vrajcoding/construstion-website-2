# construstion-website-2

A modern, responsive, and high-performance Construction & Architecture company website built with **React 19**, **TypeScript**, **Vite**, and **Tailwind CSS v4**.

---

## 🏗️ Features

- **Multi-Page Experience**:
  - **Home**: Hero section, key metrics & statistics, featured services, interactive video showcase, portfolio highlights, testimonials, and latest blog posts.
  - **About Us**: Company history & mission, leadership team, core values, global office locations, Instagram showcase, and interactive FAQ accordion.
  - **Services**: Detailed catalog of construction, architectural design, renovation, and structural engineering offerings with direct quote actions.
  - **Work / Portfolio**: Filterable project gallery showing completed residential, commercial, and industrial developments.
  - **Blog**: Article listings, category filters, and newsletter subscription banner.
  - **Contact**: Full inquiry form, direct contact channels, office locations, and working hours.

- **Interactive UI & Modals**:
  - **Request a Quote Modal**: Dynamic quote request modal pre-populated with chosen services or projects.
  - **Shopping Cart Drawer**: Real-time cart drawer with counter badge and checkout actions.
  - **Video Modal**: Video modal for company highlight reels and project showcases.
  - **Floating Action Badge**: Quick-access floating trigger for instant inquiries.

- **Design & Performance**:
  - Built with **Tailwind CSS v4** for clean, utility-first styling.
  - Responsive design optimized across desktop, tablet, and mobile breakpoints.
  - Custom typography and consistent brand theme (yellow accent `#ffd43e`, rich dark tones `#0e0e0e`).
  - Modular architecture separating pages, sections, reusable UI components, modals, and global state hooks.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Package Manager**: pnpm / npm

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Vrajcoding/construstion-website-2.git
cd construstion-website-2
```

### 2. Install Dependencies

```bash
npm install
# or
pnpm install
```

### 3. Start Development Server

```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:8443](http://localhost:8443) (or the port specified in terminal) in your browser.

### 4. Build for Production

```bash
npm run build
```

The production-ready bundle will be output to the `dist/` directory.

### 5. Preview Production Build

```bash
npm run preview
```

---

## 📁 Project Structure

```
├── imports/                  # Project image assets & media
├── src/
│   ├── components/
│   │   ├── common/           # Reusable UI primitives (Button, Logo, ProjectCard, etc.)
│   │   ├── layout/           # Navbar, Footer, FloatingBadge
│   │   ├── modals/           # QuoteModal, CartModal, VideoModal
│   │   ├── pages/            # Page-level components (Home, About, Services, Work, Blog, Contact)
│   │   └── sections/         # Page sections and sub-components (Hero, Stats, Testimonials, etc.)
│   ├── data/                 # Site content, navigation items, services, testimonials data
│   ├── hooks/                # Custom React hooks (navigation, modals, cart state)
│   ├── types/                # TypeScript interfaces and type definitions
│   ├── App.tsx               # Main application container & router
│   ├── index.css             # Tailwind CSS entrypoint and global styles
│   └── main.tsx              # React DOM mounting entrypoint
├── index.html                # Vite HTML entrypoint
├── package.json              # Project dependencies and npm scripts
├── tsconfig.json             # TypeScript configuration
└── vite.config.ts            # Vite & Tailwind configuration
```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
