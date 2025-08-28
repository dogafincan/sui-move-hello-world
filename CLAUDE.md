# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js project named "sui-move-hello-world" that is a hybrid project combining Next.js frontend with Sui Move smart contracts. The project uses:

- **Next.js 15.5.2** with App Router architecture
- **React 19.1.0** for UI components
- **TypeScript** for type safety
- **Tailwind CSS 4** for styling with PostCSS
- **Biome** for linting and formatting (instead of ESLint/Prettier)

## Development Commands

### Core Development
- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with Turbopack
- `npm start` - Start production server

### Code Quality
- `npm run lint` - Run Biome linting checks
- `npm run format` - Format code with Biome

## Architecture

### Frontend Structure
- **App Directory**: Uses Next.js 13+ App Router in `app/`
  - `app/layout.tsx` - Root layout with Geist font configuration
  - `app/page.tsx` - Landing page with Next.js starter template
  - `app/globals.css` - Global Tailwind CSS styles

### Move Integration
- **Move Package**: `move/hello/` contains a complete Sui Move package structure
  - `Move.toml` - Package manifest configured for Sui Move (edition 2024.beta)
  - `sources/hello.move` - Main module (currently minimal scaffold)
  - `tests/hello_tests.move` - Test module (currently commented out)
  - Package address configured as `hello = "0x0"` for development
  - Follows Sui Move coding conventions (see: https://docs.sui.io/concepts/sui-move-concepts/conventions)

### Styling
- Uses Tailwind CSS 4 with custom configuration
- Geist and Geist Mono fonts loaded via next/font/google
- Dark mode support implemented via CSS classes

### Configuration Files
- `biome.json` - Comprehensive Biome configuration with Next.js and React domains enabled
- `next.config.ts` - Next.js configuration (currently minimal)
- `tsconfig.json` - TypeScript configuration
- `postcss.config.mjs` - PostCSS configuration for Tailwind

## Code Standards

The project uses Biome with:
- 2-space indentation
- Recommended rules for Next.js and React
- Import organization enabled
- Git integration for file tracking