import { motion } from "framer-motion";

const category = [
  {
    id: 1,
    image:
      "https://lapatiala.com/wp-content/uploads/2024/03/Madison-Avenue-Couture-Hermes-Birkin-and-Kelly-bags.png",
    barge: "Bags",
    description:
      "Your life, well-packed. Discover bags for every journey.",
    products: "30",
  },
  {
    id: 2,
    image: "https://www.stormonline.com/content/stores/0156654001743998203.jpg",
    barge: "Clothing",
    description:
      "Effortless style, from your daily routine to your weekend adventures.",
    products: "300",
  },
  {
    id: 3,
    image:
      "https://www.shutterstock.com/image-illustration/group-home-appliances-consumer-electronics-600nw-2451385301.jpg",
    barge: "Electronics",
    description:
      "Technology for Modern Living. Smarter homes, simpler living.",
    products: "73",
  },
  {
    id: 4,
    image:
      "https://www.iheartpacificnorthwest.com/wp-content/uploads/2024/10/best-insulated-jackets-TH.jpg",
    barge: "Jackets",
    description:
      "Style Meets Shelter. Jackets designed to protect and impress.",
    products: "50",
  },
  {
    id: 5,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoJJP5TtvQEVINrHuUA7hDT6qXmNdMK37XXg&s",
    barge: "Women Dress",
    description:
      "The Dress for Every Chapter. Work, weekends, and special moments.",
    products: "50",
  },
  {
    id: 6,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROyHBpa924E5WFDakTLZUVbY8i9M14HWKKFA&s",
    barge: "Watches",
    description:
      "Where Elegance Meets Every Second. Timeless designs await.",
    products: "40",
  },
  {
    id: 7,
    image: "https://amary.ng/wp-content/uploads/2023/02/popopopop.jpg",
    barge: "Sunglasses",
    description:
      "Engineered for the Elements. Protect your eyes in style.",
    products: "20",
  },
  {
    id: 8,
    image:
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/49/3143852/1.jpg?8532",
    barge: "Shoes",
    description:
      "Walk Your Way. Find the perfect pair for your pace and place.",
    products: "60",
  },
];

const Categories = () => {
  return (
    <div className="min-h-screen py-16 px-6 md:px-12 lg:px-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-[#0E0C60] mb-3 font-serif">
          Explore Categories
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Discover premium selections curated to match your lifestyle —
          timeless style, modern comfort, and endless inspiration.
        </p>
        <div className="mt-6 h-1 w-32 bg-[#0E0C60] mx-auto rounded-full"></div>
      </motion.div>

      {/* Category Grid */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
          },
        }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
      >
        {category.map((cat) => (
          <motion.div
            key={cat.id}
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.03 }}
            className="relative bg-white shadow-sm rounded-2xl overflow-hidden group"
          >
            <div className="h-60 overflow-hidden">
              <img
                src={cat.image}
                alt={cat.barge}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            <div className="p-5 space-y-2">
              <div className="flex justify-between items-center">
                <span className="bg-[#0E0C60] text-white text-xs px-3 py-1 rounded-full">
                  {cat.products} Products
                </span>
                <span className="text-sm text-gray-400">
                  #{cat.id.toString().padStart(2, "0")}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-[#0E0C60] transition-colors">
                {cat.barge}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {cat.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Additional Details / Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="mt-20 text-center"
      >
        <h2 className="text-2xl font-bold text-[#0E0C60] mb-3">
          More Than Just Categories
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-6">
          Each product line is crafted to inspire your lifestyle — from
          essentials to luxury, every item tells a story.
        </p>
        <button className="bg-[#0E0C60] text-white px-8 py-3 rounded-full font-medium hover:bg-blue-900 transition-all shadow-md hover:shadow-lg">
          Explore All Products
        </button>
      </motion.div>
    </div>
  );
};

export default Categories;
