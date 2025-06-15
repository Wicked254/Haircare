import React, { useState } from 'react';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'featured-blogs', label: 'Blog' },
  { id: 'hair-school', label: 'Hair School' },
  { id: 'product-reviews', label: 'Product Reviews' },
  { id: 'community', label: 'Community' },
  { id: 'about', label: 'About & Contact' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState('home');

interface NavItem {
    id: string;
    label: string;
}

const scrollToSection = (sectionId: string): void => {
    setIsMenuOpen(false);
    setActive(sectionId);
    const element: HTMLElement | null = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm px-4 py-3 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Brand */}
        <button
          onClick={() => scrollToSection('home')}
          className="text-xl font-extrabold text-orange-600 hover:text-orange-700 transition"
        >
          4C Haircare KE
        </button>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-1.5 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
          </svg>
        </button>

        {/* Navigation links */}
        <div className={`
          ${isMenuOpen ? 'block' : 'hidden'} 
          md:flex 
          absolute 
          md:relative 
          top-full 
          md:top-0 
          left-0 
          right-0 
          bg-white/90
          backdrop-blur-sm
          md:bg-transparent 
          p-3
          md:p-0 
          md:ml-auto
          shadow-lg
          md:shadow-none
        `}>
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-3 md:space-y-0 md:space-x-6">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative text-sm text-gray-900 hover:text-orange-600 transition w-full md:w-auto text-left ${
                  active === item.id ? 'font-semibold' : 'font-medium'
                }`}
              >
                {item.label}
                <span className={`
                  absolute bottom-0 left-0 w-full h-0.5 bg-orange-600 transform
                  ${active === item.id ? 'scale-x-100' : 'scale-x-0'}
                  transition-transform origin-left
                `} />
              </button>
            ))}
            {/* CTA Button */}
            <button
              onClick={() => scrollToSection('community')}
              className="bg-orange-600 text-white px-4 py-1.5 rounded-full hover:bg-orange-700 transition w-full md:w-auto text-sm"
            >
              Join Community
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
