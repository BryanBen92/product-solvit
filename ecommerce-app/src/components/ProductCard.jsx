import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { dispatch } = useCart();
  
  const addToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: product
    });
  };

  return (
    <div className="border rounded-lg overflow-hidden shadow-md">
      <img 
        src={product.image} 
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg">{product.name}</h3>
        <p className="text-gray-500">{product.category}</p>
        <div className="flex items-center mt-1">
          {/* Star rating implementation */}
          <span className="ml-1">{product.rating}</span>
        </div>
        <p className="font-bold text-lg mt-2">${product.price}</p>
        <button 
          onClick={addToCart}
          className="mt-3 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 w-full"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
