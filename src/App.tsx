import { useState } from 'react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [csvFile, setCsvFile] = useState<File | null>(null)

  const features = [
    {
      title: 'Exercise Analysis',
      description: 'Track your progress across different exercises with detailed performance metrics and trend analysis.',
      icon: '📊'
    },
    {
      title: 'Strength Progression',
      description: 'Visualize your strength gains over time with progressive overload tracking and personalized insights.',
      icon: '💪'
    },
    {
      title: 'Training Insights',
      description: 'Get data-driven insights about your training patterns, volume, and recovery periods.',
      icon: '🧠'
    },
    {
      title: 'Performance Metrics',
      description: 'Comprehensive analytics including PR tracking, volume analysis, and workout consistency.',
      icon: '🏆'
    }
  ]

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file && file.type === 'text/csv') {
      setCsvFile(file)
    } else {
      alert('Please upload a valid CSV file')
    }
  }

  const processData = () => {
    if (csvFile) {
      // TODO: Implement CSV processing logic
      alert(`Processing ${csvFile.name}... (Feature coming soon!)`)
    }
  }

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="nav">
            <div className="logo">
              <span className="logo-icon">🏋️</span>
              <span className="logo-text">Strong Data Insights</span>
            </div>
            <nav className={`nav-links ${isMenuOpen ? 'nav-open' : ''}`}>
              <a href="#home">Home</a>
              <a href="#upload">Upload Data</a>
              <a href="#features">Features</a>
              <a href="#insights">Insights</a>
              <a href="#about">About</a>
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
              Transform Your
              <span className="gradient-text"> Training Data </span>
              Into Powerful Insights
            </h1>
            <p className="hero-description">
              Upload your gym training data and unlock deep insights about your strength progression, 
              training patterns, and performance metrics. Make data-driven decisions to optimise your fitness journey.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => document.getElementById('upload')?.scrollIntoView()}>
                Upload Your Data
              </button>
              <button className="btn btn-secondary" onClick={() => document.getElementById('features')?.scrollIntoView()}>
                Explore Features
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CSV Upload Section */}
      <section id="upload" className="upload-section">
        <div className="container">
          <h2 className="section-title">Upload Your Training Data</h2>
          <div className="upload-container">
            <div className="upload-card">
              <div className="upload-icon">📁</div>
              <h3>Import Your CSV File</h3>
              <p>Upload your training log in CSV format to start analysing your strength progression and workout patterns.</p>
              
              <div className="file-upload">
                <input
                  type="file"
                  id="csv-upload"
                  accept=".csv"
                  onChange={handleFileUpload}
                  className="file-input"
                />
                <label htmlFor="csv-upload" className="file-label">
                  {csvFile ? csvFile.name : 'Choose CSV File'}
                </label>
              </div>

              {csvFile && (
                <div className="file-actions">
                  <button className="btn btn-primary" onClick={processData}>
                    Analyse Data
                  </button>
                  <button className="btn btn-secondary" onClick={() => setCsvFile(null)}>
                    Remove File
                  </button>
                </div>
              )}

              <div className="upload-help">
                <h4>Expected CSV Format:</h4>
                <p>Date, Exercise, Sets, Reps, Weight, Notes</p>
                <small>Example: 2024-01-15, Squat, 3, 8, 225, Good form</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <h2 className="section-title">Powerful Analytics for Your Training</h2>
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
              <h3>Strong Data Insights</h3>
              <p>Empowering athletes and fitness enthusiasts with data-driven insights to optimise their training and achieve their strength goals.</p>
            </div>
            <div className="footer-section">
              <h4>Features</h4>
              <ul>
                <li><a href="#upload">Data Upload</a></li>
                <li><a href="#features">Analytics</a></li>
                <li><a href="#insights">Progress Tracking</a></li>
                <li><a href="#about">Performance Metrics</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Support</h4>
              <ul>
                <li><a href="#help">Help Centre</a></li>
                <li><a href="#tutorials">Tutorials</a></li>
                <li><a href="#format">CSV Format Guide</a></li>
                <li><a href="#contact">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Strong Data Insights. Built for athletes, by athletes 💪</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
