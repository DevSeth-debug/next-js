# Next.js Authentication Project

A modern Next.js application with OIDC authentication and beautiful UI components.

## Features

- 🔐 **Authentication**
  - OIDC (OpenID Connect) integration
  - Secure JWT session handling
  - Protected routes with middleware
  - Beautiful login/sign-out pages with modern design

- 🎨 **Modern UI**
  - Tailwind CSS for styling
  - Glassmorphism effects
  - Animated backgrounds
  - Responsive design
  - Dark mode support
  - Smooth transitions and animations

- 🛠️ **Technical Stack**
  - Next.js (App Router)
  - TypeScript
  - NextAuth.js for authentication
  - Tailwind CSS for styling
  - Tailwind Animate plugin

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- PNPM package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd next-js
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

The application will be available at `http://localhost:3000`

## Authentication Configuration

The project uses NextAuth.js with OIDC provider. Configuration can be found in:
- `auth.config.ts` - Main authentication configuration
- `auth.ts` - Authentication setup
- `middleware.ts` - Route protection

### Environment Variables

Create a `.env.local` file with the following variables:
```env
# Your OIDC provider URL
OIDC_ISSUER=http://your-oidc-provider
OIDC_CLIENT_ID=your-client-id
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key
```

## Styling

The project uses a sophisticated styling setup:

- **Tailwind CSS** with custom configuration
- **Custom animations** including:
  - Blob animations
  - Fade-in effects
  - Slide transitions
  - Theme transitions
- **Dark mode support**
- **Custom color schemes**
- **Responsive design**

### Theme Configuration

Theme configuration can be found in:
- `tailwind.config.ts` - Tailwind configuration
- `app/globals.css` - Global styles and theme variables
- `components.json` - Component configurations

## Project Structure

```
├── app/
│   ├── auth/
│   │   ├── signin/
│   │   └── signout/
│   └── ...
├── components/
├── lib/
├── public/
├── styles/
├── types/
├── auth.config.ts
├── auth.ts
├── middleware.ts
└── ...
```

## Features in Detail

### Authentication Pages

- **Sign In Page**
  - Modern glassmorphism design
  - Animated background with floating blobs
  - Smooth transitions and hover effects
  - Responsive layout

- **Sign Out Page**
  - Confirmation dialog
  - Consistent design language
  - Secure session termination

### Styling Features

- **Custom Animations**
  - Blob animations with configurable delays
  - Smooth page transitions
  - Interactive hover effects
  - Loading states

- **Theme System**
  - Light/Dark mode support
  - Custom color schemes
  - CSS variable-based theming
  - Smooth theme transitions

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.