
import React, { useState } from 'react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "How often should I have my garage door serviced?",
      answer: "We recommend having your garage door professionally serviced at least once a year to ensure optimal performance and safety. Regular maintenance can prevent costly repairs and extend the life of your door."
    },
    {
      question: "What are the signs that my garage door needs repair?",
      answer: "Common signs include unusual noises, slow or jerky movement, door not opening or closing completely, visible wear on cables or springs, and the door becoming heavy to lift manually."
    },
    {
      question: "How long does a garage door installation take?",
      answer: "A typical residential garage door installation takes 3-5 hours, depending on the complexity of the job and whether additional electrical work is needed for the opener."
    },
    {
      question: "Do you offer emergency services?",
      answer: "Yes, we provide 24/7 emergency garage door repair services. We understand that garage door problems can happen at any time and we're here to help when you need us most."
    },
    {
      question: "What brands of garage doors do you work with?",
      answer: "We work with all major garage door brands including Clopay, Wayne Dalton, Amarr, Chi, and many others. Our technicians are trained to service both residential and commercial doors."
    },
    {
      question: "How much does garage door repair typically cost?",
      answer: "Repair costs vary depending on the issue, but we always provide upfront, transparent pricing. Minor repairs can start around $150, while major repairs may cost $300-600. We'll always give you a quote before starting work."
    }
  ];

  return (
    <section className="bg-gray-50 py-20" role="region" aria-labelledby="faq">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image */}
          <div className="animate-slide-left">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
                alt="Garage door technician working on repairs"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-transparent rounded-lg"></div>
            </div>
          </div>

          {/* FAQ Content */}
          <div className="animate-fade-in">
            <h2 id="faq" className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Have Any Questions?
            </h2>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200">
                  <button
                    className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    aria-expanded={openFAQ === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">
                        {faq.question}
                      </h3>
                      <span className="text-2xl text-blue-600 flex-shrink-0">
                        {openFAQ === index ? '−' : '+'}
                      </span>
                    </div>
                  </button>
                  {openFAQ === index && (
                    <div id={`faq-answer-${index}`} className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
