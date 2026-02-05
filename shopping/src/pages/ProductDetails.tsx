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
  const { addItem } = useCart();

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleOpenModal = (product: Product) => {
    setSelectedProduct(product);
    setSelectedSize(product.sizes?.[0] || "");
    setSelectedColor(product.colors?.[0] || "");
    setActiveImageIndex(0);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

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

  const images =
    selectedProduct?.images && selectedProduct.images.length > 0
      ? selectedProduct.images
      : selectedProduct
      ? [selectedProduct.image]
      : [];

  return (
    <section className="py-10 px-5 md:px-16 mt-8">
      <h1 className="text-3xl md:text-4xl font-bold text-[#002366] mb-8">
        Featured Products
      </h1>

      {/* Product Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product: Product) => (
          <motion.div
            key={product.id}
            whileHover={{ y: -4 }}
            className="bg-white rounded-md shadow-md overflow-hidden flex flex-col"
          >
            <div
              onClick={() => handleOpenModal(product)}
              className="cursor-pointer"
            >
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

                <span className="text-sm text-green-500 font-semibold">
                  {product.status ?? "In Stock"}
                </span>
              </div>
            </div>

            <button
              onClick={() => handleOpenModal(product)}
              className="m-4 mt-0 flex items-center justify-center gap-2 border border-[#C44536] text-[#C44536] py-2 rounded-md hover:bg-[#C44536]/10"
            >
              <ShoppingCart size={16} />
              Quick View
            </button>
          </motion.div>
        ))}
      </div>

      {/* MODAL */}
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
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 text-gray-600"
              >
                <X size={24} />
              </button>

              <div className="md:flex">
                {/* IMAGE SLIDER */}
                <div className="md:w-1/2 relative overflow-hidden bg-gray-100">
                  <motion.div
                    className="flex"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    animate={{ x: `-${activeImageIndex * 100}%` }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    onDragEnd={(_, info) => {
                      if (
                        info.offset.x < -50 &&
                        activeImageIndex < images.length - 1
                      ) {
                        setActiveImageIndex((prev) => prev + 1);
                      }
                      if (info.offset.x > 50 && activeImageIndex > 0) {
                        setActiveImageIndex((prev) => prev - 1);
                      }
                    }}
                    style={{ width: `${images.length * 100}%` }}
                  >
                    {images.map((img, idx) => (
                      <div key={idx} className="w-full flex-shrink-0">
                        <img
                          src={img}
                          alt={selectedProduct.name}
                          className="w-fit h-96 object-cover"
                        />
                      </div>
                    ))}
                  </motion.div>

                  {/* Arrows */}
                  {activeImageIndex > 0 && (
                    <button
                      onClick={() =>
                        setActiveImageIndex((prev) => prev - 1)
                      }
                      className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 px-3 py-1 rounded-full"
                    >
                      ‹
                    </button>
                  )}
                  {activeImageIndex < images.length - 1 && (
                    <button
                      onClick={() =>
                        setActiveImageIndex((prev) => prev + 1)
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 px-3 py-1 rounded-full"
                    >
                      ›
                    </button>
                  )}

                  {/* Dots */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                    {images.map((_, i) => (
                      <span
                        key={i}
                        className={`w-2 h-2 rounded-full ${
                          i === activeImageIndex
                            ? "bg-[#002366]"
                            : "bg-white/60"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* INFO */}
                <div className="md:w-1/2 p-6 flex flex-col">
                  <h2 className="text-2xl font-bold text-[#002366]">
                    {selectedProduct.name}
                  </h2>

                  <p className="text-xl font-bold text-[#002366] my-3">
                    ₦{selectedProduct.price.toLocaleString()}
                  </p>

                  {/* <p className="text-gray-600 mb-4">
                    {selectedProduct.description}
                  </p> */}

                  {/* SIZE */}
                  {selectedProduct.sizes && (
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Select Size</h4>
                      <div className="flex gap-2 flex-wrap">
                        {selectedProduct.sizes.map((size) => (
                          <button
                            key={size}
                            onClick={() => setSelectedSize(size)}
                            className={`px-2 text-[10px] py-1 border rounded-md ${
                              selectedSize === size
                                ? "bg-[#002366] text-white"
                                : "bg-white"
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* COLOR */}
                  {selectedProduct.colors && (
                    <div className="mb-6">
                      <h4 className="font-semibold mb-2">Select Color</h4>
                      <div className="flex gap-3">
                        {selectedProduct.colors.map((color) => (
                          <button
                            key={color}
                            onClick={() => setSelectedColor(color)}
                            className={`w-7 h-7 rounded-full border-2 ${
                              selectedColor === color
                                ? "border-black"
                                : "border-gray-300"
                            }`}
                            style={{ backgroundColor: color.toLowerCase() }}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  <button
                    onClick={handleAddToCart}
                    className=" mt-auto bg-[#C44536] text-white py-3 rounded-md hover:bg-[#A33428]"
                  >
                    Add to Cart
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
