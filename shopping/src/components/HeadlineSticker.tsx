import { motion } from "framer-motion";
import { Tag, Sparkles, ShoppingBag, Gift, Zap } from "lucide-react";

const promos = [
  { icon: <Tag className="w-4 h-4 text-yellow-400" />, text: "50% OFF all sneakers this weekend!" },
  { icon: <ShoppingBag className="w-4 h-4 text-pink-500" />, text: "New arrivals just dropped — shop now!" },
  { icon: <Gift className="w-4 h-4 text-green-400" />, text: "Buy 2 get 1 FREE on accessories!" },
  { icon: <Zap className="w-4 h-4 text-orange-400" />, text: "Flash Sale: Up to 70% off tech gadgets!" },
  { icon: <Sparkles className="w-4 h-4 text-blue-400" />, text: "Exclusive: Members get early access to premium collections!" },
];

const HeadlineTicker = () => {
  return (
    <div className="w-full bg-[#0E0C60]/90 text-white py-3 overflow-hidden border-b border-white/20">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      >
        {/* Duplicate content to make it loop seamlessly */}
        {[...promos, ...promos].map((promo, index) => (
          <div
            key={index}
            className="flex items-center gap-2 mx-4 text-sm md:text-base font-medium"
          >
            {promo.icon}
            <span className="font-serif">{promo.text}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default HeadlineTicker;
