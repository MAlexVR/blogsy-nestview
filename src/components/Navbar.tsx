import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="text-xl font-semibold text-secondary">
              Research Group
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-primary transition-colors">
              Inicio
            </a>
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-primary transition-colors">
                <span>Nosotros</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute top-full -left-4 w-48 bg-white shadow-lg rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Quiénes somos
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Misión y visión
                </a>
              </div>
            </div>
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-primary transition-colors">
                <span>Eventos</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute top-full -left-4 w-48 bg-white shadow-lg rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Próximos eventos
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Eventos pasados
                </a>
              </div>
            </div>
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-primary transition-colors">
                <span>Servicios</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute top-full -left-4 w-48 bg-white shadow-lg rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Portafolio
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Laboratorios
                </a>
              </div>
            </div>
            <a href="/contacto" className="text-gray-700 hover:text-primary transition-colors">
              Contáctenos
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors">
              Iniciar sesión
            </button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary/90 transition-colors">
              Prueba gratis
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;