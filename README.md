# Sui Move Hello World

This is a hybrid project combining [Next.js](https://nextjs.org) frontend with [Sui Move](https://docs.sui.io/) smart contracts. The Next.js portion was bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app), and includes a complete Sui Move package implementing a simple "Hello, world!" smart contract.

## Project Structure

- **Frontend**: Next.js 15 with React 19, TypeScript, and Tailwind CSS 4
- **Smart Contracts**: Sui Move package in `move/hello/`
- **Tooling**: Biome for linting and formatting

## Getting Started

### Frontend Development

Run the Next.js development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

### Move Smart Contract

The project includes a Sui Move package at `move/hello/` with:

- **Module**: `hello::hello` - Implements a `get_message()` function
- **Tests**: Comprehensive test suite including positive and negative cases
- **Configuration**: Package manifest with MIT license

To work with the Move package, you'll need the [Sui CLI](https://docs.sui.io/guides/developer/getting-started/sui-install) installed.

## Code Quality

The project uses Biome for consistent code formatting and linting:

```bash
npm run lint    # Check code quality
npm run format  # Format code
```

## Learn More

### Next.js Resources

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial
- [Next.js GitHub repository](https://github.com/vercel/next.js) - feedback and contributions welcome

### Sui Move Resources

- [Sui Documentation](https://docs.sui.io/) - comprehensive guide to Sui development
- [Move Language Reference](https://move-language.github.io/move/) - learn the Move programming language
- [Sui Move by Example](https://examples.sui.io/samples/move/) - practical Move examples

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
