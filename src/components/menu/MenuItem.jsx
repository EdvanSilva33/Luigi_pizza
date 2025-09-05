import React from 'react';
import { Plus } from 'lucide-react';

const MenuItem = ({ item, onAddToCart }) => {
  const handleAddToCart = () => {
    onAddToCart(item);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-video bg-gray-200 flex items-center justify-center">
        <span className="text-6xl">🍕</span>
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-lg text-gray-800 mb-2">{item.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-red-600">
            R$ {item.price.toFixed(2).replace('.', ',')}
          </span>
          
          <button
            onClick={handleAddToCart}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Adicionar</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;

