// src/components/HairSchoolPreview.jsx
import React from 'react';

const lessons = [
  { title: 'Porosity 101', img: '/images/porosity.jpg', link: '/hair-school/porosity' },
  { title: 'Daily Routine Guide', img: '/images/routine.jpg', link: '/hair-school/routine' },
  { title: 'Tutorial Videos', img: '/images/videos.jpg', link: '/hair-school/videos' },
];

export default function HairSchoolPreview() {
  return (
    <section className="py-16 bg-orange-50">
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
        <h2 className="text-3xl font-bold text-orange-900 mb-8">Hair School Highlights</h2>
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
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
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
