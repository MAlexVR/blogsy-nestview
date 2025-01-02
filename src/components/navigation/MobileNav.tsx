import { Globe, Search, LogIn } from 'lucide-react';
import ReactCountryFlag from "react-country-flag";

interface MobileNavProps {
  isOpen: boolean;
  isLanguageOpen: boolean;
  setIsLanguageOpen: (value: boolean) => void;
}

const MobileNav = ({ isOpen, isLanguageOpen, setIsLanguageOpen }: MobileNavProps) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-white shadow-lg">
      <div className="px-2 pt-2 pb-3 space-y-1">
        <a href="/" className="block px-3 py-2 text-base font-medium text-brand-blue hover:bg-brand-blue hover:text-white rounded-md transition-all duration-200 font-primary">
          Inicio
        </a>
        <a href="#" className="block px-3 py-2 text-base font-medium text-brand-blue hover:bg-brand-blue hover:text-white rounded-md transition-all duration-200 font-primary">
          Nosotros
        </a>
        <a href="#" className="block px-3 py-2 text-base font-medium text-brand-blue hover:bg-brand-blue hover:text-white rounded-md transition-all duration-200 font-primary">
          Eventos
        </a>
        <a href="#" className="block px-3 py-2 text-base font-medium text-brand-blue hover:bg-brand-blue hover:text-white rounded-md transition-all duration-200 font-primary">
          Servicios
        </a>
        <a href="/contacto" className="block px-3 py-2 text-base font-medium text-brand-blue hover:bg-brand-blue hover:text-white rounded-md transition-all duration-200 font-primary">
          Contáctenos
        </a>
        <div className="border-t border-gray-200 pt-4 pb-3">
          <div className="flex items-center px-3">
            <button 
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              className="text-brand-blue hover:text-brand-blue/90 transition-colors"
            >
              <Globe className="h-5 w-5" />
            </button>
            {isLanguageOpen && (
              <div className="absolute left-4 mt-32 w-40 bg-white shadow-lg rounded-md py-2">
                <a href="#" className="flex items-center justify-between px-4 py-2 text-sm text-brand-blue hover:bg-brand-blue hover:text-white">
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
                </a>
                <a href="#" className="flex items-center justify-between px-4 py-2 text-sm text-brand-blue hover:bg-brand-blue hover:text-white">
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
                </a>
              </div>
            )}
            <button className="ml-4 text-brand-blue hover:text-brand-blue/90 transition-colors">
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