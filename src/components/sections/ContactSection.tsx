
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This is a placeholder - form submission would be handled by backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will contact you soon.');
  };

  return (
    <section className="bg-white py-20" role="region" aria-labelledby="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 id="contact" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Fix That Garage Door?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get in touch with us today for a free quote or emergency service. We're here to help!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-slide-left">
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Free Quote</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone *
                    </label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="repair">Garage Door Repair</option>
                    <option value="installation">New Door Installation</option>
                    <option value="opener">Opener Service</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="emergency">Emergency Service</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your garage door issue..."
                  ></textarea>
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg">
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info & Calendar */}
          <div className="animate-slide-right space-y-8">
            {/* Contact Information */}
            <div className="bg-blue-600 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📞</span>
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div>(555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">✉️</span>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div>info@zerofoxgarage.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📍</span>
                  <div>
                    <div className="font-semibold">Service Area</div>
                    <div>Phoenix, Scottsdale, Tempe, Mesa & Surrounding Areas</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🕒</span>
                  <div>
                    <div className="font-semibold">Hours</div>
                    <div>Mon-Fri: 8AM-6PM</div>
                    <div>Sat: 9AM-5PM</div>
                    <div>24/7 Emergency Service</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Placeholder Calendar */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Schedule Appointment</h3>
              <div className="bg-white p-4 rounded border-2 border-dashed border-gray-300 text-center text-gray-500">
                <div className="text-4xl mb-2">📅</div>
                <p>Calendar Integration</p>
                <p className="text-sm">(Coming Soon)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
