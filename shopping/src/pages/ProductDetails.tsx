import { motion } from "framer-motion";
import { products } from "../utils/product";
import { Star, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { useEffect } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  images?: string[];
  description?: string;
  rating?: number;
  reviews?: number;
  status?: string;
}

const ProductDetails = () => {
  const { addItem } = useCart();
    useEffect(() => {
          window.scrollTo(0, 0);
      }, [location.pathname]);

  const handleAddToCart = (product: Product) => {
    addItem({
      product: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        images: product.images,
      },
      quantity: 1,
      size: "42",
      color: "Black",
    });
  };

  return (
    <section className="py-10 px-5 md:px-16 mt-8">
      <h1 className="text-3xl md:text-4xl font-bold text-[#002366] mb-8">
        Featured Products
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product: Product) => (
          <motion.div
            key={product.id}
            whileHover={{ y: -4 }}
            className="bg-white rounded-md shadow-md overflow-hidden flex flex-col"
          >
            {/* Image + details */}
            <Link to={`/product/${product.id}`} className="flex-1">
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4 space-y-2">
                <h2 className="text-lg font-semibold text-[#002366] truncate">
                  {product.name}
                </h2>

                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.round(product.rating ?? 4)
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-400 ml-1">
                    ({product.reviews ?? 24})
                  </span>
                </div>

                <p className="text-[#002366] font-bold text-lg">
                  ₦{product.price.toLocaleString()}
                </p>

                <span
                  className={`text-sm font-semibold ${
                    product.status === "In Stock"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {product.status ?? "In Stock"}
                </span>
              </div>
            </Link>

            {/* Add to cart */}
            <button
              onClick={() => handleAddToCart(product)}
              className="m-4 mt-0 flex items-center cursor-pointer justify-center gap-2 text-[#C44536] border border-[#C44536] hover:bg-[#C44536]/10 py-2 rounded-md hover:opacity-90 transition"
            >
              <ShoppingCart size={16} />
              Add to Cart
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProductDetails;
