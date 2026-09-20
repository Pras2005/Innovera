# Innovera Event Portal

Innovera is a React-based single-page application (SPA) acting as the central portal for the Innovera event (likely a hackathon or tech fest). The portal provides attendees with crucial event information ranging from themes and rules to timelines and sponsor details.

## Table of Contents
- [Project Overview](#project-overview)
- [Project Structure](#project-structure)
- [Domain Logic & Features](#domain-logic--features)
- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
- [Usage / Running Locally](#usage--running-locally)

## Project Overview
This repository contains the frontend client code for Innovera, built with React and Vite. It utilizes Tailwind CSS for rapid UI styling and React Router DOM for seamless client-side navigation. 

## Project Structure
```text
Innovera/
├── Innovera-me/               # Main application root
│   ├── public/                # Static assets (images, bg-art, logos)
│   ├── src/                   # Source code
│   │   ├── components/        # Main pages (Home, About, Themes, Timeline, Rules)
│   │   │   └── element/       # Reusable UI fragments (Hero, ThemeCard)
│   │   ├── App.jsx            # Core routing logic
│   │   └── main.jsx           # React entry point
│   ├── package.json           # NPM scripts and dependencies
│   ├── tailwind.config.js     # Tailwind CSS configuration
│   └── vite.config.js         # Vite bundler configuration
└── README.md
```

## Domain Logic & Features
The application is structured into domain-specific routes mapping to different components of the event:
- **Hero & Landing**: `Home.jsx` aggregates all child components to form a comprehensive scrollable landing page.
- **Routing Context**: `App.jsx` establishes the `<Router>` logic for `/themes`, `/organiser`, `/rules`, `/timeline`, and `/about`.
- **Thematic Cards**: `ThemeCard.jsx` dynamically renders different visual cards mapping to domains like Space, Wind, Water, and Fire.
- **Scroll & Animation**: Uses libraries like `react-scroll` and `aos` for smooth navigation and on-scroll animations.

## Prerequisites
- **Node.js**: Version 18.x or above.
- **npm** or **yarn**

## Installation & Setup
1. Clone the repository:
   ```bash
   git clone git@github.com:Pras2005/Innovera.git
   cd Innovera/Innovera-me
   ```
2. Install the necessary Node modules:
   ```bash
   npm install
   ```

## Usage / Running Locally
Start the Vite development server:
```bash
npm run dev
```
Navigate to `http://localhost:5173` to view the application in your browser.
