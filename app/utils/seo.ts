// SEO utility functions for Nywele Nation

export interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
}

export function generateMetaTags(seo: SEOData) {
  const baseUrl = 'https://nywelenation.co.ke';
  
  return [
    { title: seo.title },
    { name: "description", content: seo.description },
    ...(seo.keywords ? [{ name: "keywords", content: seo.keywords }] : []),
    
    // Open Graph tags
    { property: "og:title", content: seo.title },
    { property: "og:description", content: seo.description },
    { property: "og:image", content: seo.image || "/components/assets/NyweleNationLogo.jpg" },
    { property: "og:type", content: seo.type || "website" },
    { property: "og:url", content: seo.url || baseUrl },
    { property: "og:site_name", content: "Nywele Nation" },
    
    // Twitter Card tags
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: seo.title },
    { name: "twitter:description", content: seo.description },
    { name: "twitter:image", content: seo.image || "/components/assets/NyweleNationLogo.jpg" },
    
    // Additional SEO tags
    { name: "robots", content: "index, follow" },
    { name: "author", content: "Nywele Nation" },
    { name: "language", content: "en-KE" },
    { name: "geo.region", content: "KE" },
    { name: "geo.country", content: "Kenya" },
  ];
}

export function generateStructuredData(type: 'website' | 'article' | 'organization', data: any) {
  const baseStructure = {
    "@context": "https://schema.org",
  };

  switch (type) {
    case 'website':
      return {
        ...baseStructure,
        "@type": "WebSite",
        "name": "Nywele Nation",
        "description": "Natural hair care community for Kenyan women with 4C hair",
        "url": "https://nywelenation.co.ke",
        ...data
      };
    
    case 'article':
      return {
        ...baseStructure,
        "@type": "Article",
        "publisher": {
          "@type": "Organization",
          "name": "Nywele Nation",
          "logo": {
            "@type": "ImageObject",
            "url": "https://nywelenation.co.ke/components/assets/NyweleNationLogo.jpg"
          }
        },
        ...data
      };
    
    case 'organization':
      return {
        ...baseStructure,
        "@type": "Organization",
        "name": "Nywele Nation",
        "url": "https://nywelenation.co.ke",
        "logo": "https://nywelenation.co.ke/components/assets/NyweleNationLogo.jpg",
        "sameAs": [
          "https://instagram.com/nywelenation",
          "https://facebook.com/nywelenation"
        ],
        ...data
      };
    
    default:
      return baseStructure;
  }
}

// Common SEO data for different pages
export const seoData = {
  home: {
    title: "Nywele Nation - Natural 4C Hair Care Community for Kenyan Women",
    description: "Join 5K+ Kenyan women embracing their natural 4C hair journey. Get expert hair care tips, product reviews, styling guides, and connect with our supportive community.",
    keywords: "4C hair care Kenya, natural hair Kenya, African hair care, hair porosity, curl types, Kenyan hair community, natural hair products Kenya",
    image: "/components/assets/heroimage.jpg",
    type: "website" as const
  },
  
  hairTypes: {
    title: "Hair Types Guide - 4A, 4B, 4C Curl Patterns | Nywele Nation",
    description: "Discover your natural hair type with our comprehensive guide to 4A, 4B, and 4C curl patterns. Take our free porosity and curl type quiz to find your perfect hair care routine.",
    keywords: "4A hair, 4B hair, 4C hair, curl types, hair porosity, natural hair types Kenya, curl pattern quiz, hair type test",
    image: "/components/assets/Hairtypes.jpg",
    type: "article" as const
  }
};