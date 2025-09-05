import React from "react";
import { ShoppingCart, Phone, Clock } from "lucide-react";
import logo from '../img/logo_luigi.png';

const Header = ({ cartItemsCount, onCartClick }) => {
  return (
    <header className="bg-white-600 text-green-600 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo e Nome */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white-600 rounded-full flex items-center justify-center">
              <span className="text-white-600 font-bold text-xl"><img src={logo} alt="Logo" /></span>
            </div>
            <div>
              <h1 className="text-2xl font-bold">Luigi Pizza</h1>
              <p className="text-white-100 text-sm">
                O prazer de uma pizza italiana
              </p>
            </div>
          </div>

          {/* Informações de contato */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5" />
              <div className="text-sm">
                <p className="font-semibold">Horário de funcionamento</p>
                <p className="text-100">18:00 às 23:00</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <div className="text-sm">
                <p className="font-semibold">Telefone</p>
                <p className="text-100">(61) 3248-0808</p>
              </div>
            </div>
          </div>

          {/* Carrinho */}
          <button
            onClick={onCartClick}
            className="relative bg-red-700 hover:bg-red-800 px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
          >
            <ShoppingCart className="w-5 h-5 text-white" />
            <span className="hidden sm:inline text-white">Carrinho</span>
            {cartItemsCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-red-800 text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                {cartItemsCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Pedido mínimo */}
      <div className="bg-red-700 py-2">
        <div className="container mx-auto px-4">
          <p className="text-center text-red-100 text-sm">
            Informações importantes: Como Pedido mínimo de R$ 30,00
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
