# Ephemeral Notes App

A decentralized, peer-to-peer notes application built with React and Hypercore Protocol. This application allows multiple peers to collaborate and share notes in a secure, distributed manner.

## Features

- Decentralized peer-to-peer architecture
- Real-time note synchronization
- Multiple peer support
- Modern React-based UI
- TypeScript support

## Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd ephemeral-notes-app
```

2. Install dependencies:

```bash
npm install
```

## Usage

The application supports multiple peers, each running on a different port. Here's how to start different peers:

### First Peer

```bash
npm run start
```

### Second Peer

```bash
npm run start:alt
```

### Third Peer

```bash
npm run start:alt-2
```

## Development

For development with hot-reloading:

### First Peer (Development)

```bash
npm run dev
```

### Second Peer (Development)

```bash
npm run dev:alt
```

### Third Peer (Development)

```bash
npm run dev:start:alt-2
```

## Building

To build the project:

```bash
npm run build
```

## Project Structure

- `src/` - Source code
- `build/` - Compiled output
- `docs/` - Documentation

## Dependencies

Key dependencies include:

- React
- Hypercore Protocol
- Hyperbee
- Hyperswarm
- Zustand (State Management)
- Styled Components

## License

Apache-2.0
