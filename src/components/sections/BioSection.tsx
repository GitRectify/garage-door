
import React from 'react';

const BioSection = () => {
  return (
    <section className="bg-white py-20" role="region" aria-labelledby="meet-owner">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-left">
            <h2 id="meet-owner" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Meet the Owner
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Hi, I’m Emiliano, the proud owner of Zero Fox Garage Door. With over 15 years of experience in the garage door industry, I started this company with a simple mission: to provide honest, reliable, and affordable garage door services to homeowners and businesses in the Phoenix area.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I believe in doing the job right the first time, using quality parts, and treating every customer like family. When you call Zero Fox Garage Door, you're not just getting a service – you're getting a partner who cares about your satisfaction and safety.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our team is fully licensed, insured, and committed to continuing education to stay current with the latest garage door technologies and safety standards. We're proud to serve our community and look forward to helping you with all your garage door needs.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">15+ Years Experience</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">Local Phoenix Business</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">24/7 Emergency Service</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="animate-slide-right">
            <div className="relative">
              <img 
                src="https://drive.google.com/file/d/1QMjwvfL7y_aqA-zxN34M7LIRGv1qiJEa/view?usp=sharing"
                alt="Hi, I'm Emiliano, the proud owner of Zero Fox Garage Door."
                className="w-full h-96 object-cover rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BioSection;
