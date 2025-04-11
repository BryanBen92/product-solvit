

import React from 'react';
import { Button } from '@/components/ui/button';
import { CartItem as CartItemType } from '../context/CartContext';
import { Minus, Plus, Trash2 } from 'lucide-react';
//
interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, onUpdateQuantity, onRemove }) => {
  const { product, quantity } = item;
  const subtotal = product.price * quantity;

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center py-4 border-b">
      <div className="w-16 h-16 bg-gray-100 rounded overflow-hidden flex-shrink-0 mr-4">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-medium text-sm sm:text-base line-clamp-1">{product.name}</h4>
        <p className="text-gray-600 text-sm">${product.price.toFixed(2)}</p>
      </div>
      <div className="flex items-center mt-2 sm:mt-0">
        <div className="flex items-center border rounded-md overflow-hidden mr-4">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-none"
            onClick={() => onUpdateQuantity(product.id, quantity - 1)}
            disabled={quantity <= 1}
          >
            <Minus className="h-3 w-3" />
          </Button>
          <span className="w-8 text-center text-sm">{quantity}</span>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-none"
            onClick={() => onUpdateQuantity(product.id, quantity + 1)}
          >
            <Plus className="h-3 w-3" />
          </Button>
        </div>
        <div className="w-20 text-right mr-2">
          <p className="font-medium">${subtotal.toFixed(2)}</p>
        </div>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="text-red-500 hover:text-red-700 hover:bg-red-50"
          onClick={() => onRemove(product.id)}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
