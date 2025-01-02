import { Facebook, Twitter, Github, Youtube } from 'lucide-react';

const SocialIcons = () => {
  return (
    <div className="flex space-x-4">
      <a href="#" className="text-gray-400 hover:text-white transition-colors">
        <Facebook className="h-5 w-5" />
      </a>
      <a href="#" className="text-gray-400 hover:text-white transition-colors">
        <Twitter className="h-5 w-5" />
      </a>
      <a href="#" className="text-gray-400 hover:text-white transition-colors">
        <Github className="h-5 w-5" />
      </a>
      <a href="#" className="text-gray-400 hover:text-white transition-colors">
        <Youtube className="h-5 w-5" />
      </a>
    </div>
  );
};

export default SocialIcons;