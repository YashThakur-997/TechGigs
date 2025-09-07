import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    

<nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
        {/* Logo + Branding */}
        <div className="flex items-center space-x-3">
          <svg width="50" height="50" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="90" fill="#0088cc" />
            <polygon points="70,110 120,85 100,135 95,115 85,125" fill="#ffffff" />
            <text
              x="100"
              y="165"
              fontFamily="Arial, sans-serif"
              fontSize="28"
              fontWeight="bold"
              textAnchor="middle"
              fill="#ffffff"
            >
              TG
            </text>
          </svg>
          <span className="text-2xl font-semibold text-gray-800 dark:text-white">TechGiGs</span>
        </div>

        {/* Mobile Menu Button */}
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8" id="navbar-default">
          {[
            { label: 'Home', path: '/' },
            { label: 'About', path: '/About' },
            { label: 'Contact', path: '/Contact' },
            { label: 'Login', path: '/Login' },
          ].map(({ label, path }) => (
            <NavLink
              key={label}
              to={path}
              className={({ isActive }) =>
                `py-2 px-3 rounded-md font-medium transition ${
                  isActive
                    ? 'text-indigo-600 dark:text-indigo-400'
                    : 'text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>

  )
}

export default Navbar
