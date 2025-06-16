import React from 'react'

const About = () => {
  return (
    <section id="about" className="section relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-steel-blue-400 rounded-full blur-3xl animate-pulse delay-300"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-reseda-green-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-anti-flash-400 rounded-full blur-2xl animate-pulse delay-700"></div>
      </div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-anti-flash-100 mb-8 tracking-tight font-sans">
              About{' '}
              <span className="bg-gradient-to-r from-steel-blue-400 via-steel-blue-300 to-reseda-green-400 bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-anti-flash-200 leading-relaxed font-light font-mono">
                I'm{' '}
                <span className="relative inline-block">
                  <span className="font-medium text-steel-blue-300 bg-gradient-to-r from-steel-blue-300 to-steel-blue-200 bg-clip-text text-transparent">Jeremy Garin</span>
                  <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-steel-blue-400/70 via-steel-blue-300/50 to-transparent"></span>
                </span>
                , a Computer Science student at Laguna State Polytechnic University with a strong focus on mobile and web development. I specialize in building{' '}
                <span className="relative inline-block">
                  <span className="font-medium text-reseda-green-300 bg-gradient-to-r from-reseda-green-300 to-reseda-green-200 bg-clip-text text-transparent">responsive applications</span>
                  <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-reseda-green-400/70 via-reseda-green-300/50 to-transparent"></span>
                </span>
                {' '}using Flutter, Firebase, and React. I enjoy creating clean user interfaces supported by scalable and real-time features.
              </p>
              
              <p className="text-lg text-anti-flash-300 leading-relaxed font-light font-mono">
                In addition to programming, I am passionate about{' '}
                <span className="relative inline-block">
                  <span className="font-medium text-steel-blue-300 bg-gradient-to-r from-steel-blue-300 to-steel-blue-200 bg-clip-text text-transparent">video editing</span>
                  <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-steel-blue-400/70 via-steel-blue-300/50 to-transparent"></span>
                </span>
                , which has helped me develop an eye for detail and a strong sense of design. I take pride in writing{' '}
                <span className="relative inline-block">
                  <span className="font-medium text-reseda-green-300 bg-gradient-to-r from-reseda-green-300 to-reseda-green-200 bg-clip-text text-transparent">efficient code</span>
                  <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-reseda-green-400/70 via-reseda-green-300/50 to-transparent"></span>
                </span>
                , delivering intuitive user experiences, and continuously improving my skills through hands-on projects.
              </p>
            </div>

            <div className="mt-8">
              <div className="flex flex-wrap gap-4">
                <a
                  href="/assets/documents/Jeremy-Garin-Resume.pdf"
                  download="Jeremy-Garin-Resume.pdf"
                  className="group px-6 py-3 bg-gradient-to-r from-steel-blue-500 to-steel-blue-600 text-anti-flash-100 font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-steel-blue-500/25 flex items-center gap-2 border border-steel-blue-400/30 font-sans"
                >
                  <svg className="w-5 h-5 transition-transform group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
                </a>
              </div>
            </div>
          </div>

          <div className="animate-slide-up delay-200">
            <div className="relative">
              <div className="relative bg-gradient-to-br from-space-cadet-600/80 via-space-cadet-700/60 to-space-cadet-800/80 rounded-3xl p-8 shadow-2xl border border-space-cadet-500/30 overflow-hidden backdrop-blur-sm">
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
                    backgroundSize: '30px 30px'
                  }}></div>
                </div>

                <div className="relative z-10">
                  <div className="w-full h-80 rounded-2xl overflow-hidden border border-space-cadet-400/30 backdrop-blur-sm">
                    <img
                      src="/assets/images/profile.jpg"
                      alt="Jeremy Garin"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-space-cadet-900/20 to-transparent"></div>
                  </div>
                </div>

                <div className="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-br from-steel-blue-400 to-reseda-green-400 rounded-full opacity-60 animate-pulse delay-200"></div>
                <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-gradient-to-br from-reseda-green-400 to-steel-blue-400 rounded-full opacity-60 animate-pulse delay-600"></div>
              </div>

              <div className="absolute -top-4 -left-4 w-8 h-8 bg-steel-blue-400/25 rounded-full animate-bounce delay-700 border border-steel-blue-300/30"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-reseda-green-400/25 rounded-full animate-bounce delay-1000 border border-reseda-green-300/30"></div>
              <div className="absolute top-1/2 -left-6 w-3 h-3 bg-anti-flash-400/30 rounded-full animate-pulse delay-1200"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
