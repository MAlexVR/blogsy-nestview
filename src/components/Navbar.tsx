import { useState } from 'react';
import { ChevronDown, Search, Globe, Menu, X, LogIn, Flag } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="text-xl font-semibold text-secondary">
              Research Group
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center justify-center flex-1 space-x-8">
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

          <div className="hidden md:flex items-center space-x-4">
            {/* Language selector */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-1 text-gray-700 hover:text-primary transition-colors"
              >
                <Globe className="h-5 w-5" />
              </button>
              {isLanguageOpen && (
                <div className="absolute top-full right-0 w-40 bg-white shadow-lg rounded-md py-2 mt-2">
                  <a href="#" className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <span>Español</span>
                    <Flag className="h-4 w-4 text-red-500" />
                  </a>
                  <a href="#" className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <span>English</span>
                    <Flag className="h-4 w-4 text-blue-500" />
                  </a>
                </div>
              )}
            </div>
            
            {/* Search button */}
            <button className="text-gray-700 hover:text-primary transition-colors">
              <Search className="h-5 w-5" />
            </button>
            
            <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary/90 transition-colors">
              Iniciar sesión
              <LogIn className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary">
                Inicio
              </a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary">
                Nosotros
              </a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary">
                Eventos
              </a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary">
                Servicios
              </a>
              <a href="/contacto" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary">
                Contáctenos
              </a>
              <div className="border-t border-gray-200 pt-4 pb-3">
                <div className="flex items-center px-3">
                  <button 
                    onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                    className="text-gray-700 hover:text-primary transition-colors"
                  >
                    <Globe className="h-5 w-5" />
                  </button>
                  {isLanguageOpen && (
                    <div className="absolute left-4 mt-32 w-40 bg-white shadow-lg rounded-md py-2">
                      <a href="#" className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        <span>Español</span>
                        <Flag className="h-4 w-4 text-red-500" />
                      </a>
                      <a href="#" className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        <span>English</span>
                        <Flag className="h-4 w-4 text-blue-500" />
                      </a>
                    </div>
                  )}
                  <button className="ml-4 text-gray-700 hover:text-primary transition-colors">
                    <Search className="h-5 w-5" />
                  </button>
                </div>
                <div className="mt-3">
                  <button className="block w-full px-3 py-2 text-base font-medium text-white bg-primary rounded-md hover:bg-primary/90 flex items-center justify-center gap-2">
                    Iniciar sesión
                    <LogIn className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
