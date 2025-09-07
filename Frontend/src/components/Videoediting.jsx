import React from 'react'

const Videoediting = () => {
  return (
    <div className="bg-gray-50 min-h-screen px-6 md:px-20 py-16">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-6xl font-bold text-indigo-600">Welcome to Video Editing</h1>
        <p className="mt-4 text-xl text-gray-700">
          Craft compelling visuals, tell unforgettable stories, and build a portfolio that lands clients.
        </p>
      </div>

      {/* Portfolio Tips Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">How to Build a Killer Portfolio</h2>
        <ul className="space-y-4 text-gray-700 text-lg">
          <li>
            🎯 [THIS Video Editor Portfolio Lands MORE Clients](https://www.youtube.com/watch?v=euIcBIA2j6o) breaks down winning portfolio structures and explains how to present your work to attract serious clients.
          </li>
          <li>
            🚀 [THIS Video Editing Portfolio Converts Like CRAZY!!!](https://www.youtube.com/watch?v=qgacIKW66VY) shows real examples of optimized portfolios and how to use growth hacking to boost visibility.
          </li>
          <li>
            ✅ [Good vs Bad Demo Reels - Video Editor Reacts](https://www.youtube.com/watch?v=b3eu7Yxteyw) helps you spot common mistakes and refine your reel for maximum impact.
          </li>
          <li>
            🧠 [What Makes a Great Video Portfolio?](https://www.youtube.com/watch?v=APR7bp8gRBY) dives into hosting, presentation, and tips for showcasing celebrity work or press features.
          </li>
          <li>
            🎬 [How to Create Your First Product Showcase Video | Filmora ...](https://www.youtube.com/watch?v=YU6OK3gTmqM) is perfect for beginners looking to build cinematic product videos with transitions, music, and effects.
          </li>
          <li>
            🔥 [Don't Hide Your Skills - Ultimate Guide To Video Editing ...](https://www.youtube.com/watch?v=WQr7FJgFwco) teaches how to properly showcase your editing skills so they don’t go unnoticed.
          </li>
        </ul>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to build your reel?</h3>
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition">
          Start Editing Now
        </button>
      </div>
    </div>

  )
}

export default Videoediting
