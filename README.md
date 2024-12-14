# Judi Mobile App

A React Native mobile application built with Expo and TypeScript.

## Tech Stack

### Core
- React Native 0.76.5 
- Expo SDK 52.0.17
- TypeScript 5.3.3
- React 18.3.1

### State Management & Data Fetching
- @tanstack/react-query 5.62.3
- Context API

### UI & Navigation
- @react-navigation/native 7.0.0
- @gorhom/bottom-sheet 5.0.6
- expo-blur
- expo-haptics
- @shopify/flash-list

### Internationalization
- @lingui/core & @lingui/react 5.1.0
- @formatjs/intl-locale
- @formatjs/intl-numberformat
- @formatjs/intl-pluralrules
- expo-localization

### Development Tools
- ESLint
- Prettier
- Husky
- Jest
- SVGO

## Prerequisites

- Node.js >= 20
- npm or yarn
- iOS Simulator / Android Emulator
- Expo CLI

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Run on specific platform:
```bash
# iOS
npm run ios

# Android 
npm run android

# Web
npm run web
```

## Available Scripts

### Development
- `npm start` - Start Expo development server
- `npm run ios` - Run on iOS
- `npm run ios:prod` - Run production build on iOS
- `npm run android` - Run on Android
- `npm run android:prod` - Run production build on Android
- `npm run web` - Run on web browser
- `npm run start:dev-client` - Start with dev client
- `npm run start:prod` - Start production build

### Building
- `npm run prebuild` - Clean and prepare build
- `npm run export` - Export project

### Testing & Quality
- `npm run test` - Run tests
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

### Internationalization
- `npm run lingui:extract` - Extract i18n strings
- `npm run lingui:compile` - Compile i18n messages

### Utilities
- `npm run clean-cache` - Clean babel cache
- `npm run icons:optimize` - Optimize SVG icons
- `npm run fix-deps` - Check and fix dependencies
- `npm run reset-project` - Reset project to initial state

## Development Guidelines

### File Naming
- Use kebab-case for file names
- Follow [naming conventions](https://twitter.com/kentcdodds/status/1249870276688371713)

### Git Workflow
1. Create feature branch from develop:
```bash
git checkout develop
git pull origin develop --ff-only
git checkout -b feature/my-feature
```

2. Follow commit message format:
- Format: "[JIRA-ID] Brief description"
- Example: "[JUD-123] Add login screen"
- Keep subject line under 50 characters
- Reference issues in commit body

### Code Standards
- Follow [Google TypeScript Style Guide](https://google.github.io/styleguide/tsguide.html)
- Apply [Clean Code JavaScript principles](https://github.com/ryanmcdermott/clean-code-javascript)
- Use [Naming Cheatsheet](https://github.com/kettanaito/naming-cheatsheet)

### Performance Optimization
- Implement code splitting at route level
- Use memoization (React.memo) appropriately
- Optimize images and implement lazy loading
- Use Flipper for debugging and performance monitoring

### Testing
- Write unit tests for all new code
- Use Jest and React Native Testing Library
- Ensure good test coverage

## License

This project is private and confidential. All rights reserved.
