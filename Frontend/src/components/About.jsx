import React from 'react'

const About = () => {
  return (
    <section className="bg-gray-50 text-gray-800 py-16 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center text-indigo-600">
          About Me
        </h2>

        <div className="bg-white shadow-lg rounded-lg p-8">
          <p className="text-lg leading-relaxed mb-6">
            I'm a passionate <span className="font-semibold text-indigo-500">freelancer</span> blending the worlds of
            <span className="font-semibold text-pink-500"> graphic design</span> and
            <span className="font-semibold text-blue-500"> full stack development</span>. Whether it's crafting sleek UI animations or architecting scalable backend systems, I thrive on turning ideas into immersive digital experiences.
          </p>

          <p className="text-md text-gray-600 mb-4">
            With a background in both design and code, I bring a unique perspective to every project—balancing aesthetics with functionality. I collaborate with startups, agencies, and creators to build tools, brands, and platforms that stand out.
          </p>

          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>🎨 UI/UX Design with Figma & Framer</li>
            <li>⚙️ Full Stack Development (React, Node.js, MongoDB)</li>
            <li>🚀 Responsive & Animated Interfaces</li>
            <li>🧠 AI-powered design workflows</li>
          </ul>
        </div>

        <div className="mt-10 text-center">
          <a
            href="/contact"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition duration-300"
          >
            Let’s Collaborate
          </a>
        </div>
      </div>
    </section>

  )
}

export default About
