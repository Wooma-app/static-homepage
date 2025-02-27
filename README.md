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

### GitHub Pages Deployment

This project is configured for automated deployment to GitHub Pages using GitHub Actions:

1. Push your changes to the `main` branch:
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

2. The GitHub Actions workflow will automatically:
   - Build the Next.js application
   - Export it as static files
   - Deploy to the `gh-pages` branch
   - Publish to GitHub Pages

3. Your site will be available at `https://yourusername.github.io/static-homepage`

4. To check the deployment status, go to the "Actions" tab in your GitHub repository.

### Troubleshooting GitHub Pages Deployment

- If images are not loading, ensure they use the correct base path
- For 404 errors, check that the `basePath` in `next.config.ts` matches your repository name
- For custom domains, add a CNAME file to the `public` directory

### Other Deployment Options

- **Vercel**: The easiest way to deploy your Next.js app. Simply connect your GitHub repository to Vercel.
- **Netlify**: Another great option for static site hosting.
- **Any static hosting**: The site is exported as static HTML/CSS/JS files and can be deployed to any static hosting provider.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
