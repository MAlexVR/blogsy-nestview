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
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1">
        <a href="/" className="block px-3 py-2 text-base font-medium text-white hover:text-white/90 font-primary">
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
        <div className="border-t border-white/20 pt-4 pb-3">
          <div className="flex items-center px-3">
            <button 
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              className="text-white hover:text-white/90 transition-colors"
            >
              <Globe className="h-5 w-5" />
            </button>
                  {isLanguageOpen && (
                    <div className="absolute left-4 mt-32 w-40 bg-white shadow-lg rounded-md py-2">
                      <a href="#" className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
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
                      <a href="#" className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
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
          </div>
          <div className="mt-3">
            <button className="block w-full px-3 py-2 text-base font-medium text-white bg-brand-blue rounded-md hover:bg-brand-blue/90 flex items-center justify-center gap-2 font-primary">
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
