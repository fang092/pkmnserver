# PokeCodex

A web-based Pokédex built with React and powered by the public PokéAPI. PokeCodex lets users search, browse, and explore Pokémon stats and details through a clean, responsive interface with pagination support.

## Live Demo

[pkmnserver.vercel.app](https://pkmnserver.vercel.app/)

## About The Project

PokeCodex is a mock Pokédex application that demonstrates real-world API consumption and dynamic UI rendering in React. Users can search for specific Pokémon, paginate through the full roster, and click through to individual detail pages showing stats and information pulled live from the PokéAPI.

**Features include:**

- Pokémon search by name
- Paginated browsing through the full Pokémon roster
- Individual Pokémon detail view with stats and information
- Live data fetched from the PokéAPI — no local data files

## Built With

- [React](https://reactjs.org/) — component architecture and SPA structure
- [PokéAPI](https://pokeapi.co/) — free public REST API for Pokémon data
- [Tailwind CSS](https://tailwindcss.com/) — utility-first styling and responsive layout
- [HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML) — semantic markup
- [Vercel](https://vercel.com/) — deployment and hosting

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed:

```bash
node -v
npm -v
```

No API key is required — PokéAPI is completely free and open with no authentication needed.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/pokecodex.git
cd pokecodex
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open your browser at `http://localhost:3000`

## What I Learned

- Consuming a public REST API with React and managing asynchronous data fetching
- Handling paginated API responses and building pagination UI components
- Managing loading and error states when fetching external data
- Building a search experience that filters against live API data
- Structuring a multi-view React app with list and detail pages

## What I'd Do Differently

- Migrate from `create-react-app` to Vite for faster build and dev performance
- Add loading skeletons instead of a plain loading state for a smoother experience
- Implement caching to reduce repeat API calls on previously visited Pokémon
- Add filtering by type, generation, or stat ranges
- Improve accessibility with better keyboard navigation and ARIA labels

## License

This project is open source and available under the [MIT License](LICENSE).
