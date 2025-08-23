import React, { useState, useEffect } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'activities', 'projects', 'skills', 'contact']
      const scrollPosition = window.scrollY + 200

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop } = element
          if (scrollPosition >= offsetTop) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'activities', label: 'Studies' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
          ? 'bg-space-cadet-900/90 backdrop-blur-md shadow-lg border-b border-space-cadet-600/30' 
        : 'bg-transparent'
    }`}>
      <nav className="container-custom">
        <div className={`flex justify-between items-center md:justify-center transition-all duration-300 ${
          isScrolled ? 'py-4' : 'py-6'
        }`}>
          <div className="md:hidden"></div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <span
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-all duration-200 cursor-pointer relative group font-sans ${
                  activeSection === item.id
                    ? 'text-steel-blue-300'
                    : 'text-anti-flash-300 hover:text-steel-blue-400'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-steel-blue-400 to-reseda-green-400 transition-all duration-200 ${
                  activeSection === item.id ? 'opacity-100' : 'opacity-0'
                }`}></span>
              </span>
            ))}
            
            <span
              onClick={() => scrollToSection('contact')}
              className={`text-sm font-medium transition-all duration-200 cursor-pointer relative group font-sans ${
                activeSection === 'contact'
                  ? 'text-steel-blue-300'
                  : 'text-anti-flash-300 hover:text-steel-blue-400'
              }`}
            >
              Contact
              <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-steel-blue-400 to-reseda-green-400 transition-all duration-200 ${
                activeSection === 'contact' ? 'opacity-100' : 'opacity-0'
              }`}></span>
            </span>
          </div>

          <button
            className={`md:hidden w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 border ${
              isMenuOpen 
                ? 'bg-steel-blue-500/20 border-steel-blue-400/50' 
                : 'bg-space-cadet-700/30 hover:bg-space-cadet-600/50 border-space-cadet-500/40 hover:border-steel-blue-400/30'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 h-5 flex flex-col justify-center items-center">
              <div className={`w-4 h-0.5 transition-all duration-300 origin-center ${
                isMenuOpen 
                  ? 'bg-steel-blue-300 rotate-45 translate-y-0.5' 
                  : 'bg-anti-flash-200'
              }`}></div>
              <div className={`w-4 h-0.5 transition-all duration-300 mt-1 ${
                isMenuOpen 
                  ? 'opacity-0' 
                  : 'bg-anti-flash-200'
              }`}></div>
              <div className={`w-4 h-0.5 transition-all duration-300 mt-1 origin-center ${
                isMenuOpen 
                  ? 'bg-steel-blue-300 -rotate-45 -translate-y-0.5' 
                  : 'bg-anti-flash-200'
              }`}></div>
            </div>
          </button>
        </div>
        
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-80 opacity-100 pb-6' : 'max-h-0 opacity-0'
        }`}>
          <div className="border-t border-space-cadet-600/30 pt-4">
            <div className="flex flex-col space-y-4 items-center">
              {navItems.map((item) => (
                <span
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-base font-medium transition-all duration-200 cursor-pointer font-sans ${
                    activeSection === item.id
                      ? 'text-steel-blue-300'
                      : 'text-anti-flash-300 hover:text-steel-blue-400'
                  }`}
                >
                  {item.label}
                </span>
              ))}
              
              <span
                onClick={() => scrollToSection('contact')}
                className={`text-base font-medium transition-all duration-200 cursor-pointer font-sans ${
                  activeSection === 'contact'
                    ? 'text-steel-blue-300'
                    : 'text-anti-flash-300 hover:text-steel-blue-400'
                }`}
              >
                Contact
              </span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
