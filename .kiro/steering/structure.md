# Project Structure & Conventions

## Directory Organization

### Core Application Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── [locale]/          # Internationalized routes
│   └── api/               # API routes
├── components/            # Reusable UI components
├── hooks/                 # Custom React hooks
├── lib/                   # External service clients
├── utils/                 # Utility functions and helpers
├── data/                  # Static data and constants
├── messages/              # i18n translation files
├── gql/                   # GraphQL queries and fragments
├── @types/                # TypeScript type definitions
└── svgs/                  # SVG assets
```

## Component Architecture

### Component Organization

- Each component has its own folder with:
  - `ComponentName.tsx` - Main component file
  - `ComponentName.module.css` - CSS modules for styling
  - `ComponentName.stories.tsx` - Storybook stories
  - `index.ts` - Barrel exports
  - Additional view/logic separation when needed

### Naming Conventions

- **Components**: PascalCase (e.g., `Timeline`, `ButtonSquare`)
- **Files**: PascalCase for components, camelCase for utilities
- **CSS Classes**: BEM-like with module scoping (e.g., `.Timeline_content`)
- **Hooks**: Prefixed with `use` (e.g., `useStore`, `useScaleStore`)

### Import Patterns

- Use `@/` alias for src imports
- Barrel exports from component index files
- Dynamic imports for client-only components

## Code Conventions

### TypeScript

- Strict mode enabled
- Custom types in `src/@types/` directory
- Generated types from GraphQL schema in `src/@types/generated/`
- Interface definitions for props and state

### Styling

- CSS Modules for component styling
- CSS custom properties for theming
- Global styles in `src/components/GlobalStyles/`
- Responsive design with custom media queries

### State Management

- Zustand stores for global state
- Separate stores by domain (e.g., `useScaleStore`, `useSidebarStore`)
- Local storage persistence for user preferences

### Data Fetching

- GraphQL queries in `.gql` files
- Apollo Client for GraphQL operations
- React Query for additional server state
- Contentful client for CMS data

## File Naming Patterns

- Components: `ComponentName.tsx`
- Hooks: `useHookName.ts`
- Utilities: `utilityName.ts`
- Types: `TypeName.d.ts`
- Styles: `ComponentName.module.css`
- Stories: `ComponentName.stories.tsx`

## Key Architectural Patterns

- **Client/Server separation**: Use `'use client'` directive for client components
- **Dynamic imports**: For client-only components to avoid SSR issues
- **Barrel exports**: Clean import/export structure
- **Type safety**: Comprehensive TypeScript coverage
- **Internationalization**: Built-in i18n support with next-intl
