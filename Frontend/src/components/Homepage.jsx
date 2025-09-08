import { NavLink } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import Marquee from 'react-fast-marquee';

const Homepage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState({});
  const heroRef = useRef(null);
  const servicesRef = useRef(null);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const services = [
    { 
      title: 'SVG Designing', 
      link: '/Svgediting', 
      icon: '🖌️',
      description: 'Scalable vector graphics that look perfect at any size',
      gradient: 'from-pink-500 to-rose-500'
    },
    { 
      title: 'Video Editing', 
      link: '/Videoediting', 
      icon: '🎞️',
      description: 'Professional video editing with cinematic quality',
      gradient: 'from-purple-500 to-indigo-500'
    },
    { 
      title: 'Thumbnail Editing', 
      link: '/Photoediting', 
      icon: '🖼️',
      description: 'Eye-catching thumbnails that drive engagement',
      gradient: 'from-blue-500 to-cyan-500'
    },
    { 
      title: 'Web Development', 
      link: '/Webdev', 
      icon: '💻',
      description: 'Modern, responsive websites built for performance',
      gradient: 'from-green-500 to-emerald-500'
    },
    { 
      title: 'UI/UX Design', 
      link: '/Uiux', 
      icon: '🎨',
      description: 'User-centered design that converts and delights',
      gradient: 'from-yellow-500 to-orange-500'
    },
    { 
      title: 'AI-Powered Tools', 
      link: '/Aitools', 
      icon: '🤖',
      description: 'Cutting-edge AI solutions for modern challenges',
      gradient: 'from-violet-500 to-purple-500'
    },
  ];

  const testimonials = [
    "TechGiGs transformed our digital presence completely!",
    "Lightning-fast delivery with exceptional quality",
    "Innovative solutions that exceeded our expectations",
    "Perfect attention to detail in every project",
    "The team's creativity is simply outstanding",
    "Professional service with a personal touch"
  ];

  return (
    <>
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/5 via-purple-900/5 to-pink-900/5" />
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-indigo-400/30 to-purple-400/30 rounded-full animate-float-random"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Enhanced Hero Section - RESPONSIVE FIXES */}
      <div 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8"
        style={{
          background: `
            radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
            linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)
          `
        }}
      >
        {/* Animated geometric shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-16 h-16 sm:w-32 sm:h-32 bg-white/10 rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-12 h-12 sm:w-24 sm:h-24 bg-pink-300/20 rounded-full blur-lg animate-bounce" style={{ animationDuration: '3s' }} />
          <div className="absolute top-1/2 left-1/4 w-8 h-8 sm:w-16 sm:h-16 bg-indigo-300/20 rotate-45 blur-md animate-spin" style={{ animationDuration: '8s' }} />
        </div>

        <div className="relative z-10 text-center text-white max-w-6xl mx-auto w-full">
          <div className="mb-6 sm:mb-8 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-pink-100 leading-tight animate-gradient-x">
              Welcome to
            </h1>
            <div className="relative inline-block">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-gradient-x relative z-10 leading-none">
                TechGiGs
              </h1>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 blur-2xl sm:blur-3xl opacity-30 animate-pulse" />
            </div>
          </div>
          
          <div className="space-y-2 sm:space-y-4 mb-8 sm:mb-12 animate-fade-in-up px-4" style={{ animationDelay: '0.3s' }}>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-blue-100">
              Your one-stop solution for all tech needs
            </p>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium text-purple-100">
              Design. Develop. Deliver.
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-pink-100 max-w-3xl mx-auto leading-relaxed">
              Transforming ideas into digital reality with cutting-edge technology and creative excellence
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-fade-in-up px-4" style={{ animationDelay: '0.6s' }}>
            <NavLink
              to="/contact"
              className="group relative overflow-hidden bg-white text-indigo-600 font-bold px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-full hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-white/25 text-sm sm:text-base"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Started 
                <span className="group-hover:translate-x-1 transition-transform duration-300"></span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </NavLink>
            
             <NavLink
              to="/orders"
              className="group relative overflow-hidden bg-gradient-to-r from-indigo-500 to-teal-500 text-white font-bold px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-full hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-emerald-300/25 text-sm sm:text-base"
            >
              <span className="relative z-10 flex items-center gap-2">
                Place Orders 
                <span className="group-hover:translate-x-1 transition-transform duration-300"></span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </NavLink>
            
            <NavLink
              to="/about"
              className="group border-2 border-white/50 text-white font-bold px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-full hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105 text-sm sm:text-base"
            >
              Learn More
              <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block ml-2">→</span>
            </NavLink>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Testimonials Marquee */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 py-6 sm:py-8 border-y border-indigo-100">
        <Marquee speed={50} gradient={false} className="text-indigo-600 font-semibold text-sm sm:text-base lg:text-lg">
          {testimonials.map((testimonial, index) => (
            <span key={index} className="mx-4 sm:mx-8 whitespace-nowrap">
              {testimonial}
            </span>
          ))}
        </Marquee>
      </div>

      {/* Enhanced Services Section - RESPONSIVE FIXES */}
      <div 
        ref={servicesRef}
        className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-20 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden"
        id="services"
        data-animate
      >
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 bg-indigo-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 sm:right-20 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-800 mb-4 sm:mb-6 transition-all duration-1000 ${isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">Services</span>
            </h2>
            <p className={`text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-200 px-4 ${isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Comprehensive solutions tailored to elevate your digital presence and drive success
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map(({ title, link, icon, description, gradient }, index) => (
              <NavLink
                key={title}
                to={link}
                className={`group relative overflow-hidden bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100 ${isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  transitionDelay: `${index * 50}ms`
                }}
              >
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-all duration-500`} />
                
                {/* Floating icon background */}
                <div className="absolute top-4 right-4 opacity-5 text-6xl sm:text-8xl group-hover:opacity-10 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
                  {icon}
                </div>

                <div className="relative z-10">
                  <div className="mb-4 sm:mb-6">
                    <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${gradient} rounded-xl sm:rounded-2xl text-white text-lg sm:text-2xl mb-3 sm:mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                      {icon}
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-2 sm:mb-3 group-hover:text-gray-900 transition-colors duration-300">
                      {title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {description}
                    </p>
                  </div>

                  <div className="flex items-center text-indigo-600 font-semibold group-hover:text-indigo-700 transition-all duration-300 text-sm sm:text-base">
                    Learn More 
                    <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
                  </div>
                </div>

                {/* Hover effect particles */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className={`absolute w-1 h-1 sm:w-2 sm:h-2 bg-gradient-to-r ${gradient} rounded-full animate-ping`}
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${i * 200}ms`,
                        animationDuration: '2s'
                      }}
                    />
                  ))}
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced CTA Section - RESPONSIVE FIXES */}
      <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-16 sm:py-20 overflow-hidden px-4 sm:px-6 lg:px-8">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-16 h-16 sm:w-32 sm:h-32 bg-white/10 rounded-full blur-2xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-24 h-24 sm:w-48 sm:h-48 bg-pink-300/20 rounded-full blur-3xl animate-bounce" style={{ animationDuration: '4s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-96 sm:h-96 bg-purple-300/10 rounded-full blur-3xl animate-spin" style={{ animationDuration: '20s' }} />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 animate-fade-in-up leading-tight">
            Ready to start your 
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-pink-300">
              next project?
            </span>
          </h3>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-blue-100 animate-fade-in-up px-4" style={{ animationDelay: '0.2s' }}>
            Let's collaborate and bring your vision to life with cutting-edge technology
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <NavLink
              to="/contact"
              className="group relative overflow-hidden bg-white text-indigo-600 font-bold px-8 sm:px-10 lg:px-12 py-3 sm:py-4 rounded-full hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-white/25 text-sm sm:text-base"
            >
              <span className="relative z-10 flex items-center gap-2">
                Let's Collaborate 
                <span className="group-hover:translate-x-1 transition-transform duration-300"></span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </NavLink>

            <NavLink
              to="/portfolio"
              className="group border-2 border-white/50 text-white font-bold px-8 sm:px-10 lg:px-12 py-3 sm:py-4 rounded-full hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105 text-sm sm:text-base"
            >
              View Portfolio
              <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block ml-2"></span>
            </NavLink>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float-random {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(0deg); 
            opacity: 0;
          }
          25% { 
            transform: translateY(-20px) translateX(10px) rotate(90deg); 
            opacity: 0.5;
          }
          50% { 
            transform: translateY(-40px) translateX(-10px) rotate(180deg); 
            opacity: 1;
          }
          75% { 
            transform: translateY(-20px) translateX(15px) rotate(270deg); 
            opacity: 0.5;
          }
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 6s ease infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-float-random {
          animation: float-random 8s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default Homepage;
