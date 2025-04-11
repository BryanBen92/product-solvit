
import React from 'react';
import { Product } from '../data/products';
import { Button } from '@/components/ui/button';
import { useCart } from '../context/CartContext';
import { Star, StarHalf } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  // Generate star rating display
  const renderRating = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    return (
      <div className="flex items-center">
        {Array.from({ length: fullStars }).map((_, i) => (
          <Star key={`star-${i}`} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
        {hasHalfStar && <StarHalf className="w-4 h-4 fill-yellow-400 text-yellow-400" />}
        <span className="ml-1 text-sm text-gray-600">{rating.toFixed(1)}</span>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-square overflow-hidden bg-gray-100">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-4">
        <div className="inline-block px-2 py-1 mb-2 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
          {product.category}
        </div>
        <h3 className="font-medium text-lg mb-1 line-clamp-1">{product.name}</h3>
        <p className="font-bold text-xl mb-2">${product.price.toFixed(2)}</p>
        <div className="mb-3">
          {renderRating(product.rating)}
        </div>
        <Button 
          className="w-full bg-blue-600 hover:bg-blue-700" 
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
