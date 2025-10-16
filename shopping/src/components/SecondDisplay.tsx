import sneakers from "../assets/images/sneakers.jpg";
import nike2 from "../assets/images/nike2.jpg";
import { motion } from "framer-motion";

const SecondDisplay = () => {
  return (
    <section className="px-6 py-10 md:px-16 lg:px-24 bg-gradient-to-br from-white via-gray-50 to-gray-100 font-serif">
      {/* First Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-16">
        {/* Image with Always-Visible Overlay Text */}
        <motion.div
          className="relative w-full lg:w-1/2 overflow-hidden rounded-2xl shadow-xl"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img
            src={nike2}
            alt="Nike Shoes"
            className="w-full h-full object-cover"
          />
          {/* Always visible overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6 text-white rounded-2xl">
            <h2 className="text-2xl md:text-3xl font-semibold mb-2 tracking-wide">
             Sketchers
            </h2>
            <p className="text-sm md:text-base max-w-md leading-relaxed">
              Elevate every step — where bold design meets unstoppable comfort
              and confidence.
            </p>
          </div>
        </motion.div>

        {/* Text beside image */}
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
            Experience the next level of comfort with Sketchers latest design. Built
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
          className="lg:w-1/2 text-lg leading-relaxed"
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

        {/* Second image with visible overlay */}
        <motion.div
          className="relative w-full lg:w-1/2 overflow-hidden rounded-2xl shadow-xl"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img
            src={sneakers}
            alt="Sneakers"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6 text-white rounded-2xl">
            <h2 className="text-2xl md:text-3xl font-semibold mb-2 tracking-wide">
              Built to Perform
            </h2>
            <p className="text-sm md:text-base max-w-md leading-relaxed">
              Power your every move — sleek, strong, and made for champions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SecondDisplay;
