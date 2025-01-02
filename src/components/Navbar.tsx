import { useState } from 'react';
import { Search, Menu, X, LogIn } from 'lucide-react';
import Logo from './Logo';
import LanguageSelector from './navigation/LanguageSelector';
import DesktopNav from './navigation/DesktopNav';
import MobileNav from './navigation/MobileNav';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-brand-green z-50 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo />

          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-white/90"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
          
          <DesktopNav />

          <div className="hidden md:flex items-center space-x-4">
            <LanguageSelector />
            
            <button className="text-white hover:text-white/90 transition-colors">
              <Search className="h-5 w-5" />
            </button>
            
            <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-brand-blue rounded-md hover:bg-brand-blue/90 transition-colors font-primary">
              Iniciar sesión
              <LogIn className="h-4 w-4" />
            </button>
          </div>
        </div>

        <MobileNav 
          isOpen={isOpen}
          isLanguageOpen={isLanguageOpen}
          setIsLanguageOpen={setIsLanguageOpen}
        />
      </div>
    </nav>
  );
};

export default Navbar;