import { Globe, Search, LogIn, ChevronDown, ChevronUp } from 'lucide-react';
import ReactCountryFlag from "react-country-flag";
import { useState } from 'react';

interface MobileNavProps {
  isOpen: boolean;
  isLanguageOpen: boolean;
  setIsLanguageOpen: (value: boolean) => void;
}

const MobileNav = ({ isOpen, isLanguageOpen, setIsLanguageOpen }: MobileNavProps) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const toggleMenu = (menu: string) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-white shadow-lg">
      <div className="px-2 pt-2 pb-3 space-y-1">
        <a href="/" className="block px-3 py-2 text-base font-medium text-brand-blue hover:bg-brand-blue hover:text-white rounded-md transition-all duration-200 font-primary">
          Inicio
        </a>
        
        <div className="space-y-1">
          <button 
            onClick={() => toggleMenu('about')}
            className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-brand-blue hover:bg-brand-blue hover:text-white rounded-md transition-all duration-200 font-primary"
          >
            <span>Nosotros</span>
            {activeMenu === 'about' ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </button>
          {activeMenu === 'about' && (
            <div className="pl-4 space-y-1">
              <a href="#" className="block px-3 py-2 text-sm text-brand-blue hover:bg-brand-blue hover:text-white rounded-md font-primary">
                Quiénes somos
              </a>
              <a href="#" className="block px-3 py-2 text-sm text-brand-blue hover:bg-brand-blue hover:text-white rounded-md font-primary">
                Misión y visión
              </a>
            </div>
          )}
        </div>

        <div className="space-y-1">
          <button 
            onClick={() => toggleMenu('events')}
            className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-brand-blue hover:bg-brand-blue hover:text-white rounded-md transition-all duration-200 font-primary"
          >
            <span>Eventos</span>
            {activeMenu === 'events' ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </button>
          {activeMenu === 'events' && (
            <div className="pl-4 space-y-1">
              <a href="#" className="block px-3 py-2 text-sm text-brand-blue hover:bg-brand-blue hover:text-white rounded-md font-primary">
                Próximos eventos
              </a>
              <a href="#" className="block px-3 py-2 text-sm text-brand-blue hover:bg-brand-blue hover:text-white rounded-md font-primary">
                Eventos pasados
              </a>
            </div>
          )}
        </div>

        <div className="space-y-1">
          <button 
            onClick={() => toggleMenu('services')}
            className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-brand-blue hover:bg-brand-blue hover:text-white rounded-md transition-all duration-200 font-primary"
          >
            <span>Servicios</span>
            {activeMenu === 'services' ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </button>
          {activeMenu === 'services' && (
            <div className="pl-4 space-y-1">
              <a href="#" className="block px-3 py-2 text-sm text-brand-blue hover:bg-brand-blue hover:text-white rounded-md font-primary">
                Portafolio
              </a>
              <a href="#" className="block px-3 py-2 text-sm text-brand-blue hover:bg-brand-blue hover:text-white rounded-md font-primary">
                Laboratorios
              </a>
            </div>
          )}
        </div>

        <a href="/contacto" className="block px-3 py-2 text-base font-medium text-brand-blue hover:bg-brand-blue hover:text-white rounded-md transition-all duration-200 font-primary">
          Contáctenos
        </a>

        <div className="border-t border-gray-200 pt-4 pb-3">
          <div className="flex items-center px-3 space-x-4">
            <div className="relative">
              <button 
                onClick={() => toggleMenu('language')}
                className="flex items-center space-x-1 text-brand-blue hover:text-brand-blue/90 transition-colors"
              >
                <Globe className="h-5 w-5" />
                {activeMenu === 'language' ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </button>
              {activeMenu === 'language' && (
                <div className="absolute left-0 w-40 bg-white shadow-lg rounded-md py-2 mt-2 z-50">
                  <button 
                    onClick={() => {
                      console.log('Español seleccionado');
                      toggleMenu('language');
                    }}
                    className="w-full flex items-center justify-between px-4 py-2 text-sm text-brand-blue hover:bg-brand-blue hover:text-white"
                  >
                    <span>Español</span>
                    <ReactCountryFlag
                      countryCode="ES"
                      svg
                      style={{
                        width: '1.5em',
                        height: '1.5em',
                      }}
                      title="España"
                    />
                  </button>
                  <button 
                    onClick={() => {
                      console.log('English selected');
                      toggleMenu('language');
                    }}
                    className="w-full flex items-center justify-between px-4 py-2 text-sm text-brand-blue hover:bg-brand-blue hover:text-white"
                  >
                    <span>English</span>
                    <ReactCountryFlag
                      countryCode="US"
                      svg
                      style={{
                        width: '1.5em',
                        height: '1.5em',
                      }}
                      title="United States"
                    />
                  </button>
                </div>
              )}
            </div>
            <button className="text-brand-blue hover:text-brand-blue/90 transition-colors">
              <Search className="h-5 w-5" />
            </button>
          </div>
          <div className="mt-3 px-3">
            <button className="w-full px-8 py-3 text-sm font-medium text-white bg-brand-blue hover:bg-white hover:text-brand-blue border border-brand-blue transition-all duration-200 transform hover:scale-105 rounded-md font-primary flex items-center justify-center gap-2">
              Iniciar sesión
              <LogIn className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;