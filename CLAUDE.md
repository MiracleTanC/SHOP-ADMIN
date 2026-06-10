# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Shop Admin - a Vue 3 admin panel built with Vite, Element Plus, and UnoCSS.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## Architecture

**Entry Point**: `src/main.js` registers Vue app with Element Plus and Vue Router.

**Routing**: `src/router/index.js` uses hash mode (`createWebHashHistory`). Pages are in `src/pages/`.

**Path Alias**: `~` maps to `src/` directory (configured in vite.config.js).

**Styling**: UnoCSS with preset-uno. Import `virtual:uno.css` in main.js to enable utility classes in Vue components.

**UI Components**: Element Plus is globally registered. Use `<el-*>` components directly without imports.
