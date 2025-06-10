import React from 'react'

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-steel-blue-500/10 to-reseda-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-reseda-green-500/10 to-steel-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-steel-blue-300/5 to-reseda-green-300/5 rounded-full blur-2xl animate-pulse delay-500"></div>

        <div className="hidden lg:block absolute top-20 left-10 w-1 h-1 bg-steel-blue-400/60 rounded-full animate-pulse"></div>
        <div className="hidden lg:block absolute bottom-32 right-16 w-2 h-2 bg-reseda-green-400/40 rounded-full animate-pulse delay-1000"></div>
        <div className="hidden lg:block absolute top-40 right-20 w-1 h-1 bg-anti-flash-400/50 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          <div className="mb-8 animate-slide-up">
            <h1 className="font-black tracking-tight leading-none mb-4" style={{ fontSize: 'clamp(4rem, 12vw, 10rem)', fontFamily: "'Fira Code', 'JetBrains Mono', monospace" }}>
              <span className="bg-gradient-to-r from-steel-blue-300 via-steel-blue-200 to-reseda-green-300 bg-clip-text text-transparent">
                jem.dev
              </span>
            </h1>

            <div className="space-y-3">
              <h2 
                className="font-light text-anti-flash-300/90 tracking-[0.2em] uppercase"
                style={{ fontSize: 'clamp(1rem, 2.5vw, 1.8rem)', fontFamily: "'Fira Code', 'JetBrains Mono', monospace" }}
              >
                Student Developer
              </h2>
              
              <div className="flex items-center justify-center space-x-4">
                <div className="w-8 h-px bg-gradient-to-r from-transparent via-steel-blue-400/60 to-steel-blue-400/20"></div>
                <div className="w-2 h-2 bg-steel-blue-400/40 rounded-full"></div>
                <div className="w-8 h-px bg-gradient-to-l from-transparent via-reseda-green-400/60 to-reseda-green-400/20"></div>
              </div>
              
              <p 
                className="text-anti-flash-400/80 font-light tracking-wide mt-4"
                style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)', fontFamily: "'Fira Code', 'JetBrains Mono', monospace" }}
              >
                Crafting Digital Solutions
              </p>
            </div>
          </div>

          <div className="mt-12 lg:mt-16 animate-slide-up delay-200">
            <div className="max-w-4xl mx-auto space-y-4">
              <p 
                className="text-anti-flash-200/90 leading-relaxed font-light"
                style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', fontFamily: "'Fira Code', 'JetBrains Mono', monospace" }}
              >
                I craft{' '}
                <span className="relative inline-block">
                  <span className="text-steel-blue-300 font-medium bg-gradient-to-r from-steel-blue-300 to-steel-blue-200 bg-clip-text text-transparent">
                    digital experiences
                  </span>
                  <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-steel-blue-400/50 to-transparent"></span>
                </span>
                {' '}that blend creativity with functionality.
              </p>
              
              <p 
                className="text-anti-flash-300/80 leading-relaxed font-light"
                style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', fontFamily: "'Fira Code', 'JetBrains Mono', monospace" }}
              >
                Passionate about building{' '}
                <span className="relative inline-block">
                  <span className="text-reseda-green-300 font-medium bg-gradient-to-r from-reseda-green-300 to-reseda-green-200 bg-clip-text text-transparent">
                    innovative solutions
                  </span>
                  <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-reseda-green-400/50 to-transparent"></span>
                </span>
                {' '}that make a meaningful impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
