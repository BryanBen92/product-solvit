
import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '../data/products';

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <div className="col-span-full text-center py-10">
          <p className="text-lg text-gray-500">No products match your filters.</p>
          <p className="text-sm text-gray-400">Try adjusting your filter criteria.</p>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
