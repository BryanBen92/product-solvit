import { useCart } from '../context/CartContext';

export default function ShoppingCart() {
  const { cart, dispatch } = useCart();

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
      {cart.items.length > 0 ? (
        <ul>
          {cart.items.map((item) => (
            <li key={item.id} className="flex justify-between mb-2">
              <span>{item.name}</span>
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}