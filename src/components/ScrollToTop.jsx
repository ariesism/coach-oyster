import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 p-2 md:p-3 rounded-full bg-black/80 border border-[#4DEEEA]/50 text-[#4DEEEA] backdrop-blur-md transition-all duration-300 shadow-neon hover:shadow-neon-strong hover:bg-[#4DEEEA] hover:text-black hover:scale-110 focus:outline-none ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-75 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-5 h-5 md:w-6 md:h-6 animate-pulse hover:animate-none" />
    </button>
  );
}
