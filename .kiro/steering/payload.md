---
inclusion: fileMatch
fileMatchPattern: ['src/collections/**/*.ts', 'payload.config.ts']
---

# Payload CMS Development Guidelines

## Collection Configuration Standards

### Field Organization

- Do not use `tabs` configuration in field definitions
- Keep fields flat in the main fields array rather than grouping in tabs
- Use field descriptions and logical ordering for organization

### Collection Structure

- Export collections as default exports with typed `CollectionConfig`
- Use descriptive slug names matching the collection purpose
- Group related collections in admin interface using `admin.group`
- Set meaningful `useAsTitle` field for admin display

### Field Configuration Patterns

#### Required Fields

- Always include `name` field as primary identifier
- Mark essential fields as `required: true`
- Use `localized: true` for user-facing content fields

#### Date/Year Fields

- Use negative numbers for BCE dates (e.g., -1000 for 1000 BCE)
- Include descriptive admin descriptions explaining BCE format
- Implement validation for date ranges (startYear < endYear)

#### Relationships

- Use `relationship` type for references between collections
- Set `hasMany: false` for single relationships, `hasMany: true` for arrays
- Implement validation to prevent self-referencing relationships
- Use meaningful field names (e.g., `spouse`, `children`, `image`)

#### Rich Text Content

- Use `richText` type for formatted content
- Always localize rich text fields with `localized: true`
- Provide clear admin descriptions

#### Media References

- Reference media collection for all image fields
- Use single relationship (`hasMany: false`) for primary images
- Configure appropriate image sizes in Media collection

### Validation Rules

- Implement custom validation functions for business logic
- Validate date ranges and chronological consistency
- Prevent circular relationships (self-referencing)
- Use TypeScript for validation function parameters

### Localization

- Enable localization for all user-facing content
- Support English (`en`) and German (`de`) locales
- Use fallback to default locale when translations missing

### Admin Interface

- Set meaningful `defaultColumns` for list views
- Provide helpful `description` text for complex fields
- Group collections logically (Content, Media, etc.)

## Database Integration

- Use Vercel Postgres adapter for production
- Configure proper TypeScript output for generated types
- Enable GraphQL schema generation for API consistency

## Common Patterns

### Biblical Timeline Specific

- Year fields support BCE/CE with negative/positive values
- Include "blurriness" fields for date uncertainty
- Implement spouse/children relationships for genealogy
- Support external reference links (wolLink fields)

### Content Management

- All content types support rich text descriptions
- Media relationships for visual content
- Consistent naming conventions across collections
