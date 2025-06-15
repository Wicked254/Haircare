// src/components/ProductReviewsPreview.jsx
import React from 'react';

const reviews = [
  { name: 'Shea Moisture', img: '/images/shea.jpg', link: '/reviews/shea-moisture' },
  { name: 'Afro Sheen',    img: '/images/afrosheen.jpg', link: '/reviews/afro-sheen' },
  { name: 'Nice & Lovely', img: '/images/nice.jpg', link: '/reviews/nice-lovely' },
];

export default function ProductReviewsPreview() {
  return (
    <section className="py-16 bg-orange-50">
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
        <h2 className="text-3xl font-bold text-orange-900 mb-8">
          Local Product Reviews
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((r) => (
            <a
              key={r.name}
              href={r.link}
              className="block rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={r.img}
                  alt={r.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                  {r.name}
                </h3>
                <p className="mt-2 text-orange-600 font-medium">
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
