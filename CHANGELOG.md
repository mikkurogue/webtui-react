# Changelog

All notable changes to this project will be documented in this file.

## [0.1.0] - 2025-11-22

### Added
- Initial release
- React component wrappers for WebTUI CSS components:
  - Button with variants and sizes
  - Badge
  - Input
  - Textarea
  - Checkbox with label support
  - Radio with label support
  - Progress
  - Separator
  - Spinner
  - Table components (Table, TableHeader, TableBody, TableRow, TableHead, TableCell)
  - Layout components (Row, Column, Box)
  - Dialog with isOpen/onClose API
- TypeScript support with full type definitions
- Built on top of @webtui/css v0.1.5
- Dark mode support via data-webtui-theme attribute
- CSS import bundling
- Example demo application

### Dependencies
- @webtui/css: ^0.1.5
- clsx: ^2.1.1
- React 18+ or 19+ (peer dependency)
