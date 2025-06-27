
import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      title: "Garage Door Repair",
      description: "We fix broken springs, worn-out rollers, snapped cables, and all types of hardware issues to restore full functionality to your garage door.",
      icon: "🔧"
    },
    {
      title: "New Garage Door Installation",
      description: "Choose from a variety of modern, stylish doors and let our skilled team handle the professional installation for long-lasting performance.",
      icon: "🏠"
    },
    {
      title: "Garage Door Opener Services",
      description: "We repair and upgrade all major opener brands, ensuring smooth, quiet, and secure operation with the latest technology",
      icon: "⚡"
    },
    {
      title: "Spring Replacement",
      description: "Our team is ready 24/7 to respond quickly and resolve urgent garage door problems when you need immediate assistance.",
      icon: "🔄"
    },
    {
      title: "Preventive Maintenance",
      description: "Our team is ready 24/7 to respond quickly and resolve urgent garage door problems when you need immediate assistance.",
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
            We handle everything related to residential garage doors, including:
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
