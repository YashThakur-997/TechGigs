import React from 'react'

const PhotoEditing = () => {
  return (
     <div className="bg-gray-50 min-h-screen px-6 md:px-20 py-16">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-6xl font-bold text-indigo-600">Welcome to Thumbnail Editing</h1>
        <p className="mt-4 text-xl text-gray-700">
          Learn how to design scroll-stopping thumbnails that boost views and build your brand.
        </p>
      </div>

      {/* Learning Resources */}
      <div className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Top Video Tutorials</h2>
        <ul className="space-y-6 text-gray-700 text-lg list-disc list-inside">
          <li>
            🎯 [How to edit THUMBNAILS like Mr. Beast!](https://www.youtube.com/watch?v=kjZXkWFGV3o) breaks down advanced techniques like dodge & burn, rim lighting, and skin tone correction to create high-impact visuals.
          </li>
          <li>
            🧩 [YouTube Thumbnail Templates: Easy Design in Adobe ...](https://www.youtube.com/watch?v=jJErTvRMANA) teaches you how to build reusable templates, maintain brand consistency, and use AI to enhance designs.
          </li>
          <li>
            🚀 [How to Make Thumbnails That Get Views (NO EXPERIENCE ...)](https://www.youtube.com/watch?v=AR1RjNQdpzc) is perfect for beginners—covering poses, color adjustments, text placement, and mobile testing.
          </li>
          <li>
            🎬 [How to Make Engaging YouTube Thumbnails with Filmora](https://www.youtube.com/watch?v=p6Vgr81vdKo&vl=en) shows how to use Filmora to create thumbnails for both long-form and Shorts content.
          </li>
          <li>
            📦 [YouTube Thumbnail Full Course make Click worthy ...](https://www.youtube.com/watch?v=u9U53ieYAdk) is a deep dive into Adobe Express, A/B testing, and thumbnail psychology—ideal for serious creators.
          </li>
          <li>
            ✨ [How to create a stunning YouTube thumbnail](https://www.youtube.com/watch?v=X_TSmm2p0wk) walks through background removal, tone editing, and drop-shadow effects using Glorify.
          </li>
        </ul>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Want to design thumbnails like a pro?</h3>
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition">
          Start Designing Now
        </button>
      </div>
    </div>

  )
}

export default PhotoEditing
