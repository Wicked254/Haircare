import React from 'react';
import Navbar from '../components/NavBar';
import Hero from '../components/Hero';
import FeaturedBlogs from '../components/FeaturedBlogs';
import HairSchoolPreview from '../components/HairSchoolPreview';
import ProductReviewsPreview from '../components/ProductReviewsPreview';
import CommunityCTA from '../components/CommunityCTA';
import AboutPreview from '../components/AboutPreview';
import Footer from '../components/Footer';
import ScrollButtons from '~/components/ScrollButton';

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <Navbar />
      <main className="pt-24 md:pt-20 space-y-16">
        <section id="home" className="-mt-24 md:-mt-20 pt-24 md:pt-20">
          <Hero />
        </section>
        
        <section id="featured-blogs">
          <FeaturedBlogs />
        </section>
        
        <section id="hair-school">
          <HairSchoolPreview />
        </section>
        
        <section id="product-reviews">
          <ProductReviewsPreview />
        </section>
        
        <section id="community">
          <CommunityCTA />
        </section>
        
        <section id="about">
          <AboutPreview />
        </section>
      </main>
      <Footer />
      <ScrollButtons />
    </div>
  );
}
