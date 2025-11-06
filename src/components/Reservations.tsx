
import React, { useState } from 'react';

const Reservations: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <section id="reservations" className="py-20 bg-stone-100">
            <div className="container mx-auto px-6">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-4xl font-serif font-bold mb-6 text-amber-900">Make a Reservation</h2>
                    <p className="text-lg text-stone-700 mb-8">
                        Book your table online for an unforgettable dining experience.
                    </p>
                </div>

                <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                    {submitted ? (
                        <div className="text-center">
                            <h3 className="text-2xl font-serif font-semibold text-green-700 mb-4">Thank You!</h3>
                            <p className="text-stone-700">Your reservation request has been received. We will contact you shortly to confirm.</p>
                            <button onClick={() => setSubmitted(false)} className="mt-6 bg-amber-800 text-white font-bold py-2 px-6 rounded-md hover:bg-amber-900 transition-colors">
                                Make Another Reservation
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-stone-700 mb-2">Full Name</label>
                                <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-800" required />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-stone-700 mb-2">Phone Number</label>
                                <input type="tel" id="phone" name="phone" className="w-full px-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-800" required />
                            </div>
                            <div>
                                <label htmlFor="date" className="block text-stone-700 mb-2">Date</label>
                                <input type="date" id="date" name="date" className="w-full px-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-800" required />
                            </div>
                            <div>
                                <label htmlFor="time" className="block text-stone-700 mb-2">Time</label>
                                <input type="time" id="time" name="time" className="w-full px-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-800" required />
                            </div>
                             <div>
                                <label htmlFor="guests" className="block text-stone-700 mb-2">Number of Guests</label>
                                <input type="number" id="guests" name="guests" min="1" max="12" className="w-full px-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-800" required />
                            </div>
                            <div className="md:col-span-2">
                                <label htmlFor="requests" className="block text-stone-700 mb-2">Special Requests (optional)</label>
                                <textarea id="requests" name="requests" rows={3} className="w-full px-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-800"></textarea>
                            </div>
                            <div className="md:col-span-2">
                                <button type="submit" className="w-full bg-amber-800 text-white font-bold py-3 px-6 rounded-md hover:bg-amber-900 transition-colors duration-300">
                                    Book Table
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Reservations;
