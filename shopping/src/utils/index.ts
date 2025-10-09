import {  ShieldCheckIcon, StarIcon, TruckIcon } from "lucide-react";

export const products = [
  {
    id: 1,
    name: "Smart Fitness Watch",
    price: "25000",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
    bgColor: "#fdf2f2",
    status: "In Stock",
    category: "Electronics",
    rating: 4.6,
    reviews: 187,
    description:
      "Track your health goals and stay connected with this all-day fitness smartwatch featuring heart rate monitoring and mobile notifications.",
  },
  {
    id: 2,
    name: "Wireless Noise-Canceling Headphones",
    price: "32000",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD2-5rGUTfacv3kcNhx44DT9zjliNWWzf8bA&s",
    bgColor: "#f0f9ff",
    status: "In Stock",
    category: "Gadgets",
    rating: 4.8,
    reviews: 245,
    description:
      "Immerse yourself in superior sound quality with noise-canceling technology and 20+ hours of playtime on a single charge.",
  },
  {
    id: 3,
    name: "Leather Handbag",
    price: "18000",
    image:
      "https://www.cartrollers.com/wp-content/uploads/2025/01/CLASSIC-DESIGNERS-LEATHER-HANDBAG1.jpeg",
    bgColor: "#fff7ed",
    status: "Limited",
    category: "Fashion",
    rating: 4.5,
    reviews: 89,
    description:
      "Elegant and durable genuine leather handbag perfect for everyday use and special occasions.",
  },
  {
    id: 4,
    name: "Wireless Bluetooth Speaker",
    price: "15000",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKuZXB6Lo8az377-tfCDGLJvQAqxpdRRr1HQ&s",
    bgColor: "#eef2ff",
    status: "In Stock",
    category: "Audio",
    rating: 4.7,
    reviews: 301,
    description:
      "Portable Bluetooth speaker with deep bass and crystal-clear sound. Perfect for home or outdoor use.",
  },
  {
    id: 5,
    name: "Men’s Casual Sneakers",
    price: "22000",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6SOVXEDg9Iz2JR8jlh-7Wy1HuJChlBwV6Og&s",
    bgColor: "#fef2f2",
    status: "In Stock",
    category: "Fashion",
    rating: 4.4,
    reviews: 164,
    description:
      "Lightweight, breathable sneakers designed for comfort and durability — ideal for everyday wear.",
  },
  {
    id: 6,
    name: "Smartphone Tripod Stand",
    price: "9500",
    image:
      "https://www.moft.us/cdn/shop/files/tripod_stand2_7338c934-17fe-443c-9007-9f60b97b6ad7.png?v=1751898839&width=1090",
    bgColor: "#f0fdfa",
    status: "In Stock",
    category: "Accessories",
    rating: 4.3,
    reviews: 75,
    description:
      "Adjustable tripod stand for smartphones — perfect for vlogging, video calls, and photography.",
  },
  {
    id: 7,
    name: "Wireless Keyboard & Mouse Combo",
    price: "17000",
    image:
      "https://cdn-shop.adafruit.com/970x728/1738-03.jpg",
    bgColor: "#faf5ff",
    status: "In Stock",
    category: "Office Tech",
    rating: 4.6,
    reviews: 112,
    description:
      "Sleek wireless keyboard and mouse combo offering comfort, precision, and minimal desk clutter.",
  },
  {
    id: 8,
    name: "Scented Candle Gift Set",
    price: "12500",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
    bgColor: "#fff1f2",
    status: "In Stock",
    category: "Home Decor",
    rating: 4.9,
    reviews: 203,
    description:
      "Aromatherapy candle set with calming natural scents to relax your body and refresh your space.",
  },
];



export const trust = [
  {
    icon: TruckIcon, 
    title: "Free Shipping",
    description: "Free delivery on orders over $50",
    rating: 4, 
    reviewCount: 124,
    details: ["2-3 day delivery", "Free returns", "Track your order"],
    badge: "Most Popular",
    bgColor : "bg-red-500/20",
    textColor : "text-red-500"
  },
  {
    icon: ShieldCheckIcon,
    title: "Secure Payment", 
    description: "Your data is always protected",
    rating: 5,
    reviewCount: 89,
    details: ["256-bit encryption", "PCI compliant", "Money-back guarantee"],
    badge: "Verified",
     bgColor : "bg-green-500/20",
    textColor : "text-green-500"
  },
  {
    icon: StarIcon,
    title: "Rated Excellent",
    description: "By thousands of happy customers",
    rating: 5,
    reviewCount: 2150,
    details: ["500+ 5-star reviews", "Customer choice 2024", "Verified purchases"],
    badge: "Award Winning",
     bgColor : "bg-yellow-500/20",
    textColor : "text-yellow-500"
  }
  
];