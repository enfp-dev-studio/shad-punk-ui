# 🎮 Shad-Punk-UI Component Library

**An Armored Core / Edgerunner-inspired mech combat UI component library for Next.js applications.**

[![Next.js](https://img.shields.io/badge/Next.js-14+-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Design Philosophy](#-design-philosophy)
- [Getting Started](#-getting-started)
- [Usage](#-usage)
- [Available Components](#-available-components)
- [Customization](#-customization)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 Overview

Shad-Punk-UI is a component library inspired by mech combat game interfaces like **Armored Core** and **Cyberpunk: Edgerunners**. Built for Next.js applications using the App Router, it delivers highly customizable React components with a tactical, high-tech aesthetic.

**Key Features:**

- 🎨 **15+ Production-Ready Components**
- ⚡ **Performance-Optimized**
- 🎭 **Animated & Interactive**
- 🌙 **Dark Mode Native**
- 📦 **Easy Integration** - Works seamlessly with shadcn/ui ecosystem
- 🎯 **TypeScript First**
- 🔧 **Highly Customizable** - Tailwind CSS powered

---

## 🎨 Design Philosophy

Shad-Punk-UI draws inspiration from tactical mech interfaces and cyberpunk aesthetics:

- **Combat HUD Aesthetics**: Targeting reticles, status indicators, and tactical overlays
- **High Contrast**: Strategic use of accent colors against dark backgrounds
- **Industrial Edge**: Sharp angles, geometric shapes, and mechanical precision
- **Futuristic Typography**: Clean, readable fonts with technical character

---

## 🚀 Getting Started

### Prerequisites

| Requirement      | Version |
| ---------------- | ------- |
| **Node.js**      | 18.17+  |
| **Next.js**      | 14+     |
| **React**        | 18+     |
| **Tailwind CSS** | 3.4+    |
| **TypeScript**   | 5+      |

### Installation

Integrates with shadcn/ui CLI:

#### Step 1: Configure components.json

Add the `@shad-punk` registry to your `components.json`:

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  },
  "registries": {
    "@shad-punk": "https://shad-punk-ui.vercel.app/r/{name}.json"
  }
}
```

#### Step 2: Install Components

```bash
# Install all components
npx shadcn@latest add @shad-punk/all

# Or install individual components
npx shadcn@latest add @shad-punk/button @shad-punk/card @shad-punk/input
```

---

## 💻 Usage

```tsx
import {Button} from "@/components/ui/button";
import {Card, CardHeader, CardTitle, CardContent} from "@/components/ui/card";

export default function Page() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>SYSTEM INTERFACE</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>INITIALIZE</Button>
      </CardContent>
    </Card>
  );
}
```

---

## 📦 Available Components

### Layout & Structure

- **Sidebar** - Collapsible navigation
- **Card** - Content containers
- **Separator** - Visual dividers
- **Sheet** - Slide-out panels

### Form Elements

- **Button** - Multiple variants
- **Input** - Text inputs
- **Command** - Command palette

### Feedback & Display

- **Alert** - Status messages
- **Badge** - Status indicators
- **Progress** - Progress bars
- **Skeleton** - Loading placeholders
- **Tooltip** - Contextual info

### Data Display

- **Table** - Data tables
- **Tabs** - Tabbed interfaces

### Overlays & Modals

- **Dialog** - Modal dialogs
- **Alert Dialog** - Confirmation dialogs

---

## 🎛️ Customization

### Color Scheme

Override in `globals.css`:

```css
:root {
  --primary: oklch(0.7 0.3 180);
  --secondary: oklch(0.7 0.2 150);
  --background: oklch(0.145 0.02 180);
  --foreground: oklch(0.985 0 0);
}
```

---

## 🤝 Contributing

Contributions welcome!

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Open a Pull Request

---

## 📄 License

MIT License - see [LICENSE](LICENSE)

---

## 💡 Credits

Created by [@enfp-dev-studio](https://github.com/enfp-dev-studio)

**Powered by:**

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Radix UI](https://www.radix-ui.com/)
