export const products = [
  {
    id: 1,
    name: "Classic Leather Shoe",
    price: 45001,
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
    price: 20000,
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
    price: 45002,
    image: "/images/shoe3.jpg",
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
    price: 45003,
    image: "/images/shoe2.jpg",
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
    name: "Classic Leather Shoe",
    price: 45003,
    image: "/images/shoe2.jpg",
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
    id: 6,
    name: "Classic Leather Shoe",
    price: 45003,
    image: "/images/shoe2.jpg",
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
    id: 7,
    name: "Classic Leather Shoe",
    price: 45003,
    image: "/images/shoe2.jpg",
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
    id: 8,
    name: "Classic Leather Shoe",
    price: 45003,
    image: "/images/shoe2.jpg",
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
    id: 9,
    name: "Classic Leather Shoe",
    price: 45003,
    image: "/images/shoe2.jpg",
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
    id: 10,
    name: "Classic Leather Shoe",
    price: 45003,
    image: "/images/shoe2.jpg",
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