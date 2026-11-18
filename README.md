# E-Com Market Slides

A two-section React page recreated from a "Market Trends" slide design. Built to practice component structure, props, data-driven rendering and Tailwind CSS layouts.

**Live demo:** https://YOUR-PROJECT-NAME.vercel.app

![Screenshot](./screenshot.png)

## Features

- **Reusable cards** rendered with `.map()` from a single data array
- **Props** passed from `App.jsx` down through `Section_1` and `Allcontent` to `Right_content`
- **Image cards** with a gradient overlay, built with `relative` / `absolute` positioning
- **Stat cards** (blue and lime) with a cut-corner arrow badge
- **SVG bar chart** showing the E-Com market growing from 43 (2019) to 301 (2027F), with a CAGR pill
- **Icons** from `lucide-react`

## Tech stack

- React
- Vite
- Tailwind CSS
- lucide-react
- Deployed on Vercel

## Project structure

```
src/
 ├── App.jsx                  # holds the cards data and passes it as props
 ├── data.jsx/
 │    └── addcard.jsx         # card data
 ├── Section_1/
 │    ├── Section_1.jsx
 │    ├── Navbar.jsx
 │    └── Main_content.jsx/
 │         ├── Allcontent.jsx
 │         ├── Left_content.jsx
 │         └── Right_content.jsx   # renders the cards
 └── Section_2/
      ├── Section_2.jsx
      ├── Navbar_2.jsx
      └── Main_con2.jsx/
           ├── Left_2.jsx          # heading, stat cards
           └── Right_2.jsx         # bar chart
```

## Run locally

```bash
git clone https://github.com/anshulkumar0761/Project_Ecom.git
cd Project_Ecom
npm install
npm run dev
```

Then open the local URL shown in the terminal (usually http://localhost:5173).

Build for production:

```bash
npm run build
```

## What I learned

- Splitting a UI into components and passing data with props (including prop drilling)
- Rendering lists with `.map()` and unique `key`s
- Positioning with Tailwind: `relative`, `absolute`, flexbox, `calc()` heights
- Drawing a data-driven chart with inline SVG
- Deploying a Vite app from GitHub to Vercel and fixing missing dependencies

## Next steps

- Add `useState` interactions to the card buttons
- Make the layout responsive for mobile
- Clean up folder names

## Author

**Anshul Kumar**
GitHub: [@anshulkumar0761](https://github.com/anshulkumar0761)
