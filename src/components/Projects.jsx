import React from 'react'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "HAUL - Thrift Marketplace",
      description: "A comprehensive Flutter-based thrift marketplace connecting buyers and sellers of unique secondhand items with real-time analytics and cross-platform support.",
      technologies: ["Flutter", "Dart", "Firebase"],
      image: "/assets/images/haul-app.png",
      github: "https://github.com/fyodorrrrr/haul-app",
      live: "https://drive.google.com/file/d/1cQ-T6f2KTzzrUeprLFO1KI5dZDEEJiw2/view"
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Tailwind CSS showcasing my projects and skills in web development.",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      image: "/assets/images/portfolio-website.png",
      github: "https://github.com/emperuna/my-portfolio",
      live: "https://jeremygarin.works"
    }
  ]

  return (
    <section id="projects" className="section relative overflow-hidden">
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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-anti-flash-100 mb-8 tracking-tight font-sans">
            Featured{' '}
            <span className="bg-gradient-to-r from-steel-blue-400 via-steel-blue-300 to-reseda-green-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg md:text-xl text-anti-flash-200 leading-relaxed font-light max-w-3xl mx-auto font-sans">
            Here are some of my recent projects that showcase my skills in 
            mobile development, web technologies, and modern design principles.
          </p>
        </div>

        <div className="space-y-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div key={project.id} className="animate-slide-up" style={{ animationDelay: `${index * 200}ms` }}>
              <div className="bg-gradient-to-br from-space-cadet-600/80 via-space-cadet-700/60 to-space-cadet-800/80 rounded-3xl shadow-2xl border border-space-cadet-500/30 backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-xl overflow-hidden group">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 md:h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-space-cadet-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <div className="p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-anti-flash-100 group-hover:text-steel-blue-300 transition-colors duration-200 mb-4 font-sans">
                        {project.title}
                      </h3>
                      
                      <p className="text-anti-flash-300 leading-relaxed mb-6 font-sans font-light">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-steel-blue-400/20 text-steel-blue-300 text-sm rounded-full font-medium hover:bg-steel-blue-400/30 transition-colors duration-200 border border-steel-blue-400/30 font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        className="flex-1 bg-gradient-to-r from-space-cadet-700 to-space-cadet-800 hover:from-space-cadet-600 hover:to-space-cadet-700 text-anti-flash-100 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 border border-space-cadet-500/30 hover:border-steel-blue-400/50 font-sans"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        GitHub
                      </a>
                      <a
                        href={project.live}
                        className="flex-1 bg-gradient-to-r from-steel-blue-500 to-steel-blue-600 hover:from-steel-blue-400 hover:to-steel-blue-500 text-anti-flash-100 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 border border-steel-blue-400/30 font-sans"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="animate-slide-up" style={{ animationDelay: `${projects.length * 200}ms` }}>
            <div className="bg-gradient-to-br from-space-cadet-600/40 via-space-cadet-700/30 to-space-cadet-800/40 rounded-3xl border-2 border-dashed border-space-cadet-500/50 hover:border-reseda-green-400/50 transition-colors duration-200 flex items-center justify-center text-center p-8 backdrop-blur-sm">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-reseda-green-400/20 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-reseda-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-anti-flash-100 mb-2">More Projects Coming Soon</h3>
                  <p className="text-anti-flash-300">
                    I'm constantly working on new projects. Check back soon for updates!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
