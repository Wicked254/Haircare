import React from 'react';

export default function ProductReviewOverview() {
  const reviews = [
    { name: 'Castor OiL', img: '/components/assets/caystoroil.jpg', link: 'https://naturalhairkenya.co.ke/extract-oil/katya-castor-oil/' },
    { name: 'Green Essence Shampoo', img: '/components/assets/Greenessenceshampoo.jpg', link: 'https://greenessence.co.ke/' },
    { name: 'Nice & Lovely', img: '/components/assets/niceandlovely.jpeg', link: 'https://www.beautyclick.co.ke/brand/nice-lovely/?srsltid=AfmBOopLeHRq6N-dT2I2E7vi_Liq6nX0xDZwJbcn54_VMxm07VjZCEGo' },
  ];

  return (
    <section className="py-20 bg-yellow-50" id="product-reviews">
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
        <h2 className="text-4xl font-extrabold text-yellow-900 mb-6">🧴 Product Reviews</h2>
        <h3 className="text-2xl text-yellow-800 font-semibold mb-10">Know Before You Buy</h3>

        <div className="space-y-12">

          {/* Ingredients to Love vs. Ditch */}
          <div>
            <h4 className="text-xl font-bold text-yellow-800 mb-2">🌿 Ingredients to Love vs. Ingredients to Ditch</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
              <div>
                <p className="font-semibold text-green-700 mb-1">✅ Ingredients to Love</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Shea Butter</li>
                  <li>Aloe Vera</li>
                  <li>Coconut Oil</li>
                  <li>Glycerin</li>
                  <li>Honey</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-red-700 mb-1">🚫 Ingredients to Ditch</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Sulfates (e.g., Sodium Lauryl Sulfate)</li>
                  <li>Mineral Oil</li>
                  <li>Parabens</li>
                  <li>Drying Alcohols</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-sm italic text-gray-600">✨ Quick tip: If you can’t pronounce it, pause and Google it.</p>
          </div>

          {/* Holy Grail Products by Hair Type */}
          <div>
            <h4 className="text-xl font-bold text-yellow-800 mb-2">💎 Holy Grail Products by Hair Type</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-700">
              <div>
                <p className="font-semibold text-yellow-700">For 4A Hair</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Shea Moisture Curl Enhancing Smoothie</li>
                  <li>Aunt Jackie’s Curl Custard</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-yellow-700">For 4B Hair</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>TGIN Butter Cream Daily Moisturizer</li>
                  <li>Mielle Organics Avocado Hair Milk</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-yellow-700">For 4C Hair</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Cantu Leave-In Conditioning Cream</li>
                  <li>Melanin Haircare Twist-Elongating Cream</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Build Your Starter Kit */}
          <div>
            <h4 className="text-xl font-bold text-yellow-800 mb-2">🛒 Build Your Affordable Starter Kit</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Cleanser:</strong> African Black Soap Shampoo</li>
              <li><strong>Moisturizer:</strong> Cantu Leave-In Conditioning Repair Cream</li>
              <li><strong>Sealant:</strong> Raw Shea Butter or Jamaican Black Castor Oil</li>
              <li><strong>Tools:</strong> Spray bottle, satin bonnet, wide-tooth comb</li>
            </ul>
            <p className="mt-4 text-sm text-gray-600">💡 Start simple, stay consistent — you don’t need 10 products to thrive.</p>
          </div>

          {/* Local Product Reviews */}
          <div className="mt-16">
            <h4 className="text-xl font-bold text-yellow-800 mb-4">🌍 Local Product Reviews</h4>
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

        </div>
      </div>
    </section>
  );
}
