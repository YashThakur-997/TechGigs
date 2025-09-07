import React from 'react'

const Webdev = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white min-h-screen px-6 md:px-20 py-16">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-6xl font-bold text-indigo-600">Welcome to Web Development</h1>
        <p className="mt-4 text-xl text-gray-700">
          Build immersive websites, master full stack workflows, and create digital experiences that leave a mark.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">What You Can Build</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { title: 'Interactive Portfolio', desc: 'Showcase your skills with animations, live previews, and testimonials.' },
            { title: 'Client Dashboard', desc: 'Build a secure admin panel with analytics, user roles, and real-time updates.' },
            { title: 'AI-Powered Landing Page', desc: 'Integrate LLMs or image gen tools to create futuristic user experiences.' },
            { title: 'Event Microsite', desc: 'Gamify user engagement with countdowns, badges, and dynamic content.' },
            { title: 'E-commerce Starter', desc: 'Design a sleek storefront with cart logic, payment integration, and product filters.' },
            { title: 'Blog with Markdown & Auth', desc: 'Create a content platform with secure login and editor support.' },
          ].map(({ title, desc }, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-indigo-600 mb-2">{title}</h3>
              <p className="text-gray-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack */}
      <div className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Tech Stack Highlights</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center text-gray-700 font-medium">
          {['React', 'Next.js', 'TailwindCSS', 'Node.js', 'MongoDB', 'JWT', 'Framer Motion', 'Vercel'].map((tech, i) => (
            <div key={i} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition">{tech}</div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to build something extraordinary?</h3>
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition">
          Launch Your Project
        </button>
      </div>
    </div>

  )
}

export default Webdev
