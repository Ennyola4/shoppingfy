// src/pages/Checkout.tsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { motion } from "framer-motion";
import { Trash2, Minus, Plus, ShoppingBag, CircleCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const Checkout = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);
    const { items, totalPrice, removeItem, updateQuantity, setIsCartOpen, clearCart } = useCart();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        fullName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        postalCode: "",
        country: "",
        cardNumber: "",
        cardName: "",
        expiry: "",
        cvc: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (items.length === 0) return alert("Your cart is empty!");
        setIsSubmitting(true);

        setTimeout(() => {
            alert("Payment successful! Order placed.");
            clearCart();
            setIsCartOpen(false);
            navigate("/");
        }, 1500);
    };

    return (
        <section className="max-w-7xl mx-auto py-10 px-5 sm:px-8 md:px-12 lg:px-20 font-serif mt-8">
            <motion.h1
                className="text-3xl md:text-4xl font-bold text-[#002366] mb-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Checkout
            </motion.h1>

            <div className="flex flex-col lg:flex-row gap-10">
                {/* Left: Billing & Payment Form */}
                <motion.div
                    className="flex-1 bg-white p-6 rounded-lg shadow-md space-y-6"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-xl font-semibold mb-4">Billing & Shipping</h2>
                    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Full Name"
                            value={form.fullName}
                            onChange={handleChange}
                            required
                            className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#002366] outline-none"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#002366] outline-none"
                        />
                        <input
                            type="text"
                            name="phone"
                            placeholder="Phone Number"
                            value={form.phone}
                            onChange={handleChange}
                            required
                            className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#002366] outline-none"
                        />
                        <input
                            type="text"
                            name="address"
                            placeholder="Address"
                            value={form.address}
                            onChange={handleChange}
                            required
                            className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#002366] outline-none"
                        />
                        <div className="flex flex-col md:flex-row gap-4 w-full">
                            <input
                                type="text"
                                name="city"
                                placeholder="City"
                                value={form.city}
                                onChange={handleChange}
                                required
                                className="border border-gray-300 rounded-md px-4 py-2 md:flex-1 focus:ring-2 focus:ring-[#002366] outline-none"
                            />
                            <input
                                type="text"
                                name="postalCode"
                                placeholder="Postal Code"
                                value={form.postalCode}
                                onChange={handleChange}
                                required
                                className="border border-gray-300 rounded-md px-4 py-2 md:flex-1 focus:ring-2 focus:ring-[#002366] outline-none"
                            />
                        </div>
                        <input
                            type="text"
                            name="country"
                            placeholder="Country"
                            value={form.country}
                            onChange={handleChange}
                            required
                            className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#002366] outline-none"
                        />

                        {/* Payment Section */}
                        <h2 className="text-xl font-semibold mt-6 mb-4">Payment Details</h2>
                        <input
                            type="text"
                            name="cardNumber"
                            placeholder="Card Number"
                            value={form.cardNumber}
                            onChange={handleChange}
                            required
                            maxLength={16}
                            className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#002366] outline-none"
                        />
                        <input
                            type="text"
                            name="cardName"
                            placeholder="Name on Card"
                            value={form.cardName}
                            onChange={handleChange}
                            required
                            className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#002366] outline-none"
                        />
                        <div className="flex flex-col md:flex-row gap-4 w-full">
                            <input
                                type="text"
                                name="expiry"
                                placeholder="MM/YY"
                                value={form.expiry}
                                onChange={handleChange}
                                required
                                className="border border-gray-300 rounded-md px-4 py-2 md:flex-1 focus:ring-2 focus:ring-[#002366] outline-none"
                            />
                            <input
                                type="text"
                                name="cvc"
                                placeholder="CVC"
                                value={form.cvc}
                                onChange={handleChange}
                                required
                                maxLength={3}
                                className="border border-gray-300 rounded-md px-4 py-2 md:flex-1 focus:ring-2 focus:ring-[#002366] outline-none"
                            />
                        </div>
                        <Button
                            type="submit"
                            className={`bg-[#C44536]/80 cursor-pointer text-white py-3 rounded-md mt-4 hover:bg-[#C44536] ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                                }`}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Processing..." : `Pay ₦${totalPrice.toLocaleString()}`}
                        </Button>
                    </form>
                </motion.div>

                {/* Right: Cart Summary*/}
                <motion.div
                    className="w-full lg:w-1/3 bg-white border border-gray-200 p-6 rounded-lg shadow-md flex flex-col lg:sticky lg:top-24 lg:self-start lg:max-h-[calc(100vh-8rem)]"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="mb-4 shadow-sm border border-gray-200 p-4 rounded-lg">
                        <h2 className="text-md font-semibold">Your Cart <span className="text-[#C08081]/80">{items.length}</span></h2>
                        {items.length === 0 ? (
                            <p className="text-gray-500"></p>
                        ) : items.length === 1 ? (
                            <span className="flex items-center mt-2">
                                <p className="text-gray-500 text-[10px]">This is the item in your bag.</p>
                                <CircleCheck className="inline-block ml-1 text-green-600 w-3 h-3 " />
                            </span>
                        ) : (
                            <span className="flex items-center mt-2">
                                <p className="text-gray-500 text-[10px]">These are the items in your bag.</p>
                                <CircleCheck className="inline-block ml-1 text-green-500 w-3 h-3 " />
                            </span>
                        )}
                    </div>
                    
                    {/* Fixed height container for mobile */}
                    <div className="flex-1 overflow-y-auto max-h-[400px] md:max-h-none space-y-4 pr-2 mb-4" 
                         style={{ scrollbarWidth: 'thin', scrollbarColor: '#cbd5e100 transparent' }}>
                        {items.length === 0 ? (
                            <div className="flex flex-col items-center justify-center h-full min-h-[200px]">
                                <ShoppingBag className="h-16 w-16 mb-4 text-[#C08081]/20" />
                                <p className="text-gray-500 text-center">Your cart is empty.</p>
                            </div>
                        ) : (
                            items.map((item) => (
                                <div
                                    key={`${item.product.id}-${item.size}-${item.color}`}
                                    className="flex items-center gap-4 p-4 bg-[#C08081]/10 rounded-lg"
                                >
                                    <img
                                        src={item.product.images?.[0] ?? item.product.image}
                                        alt={item.product.name}
                                        className="w-16 h-16 object-cover rounded-md"
                                    />
                                    <div className="flex-1">
                                        <h4 className="text-sm font-medium">{item.product.name}</h4>
                                        <p className="text-xs text-gray-500">
                                            Size {item.size} • {item.color}
                                        </p>
                                        <div className="flex items-center gap-2 mt-1">
                                            <button
                                                onClick={() =>
                                                    updateQuantity(item.product.id, item.size, item.color, item.quantity - 1)
                                                }
                                                className="w-6 h-6 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100"
                                            >
                                                <Minus className="w-3 h-3" />
                                            </button>
                                            <span className="text-sm">{item.quantity}</span>
                                            <button
                                                onClick={() =>
                                                    updateQuantity(item.product.id, item.size, item.color, item.quantity + 1)
                                                }
                                                className="w-6 h-6 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100"
                                            >
                                                <Plus className="w-3 h-3" />
                                            </button>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => removeItem(item.product.id, item.size, item.color)}
                                        className="text-red-500 hover:text-red-600"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Total */}
                    <div className="mt-6 border-t pt-4">
                        <div className="flex justify-between font-semibold text-lg items-center">
                            <span>
                                Total Amount:
                            </span>
                            <span className=" text-sm px-3 py-1  animate-pulse text-green-500">₦{totalPrice.toLocaleString()}</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Checkout;