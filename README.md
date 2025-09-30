# PantryPal – Recipe Finder

A modern React + Vite application for discovering recipes from TheMealDB. Browse categories, view detailed recipe pages, explore trending and latest picks, and search meals by ingredient. Built with Redux Toolkit, Redux-Saga, and Redux-Persist, styled with Tailwind CSS and Radix UI primitives.

## Features

- Browse recipe categories and filter into a category page
- View detailed recipe pages with ingredients, instructions, and embedded video
- Home page with curated hero, latest, and trending sections
- Search meals by ingredient with client-side pagination
- Persistent Redux store across sessions
- Dark/light theme toggle
- Smooth image loading and zoom states

## Tech Stack

- React 19, React Router 7
- Vite 7
- TypeScript 5
- Redux Toolkit, Redux-Saga, Redux-Persist, React-Redux
- Tailwind CSS 4, Radix UI components
- Lucide React icons

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Lint
npm run lint

# Build for production
npm run build

# Preview production build
npm run preview
```

Requirements:

- Node.js 18+ recommended

## Environment

This project uses public endpoints from TheMealDB and does not require private API keys. No additional environment variables are required by default.

## Project Structure

```
src/
  App.tsx                # Dispatches initial data fetches; mounts Router
  main.tsx               # React root, Redux Provider, PersistGate
  index.css              # Tailwind + app styles
  layouts/page-layout.tsx# Global layout: nav, outlet, footer

  routes/                # Route modules (code-split via React.lazy)
    index.tsx            # Router configuration
    home/                # Home page (hero, latest, trending, subscribe)
    categories/          # Category tiles from store
    recipe-category/     # Category listing via loader
    recipe-page/         # Single recipe details via loader
    trending/            # Trending listing via loader
    latests/             # Latest listing via loader
    search/              # Search by ingredient with pagination

  loaders/               # Data loaders for routes
    category.loader.ts   # Fetch meals by category
    recipe.loader.ts     # Fetch single recipe by id
    posts.loader.ts      # Fetch randomized list of meals

  store/                 # Redux Toolkit + Saga + Persist setup
    store.ts             # Configure store, saga middleware, persist
    root-reducer.ts      # Combine reducers
    root-saga.ts         # Combine sagas
    categories/          # Categories slice, saga, selectors, types
    recipes/             # Recipes slice, saga, selectors, types

  components/
    navigation/          # Top navigation + theme toggle + search link
    hero-section/        # Hero banner on home
    post-types/          # Cards and previews for latest/trending
    recipe-details/      # Recipe details and addition sidebar
    categories/          # Category grid preview
    pagination/          # PagePagination component
    preloader/           # Suspense fallback
    themes/              # ThemeProvider + ModeToggle
    ui/                  # Radix-based UI primitives

  utils/
    helpers.utils.ts     # TheMealDB helpers (ingredients, fetchers)
    hooks.ts             # Typed hooks for Redux

  types/                 # Shared domain types (Recipe, Meal, etc.)
```

## Routing Overview

The router is created in `src/routes/index.tsx` using `createBrowserRouter` and wraps the app with `ThemeProvider` and `Pagelayout` in a `Suspense` boundary with a preloader. Lazy-loaded routes:

- `/` → Home
- `/categories` → Categories grid
- `/category/:category` → Category listing (uses `categoryLoader`)
- `/recipe/:recipeId` → Recipe details (uses `recipeLoader`)
- `/t-posts` → Trending listing (uses `postsLoader`)
- `/l-posts` → Latest listing (uses `postsLoader`)
- `/search` → Ingredient search

## Data Flow and State Management

- On app mount (`App.tsx`), the app dispatches `fetchCategoriesStart` and `fetchRecipeStart`.
- Sagas listen for these actions and perform async fetches:
  - Categories: `https://www.themealdb.com/api/json/v1/1/categories.php`
  - Home recipes: a curated list of IDs via `homeLoader`
- Route loaders fetch data per-route for category lists, single recipe details, and posts collections.
- Redux-Persist stores the Redux state to localStorage for persistence.

Slices:

- `categoriesSlice`: `categories`, `isLoading`, `error`
- `recipeSlice`: `recipes`, `isLoading`, `error`

## Styling and UI

- Tailwind CSS 4 via the Vite plugin
- Radix UI Navigation Menu, Dropdown, Label, Tooltip, etc.
- Lucide icons
- Theme toggling via `components/themes` with `ThemeProvider` and `ModeToggle`

## APIs Used

- TheMealDB public API (`https://www.themealdb.com/api/json/v1/1/...`)
  - Lookup by id: `/lookup.php?i={id}`
  - Search all: `/search.php?s=` (used to derive trending/latest lists)
  - Filter by category: `/filter.php?c={category}`
  - Filter by ingredient: `/filter.php?i={ingredient}` (search page)

## Development Notes

- Images are handled by a custom `components/image` wrapper to control loading and zoom states.
- The search page uses a local `usePagination` hook for client-side pagination of ingredient results.
- `Suspense` + `lazy` code-splits all route pages, with `Preloader` as the fallback.

## Scripts

- `npm run dev`: Start development server
- `npm run build`: Type-check and build for production
- `npm run preview`: Preview the build
- `npm run lint`: Run eslint

## Contributing

1. Fork the repo
2. Create a feature branch
3. Commit changes with clear messages
4. Open a pull request

## License

MIT

---

Made with ❤️ using React, Redux Saga, and Tailwind CSS.
