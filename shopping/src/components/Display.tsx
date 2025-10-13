import { ShoppingBagIcon, Star, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import rednike from "../assets/images/rednike.jpg";
import airmax from "../assets/images/airmax.jpg";
import runner from "../assets/images/runner.jpg";

const Display = () => {
    return (
        <div className="bg-gradient-to-b from-white via-gray-50 to-gray-100 py-16 px-6 md:px-12 lg:px-20 overflow-hidden font-serif">
            {/* Header */}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold italic text-[#002366] text-center mb-12"
            >
                Discover Trending Collections
            </motion.h2>

            {/* Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Left Main Feature */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden  group shadow-lg hover:shadow-2xl transition-all duration-700"
                >
                    {/* Background Image */}
                    <img
                        src={rednike}
                        alt="Trending Shoe"
                        className="w-full h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                    {/* Tag */}
                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md text-gray-800 text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                        🔥 Trending Now
                    </div>

                    {/* Text Content */}
                    <div className="absolute bottom-10 left-8 text-white space-y-3 z-10 max-w-sm">
                        <h3 className="text-3xl font-bold font-serif leading-tight">
                            Step Into Confidence
                        </h3>
                        <p className="text-gray-200 text-sm leading-relaxed">
                            Explore our newest sneakers crafted for both power and personality. Designed to move with you.
                        </p>

                        {/* Buttons */}
                        <div className="flex items-center gap-3 mt-4">
                            <button className="flex items-center gap-2 bg-white cursor-pointer text-gray-900 font-semibold  px-5 py-2 hover:bg-gray-200/10 hover:text-white hover:border-white border transition-all duration-300 shadow-md">
                                <ShoppingBagIcon className="w-4 h-4" />
                                Shop Now
                            </button>
                            <button className="flex items-center gap-1 border cursor-pointer border-white/60 text-white font-semibold  px-5 py-2 hover:bg-white hover:text-gray-900 transition-all duration-300">
                                Discover <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* Right Side Two Smaller Overlays */}
                <div className="flex flex-col gap-8">
                    {/* First smaller card */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="relative  overflow-hidden group shadow-md hover:shadow-xl transition-all duration-700"
                    >
                        <img
                            src={airmax}
                            alt="Product 1"
                            className="w-full h-[220px] object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                        {/* Content Overlay */}
                        <div className="absolute bottom-6 left-6 text-white z-10">
                            <h4 className="text-lg font-semibold mb-1">
                                AirMax 2025 Edition
                            </h4>
                            <p className="text-gray-200 text-xs max-w-xs">
                                Light, breathable, and built for motion.
                            </p>
                            <div className="flex items-center gap-1 text-yellow-400 mt-2">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={14} fill="currentColor" />
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Second smaller card */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="relative overflow-hidden group shadow-md hover:shadow-xl transition-all duration-700"
                    >
                        <img
                            src={runner}
                            alt="Product 2"
                            className="w-full h-[220px] object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                        <div className="absolute bottom-6 left-6 text-white z-10">
                            <h4 className="text-lg font-semibold mb-1">
                                Urban Runners Pro
                            </h4>
                            <p className="text-gray-200 text-xs max-w-xs">
                                Made for the streets, powered by comfort.
                            </p>
                            <button className="mt-3 text-sm font-medium border-b cursor-pointer border-white/60 hover:border-white transition-all duration-300">
                                Explore →
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Display;
