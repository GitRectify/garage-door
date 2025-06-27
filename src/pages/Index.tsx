
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroSection from '../components/sections/HeroSection';
import WhyChooseUsSection from '../components/sections/WhyChooseUsSection';
import ServicesSection from '../components/sections/ServicesSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import BioSection from '../components/sections/BioSection';
import FAQSection from '../components/sections/FAQSection';
import ContactSection from '../components/sections/ContactSection';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize scroll animations
    const ctx = gsap.context(() => {
      // Fade in animations for sections
      gsap.utils.toArray('.animate-fade-in').forEach((element: any) => {
        gsap.fromTo(element, 
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      // Slide in from left animations
      gsap.utils.toArray('.animate-slide-left').forEach((element: any) => {
        gsap.fromTo(element,
          { opacity: 0, x: -100 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      // Slide in from right animations
      gsap.utils.toArray('.animate-slide-right').forEach((element: any) => {
        gsap.fromTo(element,
          { opacity: 0, x: 100 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      // Stagger animations for service cards
      gsap.utils.toArray('.animate-stagger').forEach((container: any) => {
        const children = container.querySelectorAll('.stagger-item');
        gsap.fromTo(children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: container,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <>
      <SEOHead />
      <div ref={containerRef} className="min-h-screen">
        <HeroSection />
        <WhyChooseUsSection />
        <ServicesSection />
        <TestimonialsSection />
        <BioSection />
        <FAQSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
};

export default Index;
