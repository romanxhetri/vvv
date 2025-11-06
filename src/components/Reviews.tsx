
import React from 'react';
import { REVIEWS_DATA } from '../constants';
import { Star } from 'lucide-react';

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
    return (
        <div className="flex">
            {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className={i < rating ? 'text-amber-500 fill-current' : 'text-stone-300'} />
            ))}
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
                        <div key={index} className="bg-white p-8 rounded-lg shadow-lg flex flex-col">
                            <div className="flex items-center mb-4">
                                <img src={review.avatar} alt={review.author} className="w-14 h-14 rounded-full mr-4" />
                                <div>
                                    <h4 className="font-bold text-lg text-stone-800">{review.author}</h4>
                                    <StarRating rating={review.rating} />
                                </div>
                            </div>
                            <p className="text-stone-600 italic">"{review.text}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
