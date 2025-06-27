
import React from 'react';

const WhyChooseUsSection = () => {
  return (
    <section className="bg-gray-900 text-white py-20" role="region" aria-labelledby="why-choose-us">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="animate-slide-left">
            <div className="relative">
              <img 
                src="/lovable-uploads/why.png"
                alt="Garage door technician working professionally"
                className="w-full h-80 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-transparent rounded-lg"></div>
            </div>
          </div>

          {/* Content */}
          <div className="animate-fade-in">
            <h2 id="why-choose-us" className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose <span className="text-cyan-400">Zero Fox Garage Door?</span>
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-cyan-400 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Fast Response Time</h3>
                  <p className="text-gray-300">We understand garage door emergencies can't wait. Our team responds quickly to get your door working again.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-cyan-400 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Expert Technicians</h3>
                  <p className="text-gray-300">Our certified professionals have years of experience with all garage door brands and models.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-cyan-400 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Quality Parts & Service</h3>
                  <p className="text-gray-300">We use only high-quality parts and provide comprehensive warranties on all our work.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-cyan-400 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Transparent Pricing</h3>
                  <p className="text-gray-300">No hidden fees or surprise charges. We provide upfront, honest pricing for all services.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
