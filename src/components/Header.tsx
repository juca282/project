import React from 'react';
import { GovBrLogo } from './Icons';
import { User } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <GovBrLogo className="h-8 w-auto" />
          </div>
          
<nav className="hidden md:flex space-x-6 text-xs ml-auto pr-4">
  <a href="#" className="hover:text-[#1354c0] transition" style={{ color: '#1354c0' }}>
    Órgãos do Governo
  </a>
  <a href="#" className="hover:text-[#1354c0] transition" style={{ color: '#1354c0' }}>
    Acesso à Informação
  </a>
  <a href="#" className="hover:text-[#1354c0] transition" style={{ color: '#1354c0' }}>
    Legislação
  </a>
  <a href="#" className="hover:text-[#1354c0] transition" style={{ color: '#1354c0' }}>
    Acessibilidade
  </a>
</nav>

          
import React from 'react';

const Header: React.FC = () => {
  const handleLoginRedirect = () => {
    window.location.href = 'https://sso.acesso.gov.br/login';
  };

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">Minha Aplicação</div>
        <div>
          <button 
            onClick={handleLoginRedirect}
            className="flex items-center gap-2 bg-[#f8f8f8] text-[#0048A8] px-5 py-2 rounded-full font-medium text-base hover:bg-[#f0f0f0] transition"
          >
            {/* Ícone de usuário */}
            <svg 
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor" 
              viewBox="0 0 24 24" 
              className="w-5 h-5"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 
                       1.79-4 4 1.79 4 4 4zm0 2c-2.67 
                       0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
            Entrar
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
