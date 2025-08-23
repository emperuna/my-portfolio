import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Activities from './components/Activities'

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-space-cadet-900 via-space-cadet-800 to-space-cadet-700">
      <Header />
      <Hero />
      <About />
      <Activities />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App