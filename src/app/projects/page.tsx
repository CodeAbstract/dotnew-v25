'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Projects() {
  const pathname = usePathname();
  
  return (
    <motion.div 
      className="fixed inset-0 flex flex-col bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
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
              className="text-gray-600 hover:text-gray-900 text-sm font-medium"
            >
              ABOUT ME
            </Link>
            <Link 
              href="/projects" 
              className={`text-gray-600 hover:text-gray-900 text-sm font-medium border-b-2 ${
                pathname === '/projects' ? 'border-[#0066FF]' : 'border-transparent'
              }`}
            >
              PROJECTS
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900 text-sm font-medium">CONTACT</Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <motion.main 
        className="flex-1 relative overflow-y-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
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
            className="container mx-auto px-6 py-16"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
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

              {/* Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Digital and Canvas E-Commerce */}
                <div className="bg-white shadow-lg relative overflow-hidden group">
                  <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 bg-black/85 transition-opacity duration-300">
                    <Image
                      src="/aindustries-preview-4x3.jpeg"
                      alt="Digital and Canvas E-Commerce Full Preview"
                      fill
                      className="object-contain p-8"
                    />
                  </div>
                  <div className="h-48 relative">
                    <Image
                      src="/aindustries-preview-4x3.jpeg"
                      alt="Digital and Canvas E-Commerce Preview"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="p-8 relative z-10">
                    <div className="mb-6">
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="w-1.5 h-8 bg-[#0066FF] flex-shrink-0"></div>
                        <h2 className="text-xl font-bold text-gray-900">Digital and Canvas E-Commerce</h2>
                      </div>
                      <div className="space-y-2 text-gray-600">
                        <p className="font-medium">Role: E-Commerce Developer - Personal</p>
                        <p className="font-medium">Tech Stack: Shopify E-Commerce</p>
                      </div>
                    </div>
                    <p className="text-gray-700">
                      My personal E-Commerce store built on Shopify, features landscape photographs and paintings 
                      that capture the beauty of nature in all its glory.
                    </p>
                  </div>
                </div>

                {/* Solar Solutions and Services */}
                <div className="bg-white shadow-lg relative overflow-hidden group">
                  <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 bg-black/85 transition-opacity duration-300">
                    <Image
                      src="/solar-solutions-preview-4x3.jpeg"
                      alt="Solar Solutions and Services Full Preview"
                      fill
                      className="object-contain p-8"
                    />
                  </div>
                  <div className="h-48 relative">
                    <Image
                      src="/solar-solutions-preview-4x3.jpeg"
                      alt="Solar Solutions and Services Preview"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="p-8 relative z-10">
                    <div className="mb-6">
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="w-1.5 h-8 bg-[#0066FF] flex-shrink-0"></div>
                        <h2 className="text-xl font-bold text-gray-900">Solar Solutions and Services</h2>
                      </div>
                      <div className="space-y-2 text-gray-600">
                        <p className="font-medium">Role: E-Commerce Consultant and Developer / Digital Marketing Specialist - Freelance</p>
                        <p className="font-medium">Tech Stack: Squarespace E-Commerce</p>
                      </div>
                    </div>
                    <p className="text-gray-700">
                      An Australian based company dedicated to making a positive environmental and social impact. 
                      They provide high-quality, cost-effective solutions that empower their clients to succeed.
                    </p>
                  </div>
                </div>

                {/* E-Commerce System */}
                <div className="bg-white shadow-lg relative overflow-hidden group">
                  <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 bg-black/85 transition-opacity duration-300">
                    <Image
                      src="/bcc-preview-4x3.jpeg"
                      alt="E-Commerce System Full Preview"
                      fill
                      className="object-contain p-8"
                    />
                  </div>
                  <div className="h-48 relative">
                    <Image
                      src="/bcc-preview-4x3.jpeg"
                      alt="E-Commerce System Preview"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="p-8 relative z-10">
                    <div className="mb-6">
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="w-1.5 h-8 bg-[#0066FF] flex-shrink-0"></div>
                        <h2 className="text-xl font-bold text-gray-900">E-Commerce System</h2>
                      </div>
                      <div className="space-y-2 text-gray-600">
                        <p className="font-medium">Role: Full-Stack Developer</p>
                        <p className="font-medium">Tech Stack: Adobe Commerce | Ruby on Rails | PostgreSQL | EmberJS | AWS</p>
                      </div>
                    </div>
                    <p className="text-gray-700">
                      A service that enables the client to conduct online sales. It includes components such as an online storefront, 
                      product catalog and shopping cart. Using Magento Rest APIs to automate products listings export; order and 
                      inventory management are handled by the client's ERP SaaS platform.
                    </p>
                  </div>
                </div>

                {/* Digital and Canvas E-Commerce Clone */}
                <div className="bg-white shadow-lg relative overflow-hidden group">
                  <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 bg-black/85 transition-opacity duration-300">
                    <Image
                      src="/rradar-preview-4x3.jpeg"
                      alt="Digital and Canvas E-Commerce Full Preview"
                      fill
                      className="object-contain p-8"
                    />
                  </div>
                  <div className="h-48 relative">
                    <Image
                      src="/rradar-preview-4x3.jpeg"
                      alt="Digital and Canvas E-Commerce Preview"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="p-8 relative z-10">
                    <div className="mb-6">
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="w-1.5 h-8 bg-[#0066FF] flex-shrink-0"></div>
                        <h2 className="text-xl font-bold text-gray-900">Movie Database Application</h2>
                      </div>
                      <div className="space-y-2 text-gray-600">
                        <p className="font-medium">Role: Full-Stack Developer - Personal</p>
                        <p className="font-medium">Tech Stack: ReactJS | Node.js | TMDB & OMDB APIs</p>
                      </div>
                    </div>
                    <p className="text-gray-700">
                      This platform highlights Featured Movies that deserve the spotlight, showcases the Top 5 
                      Weekly Picks to keep you in the loop, and unveils the Top 20 Monthly Rankings to celebrate 
                      the biggest hits.
                    </p>
                  </div>
                </div>

                {/* Online Payment System */}
                <div className="bg-white shadow-lg relative overflow-hidden group">
                  <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 bg-black/85 transition-opacity duration-300">
                    <Image
                      src="/gp-preview-4x3.jpeg"
                      alt="Online Payment System Full Preview"
                      fill
                      className="object-contain p-8"
                    />
                  </div>
                  <div className="h-48 relative">
                    <Image
                      src="/gp-preview-4x3.jpeg"
                      alt="Online Payment System Preview"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="p-8 relative z-10">
                    <div className="mb-6">
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="w-1.5 h-8 bg-[#0066FF] flex-shrink-0"></div>
                        <h2 className="text-xl font-bold text-gray-900">Online Payment System</h2>
                      </div>
                      <div className="space-y-2 text-gray-600">
                        <p className="font-medium">Role: Project Lead</p>
                        <p className="font-medium">Tech Stack: JRuby | Rails | MariaDB | AngularJS | Asterisk</p>
                      </div>
                    </div>
                    <p className="text-gray-700">
                      A service that allows friends and family to make deposits to user's account. Deposits are made via 
                      the following methods: Credit card, phone call interactive voice response and facility lobby kiosks.
                    </p>
                  </div>
                </div>

                {/* Cloud-based Admin Hub */}
                <div className="bg-white shadow-lg relative overflow-hidden group">
                  <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 bg-black/85 transition-opacity duration-300">
                    <Image
                      src="/ada-preview-4x3.jpeg"
                      alt="Cloud-based Admin Hub Full Preview"
                      fill
                      className="object-contain p-8"
                    />
                  </div>
                  <div className="h-48 relative">
                    <Image
                      src="/ada-preview-4x3.jpeg"
                      alt="Cloud-based Admin Hub Preview"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="p-8 relative z-10">
                    <div className="mb-6">
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="w-1.5 h-8 bg-[#0066FF] flex-shrink-0"></div>
                        <h2 className="text-xl font-bold text-gray-900">Cloud-based Admin Hub</h2>
                      </div>
                      <div className="space-y-2 text-gray-600">
                        <p className="font-medium">Role: Full-Stack Developer | DevOps</p>
                        <p className="font-medium">Tech Stack: JRuby | Rails | MariaDB | ReactJS | ElasticSearch</p>
                      </div>
                    </div>
                    <p className="text-gray-700">
                      An application that provides a single user interface for administration of various services. 
                      Integrated within a SaaS platform for a US based company that provides communication services 
                      and solutions for incarcerated individuals and their loved ones.
                    </p>
                  </div>
                </div>

                {/* Website Builder */}
                <div className="bg-white shadow-lg relative overflow-hidden group">
                  <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 bg-black/85 transition-opacity duration-300">
                    <Image
                      src="/ifl-preview-4x3.jpeg"
                      alt="Website Builder Full Preview"
                      fill
                      className="object-contain p-8"
                    />
                  </div>
                  <div className="h-48 relative">
                    <Image
                      src="/ifl-preview-4x3.jpeg"
                      alt="Website Builder Preview"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="p-8 relative z-10">
                    <div className="mb-6">
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="w-1.5 h-8 bg-[#0066FF] flex-shrink-0"></div>
                        <h2 className="text-xl font-bold text-gray-900">Website Builder</h2>
                      </div>
                      <div className="space-y-2 text-gray-600">
                        <p className="font-medium">Role: Back-End Developer</p>
                        <p className="font-medium">Tech Stack: Ruby on Rails | MongoDB | JQuery</p>
                      </div>
                    </div>
                    <p className="text-gray-700">
                      A web-based application for building web pages using a WYSIWYG editor. It provides an easy way 
                      for those without HTML knowledge to create and launch a website, featuring a variety of 
                      drag-and-drop widgets for customization.
                    </p>
                  </div>
                </div>

                {/* Online Yellow Pages */}
                <div className="bg-white shadow-lg relative overflow-hidden group">
                  <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 bg-black/85 transition-opacity duration-300">
                    <Image
                      src="/yp-preview-4x3.jpeg"
                      alt="Online Yellow Pages Full Preview"
                      fill
                      className="object-contain p-8"
                    />
                  </div>
                  <div className="h-48 relative">
                    <Image
                      src="/yp-preview-4x3.jpeg"
                      alt="Online Yellow Pages Preview"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="p-8 relative z-10">
                    <div className="mb-6">
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="w-1.5 h-8 bg-[#0066FF] flex-shrink-0"></div>
                        <h2 className="text-xl font-bold text-gray-900">Online Yellow Pages</h2>
                      </div>
                      <div className="space-y-2 text-gray-600">
                        <p className="font-medium">Role: Back-End Developer</p>
                        <p className="font-medium">Tech Stack: Ruby on Rails | Oracle | JQuery</p>
                      </div>
                    </div>
                    <p className="text-gray-700">
                      An online Yellow Pages platform that serves as a comprehensive hub for quickly and easily locating 
                      local businesses, services, and professionals. It provides an intuitive and user-friendly experience, 
                      allowing you to search for and connect with the best businesses in your area.
                    </p>
                  </div>
                </div>

                {/* Employee Health Prediction */}
                <div className="bg-white shadow-lg relative overflow-hidden group">
                  <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 bg-black/85 transition-opacity duration-300">
                    <Image
                      src="/ehp-preview-4x3.jpeg"
                      alt="Employee Health Prediction Full Preview"
                      fill
                      className="object-contain p-8"
                    />
                  </div>
                  <div className="h-48 relative">
                    <Image
                      src="/ehp-preview-4x3.jpeg"
                      alt="Employee Health Prediction Preview"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="p-8 relative z-10">
                    <div className="mb-6">
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="w-1.5 h-8 bg-[#0066FF] flex-shrink-0"></div>
                        <h2 className="text-xl font-bold text-gray-900">Employee Health Prediction</h2>
                      </div>
                      <div className="space-y-2 text-gray-600">
                        <p className="font-medium">Role: Back-End Developer</p>
                        <p className="font-medium">Tech Stack: Ruby on Rails | PostgreSQL | Angular | AWS</p>
                      </div>
                    </div>
                    <p className="text-gray-700">
                      A machine learning-powered occupational health solution designed to predict a candidate's fitness. 
                      It uses a health questionnaire and sophisticated algorithms to predict outcomes with 88-92% accuracy. 
                      This tool helps organizations manage hiring speeds and costs effectively. Integrated within an 
                      occupational health SaaS platform.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.main>

      {/* Footer */}
      <footer className="relative z-20 bg-white flex-shrink-0">
        <div className="container mx-auto px-6 py-6 flex justify-between items-center">
          <div className="text-gray-500 text-sm">
            © 2012-2025 | dotNew
          </div>
          <div className="flex items-center space-x-1 text-sm text-gray-500">
            <span>Follow</span>
            <div className="flex items-center space-x-4 ml-4">
              <a href="https://github.com/dotnew" className="hover:text-gray-900 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/in/dotnew" className="hover:text-gray-900 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://instagram.com/dotnew" className="hover:text-gray-900 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </motion.div>
  );
} 