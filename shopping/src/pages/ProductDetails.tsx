import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { products } from "../utils/product";
import { Star, ShoppingCart } from "lucide-react";
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
            className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-1" style={{ scrollbarWidth: 'thin', scrollbarColor: '#011e41c5 transparent' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="
          bg-white w-full max-w-4xl rounded-xl 
          overflow-hidden shadow-xl
          max-h-[90vh] flex flex-col
        "
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
            >
              {/* Header */}
              {/* <div className="flex items-center justify-between px-6 py-4 border-b">
                <h2 className="text-lg md:text-xl font-semibold text-[#002366]">
                  {selectedProduct.name}
                </h2>
                <button onClick={handleCloseModal}>
                  <X className="text-gray-600 hover:text-black" />
                </button>
              </div> */}


              {/* Body */}
              <div className="flex-1 overflow-y-auto md:grid md:grid-cols-2">
                {/* Image */}
                <div className="bg-gray-100">
                  <img
                    src={images[activeImageIndex]}
                    alt={selectedProduct.name}
                    className="w-full h-72 md:h-full object-cover"
                  />

                  {/* Thumbnails */}
                  {images.length > 1 && (
                    <div className="flex gap-2 p-3 overflow-x-auto shadow-lg">
                      {images.map((img, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveImageIndex(i)}
                          className={`border  rounded-md ${activeImageIndex === i
                            ? "border-[#002366]"
                            : "border-transparent"
                            }`}
                        >
                          <img
                            src={img}
                            className="w-16 h-16 object-cover rounded-md"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className=" p-8 space-y-9 shadow-sm m-8  mt-8 border border-gray-200 rounded-lg
  md:sticky md:top-15 md:self-start bg-gray-100">
                  <h2 className="text-2xl font-bold text-[#002366] mb-2"> {selectedProduct.name} </h2>
                  <p className="text-2xl font-bold text-[#002366]">
                    ₦{selectedProduct.price.toLocaleString()}
                  </p>

                  <p className="text-gray-600 mb-4">{selectedProduct.description}</p>

                  {/* Size */}
                  {selectedProduct.sizes && (
                    <div>
                      <p className="font-medium mb-2">Size</p>
                      <div className="flex gap-2 flex-wrap">
                        {selectedProduct.sizes.map((size) => (
                          <button
                            key={size}
                            onClick={() => setSelectedSize(size)}
                            className={`px-4 py-2 text-sm rounded-md border transition  ${selectedSize === size
                              ? "bg-[#002366] text-white border-[#002366]"
                              : "border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
                              }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Color */}
                  {selectedProduct.colors && (
                    <div>
                      <p className="font-medium mb-2">Color</p>
                      <div className="flex gap-3">
                        {selectedProduct.colors.map((color) => (
                          <button
                            key={color}
                            onClick={() => setSelectedColor(color)}
                            className={`w-8 h-8 rounded-full border-2 transition ${selectedColor === color
                              ? "border-black scale-110"
                              : "border-gray-300"
                              }`}
                            style={{ backgroundColor: color.toLowerCase() }}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Footer */}
          <div className="flex items-center justify-center">
                <div className=" p-4">
               <button onClick={handleAddToCart} className="mt-auto text-[#A33428 border border-[#A33428 py-3 px-8 rounded-md hover:bg-[#A33428] hover:text-white transition-all duration-500 flex items-center justify-center gap-2 cursor-pointer" > <ShoppingCart size={18} /> Add to Cart </button>
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
