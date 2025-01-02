import { Globe, ChevronDown, ChevronUp } from 'lucide-react';
import ReactCountryFlag from "react-country-flag";
import { useState } from 'react';

const LanguageSelector = () => {
  const [activeMenu, setActiveMenu] = useState(false);

  const handleLanguageChange = (language: string) => {
    console.log(`Cambiando idioma a: ${language}`);
    setActiveMenu(false);
  };

  return (
    <div 
      className="relative group"
      onMouseEnter={() => setActiveMenu(true)}
      onMouseLeave={() => setActiveMenu(false)}
    >
      <button className="flex items-center space-x-1 text-white hover:text-brand-blue transition-colors">
        <Globe className="h-5 w-5" />
        {activeMenu ? (
          <ChevronUp className="h-4 w-4" />
        ) : (
          <ChevronDown className="h-4 w-4" />
        )}
      </button>
      
      <div className={`absolute top-full right-0 w-48 bg-white shadow-lg rounded-md py-2 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50`}>
        <button 
          onClick={() => handleLanguageChange('es')}
          className="w-full flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-brand-blue hover:text-white"
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
          onClick={() => handleLanguageChange('en')}
          className="w-full flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-brand-blue hover:text-white"
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
    </div>
  );
};

export default LanguageSelector;