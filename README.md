# TUI CSS React

A React component library wrapper for [WebTUI](https://webtui.ironclad.sh) - bringing the beauty of Terminal UIs to React applications.

This is a spinoff library that provides React components built on top of [@webtui/css](https://www.npmjs.com/package/@webtui/css) by [Ironclad](https://github.com/webtui/webtui).

## Features

Basically anything from webtui. This is still a work in progress for the sake of simplicity and not everything will be functional.

## Installation

```bash
npm install @tuicss/react
# or
yarn add @tuicss/react
# or
pnpm add @tuicss/react
```

## Usage

### Basic Setup

Import the styles in your root component or main entry file:

```tsx
import '@tuicss/react/styles';
```

Or in your main CSS/SCSS file:

```css
@import '@tuicss/react/styles';
```

### Using Components

```tsx
import { Button, Input, Badge, Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@tuicss/react';

function App() {
  return (
    <div>
      <Button variant="foreground0" size="default">
        Click me
      </Button>
      
      <Badge variant="background0">New</Badge>
      
      <Input type="text" placeholder="Enter text..." />
      
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Item 1</TableCell>
            <TableCell>Active</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
```

### Dark Mode

Wrap your app with the dark theme attribute:

```tsx
<div data-webtui-theme="dark">
  <App />
</div>
```

### Layout Components

Use Row, Column, and Box for TUI-style layouts:

```tsx
import { Row, Column, Box, Button } from '@tuicss/react';

<Column align="center">
  <Row align="between">
    <Button>Left</Button>
    <Button>Right</Button>
  </Row>
  
  <Box box="round">
    Content in a rounded box
  </Box>
</Column>
```

## Available Components

### Form Components
- **Button** - TUI-styled button with variants and sizes
- **Input** - Text input field
- **Textarea** - Multi-line text input
- **Checkbox** - Checkbox with optional label
- **Radio** - Radio button with optional label

### Display Components
- **Badge** - Inline badge/tag
- **Progress** - Progress bar
- **Spinner** - Loading spinner
- **Separator** - Horizontal rule
- **Table** - Table with header, body, rows, and cells

### Layout Components
- **Row** - Horizontal flex container
- **Column** - Vertical flex container
- **Box** - Container with optional borders
- **Dialog** - Modal dialog

## Component API

### Button

```tsx
<Button 
  variant="foreground0 | foreground1 | foreground2 | background0 | background1 | background2"
  size="small | default | large"
  box="square | round"
>
  Click me
</Button>
```

### Badge

```tsx
<Badge variant="foreground0 | background0">
  Label
</Badge>
```

### Layout

```tsx
<Row align="between | center | start | end">
  {children}
</Row>

<Column align="between | center | start | end">
  {children}
</Column>

<Box box="square | round" container="fill">
  {children}
</Box>
```

### Dialog

```tsx
const [isOpen, setIsOpen] = useState(false);

<Dialog isOpen={isOpen} onClose={() => setIsOpen(false)}>
  <Box box="round">
    <h2>Dialog Title</h2>
    <p>Dialog content</p>
    <Button onClick={() => setIsOpen(false)}>Close</Button>
  </Box>
</Dialog>
```

## Customization

The library uses WebTUI's CSS custom properties for theming. You can override them:

```css
:root {
  --background0: #fff;
  --background1: #ddd;
  --foreground0: #000;
  --foreground1: #444;
  --font-family: monospace;
  --font-size: 16px;
  --line-height: 1.3;
}

[data-webtui-theme="dark"] {
  --background0: #000;
  --background1: #222;
  --foreground0: #fff;
  --foreground1: #ccc;
}
```

## WebTUI Themes

You can use official WebTUI theme plugins:

```bash
npm install @webtui/theme-catppuccin
# or
npm install @webtui/theme-nord
npm install @webtui/theme-gruvbox
npm install @webtui/theme-everforest
npm install @webtui/theme-vitesse
```

Then import them after the base styles:

```tsx
import '@tuicss/react/styles';
import '@webtui/theme-catppuccin';
```

## Credits

- Built on top of [WebTUI](https://webtui.ironclad.sh/) by [@ironcladdev](https://github.com/IroncladDev)
- Original WebTUI CSS: [@webtui/css](https://www.npmjs.com/package/@webtui/css)

## License

FAFO
