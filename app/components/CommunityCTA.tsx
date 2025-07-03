import React from 'react';

export default function CommunityCTA() {
  return (
    <section className="py-16 bg-gradient-to-r from-yellow-500 to-yellow-700 text-white text-center">
      <div className="max-w-xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Community</h2>
        <p className="mb-6 text-lg">
          From tears to tiaras: your hair, your story. Share it.
        </p>
        <a
          href="/community"
          className="inline-block bg-white text-yellow-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300"
        >
          Join the Conversation
        </a>
      </div>
    </section>
  );
}
