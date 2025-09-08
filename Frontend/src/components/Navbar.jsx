import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle mouse movement for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const menuItems = [
    { label: 'Home', path: '/'},
    { label: 'Orders', path: '/Orders'},
    { label: 'About', path: '/About'},
    { label: 'Contact', path: '/Contact'},
    { label: 'Login', path: '/Login'},
  ];

  return (
    <>
      {/* Backdrop blur overlay for mobile menu */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <nav 
        className={`
          bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200/20 dark:border-gray-700/20
          sticky top-0 z-50 transition-all duration-500 ease-out
          ${scrolled ? 'shadow-2xl shadow-indigo-500/10' : 'shadow-md'}
        `}
        style={{
          background: scrolled 
            ? 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(249,250,251,0.95) 100%)'
            : 'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(249,250,251,0.8) 100%)'
        }}
      >
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5 animate-gradient-x" />
        
        <div className="max-w-screen-xl mx-auto p-4 relative">
          <div className="flex items-center justify-between">
            {/* Enhanced Logo with 3D effect */}
            <div className="flex items-center space-x-3 group">
              <div className="relative transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                <svg 
                  width="50" 
                  height="50" 
                  viewBox="0 0 200 200" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="relative z-10 drop-shadow-lg"
                >
                  <defs>
                    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="50%" stopColor="#8B5CF6" />
                      <stop offset="100%" stopColor="#EC4899" />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                      <feMerge> 
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  <circle cx="100" cy="100" r="90" fill="url(#logoGradient)" filter="url(#glow)" />
                  <polygon 
                    points="70,110 120,85 100,135 95,115 85,125" 
                    fill="#ffffff" 
                    className="drop-shadow-sm"
                  />
                  <text
                    x="100"
                    y="165"
                    fontFamily="Arial, sans-serif"
                    fontSize="28"
                    fontWeight="bold"
                    textAnchor="middle"
                    fill="#ffffff"
                    className="drop-shadow-sm"
                  >
                    TG
                  </text>
                </svg>
              </div>
              <div className="relative">
                <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x">
                  TechGiGs
                </span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-500" />
              </div>
            </div>

            {/* Enhanced Hamburger Menu */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="md:hidden relative p-3 rounded-xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 
                         hover:from-indigo-500/20 hover:to-purple-500/20 backdrop-blur-sm
                         border border-indigo-200/30 dark:border-indigo-700/30
                         transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
                <span className={`block w-6 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                <span className={`block w-6 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-6 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
              </div>
            </button>
          </div>

          {/* Enhanced Navigation Menu */}
          <div
            className={`
              overflow-hidden transition-all duration-500 ease-out
              ${isOpen ? 'max-h-96 mt-6 opacity-100' : 'max-h-0 mt-0 opacity-0 md:opacity-100'}
              md:max-h-none md:mt-4 md:flex md:items-center md:justify-center
            `}
          >
            <ul className="flex flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0 md:bg-gray-50/50 md:dark:bg-gray-800/50 md:backdrop-blur-sm md:rounded-2xl md:p-2 md:border md:border-gray-200/30 md:dark:border-gray-700/30">
              {menuItems.map(({ label, path, icon }, index) => (
                <li key={label} className="relative group">
                  <NavLink
                    to={path}
                    className={({ isActive }) => `
                      relative flex items-center space-x-3 px-6 py-3 rounded-xl font-medium 
                      transition-all duration-300 hover:scale-105 active:scale-95
                      ${isActive
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/25 transform translate-y-0'
                        : 'text-gray-700 hover:text-white dark:text-gray-300 hover:bg-gradient-to-r hover:from-indigo-500/80 hover:to-purple-600/80 hover:shadow-lg hover:shadow-indigo-500/20'
                      }
                      overflow-hidden
                    `}
                    style={{
                      animationDelay: `${index * 100}ms`
                    }}
                  >
                    {/* Animated background for hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                    
                    {/* Icon with animation */}
                    <span className="text-lg transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                      {icon}
                    </span>
                    
                    {/* Label with subtle animation */}
                    <span className="relative z-10 font-semibold tracking-wide">
                      {label}
                    </span>
                    
                    {/* Hover effect particles */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <div className="absolute -top-2 -left-2 w-4 h-4 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping" style={{ animationDelay: '0ms' }} />
                      <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping" style={{ animationDelay: '150ms' }} />
                    </div>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-indigo-400/30 rounded-full animate-float"
              style={{
                left: `${20 + i * 15}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i * 0.5}s`
              }}
            />
          ))}
        </div>
      </nav>

      {/* Custom styles */}
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0; }
          50% { transform: translateY(-20px) translateX(10px); opacity: 1; }
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 6s ease infinite;
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default Navbar;
