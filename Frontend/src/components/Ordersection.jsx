import { useState } from 'react';

const OrderSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: '',
    additionalServices: [],
    priority: 'normal',
    files: null
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const services = [
    'SVG Designing',
    'Video Editing', 
    'Thumbnail Editing',
    'Web Development',
    'UI/UX Design',
    'AI-Powered Tools'
  ];

  const budgetRanges = [
    '$500 - $1,000',
    '$1,000 - $2,500', 
    '$2,500 - $5,000',
    '$5,000 - $10,000',
    '$10,000+',
    'Let\'s discuss'
  ];

  const timelineOptions = [
    'ASAP (Rush)',
    '1 week',
    '2-4 weeks', 
    '1-2 months',
    '2-3 months',
    '3+ months'
  ];

  const additionalServices = [
    'SEO Optimization',
    'Content Writing',
    'Social Media Graphics',
    'Brand Guidelines',
    'Maintenance & Support',
    'Analytics Setup'
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox' && name === 'additionalServices') {
      setFormData(prev => ({
        ...prev,
        additionalServices: checked 
          ? [...prev.additionalServices, value]
          : prev.additionalServices.filter(service => service !== value)
      }));
    } else if (type === 'file') {
      setFormData(prev => ({ ...prev, [name]: e.target.files[0] }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-bounce mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-6">
              <span className="text-4xl">✅</span>
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-green-800 mb-6">
            Order Submitted Successfully!
          </h2>
          <p className="text-lg text-green-700 mb-8">
            Thank you for choosing TechGiGs! We'll review your requirements and get back to you within 24 hours.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors duration-300"
          >
            Submit Another Order
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50" id="order-section">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 bg-indigo-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 sm:right-20 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-800 mb-4 sm:mb-6">
            Place Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">Order</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Tell us about your project requirements and we'll deliver exceptional results tailored to your needs
          </p>
        </div>

        {/* Order Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12 border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            
            {/* Left Column - Contact Information */}
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="text-2xl">👤</span> Contact Information
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Company/Organization</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your company name"
                    />
                  </div>
                </div>
              </div>

              {/* Budget & Timeline */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="text-2xl">💰</span> Budget & Timeline
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Budget Range *</label>
                    <select
                      name="budget"
                      required
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map(range => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Project Timeline *</label>
                    <select
                      name="timeline"
                      required
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select timeline</option>
                      {timelineOptions.map(timeline => (
                        <option key={timeline} value={timeline}>{timeline}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Priority Level</label>
                    <div className="flex gap-4">
                      {['normal', 'high', 'urgent'].map(priority => (
                        <label key={priority} className="flex items-center">
                          <input
                            type="radio"
                            name="priority"
                            value={priority}
                            checked={formData.priority === priority}
                            onChange={handleInputChange}
                            className="mr-2 text-indigo-600 focus:ring-indigo-500"
                          />
                          <span className="capitalize text-sm font-medium text-gray-700">{priority}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Project Details */}
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="text-2xl">🎯</span> Project Details
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Primary Service *</label>
                    <select
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select a service</option>
                      {services.map(service => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Project Type</label>
                    <input
                      type="text"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                      placeholder="e.g., E-commerce website, Brand logo, Marketing video"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Project Description *</label>
                    <textarea
                      name="description"
                      required
                      rows={6}
                      value={formData.description}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Describe your project in detail. Include specific requirements, goals, target audience, style preferences, and any other important information..."
                    />
                  </div>
                </div>
              </div>

              {/* Additional Services */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="text-2xl">⚡</span> Additional Services
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {additionalServices.map(service => (
                    <label key={service} className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors duration-200 cursor-pointer">
                      <input
                        type="checkbox"
                        name="additionalServices"
                        value={service}
                        checked={formData.additionalServices.includes(service)}
                        onChange={handleInputChange}
                        className="mr-3 text-indigo-600 focus:ring-indigo-500 rounded"
                      />
                      <span className="text-sm font-medium text-gray-700">{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* File Upload */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Upload Files <span className="text-gray-500">(Optional)</span>
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-indigo-400 transition-colors duration-300">
                  <input
                    type="file"
                    name="files"
                    onChange={handleInputChange}
                    multiple
                    className="hidden"
                    id="file-upload"
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <div className="text-4xl mb-2">📎</div>
                    <p className="text-sm text-gray-600">
                      Click to upload reference files, images, or documents
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Supported: JPG, PNG, PDF, DOC, etc. (Max 10MB each)
                    </p>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                type="submit"
                disabled={isLoading}
                className="group relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold px-12 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl disabled:opacity-70 disabled:cursor-not-allowed min-w-[200px]"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isLoading ? (
                    <>
                      <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      Submit Order
                      <span className="group-hover:translate-x-1 transition-transform duration-300">🚀</span>
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              
              <p className="text-sm text-gray-500 text-center">
                By submitting, you agree to our terms of service and privacy policy
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderSection;
