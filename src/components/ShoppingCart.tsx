

import React from 'react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ShoppingCart as CartIcon } from 'lucide-react';
import CartItem from './CartItem';
import { useCart } from '../context/CartContext';

interface ShoppingCartProps {
  isOpen: boolean;
  onClose: () => void;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, updateQuantity, clearCart, getCartTotal, getCartItemCount } = useCart();
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50">
      <div className="w-full max-w-md bg-white shadow-lg flex flex-col h-full">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold flex items-center">
            <CartIcon className="mr-2 h-5 w-5" />
            Your Cart
            <span className="ml-2 text-sm font-normal text-gray-500">
              ({getCartItemCount()} items)
            </span>
          </h2>
          <Button variant="ghost" size="sm" onClick={onClose}>
            ✕
          </Button>
        </div>
        
        <ScrollArea className="flex-1">
          {cart.items.length > 0 ? (
            <div className="p-4">
              {cart.items.map(item => (
                <CartItem 
                  key={item.product.id} 
                  item={item} 
                  onUpdateQuantity={updateQuantity} 
                  onRemove={removeFromCart}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full p-4">
              <CartIcon className="h-16 w-16 text-gray-300 mb-4" strokeWidth={1} />
              <p className="text-lg font-medium text-gray-700">Your cart is empty</p>
              <p className="text-gray-500 mt-1 text-center">
                Looks like you haven't added anything to your cart yet.
              </p>
              <Button onClick={onClose} className="mt-6">
                Continue Shopping
              </Button>
            </div>
          )}
        </ScrollArea>
        
        {cart.items.length > 0 && (
          <div className="p-4 border-t">
            <div className="flex justify-between mb-4">
              <span className="font-medium">Total</span>
              <span className="font-bold text-lg">${getCartTotal().toFixed(2)}</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" onClick={clearCart}>
                Clear Cart
              </Button>
              <Button>
                Checkout
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;

