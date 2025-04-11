
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 129.99,
    image: "/lovable-uploads/7d07c97d-3aa9-4ae0-acff-4d7a2469e90c.png",
    category: "Electronics",
    rating: 4.5,
    description: "Premium wireless headphones with noise cancellation"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 199.99,
    image: "/lovable-uploads/4f7b2957-991c-40e6-bf20-00af5c7e2d54.png",
    category: "Electronics",
    rating: 4.2,
    description: "Track your fitness and stay connected with this smart watch"
  },
  {
    id: 3,
    name: "Running Shoes",
    price: 89.99,
    image: "/lovable-uploads/24107160-054c-4511-babf-7f6afdc1b6eb.png",
    category: "Clothing",
    rating: 4.7,
    description: "Comfortable running shoes with excellent support"
  },
  {
    id: 4,
    name: "Coffee Maker",
    price: 59.99,
    image: "/lovable-uploads/ce1b2e49-b999-452d-b6a3-7e5efcbbec91.png",
    category: "Home",
    rating: 4.0,
    description: "Brew perfect coffee every morning with this reliable coffee maker"
  },
  {
    id: 5,
    name: "Laptop Backpack",
    price: 49.99,
    image: "/placeholder.svg",
    category: "Accessories",
    rating: 4.8,
    description: "Durable backpack with padded compartment for your laptop"
  },
  {
    id: 6,
    name: "Wireless Mouse",
    price: 24.99,
    image: "/placeholder.svg",
    category: "Electronics",
    rating: 4.3,
    description: "Ergonomic wireless mouse for comfortable all-day use"
  },
  {
    id: 7,
    name: "Yoga Mat",
    price: 29.99,
    image: "/placeholder.svg",
    category: "Fitness",
    rating: 4.6,
    description: "Non-slip yoga mat perfect for home workouts"
  },
  {
    id: 8,
    name: "Water Bottle",
    price: 19.99,
    image: "/placeholder.svg",
    category: "Fitness",
    rating: 4.4,
    description: "Insulated water bottle that keeps drinks cold for 24 hours"
  },
  {
    id: 9,
    name: "Desk Lamp",
    price: 34.99,
    image: "/placeholder.svg",
    category: "Home",
    rating: 4.1,
    description: "Adjustable desk lamp with multiple brightness settings"
  },
  {
    id: 10,
    name: "Bluetooth Speaker",
    price: 79.99,
    image: "/placeholder.svg",
    category: "Electronics",
    rating: 4.9,
    description: "Portable bluetooth speaker with incredible sound quality"
  },
  {
    id: 11,
    name: "Cotton T-Shirt",
    price: 15.99,
    image: "/placeholder.svg",
    category: "Clothing",
    rating: 4.2,
    description: "Soft and comfortable cotton t-shirt for everyday wear"
  },
  {
    id: 12,
    name: "Plant Pot",
    price: 12.99,
    image: "/placeholder.svg",
    category: "Home",
    rating: 3.9,
    description: "Ceramic plant pot perfect for indoor plants"
  }
];

export const getCategories = (): string[] => {
  const categoriesSet = new Set<string>();
  products.forEach(product => categoriesSet.add(product.category));
  return Array.from(categoriesSet);
};

export const getMaxPrice = (): number => {
  return Math.max(...products.map(product => product.price));
};
