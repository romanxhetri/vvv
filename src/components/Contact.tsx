
import React, { useState } from 'react';
import AnimatedText3D from './AnimatedText3D';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 bg-[#F8F5F2]">
      <div className="container mx-auto px-6">
        <AnimatedText3D el="h2" text="Get In Touch" className="text-4xl font-serif font-bold text-center mb-12 text-amber-900" />
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg border border-stone-200/50">
            <h3 className="text-2xl font-serif font-semibold mb-4 text-stone-800">Contact Information</h3>
            <div className="space-y-4 text-stone-700">
              <p><strong>Address:</strong> 123 Potato Patch Way, Spudville, 45678</p>
              <p><strong>Phone:</strong> (555) POT-ATOE</p>
              <p><strong>Email:</strong> reservations@potatoandfriends.com</p>
            </div>
            <h3 className="text-2xl font-serif font-semibold mt-8 mb-4 text-stone-800">Hours</h3>
            <div className="space-y-2 text-stone-700">
              <p><strong>Tuesday - Friday:</strong> 5:00 PM - 10:00 PM</p>
              <p><strong>Saturday - Sunday:</strong> 4:00 PM - 11:00 PM</p>
              <p><strong>Monday:</strong> Closed for potato dreaming</p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg border border-stone-200/50">
            <h3 className="text-2xl font-serif font-semibold mb-4 text-stone-800">Send us a message</h3>
            <form name="contact" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="contact" />
              <div className="mb-4">
                <label htmlFor="name" className="block text-stone-700 mb-2">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-800 bg-stone-50" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-stone-700 mb-2">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-800 bg-stone-50" required />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-stone-700 mb-2">Message</label>
                <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} className="w-full px-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-800 bg-stone-50" required></textarea>
              </div>
              <button type="submit" className="w-full bg-amber-800 text-white font-bold py-3 px-6 rounded-md hover:bg-amber-900 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;