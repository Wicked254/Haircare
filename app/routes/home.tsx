import React from 'react';
import { Routes, Route } from 'react-router-dom';
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

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <Navbar />
      <main>
        <section id="home">
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
      <Routes>
        <Route path="/hair-types" element={<HairTypes />} />
      </Routes>
    </div>
  );
}
