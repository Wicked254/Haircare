import React, { useState, useEffect } from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

export default function ScrollButtons() {
  const [showTop, setShowTop] = useState(false);
  const [showBottom, setShowBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowTop(scrollY > 300);
      setShowBottom(scrollY < document.body.scrollHeight - window.innerHeight - 300);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initialize
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const scrollToBottom = () =>
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });

  return (
    <div className="fixed right-4 bottom-4 flex flex-col space-y-4 z-50">
      {showTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="p-3 rounded-full bg-orange-600 text-white shadow-lg hover:bg-orange-700 transition"
        >
          <FaArrowUp />
        </button>
      )}
      {showBottom && (
        <button
          onClick={scrollToBottom}
          aria-label="Scroll to bottom"
          className="p-3 rounded-full bg-orange-600 text-white shadow-lg hover:bg-orange-700 transition"
        >
          <FaArrowDown />
        </button>
      )}
    </div>
  );
}
