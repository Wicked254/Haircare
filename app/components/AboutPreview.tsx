// src/components/AboutPreview.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function AboutPreview() {
  return (
    <section className="py-16 bg-orange-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4 lg:px-16">
        
        {/* Personal Photo */}
        <div className="w-full md:w-1/2">
          <img
            src="/images/your-photo.jpg"
            alt="Founder smiling with 4C hair"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Story Text */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-orange-900 mb-4">Meet the Founder</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Hi! I’m <strong>[Your Name]</strong>, a proud Kenyan navigating my own 4C hair journey.
            I started this space to share real tips, product reviews, and a supportive
            community that uplifts every step of your self-care routine.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            From my first big chop to mastering moisture routines, I’ve learned that
            embracing 4C hair is about confidence, consistency, and community.
            And I’m here to walk that path with you.
          </p>

          <Link
            to="/about"
            className="inline-block bg-orange-600 text-white px-6 py-3 rounded-full shadow hover:bg-orange-700 transition-colors duration-300"
          >
            Learn More
          </Link>
        </div>

      </div>
    </section>
  );
}
