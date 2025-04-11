
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart as CartIcon, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import ShoppingCart from './ShoppingCart';

const Navbar: React.FC = () => {
  const { getCartItemCount } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold text-blue-600">ShopHub</a>
            <nav className="hidden md:block ml-10">
              <ul className="flex space-x-6">
                <li><a href="/" className="text-gray-700 hover:text-blue-600">Home</a></li>
                <li><a href="/" className="text-gray-700 hover:text-blue-600">Products</a></li>
                <li><a href="/" className="text-gray-700 hover:text-blue-600">Categories</a></li>
                <li><a href="/" className="text-gray-700 hover:text-blue-600">About</a></li>
              </ul>
            </nav>
          </div>
          
          <div className="flex items-center">
            <Button 
              variant="ghost" 
              size="icon"
              className="relative" 
              onClick={() => setIsCartOpen(true)}
            >
              <CartIcon className="h-5 w-5" />
              {getCartItemCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getCartItemCount()}
                </span>
              )}
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="ml-2 md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="px-4 py-3">
            <ul className="space-y-2">
              <li><a href="/" className="block py-2 text-gray-700 hover:text-blue-600">Home</a></li>
              <li><a href="/" className="block py-2 text-gray-700 hover:text-blue-600">Products</a></li>
              <li><a href="/" className="block py-2 text-gray-700 hover:text-blue-600">Categories</a></li>
              <li><a href="/" className="block py-2 text-gray-700 hover:text-blue-600">About</a></li>
            </ul>
          </nav>
        </div>
      )}
      
      <ShoppingCart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
};

export default Navbar;
