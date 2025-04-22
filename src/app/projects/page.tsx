'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

// Project data array
const projects = [
  {
    id: 'digital-canvas',
    title: 'Digital and Canvas E-Commerce',
    role: 'E-Commerce Developer',
    techStack: 'Shopify E-Commerce',
    description: 'My Shopify-based e-commerce store showcases stunning landscape photographs and paintings that celebrate the breathtaking beauty of nature in all its glory.',
    image: '/aindustries-preview-4x3.jpeg'
  },
  {
    id: 'solar-solutions',
    title: 'Solar Solutions and Services',
    role: 'E-Commerce Developer & Digital Marketing Specialist',
    techStack: 'Squarespace E-Commerce',
    description: 'An Australian solar solutions company devoted to driving environmental sustainability and social progress by delivering innovative, cost-effective solar energy solutions that empower clients to thrive.',
    image: '/solar-solutions-preview-4x3.jpeg'
  },
  {
    id: 'ecommerce-system',
    title: 'E-Commerce System',
    role: 'Full-Stack Developer',
    techStack: 'Adobe Commerce | Ruby on Rails | PostgreSQL | EmberJS | AWS',
    description: 'A service designed to facilitate online sales for clients, featuring key components such as an online storefront, product catalog, and shopping cart. It leverages Magento Rest APIs to automate product listing exports, while order and inventory management are seamlessly integrated with the client\'s ERP SaaS platform.',
    image: '/bcc-preview-4x3.jpeg'
  },
  {
    id: 'movie-database',
    title: 'Movie Database Application',
    role: 'Full-Stack Developer',
    techStack: 'ReactJS | NodeJS | Cursor AI | Claude-3.5 Sonnet | Vercel',
    description: 'This cinematic discovery platform, engineered with advanced AI collaboration via Cursor AI and Claude 3.5 Sonnet, spotlights deserving Featured Films, delivers essential Weekly Top 5 selections, and compiles definitive Monthly Top 20 Rankings—all designed to elevate your film exploration experience.',
    image: '/rradar-preview-4x3.jpeg'
  },
  {
    id: 'yellow-pages',
    title: 'Online Yellow Pages',
    role: 'Back-End Developer',
    techStack: 'Ruby on Rails | Oracle | JQuery',
    description: 'An online Yellow Pages platform that serves as a comprehensive hub for quickly and easily locating local businesses, services, and professionals. It provides an intuitive and user-friendly experience, allowing you to search for and connect with the best businesses in your area.',
    image: '/yp-preview-4x3.jpeg'
  },
  {
    id: 'website-builder',
    title: 'Website Builder',
    role: 'Back-End Developer',
    techStack: 'Ruby on Rails | MongoDB | JQuery',
    description: 'A web-based application for building web pages using a WYSIWYG editor. It provides an easy way for those without HTML knowledge to create and launch a website, featuring a variety of drag-and-drop widgets for customization.',
    image: '/ifl-preview-4x3.jpeg'
  },
  {
    id: 'payment-system',
    title: 'Online Payment System',
    techStack: 'JRuby | Rails | MariaDB | AngularJS | Asterisk',
    description: 'A service that allows friends and family to make deposits to user\'s account. Deposits are made via the following methods: Credit card, phone call interactive voice response and facility lobby kiosks.',
    image: '/gp-preview-4x3.jpeg'
  },
  {
    id: 'admin-hub',
    title: 'Cloud-based Admin Hub',
    techStack: 'JRuby | Rails | MariaDB | ReactJS | ElasticSearch',
    description: 'An application that provides a single user interface for administration of various services. Integrated within a SaaS platform for a US based company that provides communication services and solutions for incarcerated individuals and their loved ones.',
    image: '/ada-preview-4x3.jpeg'
  },
  {
    id: 'health-prediction',
    title: 'Employee Health Prediction',
    techStack: 'Ruby on Rails | PostgreSQL | Angular | AWS',
    description: 'A machine learning-powered occupational health solution designed to predict a candidate\'s fitness. It uses a health questionnaire and sophisticated algorithms to predict outcomes with 88-92% accuracy. This tool helps organizations manage hiring speeds and costs effectively. Integrated within an occupational health SaaS platform.',
    image: '/ehp-preview-4x3.jpeg'
  }
];

export default function Projects() {
  const pathname = usePathname();
  const [visibleProjects, setVisibleProjects] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  
  // Initial load animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleProjects(6);
      setIsInitialLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleProjects(prev => Math.min(prev + 3, projects.length));
      setIsLoading(false);
    }, 800);
  };

  return (
    <motion.div 
      className="fixed inset-0 flex flex-col bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {/* Header/Navigation */}
      <header className="relative z-20 bg-white flex-shrink-0">
        <nav className="container mx-auto px-6 py-8 flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-[#0066FF]"></div>
              <span className="text-xl font-bold text-gray-900">New Aguda</span>
            </div>
            <div className="hidden md:block text-sm text-gray-600 ml-4">
              <span className="tracking-wider">/ SOFTWARE ENGINEER | RUBY ON RAILS | E-COMMERCE | AGILE</span>
            </div>
          </div>
          <div className="flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-600 hover:text-gray-900 hover:line-through hover:decoration-[#0066FF] hover:decoration-2 text-sm font-medium"
            >
              ABOUT
            </Link>
            <Link 
              href="/projects" 
              className={`text-gray-600 hover:text-gray-900 hover:line-through hover:decoration-[#0066FF] hover:decoration-2 text-sm font-medium ${
                pathname === '/projects' ? 'line-through decoration-[#0066FF] decoration-2' : ''
              }`}
            >
              PROJECTS
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-600 hover:text-gray-900 hover:line-through hover:decoration-[#0066FF] hover:decoration-2 text-sm font-medium"
            >
              CONTACT
            </Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <motion.main 
        className="flex-1 relative overflow-y-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Background Image */}
        <div className="fixed inset-0 z-0">
          <Image
            src="/dotnew-bg-mac-coffee-camera.jpg"
            alt="Workspace with MacBook, coffee, and camera"
            fill
            priority
            className="object-cover opacity-[0.75]"
          />
        </div>
        
        <div className="relative z-10">
          <motion.div 
            className="container mx-auto px-6 py-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="max-w-4xl mx-auto">
              {/* Section Title */}
              <div className="mb-12 text-center">
                <div className="inline-flex items-center space-x-2">
                  <div className="w-4 h-4 bg-[#0066FF]"></div>
                  <h1 className="text-4xl font-bold text-white">Key Projects</h1>
                </div>
                <div className="mt-6 bg-black/[0.03] backdrop-blur-sm rounded-lg p-6">
                  <p className="text-white text-lg max-w-3xl mx-auto">
                    Throughout my professional journey and freelance endeavors, I've had the privilege of 
                    working on a wide range of projects. These experiences have honed my skills and 
                    broadened my expertise. Here are some notable highlights.
                  </p>
                </div>
              </div>

              {/* Initial Loading State */}
              {isInitialLoading ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <div className="relative w-48 h-2 bg-white/20 rounded-full overflow-hidden mb-4">
                    <motion.div
                      className="absolute inset-y-0 left-0 bg-[#0066FF] rounded-full"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{
                        duration: 2,
                        ease: "easeInOut"
                      }}
                    />
                  </div>
                  <p className="text-white text-lg">Loading Projects...</p>
                </div>
              ) : (
                <>
                  {/* Projects Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.slice(0, visibleProjects).map((project) => (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white shadow-lg relative overflow-hidden group"
                      >
                        <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 bg-black/85 transition-opacity duration-300">
                          <Image
                            src={project.image}
                            alt={`${project.title} Full Preview`}
                            fill
                            className="object-contain p-8"
                          />
                        </div>
                        <div className="h-48 relative">
                          <Image
                            src={project.image}
                            alt={`${project.title} Preview`}
                            fill
                            className="object-cover object-top"
                          />
                        </div>
                        <div className="p-8 relative z-10">
                          <div className="mb-6">
                            <div className="flex items-start space-x-4 mb-4">
                              <div className="w-1.5 h-8 bg-[#0066FF] flex-shrink-0"></div>
                              <h2 className="text-xl font-bold text-gray-900">{project.title}</h2>
                            </div>
                            {(project.role || project.techStack) && (
                              <div className="space-y-2 text-gray-600">
                                {project.role && <p className="font-medium">Role: {project.role}</p>}
                                {project.techStack && <p className="font-medium">Tech Stack: {project.techStack}</p>}
                              </div>
                            )}
                          </div>
                          <p className="text-gray-700">{project.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Load More Button */}
                  {visibleProjects < projects.length && (
                    <div className="mt-12 text-center">
                      <button
                        onClick={handleLoadMore}
                        disabled={isLoading}
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#0066FF]/70 hover:bg-[#0052CC]/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0066FF] transition-colors duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isLoading ? (
                          <>
                            <div className="relative w-24 h-2 bg-white/20 rounded-full overflow-hidden mr-2">
                              <motion.div
                                className="absolute inset-y-0 left-0 bg-white rounded-full"
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{
                                  duration: 0.8,
                                  ease: "easeInOut"
                                }}
                              />
                            </div>
                            Loading...
                          </>
                        ) : (
                          'Load More Projects'
                        )}
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </motion.div>
        </div>
      </motion.main>

      {/* Footer */}
      <footer className="relative z-10 py-6 bg-white">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-gray-500 text-sm">
            © 2012-2025 | dotNew
          </div>
          <div className="flex items-center space-x-1 text-sm text-gray-500">
            <span>Follow</span>
            <div className="flex items-center space-x-4 ml-4">
              <a 
                href="https://github.com/codeAbstract" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-gray-900 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a 
                href="https://linkedin.com/in/nsaguda/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-gray-900 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href="https://instagram.com/_icode.new" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-gray-900 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.98-6.98.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.98-6.98-1.28-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </motion.div>
  );
}