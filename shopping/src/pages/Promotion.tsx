import { motion } from "framer-motion";
import { Clock,  ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

/* ================= COUNTDOWN HOOK ================= */
const useCountdown = (targetDate: string) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    if (difference <= 0) return null;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(
      () => setTimeLeft(calculateTimeLeft()),
      60000
    );
    return () => clearInterval(timer);
  }, []);

  return timeLeft;
};

/* ================= DATA ================= */
const promotions = [
  {
    title: "Summer Sale",
    description: "Up to 30% off selected fashion items.",
    discount: "30% OFF",
  },
  {
    title: "Electronics Deal",
    description: "Save big on gadgets and accessories.",
    discount: "25% OFF",
  },
  {
    title: "Home Essentials",
    description: "Everything you need for your home at a discount.",
    discount: "20% OFF",
  },
];

const Promotion = () => {
  const countdown = useCountdown("2026-12-31");

  return (
    <div className="relative">
     

      {/* ================= HERO SECTION ================= */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-[#002366] to-[#0E0C60] text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto text-center px-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Special Promotions 🎉
          </h1>

          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            Discover exclusive deals and limited-time discounts
            designed to give you the best shopping experience.
          </p>

          <Button className="bg-white text-[#002366] hover:bg-gray-100 font-semibold px-8 py-3 rounded-xl">
            Shop Promotions
          </Button>

          {/* Countdown */}
          {countdown && (
            <div className="mt-8 flex justify-center gap-6 text-sm">
              <div>
                <span className="block text-2xl font-bold">
                  {countdown.days}
                </span>
                Days
              </div>
              <div>
                <span className="block text-2xl font-bold">
                  {countdown.hours}
                </span>
                Hours
              </div>
              <div>
                <span className="block text-2xl font-bold">
                  {countdown.minutes}
                </span>
                Minutes
              </div>
            </div>
          )}
        </motion.div>
      </section>

      {/* ================= PROMOTIONS GRID ================= */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.15 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {promotions.map((promo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-4 py-1 text-sm font-bold bg-[#002366]/10 text-[#002366] rounded-full">
                    {promo.discount}
                  </span>
                  <ShoppingBag className="w-5 h-5 text-gray-400" />
                </div>

                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {promo.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {promo.description}
                </p>

                <Button className="w-full bg-[#002366] hover:bg-[#001a4d] text-white">
                  View Deal
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-16 bg-white">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center px-4"
        >
          <Clock className="w-10 h-10 text-[#002366] mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Don’t Miss Out!
          </h2>
          <p className="text-gray-600 mb-8">
            Promotions are updated frequently. Check back often
            to catch the best deals before they’re gone.
          </p>
          <Button className="bg-[#002366] text-white px-10 py-3 rounded-xl">
            Browse All Offers
          </Button>
        </motion.div>
      </section>
    </div>
  );
};

export default Promotion;
