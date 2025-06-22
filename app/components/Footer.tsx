// src/components/Footer.jsx
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const navSections = [
  { id: 'home', label: 'Home' },
  { id: 'featured-blogs', label: 'Blog' },
  { id: 'hair-school', label: 'Hair School' },
  { id: 'product-reviews', label: 'Product Reviews' },
  { id: 'community', label: 'Community' },
];

function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

export default function Footer() {
  return (
    <footer className="bg-yellow-50 text-gray-700 pt-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Brand & Description */}
        <div>
          <h2 className="text-xl font-bold mb-3 text-yellow-900">Nywele Nation</h2>
          <p>Your go-to hub for tips, products, & community made for 4C girls in Kenya.</p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="font-semibold mb-2 text-yellow-800">Explore</h3>
          <ul className="space-y-1">
            {navSections.map((page) => (
              <li key={page.id}>
                <button
                  type="button"
                  onClick={() => scrollToSection(page.id)}
                  className="hover:text-yellow-600 transition-colors bg-transparent border-none p-0 m-0 text-left cursor-pointer"
                >
                  {page.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="font-semibold mb-2 text-yellow-800">Contact Us</h3>
          <p>Email: hello@4chaircare.ke</p>
          <p>WhatsApp: +254 700 123456</p>
          <div className="flex mt-2 space-x-4 text-yellow-600">
            {[FaFacebook, FaInstagram, FaTwitter, FaWhatsapp].map((Icon, i) => (
              <a key={i} href="#" target="_blank" rel="noreferrer" className="hover:text-orange-900 transition-colors">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h3 className="font-semibold mb-2 text-yellow-800">Join Our Tribe</h3>
          <p className="text-sm mb-2">Subscribe for tips, product deals & more.</p>
          <form>
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 mb-2 border border-yellow-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button
              type="submit"
              className="w-full bg-yellow-600 text-white py-2 rounded hover:bg-orange-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>

      <div className="mt-10 border-t border-yellow-200 py-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} 4C Haircare KE •{' '}
        <a href="/privacy" className="hover:text-yellow-600 transition-colors">Privacy</a> &amp;{' '}
        <a href="/terms" className="hover:text-yellow-600 transition-colors">Terms</a>
      </div>
    </footer>
  );
}
