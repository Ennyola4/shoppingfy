import { useState, useEffect, useRef } from "react";
import {
    ShoppingCart,
    Search,
    User,
    Menu,
    X,
    ShoppingBasket,
    LogIn,
    Heart,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const searchRef = useRef<HTMLDivElement>(null);

    // Sticky blur effect on scroll
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);


    // Close search when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setShowSearch(false);
            }
        };
        if (showSearch) document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [showSearch]);

    return (
        <nav
            className={`fixed w-full top-0 z-50 transition-all font-serif duration-300 ${scrolled ? "bg-[#C08081]/80 shadow-md" : ""
                } text-white font-serif`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <div className="flex items-center gap-2 font-bold">
                        <ShoppingBasket />
                        <a href="/" className="text-xl font-serif">SHOPPINGFY</a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-6">
                        {["Home", "Shop", "Promotion", "Pages", "Blog", "Contact"].map((item) => (
                            <a
                                key={item}
                                href="#"
                                className="hover:text-gray-300 hover:underline transition-colors"
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                    {/* Right side icons */}
                    <div className="flex items-center gap-4 relative">
                        {/* Animated Search */}
                        <div ref={searchRef} className="relative flex items-center">
                            <button
                                className="p-2 rounded-full hover:bg-gray-100 hover:text-black transition-colors"
                                onClick={() => setShowSearch((prev) => !prev)}
                            >
                                <Search size={20} />
                            </button>

                            <AnimatePresence>
                                {showSearch && (
                                    <motion.div
                                        initial={{ width: 0, opacity: 0 }}
                                        animate={{ width: 180, opacity: 1 }}
                                        exit={{ width: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="absolute right-10 bg-white text-gray-700 rounded-full shadow-md overflow-hidden flex items-center px-2"
                                    >
                                        <Search size={16} className="text-gray-500" />
                                        <input
                                            type="text"
                                            placeholder="Search..."
                                            autoFocus
                                            className="outline-none px-2 py-1 bg-transparent text-sm w-full"
                                        />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Cart */}
                        <div className="relative cursor-pointer">
                            <ShoppingCart size={22} />
                            <span className="absolute -top-2 -right-2 bg-red-600 text-xs rounded-full px-1.5">
                                3
                            </span>
                        </div>

                        {/* Profile Dropdown */}
                        <div className="relative group">
                            <User className="cursor-pointer" />
                            <div className="absolute right-0 mt-2 w-36 text-gray-200 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-all duration-500 cursor-pointer">
                                <ul className="flex flex-col bg-[#002366] p-2 text-sm shadow-lg border-t rounded-md">
                                    <li className="hover:bg-white hover:text-[#002366] px-3 py-1 rounded">My Profile</li>
                                    <li className="hover:bg-white hover:text-[#002366] px-3 py-1 rounded">Orders</li>
                                    <li className="hover:bg-white hover:text-[#002366] px-3 py-1 rounded">Logout</li>
                                    
                                </ul>
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Dim background overlay */}
                        <motion.div
                            key="overlay" // ✅ unique key here
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-black z-[50]"
                            onClick={() => setIsOpen(false)} // closes menu when you click outside
                        />

                        {/* Slide-out menu */}
                        <motion.div
                            key="slideMenu" // ✅ changed key name here
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", stiffness: 100, damping: 18 }}
                            className="fixed inset-y-0 right-0 w-64 bg-[#C08081] text-white shadow-xl md:hidden flex flex-col p-6 space-y-6 z-[60]"
                        >
                            {/* Header with close */}
                            <div className="flex justify-between items-center">
                                <h2 className="text-lg font-bold">Menu</h2>
                                <button onClick={() => setIsOpen(false)}>
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Links */}
                            <div className="flex flex-col space-y-4">
                                {["Home", "Shop", "Promotion", "Pages", "Blog", "Contact"].map((item) => (
                                    <motion.a
                                        key={item}
                                        href="#"
                                        whileHover={{ x: 6 }}
                                        className="hover:bg-[#fff2] rounded px-3 py-2 text-sm"
                                    >
                                        {item}
                                    </motion.a>
                                ))}
                            </div>

                            <div className="border-t border-white/20 pt-5 space-y-4 text-sm">
                                <motion.div whileHover={{ x: 4 }} className="flex items-center gap-3 cursor-pointer">
                                    <User size={18} /> Profile
                                </motion.div>
                                <motion.div whileHover={{ x: 4 }} className="flex items-center gap-3 cursor-pointer">
                                    <Heart size={18} /> Wishlist
                                </motion.div>
                                <motion.div whileHover={{ x: 4 }} className="flex items-center gap-3 cursor-pointer">
                                    <LogIn size={18} /> Sign In
                                </motion.div>
                            </div>

                            <div className="mt-auto pt-4 border-t border-white/10 text-xs text-center text-gray-200">
                                © {new Date().getFullYear()} Shoppingfy
                                <br />Shop Smart, Live Stylish.
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>


        </nav>
    );
};

export default Navbar;
