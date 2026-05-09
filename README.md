# Fekra — Digital Agency Landing Page

A premium bilingual agency landing page built with Next.js.  
This project showcases a modern frontend experience with responsive design, Arabic and English content support, animated sections, a mobile navigation menu, and a polished dark visual style.

## Overview

Fekra is a portfolio-ready frontend project designed as a modern digital agency website.  
It was built to practice and demonstrate real-world Next.js frontend skills, including reusable components, responsive layouts, smooth interactions, and production-style UI structure.

## Features

- Responsive design for mobile, tablet, and desktop
- Bilingual interface with Arabic and English content
- Modern hero section with animated visual layout
- Responsive navbar with mobile menu
- Services, work, process, and contact sections
- Footer with social media icons and contact details
- Smooth in-page navigation with anchor links
- Accessibility improvements such as skip link support
- Metadata setup for better SEO and sharing readiness

## Tech Stack

- Next.js
- React
- CSS Modules
- Framer Motion
- JavaScript

## Project Structure

```bash
src/
  app/
    globals.css
    layout.js
    page.js
  components/
    home/
      Hero.jsx
      Hero.module.css
      Services.jsx
      Work.jsx
      Process.jsx
      WhyUs.jsx
      ContactCTA.jsx
      Section.module.css
    shared/
      Navbar.jsx
      Navbar.module.css
      Footer.jsx
      Footer.module.css
  data/
    siteContent.js
```

## Getting Started

Clone the repository and install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

You can easily customize the project by editing:

- `src/data/siteContent.js` for Arabic and English content
- `src/components/shared/Footer.jsx` for social media links
- `src/app/layout.js` for metadata
- component CSS files for layout and visual styling

## What I Practiced

This project helped me practice:

- Building with the Next.js App Router
- Organizing a scalable component-based frontend structure
- Creating responsive layouts with CSS Modules
- Handling bilingual content in a clean way
- Improving UI polish for portfolio presentation
- Adding accessibility and navigation enhancements

## License

This project is for portfolio and educational use.
