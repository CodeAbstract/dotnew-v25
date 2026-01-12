'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import TypewriterText from './components/TypewriterText';

export default function Home() {
  const pathname = usePathname();
  
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Header/Navigation */}
      <header className="relative z-10 bg-white">
        <nav className="container mx-auto px-6 py-8 flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-[#0066FF]"></div>
              <span className="text-xl font-bold text-gray-900">New Aguda</span>
            </div>
            <div className="hidden md:block text-sm text-gray-600 ml-4">
              <span className="tracking-wider">/ Software Engineer | Ruby on Rails | E-Commerce | Agile | Ai</span>
            </div>
          </div>
          <div className="flex items-center space-x-8">
            <Link 
              href="/" 
              className={`text-gray-600 hover:text-gray-900 hover:line-through hover:decoration-[#0066FF] hover:decoration-2 text-sm font-medium ${
                pathname === '/' ? 'line-through decoration-[#0066FF] decoration-2' : ''
              }`}
            >
              ABOUT
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
      <main className="relative min-h-[calc(100vh-160px)] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/dotnew-bg-mac-coffee-camera.jpg"
            alt="Workspace with MacBook, coffee, and camera"
            fill
            priority
            className="object-cover opacity-[0.75]"
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-2 items-center max-w-6xl mx-auto">
            {/* Profile Card */}
            <div className="bg-white/95 backdrop-blur-sm px-20 py-16 md:px-20 md:py-16 shadow-lg max-w-[32rem] mx-auto md:ml-auto">
              <div className="flex flex-col items-center text-center">
                <div className="relative w-48 h-48 mb-8 shadow-xl rounded-full">
                  <Image
                    src="/AvatarPro2023-resizedSq.JPG"
                    alt="New Aguda"
                    fill
                    priority
                    className="object-cover rounded-full shadow-lg ring-2 ring-white/50"
                  />
                </div>
                <h2 className="text-3xl font-bold mb-3 text-gray-900">New Aguda</h2>
                <div className="w-14 h-0.5 bg-[#0066FF] mb-5"></div>
                <h3 className="text-lg uppercase tracking-wider text-gray-600 mb-8">SOFTWARE ENGINEER</h3>
                <div className="flex justify-center space-x-8">
                  <a 
                    href="https://github.com/codeAbstract" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-gray-900 transition-colors"
                  >
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://linkedin.com/in/nsaguda/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-gray-900 transition-colors"
                  >
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://instagram.com/_icode.new" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-gray-900 transition-colors"
                  >
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.98-6.98.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.98-6.98-1.28-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-6 md:pl-0 mx-auto md:mr-auto">
              <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-gray-100 [text-shadow:_2px_2px_2px_rgb(0_0_0_/_50%)] px-8">
                Bonjour!
              </h1>
              <div className="bg-white/3 backdrop-blur-sm px-8 py-10">
                <div className="space-y-4 text-lg">
                  <TypewriterText 
                    text="I'm a seasoned software engineer with over a decade of experience in developing web applications across diverse client scales - from small businesses to enterprise-level organizations."
                    delay={10}
                    startDelay={100}
                    className="leading-relaxed text-gray-100 tracking-wide [text-shadow:_2px_2px_2px_rgb(0_0_0_/_50%)]"
                    as="p"
                  />
                  <TypewriterText 
                    text="Ruby on Rails forms the foundation of my technical expertise, where I've built robust, scalable backend systems. My engineering toolkit extends to modern frontend development, with specialized proficiency in React and Angular frameworks."
                    delay={10}
                    startDelay={1600}
                    className="leading-relaxed text-gray-100 tracking-wide [text-shadow:_2px_2px_2px_rgb(0_0_0_/_50%)]"
                    as="p"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

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
    </div>
  );
}
