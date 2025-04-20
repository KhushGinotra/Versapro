import React, { useState } from 'react';
import { testimonials } from '../constants';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-900 mb-4">What Our Clients Say</h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Hear from students who achieved academic success with our thesis development services.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-primary-50 rounded-lg p-8 sm:p-10 relative">
            <Quote className="absolute top-6 left-6 text-primary-200 h-12 w-12 opacity-50" />
            
            <div className="relative z-10">
              <p className="text-lg sm:text-xl text-neutral-700 mb-6 italic">
                "{testimonials[activeIndex].content}"
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonials[activeIndex].avatar} 
                  alt={testimonials[activeIndex].name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-primary-900">{testimonials[activeIndex].name}</h4>
                  <p className="text-neutral-500 text-sm">{testimonials[activeIndex].title}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === activeIndex ? 'bg-accent-500' : 'bg-neutral-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <button 
            onClick={prevTestimonial}
            className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-8 bg-white rounded-full p-2 shadow-md hover:bg-primary-50 transition-colors duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="text-primary-900" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-8 bg-white rounded-full p-2 shadow-md hover:bg-primary-50 transition-colors duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight className="text-primary-900" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;