import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    Info,
    Contact,
    User,
    Tag,
    FileText,
    Image,
} from "lucide-react";
import { useEffect } from "react";

const pagesList = [
    { title: "About Us", path: "/about", desc: "Learn more about our company", icon: Info },
    { title: "Contact", path: "/contact", desc: "Get in touch with us", icon: Contact },
    { title: "Profile", path: "/profile", desc: "Manage your account", icon: User },
    { title: "Promotion", path: "/promotion", desc: "Check our latest offers", icon: Tag },
    { title: "Blog", path: "/our-blog", desc: "Read our latest articles", icon: FileText },
    { title: "Gallery", path: "/gallery", desc: "Explore our product images", icon: Image },
];

const Pages = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);
    return (
        <section className="min-h-screen mt-8 bg-gradient-to-b from-gray-50 to-white px-6 py-12 md:px-12 lg:px-20 font-serif">
            {/* Hero */}
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-[#002366] italic text-3xl md:text-4xl font-bold text-center mb-10"
            >
                Pages Hub
            </motion.h1>

            {/* Pages Grid */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pagesList.map((page, idx) => {
                    const Icon = page.icon;
                    return (
                        <motion.div
                            key={page.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-start gap-4"
                        >
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#002366]/10 text-[#002366]">
                                <Icon size={20} />
                            </div>

                            <h3 className="text-lg font-bold text-gray-900">{page.title}</h3>
                            <p className="text-gray-600 text-sm">{page.desc}</p>

                            <Link
                                to={page.path}
                                className="mt-auto text-[#002366] hover:text-[#001a4d] font-medium text-sm underline"
                            >
                                Go to page →
                            </Link>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default Pages;
