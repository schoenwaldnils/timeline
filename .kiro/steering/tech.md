---
inclusion: always
---

# Technology Stack & Development Guidelines

## Core Technologies

### Framework & Runtime

- **Next.js 14** with App Router - Use server components by default, add `'use client'` only when needed
- **React 18** - Prefer functional components with hooks
- **TypeScript** - Strict mode enabled, all code must be type-safe
- **Node.js** - Runtime environment

### Data Layer

- **Contentful** - Current CMS (migrating to Payload CMS)
- **GraphQL** with Apollo Client - Use generated types from schema
- **Algolia** - Search functionality with auto-indexing
- **Zustand** - Global state management (prefer over Context API)

### Styling & UI

- **CSS Modules** - Component-scoped styling (`.module.css` files)
- **PostCSS** - Custom media queries and CSS processing
- **CSS Custom Properties** - For theming and responsive design

## Development Standards

### Code Style

- Use `@/` alias for all src imports
- Implement barrel exports (`index.ts`) for clean imports
- Follow BEM-like naming in CSS modules
- Use dynamic imports for client-only components to avoid SSR issues

### Component Patterns

- Each component gets its own folder with: `.tsx`, `.module.css`, `.stories.tsx`, `index.ts`
- Separate view/logic when components become complex
- Use TypeScript interfaces for all props and state
- Implement proper error boundaries and loading states

### State Management

- Use Zustand stores for global state (domain-separated: `useScaleStore`, `useSidebarStore`)
- Persist user preferences to localStorage
- Use React Query for server state management

### GraphQL Integration

- Store queries in `.gql` files within component folders
- Run `npm run generate:gql-types` after schema changes
- Use fragments for reusable query parts
- Implement proper error handling for GraphQL operations

## Essential Commands

```bash
# Development
npm run dev                    # Start dev server (port 3002)
npm run storybook             # Component development (port 6006)

# Code Quality (run before commits)
npm test                      # All linting checks
npm run lint:ts-fix          # Auto-fix TypeScript issues

# Code Generation
npm run generate:gql-types    # Generate types from GraphQL schema
```

## Environment Setup

Required environment variables:

- `NEXT_PUBLIC_CONTENTFUL_SPACE_ID`
- `NEXT_PUBLIC_CONTENTFUL_DELIVERY_TOKEN`
- `CONTENTFUL_ENVIRONMENT` (for codegen)

## Key Architectural Rules

1. **Server-First**: Use server components unless client interactivity is required
2. **Type Safety**: All GraphQL operations must use generated types
3. **Internationalization**: Use next-intl for all user-facing text
4. **Performance**: Implement proper code splitting and lazy loading
5. **Accessibility**: Follow WCAG guidelines for all UI components
6. **Testing**: Write Storybook stories for all components
