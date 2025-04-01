import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <Link 
      to="/" 
      className={`inline-block hover:opacity-85 transition-opacity duration-200 ${className}`}
    >
      <img
        src="/logo.png" // Path to your image in public folder
        alt="Mabren Quiro Logo"
        className="h-14 w-12" // Auto-dark mode adaptation
      />
    </Link>
  );
};

export default Logo;