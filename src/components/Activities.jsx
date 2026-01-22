import React from 'react'

const Activities = () => {
  const currentCourses = [
    {
      code: "CSST 101",
      title: "Advanced Presentation and Reasoning",
      description: "Course repository for CSST 101 (IS 101). Contains coursework, exercises, and projects focusing on structured presentation skills, critical reasoning, and academic communication.",
      technologies: ["Presentation Design", "Critical Thinking", "Academic Communication"],
      status: "Completed",
      semester: "2025",
      github: "https://emperuna.github.io/CSST101-3A-AY2526/"
    },
    {
      code: "CSST 102",
      title: "Basic Machine Learning",
      description: "Course repository for CSST 102 (IS 102). Includes coursework, exercises, and projects introducing fundamental concepts of machine learning, data preprocessing, model building, and evaluation.",
      technologies: ["Python", "Machine Learning", "Data Preprocessing", "Model Evaluation"],
      status: "Completed",
      semester: "2025",
      github: "https://emperuna.github.io/CSST102-3A-AY2526/"
    }
  ]

  return (
    <section id="activities" className="section relative overflow-hidden py-12 sm:py-16 md:py-20">
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
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-anti-flash-100 mb-4 md:mb-8 tracking-tight font-sans">
            Current{' '}
            <span className="bg-gradient-to-r from-steel-blue-400 via-steel-blue-300 to-reseda-green-400 bg-clip-text text-transparent">
              Studies
            </span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-anti-flash-200 leading-relaxed font-light max-w-3xl mx-auto font-sans">
            Here's what I'm currently learning this semester at Laguna State Polytechnic University.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {currentCourses.map((course, index) => (
            <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 200}ms` }}>
              <div className="bg-gradient-to-br from-space-cadet-600/80 via-space-cadet-700/60 to-space-cadet-800/80 rounded-3xl p-6 md:p-8 shadow-2xl border border-space-cadet-500/30 backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-xl min-h-[420px] sm:min-h-[380px] lg:h-full group">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-anti-flash-100 mb-3 font-sans group-hover:text-steel-blue-300 transition-colors duration-200">
                      {course.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="text-sm font-mono text-steel-blue-300 bg-steel-blue-400/20 px-3 py-1 rounded-full border border-steel-blue-400/30">
                        {course.code}
                      </span>
                      <span className="text-sm text-reseda-green-300 bg-reseda-green-400/20 px-3 py-1 rounded-full font-mono border border-reseda-green-400/30">
                        {course.semester}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-sm md:text-base text-anti-flash-300 leading-relaxed mb-4 md:mb-6 font-sans font-light">
                  {course.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                  {course.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-space-cadet-800/50 text-anti-flash-200 text-sm rounded-full border border-space-cadet-400/30 font-mono hover:bg-space-cadet-700/50 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-reseda-green-400 rounded-full"></div>
                    <span className="text-sm font-medium text-anti-flash-400 font-mono">
                      {course.status}
                    </span>
                  </div>
                  
                  <a
                    href={course.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-space-cadet-700 to-space-cadet-800 hover:from-space-cadet-600 hover:to-space-cadet-700 text-anti-flash-100 text-sm font-medium rounded-lg transition-all duration-200 border border-space-cadet-500/30 hover:border-steel-blue-400/50 font-sans"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View Course
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Activities