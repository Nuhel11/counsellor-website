"use client"; // This is required for interactivity (onClick/useState)

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // Menu for burger, X for close

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-serif font-semibold text-stone-800 tracking-tight">
              Dr. Ambra<span className="text-therapy-sage">.</span>
            </Link>
          </div>

          {/* Desktop Links (Hidden on mobile) */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-stone-600 hover:text-therapy-sage transition-colors text-sm font-medium">
              About
            </Link>
            <Link href="/services" className="text-stone-600 hover:text-therapy-sage transition-colors text-sm font-medium">
              Services
            </Link>
            <Link 
              href="/contact" 
              className="bg-therapy-sage text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:brightness-95 transition-all shadow-md"
            >
              Book a Session
            </Link>
          </div>

          {/* Burger Button (Visible only on mobile) */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-stone-600 focus:outline-none p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-stone-200 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
            <Link 
              href="/about" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-4 text-base font-medium text-stone-600 border-b border-stone-50"
            >
              About Me
            </Link>
            <Link 
              href="/services" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-4 text-base font-medium text-stone-600 border-b border-stone-50"
            >
              Services
            </Link>
            <Link 
              href="/contact" 
              onClick={() => setIsOpen(false)}
              className="mt-4 bg-therapy-sage text-white text-center px-6 py-4 rounded-xl font-semibold"
            >
              Book a Session
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;