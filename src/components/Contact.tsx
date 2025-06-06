import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {

  const handleWhatsAppRedirect = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const subject = (document.getElementById('subject') as HTMLInputElement).value;
    const message = (document.getElementById('message') as HTMLTextAreaElement).value;

    const phoneNumber = '919529496285'; // your WhatsApp number
    const messageText = `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(messageText)}`;


    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-primary-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg text-primary-100 max-w-3xl mx-auto">
            Have questions about our thesis development services? We're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <Mail className="text-accent-400 mt-1 mr-4 shrink-0" />
                <div>
                  <p className="font-medium mb-1">Email Us</p>
                  <a href="mailto:info.versaproservices@gmail.com" className="text-primary-100 hover:text-accent-300 transition-colors duration-300">
                    info.versaproservices@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="text-accent-400 mt-1 mr-4 shrink-0" />
                <div>
                  <p className="font-medium mb-1">Call Us</p>
                  <a href="tel:+919529496285" className="text-primary-100 hover:text-accent-300 transition-colors duration-300">
                    +91-9529496285
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="text-accent-400 mt-1 mr-4 shrink-0" />
                <div>
                  <p className="font-medium mb-1">Visit Us</p>
                  <p className="text-primary-100">
                    Daund Maharashtra 413801
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-4">Operating Hours</h3>
            <p className="text-primary-100 mb-1">Monday - Friday: 9AM - 3PM</p>
          </div>

          <div className="lg:col-span-3">
            <form
              className="bg-white rounded-lg p-8 text-neutral-800"
              onSubmit={handleWhatsAppRedirect}
            >
              <h3 className="text-xl font-semibold text-primary-900 mb-6">Send Us a Message</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Your email"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Subject of your message"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="flex items-center justify-center w-full bg-accent-500 hover:bg-accent-600 text-white font-medium py-3 px-4 rounded-md transition-colors duration-300"
              >
                Send Message
                <Send size={18} className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
