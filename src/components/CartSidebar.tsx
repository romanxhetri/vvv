
import React from 'react';
import { useCart } from '../contexts/CartContext';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Plus, Minus, Trash2 } from 'lucide-react';

const CartSidebar: React.FC = () => {
    const { cart, isCartOpen, closeCart, updateQuantity, removeFromCart, totalPrice } = useCart();

    if (!isCartOpen) return null;
    
    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 bg-black/50 z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeCart}
            />
            <motion.div
                className="fixed top-0 right-0 h-full w-full max-w-md bg-stone-50 shadow-lg z-50 flex flex-col"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
                <div className="flex justify-between items-center p-6 border-b border-stone-200">
                    <h2 className="text-2xl font-serif font-bold text-amber-900">Your Order</h2>
                    <button onClick={closeCart} className="p-2 rounded-full hover:bg-stone-200"><X size={24}/></button>
                </div>
                
                {cart.length > 0 ? (
                    <>
                        <div className="flex-grow overflow-y-auto p-6 space-y-4">
                            {cart.map(item => (
                                <div key={item.id} className="flex gap-4 items-center">
                                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md"/>
                                    <div className="flex-grow">
                                        <h4 className="font-semibold text-stone-800">{item.name}</h4>
                                        <p className="text-amber-800 font-bold">${item.price.toFixed(2)}</p>
                                        <div className="flex items-center border border-stone-200 rounded-md w-fit mt-2">
                                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-2"><Minus size={14}/></button>
                                            <span className="px-2 text-sm">{item.quantity}</span>
                                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-2"><Plus size={14}/></button>
                                        </div>
                                    </div>
                                    <button onClick={() => removeFromCart(item.id)} className="text-stone-500 hover:text-red-600"><Trash2 size={20}/></button>
                                </div>
                            ))}
                        </div>
                        <div className="p-6 border-t border-stone-200">
                            <div className="flex justify-between items-center mb-4 text-lg">
                                <span className="font-semibold text-stone-700">Subtotal:</span>
                                <span className="font-bold text-stone-800">${totalPrice.toFixed(2)}</span>
                            </div>
                            <button className="w-full bg-amber-800 text-white font-bold py-3 px-6 rounded-md hover:bg-amber-900 transition-colors">
                                Proceed to Checkout
                            </button>
                        </div>
                    </>
                ) : (
                    <div className="flex-grow flex flex-col items-center justify-center p-6 text-center">
                        <h3 className="text-xl font-semibold text-stone-700">Your cart is empty</h3>
                        <p className="text-stone-500 mt-2">Add some delicious food from our menu!</p>
                    </div>
                )}
            </motion.div>
        </AnimatePresence>
    );
};

export default CartSidebar;
