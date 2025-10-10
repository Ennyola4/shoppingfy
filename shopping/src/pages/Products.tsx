import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { products } from "../utils";
import { ShoppingCart, Star, X } from "lucide-react";

const Products = () => {
    const [selectedProduct, setSelectedProduct] = useState<any | null>(null);

    return (
        <section className="py-14 px-5 sm:px-8 md:px-12 lg:px-20 bg-gray-50 font-serif">
            {/* Header */}
            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#002366]"
            >
                Featured Products
            </motion.h1>

            {/* Products Grid */}
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
                {products.map((product, index) => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                        whileHover={{ y: -6 }}
                        className="relative w-full max-w-[350px] bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
                        onClick={() => setSelectedProduct(product)}
                    >
                        {/* Image */}
                        <div className="overflow-hidden relative">
                            <motion.img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500"
                            />
                            <span className="absolute top-3 left-3 bg-[#002366] text-white text-xs font-semibold py-1 px-3 rounded-full shadow-md">
                                {product.category || "New Arrival"}
                            </span>
                        </div>

                        {/* Details */}
                        <div className="p-5 flex flex-col gap-2">
                            <h2 className="text-lg font-semibold text-[#002366] truncate">
                                {product.name}
                            </h2>

                            <p className="text-sm text-gray-500 line-clamp-2">
                                {product.description ||
                                    "A high-quality, trendy product you'll love to use every day."}
                            </p>

                            {/* Rating */}
                            <div className="flex items-center gap-1 mt-1">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-4 h-4 ${i < Math.round(product.rating || 4)
                                                ? "text-yellow-400 fill-yellow-400"
                                                : "text-gray-300"
                                            }`}
                                    />
                                ))}
                                <span className="text-sm text-gray-400 ml-1">
                                    ({product.reviews || 24})
                                </span>
                            </div>

                            <div className="flex justify-between items-center mt-2">
                                <span className="text-[#002366] font-semibold text-lg">
                                    ₦{product.price}
                                </span>
                                <span
                                    className={`text-xs font-semibold ${product.status === "In Stock"
                                            ? "text-green-500"
                                            : "text-red-400"
                                        }`}
                                >
                                    {product.status || "In Stock"}
                                </span>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full flex items-center justify-center gap-2 mt-3 rounded-md cursor-pointer shadow-sm text-[#C08081] py-2 font-medium border border-[#C08081] hover:bg-[#C08081] hover:text-white transition-all duration-300"
                            >
                                <ShoppingCart className="w-4 h-4" />
                                Add to Cart
                            </motion.button>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Product Modal */}
            <AnimatePresence>
                {selectedProduct && (
                    <motion.div
                        key="modal"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 px-4"
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0, y: 50 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0, y: 50 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white rounded-xl shadow-lg max-w-lg w-full overflow-hidden relative"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedProduct(null)}
                                className="absolute top-3 right-3 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full p-1 transition"
                            >
                                <X size={20} />
                            </button>

                            {/* Image */}
                            <img
                                src={selectedProduct.image}
                                alt={selectedProduct.name}
                                className="w-full h-64 object-cover"
                            />

                            {/* Details */}
                            <div className="p-6 space-y-3">
                                <h2 className="text-2xl font-semibold text-[#002366]">
                                    {selectedProduct.name}
                                </h2>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {selectedProduct.description ||
                                        "This product features excellent design, durable materials, and great value for your lifestyle."}
                                </p>

                                {/* Rating */}
                                <div className="flex items-center gap-1 mt-2">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-4 h-4 ${i < Math.round(selectedProduct.rating || 4)
                                                    ? "text-yellow-400 fill-yellow-400"
                                                    : "text-gray-300"
                                                }`}
                                        />
                                    ))}
                                    <span className="text-sm text-gray-400 ml-1">
                                        ({selectedProduct.reviews || 24})
                                    </span>
                                </div>

                                <div className="flex justify-between items-center mt-4">
                                    <span className="text-[#002366] font-bold text-2xl">
                                        ₦{selectedProduct.price}
                                    </span>
                                    <span
                                        className={`text-sm font-semibold ${selectedProduct.status === "In Stock"
                                                ? "text-green-500"
                                                : "text-red-400"
                                            }`}
                                    >
                                        {selectedProduct.status || "In Stock"}
                                    </span>
                                </div>

                                <div className="flex gap-3 mt-6">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex-1 flex items-center justify-center gap-2 bg-[#C08081] text-white py-2 rounded-md font-medium hover:bg-[#a06a6b] transition"
                                    >
                                        <ShoppingCart className="w-4 h-4" />
                                        Add to Cart
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex-1 flex items-center justify-center gap-2 border border-[#C08081] text-[#C08081] py-2 rounded-md font-medium hover:bg-[#C08081] hover:text-white transition"
                                    >
                                        Buy Now
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Stats Section */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mt-20 text-center"
            >
                <h1 className="text-2xl md:text-3xl font-serif font-bold text-[#002366] mb-4">
                    More Than Just a Store
                </h1>
                <p className="text-gray-500 font-medium max-w-2xl mx-auto px-4 mb-10">
                    We're here to simplify your search for the perfect items that define
                    your life. Our team is dedicated to finding the best in modern
                    fashion, innovative gadgets, and timeless lifestyle essentials—all in
                    one place.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8">
                    {[
                        { label: "Products", value: "500+" },
                        { label: "Happy Customers", value: "10K+" },
                        { label: "Average Rating", value: "4.9" },
                        { label: "Countries", value: "50+" },
                    ].map((item) => (
                        <div key={item.label} className="text-center">
                            <h1 className="text-4xl md:text-5xl font-bold text-[#002366]">
                                {item.value}
                            </h1>
                            <p className="text-sm md:text-base text-gray-500 font-semibold mt-1">
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Products;
