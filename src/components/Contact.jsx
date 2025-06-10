import React, { useState } from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true);
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      alert('Please fill in all fields');
      setIsLoading(false);
      return;
    }
    
    if (formData.message.length > 1000) {
      alert('Message too long (max 1000 characters)');
      setIsLoading(false);
      return;
    }
    
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_pq5ws1h',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_zuf0fkk',
        {
          from_name: formData.name.trim(),
          from_email: formData.email.trim(),
          message: formData.message.trim(),
          to_name: 'Jeremy',
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'xb3MeaIvjzoaCoziY'
      );
      
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Failed to send message:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }

  const socialLinks = [
    {
      name: "GitHub",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      href: "https://github.com/emperuna",
      color: "steel-blue"
    },
    {
      name: "LinkedIn",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      href: "https://www.linkedin.com/in/jeremy-garin-b9299036a/",
      color: "reseda-green"
    },
    {
      name: "Email",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      href: "mailto:garinjeremy6@gmail.com",
      color: "steel-blue"
    }
  ]

  return (
    <section id="contact" className="section relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-steel-blue-400 rounded-full blur-3xl animate-pulse delay-300"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-reseda-green-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-anti-flash-400 rounded-full blur-2xl animate-pulse delay-700"></div>
      </div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-anti-flash-100 mb-6 tracking-tight" style={{ fontFamily: "'Fira Code', 'JetBrains Mono', monospace" }}>
              Get In{' '}
              <span className="bg-gradient-to-r from-steel-blue-400 via-steel-blue-300 to-reseda-green-400 bg-clip-text text-transparent">
                Touch
              </span>
            </h2>
            <p className="text-lg text-anti-flash-200 leading-relaxed font-light" style={{ fontFamily: "'Fira Code', 'JetBrains Mono', monospace" }}>
              Let's connect and create something amazing together.
            </p>
          </div>

          <div className="animate-slide-up mb-12">
            <div className="flex justify-center gap-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group w-16 h-16 bg-gradient-to-br from-space-cadet-600/80 to-space-cadet-800/80 hover:from-${social.color}-500/20 hover:to-${social.color}-600/20 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-space-cadet-500/30 hover:border-${social.color}-400/50 shadow-lg hover:shadow-xl`}
                  title={social.name}
                >
                  <div className={`text-anti-flash-300 group-hover:text-${social.color}-300 transition-colors duration-300`}>
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="animate-slide-up delay-200">
            <div className="bg-gradient-to-br from-space-cadet-600/80 via-space-cadet-700/60 to-space-cadet-800/80 rounded-2xl p-6 sm:p-8 shadow-2xl border border-space-cadet-500/30 backdrop-blur-sm">
              <h3 className="text-xl sm:text-2xl font-bold text-anti-flash-100 mb-6 text-center" style={{ fontFamily: "'Fira Code', 'JetBrains Mono', monospace" }}>Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-anti-flash-200 font-medium mb-2 text-sm" style={{ fontFamily: "'Fira Code', 'JetBrains Mono', monospace" }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-1.5 py-3 bg-space-cadet-800/50 border border-space-cadet-400/30 rounded-lg text-anti-flash-100 placeholder-anti-flash-400 focus:outline-none focus:ring-2 focus:ring-steel-blue-400 focus:border-transparent transition-all duration-200 text-sm"
                    style={{ fontFamily: "'Fira Code', 'JetBrains Mono', monospace" }}
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-anti-flash-200 font-medium mb-2 text-sm" style={{ fontFamily: "'Fira Code', 'JetBrains Mono', monospace" }}>
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-1.5 py-3 bg-space-cadet-800/50 border border-space-cadet-400/30 rounded-lg text-anti-flash-100 placeholder-anti-flash-400 focus:outline-none focus:ring-2 focus:ring-steel-blue-400 focus:border-transparent transition-all duration-200 text-sm"
                    style={{ fontFamily: "'Fira Code', 'JetBrains Mono', monospace" }}
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-anti-flash-200 font-medium mb-2 text-sm" style={{ fontFamily: "'Fira Code', 'JetBrains Mono', monospace" }}>
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-1.5 py-3 bg-space-cadet-800/50 border border-space-cadet-400/30 rounded-lg text-anti-flash-100 placeholder-anti-flash-400 focus:outline-none focus:ring-2 focus:ring-steel-blue-400 focus:border-transparent transition-all duration-200 resize-none text-sm"
                    style={{ fontFamily: "'Fira Code', 'JetBrains Mono', monospace" }}
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full px-8 py-3 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''} bg-gradient-to-r from-steel-blue-500 to-steel-blue-600 hover:from-steel-blue-400 hover:to-steel-blue-500 text-anti-flash-100 font-medium rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 border border-steel-blue-400/30 mt-6 text-sm`}
                  style={{ fontFamily: "'Fira Code', 'JetBrains Mono', monospace" }}
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact