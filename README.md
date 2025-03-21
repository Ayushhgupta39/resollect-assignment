# Resollect Assignment

## Overview
Resollect Assignment is a React-based project built using **Vite**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui**. It follows a modular component structure with reusable UI elements and custom hooks.

## Tech Stack
- **Vite**: Fast and lightweight development environment
- **TypeScript**: Strongly typed JavaScript for better development experience
- **Tailwind CSS**: Utility-first CSS framework for styling
- **shadcn/ui**: A set of customizable components based on Radix UI
- **Radix UI**: Accessible UI primitives for better user experience

## Project Structure

```
├── README.md                # Project documentation
├── components.json          # shadcn/ui component configuration
├── eslint.config.js         # ESLint configuration
├── index.html               # Main HTML file
├── package-lock.json        # Lock file for dependencies
├── package.json             # Project metadata and scripts
├── postcss.config.js        # PostCSS configuration for Tailwind CSS
├── public/
│   └── vite.svg             # Public assets
├── src/
│   ├── App.tsx              # Root component
│   ├── assets/              # Static assets (e.g., images, SVGs)
│   │   └── react.svg
│   ├── components/          # UI and application components
│   │   ├── app/             # Application-specific components
│   │   │   ├── LoanTable.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── Portfolio.tsx
│   │   │   └── Sidebar.tsx
│   │   └── ui/              # Reusable UI components (shadcn)
│   │       ├── avatar.tsx
│   │       ├── button.tsx
│   │       ├── checkbox.tsx
│   │       ├── dropdown-menu.tsx
│   │       ├── input.tsx
│   │       ├── select.tsx
│   │       ├── sheet.tsx
│   │       ├── table.tsx
│   │       ├── tabs.tsx
│   │       ├── toast.tsx
│   │       └── toaster.tsx
│   ├── hooks/               # Custom hooks
│   │   └── use-toast.ts
│   ├── index.css            # Global styles
│   ├── lib/                 # Utility functions and API interactions
│   │   ├── api.ts           # API configuration
│   │   └── utils.ts         # General utility functions
│   ├── main.tsx             # Main entry point for React
│   └── vite-env.d.ts        # TypeScript environment definitions
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.app.json        # TypeScript configuration for the app
├── tsconfig.json            # Global TypeScript configuration
├── tsconfig.node.json       # TypeScript configuration for Node.js
└── vite.config.ts           # Vite configuration
```

## Installation & Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/resollect-assignment.git
   cd resollect-assignment
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173/`

## Scripts
- `npm run dev` - Starts the development server
- `npm run build` - Builds the project for production
- `npm run lint` - Runs ESLint to check code quality
- `npm run preview` - Previews the built project

## License
This project is licensed under the MIT License.

