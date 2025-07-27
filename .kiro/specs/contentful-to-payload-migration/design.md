# Design Document

## Overview

This design document outlines the architecture and implementation approach for migrating the Bible timeline visualization application from Contentful CMS to Payload CMS. The migration maintains all existing functionality while providing better developer experience, improved performance, and reduced vendor lock-in. The design ensures a seamless transition with parallel system operation during migration and comprehensive rollback capabilities.

## Architecture

### Current Architecture Analysis

The application currently uses:

- **Frontend**: Next.js 14 with TypeScript, CSS Modules, React 18
- **CMS**: Contentful with GraphQL API via Apollo Client
- **Data Fetching**: Apollo Client with GraphQL queries
- **Rich Text**: Contentful's rich text renderer
- **Search**: Algolia integration
- **Internationalization**: next-intl
- **Image Handling**: Next.js Image component with Contentful CDN

### Target Architecture

The new architecture will use:

- **Frontend**: Next.js 14 with TypeScript (unchanged)
- **CMS**: Payload CMS with PostgreSQL database
- **Data Fetching**: Payload's REST API with custom hooks
- **Rich Text**: Payload's Lexical editor and renderer
- **Search**: Algolia integration (updated for Payload data)
- **Database**: Neon PostgreSQL (development and production)
- **Image Handling**: Payload's media management with Sharp

### Migration Strategy

The migration follows a **parallel system approach**:

1. Set up Payload CMS alongside existing Contentful
2. Migrate data from Contentful to Payload
3. Update application layer to use Payload APIs
4. Test thoroughly with both systems available
5. Switch to Payload in production
6. Remove Contentful dependencies

## Components and Interfaces

### Database Schema Design

#### Person Collection

- **Core Fields**: id, name, gender (male/female), startYear, startBlurriness, endYear, endBlurriness, stillActive
- **Media**: Single image relationship to Media collection
- **Relationships**: Many-to-many relationships for spouse and children (self-referencing)
- **Content**: Rich text field for detailed information, wolLink for external references
- **Metadata**: Standard createdAt and updatedAt timestamps

#### Time Collection

- **Core Fields**: id, name, startYear, endYear
- **Media**: Single image relationship to Media collection
- **Content**: Rich text field for detailed information, wolLink for external references
- **Metadata**: Standard createdAt and updatedAt timestamps

#### Event Collection

- **Core Fields**: id, name, year (required)
- **Media**: Single image relationship to Media collection
- **Content**: Rich text field for detailed information, wolLink for external references
- **Metadata**: Standard createdAt and updatedAt timestamps

#### Media Collection

- **File Properties**: filename, mimeType, filesize, width, height
- **Variants**: Thumbnail and card size variants for responsive images
- **Metadata**: alt text for accessibility, URL for access, timestamps

### Payload Configuration Architecture

#### Core Configuration Structure

- Admin interface configuration with user authentication
- Collection definitions for Person, Time, Event, Media, and Users
- Lexical editor integration for rich text fields
- PostgreSQL adapter configuration with connection pooling
- TypeScript type generation for all collections
- Sharp integration for image processing

#### Collection Definitions Architecture

Each collection will be defined in separate files with:

- Field definitions matching Contentful structure
- Validation rules for data integrity
- Admin UI configuration for content management
- Relationship definitions for data connections
- Hooks for data processing and transformation

### Data Migration Architecture

#### Migration Pipeline Design

The migration follows a structured pipeline:

1. **Media Migration**: Download and upload images with metadata preservation
2. **Content Migration**: Migrate Person, Time, Event records with placeholder relationships
3. **Relationship Resolution**: Resolve spouse and children connections
4. **Validation**: Verify data integrity and completeness
5. **Testing**: Validate migrated data against original content

#### Migration Components

1. **Media Migration Service**
   - Downloads images from Contentful CDN
   - Uploads to Payload with metadata preservation
   - Creates size variants (thumbnail, card)
   - Maps Contentful asset IDs to Payload media IDs

2. **Content Migration Service**
   - Migrates Person, Time, Event records
   - Handles rich text format conversion
   - Creates placeholder relationships
   - Logs migration progress and errors

3. **Relationship Resolution Service**
   - Resolves spouse and children relationships
   - Updates Person records with correct references
   - Validates relationship integrity

4. **Rich Text Converter**
   - Converts Contentful rich text JSON to Lexical format
   - Handles embedded assets and entries
   - Preserves formatting and structure

### Application Layer Architecture

#### Data Fetching Layer

- **Payload Client**: Centralized client for Payload API interactions
- **Custom Hooks**: React hooks for data fetching with caching and error handling
- **Type Safety**: Integration with Payload's generated TypeScript types
- **Error Handling**: Robust error boundaries and fallback mechanisms

#### Component Update Strategy

1. **Gradual Migration**: Update components one by one
2. **Interface Compatibility**: Maintain similar data structures
3. **Type Safety**: Use Payload's generated TypeScript types
4. **Error Handling**: Implement robust error boundaries

### Rich Text Rendering Architecture

#### Lexical Rich Text Integration

- **Component Structure**: Reusable rich text component with converter support
- **Content Mapping**: Map Contentful rich text nodes to Lexical nodes
- **Asset Handling**: Handle embedded assets and entries
- **Formatting Preservation**: Maintain text formatting, lists, and headings

#### Rich Text Conversion Strategy

- Map Contentful rich text nodes to Lexical nodes
- Handle embedded assets and entries
- Preserve text formatting (bold, italic, links)
- Convert lists and headings
- Handle custom content types

## Data Models

### Database Design

#### PostgreSQL Schema

The database will use Payload's auto-generated schema with:

- **Core Tables**: persons, times, events, media tables with proper field types
- **Relationship Tables**: Junction tables for many-to-many relationships
- **Metadata Tables**: Standard Payload tables for users, sessions, etc.
- **Indexes**: Performance indexes on frequently queried fields

#### Indexing Strategy

- Performance indexes on year fields for timeline queries
- Name indexes for search functionality
- Relationship indexes for efficient joins
- Media filename indexes for asset management

### Data Transformation Models

#### Migration Mapping

- **ID Mapping**: Track Contentful to Payload ID relationships
- **Status Tracking**: Monitor migration progress and failures
- **Error Logging**: Detailed error information for troubleshooting
- **Statistics**: Migration metrics and performance data

## Error Handling

### Migration Error Handling

#### Error Categories

1. **Network Errors**: Contentful API failures, image download failures
2. **Data Validation Errors**: Invalid field values, missing required fields
3. **Database Errors**: Connection failures, constraint violations
4. **Transformation Errors**: Rich text conversion failures, relationship mapping errors

#### Error Recovery Strategy

- **Retry Logic**: Automatic retry for transient failures
- **Error Logging**: Comprehensive error tracking and reporting
- **Graceful Degradation**: Continue migration despite individual failures
- **Manual Intervention**: Clear error messages for manual resolution

### Application Error Handling

#### API Error Boundaries

- **Custom Error Classes**: Specific error types for different failure modes
- **Status Code Handling**: Appropriate HTTP status code responses
- **Collection Context**: Error context including affected collections
- **User-Friendly Messages**: Clear error messages for end users

#### Component Error Boundaries

- **React Error Boundaries**: Catch and handle component-level errors
- **Fallback UI**: Graceful degradation with fallback components
- **Error Reporting**: Integration with error tracking services
- **Recovery Mechanisms**: Options for users to recover from errors

## Testing Strategy

### Migration Testing

#### Test Data Strategy

- **Test Datasets**: Curated test data representing various scenarios
- **Validation Rules**: Automated validation of migrated data
- **Integrity Checks**: Verification of relationships and references
- **Performance Testing**: Migration performance with large datasets

#### Migration Test Scenarios

1. **Complete Migration Test**: Full dataset migration with validation
2. **Partial Migration Test**: Subset migration for development
3. **Error Scenario Tests**: Network failures, data corruption, constraint violations
4. **Performance Tests**: Large dataset migration timing
5. **Rollback Tests**: Reverting to Contentful after migration

### Application Testing

#### Component Testing Strategy

- **Updated Fixtures**: Test data matching Payload structure
- **Component Tests**: Verify components work with Payload data
- **Integration Tests**: End-to-end testing with Payload backend
- **Visual Regression**: Ensure UI remains consistent

#### Integration Testing

1. **API Integration Tests**: Payload REST API endpoints
2. **Database Integration Tests**: PostgreSQL queries and relationships
3. **Rich Text Integration Tests**: Lexical rendering
4. **Search Integration Tests**: Algolia with Payload data
5. **Image Integration Tests**: Media handling and optimization

### Performance Testing

#### Database Performance

- **Query Performance**: Measure database query response times
- **Memory Usage**: Monitor memory consumption during operations
- **Connection Management**: Test connection pooling efficiency
- **Index Effectiveness**: Validate index usage and performance

#### Frontend Performance

- Timeline rendering performance with Payload data
- Image loading optimization
- Rich text rendering performance
- Search response times

## Deployment Architecture

### Environment Configuration

#### Development Environment

- Neon PostgreSQL database for development
- Local Payload admin interface
- Development-specific secrets and configuration
- Hot reloading and development tools

#### Production Environment

- Neon PostgreSQL database for production
- Production-optimized configuration
- Secure secrets management
- Performance monitoring and logging

### Deployment Pipeline

#### Vercel Configuration

- Function timeout configuration for migration operations
- Environment variable management
- Build optimization for Payload integration
- Static asset handling

#### Next.js Configuration Updates

- Payload CMS integration with Next.js
- Image domain configuration for Payload media
- Webpack configuration updates
- React Compiler compatibility

### Database Deployment

#### Neon Database Setup

1. Create separate Neon projects for development and production
2. Configure connection pooling for both environments
3. Set up database migrations and schema synchronization
4. Configure backup strategy for production
5. Monitor performance metrics across environments
6. Ensure development database mirrors production schema

#### Migration Deployment Strategy

1. **Blue-Green Deployment**: Maintain both systems during transition
2. **Feature Flags**: Toggle between Contentful and Payload
3. **Gradual Rollout**: Migrate content types incrementally
4. **Monitoring**: Track performance and error rates
5. **Rollback Plan**: Quick reversion to Contentful if needed

## Security Considerations

### Database Security

- Connection string encryption and secure storage
- Database user permissions and role-based access
- SSL/TLS connections for all database communication
- Query parameterization to prevent injection attacks
- Backup encryption and secure storage

### API Security

- Authentication for admin interface access
- Rate limiting to prevent abuse
- Input validation and sanitization
- CORS configuration for cross-origin requests
- Error message sanitization to prevent information leakage

### Media Security

- File type validation and restrictions
- File size limitations
- Malware scanning for uploaded files
- CDN security headers
- Access control for sensitive media

## Performance Optimization

### Database Optimization

- Query optimization with proper indexes
- Connection pooling for efficient resource usage
- Query result caching for frequently accessed data
- Database monitoring and performance tuning
- Regular maintenance tasks and optimization

### Application Optimization

- Image optimization with Sharp processing
- Rich text rendering optimization
- Component memoization for performance
- Bundle size optimization
- CDN utilization for static assets

### Caching Strategy

- Database query result caching
- API response caching at multiple levels
- Static asset caching with appropriate headers
- Browser caching optimization
- CDN edge caching for global performance

## Monitoring and Observability

### Application Monitoring

- Error tracking and reporting systems
- Performance metrics and alerting
- User experience monitoring
- API response time tracking
- Database query performance monitoring

### Migration Monitoring

- Migration progress tracking and reporting
- Error rate monitoring and alerting
- Data integrity validation checks
- Performance impact assessment
- Rollback trigger condition monitoring

This design provides a comprehensive foundation for the Contentful to Payload CMS migration, ensuring data integrity, performance, and maintainability while minimizing risks and providing clear rollback capabilities.
