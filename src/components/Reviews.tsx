
import React, { useState } from 'react';
import { REVIEWS_DATA } from '../constants';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
    return (
        <div className="flex">
            {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className={i < rating ? 'text-amber-500 fill-current' : 'text-stone-300'} />
            ))}
        </div>
    );
};

const ReviewForm: React.FC = () => {
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [name, setName] = useState('');
    const [reviewText, setReviewText] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="text-center bg-green-50 border border-green-200 p-8 rounded-lg">
                <h3 className="text-2xl font-serif font-semibold text-green-800 mb-2">Thank you for your feedback!</h3>
                <p className="text-green-700">Your review helps us serve you better.</p>
            </div>
        );
    }
    
    return (
        <div className="bg-white p-8 rounded-lg shadow-lg mt-16">
            <h3 className="text-3xl font-serif font-bold text-center mb-6 text-amber-900">Leave a Review</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-stone-700 mb-2 font-semibold">Your Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-800" 
                        required 
                    />
                </div>
                <div>
                    <label className="block text-stone-700 mb-2 font-semibold">Your Rating</label>
                    <div className="flex items-center">
                        {[...Array(5)].map((_, i) => {
                            const starValue = i + 1;
                            return (
                                <button
                                    type="button"
                                    key={starValue}
                                    onClick={() => setRating(starValue)}
                                    onMouseEnter={() => setHoverRating(starValue)}
                                    onMouseLeave={() => setHoverRating(0)}
                                >
                                    <Star size={28} className={`transition-colors ${(hoverRating || rating) >= starValue ? 'text-amber-500 fill-current' : 'text-stone-300'}`} />
                                </button>
                            );
                        })}
                    </div>
                </div>
                <div>
                    <label htmlFor="reviewText" className="block text-stone-700 mb-2 font-semibold">Your Review</label>
                    <textarea 
                        id="reviewText" 
                        rows={4}
                        value={reviewText}
                        onChange={(e) => setReviewText(e.target.value)}
                        className="w-full px-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-800" 
                        required
                    ></textarea>
                </div>
                <button type="submit" className="w-full bg-amber-800 text-white font-bold py-3 px-6 rounded-md hover:bg-amber-900 transition-colors duration-300">
                    Submit Review
                </button>
            </form>
        </div>
    );
};

const Reviews: React.FC = () => {
    return (
        <section id="reviews" className="py-20 bg-stone-50">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-serif font-bold text-center mb-12 text-amber-900">What Our Guests Are Saying</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {REVIEWS_DATA.map((review, index) => (
                        <motion.div 
                            key={index} 
                            className="bg-white p-8 rounded-lg shadow-lg flex flex-col"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="flex items-center mb-4">
                                <img src={review.avatar} alt={review.author} className="w-14 h-14 rounded-full mr-4" />
                                <div>
                                    <h4 className="font-bold text-lg text-stone-800">{review.author}</h4>
                                    <StarRating rating={review.rating} />
                                </div>
                            </div>
                            <p className="text-stone-600 italic">"{review.text}"</p>
                        </motion.div>
                    ))}
                </div>
                <ReviewForm />
            </div>
        </section>
    );
};

export default Reviews;
