import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Orders = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [filterStatus, setFilterStatus] = useState('all');
  const [isLoading, setIsLoading] = useState(false);

  // Mock orders data - replace with actual API call
  const [orders, setOrders] = useState([
    {
      id: 'TG-2024-001',
      title: 'Custom Logo Design',
      service: 'SVG Designing',
      status: 'completed',
      priority: 'high',
      date: '2024-09-01',
      deadline: '2024-09-05',
      amount: 299,
      progress: 100,
      client: 'John Doe',
      description: 'Modern minimalist logo for tech startup',
      deliverables: ['Logo files (SVG, PNG)', 'Brand guidelines', 'Color variations'],
      lastUpdate: '2024-09-05'
    },
    {
      id: 'TG-2024-002',
      title: 'Product Video Edit',
      service: 'Video Editing',
      status: 'in-progress',
      priority: 'high',
      date: '2024-09-03',
      deadline: '2024-09-10',
      amount: 599,
      progress: 75,
      client: 'Sarah Wilson',
      description: '2-minute product showcase video with motion graphics',
      deliverables: ['HD Video (1080p)', 'Social media cuts', 'Raw footage'],
      lastUpdate: '2024-09-07'
    },
    {
      id: 'TG-2024-003',
      title: 'E-commerce Website',
      service: 'Web Development',
      status: 'pending',
      priority: 'medium',
      date: '2024-09-06',
      deadline: '2024-09-20',
      amount: 1299,
      progress: 25,
      client: 'TechStore Inc.',
      description: 'Full-stack e-commerce platform with payment integration',
      deliverables: ['Responsive website', 'Admin panel', 'Documentation'],
      lastUpdate: '2024-09-06'
    },
    {
      id: 'TG-2024-004',
      title: 'Mobile App UI Design',
      service: 'UI/UX Design',
      status: 'revision',
      priority: 'high',
      date: '2024-08-28',
      deadline: '2024-09-08',
      amount: 899,
      progress: 90,
      client: 'StartupXYZ',
      description: 'Complete mobile app interface design with prototypes',
      deliverables: ['Figma designs', 'Prototype', 'Design system'],
      lastUpdate: '2024-09-07'
    },
    {
      id: 'TG-2024-005',
      title: 'YouTube Thumbnails',
      service: 'Thumbnail Editing',
      status: 'cancelled',
      priority: 'low',
      date: '2024-08-25',
      deadline: '2024-08-30',
      amount: 149,
      progress: 0,
      client: 'ContentCreator',
      description: 'Set of 10 eye-catching YouTube thumbnails',
      deliverables: ['10 Thumbnail designs', 'PSD files'],
      lastUpdate: '2024-08-26'
    }
  ]);

  const statusConfig = {
    pending: { color: 'bg-yellow-100 text-yellow-800 border-yellow-200', label: 'Pending' },
    'in-progress': { color: 'bg-blue-100 text-blue-800 border-blue-200', label: 'In Progress' },
    completed: { color: 'bg-green-100 text-green-800 border-green-200', label: 'Completed' },
    revision: { color: 'bg-orange-100 text-orange-800 border-orange-200', label: 'Revision' },
    cancelled: { color: 'bg-red-100 text-red-800 border-red-200', label: 'Cancelled' }
  };

  const priorityConfig = {
    low: { color: 'text-gray-500' },
    medium: { color: 'text-yellow-500'},
    high: { color: 'text-red-500'}
  };

  // Filter and sort orders
  const filteredOrders = orders
    .filter(order => {
      const matchesSearch = order.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           order.client.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = filterStatus === 'all' || order.status === filterStatus;
      const matchesTab = activeTab === 'all' || 
                        (activeTab === 'active' && ['pending', 'in-progress', 'revision'].includes(order.status)) ||
                        (activeTab === 'completed' && order.status === 'completed') ||
                        (activeTab === 'cancelled' && order.status === 'cancelled');
      return matchesSearch && matchesStatus && matchesTab;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'newest': return new Date(b.date) - new Date(a.date);
        case 'oldest': return new Date(a.date) - new Date(b.date);
        case 'amount-high': return b.amount - a.amount;
        case 'amount-low': return a.amount - b.amount;
        case 'deadline': return new Date(a.deadline) - new Date(b.deadline);
        default: return 0;
      }
    });

  const getProgressColor = (progress) => {
    if (progress >= 80) return 'bg-green-500';
    if (progress >= 50) return 'bg-blue-500';
    if (progress >= 25) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const isOverdue = (deadline, status) => {
    return new Date(deadline) < new Date() && !['completed', 'cancelled'].includes(status);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">My Orders</h1>
              <p className="text-lg text-gray-600">Track and manage your project orders</p>
            </div>
            <NavLink
              to="/services"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span></span>
              New Order
            </NavLink>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Total Orders', value: orders.length, color: 'from-blue-500 to-blue-600' },
            { label: 'Active', value: orders.filter(o => ['pending', 'in-progress', 'revision'].includes(o.status)).length, color: 'from-green-500 to-green-600' },
            { label: 'Completed', value: orders.filter(o => o.status === 'completed').length, color: 'from-purple-500 to-purple-600' },
            { label: 'Total Spent', value: `$${orders.reduce((sum, o) => sum + o.amount, 0).toLocaleString()}`, color: 'from-indigo-500 to-indigo-600' }
          ].map((stat, index) => (
            <div key={index} className={`bg-gradient-to-r ${stat.color} rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/80 text-sm font-medium">{stat.label}</p>
                  <p className="text-3xl font-bold mt-1">{stat.value}</p>
                </div>
                <div className="text-4xl opacity-80">{stat.icon}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs and Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {[
              { id: 'all', label: 'All Orders', count: orders.length },
              { id: 'active', label: 'Active', count: orders.filter(o => ['pending', 'in-progress', 'revision'].includes(o.status)).length },
              { id: 'completed', label: 'Completed', count: orders.filter(o => o.status === 'completed').length },
              { id: 'cancelled', label: 'Cancelled', count: orders.filter(o => o.status === 'cancelled').length }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab.label}
                <span className={`px-2 py-1 rounded-full text-xs ${
                  activeTab === tab.id ? 'bg-white/20' : 'bg-gray-300'
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          {/* Search and Filter Controls */}
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search orders by ID, title, or client..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                
              </div>
            </div>
            
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
              <option value="revision">Revision</option>
              <option value="cancelled">Cancelled</option>
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="amount-high">Highest Amount</option>
              <option value="amount-low">Lowest Amount</option>
              <option value="deadline">By Deadline</option>
            </select>
          </div>
        </div>

        {/* Orders List */}
        <div className="space-y-6">
          {filteredOrders.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl shadow-lg">
              <div className="text-6xl mb-4"></div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">No orders found</h3>
              <p className="text-gray-600 mb-6">
                {searchTerm ? 'Try adjusting your search terms' : 'Start by placing your first order'}
              </p>
              <NavLink
                to="/services"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300"
              >
                Browse Services
              </NavLink>
            </div>
          ) : (
            filteredOrders.map((order, index) => (
              <div
                key={order.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-indigo-200"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-6">
                  {/* Order Header */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{order.title}</h3>
                        {isOverdue(order.deadline, order.status) && (
                          <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-semibold border border-red-200">
                             Overdue
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="font-medium">Order ID: {order.id}</span>
                        <span>•</span>
                        <span>{order.service}</span>
                        <span>•</span>
                        <span>Client: {order.client}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-900">${order.amount}</div>
                        <div className="text-sm text-gray-500">Total Amount</div>
                      </div>
                      <div className={`flex items-center gap-2 px-4 py-2 rounded-xl border font-semibold ${statusConfig[order.status].color}`}>
                        <span>{statusConfig[order.status].icon}</span>
                        {statusConfig[order.status].label}
                      </div>
                    </div>
                  </div>

                  {/* Order Details Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                    {/* Progress Section */}
                    <div className="lg:col-span-2">
                      <div className="mb-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-700">Progress</span>
                          <span className="text-sm font-bold text-gray-900">{order.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                          <div 
                            className={`h-full ${getProgressColor(order.progress)} rounded-full transition-all duration-500 shadow-sm`}
                            style={{ width: `${order.progress}%` }}
                          />
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 rounded-xl p-4">
                        <h4 className="font-semibold text-gray-800 mb-2">Description</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{order.description}</p>
                      </div>
                    </div>

                    {/* Timeline Section */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl">
                        <div className="text-blue-600"></div>
                        <div>
                          <div className="text-sm text-gray-600">Order Date</div>
                          <div className="font-semibold text-gray-900">{formatDate(order.date)}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-xl">
                        <div className="text-orange-600"></div>
                        <div>
                          <div className="text-sm text-gray-600">Deadline</div>
                          <div className="font-semibold text-gray-900">{formatDate(order.deadline)}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-3 bg-green-50 rounded-xl">
                        <div className="text-green-600"></div>
                        <div>
                          <div className="text-sm text-gray-600">Last Update</div>
                          <div className="font-semibold text-gray-900">{formatDate(order.lastUpdate)}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Deliverables */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Deliverables</h4>
                    <div className="flex flex-wrap gap-2">
                      {order.deliverables.map((deliverable, idx) => (
                        <span key={idx} className="px-3 py-2 bg-indigo-50 text-indigo-700 rounded-lg text-sm font-medium border border-indigo-200">
                          {deliverable}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
                    <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-all duration-300 hover:scale-105">
                       View Details
                    </button>
                    
                    {order.status === 'in-progress' && (
                      <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-all duration-300 hover:scale-105">
                         Contact Team
                      </button>
                    )}
                    
                    {order.status === 'completed' && (
                      <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition-all duration-300 hover:scale-105">
                         Download Files
                      </button>
                    )}

                    {order.status === 'revision' && (
                      <button className="flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-xl font-semibold hover:bg-orange-700 transition-all duration-300 hover:scale-105">
                         Submit Feedback
                      </button>
                    )}

                    <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300 hover:scale-105">
                      Rate Service
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Load More Button (if pagination needed) */}
        {filteredOrders.length > 0 && (
          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-xl font-semibold hover:from-gray-200 hover:to-gray-300 transition-all duration-300 hover:scale-105 shadow-lg">
              Load More Orders
            </button>
          </div>
        )}
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Orders;
