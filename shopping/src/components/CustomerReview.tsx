import { motion, } from "framer-motion";
import { Star, Quote } from "lucide-react";
import {  type Variants } from "framer-motion";


const reviews = [
  {
    id: 1,
    name: "Sophia Johnson",
    role: "Fashion Designer",
    image: "https://randomuser.me/api/portraits/women/75.jpg",
    review:
      "Shoppingfy brings a whole new meaning to online shopping — seamless experience, top-quality products, and a brand I trust completely.",
    rating: 5,
  },
  {
    id: 2,
    name: "Ethan Williams",
    role: "Tech Enthusiast",
    image: "https://randomuser.me/api/portraits/men/23.jpg",
    review:
      "Every gadget I bought here exceeded my expectations. The speed, the quality, and the design — everything feels futuristic.",
    rating: 5,
  },
  {
    id: 3,
    name: "Amara Bello",
    role: "Content Creator",
    image: "https://randomuser.me/api/portraits/women/62.jpg",
    review:
      "I adore the way Shoppingfy curates its fashion line. The colors, the quality, and the customer service are next-level.",
    rating: 4,
  },
  {
    id: 4,
    name: "Liam Chen",
    role: "Entrepreneur",
    image: "https://randomuser.me/api/portraits/men/40.jpg",
    review:
      "As someone who values time, Shoppingfy makes my shopping quick, enjoyable, and absolutely worth it!",
    rating: 5,
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { 
      delay: i * 0.2, 
      duration: 0.7, 
      ease: [0.25, 0.1, 0.25, 1] // 👈 fixed: valid easing array instead of "easeOut"
    },
  }),
};


const CustomerReviews = () => {
  return (
    <div className="py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold font-serif italic text-[#0E0C60]">
          Our Happy Customers 💫
        </h2>
        <p className="text-gray-600 mt-4 text-base md:text-lg max-w-2xl mx-auto">
          We’re proud to have earned the trust of thousands of stylish, tech-savvy shoppers worldwide.
        </p>
      </motion.div>

      {/* Review Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-12">
        {reviews.map((review, i) => (
          <motion.div
            key={review.id}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={i}
            viewport={{ once: true }}
            className="relative bg-white shadow-md  rounded-xl p-8 transition-all duration-500 hover:-translate-y-3"
          >
            {/* Floating Quote Icon */}
            <motion.div
              className="absolute -top-4 right-6 bg-[#0E0C60]/10 p-2 rounded-full"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.4, type: "spring" }}
            >
              <Quote className="text-[#0E0C60] w-5 h-5" />
            </motion.div>

            {/* Profile */}
            <div className="flex flex-col items-center mb-6">
              <div className="w-20 h-20 rounded-full overflow-hidden  border-[#0E0C60]/30 shadow-sm">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-serif font-semibold text-[#0E0C60] mt-3">
                {review.name}
              </h3>
              <p className="text-sm font-serif text-gray-500">{review.role}</p>
            </div>

            {/* Review Text */}
            <p className="text-gray-600 italic text-center leading-relaxed mb-5">
              “{review.review}”
            </p>

            {/* Stars */}
            <div className="flex justify-center gap-1">
              {Array.from({ length: review.rating }).map((_, index) => (
                <Star
                  key={index}
                  size={18}
                  className="text-yellow-400"
                  fill="currentColor"
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call-to-Action */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-20 text-center"
      >
        <h3 className="text-2xl font-semibold text-[#0E0C60] font-serif mb-3">
          Join Thousands of Happy Shoppers
        </h3>
        <p className="text-gray-500 mb-6 font-serif">
          Be part of the Shoppingfy experience — where quality meets style.
        </p>
        <button className="px-12 py-2 cursor-pointer text-[#0E0C60] font-serif hover:text-white border border-[#0E0C60] font-semibold hover:bg-[#0E0C60] transition-all duration-500">
          Shop Now
        </button>
      </motion.div>
    </div>
  );
};

export default CustomerReviews;
