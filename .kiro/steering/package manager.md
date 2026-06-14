---
inclusion: always
---

# Package Manager Guidelines

## Required Package Manager

**Always use pnpm** as the package manager for this project. Never use npm or yarn commands.

## Command Syntax

When running pnpm scripts, use the direct syntax without `--run`:

```bash
# Correct
pnpm dev
pnpm build
pnpm test
pnpm lint:ts-fix

# Incorrect - do not use
pnpm run dev
pnpm --run dev
```

## Common Commands

```bash
# Development
pnpm dev                    # Start development server
pnpm build                  # Build for production
pnpm start                  # Start production server

# Dependencies
pnpm install                # Install dependencies
pnpm add <package>          # Add dependency
pnpm add -D <package>       # Add dev dependency
pnpm remove <package>       # Remove dependency

# Code Quality
pnpm test                   # Run all linting checks
pnpm lint:ts-fix           # Auto-fix TypeScript issues
pnpm generate:gql-types    # Generate GraphQL types
```

## Installation Requirements

Ensure pnpm is installed globally before working with this project:

```bash
pnpm -v
#or
npm install -g pnpm
```
