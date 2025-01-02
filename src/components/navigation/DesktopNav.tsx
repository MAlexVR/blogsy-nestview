import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const DesktopNav = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <div className="hidden md:flex items-center justify-center flex-1 space-x-8">
      <a href="/" className="text-white hover:text-brand-blue transition-colors text-base font-medium font-primary">
        Inicio
      </a>
      <div 
        className="relative group"
        onMouseEnter={() => setActiveMenu('about')}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <button className="flex items-center space-x-1 text-white hover:text-brand-blue transition-colors text-base font-medium font-primary">
          <span>Nosotros</span>
          {activeMenu === 'about' ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </button>
        <div className="absolute top-full -left-4 w-48 bg-white shadow-lg rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-primary">
            Quiénes somos
          </a>
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-primary">
            Misión y visión
          </a>
        </div>
      </div>
      <div 
        className="relative group"
        onMouseEnter={() => setActiveMenu('events')}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <button className="flex items-center space-x-1 text-white hover:text-brand-blue transition-colors text-base font-medium font-primary">
          <span>Eventos</span>
          {activeMenu === 'events' ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </button>
        <div className="absolute top-full -left-4 w-48 bg-white shadow-lg rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-primary">
            Próximos eventos
          </a>
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-primary">
            Eventos pasados
          </a>
        </div>
      </div>
      <div 
        className="relative group"
        onMouseEnter={() => setActiveMenu('services')}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <button className="flex items-center space-x-1 text-white hover:text-brand-blue transition-colors text-base font-medium font-primary">
          <span>Servicios</span>
          {activeMenu === 'services' ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </button>
        <div className="absolute top-full -left-4 w-48 bg-white shadow-lg rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-primary">
            Portafolio
          </a>
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-primary">
            Laboratorios
          </a>
        </div>
      </div>
      <a href="/contacto" className="text-white hover:text-brand-blue transition-colors text-base font-medium font-primary">
        Contáctenos
      </a>
    </div>
  );
};

export default DesktopNav;