import React from "react";

const samplePosts = [
  {
    title: "Natural Hair Care: Exploring The Benefits Of Garlic And Olive Oil",
    image: "/components/assets/Haircareolive.jpg",
    category: "Product Reviews",
    link: "https://kenya.hsmagazine.digital/natural-hair-care-exploring-the-benefits-of-garlic-and-olive-oil/",
  },
  {
    title: "Secrets To Perfect Long, Healthy African Hair: The Ultimate Guide",
    image: "/components/assets/SecretsToPerfectLongHair.jpg",
    category: "Health and Beauty",
    link: "https://kenya.hsmagazine.digital/secrets-to-perfect-long-healthy-african-hair-the-ultimate-guide/",
  },
  {
    title: "The Best Hair Care Routine for Type 4 Hair",
    image: "/components/assets/Routine.jpg",
    category: "Routines",
    link: "https://www.luxyhair.com/blogs/hair-blog/natural-hair-care-routine?srsltid=AfmBOoregb2PJ7gX3s7pSOcnUBOAuHNBH07ugxjs16IxsWwKOjPifilV&em-bypass=server",
  }
];

export default function FeaturedBlogs() {
  return (
    <section className="py-12 bg-yellow-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 id="blogs-heading" className="text-3xl font-bold text-yellow-900 mb-8">
          Latest Hair Care Tips
        </h2>

        {/* Mobile slider */}
        <div className="flex gap-6 overflow-x-auto md:hidden pb-4 -mx-4 px-4">
          {samplePosts.map((post) => (
            <a
              key={post.title}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group min-w-[80vw] max-w-xs bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex-shrink-0"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={`${post.title} - ${post.category} article thumbnail`}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <span className="text-sm font-medium text-yellow-600">
                  {post.category}
                </span>
                <h3 className="mt-2 text-xl font-semibold text-gray-900 group-hover:text-yellow-600 transition-colors">
                  {post.title}
                </h3>
              </div>
            </a>
          ))}
        </div>

        {/* Grid for desktop */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {samplePosts.map((post) => (
            <a
              key={post.title}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={`${post.title} - ${post.category} article thumbnail`}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <span className="text-sm font-medium text-yellow-600">
                  {post.category}
                </span>
                <h3 className="mt-2 text-xl font-semibold text-gray-900 group-hover:text-yellow-600 transition-colors">
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
