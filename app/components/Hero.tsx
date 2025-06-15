import React from 'react';

export default function Hero() {
  return (
    <section
      className="pt-20 relative z-0 flex flex-col justify-center items-center h-screen bg-gradient-to-b from-orange-50 to-white"
      style={{
        backgroundImage: "url('/images/4c-texture.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Soft orange overlay */}
      <div className="absolute inset-0 bg-orange-400 opacity-30"></div>

      <div className="relative z-10 text-center px-4 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Embrace Your Beautiful 4C Hair Journey
        </h1>
        <p className="text-lg md:text-xl text-gray-800 mb-8">
          Join thousands of Kenyan girls discovering the beauty and versatility of their natural 4C hair
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full transition">
            Get Free Hair Planner
          </button>
          <button className="border-2 border-orange-600 text-orange-600 px-8 py-3 rounded-full hover:bg-orange-100 transition">
            Join Community
          </button>
        </div>

        {/* Stats */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-8 text-gray-900">
          {[
            { value: '5K+', label: 'Members' },
            { value: '200+', label: 'Guides' },
            { value: '50+', label: 'Product Reviews' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <span className="block text-3xl font-bold">{stat.value}</span>
              <span className="text-sm">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
);
}
