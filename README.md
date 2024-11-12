# Decentralized Network

A secure, decentralized communication network built with Node.js and React. This project implements a hierarchical node system with military-grade encryption and clearance levels.

## Features

- 🔐 Military-grade encryption (AES-256)
- 👥 Multi-level user clearance system
- 📡 Decentralized node communication
- 🔄 Real-time network monitoring
- 🛡️ Advanced security protocols
- 📊 Interactive dashboard
- 🚨 Emergency protocols and killswitch
- 🔍 Network topology visualization

## Quick Start

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at `http://localhost:3000`

## System Requirements

- Node.js 18+
- Modern web browser with WebAssembly support
- 2GB RAM minimum
- 1GB free disk space

## Project Structure

```
├── netlify/
│   └── functions/          # Serverless functions
├── src/
│   ├── api/               # API clients and interfaces
│   ├── components/        # React components
│   ├── contexts/          # React contexts
│   ├── core/              # Core network functionality
│   ├── crypto/            # Cryptographic utilities
│   ├── firmware/          # Firmware management
│   ├── hooks/             # Custom React hooks
│   ├── network/           # Network protocols
│   ├── security/          # Security implementations
│   ├── server/            # Server configuration
│   ├── store/             # State management
│   ├── types/             # TypeScript types
│   └── utils/             # Utility functions
```

## Security Features

- End-to-end encryption
- Multi-factor authentication
- Role-based access control
- Real-time threat detection
- Automatic security updates
- Network killswitch

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Environment Variables

```env
NODE_ENV=development
PORT=3000
LOG_LEVEL=info
JWT_SECRET=your-secret-key
ALLOWED_ORIGINS=http://localhost:3000
```

## Deployment

The project is configured for deployment on Netlify. Simply connect your repository and Netlify will handle the rest.

## License

MIT License - See LICENSE file for details