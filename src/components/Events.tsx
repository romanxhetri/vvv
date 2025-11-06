
import React, { useState } from 'react';

const Events: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <section id="events" className="py-20 bg-stone-100">
            <div className="container mx-auto px-6">
                 <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl font-serif font-bold mb-6 text-amber-900">Private Dining & Events</h2>
                        <p className="text-lg text-stone-700 mb-4">
                            Host your next special occasion with us. From intimate family gatherings to corporate events, we provide a memorable setting and a customized menu to make your event truly special.
                        </p>
                        <p className="text-lg text-stone-700">
                           Our private dining space can accommodate up to 30 guests. Let us handle the details, so you can enjoy the moment. Fill out the form to start planning your event.
                        </p>
                         <img src="https://picsum.photos/800/600?random=35" alt="Private dining setup" className="rounded-lg shadow-xl mt-8 w-full h-auto object-cover"/>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-xl">
                        {submitted ? (
                            <div className="text-center">
                                <h3 className="text-2xl font-serif font-semibold text-green-700 mb-4">Inquiry Sent!</h3>
                                <p className="text-stone-700">Thank you for your interest. Our event coordinator will be in touch with you within 24 hours.</p>
                                <button onClick={() => setSubmitted(false)} className="mt-6 bg-amber-800 text-white font-bold py-2 px-6 rounded-md hover:bg-amber-900 transition-colors">
                                    Send Another Inquiry
                                </button>
                            </div>
                        ) : (
                            <>
                                <h3 className="text-2xl font-serif font-semibold mb-6 text-stone-800">Event Inquiry</h3>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <input type="text" placeholder="Full Name" className="w-full px-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-800" required />
                                    <input type="email" placeholder="Email Address" className="w-full px-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-800" required />
                                    <input type="tel" placeholder="Phone Number" className="w-full px-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-800" />
                                    <input type="date" placeholder="Event Date" className="w-full px-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-800" required />
                                    <input type="number" placeholder="Number of Guests" min="5" className="w-full px-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-800" required />
                                    <textarea placeholder="Tell us about your event..." rows={3} className="w-full px-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-800"></textarea>
                                    <button type="submit" className="w-full bg-amber-800 text-white font-bold py-3 px-6 rounded-md hover:bg-amber-900 transition-colors">
                                        Submit Inquiry
                                    </button>
                                </form>
                            </>
                        )}
                    </div>
                 </div>
            </div>
        </section>
    );
};

export default Events;
