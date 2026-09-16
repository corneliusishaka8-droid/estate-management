# Coco's Home

Coco's Home is a React real-estate discovery website for browsing homes, offices, and land. It combines property search with editorial pages about the brand, contact and enquiry flows, a featured property view, a profile dashboard, and privacy and terms pages.

The frontend is built with React 19 and Vite. It uses React Router for navigation, GSAP for page and scroll animations, Material UI icons, local image assets, and curated Unsplash image URLs for listing imagery.

## Contents

- [Features](#features)
- [User journey](#user-journey)
- [Routes](#routes)
- [Technology](#technology)
- [Project structure](#project-structure)
- [Getting started](#getting-started)
- [Available scripts](#available-scripts)
- [How search works](#how-search-works)
- [Application notes](#application-notes)
- [Backend status](#backend-status)
- [Deployment](#deployment)
- [Future improvements](#future-improvements)

## Features

- Responsive navigation with desktop links and a mobile menu.
- Home page hero with location, property category, building type, and keyword search controls.
- Property catalogue grouped into bungalows, duplex homes, mansions, multi-storey homes, office spaces, and landed properties.
- Interactive property image strips powered by the `Bits` component.
- Search results driven by URL query parameters, for example `/search?q=lagos`.
- Featured property page with gallery imagery, pricing, property details, room and parking controls, and a save-home toggle.
- Contact form with required fields and an in-page success state after submission.
- Direct email, telephone, and Google Maps links on the contact page.
- Profile dashboard showing saved homes, viewing counts, active searches, and search preferences.
- Login screen with Google, Facebook, and X placeholder actions.
- Privacy Policy and Terms of Service pages.
- Shared footer and navigation across the main website pages.
- GSAP word reveals, section reveals, and image/form/button/link animations on route changes and scroll.

## User journey

1. A visitor lands on the home page and uses the search controls to describe the space they want.
2. The search form combines the selected values into a query and opens the results page.
3. Search results show matching property cards with location, type, description, and price.
4. Visitors can browse the broader catalogue from the Property page or open the featured residence from the results and catalogue calls to action.
5. The featured property page lets visitors adjust displayed room and parking quantities, save the home for the current session, and request a private viewing.
6. The contact form provides the enquiry path for viewings, listings, partnership questions, or general support.
7. The profile page presents the intended account experience, including saved homes and search preferences.

## Routes

| Route           | Page              | Purpose                                                                       |
| --------------- | ----------------- | ----------------------------------------------------------------------------- |
| `/`             | Home              | Brand introduction, hero search, stats, exploration content, and footer.      |
| `/about`        | About             | Coco's Home story, values, team introduction, and call to action.             |
| `/contact`      | Contact           | Contact details, enquiry form, office address, and map link.                  |
| `/prop`         | Properties        | Browsable property categories and the catalogue search field.                 |
| `/search?q=...` | Search results    | Filters the local property data using the query string.                       |
| `/view`         | Featured property | Detailed view of the featured Lekki Phase 1 residence and discovery listings. |
| `/profile`      | Profile           | Example account dashboard with saved home and search preference content.      |
| `/login`        | Login             | Social sign-in presentation with placeholder coming-soon messages.            |
| `/privacy`      | Privacy Policy    | Privacy information for the platform.                                         |
| `/terms`        | Terms of Service  | Usage, listing, content, and service terms.                                   |

## Technology

### Runtime

- React 19
- React DOM 19
- React Router DOM 7
- Vite 8

### UI and motion

- Material UI icons
- Emotion React and Emotion Styled
- GSAP and `@gsap/react`
- GSAP `ScrollTrigger` and `SplitText`
- Three.js is installed for future interactive or 3D experiences, although the current pages do not use it directly.

### Code quality

- ESLint 10
- Vite React plugin
- React Hooks and React Refresh ESLint plugins

## Project structure

```text
my-react-app/
|-- index.html                 Vite HTML entry point
|-- package.json               Frontend dependencies and scripts
|-- vite.config.js             Vite configuration
|-- eslint.config.js           ESLint configuration
|-- public/                    Static files served as-is
|-- backend/                   Separate Express package placeholder
|   |-- package.json
|-- src/
	|-- main.jsx               React root and BrowserRouter setup
	|-- app.jsx                Route definitions
	|-- assets/                Local property and brand imagery
	|-- info/                  Local property and house-type data
	|-- pages/                 Route-level page components
	|-- componets/             Shared components and page styles
```

> The `componets` directory name is part of the existing project structure. It is intentionally preserved here so paths in this documentation match the source tree.

### Important source files

- `src/main.jsx` mounts the app inside `StrictMode` and `BrowserRouter`.
- `src/app.jsx` defines the route-to-page mapping and wraps routes with `PageMotion`.
- `src/info/properties.js` creates the local search dataset from image URLs, names, types, locations, descriptions, and prices.
- `src/componets/PageMotion.jsx` owns the shared GSAP animation behavior.
- `src/componets/Head.jsx` owns the shared navigation and responsive menu.
- `src/componets/footer.jsx` owns the shared footer and calls to action.

## Getting started

### Prerequisites

- Node.js 18 or newer is recommended.
- npm, which is included with Node.js.

### Install and run the frontend

From the project root:

```bash
npm install
npm run dev
```

Vite will print the local development URL, normally `http://localhost:5173`.

Open the URL in a browser and use the navigation or the route table above to explore the site.

### Install the backend package separately

The backend has its own package manifest. If you need its dependencies for future API work:

```bash
cd backend
npm install
```

There is currently no backend start script or server entry file in the repository.

## Available scripts

Run these commands from the frontend project root:

| Command           | Description                                                     |
| ----------------- | --------------------------------------------------------------- |
| `npm run dev`     | Starts the Vite development server with hot module replacement. |
| `npm run build`   | Creates a production build in `dist/`.                          |
| `npm run preview` | Serves the production build locally for verification.           |
| `npm run lint`    | Runs ESLint across the project.                                 |

## How search works

The home and property pages navigate to the search route with a URL query parameter:

```text
/search?q=nigeria%20residential%20duplex
```

The search page reads `q` with React Router's `useSearchParams` hook and filters the array exported by `src/info/properties.js`.

Matching is intentionally lightweight:

- Empty queries show the initial search state.
- `property`, `properties`, `home`, `homes`, and `all` match the complete local dataset.
- `residential`, `commercial`, and `land` apply category-aware matching.
- Other terms are matched against the property title, type, location, and description.

The current implementation is a client-side demo. It does not request listings from an API, persist searches, or apply server-side pagination.

## Application notes

- The login buttons display a coming-soon message; no authentication provider is connected.
- The profile content is currently static example account data.
- The contact form prevents the browser's default submission and displays a success state; it does not send data to a server or email service.
- The featured property's save button is component state only and resets when the page is reloaded.
- Several catalogue cards use placeholder links (`#`) while the featured catalogue action points to `/view`.
- Some listing images are remote Unsplash URLs, so an internet connection is needed for those images to load.
- Legal content is defined in `src/pages/legal.jsx`, and both legal routes share the same page component.
- The app uses `BrowserRouter`; production hosting must serve `index.html` as a fallback for direct navigation to routes such as `/about` or `/search`.

## Backend status

The `backend/` directory currently contains only a `package.json` with Express as a dependency. It does not yet contain an Express app, API routes, database connection, environment configuration, or a runnable `start` script.

When a backend is added, likely integration points include:

- Property listing and search endpoints.
- Account creation and authentication.
- Saved-property and preference persistence.
- Contact form delivery and enquiry tracking.
- Viewing request creation.

The frontend currently works independently of that package using local data and component state.

## Deployment

Build the frontend with:

```bash
npm run build
```

Deploy the generated `dist/` directory to a static host such as Netlify, Vercel, GitHub Pages, or an equivalent service. Configure SPA history fallback so every application route returns `index.html`.

Before deployment, verify:

1. All local asset imports resolve correctly.
2. Remote Unsplash images are permitted by the hosting environment.
3. Direct requests to `/about`, `/prop`, `/search`, `/view`, `/profile`, and the legal routes fall back to the app entry point.
4. Contact and authentication integrations are implemented if this is being promoted beyond a frontend prototype.

## Future improvements

- Replace local property data with a backend API and database.
- Add real authentication and protected profile routes.
- Persist saved homes, preferences, and viewing requests.
- Connect the contact form to a secure server-side email or CRM workflow.
- Add dedicated detail routes for each property instead of a single featured view.
- Add loading, error, and offline states for remote data and images.
- Add automated component, route, and accessibility tests.
- Add environment-based configuration for API URLs and third-party services.
- Add a 404 route and an explicit navigation error state.
