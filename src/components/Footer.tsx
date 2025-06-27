
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Zero Fox Garage Door</h3>
            <p className="text-gray-300 mb-4">
              Professional garage door services in Phoenix and surrounding areas. 
              Licensed, insured, and committed to quality.
            </p>
            <div className="text-sm text-gray-400">
              <p>License #123456</p>
              <p>Fully Insured</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Garage Door Repair</li>
              <li>New Door Installation</li>
              <li>Opener Services</li>
              <li>Spring Replacement</li>
              <li>Preventive Maintenance</li>
              <li>Emergency Service</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <p>(555) 123-4567</p>
              <p>info@zerofoxgarage.com</p>
              <p>Phoenix, AZ & Surrounding Areas</p>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hours</h4>
            <div className="space-y-1 text-gray-300 text-sm">
              <p>Monday - Friday: 8AM - 6PM</p>
              <p>Saturday: 9AM - 5PM</p>
              <p>Sunday: Emergency Only</p>
              <p className="text-cyan-400 font-semibold mt-2">24/7 Emergency Service</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Zero Fox Garage Door. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
