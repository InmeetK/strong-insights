# React TypeScript Web App

A modern, responsive web application built with React 19, TypeScript, and Vite. Features a beautiful landing page with modern design principles, smooth animations, and excellent developer experience.

![React](https://img.shields.io/badge/React-19.1.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-~5.8.3-blue)
![Vite](https://img.shields.io/badge/Vite-6.3.5-purple)

## ✨ Features

- ⚡ **Lightning Fast Development** - Powered by Vite for instant hot module replacement
- 🛡️ **Type Safety** - Full TypeScript support with strict type checking
- ⚛️ **Modern React** - Built with React 19 and functional components with hooks
- 📱 **Responsive Design** - Beautiful UI that works seamlessly across all devices
- 🎨 **Modern Styling** - Custom CSS with gradients, animations, and smooth transitions
- 🔧 **Developer Experience** - ESLint configuration for code quality
- 🏗️ **Production Ready** - Optimised build configuration

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone the repository** (if not already done):
   ```bash
   git clone <your-repo-url>
   cd code_test
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:5173`

## 📁 Project Structure

```
code_test/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images, icons, and other assets
│   ├── App.tsx            # Main application component
│   ├── App.css            # Application styles
│   ├── main.tsx           # Application entry point
│   ├── index.css          # Global styles
│   └── vite-env.d.ts      # Vite type definitions
├── package.json           # Project dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── tsconfig.app.json      # App-specific TypeScript configuration
├── tsconfig.node.json     # Node-specific TypeScript configuration
├── vite.config.ts         # Vite configuration
├── eslint.config.js       # ESLint configuration
└── README.md              # This file
```

## 🛠️ Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 🎨 Design Features

### Header
- Fixed navigation with glassmorphism effect
- Responsive mobile menu
- Smooth hover animations
- Gradient logo design

### Hero Section
- Beautiful gradient background
- Animated floating pattern
- Call-to-action buttons with hover effects
- Responsive typography

### Features Section
- Grid layout with hover animations
- Card-based design
- Icon integration
- Responsive columns

### Footer
- Multi-column layout
- Organised links and information
- Responsive design

## 🔧 Technology Stack

- **Frontend Framework**: React 19
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Custom CSS with modern features
- **Code Quality**: ESLint
- **Font**: Inter (Google Fonts)

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## 🎯 Customization

### Colours
The application uses a consistent colour palette defined in the CSS:
- Primary: `#667eea` to `#764ba2` (gradient)
- Secondary: `#ffd89b` to `#19547b` (gradient)
- Background: `#f8fafc`
- Text: `#1a1a1a`, `#4a5568`, `#718096`

### Typography
- Primary font: Inter (imported from Google Fonts)
- Fallback: System fonts for optimal performance

### Layout
- Container max-width: 1200px
- Consistent spacing using rem units
- Grid layouts for responsive design

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

The build will be output to the `dist/` folder and is ready for deployment to any static hosting service.

### Popular Deployment Options
- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **GitHub Pages**: Use GitHub Actions for automated deployment
- **Firebase Hosting**: Use Firebase CLI for deployment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

If you have any questions or need help, please:
1. Check the existing issues
2. Create a new issue with detailed information
3. Provide steps to reproduce any bugs

---

**Happy coding!** 🎉
