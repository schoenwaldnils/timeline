---
inclusion: always
---

# Biblical Timeline Application

## Product Overview

Timeline is an interactive web application that visualizes biblical lifespans, events, and time periods in a chronological format. Users can explore biblical history through an intuitive timeline interface with filtering, search, and multi-language support.

## Core Domain Concepts

### Data Types

- **Person**: Biblical figures with birth/death dates and biographical information
- **Event**: Historical events with specific dates or date ranges
- **Time**: Time periods or eras with start/end boundaries
- **Timespan**: Duration-based visualizations showing overlapping periods

### User Interactions

- **Timeline Navigation**: Horizontal scrolling through chronological periods
- **Scaling**: Zoom in/out to view different time granularities
- **Filtering**: Show/hide persons, events, or time periods
- **Search**: Full-text search across all content types
- **Language Switching**: Toggle between English and German
- **Theme Switching**: Light/dark mode support

## Content Strategy

### Internationalization

- All user-facing text must support English (`en`) and German (`de`)
- Use translation keys, never hardcode text
- Content from Contentful CMS is localized per entry

### Data Relationships

- Persons can have parent/child relationships
- Events can be associated with persons or time periods
- All content types support rich text descriptions with embedded links

### Search & Discovery

- Algolia indexes all content types for unified search
- Search results include persons, events, and time periods
- Auto-complete and faceted search capabilities

## User Experience Principles

### Performance

- Timeline must render smoothly with hundreds of data points
- Implement virtualization for large datasets
- Lazy load content details on demand

### Accessibility

- Full keyboard navigation support
- Screen reader compatibility
- High contrast theme support
- Semantic HTML structure

### Responsive Design

- Mobile-first approach with touch-friendly interactions
- Adaptive timeline scaling for different screen sizes
- Collapsible sidebar for mobile layouts

## Content Management

### Current State (Contentful)

- Content managed through Contentful CMS
- GraphQL API for data fetching
- Webhook-based Algolia index updates

### Migration Target (Payload CMS)

- Planned migration from Contentful to Payload CMS
- Maintain existing data structure and relationships
- Preserve internationalization capabilities

## Development Considerations

When working with this application:

- Always consider chronological accuracy and biblical context
- Ensure timeline calculations handle BCE/CE date transitions
- Maintain data consistency across all content types
- Test timeline performance with large datasets
- Validate internationalization for all new features
