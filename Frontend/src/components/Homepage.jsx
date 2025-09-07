import { NavLink } from 'react-router-dom';
import Marquee from 'react-fast-marquee';

const Homepage = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-20 text-center">
        <h1 className="text-6xl font-bold font-sans mb-4">Welcome to TechGiGs</h1>
        <p className="text-2xl font-medium">Your one-stop solution for all tech needs</p>
        <p className="text-xl mt-2">Design. Develop. Deliver.</p>
        <NavLink
          to="/contact"
          className="mt-6 inline-block bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
        >
          Get in Touch
        </NavLink>
      </div>

      {/* Marquee Section */}
      <Marquee speed={60} gradient={false} className="bg-gray-100 py-4 text-lg font-medium text-gray-700">
        💻 React • 🎨 Figma • 🖼️ SVG • 🎬 Premiere Pro • 🧠 AI Tools • ⚙️ Node.js • 🧩 MongoDB • ✨ Framer Motion • 🔐 JWT • 🚀 TailwindCSS
      </Marquee>

      {/* Services Grid */}
      <div className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { title: 'SVG Designing', link: '/Svgediting', icon: '🖌️' },
            { title: 'Video Editing', link: '/Videoediting', icon: '🎞️' },
            { title: 'Thumbnail Editing', link: '/Photoediting', icon: '🖼️' },
            { title: 'Web Development', link: '/Webdev', icon: '💻' },
            { title: 'UI/UX Design', link: '/Uiux', icon: '🎨' },
            { title: 'AI-Powered Tools', link: '/Aitools', icon: '🤖' },
          ].map(({ title, link, icon }) => (
            <NavLink
              key={title}
              to={link}
              className="border-2 border-gray-300 rounded-xl p-10 flex flex-col items-center justify-center shadow-md hover:shadow-xl hover:scale-105 transition-all bg-gray-50"
            >
              <div className="text-4xl mb-4">{icon}</div>
              <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
            </NavLink>
          ))}
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-indigo-600 text-white py-12 text-center">
        <h3 className="text-3xl font-bold mb-4">Ready to start your next project?</h3>
        <NavLink
          to="/contact"
          className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
        >
          Let’s Collaborate
        </NavLink>
      </div>
    </>
  );
};

export default Homepage;