// src/components/cart/CartDrawer.tsx
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { Minus, Plus, Trash2, ShoppingBag, X, CircleCheck, SkipForward } from "lucide-react";
import { Link } from "react-router-dom";
import { type Variants } from "framer-motion";

export function CartDrawer() {
    const { items, isCartOpen, setIsCartOpen, removeItem, updateQuantity, totalPrice } = useCart();

    const drawerVariants: Variants = {
        hidden: { x: 300, opacity: 0 }, // off-screen
        visible: {
            x: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 120, damping: 20 },
        },
        exit: {
            x: 300,
            opacity: 0,
            transition: { duration: 0.3 },
        },
    };



    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        key="backdrop"
                        className="fixed inset-0 bg-black/40 z-40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsCartOpen(false)}
                    />

                    {/* Drawer */}
                    <motion.div
                        key="drawer"
                        className="fixed inset-y-0 right-0 z-60 w-full sm:max-w-md flex"
                        variants={drawerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <div className="bg-white w-full flex flex-col shadow-xl ">
                            {/* Header */}
                            <div className="flex justify-between items-center p-4 border-b border-gray-300 shadow-sm">
                                <h2 className="text-sm font-semibold">
                                    You have <span className="text-sm text-[#C44536]">{items.length}</span> {items.length === 1 ? 'item' : 'items'} in the bag
                                </h2>
                                <button
                                    onClick={() => setIsCartOpen(false)}
                                    className="text-gray-500 hover:text-gray-700 transition cursor-pointer"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="flex-1 overflow-y-auto p-4 space-y-4 mt-8"style={{ scrollbarWidth: 'thin', scrollbarColor: '#cbd5e100 transparent' }}>
                                {items.length === 0 ? (
                                    <div className="flex flex-col items-center justify-center text-center mt-10">
                                        <ShoppingBag className="h-16 w-16 text-[#C44536]/50 mb-4 animate-bounce" />
                                        <h3 className="text-lg font-medium mb-2">Your bag is empty</h3>
                                        <p className="text-sm text-gray-500 mb-6">
                                            Discover our handcrafted collection and find your perfect items.
                                        </p>
                                        <Button className="px-3 py-2 shadow-sm rounded-sm border border-gray-200 bg-gray-50 hover:bg-gray-200 text-[#C44536]" asChild onClick={() => setIsCartOpen(false)}>
                                            <Link to="/product">Browse Collection</Link>
                                        </Button>
                                    </div>
                                ) : (
                                    items.map((item) => (
                                        <div
                                            key={`${item.product.id}-${item.size}-${item.color}`}
                                            className="flex gap-4 p-4 bg-[#C08081]/10 rounded-lg"
                                        >
                                            {/* Product Image */}
                                            <img
                                                src={item.product.images?.[0] ?? item.product.image}
                                                alt={item.product.name}
                                                className="w-20 h-20 object-cover rounded-md"
                                            />

                                            {/* Product Info */}
                                            <div className="flex-1 min-w-0">
                                                <h4 className="font-medium text-sm truncate">{item.product.name}</h4>
                                                <p className="text-xs text-gray-500 mt-1">
                                                    Size {item.size} • {item.color}
                                                </p>
                                                <p className="font-medium text-sm mt-2">
                                                    ₦{item.product.price.toLocaleString()}
                                                </p>
                                            </div>

                                            {/* Quantity & Remove */}
                                            <div className="flex flex-col items-end justify-between">
                                                <button
                                                    onClick={() => removeItem(item.product.id, item.size, item.color)}
                                                    className="text-gray-500 hover:text-red-500 transition-colors"
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </button>

                                                <div className="flex items-center gap-2 mt-2">
                                                    <button
                                                        onClick={() =>
                                                            updateQuantity(item.product.id, item.size, item.color, item.quantity - 1)
                                                        }
                                                        className="h-6 w-6 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-200 transition-colors"
                                                    >
                                                        <Minus className="h-3 w-3" />
                                                    </button>
                                                    <span className="text-sm w-4 text-center">{item.quantity}</span>
                                                    <button
                                                        onClick={() =>
                                                            updateQuantity(item.product.id, item.size, item.color, item.quantity + 1)
                                                        }
                                                        className="h-6 w-6 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-200 transition-colors"
                                                    >
                                                        <Plus className="h-3 w-3" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>

                            {/* Footer */}
                            {items.length > 0 && (
                                <div className="border-t border-gray-300 p-4 space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-500">Subtotal</span>
                                        <span className="text-sm text-green-600 font-medium">
                                            ₦{totalPrice.toLocaleString()}
                                        </span>
                                    </div>

                                    <p className="text-xs text-gray-500">
                                        Shipping and taxes calculated at checkout
                                    </p>

                                    <Button className="w-full bg-[#C44536]/60 hover:bg-[#C44536] text-white transition-all duration-500 cursor-pointer" asChild>
                                        <Link to="/checkout" onClick={() => setIsCartOpen(false)}>
                                            <CircleCheck className="w-4 h-4 mr-2" />
                                            Proceed to Checkout
                                        </Link>
                                    </Button>

                                    <Button
                                        variant="outline"
                                        className="w-full border-gray-200 shadow-sm text-gray-700 hover:bg-gray-100 transition-all duration-500 cursor-pointer"
                                        onClick={() => setIsCartOpen(false)}
                                        asChild
                                    >
                                        <button>
                                            <SkipForward className="w-4 h-4 mr-2" />
                                            Continue Shopping
                                        </button>
                                    </Button>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
