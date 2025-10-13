import sneakers from "../assets/images/sneakers.jpg";
import nike2 from "../assets/images/nike2.jpg";

import { motion } from "framer-motion";

const SecondDisplay = () => {
  return (
    <section className="px-6 py-10 md:px-16 lg:px-24 bg-gradient-to-br from-white via-gray-50 to-gray-100 font-serif">
      {/* First Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-16">
        <motion.img
          src={nike2}
          alt="Red Nike"
          className="w-full lg:w-1/2 rounded-2xl shadow-xl object-cover hover:scale-105 transition-transform duration-500"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
        <motion.div
          className="lg:w-1/2 text-gray-700 text-lg leading-relaxed"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <h1 className="text-2xl md:text-3xl font-semibold text-[#002366] mb-4">
            Step Into Comfort & Style
          </h1>
          <p className="mb-3 text-gray-500">
            Experience the next level of comfort with Nike’s latest design. Built
            for performance and style, it’s crafted to move with you — wherever
            your day takes you.
          </p>
          <p className="text-gray-500">
            Every detail is engineered for precision, blending innovation and
            fashion seamlessly. Whether you’re running or relaxing, these shoes
            redefine everyday wear.
          </p>
        </motion.div>
      </div>

      {/* Second Section */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
        <motion.div
          className="lg:w-1/2  text-lg leading-relaxed"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <h1 className="text-2xl md:text-3xl font-semibold text-[#002366] mb-4">
            Engineered for Performance
          </h1>
          <p className="mb-3 text-gray-500">
            From the gym to the streets, these sneakers deliver support and
            durability like no other. Designed with breathable materials and
            advanced cushioning for the perfect fit.
          </p>
          <p className="text-gray-500">
            Step into innovation. Every stride feels lighter, every move more
            confident — this is footwear evolution done right.
          </p>
        </motion.div>
        <motion.img
          src={sneakers}
          alt="Red Nike"
          className="w-full lg:w-1/2 rounded-2xl shadow-xl object-cover hover:scale-105 transition-transform duration-500"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      </div>
    </section>
  );
};

export default SecondDisplay;
