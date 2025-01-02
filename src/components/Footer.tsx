import Logo from './Logo';
import SocialIcons from './SocialIcons';

const Footer = () => {
  return (
    <footer className="bg-brand-green text-white font-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="space-y-4">
            <Logo className="text-white" />
            <p className="text-white text-sm font-primary">
              Innovando y generando conocimiento para un futuro mejor.
            </p>
            <SocialIcons />
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Nosotros</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white hover:text-brand-blue transition-colors text-base">
                  ¿Quiénes somos?
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-brand-blue transition-colors text-base">
                  Semilleros
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-brand-blue transition-colors text-base">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-brand-blue transition-colors text-base">
                  Gestión de conocimiento
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Eventos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white hover:text-brand-blue transition-colors text-base">
                  Ciclo de talleres Proyecta
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-brand-blue transition-colors text-base">
                  Memorias de eventos pasados
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-brand-blue transition-colors text-base">
                  Próximos eventos
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white hover:text-brand-blue transition-colors text-base">
                  Laboratorios
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-brand-blue transition-colors text-base">
                  Portafolio de Servicios
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white hover:text-brand-blue transition-colors text-base">
                  Política de privacidad
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-brand-blue transition-colors text-base">
                  Términos de uso
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20">
          <p className="text-center text-white text-sm font-primary">
            © 2024 Grupo de Investigación. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;