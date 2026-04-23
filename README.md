# Marketplace Homepage

A responsive marketplace homepage built with React, TypeScript, Tailwind CSS, React Query, and Axios. Data is fetched from the [DummyJSON API](https://dummyjson.com).

## Features

- Product search with live filtering
- Nearby items section with product cards
- Each card displays image, title, price
- Bottom navigation bar
- Loading state while fetching data
- Fully responsive — mobile first

## Tech Stack

| Tool                                  | Purpose                   |
| ------------------------------------- | ------------------------- |
| React + TypeScript                    | UI and type safety        |
| Tailwind CSS                          | Styling                   |
| React Query (`@tanstack/react-query`) | Data fetching and caching |
| Axios                                 | HTTP requests             |
| DummyJSON API                         | Dummy product data        |

## Getting Started

```bash
# clone the repo
git clone https://github.com/JudithJude369/Market-Place.git
cd market-place

# install dependencies
npm install

# start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

## Project Structure

src/
├── components/
│ ├── SearchBar.tsx
│ ├── Products.tsx
│ ├── BottomNav.tsx
│ └── Loading.tsx
├── App.tsx
└── main.tsx

## API

Products are fetched from:
(https://dummyjson.com/products/search?q={searchTerm})

Empty search returns all products. React Query caches results per search term — no duplicate requests.

## Screenshots

> _Add screenshots or a screen recording here_

## Live Demo

> _Add Vercel / Netlify link here_
