
import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      title: "Garage Door Repair",
      description: "Expert repair services for broken springs, cables, rollers, and opener issues.",
      icon: "🔧"
    },
    {
      title: "New Garage Door Installation",
      description: "Professional installation of residential and commercial garage doors.",
      icon: "🏠"
    },
    {
      title: "Garage Door Opener Services",
      description: "Installation, repair, and maintenance of all garage door opener brands.",
      icon: "⚡"
    },
    {
      title: "Spring Replacement",
      description: "Safe and efficient replacement of torsion and extension springs.",
      icon: "🔄"
    },
    {
      title: "Preventive Maintenance",
      description: "Regular maintenance to keep your garage door running smoothly.",
      icon: "🛠️"
    }
  ];

  return (
    <section className="bg-cyan-50 py-20" role="region" aria-labelledby="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 id="services" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Services We Offer
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From emergency repairs to new installations, we provide comprehensive garage door services to meet all your needs.
          </p>
        </div>

        <div className="animate-stagger">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="stagger-item bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
