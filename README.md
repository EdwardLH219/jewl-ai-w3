# jewl.ai Website

A modern, responsive website for jewl.ai, an AI-powered document assistant that helps users find, analyze, and extract valuable insights from documents.

## Technologies Used

- Next.js
- TypeScript
- Tailwind CSS
- Zod for form validation

## Recent Optimizations

The codebase has been optimized with the following improvements:

### TypeScript Migration

- Converted key JS files to TypeScript (.tsx)
- Added proper type definitions and interfaces
- Set up better TypeScript configuration with strict mode

### Component Structure

- Created reusable UI components (Button, Card)
- Implemented centralized validation utilities
- Added icon components for integrations

### Best Practices

- Improved form validation with Zod schema validation
- Enhanced accessibility with proper ARIA attributes
- Added loading states for better UX
- Implemented responsive design patterns

## Directory Structure

```
jewl-ai-website/
├── components/         # React components
│   ├── ui/             # Reusable UI components
│   ├── Layout.tsx      # Main layout component
│   ├── Features.tsx    # Features section
│   └── ContactSection.tsx  # Contact form section
├── pages/              # Next.js pages
│   ├── _app.tsx        # App wrapper
│   └── index.tsx       # Homepage
├── public/             # Static assets
│   ├── icons/          # Integration icons
│   └── logo-*.png      # Logo files
├── styles/             # CSS styles
│   └── globals.css     # Global styles with Tailwind
├── utils/              # Utility functions
│   ├── validation.ts   # Form validation utilities
│   └── integration-icons.tsx  # Icon components
└── README.md           # Project documentation
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Build and Deploy

```bash
npm run build
npm run start
```

## Features

- Responsive design for all device sizes
- Modern UI with animations and transitions
- Form validation with error handling
- Integration showcases for repositories and chat interfaces
- Optimized for accessibility and performance

## File Structure

```
jewl-ai-website/
├── components/          # Reusable UI components
│   ├── ContactSection.js
│   ├── Features.js
│   └── Layout.js
├── pages/               # Next.js pages
│   ├── _app.js
│   └── index.js
├── public/              # Static assets
│   ├── logo-black.png
│   └── logo-white.png
├── styles/              # CSS and styling
│   └── globals.css
├── __tests__/           # Test files
│   ├── contentConsistency.test.js
│   ├── features.test.js
│   ├── index.test.js
│   ├── layout.test.js
│   ├── mobileMenu.test.js
│   └── navigation.test.js
├── .github/workflows/   # CI configuration
│   └── ci.yml
├── netlify.toml         # Netlify configuration
├── package.json
├── tailwind.config.js
└── postcss.config.js
```

## Testing

To run tests:

```bash
npm test
```

## Building for Production

To build the site for production:

```bash
npm run build
```

This will generate a static site in the `out` directory, ready for deployment.

## Deploying to Netlify

### Option 1: Automatic Deployment with Git

1. Create a new site on Netlify and connect it to your Git repository
2. Netlify will automatically detect the Next.js project
3. Use the following build settings:
   - Build command: `npm run build`
   - Publish directory: `out`
4. Click "Deploy site"

### Option 2: Manual Deployment

1. Build the site locally: `npm run build`
2. Install Netlify CLI: `npm install -g netlify-cli`
3. Authenticate with Netlify: `netlify login`
4. Deploy the site: `netlify deploy --prod --dir=out`

### Environment Variables

No environment variables are required for basic functionality.

## CI/CD

This project includes GitHub Actions CI configuration in `.github/workflows/ci.yml` that:

1. Runs all tests on push/PR to the main branch
2. Builds the static site
3. Uploads the build artifacts

You can connect this to Netlify for automatic deployments when tests pass.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

[MIT](https://choosealicense.com/licenses/mit/) 