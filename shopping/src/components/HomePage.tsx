import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { ShoppingBag, Tablet } from "lucide-react";
import { useEffect, useState } from "react";

const HomePage = () => {
  const titleText = "Welcome to Shoppingfy";

  const letterVariant: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.08,
        type: "spring",
        stiffness: 200,
      },
    }),
  };

  // Background carousel images
  const images = [
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1600&q=80",
     "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1600&q=80",
     "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1600&q=80",
     "https://cdn.pixabay.com/photo/2017/12/24/01/18/childrens-shoes-3036292_1280.jpg",
     "https://www.shutterstock.com/image-illustration/home-appliances-household-kitchen-technics-260nw-2267656915.jpg",
     "https://www.essence.com/wp-content/uploads/2025/01/MG_3321-scaled.jpg"
  ];

  const [current, setCurrent] = useState(0);

  // Change background every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-[55vh] flex items-center justify-center px-6 md:px-10 lg:px-20 overflow-hidden font-serif">
      {/* Background Carousel */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={images[current]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${images[current]})`,
            }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-7xl gap-8 md:gap-14 z-10">
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 90 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/2 space-y-4 md:space-y-6"
        >
          <div className="flex flex-wrap justify-center lg:justify-start font-serif text-2xl sm:text-xl lg:text-3xl font-bold text-white drop-shadow-md leading-tight">
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
            <button className="mt-2 cursor-pointer px-5 py-2 sm:px-6 sm:py-3 border border-white text-white font-semibold hover:bg-gray-100 hover:text-gray-800 transition duration-500">
              <ShoppingBag
                className="inline items-center mr-2 hover:text-gray-800"
                size={16}
              />
              
              <a href="/shop">Shop Fashion</a>
            </button>

            <button className="mt-2 cursor-pointer px-5 py-2 sm:px-6 sm:py-3 border border-white text-white font-semibold hover:bg-gray-100 hover:text-gray-800 transition duration-500">
              <Tablet
                className="inline items-center mr-2 hover:text-gray-800"
                size={16}
              />
              Explore Gadget
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
