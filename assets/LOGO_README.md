# DevLab Logo Assets

This package contains all logo variations for the DevLab platform.

## Logo Concept
The DevLab logo features a modern code bracket design with a gradient aesthetic, representing coding, development, and project-based learning. The icon uses:
- **Left bracket** with purple gradient (primary brand color)
- **Right bracket** with green gradient (accent/success color)  
- **Forward slash** in the center (representing code and progress)

## Files Included

### Full Logos (with text)

**Light Mode:**
- `devlab-logo.svg` - Vector format, scalable, recommended for web
- `devlab-logo.png` - Raster format (800x240px), transparent background

**Dark Mode:**
- `devlab-logo-dark.svg` - Vector format optimized for dark backgrounds
- `devlab-logo-dark.png` - Raster format (800x240px), transparent background

### Icon Only (no text)

**SVG:**
- `devlab-icon.svg` - 64x64 vector icon

**PNG (Multiple Sizes):**
- `devlab-icon-512.png` - 512x512px (app icons, high-res)
- `devlab-icon-256.png` - 256x256px  
- `devlab-icon-128.png` - 128x128px
- `devlab-icon-64.png` - 64x64px (standard favicon)
- `devlab-icon-32.png` - 32x32px (favicon)
- `devlab-icon-16.png` - 16x16px (small favicon)

## Usage Guidelines

### Web Application
```html
<!-- In your HTML head -->
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">

<!-- Logo in header (light mode) -->
<img src="/devlab-logo.svg" alt="DevLab" height="40">

<!-- Logo in header (dark mode) -->
<img src="/devlab-logo-dark.svg" alt="DevLab" height="40">
```

### React Component
```jsx
// Light mode
import logo from './assets/devlab-logo.svg';

// Dark mode  
import logoDark from './assets/devlab-logo-dark.svg';

function Header() {
  const isDark = useTheme(); // your theme hook
  return (
    <img 
      src={isDark ? logoDark : logo} 
      alt="DevLab" 
      className="h-10"
    />
  );
}
```

### Recommended Dimensions
- **Header/Navigation**: 40-50px height
- **Footer**: 30-40px height
- **Hero Section**: 60-80px height
- **Favicon**: Use 32x32 or 64x64 PNG versions

## Color Specifications

### Light Mode
- Primary Gradient: #6366F1 → #8B5CF6 (Indigo to Purple)
- Accent Gradient: #10B981 → #34D399 (Green)
- Text "Dev": Gradient
- Text "Lab": #1F2937 (Dark Gray)

### Dark Mode  
- Primary Gradient: #818CF8 → #A78BFA (Light Purple)
- Accent Gradient: #34D399 → #6EE7B7 (Light Green)
- Text "Dev": Gradient
- Text "Lab": #F1F5F9 (Light Gray)

## File Formats

### When to use SVG:
- Web headers and navigation
- Any scalable use case
- Print materials
- High-quality displays

### When to use PNG:
- Favicons
- Social media profiles
- Email signatures
- When transparency is needed and SVG is not supported

## Brand Guidelines
- Maintain clear space around the logo (minimum 20px padding)
- Don't alter the colors or gradient
- Don't stretch or distort the proportions
- Don't add drop shadows or effects
- Use dark version on dark backgrounds (background should be darker than #334155)

## Technical Notes
- All PNG files have transparent backgrounds
- SVG files are optimized and use web-safe fonts fallback
- Icons are designed with a 3.5-4px stroke width for optimal visibility
- Gradients are defined using CSS linear-gradient stops

---

Created for DevLab - Project-Based Learning Platform
