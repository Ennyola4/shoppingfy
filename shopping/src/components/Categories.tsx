import { motion, type Variants } from "framer-motion";
import fashion from "../assets/images/fashion.jpg";
import gadget from "../assets/images/gadget.jpg";
import { SkipForward, Shirt, Smartphone } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

const Categories = () => {
  return (
    <div className="px-4 md:px-10 lg:px-20 bg-gradient-to-b from-white via-gray-50 to-white pb-10">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl mt-10 font-bold text-center mb-6 text-[#002366]"
      >
        Featured Categories
      </motion.h1>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="text-gray-500 text-center font-medium max-w-2xl mx-auto px-4 mb-10"
      >
        We're here to simplify your search for the perfect items that define
        your life. Our team is dedicated to finding the best in modern fashion,
        innovative gadgets, and timeless lifestyle essentials—all in one place.
      </motion.p>

      {/* Content */}
      <div className="flex flex-col lg:flex-row gap-10 justify-center items-center">
        {/* Fashion */}
        <motion.div
          className="p-4 max-w-xl transition-all duration-500"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
        >
          <motion.h2
            whileHover={{ scale: 0.8 }}
            className="text-3xl p-2 mt-6 font-semibold text-[#0E0C60]"
          >
            Fashion
          </motion.h2>

          <motion.p
            className="p-2 text-gray-500 font-extralight font-serif"
            variants={fadeUp}
            custom={1}
          >
            Embrace the art of self-expression where every stitch tells a story.
            This is more than just clothing; it's the armor for your confidence,
            the palette for your mood.
          </motion.p>

          <motion.button
            whileHover={{
              scale: 1.04,
            }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2 p-3 text-[#0E0C60] cursor-pointer rounded-md hover:bg-[#0E0C60] hover:text-white transition duration-300 flex gap-3 items-center justify-center mt-5 mb-5 text-center border border-[#0E0C60]"
          >
            <SkipForward className="h-5 w-5" />
            Browse collection
          </motion.button>

          {/* Image with overlay */}
          <div className="relative">
            <motion.img
              src={fashion}
              alt="Fashion"
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 25px rgba(14, 12, 96, 0.25)",
              }}
              transition={{ duration: 0.4 }}
              className=" w-full h-[25em] cursor-pointer object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 rounded-xl opacity-0 hover:opacity-100 transition duration-300">
              <Shirt className="text-white w-10 h-10 mb-3" />
              <p className="text-white text-xl font-semibold tracking-wide">
                Trendy Styles
              </p>
            </div>
          </div>
        </motion.div>

        {/* Gadgets */}
        <motion.div
          className=" p-4 max-w-xl transition-all duration-500"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
        >
          {/* Image with overlay */}
          <div className="relative">
            <motion.img
              src={gadget}
              alt="Gadgets"
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 25px rgba(14, 12, 96, 0.25)",
              }}
              transition={{ duration: 0.4 }}
              className=" w-full h-[25em] object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 rounded-xl opacity-0 hover:opacity-100 transition duration-300">
              <Smartphone className="text-white w-10 h-10 mb-3" />
              <p className="text-white text-xl font-semibold tracking-wide">
                Smart Innovations
              </p>
            </div>
          </div>

          <motion.h2
            whileHover={{ scale: 1.05 }}
            className="text-3xl p-2 mt-10 font-semibold text-[#0E0C60]"
          >
            Gadgets
          </motion.h2>

          <motion.p
            className="p-2 text-gray-500 font-light font-serif"
            variants={fadeUp}
            custom={2}
          >
            Indulge in the innovation you crave. This is where cutting-edge
            technology meets pure desire, offering upgrades that feel like
            glorious necessities for modern life.
          </motion.p>

          <motion.button
            whileHover={{
              scale: 1.07,
            }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2 p-3 text-[#0E0C60] cursor-pointer rounded-md hover:bg-[#0E0C60] hover:text-white transition duration-300 flex gap-3 items-center justify-center mt-5 text-center border border-[#0E0C60]"
          >
            <SkipForward className="h-5 w-5" />
            Browse collection
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Categories;
