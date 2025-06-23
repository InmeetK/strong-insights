import { useState } from 'react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const features = [
    {
      title: 'Fast Development',
      description: 'Built with Vite for lightning-fast development and hot module replacement.',
      icon: '⚡'
    },
    {
      title: 'Type Safety',
      description: 'TypeScript provides excellent developer experience with type checking.',
      icon: '🛡️'
    },
    {
      title: 'Modern React',
      description: 'Using the latest React features including hooks and functional components.',
      icon: '⚛️'
    },
    {
      title: 'Responsive Design',
      description: 'Beautiful UI that works seamlessly across all device sizes.',
      icon: '📱'
    }
  ]

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="nav">
            <div className="logo">
              <span className="logo-icon">🚀</span>
              <span className="logo-text">React App</span>
            </div>
            <nav className={`nav-links ${isMenuOpen ? 'nav-open' : ''}`}>
              <a href="#home">Home</a>
              <a href="#features">Features</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </nav>
            <button 
              className="menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Welcome to Your
              <span className="gradient-text"> React TypeScript </span>
              Web App
            </h1>
            <p className="hero-description">
              A modern, fast, and beautiful web application built with React, TypeScript, and Vite. 
              Ready for your next amazing project.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary">Get Started</button>
              <button className="btn btn-secondary">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <h2 className="section-title">Features</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>React TypeScript App</h3>
              <p>Built with modern web technologies for optimal performance and developer experience.</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Technologies</h4>
              <ul>
                <li>React 19</li>
                <li>TypeScript</li>
                <li>Vite</li>
                <li>ESLint</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 React TypeScript App. Built with ❤️</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
