import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { products } from "../utils/product";
import { Star, ShoppingCart, X } from "lucide-react";
import { useCart } from "../contexts/CartContext";

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
  sizes?: string[];
  colors?: string[];
}

const ProductDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  const { addItem } = useCart();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");

  const handleOpenModal = (product: Product) => {
    setSelectedProduct(product);
    setSelectedSize(product.sizes?.[0] || "");
    setSelectedColor(product.colors?.[0] || "");
  };

  const handleCloseModal = () => setSelectedProduct(null);

  const handleAddToCart = () => {
    if (!selectedProduct) return;
    addItem({
      product: {
        id: selectedProduct.id,
        name: selectedProduct.name,
        price: selectedProduct.price,
        image: selectedProduct.image,
        images: selectedProduct.images,
      },
      quantity: 1,
      size: selectedSize,
      color: selectedColor,
    });
    handleCloseModal();
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
            className="bg-white rounded-md shadow-md overflow-hidden flex flex-col cursor-pointer"
          >
            {/* Product card */}
            <div onClick={() => handleOpenModal(product)} className="flex-1">
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
                      className={`w-4 h-4 ${i < Math.round(product.rating ?? 4)
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
                  className={`text-sm font-semibold ${product.status === "In Stock"
                      ? "text-green-500"
                      : "text-red-500"
                    }`}
                >
                  {product.status ?? "In Stock"}
                </span>
              </div>
            </div>

            <button
              onClick={() => handleOpenModal(product)}
              className="m-4 mt-0 flex items-center cursor-pointer justify-center gap-2 text-[#C44536] border border-[#C44536] hover:bg-[#C44536]/10 py-2 rounded-md hover:opacity-90 transition"
            >
              <ShoppingCart size={16} />
              Quick View
            </button>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Close button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>

              <div className="md:flex">
                {/* Product Images */}
                <div className="md:w-1/2">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-80 object-cover"
                  />
                  {selectedProduct.images && (
                    <div className="flex gap-2 mt-2 overflow-x-auto p-2">
                      {selectedProduct.images.map((img, idx) => (
                        <img
                          key={idx}
                          src={img}
                          alt={selectedProduct.name}
                          className="w-20 h-20 object-cover rounded-md cursor-pointer border border-gray-200"
                          onClick={() =>
                            setSelectedProduct({ ...selectedProduct, image: img })
                          }
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="md:w-1/2 p-6 flex flex-col">
                  <h2 className="text-2xl font-bold text-[#002366] mb-2">
                    {selectedProduct.name}
                  </h2>

                  <div className="flex items-center gap-2 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < Math.round(selectedProduct.rating ?? 4)
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                          }`}
                      />
                    ))}
                    <span className="text-gray-400">
                      ({selectedProduct.reviews ?? 24} reviews)
                    </span>
                  </div>

                  <p className="text-xl font-bold text-[#002366] mb-4">
                    ₦{selectedProduct.price.toLocaleString()}
                  </p>

                  <p className="text-gray-600 mb-4">{selectedProduct.description}</p>

                  {/* Size selection */}
                  {selectedProduct.sizes && (
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Select Size</h4>
                      <div className="flex gap-2 flex-wrap">
                        {selectedProduct.sizes.map((size) => (
                          <motion.button
                            key={size}
                            onClick={() => setSelectedSize(size)}
                            whileHover={{ scale: 1.05 }}
                            animate={{ scale: selectedSize === size ? 1.1 : 1 }}
                            className={`px-3 py-1 border rounded-md font-medium transition-colors ${selectedSize === size
                                ? "bg-[#002366] text-white border-[#002366]"
                                : "bg-white text-gray-700 border-gray-300"
                              }`}
                          >
                            {size}
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Color selection */}
                  {selectedProduct.colors && (
                    <div className="mb-4">
                      <h4 className="text-sm mb-2">Select Color :</h4>
                      <div className="flex gap-2 flex-wrap items-center">
                        {selectedProduct.colors.map((color) => (
                          <motion.button
                            key={color}
                            onClick={() => setSelectedColor(color)}
                            whileHover={{ scale: 1.1 }}
                            animate={{ scale: selectedColor === color ? 1.1 : 1 }}
                            className={`w-6 h-6 rounded-full border-2 relative transition-all`}
                            style={{ backgroundColor: color.toLowerCase() }}
                          >
                            {selectedColor === color && (
                              <span className="absolute inset-0 flex items-center justify-center text-white font-bold">
                                ✓
                              </span>
                            )}
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Add to cart */}
                  <button
                    onClick={handleAddToCart}
                    className="mt-auto bg-[#C44536] text-white py-3 rounded-md hover:bg-[#A33428] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <ShoppingCart size={18} /> Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProductDetails;
