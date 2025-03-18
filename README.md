# jewl.ai Website

A modern, responsive website for jewl.ai, an AI-powered document assistant that helps users find, analyze, and extract valuable insights from documents.

## Technologies Used

- Next.js
- TypeScript
- Tailwind CSS
- Shadcn UI Components
- Zod for form validation

## Recent Optimizations

The codebase has been optimized with the following improvements:

### Project Structure Cleanup

- Consolidated test files into organized directories
- Removed redundant nested directories
- Fixed TypeScript configuration and type definitions
- Eliminated duplicate configuration files

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
├── components/             # React components
│   ├── ui/                 # Reusable UI components (shadcn)
│   ├── lib/                # Component utility functions
│   ├── types/              # Component type definitions
│   ├── Layout.tsx          # Main layout component
│   ├── Features.tsx        # Features section
│   └── ContactSection.tsx  # Contact form section
├── pages/                  # Next.js pages
│   ├── _app.tsx            # App wrapper
│   └── index.tsx           # Homepage
├── public/                 # Static assets
│   ├── icons/              # Integration icons
│   └── logo-*.png          # Logo files
├── styles/                 # CSS styles
│   └── globals.css         # Global styles with Tailwind
├── utils/                  # Utility functions
│   ├── validation.ts       # Form validation utilities
│   └── integration-icons.tsx  # Icon components
├── lib/                    # Shared library code
├── types/                  # Global type definitions
├── consolidated-tests/     # Test files
│   ├── components/         # Component tests
│   ├── pages/              # Page tests
│   └── utils/              # Utility tests
└── README.md               # Project documentation
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

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run start` - Start the production server
- `npm run lint` - Run linting
- `npm test` - Run tests
- `npm run type-check` - Check types

## Features

- Responsive design for all device sizes
- Modern UI with animations and transitions
- Form validation with error handling
- Integration showcases for repositories and chat interfaces
- Optimized for accessibility and performance

## Testing

We have moved all tests to a consolidated structure:

```
consolidated-tests/
├── components/         # Component tests
├── pages/              # Page tests
└── utils/              # Utility tests
```

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

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

[MIT](https://choosealicense.com/licenses/mit/) 