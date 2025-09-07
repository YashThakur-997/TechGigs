import React from 'react'

const footer = () => {
  return (
    <div className="bg-gray-800 text-white text-center p-4 mt-8">
      Copyright © 2025 TechGiGs. All rights reserved.
      <p>Follow us on social media for updates and news.</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="https://facebook.com" className="text-blue-500 hover:text-blue-700">Facebook</a>
        <a href="https://twitter.com" className="text-blue-400 hover:text-blue-600">Twitter</a>
        <a href="https://instagram.com" className="text-pink-500 hover:text-pink-700">Instagram</a>
        <a href="https://linkedin.com" className="text-blue-700 hover:text-blue-900">LinkedIn</a> 
      </div>
    </div>
  )
}

export default footer
