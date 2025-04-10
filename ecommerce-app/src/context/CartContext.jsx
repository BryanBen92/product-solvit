import { createContext, useReducer, useEffect, useContext } from 'react';

const CartContext = createContext();

const initialState = {
  items: [],
  totalItems: 0,
  totalPrice: 0
};

function getInitialCart() {
  const savedCart = localStorage.getItem('cart');
  return savedCart ? JSON.parse(savedCart) : initialState;
}

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      // Logic to add item to cart
    }
    case 'REMOVE_ITEM': {
      // Logic to remove item from cart
    }
    case 'UPDATE_QUANTITY': {
      // Logic to update item quantity
    }
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, null, getInitialCart);
  
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}