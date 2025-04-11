
import React, { useState, useEffect } from 'react';
import { products, getMaxPrice } from '@/data/products';
import ProductGrid from '@/components/ProductGrid';
import FilterPanel from '@/components/FilterPanel';
import Navbar from '@/components/Navbar';
import { CartProvider } from '@/context/CartContext';

const Index = () => {
  // Filter state
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, getMaxPrice()]);
  const [minRating, setMinRating] = useState<number>(0);
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Apply filters
  useEffect(() => {
    let result = products;

    // Filter by categories
    if (selectedCategories.length > 0) {
      result = result.filter(product => selectedCategories.includes(product.category));
    }

    // Filter by price
    result = result.filter(product => product.price <= priceRange[1]);

    // Filter by rating
    if (minRating > 0) {
      result = result.filter(product => product.rating >= minRating);
    }

    setFilteredProducts(result);
  }, [selectedCategories, priceRange, minRating]);

  // Filter handlers
  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handlePriceRangeChange = (range: [number, number]) => {
    setPriceRange(range);
  };

  const handleMinRatingChange = (rating: number) => {
    setMinRating(prev => prev === rating ? 0 : rating);
  };

  const handleClearFilters = () => {
    setSelectedCategories([]);
    setPriceRange([0, getMaxPrice()]);
    setMinRating(0);
  };

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        
        <main className="flex-1 container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Product Catalog</h1>
            <p className="text-gray-600 mt-2">Browse our collection of high-quality products.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <FilterPanel
                selectedCategories={selectedCategories}
                priceRange={priceRange}
                minRating={minRating}
                onCategoryChange={handleCategoryChange}
                onPriceRangeChange={handlePriceRangeChange}
                onMinRatingChange={handleMinRatingChange}
                onClearFilters={handleClearFilters}
              />
            </div>
            
            <div className="lg:col-span-3">
              <ProductGrid products={filteredProducts} />
            </div>
          </div>
        </main>
        
        <footer className="bg-white border-t py-8">
          <div className="container mx-auto px-4">
            <div className="text-center text-gray-500 text-sm">
              <p>© 2025 ShopHub. All rights reserved.</p>
              <p className="mt-1">Assignment 1: E-Commerce Product Catalog with Filtering and Shopping Cart</p>
            </div>
          </div>
        </footer>
      </div>
    </CartProvider>
  );
};

export default Index;
