
import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead = () => {
  return (
    <Helmet>
      <title>Garage Door Glide Showcase - Professional Garage Door Services</title>
      <meta name="description" content="Professional garage door repair, installation, and maintenance services. Fast, reliable, and affordable solutions for all your garage door needs." />
      <meta name="keywords" content="garage door repair, garage door installation, garage door maintenance, garage door service, residential garage doors, commercial garage doors" />
      <meta name="author" content="Garage Door Glide Showcase" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://garagedoorglide.com/" />
      <meta property="og:title" content="Garage Door Glide Showcase - Professional Garage Door Services" />
      <meta property="og:description" content="Professional garage door repair, installation, and maintenance services. Fast, reliable, and affordable solutions for all your garage door needs." />
      <meta property="og:image" content="/assets/hero.png" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://garagedoorglide.com/" />
      <meta property="twitter:title" content="Garage Door Glide Showcase - Professional Garage Door Services" />
      <meta property="twitter:description" content="Professional garage door repair, installation, and maintenance services. Fast, reliable, and affordable solutions for all your garage door needs." />
      <meta property="twitter:image" content="/assets/hero.png" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Garage Door Glide Showcase",
          "description": "Professional garage door repair, installation, and maintenance services",
          "url": "https://garagedoorglide.com",
          "telephone": "+1-555-0123",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Your City",
            "addressRegion": "Your State",
            "postalCode": "12345",
            "addressCountry": "US"
          },
          "openingHours": "Mo-Fr 08:00-18:00, Sa 09:00-17:00",
          "priceRange": "$$"
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;
