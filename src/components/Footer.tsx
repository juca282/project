import React, { useState } from 'react';
import { GovBrLogo } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-10 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-8">
          <GovBrLogo className="h-10 w-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 mb-10">
          <FooterColumn title="Composição">
            <FooterLink href="https://www.gov.br/">Competências</FooterLink>
            <FooterLink href="https://www.gov.br/">Gabinete do Ministro</FooterLink>
            <FooterLink href="https://www.gov.br/">Secretarias</FooterLink>
            <FooterLink href="https://www.gov.br/">Estrutura Organizacional</FooterLink>
          </FooterColumn>

          <FooterColumn title="Canais de Atendimento">
            <FooterLink href="https://www.gov.br/">Ouvidoria</FooterLink>
            <FooterLink href="https://www.gov.br/">Área de imprensa</FooterLink>
            <FooterLink href="https://www.gov.br/">Fale Conosco</FooterLink>
          </FooterColumn>

          <FooterColumn title="Acesso à Informação">
            <FooterLink href="https://www.gov.br/">Institucional</FooterLink>
            <FooterLink href="https://www.gov.br/">Ações e Programas</FooterLink>
            <FooterLink href="https://www.gov.br/">Instância Permanente de Negociação</FooterLink>
            <FooterLink href="https://www.gov.br/">Participação Social</FooterLink>
          </FooterColumn>

          <FooterColumn title="Centrais de Conteúdo">
            <FooterLink href="https://www.gov.br/">Vídeos</FooterLink>
            <FooterLink href="https://www.gov.br/">Áudios</FooterLink>
            <FooterLink href="https://www.gov.br/">Fotos</FooterLink>
            <FooterLink href="https://www.gov.br/">Aplicativos</FooterLink>
            <FooterLink href="https://www.gov.br/">Campanhas</FooterLink>
          </FooterColumn>

          <FooterColumn title="Sistemas">
            <FooterLink href="https://www.gov.br/">Sisu</FooterLink>
            <FooterLink href="https://www.gov.br/">Prouni</FooterLink>
            <FooterLink href="https://www.gov.br/">Fies</FooterLink>
            <FooterLink href="https://www.gov.br/">E-mec</FooterLink>
          </FooterColumn>

          <FooterColumn title="Portal de Conformidade do Diploma">
            <FooterLink href="https://www.gov.br/">Instituições</FooterLink>
            <FooterLink href="https://www.gov.br/">Legislação</FooterLink>
            <FooterLink href="https://www.gov.br/">Perguntas Frequentes</FooterLink>
          </FooterColumn>
        </div>

        <div className="text-center text-sm text-gray-600 pb-8">
          <p className="max-w-2xl mx-auto">
            Todo o conteúdo deste site está publicado sob a licença Creative Commons 
            Atribuição-SemDerivações 3.0 Não Adaptada.
          </p>
        </div>
      </div>
    </footer>
  );
};

interface FooterColumnProps {
  title: string;
  children: React.ReactNode;
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <h3
          onClick={handleToggle}
          className="cursor-pointer text-[#1354c0] font-bold mb-3"
        >
          {title}
        </h3>
        <button
          onClick={handleToggle}
          className="md:hidden p-2 focus:outline-none"
        >
          {/* Ícone de seta SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-[#1354c0]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>

      {/* No mobile, mostra sublinks apenas se "isOpen" for true */}
      <ul className={`space-y-2 pl-4 ${isOpen ? 'block' : 'hidden'} md:block`}>
        {children}
      </ul>
    </div>
  );
};

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => {
  return (
    <li>
      <a 
        href={href} 
        className="text-[#1354c0] hover:text-[#0048A8] transition"
      >
        {children}
      </a>
    </li>
  );
};

export default Footer;