# Sui Move Hello World

This is a hybrid project combining [Next.js](https://nextjs.org) frontend with [Sui Move](https://docs.sui.io/) smart contracts. The Next.js portion was bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app), and includes a complete Sui Move package implementing a simple "Hello, world!" smart contract that's deployed on Sui devnet and integrated with the frontend.

## Project Structure

- **Frontend**: Next.js 15 with React 19, TypeScript, and Tailwind CSS 4
- **Smart Contracts**: Sui Move package in `move/hello/` (deployed on devnet)
- **Blockchain Integration**: Sui dApp Kit with React Query for frontend-contract interaction
- **Tooling**: Biome for linting and formatting

## Getting Started

### Frontend Development

Run the Next.js development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The application will automatically fetch and display the "Hello, world!" message from the deployed Sui Move contract. You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

### Move Smart Contract

The project includes a Sui Move package at `move/hello/` with:

- **Module**: `hello::hello` - Implements a `get_message()` function
- **Tests**: Comprehensive test suite including positive and negative cases
- **Configuration**: Package manifest with MIT license
- **Deployment**: Contract deployed on Sui devnet at `0x159b80f0629ade2439d636749f99bafe5798741a6d5d64d03891a01dfe9c6aed`

To work with the Move package locally, you'll need the [Sui CLI](https://docs.sui.io/guides/developer/getting-started/sui-install) installed.

#### Testing the Move Package

```bash
cd move/hello
sui move test
```

#### Building the Move Package

```bash
cd move/hello
sui move build
```

## Blockchain Integration

The frontend integrates with the deployed Sui Move contract using:

- **@mysten/dapp-kit** - Sui wallet and client integration
- **@mysten/sui** - Sui TypeScript SDK for transaction building
- **@tanstack/react-query** - Data fetching and caching

The integration includes:
- Real-time data fetching from the blockchain
- Automatic BCS decoding of Move function return values
- Loading states and error handling
- Gas-free read operations using `devInspectTransactionBlock`

### Key Files
- `app/providers.tsx` - Sui client and React Query setup
- `app/hooks/useGetMessage.ts` - Custom hook for calling the Move contract
- `app/page.tsx` - Main page displaying blockchain data

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
- [Sui dApp Kit Documentation](https://sdk.mystenlabs.com/dapp-kit) - frontend integration guide

### Explore the Deployed Contract

- **Sui Explorer**: [View on Sui Devnet](https://suiexplorer.com/object/0x159b80f0629ade2439d636749f99bafe5798741a6d5d64d03891a01dfe9c6aed?network=devnet)
- **Contract Address**: `0x159b80f0629ade2439d636749f99bafe5798741a6d5d64d03891a01dfe9c6aed`

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
