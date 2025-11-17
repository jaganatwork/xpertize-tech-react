# Xpertize Tech React

A modern React development environment built with Vite, TypeScript, and comprehensive testing setup.

## Tech Stack

- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool with HMR (Hot Module Replacement)
- **Vitest** - Blazing fast unit testing framework
- **Testing Library** - React component testing utilities
- **ESLint** - Code quality and consistency
- **Prettier** - Code formatting

## Getting Started

### Prerequisites

- Node.js 18+ and npm (or yarn/pnpm)

### Installation

1. Install dependencies:

```bash
npm install
```

### Running in Development Mode

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will open automatically at `http://localhost:3000`

Changes you make to the code will be reflected instantly in the browser!

## Available Scripts

### Development

- `npm run dev` - Start development server with HMR on port 3000
- `npm run build` - Build for production (TypeScript compilation + Vite build)
- `npm run preview` - Preview production build locally

### Testing

- `npm test` - Run tests in watch mode
- `npm run test:ui` - Run tests with Vitest UI interface
- `npm run test:coverage` - Generate test coverage report

### Code Quality

- `npm run lint` - Check for linting errors
- `npm run lint:fix` - Auto-fix linting errors
- `npm run format` - Format code with Prettier

## Verifying Everything Works

To ensure your development environment is properly set up:

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run tests:**
   ```bash
   npm test
   ```
   All tests should pass ✓

3. **Run linter:**
   ```bash
   npm run lint
   ```
   No errors should be reported ✓

4. **Start dev server:**
   ```bash
   npm run dev
   ```
   Browser should open with the app running ✓

5. **Test HMR:**
   - Edit `src/App.tsx`
   - Save the file
   - Changes should appear instantly without full page reload ✓

6. **Build for production:**
   ```bash
   npm run build
   ```
   Build should complete successfully ✓

## Project Structure

```
xpertize-tech-react/
├── src/
│   ├── components/       # React components
│   │   ├── Counter.tsx
│   │   └── Counter.test.tsx
│   ├── test/            # Test setup and utilities
│   │   └── setup.ts
│   ├── App.tsx          # Main App component
│   ├── App.test.tsx     # App tests
│   ├── App.css          # App styles
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript configuration
├── eslint.config.js     # ESLint configuration
└── package.json         # Dependencies and scripts
```

## Features

- ⚡ **Fast Development** - Vite's HMR provides instant feedback
- 🔒 **Type Safety** - Full TypeScript support with strict mode
- 🧪 **Well Tested** - Example tests with Vitest and Testing Library
- 📏 **Code Quality** - ESLint and Prettier pre-configured
- 🎨 **Modern UI** - Beautiful gradient design with smooth interactions
- ♿ **Accessible** - Semantic HTML and ARIA best practices

## Development Tips

- The dev server runs on port 3000 by default
- Tests run in watch mode automatically
- TypeScript errors will show in the terminal and browser
- ESLint warnings appear in the terminal during development
- Use `npm run format` before committing to ensure consistent code style

## Next Steps

- Add routing with React Router
- Implement state management (Redux, Zustand, etc.)
- Add UI component library (Material-UI, Chakra UI, etc.)
- Set up CI/CD pipeline
- Add E2E tests with Playwright or Cypress

## Troubleshooting

**Port 3000 already in use:**
```bash
# Kill the process using port 3000, or modify port in vite.config.ts
```

**Module not found errors:**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**TypeScript errors:**
```bash
# Check TypeScript version and configuration
npx tsc --version
```

## Contributing

1. Create a feature branch
2. Make your changes
3. Run tests and linting
4. Submit a pull request

## License

MIT