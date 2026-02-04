import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
    Mail,
    Phone,
    MapPin,
    Clock,
    CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    /* ================= FAQ STICKY LOGIC ================= */
    const faqRef = useRef<HTMLDivElement | null>(null);
    const faqAnswerRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [isSticky, setIsSticky] = useState(false);
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    /* Sticky shadow detection */
    useEffect(() => {
        const onScroll = () => {
            if (!faqRef.current) return;
            const top = faqRef.current.getBoundingClientRect().top;
            setIsSticky(top <= 96); // top-24
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    /* Active FAQ observer */
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveFaq(
                            Number(entry.target.getAttribute("data-index"))
                        );
                    }
                });
            },
            { rootMargin: "-40% 0px -40% 0px" }
        );

        faqAnswerRefs.current.forEach(
            (el) => el && observer.observe(el)
        );

        return () => observer.disconnect();
    }, []);

    /* ================= FORM ================= */
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
            });

            setTimeout(() => setIsSubmitted(false), 3000);
        }, 1000);
    };

    /* ================= DATA ================= */
    const contactInfo = [
        {
            icon: <Phone className="w-6 h-6" />,
            title: "Phone",
            details: "+1 (234) 567-8900",
            subtitle: "Mon-Fri from 9am to 6pm",
        },
        {
            icon: <Mail className="w-6 h-6" />,
            title: "Email",
            details: "support@ecomstore.com",
            subtitle: "We'll respond within 24 hours",
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            title: "Office",
            details: "123 Commerce Street",
            subtitle: "Lagos, Nigeria",
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: "Business Hours",
            details: "Monday - Friday",
            subtitle: "9:00 AM - 6:00 PM GMT+1",
        },
    ];

    const faqs = [
        {
            question: "What is your return policy?",
            answer:
                "We offer a 30-day return policy for unused items in original packaging.",
        },
        {
            question: "How long does shipping take?",
            answer:
                "Domestic orders arrive in 3–5 business days. International shipping takes 7–14 business days.",
        },
        {
            question: "Do you ship internationally?",
            answer:
                "Yes, we ship to over 50 countries worldwide. Shipping costs vary by location.",
        },
        {
            question: "How can I track my order?",
            answer:
                "Once your order ships, you'll receive a tracking number via email.",
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* ================= HERO ================= */}
            <section className="pt-20 pb-12 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#002366] mb-4">
                        Get in Touch
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Our team is ready to help you with any questions or support.
                    </p>
                </div>
            </section>

            {/* ================= CONTENT ================= */}
            <section className="pb-20 px-4">
                <div className="max-w-7xl mx-auto">
                    {/* Contact cards */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {contactInfo.map((info) => (
                            <div
                                key={info.title}
                                className="bg-white p-6 rounded-xl shadow-sm "
                            >
                                <div className="flex items-center mb-3">
                                    <div className="p-2 bg-[#002366]/10 rounded-lg mr-3 text-[#002366]">
                                        {info.icon}
                                    </div>
                                    <h3 className="font-semibold">{info.title}</h3>
                                </div>
                                <p className="font-medium">{info.details}</p>
                                <p className="text-sm text-gray-500">{info.subtitle}</p>
                            </div>
                        ))}
                    </div>

                    {/* ================= FAQ + FORM WRAPPER ================= */}
                    <div className="relative">
                        <div className="grid lg:grid-cols-3 gap-12">
                            {/* ================= FORM ================= */}
                            <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-8">
                                <h2 className="text-2xl font-bold mb-6">
                                    Send us a message
                                </h2>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <input
                                        id="name"
                                        placeholder="Full Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full border rounded-lg px-4 py-3"
                                    />
                                    <input
                                        id="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full border rounded-lg px-4 py-3"
                                    />
                                    <input
                                        id="subject"
                                        placeholder="Subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full border rounded-lg px-4 py-3"
                                    />
                                    <textarea
                                        id="message"
                                        rows={5}
                                        placeholder="Message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full border rounded-lg px-4 py-3"
                                    />

                                    {isSubmitted && (
                                        <div className="flex items-center gap-2 text-green-700">
                                            <CheckCircle className="w-5 h-5" />
                                            Message sent successfully
                                        </div>
                                    )}

                                    <Button
                                        disabled={isSubmitting}
                                        className="bg-[#002366] text-white"
                                    >
                                        {isSubmitting ? "Sending..." : "Send Message"}
                                    </Button>
                                </form>
                            </div>

                            {/* ================= STICKY FAQ ================= */}
                            <motion.div
                                ref={faqRef}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className={`
                  space-y-6
                  lg:sticky lg:top-24 lg:self-start
                  lg:transition-all lg:duration-300
                  ${isSticky
                                        ? "lg:shadow-2xl lg:rounded-2xl"
                                        : ""
                                    }
                `}
                            >
                                <div className="bg-[#002366] text-white rounded-2xl p-6">
                                    <h3 className="font-bold text-xl mb-4">
                                        FAQs
                                    </h3>
                                    <div className="space-y-3">
                                        {faqs.map((faq, index) => (
                                            <button
                                                key={faq.question}
                                                onClick={() =>
                                                    faqAnswerRefs.current[index]?.scrollIntoView(
                                                        { behavior: "smooth", block: "start" }
                                                    )
                                                }
                                                className={`w-full text-left p-3 rounded-lg transition
                          ${activeFaq === index
                                                        ? "bg-white text-[#002366] shadow"
                                                        : "bg-white/10 hover:bg-white/20"
                                                    }`}
                                            >
                                                {faq.question}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* ================= MAP (STICKY STOP) ================= */}
                        <div className="mt-20 bg-white rounded-2xl shadow-lg p-8">
                            <h2 className="text-2xl font-bold mb-4">
                                Visit Our Office
                            </h2>

                            <div className="space-y-6">
                                {faqs.map((faq, index) => (
                                    <div
                                        key={faq.question}
                                        ref={(el) => {
                                            faqAnswerRefs.current[index] = el;
                                        }}
                                        data-index={index}
                                        className="border-b pb-6 scroll-mt-28"
                                    >
                                        <h4 className="font-semibold mb-1">{faq.question}</h4>
                                        <p className="text-gray-600">{faq.answer}</p>
                                    </div>
                                ))}

                            </div>

                            <div className="h-[250px] bg-gray-100 rounded-lg mt-10 flex items-center justify-center">
                                <MapPin className="w-10 h-10 text-gray-400" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
