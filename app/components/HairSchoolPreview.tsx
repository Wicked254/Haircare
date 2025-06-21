// src/components/HairSchoolPreview.jsx
import React from 'react';

const lessons = [
  { title: 'Benefits of Taking Care of Your Hair', img: './components/assets/BenefitsOfTakingCareofHair.jpg', link: 'https://naturalhairkenya.co.ke/blog/benefits-of-hair-care/'},
  { title: 'How to take care of natural hair Nairobi', img: './components/assets/dailyroutine.jpeg', link: 'https://www.kenyanvibe.com/the-ultimate-guide-to-building-a-great-hair-care-routine-for-beginners/' },
  { title: 'Tutorial Videos', img: './components/assets/braids.jpeg', link: 'https://www.youtube.com/watch?v=R_fOheuIpFc' },
];

export default function HairSchoolPreview() {
  return (
    <section className="py-16 bg-yellow-50">
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
        <h2 className="text-3xl font-bold text-yellow-900 mb-8">Hair School Highlights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {lessons.map((it) => (
            <a
              key={it.title}
              href={it.link}
              className="group block rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={it.img}
                  alt={it.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-yellow-600 transition-colors duration-300">
                  {it.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
