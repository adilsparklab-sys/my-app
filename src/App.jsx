import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import VideoCard from "./Components/VideoCard";
import Companies from "./Components/Companies";
import Experience from "./Components/Experience";
import Services from "./Components/Services";
import WelcomeStudio from "./Components/WelcomeStudio";
import Revenue from "./Components/Revenue";
import HowItWorks from "./Components/Howitworks";
import IntegrateData from "./Components/IntegrateData";
import Testimonials from "./Components/TestimonialsData";
import PlatformShowcase from "./Components/PlatformShowcase";
import ArticlesSection from "./Components/ArticlesSection";
import JoinUsSection from "./Components/JoinUsSection";
import NewsletterSignup from "./Components/NewsletterSignup";
import ExperienceSection from "./Components/ExperienceSection";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <Navbar />
      <Hero />
      <VideoCard />
      <Companies />
      <Experience />
      <Services />
      <WelcomeStudio />
      <Revenue />
      <HowItWorks />
      <IntegrateData />
      <Testimonials />
      <PlatformShowcase />
      <ArticlesSection />
      <JoinUsSection />
      <NewsletterSignup />
      <ExperienceSection />
      <Footer />
    </div>
  );
}

export default App;
