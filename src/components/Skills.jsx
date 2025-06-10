import React from 'react'

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      skills: ["Flutter", "React", "HTML", "CSS", "Tailwind CSS"]
    },
    {
      title: "Backend & Database",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s8-1.79 8-4" />
        </svg>
      ),
      skills: ["Firebase Authentication", "Cloud Firestore"]
    },
    {
      title: "Tools & Workflow",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      skills: ["Git", "GitHub", "VS Code"]
    }
  ]

  return (
    <section id="skills" className="section relative overflow-hidden">
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
            Skills &{' '}
            <span className="bg-gradient-to-r from-steel-blue-400 via-steel-blue-300 to-reseda-green-400 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="text-lg md:text-xl text-anti-flash-200 leading-relaxed font-light max-w-3xl mx-auto font-sans">
            I'm constantly learning and improving my skills. Here's an overview 
            of the technologies and tools I work with regularly.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="animate-slide-up" style={{ animationDelay: `${categoryIndex * 100}ms` }}>
              <div className="bg-gradient-to-br from-space-cadet-600/80 via-space-cadet-700/60 to-space-cadet-800/80 rounded-3xl p-8 shadow-2xl border border-space-cadet-500/30 backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-steel-blue-400/20 rounded-xl flex items-center justify-center">
                    <div className="text-steel-blue-300">
                      {category.icon}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-anti-flash-100 mb-6 text-center font-sans">
                  {category.title}
                </h3>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="px-4 py-3 bg-space-cadet-800/50 hover:bg-space-cadet-700/50 rounded-lg border border-space-cadet-400/30 hover:border-steel-blue-400/50 transition-all duration-200 group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-anti-flash-200 group-hover:text-steel-blue-300 transition-colors duration-200 font-mono">
                          {skill}
                        </span>
                        <div className="w-2 h-2 bg-reseda-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
