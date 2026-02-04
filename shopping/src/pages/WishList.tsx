import { motion } from "framer-motion";
import { Heart, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const sampleWishlist = [
  {
    id: 1,
    title: "Red Sneakers",
    price: "$120",
    image: "/images/shoe2.jpg",
  },
  {
    id: 2,
    title: "Leather Jacket",
    price: "$250",
    image: "/images/shoe2.jpg",
  },
  {
    id: 3,
    title: "Smart Watch",
    price: "$180",
    image: "/images/shoe2.jpg",
  },
   {
    id: 4,
    title: "Smart Watch",
    price: "$180",
    image: "/images/shoe2.jpg",
  },
];

const WishList = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white px-4">
      {/* Hero */}
      <section className="pt-24 pb-12 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-[#002366]"
        >
          My Wishlist 
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 mt-4 max-w-xl mx-auto"
        >
          Here are all the products you’ve saved for later. Add them to your
          cart or remove them anytime.
        </motion.p>
      </section>

      {/* Wishlist Grid */}
      <section className="max-w-7xl mx-auto pb-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {sampleWishlist.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden relative group"
            >
              {/* Remove button */}
              <button className="absolute top-2 right-2 bg-white p-1 rounded-full shadow hover:bg-red-100 transition">
                <X size={16} className="text-red-500" />
              </button>

              {/* Product image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />

              {/* Product info */}
              <div className="p-4">
                <h3 className="font-bold text-gray-900">{item.title}</h3>
                <p className="text-gray-600 mt-1">{item.price}</p>
                <Button className="mt-4 w-full bg-[#002366] hover:bg-[#001a4d] text-white">
                  Add to Cart
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {sampleWishlist.length === 0 && (
          <div className="mt-12 text-center text-gray-500">
            <Heart className="w-12 h-12 mx-auto mb-4 text-gray-300" />
            Your wishlist is empty. Start adding your favorite products!
          </div>
        )}
      </section>
    </div>
  );
};

export default WishList;
