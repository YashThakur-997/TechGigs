import React, { useState, useEffect } from 'react';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isVisible, setIsVisible] = useState({});
  const [hoveredProject, setHoveredProject] = useState(null);

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

  const categories = [
    { id: 'all', name: 'All Projects', icon: '🎯' },
    { id: 'web', name: 'Web Development', icon: '💻' },
    { id: 'design', name: 'UI/UX Design', icon: '🎨' },
    { id: 'video', name: 'Video Editing', icon: '🎞️' },
    { id: 'svg', name: 'SVG Design', icon: '🖌️' },
    { id: 'thumbnail', name: 'Thumbnails', icon: '🖼️' },
    { id: 'ai', name: 'AI Tools', icon: '🤖' }
  ];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      description: 'Modern responsive e-commerce platform with advanced filtering, payment integration, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      client: 'TechStore Inc.',
      duration: '3 months',
      status: 'Completed',
      link: '#',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'Brand Identity Design',
      category: 'design',
      description: 'Complete brand identity including logo, color palette, typography, and brand guidelines.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
      technologies: ['Figma', 'Adobe Illustrator', 'After Effects'],
      client: 'StartupXYZ',
      duration: '6 weeks',
      status: 'Completed',
      link: '#',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      title: 'YouTube Channel Promo',
      category: 'video',
      description: 'High-energy promotional video with motion graphics, custom animations, and professional editing.',
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop',
      technologies: ['After Effects', 'Premiere Pro', 'Cinema 4D'],
      client: 'Content Creator',
      duration: '2 weeks',
      status: 'Completed',
      link: '#',
      gradient: 'from-red-500 to-orange-500'
    },
    {
      id: 4,
      title: 'Interactive SVG Icons',
      category: 'svg',
      description: 'Set of 50+ animated SVG icons with hover effects and micro-interactions for web applications.',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&h=400&fit=crop',
      technologies: ['SVG', 'CSS3', 'JavaScript', 'GSAP'],
      client: 'Design Agency',
      duration: '3 weeks',
      status: 'Completed',
      link: '#',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      id: 5,
      title: 'Mobile App Interface',
      category: 'design',
      description: 'Clean and intuitive mobile app design with user-centered approach and seamless navigation.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
      technologies: ['Figma', 'Principle', 'Sketch', 'InVision'],
      client: 'FinTech Startup',
      duration: '8 weeks',
      status: 'In Progress',
      link: '#',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      id: 6,
      title: 'Gaming Thumbnails Pack',
      category: 'thumbnail',
      description: 'Eye-catching thumbnail designs for gaming YouTube channel with consistent branding.',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop',
      technologies: ['Photoshop', 'Illustrator', 'After Effects'],
      client: 'Gaming YouTuber',
      duration: '1 week',
      status: 'Completed',
      link: '#',
      gradient: 'from-yellow-500 to-red-500'
    },
    {
      id: 7,
      title: 'AI Content Generator',
      category: 'ai',
      description: 'Custom AI tool for automated content generation with natural language processing capabilities.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
      technologies: ['Python', 'OpenAI API', 'React', 'FastAPI'],
      client: 'Marketing Agency',
      duration: '2 months',
      status: 'In Progress',
      link: '#',
      gradient: 'from-violet-500 to-purple-500'
    },
    {
      id: 8,
      title: 'Corporate Website',
      category: 'web',
      description: 'Professional corporate website with CMS integration, SEO optimization, and analytics.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      technologies: ['Next.js', 'Tailwind CSS', 'Sanity CMS'],
      client: 'Legal Firm',
      duration: '5 weeks',
      status: 'Completed',
      link: '#',
      gradient: 'from-gray-600 to-blue-600'
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const stats = [
    { number: '150+', label: 'Projects Completed', icon: '✅' },
    { number: '98%', label: 'Client Satisfaction', icon: '😊' },
    { number: '50+', label: 'Happy Clients', icon: '🤝' },
    { number: '24/7', label: 'Support Available', icon: '🛟' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/5 via-purple-900/5 to-pink-900/5" />
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full animate-float-random"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <div className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-800 mb-6">
            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">Portfolio</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Showcasing our finest work and creative solutions that have helped clients achieve their digital goals
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12" id="stats" data-animate>
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className={`bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 ${isVisible.stats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-2xl sm:text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-indigo-600 mb-1">{stat.number}</div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="relative px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`group flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 shadow-md hover:shadow-lg'
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="relative px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group relative overflow-hidden bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <a
                        href={project.link}
                        className="inline-flex items-center gap-2 bg-white text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
                      >
                        View Project <span>→</span>
                      </a>
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === 'Completed' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {project.status}
                  </div>

                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                </div>

                {/* Project Content */}
                <div className="p-6 sm:p-8">
                  <div className="mb-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span className="font-semibold">Client:</span> {project.client}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span className="font-semibold">Duration:</span> {project.duration}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-gray-700">Technologies Used:</div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full group-hover:bg-indigo-100 group-hover:text-indigo-700 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover Effect Particles */}
                {hoveredProject === project.id && (
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className={`absolute w-2 h-2 bg-gradient-to-r ${project.gradient} rounded-full animate-ping`}
                        style={{
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                          animationDelay: `${i * 200}ms`,
                          animationDuration: '2s'
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">No projects found</h3>
              <p className="text-gray-600">Try selecting a different category</p>
            </div>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/20 rounded-full blur-2xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-pink-300/30 rounded-full blur-3xl animate-bounce" style={{ animationDuration: '4s' }} />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6">
            Ready to Start Your 
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-pink-300">
              Next Project?
            </span>
          </h3>
          <p className="text-lg sm:text-xl mb-8 text-blue-100">
            Let's collaborate and create something amazing together
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="group relative overflow-hidden bg-white text-indigo-600 font-bold px-8 sm:px-10 py-3 sm:py-4 rounded-full hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-white/25"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Started Today
                <span className="group-hover:translate-x-1 transition-transform duration-300">🚀</span>
              </span>
            </a>
            
            <a
              href="/orders"
              className="group border-2 border-white/50 text-white font-bold px-8 sm:px-10 py-3 sm:py-4 rounded-full hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              Place an Order
              <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block ml-2">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
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
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-float-random {
          animation: float-random 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
