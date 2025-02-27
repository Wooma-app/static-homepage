# Wooma - Secure Your Rental Deposit

Wooma is a modern web application designed to help UK tenants protect their rental deposits against unfair deductions. This project provides a landing page for the upcoming Wooma app, built with Next.js and Tailwind CSS.

## About Wooma

Wooma helps tenants:
- Document property conditions at check-in and check-out
- Access legal templates and expert advice
- Navigate the deposit dispute process
- Recover unfairly withheld deposits

## Features of this Website

- Responsive design that works on all devices
- Modern UI with Monzo-inspired styling
- Fast performance with Next.js
- UK-focused content and statistics
- Waitlist signup functionality
- Dark mode support
- SEO friendly

## Getting Started

### Prerequisites

- Node.js 18.17 or later

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/wooma-homepage.git
   cd wooma-homepage
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Customization

### Editing Content

- Edit the main page content in `src/app/page.tsx`
- Update metadata (title, description) in `src/app/layout.tsx`
- Add your own images to the `public` directory

### Styling

This project uses Tailwind CSS for styling with custom Wooma brand colors:
- Primary Green: #00C802
- Light Green: #4ddb4f
- Dark Green: #00a002

You can customize the design by:
- Editing the Tailwind configuration in `tailwind.config.js`
- Modifying CSS variables in `src/app/globals.css`

## Deployment

### Building for Production

```bash
npm run build
```

This will create an optimized production build in the `out` folder (since we're using static export).

### Deployment Options

- **Vercel**: The easiest way to deploy your Next.js app. Simply connect your GitHub repository to Vercel.
- **Netlify**: Another great option for static site hosting.
- **GitHub Pages**: You can deploy the static export to GitHub Pages.
- **Any static hosting**: The site is exported as static HTML/CSS/JS files and can be deployed to any static hosting provider.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
