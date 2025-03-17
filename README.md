# jewl.ai Website

A Next.js website for jewl.ai with a clean, modern design inspired by manus.im.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3003](http://localhost:3003) with your browser to see the result.

## Features

- Responsive design with mobile menu
- Modern UI with clean typography
- Video placeholder with play button
- Rainbow gradient button styling
- Card-based layout for use cases and features
- Comprehensive test suite

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