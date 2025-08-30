# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js project named "sui-move-hello-world" that is a hybrid project combining Next.js frontend with Sui Move smart contracts. The project uses:

- **Next.js 15.5.2** with App Router architecture
- **React 19.1.0** for UI components
- **TypeScript** for type safety
- **Tailwind CSS 4** for styling with PostCSS
- **Biome** for linting and formatting (instead of ESLint/Prettier)
- **Sui dApp Kit** for blockchain integration
- **React Query** for data fetching and caching

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
  - `app/layout.tsx` - Root layout with Geist font configuration and Sui providers
  - `app/page.tsx` - Home page that calls blockchain and displays message
  - `app/providers.tsx` - Sui client and React Query providers configuration
  - `app/hooks/useGetMessage.ts` - Custom hook for calling Move contract function
  - `app/globals.css` - Global Tailwind CSS styles

### Move Integration
- **Move Package**: `move/hello/` contains a complete Sui Move package with working implementation
  - `Move.toml` - Package manifest with MIT license and deployed address
  - `sources/hello.move` - Main module implementing `get_message()` function returning "Hello, world!"
  - `tests/hello_tests.move` - Comprehensive test suite with positive and negative test cases
  - **Deployed on Sui Devnet**: `0x159b80f0629ade2439d636749f99bafe5798741a6d5d64d03891a01dfe9c6aed`
  - Follows Sui Move coding conventions and includes proper error handling

### Blockchain Integration
- **Frontend Integration**: Uses `@mysten/dapp-kit` to interact with deployed Move contract
  - `useGetMessage` hook calls `devInspectTransactionBlock` to retrieve data without gas costs
  - Automatic BCS decoding of return values from Move functions
  - Error handling and loading states for blockchain calls
  - Real-time data fetching from Sui devnet

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