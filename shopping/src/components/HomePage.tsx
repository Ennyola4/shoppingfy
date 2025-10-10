import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

import { House, ShoppingBag, Tablet } from "lucide-react";

const HomePage = () => {
    // Text to animate
    const titleText = "Welcome to Shoppingfy";

    // Type-safe variant definition
    const letterVariant: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.08, // Delay each letter
                type: "spring",
                stiffness: 200,
            },
        }),
    };

    return (
        <div
            className="relative h-[63vh] flex items-center justify-center px-6 md:px-10 lg:px-20 overflow-hidden bg-cover bg-center"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1600&q=80')",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 "></div>

            <div className="relative flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-7xl gap-8 md:gap-14 z-10">
                {/* Left Text Section */}
                <motion.div
                    initial={{ opacity: 0, y: 90 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/2 space-y-4 md:space-y-6"
                >
                    <div className="flex flex-wrap justify-center lg:justify-start font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white drop-shadow-md leading-tight">
                        {titleText.split("").map((char, i) => (
                            <motion.span
                                key={i}
                                variants={letterVariant}
                                initial="hidden"
                                animate="visible"
                                custom={i}
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                    </div>

                    <p className="text-gray-100 text-sm sm:text-base lg:text-lg max-w-md md:max-w-lg leading-relaxed font-serif">
                        Your one-stop shop for everything you love — fashion, gadgets, and
                        more. Discover modern style, tech, and lifestyle essentials today!
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 w-full sm:justify-center lg:justify-start">
                        <button
                           
                            className="mt-2 px-5 py-2 sm:px-6 cursor-pointer sm:py-3 border border-white text-white font-semibold hover:bg-gray-100 hover:text-gray-800 transition duration-500"
                        >
                            <ShoppingBag className="inline items-center mr-2 hover:text-gray-800 " size={16} />
                            Shop Fashion
                        </button>

                        <button
                            
                            className="mt-2 px-5 py-2 sm:px-6 cursor-pointer sm:py-3 border border-white text-white font-semibold hover:bg-gray-100 hover:text-gray-800 transition duration-500"
                        >
                            <Tablet className="inline items-center mr-2  hover:text-gray-800 " size={16} />
                            Explore Gadget
                        </button>

                         <button
                            
                            className="mt-2 px-5 py-2 sm:px-6 cursor-pointer sm:py-3 border border-white text-white font-semibold hover:bg-gray-100 hover:text-gray-800 transition duration-500"
                        >
                            <House className="inline items-center mr-2  hover:text-gray-800 " size={16} />
                            Discover more
                        </button>
                        
                    </div>
                </motion.div>

                {/* Right Floating Orbs */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative w-full lg:w-1/2 flex justify-center"
                >
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute top-0 right-16 w-16 h-16 bg-orange-500/40 blur-2xl rounded-full"
                    ></motion.div>

                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute bottom-0 left-10 w-20 h-20 bg-pink-500/30 blur-2xl rounded-full"
                    ></motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default HomePage;
