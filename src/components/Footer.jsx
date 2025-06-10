import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-gradient-to-br from-space-cadet-900 via-space-cadet-800 to-space-cadet-700">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-steel-blue-600 to-reseda-green-400"></div>
      
      <div className="container-custom py-2">
        <div className="text-center">
          <p className="text-anti-flash-400 text-sm">
            Copyright © {currentYear} - All rights reserved by Jeremy Garin.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
