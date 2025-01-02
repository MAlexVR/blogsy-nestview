import { Image } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo = ({ className = "" }: LogoProps) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Image className="h-8 w-8 text-primary" />
      <span className="text-xl font-semibold text-secondary">
        Research Group
      </span>
    </div>
  );
};

export default Logo;