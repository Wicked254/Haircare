// src/components/ProductReviewsPreview.jsx
import React from 'react';

const reviews = [
  { name: 'Castor OiL', img: '/components/assets/caystoroil.jpg', link: 'https://naturalhairkenya.co.ke/extract-oil/katya-castor-oil/' },
  { name: 'Green Essence Shampoo', img: '/components/assets/Greenessenceshampoo.jpg', link: 'https://greenessence.co.ke/' },
  { name: 'Nice & Lovely', img: '/components/assets/niceandlovely.jpeg', link: 'https://www.beautyclick.co.ke/brand/nice-lovely/?srsltid=AfmBOopLeHRq6N-dT2I2E7vi_Liq6nX0xDZwJbcn54_VMxm07VjZCEGo' },
];

export default function ProductReviewsPreview() {
  return (
    <section className="py-16 bg-yellow-50">
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
        <h2 className="text-3xl font-bold text-yellow-900 mb-8">
          Local Product Reviews
        </h2>

        {/* Mobile slider */}
        <div className="flex gap-6 overflow-x-auto md:hidden pb-4 -mx-4 px-4">
          {reviews.map((r) => (
            <a
              key={r.name}
              href={r.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group min-w-[80vw] max-w-xs block rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex-shrink-0"
            >
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={r.img}
                  alt={r.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-yellow-600 transition-colors">
                  {r.name}
                </h3>
                <p className="mt-2 text-yellow-600 font-medium">
                  Read Review →
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Grid for desktop */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((r) => (
            <a
              key={r.name}
              href={r.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={r.img}
                  alt={r.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-yellow-600 transition-colors">
                  {r.name}
                </h3>
                <p className="mt-2 text-yellow-600 font-medium">
                  Read Review →
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
