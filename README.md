# Anitha Bodempudi Portfolio

A modern, responsive personal portfolio website built with HTML, CSS, and JavaScript.

## Overview

This project showcases:

- A hero section with animated particle background
- Sticky top navigation with smooth scrolling
- About, Education, Skills, Projects, and Connect sections
- Download CV button in the hero area
- Contact actions for email and LinkedIn

## Tech Stack

- HTML5
- CSS3
- JavaScript (vanilla)
- [particles.js](https://vincentgarreau.com/particles.js/) via CDN

## Project Structure

```text
portfolio/
├── index.html          # Main page structure and content
├── styles.css          # Styling and theme
├── function.js         # particles.js configuration
└── assets/             # Images and downloadable files (CV, etc.)
```

## Getting Started

### 1) Clone or download the project

```bash
git clone <your-repo-url>
cd portfolio
```

### 2) Run locally

Since this is a static website, you can run it in either of these ways:

- Open `index.html` directly in your browser, or
- Use a local static server (recommended)

Example with VS Code Live Server:

1. Install the **Live Server** extension
2. Right-click `index.html`
3. Select **Open with Live Server**

## Configuration

### Update profile content

Edit text and links in:

- `index.html`

### Update styles and theme

Edit colors, spacing, and section styles in:

- `styles.css`

### Update particle animation

Edit particle count, speed, and color in:

- `function.js`

### Add/replace CV file

Place your resume PDF in:

- `assets/`

And ensure the hero button points to the same filename in `index.html`.

## Deployment

You can deploy this static site to:

- GitHub Pages
- Netlify
- Vercel
- Any static hosting provider

For GitHub Pages:

1. Push this folder to a GitHub repository
2. Go to **Settings → Pages**
3. Select the main branch and root folder
4. Save and use the generated URL

## Accessibility & Performance Notes

- Uses semantic sectioning for better structure
- Responsive layout with flexible grids
- Lightweight setup with no build step

## Author

**Anitha Bodempudi**

- LinkedIn: https://www.linkedin.com/in/anitha-bodempudi-829840196/
- Email: anithabodempudi125@gmail.com

## License

This project is for personal portfolio use.
