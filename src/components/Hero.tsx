import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative pt-28 pb-20 sm:pt-32 sm:pb-28 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary-50 to-white -z-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-slide-up">
            <h1 className="text-4xl sm:text-5xl font-bold text-primary-900 mb-6 leading-tight">
              Elevate Your <span className="text-accent-500">Academic Journey</span> With Expert Thesis Support
            </h1>
            <p className="text-lg text-neutral-600 mb-8 max-w-xl">
              Professional thesis development services tailored to your academic needs. 
              From concept to completion, we guide you towards excellence.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="flex items-center justify-center bg-accent-500 hover:bg-accent-600 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300">
                Get Free Consultation
                <ArrowRight size={18} className="ml-2" />
              </button>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img 
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Students working on research" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-primary-900 opacity-10"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="bg-primary-50 p-3 rounded-md">
                <p className="text-primary-900 font-semibold">98% Success Rate</p>
                <p className="text-sm text-neutral-600">Across 3,500+ projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
