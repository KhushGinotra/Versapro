import React from 'react';
import { stats } from '../constants';
import { CheckCircle, Award, Clock } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-primary-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-900 mb-6">
              Why Choose VersaPRO For Your Academic Success
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              We are a team of academic experts dedicated to helping students achieve their thesis goals with precision and excellence. Our approach combines thorough research, critical analysis, and clear communication.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="text-accent-500 mt-1 mr-3 shrink-0" />
                <div>
                  <h4 className="font-semibold text-primary-900 text-lg">Expert Academic Writers</h4>
                  <p className="text-neutral-600">Specialized PhD-level researchers across all disciplines</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="text-accent-500 mt-1 mr-3 shrink-0" />
                <div>
                  <h4 className="font-semibold text-primary-900 text-lg">Customized Approach</h4>
                  <p className="text-neutral-600">Personalized solutions tailored to your specific requirements</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="text-accent-500 mt-1 mr-3 shrink-0" />
                <div>
                  <h4 className="font-semibold text-primary-900 text-lg">Timely Delivery</h4>
                  <p className="text-neutral-600">Committed to delivering quality work within your timeline</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img 
                src="https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Academic research" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-primary-900 opacity-10"></div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 flex items-center bg-white p-3 rounded-lg shadow-lg">
              <Award className="text-accent-500 mr-2" />
              <div>
                <p className="text-primary-900 font-semibold">Recognized Excellence</p>
                <p className="text-sm text-neutral-600">Top-rated thesis services</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {stats.map((stat) => (
            <div key={stat.id} className="bg-white p-6 rounded-lg shadow-md text-center">
              <p className="text-3xl font-bold text-accent-500 mb-1">{stat.value}</p>
              <p className="text-neutral-600">{stat.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
