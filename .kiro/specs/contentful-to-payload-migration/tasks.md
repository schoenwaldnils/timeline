# Implementation Plan

> **Implementation status (2026-06-10).** The migration is complete and verified — see
> `docs/migration-status.md` for the authoritative, as-built record. What actually shipped
> differs from the original plan in a few ways: the database is **local Docker Postgres +
> Neon in prod via `@payloadcms/db-postgres`** (not separate Neon dev/prod instances), and
> the data migration is driven by an **offline `contentful-export/export.json`** (official
> `contentful-cli` export) rather than live API calls. Items 2.6–5, 8, and 10 are done; the
> Vercel deploy config (6.2) and production rollout (9) are left to the deploy owner, and the
> dedicated test-fixture work (7.1–7.4) was not added (the existing unit/e2e suite is green).

- [x] 1. Set up Payload CMS infrastructure and database connections
  - Install Payload CMS dependencies and configure PostgreSQL adapter
  - Create separate Neon database instances for development and production
  - Configure environment variables and connection strings
  - _Requirements: 1.1, 1.2, 1.3, 1.4_

- [x] 2. Create Payload CMS configuration and collection definitions
  - [x] 2.1 Create core Payload configuration file
    - Write payload.config.ts with PostgreSQL adapter, Lexical editor, and Sharp integration
    - Configure admin interface, TypeScript generation, and collection imports
    - Set up environment-specific configuration handling
    - _Requirements: 1.1, 1.2, 6.1, 6.2_

  - [x] 2.2 Define Person collection with relationships
    - Update Person collection to match Contentful field structure (startYear, endYear, startBlurriness, endBlurriness)
    - Add missing wolLink field for external references
    - Implement self-referencing relationships for spouse and children
    - Add image relationship to Media collection and rich text field
    - Configure admin interface and validation rules
    - _Requirements: 2.1, 2.5, 9.1, 9.2_

  - [x] 2.3 Define Time collection structure
    - Create Time collection with name, startYear, endYear fields
    - Add image relationship and rich text content field
    - Include wolLink field for external references
    - Configure admin interface for content management
    - _Requirements: 2.1, 9.1_

  - [x] 2.4 Define Event collection structure
    - Create Event collection with name and required year field
    - Add image relationship and rich text content field
    - Include wolLink field for external references
    - Configure admin interface and validation
    - _Requirements: 2.1, 9.1_

  - [x] 2.5 Define Media collection with image variants
    - Create Media collection with upload configuration
    - Configure thumbnail and card size variants using Sharp
    - Set up file type validation and size limits
    - Add alt text field for accessibility
    - _Requirements: 2.4, 9.4_

- [x] 2.6 Generate Payload TypeScript types
  - Run Payload type generation to create payload-types.ts
  - Verify all collection types are properly generated
  - Update TypeScript configuration to include generated types
  - _Requirements: 6.6_

- [x] 3. Develop data migration scripts and utilities
  - [x] 3.1 Create migration infrastructure and utilities
    - Build migration script framework with progress tracking and error handling
    - Create utilities for Contentful data fetching and Payload data creation
    - Implement ID mapping system to track Contentful to Payload relationships
    - Add comprehensive logging and statistics collection
    - _Requirements: 3.6, 3.7, 8.1, 8.2_

  - [x] 3.2 Implement media migration functionality
    - Create service to download images from Contentful CDN
    - Implement Payload media upload with metadata preservation
    - Generate thumbnail and card size variants for all images
    - Create mapping between Contentful asset IDs and Payload media IDs
    - _Requirements: 3.1, 2.4_

  - [x] 3.3 Implement content migration for all collections
    - Create migration functions for Person, Time, and Event collections
    - Handle field mapping and data transformation from Contentful to Payload
    - Implement placeholder relationship creation for Person records
    - Add error handling and retry logic for failed migrations
    - _Requirements: 3.2, 3.3, 3.6_

  - [x] 3.4 Develop rich text conversion system
    - Build converter to transform Contentful rich text JSON to Lexical format
    - Handle embedded assets and entry references in rich text
    - Preserve text formatting, links, lists, and headings
    - Test conversion with various rich text content types
    - _Requirements: 3.4, 4.2_

  - [x] 3.5 Create relationship resolution system
    - Implement service to resolve spouse and children relationships after Person migration
    - Update Person records with correct Payload relationship references
    - Validate relationship integrity and handle circular references
    - Add error handling for missing or invalid relationship targets
    - _Requirements: 3.5, 2.5_

- [x] 4. Update application layer to use Payload CMS APIs
  - [x] 4.1 Create Payload client and data fetching utilities
    - Build centralized Payload client for API interactions
    - Create custom React hooks for data fetching with caching and error handling
    - Implement timeline data fetching function using Payload REST API
    - Add TypeScript integration with Payload's generated types
    - _Requirements: 4.1, 4.4, 6.6_

  - [x] 4.2 Update rich text rendering components
    - Replace Contentful rich text renderer with Payload's Lexical renderer
    - Create reusable PayloadRichText component with converter support
    - Update all components that render rich text content
    - Test rich text rendering with migrated content
    - _Requirements: 4.2, 7.3_

  - [x] 4.3 Update image handling and media components
    - Modify image components to use Payload media URLs and size variants
    - Update Next.js image configuration for Payload media domains
    - Ensure proper alt text handling and accessibility compliance
    - Test image loading and optimization with Payload media
    - _Requirements: 4.3, 7.4, 9.4_

  - [x] 4.4 Update data fetching in timeline and content components
    - Replace Apollo Client GraphQL queries with Payload REST API calls
    - Update ContentPerson, ContentTime, and ContentEvent components
    - Modify timeline data processing to work with Payload data structure
    - Update relationship handling for spouse and children connections
    - _Requirements: 4.1, 4.4, 7.2_

- [x] 5. Update search integration and Algolia indexing
  - [x] 5.1 Modify Algolia integration for Payload data
    - Update Algolia indexing scripts to fetch data from Payload instead of Contentful
    - Modify data transformation for Algolia index structure
    - Update search result handling to work with Payload data format
    - Test search functionality with migrated content
    - _Requirements: 5.1, 5.2, 5.3_

  - [x] 5.2 Update search components and functionality
    - Modify search components to handle Payload data structure
    - Update search result rendering with new data format
    - Ensure search performance meets requirements
    - Test search functionality across all content types
    - _Requirements: 5.4, 5.5_

- [ ] 6. Configure development and deployment environments
  - [x] 6.1 Update Next.js configuration for Payload integration
    - Integrate Payload CMS with Next.js using @payloadcms/next
    - Update webpack configuration and build process
    - Configure image domains for Payload media
    - Update development and build scripts
    - _Requirements: 6.1, 6.2_

  - [ ] 6.2 Configure Vercel deployment settings
    - Update Vercel configuration for Payload CMS deployment
    - Configure environment variables and secrets management
    - Set up function timeout configuration for migration operations
    - Test deployment process with Neon database connection
    - _Requirements: 6.3, 6.5_

- [ ] 7. Implement comprehensive testing suite
  - [ ] 7.1 Create test fixtures and data for Payload structure
    - Create mock data fixtures matching Payload collection structure
    - Update existing test data to work with new data format
    - Create test utilities for Payload API mocking
    - Ensure test data covers all content types and relationships
    - _Requirements: 7.1, 7.2_

  - [ ] 7.2 Update component tests for Payload integration
    - Update all component tests to use Payload data fixtures
    - Test rich text rendering with Lexical content
    - Test image display with Payload media structure
    - Verify relationship handling in Person components
    - _Requirements: 7.2, 7.3, 7.4_

  - [ ] 7.3 Create integration tests for Payload APIs
    - Write tests for timeline data fetching from Payload
    - Test individual content item retrieval (Person, Time, Event)
    - Test search integration with Payload data
    - Verify error handling and fallback behavior
    - _Requirements: 7.5, 4.5_

  - [ ] 7.4 Implement performance testing
    - Test timeline loading performance with Payload data
    - Measure database query performance and optimization
    - Test image loading and optimization performance
    - Verify search response times meet requirements
    - _Requirements: 7.6, 10.1, 10.2, 10.4_

- [x] 8. Execute data migration and validation
  - [x] 8.1 Run complete data migration from Contentful to Payload
    - Execute media migration with all images and assets
    - Run content migration for all Person, Time, and Event records
    - Resolve all relationships and validate data integrity
    - Generate migration report with statistics and any errors
    - _Requirements: 3.1, 3.2, 3.3, 3.5, 3.7_

  - [x] 8.2 Validate migrated data integrity and completeness
    - Compare migrated data against original Contentful content
    - Verify all relationships are correctly established
    - Test rich text content rendering and formatting
    - Validate image associations and media functionality
    - _Requirements: 7.1, 7.2, 7.3, 7.4_

- [ ] 9. Deploy and test in production environment
  - [ ] 9.1 Deploy application with Payload CMS to production
    - Deploy updated application to Vercel with Neon production database
    - Verify all environment variables and configuration
    - Test admin interface accessibility and functionality
    - Monitor application performance and error rates
    - _Requirements: 6.3, 6.4, 9.1_

  - [ ] 9.2 Validate production functionality and performance
    - Test timeline loading and interaction in production
    - Verify search functionality works correctly
    - Test content management through Payload admin interface
    - Monitor database performance and connection stability
    - _Requirements: 10.1, 10.4, 10.5, 9.5_

- [x] 10. Clean up and remove Contentful dependencies
  - [x] 10.1 Remove Contentful packages and configuration
    - Uninstall Apollo Client, Contentful SDK, and GraphQL dependencies
    - Remove Contentful environment variables and configuration
    - Clean up GraphQL queries and Contentful-specific code
    - Update package.json scripts and dependencies
    - _Requirements: 8.4_

  - [x] 10.2 Update documentation and finalize migration
    - Update development documentation for Payload CMS usage
    - Document new content management workflows
    - Create rollback procedures documentation
    - Archive Contentful configuration for reference
    - _Requirements: 8.1, 8.3_
