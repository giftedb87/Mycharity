
import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you would handle form submission here (e.g., send to an API endpoint).
    // For this static site, we'll just log it and show a message.
    console.log('Form submitted:', formData);
    setFormStatus('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div>
      {/* Page Header */}
      <section className="bg-dark-charcoal py-20 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="mt-2 text-lg text-gray-300">We'd love to hear from you. Get in touch with our team.</p>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-dark-charcoal mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-yellow focus:border-primary-yellow sm:text-sm" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-yellow focus:border-primary-yellow sm:text-sm" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                  <input type="text" name="subject" id="subject" value={formData.subject} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-yellow focus:border-primary-yellow sm:text-sm" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea name="message" id="message" rows={5} value={formData.message} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-yellow focus:border-primary-yellow sm:text-sm"></textarea>
                </div>
                <div>
                  <button type="submit" className="w-full bg-primary-yellow text-white font-bold py-3 px-4 rounded-lg hover:bg-amber-500 transition-colors">
                    Send Message
                  </button>
                </div>
              </form>
              {formStatus && <p className="mt-4 text-center text-green-600">{formStatus}</p>}
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold text-dark-charcoal mb-4">Our Address</h3>
                    <p className="text-gray-600">291 Royal Ave, Cherry Hill, NJ 08002, USA</p>
                </div>
                 <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold text-dark-charcoal mb-4">Contact Details</h3>
                    <p className="text-gray-600">Email: contact@mycharity.org</p>
                    <p className="text-gray-600">Phone: (239) 555-0108</p>
                </div>
                <div className="bg-white h-64 rounded-lg shadow-lg overflow-hidden">
                    <iframe
                        title="My Charity Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.465113959146!2d-75.0210293233801!3d39.93018287152178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c134375a03c37d%3A0x4a4f8f4f20188961!2s291%20Royal%20Ave%2C%20Cherry%20Hill%2C%20NJ%2008002%2C%20USA!5e0!3m2!1sen!2s!4v1721327421379!5m2!1sen!2s"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;