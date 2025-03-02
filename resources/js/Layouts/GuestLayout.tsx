import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { useState } from "react";
import { PropsWithChildren } from 'react';

export default function Guest({ children }: PropsWithChildren) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="bg-blue-600 shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="text-white text-xl font-bold">
              MonLogo
            </Link>
  
            {/* Menu Desktop */}
            <div className="hidden md:flex space-x-6">
              <Link href="/" className="text-white hover:text-gray-300">
                Accueil
              </Link>
              <Link href="/about" className="text-white hover:text-gray-300">
                À propos
              </Link>
              <Link href="/contact" className="text-white hover:text-gray-300">
                Contact
              </Link>
            </div>
  
            {/* Bouton Mobile */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
             bouton
            </button>
          </div>
  
          {/* Menu Mobile */}
          {isOpen && (
            <div className="md:hidden flex flex-col space-y-2 bg-blue-500 py-2">
              <Link href="/" className="text-white py-2 px-4 hover:bg-blue-400">
                Accueil
              </Link>
              <Link href="/about" className="text-white py-2 px-4 hover:bg-blue-400">
                À propos
              </Link>
              <Link href="/contact" className="text-white py-2 px-4 hover:bg-blue-400">
                Contact
              </Link>
            </div>
          )}
        </div>
      </nav>
    
    );
}
