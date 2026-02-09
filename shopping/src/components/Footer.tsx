import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className=" bg-cover text-gray-200 pt-16 pb-8 px-6 md:px-12 lg:px-20 relative overflow-hidden font-serif" style={{
      backgroundImage:
        "url('https://cdn.pixabay.com/photo/2016/11/29/07/16/balancing-1868051_1280.jpg')",
    }}>
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Animated background shapes */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "mirror" }}
        className="absolute top-10 left-10 w-24 h-24 bg-white/10 rounded-full blur-2xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "mirror" }}
        className="absolute bottom-0 right-0 w-32 h-32 bg-[#C08081]/20 rounded-full blur-3xl"
      />

      {/* Footer content */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 relative z-10">
        {/* Brand Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-white mb-3">Shoppingfy</h2>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            Discover fashion, electronics, and lifestyle essentials curated to make your everyday extraordinary.
          </p>
          <div>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.2 }}
                className="p-2 rounded-full hover:bg-white/20 transition"
              >
                <Facebook className="w-6 h-6 text-[#C44536] hover:text-blue-500 " />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2 }}
                className="p-2  rounded-full hover:bg-white/20 transition"
              >
                <Twitter className="w-6 h-6 text-[#C44536] hover:text-blue-300" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2 }}
                className="p-2 rounded-full hover:bg-white/20 transition"
              >
                <Instagram className="w-6 h-6 text-[#C44536] hover:text-yellow-600" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2 }}
                className="p-2  rounded-full hover:bg-white/20 transition"
              >
                <Youtube className="w-6 h-6 text-[#C44536] hover:text-red-500" />
              </motion.a>
            </div>
           
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {["Shop", "About Us", "Contact", "FAQs", "Privacy Policy"].map((link, i) => (
              <motion.li
                key={i}
                whileHover={{ x: 6 }}
                className="cursor-pointer hover:text-white/90 transition"
              >
                {link}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Customer Service */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h3 className="text-lg font-semibold text-white mb-4">Customer Service</h3>
          <ul className="space-y-2 text-sm">
            {["Returns", "Shipping Info", "Order Tracking", "Gift Cards", "Support"].map((item, i) => (
              <motion.li
                key={i}
                whileHover={{ x: 6 }}
                className="cursor-pointer hover:text-white/90 transition"
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h3 className="text-lg font-semibold text-white mb-4">Get in Touch</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <Mail className="w-4 h-4 mt-0.5 text-[#C44536]" />
              <span>support@shoppingfy.com</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="w-4 h-4 mt-0.5 text-[#C44536]" />
              <span>+234 800 123 4567</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-0.5 text-[#C44536]" />
              <span>123 Eleganza Plaza, Lagos, Nigeria</span>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Divider */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 0.8 }}
        className="h-[1px] bg-white/10 my-10"
      />

      {/* Bottom section */}
      <div className="text-center text-gray-400 text-sm relative z-10">
        <p>
          © {new Date().getFullYear()} <span className="font-semibold text-white">Shoppingfy</span>.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
