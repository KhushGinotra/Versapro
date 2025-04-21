import React from 'react';
import { services } from '../constants';
import { FileText, Edit, Search, Lightbulb } from 'lucide-react';

const Services: React.FC = () => {
  // Map to convert string icon names to components
  const iconComponents: Record<string, React.ReactNode> = {
    FileText: <FileText size={36} className="text-accent-500" />,
    Edit: <Edit size={36} className="text-accent-500" />,
    Search: <Search size={36} className="text-accent-500" />,
    Lightbulb: <Lightbulb size={36} className="text-accent-500" />,
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-900 mb-4">Our Services</h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Comprehensive thesis development solutions tailored to your academic discipline and requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-white border border-neutral-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 hover:border-primary-300"
            >
              <div className="mb-5">
                {iconComponents[service.icon]}
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-3">{service.title}</h3>
              <p className="text-neutral-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-neutral-600 mb-6">
            Need a customized solution for your thesis project?
          </p>
          <button className="bg-primary-900 hover:bg-primary-800 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300">
            Custom Thesis Solutions
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
