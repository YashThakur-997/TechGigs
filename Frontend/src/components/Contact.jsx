import React from 'react'

const Contact = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-xl p-8">
        <h2 className="text-4xl font-bold text-center text-indigo-600 mb-6">Let's Connect</h2>
        <p className="text-center text-gray-600 mb-10">
          Whether you're a startup, creator, or fellow dev—I'd love to hear from you.
        </p>

        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              rows="5"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Tell me about your project or idea..."
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      {/* Optional CTA Section */}
      <div className="mt-16 text-center">
        <p className="text-lg text-gray-700">Prefer email?</p>
        <a href="mailto:hello@techgigs.dev" className="text-indigo-600 font-semibold hover:underline">
          hello@techgigs.dev
        </a>
      </div>
    </section>

  )
}

export default Contact
