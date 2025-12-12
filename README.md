# Apple Website Clone

A pixel-perfect clone of Apple.com built with React, TypeScript, and Vite. This project follows strict architectural rules for maintainability and scalability.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Download assets from Apple.com
npm run download-assets

# Start development server
npm run dev

# Verify project structure
npm run verify

# Build for production
npm run build
```

## 📁 Project Structure

Follows the **"One Page, One Folder"** rule:

```
src/
├── components/
│   ├── global-nav/           # Global navigation
│   │   ├── index.tsx
│   │   ├── GlobalNav.styles.ts
│   │   └── components/       # Each button in separate file
│   │       ├── StoreButton/
│   │       ├── MacButton/
│   │       └── ...
│   └── global-footer/        # Global footer
├── pages/
│   └── home/                 # Homepage
│       ├── index.tsx         # Main view (connects components)
│       ├── Home.logic.ts     # Business logic & state
│       ├── Home.styles.ts    # Styled components
│       └── components/       # Page-specific components
│           ├── RibbonBanner/
│           ├── HeroSection/
│           └── PromoGrid/
└── styles/
    └── GlobalStyles.ts
```

## 🎯 Architecture Rules

### ✅ Enforced Rules
- **One Page, One Folder**: Every page has dedicated folder with index.tsx, logic.ts, styles.ts
- **One Button, One File**: Each button/component in separate file
- **Max 400 Lines**: No file exceeds 400 lines
- **No Inline Code**: Main pages only contain layout and imports
- **Atomicity**: Single responsibility per component

### 🛠 Tech Stack
- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite (Rolldown)
- **Styling**: Styled Components
- **Animations**: Framer Motion
- **Routing**: React Router DOM

## 📊 Verification

Run `npm run verify` to check:
- ✅ Folder structure compliance
- ✅ Each button in separate file
- ✅ Max line count (400 lines)
- ✅ Downloaded assets

## 🎨 Features

- Sticky navigation bar with blur effect
- Animated hero sections
- Responsive promo grid
- Comprehensive footer
- Smooth scroll animations
- Apple-style typography and spacing

## 📦 Assets

Assets are downloaded from Apple.com using the custom script:
```bash
npm run download-assets
```

Downloads 50+ images to `public/assets/images/`

## 🧪 Testing

All components verified with automated structure tests:
- 26/26 tests passing ✅
- All files under 400 lines ✅
- Proper folder structure ✅

## 📝 License

MIT
