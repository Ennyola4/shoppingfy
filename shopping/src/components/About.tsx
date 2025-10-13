import { motion, type Variants } from "framer-motion";
import { Info, Users } from "lucide-react";

const About = () => {
  // Animated text
  const titleText = "About Shoppingfy";

  // Letter animation variants
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

  return (
    <div>
      <div
        className="relative h-[65vh] flex items-center font-serif justify-center px-6 md:px-10 lg:px-20 overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2016/11/29/07/16/balancing-1868051_1280.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content */}
        <div className="relative flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-7xl gap-8 md:gap-14 z-10">
          {/* Left Text Section */}
          <motion.div
            initial={{ opacity: 0, y: 90 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/2 space-y-4 md:space-y-6"
          >
            {/* Animated Title */}
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

            {/* Description */}
            <p className="text-gray-100 text-sm sm:text-base lg:text-lg max-w-md md:max-w-lg leading-relaxed font-serif">
              At Shoppingfy, we’re redefining online shopping with trust,
              convenience, and innovation. From fashion to technology, our goal
              is to bring quality products closer to you — with a seamless
              experience you can rely on.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:justify-center lg:justify-start">
              <button className="mt-2 px-5 py-2 sm:px-6 sm:py-3 cursor-pointer border border-white text-white font-semibold hover:bg-gray-100 hover:text-gray-800 transition duration-500">
                <Info
                  className="inline items-center mr-2 hover:text-gray-800"
                  size={16}
                />
                Learn More
              </button>

              <button className="mt-2 px-5 py-2 sm:px-6 sm:py-3 cursor-pointer  border border-white text-white font-semibold hover:bg-gray-100 hover:text-gray-800 transition duration-500">
                <Users
                  className="inline items-center mr-2 hover:text-gray-800"
                  size={16}
                />
                Meet Our Team
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
    </div>
  );
};

export default About;
