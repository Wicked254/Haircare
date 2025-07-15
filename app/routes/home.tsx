import React from 'react';
import { Routes, Route as RouterRoute } from 'react-router-dom';
import { generateMetaTags, seoData } from '../utils/seo';
import Navbar from '../components/NavBar';
import Hero from '../components/Hero';
import FeaturedBlogs from '../components/FeaturedBlogs';
import HairSchoolPreview from '../components/HairSchoolPreview';
import ProductReviewsPreview from '../components/ProductReviewsPreview';
import CommunityCTA from '../components/CommunityCTA';
import AboutPreview from '../components/AboutPreview';
import Footer from '../components/Footer';
import ScrollButtons from '~/components/ScrollButton';
import HairTypes from '../components/HairTypes';

export const meta = () => {
  return generateMetaTags(seoData.home);
};

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <Navbar />
      <main role="main">
        <section id="home" aria-labelledby="hero-heading">
          <Hero />
        </section>
        
        <section id="featured-blogs" aria-labelledby="blogs-heading">
          <FeaturedBlogs />
        </section>
        
        <section id="hair-school" aria-labelledby="school-heading">
          <HairSchoolPreview />
        </section>
        
        <section id="product-reviews" aria-labelledby="reviews-heading">
          <ProductReviewsPreview />
        </section>
        
        <section id="community" aria-labelledby="community-heading">
          <CommunityCTA />
        </section>
        
        <section id="about" aria-labelledby="about-heading">
          <AboutPreview />
        </section>
      </main>
      <Footer />
      <ScrollButtons />
      <Routes>
        <RouterRoute path="/hair-types/*" element={<HairTypes />} />
      </Routes>
    </div>
  );
}
