import { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Heart, ShoppingBag, Sparkles, Filter } from "lucide-react";

const trendingItems = [
  {
    id: 1,
    image:
      "https://incanda.co.za/wp-content/uploads/2020/04/Leather-Tote-Bag-Classic-001.jpg",
    name: "Classic Leather Bag",
    price: "120,00",
    category: "Accessories",
  },
  {
    id: 2,
    image:
      "https://infinit.store/cdn/shop/products/KoreanStreetwearhoodiesurbanstreetfashionkoreanhoodiesBlack-INFINITSTORE_1.jpg?v=1688118062",
    name: "Urban Street Hoodie",
    price: "85,000",
    category: "Clothing",
  },
  {
    id: 3,
    image:
      "https://ciska.com.ng/wp-content/uploads/2025/09/IMG-20250911-WA0162.jpg",
    name: "Retro Sunglasses",
    price: "6,000",
    category: "Accessories",
  },
  {
    id: 4,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3W4KcMS99vBO2V5Td07mU2IjHnOQgIZF2mw&s",
    name: "Smart Watch Pro",
    price: "250,000",
    category: "Electronics",
  },
  {
    id: 5,
    image:
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/26/1020752/1.jpg?2855",
    name: "Running Sneakers",
    price: "9,500",
    category: "Shoes",
  },
  {
    id: 6,
    image:
      "https://ae01.alicdn.com/kf/S1fde1f34a80548f680fb1a542c06cd6d3.jpg",
    name: "Luxury Women's Dress",
    price: "160,00",
    category: "Clothing",
  },
];

const TrendingNow = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredItems =
    activeFilter === "All"
      ? trendingItems
      : trendingItems.filter((item) => item.category === activeFilter);

  const categories = ["All", "Clothing", "Accessories", "Electronics", "Shoes"];

  return (
    <div className="min-h-screen py-16 px-6 md:px-12 font-serif">
      {/* 🔥 HERO CAROUSEL */}
      <div className="mb-16">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          loop={true}
          speed={1200}
          className="rounded-2xl shadow-sm overflow-hidden"
        >
          {[
            {
              title: "This Season’s Must-Haves",
              subtitle: "Elevate your wardrobe with bold essentials.",
              image:
                "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80",
            },
            {
              title: "Luxury for Every Lifestyle",
              subtitle: "Shop premium accessories crafted to perfection.",
              image:
                "https://www.essence.com/wp-content/uploads/2025/01/MG_3321-scaled.jpg",
            },
            {
              title: "Tech Meets Style",
              subtitle: "Discover gadgets that redefine your daily experience.",
              image:
                "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=1200&q=80",
            },
            {
              title: "Modern day gadgets",
              subtitle: "Discover gadgets that redefine your daily experience.",
              image:
                "https://img.freepik.com/premium-photo/digital-camera-graphic-digital-tablet-keyboard-mouse-cellphone-white-background_960396-868480.jpg",
            },
            {
              title: "Electronics",
              subtitle: "Discover electronic appliances that redefine your daily experience.",
              image:
                "https://cdn.firstcry.com/education/2023/01/13101355/Names-Of-Household-Appliances-In-English.jpg",
            },

            {
              title: "Furnitures",
              subtitle: "Discover funitures appliances that redefine your daily experience.",
              image:
                "https://leatherworldng.com/wp-content/uploads/2022/03/modern-italian-couch-set-at-leatherworld-luxury-italian-furniture-store-in-lagos-and-abuja-nigeria.jpg",
            },

          ].map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-[50vh] flex items-center justify-center text-center">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover brightness-75"
                />
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="relative z-10 max-w-2xl px-6"
                >
                  <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg font-serif">
                    {slide.title}
                  </h2>
                  <p className="text-gray-200 text-lg mb-6">
                    {slide.subtitle}
                  </p>
                  <button className="px-8 py-3 cursor-pointer text-white border border-white hover:bg-white hover:text-black font-semibold hover:scale-105 transition-all duration-500">
                    Shop Collection
                  </button>
                </motion.div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* 🔹 Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <div className="flex justify-center items-center gap-3 mb-3">
          <Sparkles className="text-[#0E0C60] w-6 h-6 animate-pulse" />
          <h1 className="text-4xl italic md:text-5xl font-bold text-[#0E0C60] font-serif">
            Trending Now
          </h1>
        </div>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Discover what’s hot — from timeless classics to the latest must-haves
          everyone’s loving.
        </p>
      </motion.div>

      {/* 🔸 Filter Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-wrap justify-center gap-3 mb-10"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-5 py-2 rounded-full cursor-pointer text-sm font-semibold transition-all duration-300 ${
              activeFilter === cat
                ? "bg-[#0E0C60] text-white shadow-md"
                : "bg-gray-100 text-gray-600 hover:bg-[#0E0C60]/10"
            }`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {/* 🔹 Product Grid */}
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
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10" 
      >
        {filteredItems.map((item) => (
          <motion.div
            key={item.id}
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0 },
            }}
            className="relative bg-white rounded-2xl overflow-hidden shadow-sm group"
          >
            <div className="relative h-72 overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Floating Buttons */}
              <div className="absolute top-3 right-3 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <button className="bg-white p-2 rounded-full shadow hover:bg-pink-100 transition-all">
                  <Heart className="w-5 h-5 text-pink-500" />
                </button>
                <button className="bg-white p-2 rounded-full shadow hover:bg-[#0E0C60]/10 transition-all">
                  <Filter className="w-5 h-5 text-[#0E0C60]" />
                </button>
              </div>
            </div>

            <div className="p-5 space-y-3">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-[#0E0C60]">
                  {item.name}
                </h3>
                <span className="text-[#0E0C60] font-bold">₦{item.price}</span>
              </div>
              <p className="text-gray-500 text-sm">{item.category}</p>

              <button className="w-full mt-3 flex cursor-pointer items-center justify-center gap-2 py-2 rounded-lg  text-[#C08081] font-medium hover:bg-[#C08081] hover:text-white border border-[#C08081] transition-all duration-500">
                <ShoppingBag className="w-5 h-5" /> Shop Now
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TrendingNow;
