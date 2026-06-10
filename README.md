# Ambi Vineyards 🍇

A premium digital experience for **Ambi Vineyards**, capturing the soul of the valley in every pour. This website showcases the brand's heritage, exceptional wine collection, and vineyard legacy, offering users an immersive journey into the world of Ambi Wines.

## 📖 About The Project

Ambi Vineyards is a React-based web application designed to represent the elegance and tradition of the Ambi wine brand. From the sun-kissed slopes of the Sahyadri range to the bottle, the website tells the story of the terroir, the aging process, and the passion behind every vintage.

**Key Highlights:**
*   **Immersive UI:** Cinematic hero sections, smooth scroll animations, and a premium aesthetic using Tailwind CSS and Framer Motion.
*   **Wine Collection:** Detailed showcase of wines categorized by type (Red, Rose, etc.).
*   **Store Locator:** Interactive outlet finder for locations across Madhya Pradesh (Ratlam, Indore, Bhopal, etc.).
*   **Franchise Opportunities:** Dedicated section for potential partners to connect with the brand.
*   **Story & Legacy:** Rich narrative pages detailing the history, people, and vineyards behind the brand.

## 🛠️ Built With

*   **[React](https://reactjs.org/)** - Frontend library
*   **[Vite](https://vitejs.dev/)** - Next Generation Frontend Tooling
*   **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
*   **[Framer Motion](https://www.framer.com/motion/)** - Animation library
*   **[React Router](https://reactrouter.com/)** - Client-side routing
*   **[Lucide React](https://lucide.dev/)** & **[React Icons](https://react-icons.github.io/react-icons/)** - Iconography

## 🚀 Getting Started

Follow these steps to get a local copy up and running.

### Prerequisites

*   Node.js (v14 or higher recommended)
*   npm

### Installation

1.  **Clone the repository**
    ```sh
    git clone https://github.com/yourusername/ambi-vine.git
    cd ambi-vine
    ```

2.  **Install dependencies**
    ```sh
    npm install
    ```

3.  **Start the development server**
    ```sh
    npm run dev
    ```
    The site will be available at `http://localhost:5173`.

4.  **Generate sitemap (optional)**
    ```sh
    npm run sitemap
    ```
    Set `SITE_URL` env var to override the base URL.

## 📂 Project Structure

```
ambi-vine/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images and icons
│   ├── Components/      # Reusable UI components (Hero, Navbar, etc.)
│   ├── data/            # Static data files (wines.js)
│   ├── pages/           # Page components (Home, Store, Franchaise, etc.)
│   ├── App.jsx          # Main application component & Routing
│   └── main.jsx         # Entry point
├── .gitignore           # Git ignore file
├── index.html           # HTML entry point
├── package.json         # Project dependencies and scripts
├── tailwind.config.js   # Tailwind configuration
├── vercel.json          # Vercel deployment configuration
└── vite.config.js       # Vite configuration
```

## ✨ Features

*   **Dynamic Wine Catalog:** Filter and view wines by category.
*   **Store Finder:** Locate "Ambi The Wine Shop" outlets with contact details and managers.
*   **Storytelling:** "Our Story" and "Our Vineyards" pages with rich visuals and narrative.
*   **Responsive Design:** Fully optimized for mobile, tablet, and desktop.
*   **Performance:** Optimized build with Vite and lazy loading strategies.
*   **Smooth Animations:** Reusable reveal component powered by Framer Motion.
*   **Dynamic Sitemap:** Auto-generated from routes and wine data on build.
*   **Security Hardening:** CSP, permissions policy, and safe navigation defaults.

## 📦 Deployment

This project is configured for deployment on **[Vercel](https://vercel.com/)**.

1.  Push your code to a GitHub repository.
2.  Import the project into Vercel.
3.  Vercel will automatically detect the Vite settings.
4.  The `vercel.json` file ensures that client-side routing works correctly.

### Build Hooks

The sitemap is automatically regenerated after every build:
```sh
npm run build
```
This runs the `postbuild` hook to update `public/sitemap.xml`.

To set the canonical domain for the sitemap, define:
```
SITE_URL=https://ambivineyards.com
```

## 🔒 Security

- Content Security Policy restricts scripts, styles, fonts, images, and media sources.
- Permissions Policy disables camera, microphone, and geolocation by default.
- Safer links and UI interactions; no `javascript:` hrefs are used.

## 🧰 Scripts

- `npm run dev` – start development server
- `npm run build` – production build
- `npm run preview` – preview production build
- `npm run lint` – lint code
- `npm run sitemap` – generate sitemap manually
- `npm run check` – lint then build

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📞 Contact

**Ambi Vineyards**
*   **Head Office:** Jhabua Road, Village & Post – Titari, Ratlam (M.P)

---
*Built with ❤️ for Ambi Vineyards*
