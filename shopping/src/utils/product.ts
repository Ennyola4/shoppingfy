export const products = [
  {
    id: 1,
    name: "Classic Leather Shoe",
    price: 45000,
    image: "/images/shoe.jpg",
    images: [
      "/images/shoe.jpg",
      "/images/shoe2.jpg",
      "/images/shoe3.jpg",
    ],
    description:
      "Premium handcrafted leather shoe designed for comfort, durability, and timeless elegance.",
    rating: 4.8,
    reviews: 124,
    status: "In Stock",
  },
   {
    id: 2,
    name: "Classic Leather Shoe",
    price: 45000,
    image: "/images/shoe.jpg",
    images: [
      "/images/shoe.jpg",
      "/images/shoe2.jpg",
      "/images/shoe3.jpg",
    ],
    description:
      "Premium handcrafted leather shoe designed for comfort, durability, and timeless elegance.",
    rating: 4.8,
    reviews: 124,
    status: "In Stock",
  },
   {
    id: 3,
    name: "Classic Leather Shoe",
    price: 45000,
    image: "/images/shoe.jpg",
    images: [
      "/images/shoe.jpg",
      "/images/shoe2.jpg",
      "/images/shoe3.jpg",
    ],
    description:
      "Premium handcrafted leather shoe designed for comfort, durability, and timeless elegance.",
    rating: 4.8,
    reviews: 124,
    status: "In Stock",
  },
   {
    id: 4,
    name: "Classic Leather Shoe",
    price: 45000,
    image: "/images/shoe.jpg",
    images: [
      "/images/shoe.jpg",
      "/images/shoe2.jpg",
      "/images/shoe3.jpg",
    ],
    description:
      "Premium handcrafted leather shoe designed for comfort, durability, and timeless elegance.",
    rating: 4.8,
    reviews: 124,
    status: "In Stock",
  },
  {
    id: 5,
    name: "Sport Sneakers",
    price: 38000,
    image: "/images/sneaker-main.jpg",
    images: ["/images/sneaker-1.jpg", "/images/sneaker-2.jpg"],
    description: "Lightweight and stylish sneakers perfect for running or casual wear.",
    rating: 4.5,
    reviews: 78,
    status: "In Stock",
  },
  // add more products here
];
export interface Product {
  id: number;
  name: string;
  price: number;
    image: string;
    images?: string[];
    description?: string;
    rating?: number;
    reviews?: number;
    status?: string;
}