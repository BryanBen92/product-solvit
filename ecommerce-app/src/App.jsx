import { useState, useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import ProductGrid from './components/ProductGrid';
import FilterPanel from './components/FilterPanel';
import ShoppingCart from './components/ShoppingCart';
import Navbar from './components/Navbar';
import productsData from './data/products.json';

function App() {
  // Product state
  const [products, setProducts] = useState(productsData);
  const [filteredProducts, setFilteredProducts] = useState(products);
  
  // Filter states
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState(1000);
  const [minRating, setMinRating] = useState(0);
  
  // Get unique categories from products
  const categories = [...new Set(products.map(product => product.category))];
  
  // Reset filters function
  const resetFilters = () => {
    setSelectedCategories([]);
    setPriceRange(1000);
    setMinRating(0);
  };
  
  // Filter products when filter states change
  useEffect(() => {
    let result = products;
    
    // Filter by category
    if (selectedCategories.length > 0) {
      result = result.filter(product => 
        selectedCategories.includes(product.category)
      );
    }
    
    // Filter by price
    result = result.filter(product => product.price <= priceRange);
    
    // Filter by rating
    result = result.filter(product => product.rating >= minRating);
    
    setFilteredProducts(result);
  }, [products, selectedCategories, priceRange, minRating]);
  
  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar with filters */}
            <div className="w-full md:w-1/4">
              <FilterPanel 
                categories={categories}
                selectedCategories={selectedCategories}
                setSelectedCategories={setSelectedCategories}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                minRating={minRating}
                setMinRating={setMinRating}
                resetFilters={resetFilters}
              />
              
              {/* Shopping Cart on mobile appears below filters */}
              <div className="mt-6 md:hidden">
                <ShoppingCart />
              </div>
            </div>
            
            {/* Main product grid */}
            <div className="w-full md:w-2/4">
              <h1 className="text-2xl font-bold mb-6">Product Catalog</h1>
              <ProductGrid products={filteredProducts} />
            </div>
            
            {/* Shopping Cart on desktop appears on right */}
            <div className="w-full md:w-1/4 hidden md:block">
              <ShoppingCart />
            </div>
          </div>
        </div>
      </div>
    </CartProvider>
  );
}

export default App;