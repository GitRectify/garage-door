
import React from 'react';
import { Button } from '../ui/button';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      review: "Excellent service! They fixed my garage door spring the same day I called. Very professional and reasonably priced.",
      location: "Phoenix, AZ"
    },
    {
      name: "Mike Chen",
      rating: 5,
      review: "Fast, reliable, and honest. They diagnosed the problem quickly and had it fixed in no time. Highly recommend!",
      location: "Scottsdale, AZ"
    },
    {
      name: "Jennifer Lopez",
      rating: 5,
      review: "Outstanding customer service! The technician was knowledgeable and explained everything clearly. Great experience overall.",
      location: "Tempe, AZ"
    },
    {
      name: "Robert Wilson",
      rating: 5,
      review: "Professional installation of our new garage door. Clean work, fair pricing, and excellent follow-up service.",
      location: "Mesa, AZ"
    },
    {
      name: "Lisa Anderson",
      rating: 5,
      review: "Emergency repair on a weekend - they came out quickly and got our garage door working perfectly. Thank you!",
      location: "Chandler, AZ"
    },
    {
      name: "David Martinez",
      rating: 5,
      review: "Top-notch service from start to finish. They stand behind their work and use quality parts. Will use again!",
      location: "Gilbert, AZ"
    }
  ];

  return (
    <section className="bg-gray-900 text-white py-20" role="region" aria-labelledby="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 id="testimonials" className="text-3xl md:text-4xl font-bold mb-4">
            What Our Customers Are Saying
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our services.
          </p>
        </div>

        <div className="animate-stagger">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="stagger-item bg-gray-800 p-6 rounded-lg border border-gray-700">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.review}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center animate-fade-in">
          <p className="text-lg mb-6">Read more 5-star reviews on Yelp</p>
          <Button className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3">
            View Yelp Reviews
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
