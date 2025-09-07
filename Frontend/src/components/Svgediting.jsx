const Svgediting = () => {
  return (
    <div className="bg-gray-50 min-h-screen px-6 md:px-20 py-16">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-6xl font-bold text-indigo-600">Welcome to SVG Development</h1>
        <p className="mt-4 text-xl text-gray-700">
          Crafting scalable, animated, and responsive vector graphics for modern web experiences.
        </p>
      </div>

      {/* Showcase Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Featured SVG Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {['Logo Animation', 'Interactive Icons', 'Custom Illustrations'].map((title, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-xl transition">
              <div className="h-40 flex items-center justify-center bg-gray-100 rounded-lg mb-4">
                <span className="text-4xl">🎨</span>
              </div>
              <h3 className="text-xl font-bold text-indigo-600 mb-2">{title}</h3>
              <p className="text-gray-600 text-sm">
                High-quality SVG assets optimized for performance and visual impact.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Tools & Tech Stack */}
      <div className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Tools & Technologies</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center text-gray-700 font-medium">
          <li className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md">Figma</li>
          <li className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md">SVGator</li>
          <li className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md">Framer Motion</li>
          <li className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md">React</li>
          <li className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md">Inkscape</li>
          <li className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md">GSAP</li>
        </ul>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Need custom SVGs for your project?</h3>
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition">
          Request a Design
        </button>
      </div>
    </div>

  )
}

export default Svgediting
