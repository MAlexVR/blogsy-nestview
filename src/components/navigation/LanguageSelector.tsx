import { Globe, ChevronDown, ChevronUp } from 'lucide-react';
import ReactCountryFlag from "react-country-flag";
import { useState } from 'react';

const LanguageSelector = () => {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  return (
    <div className="relative group">
      <button
        onMouseEnter={() => setIsLanguageOpen(true)}
        onMouseLeave={() => setIsLanguageOpen(false)}
        className="flex items-center space-x-1 text-white hover:text-brand-blue transition-colors"
      >
        <Globe className="h-5 w-5" />
        {isLanguageOpen ? (
          <ChevronUp className="h-4 w-4" />
        ) : (
          <ChevronDown className="h-4 w-4" />
        )}
      </button>
      {isLanguageOpen && (
        <div 
          className="absolute top-full right-0 w-40 bg-white shadow-lg rounded-md py-2 mt-2"
          onMouseEnter={() => setIsLanguageOpen(true)}
          onMouseLeave={() => setIsLanguageOpen(false)}
        >
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
  );
};

export default LanguageSelector;