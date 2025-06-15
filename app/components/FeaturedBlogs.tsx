import React from "react";
 

const samplePosts = [
  {
    title: "How I Grew 5 Inches in 6 Months",
    image: "/images.jpeg", // Updated image path
    category: "My Hair Journey",
    link: "/blog/my-hair-journey",
  },
  {
    title: "Budget-Friendly Products You Can Find in Nairobi",
    image: "/path-to-image2.jpg",
    category: "Budget Finds",
    link: "/blog/budget-finds",
  },
  {
    title: "DIY Deep Conditioning Recipes",
    image: "/path-to-image3.jpg",
    category: "DIY Recipes",
    link: "/blog/diy-recipes",
  }
];

export default function FeaturedBlogs() {
  return (
    <section className="py-12 bg-orange-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-orange-900 mb-8">
          Latest Hair Care Tips
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {samplePosts.map((post) => (
            <a
              key={post.title}
              href={post.link}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <span className="text-sm font-medium text-orange-600">
                  {post.category}
                </span>
                <h3 className="mt-2 text-xl font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                  {post.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
