import React from 'react';

const Banner: React.FC = () => {
  return (
    <div className="relative h-80">
      <div className="absolute inset-0 bg-[#0048A8] h-[80%]">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,50 Q25,30 50,50 T100,50 V100 H0 Z" fill="white" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold text-center px-4">
          Portal de Conformidade do Diploma
        </h1>
      </div>
    </div>
  );
};

export default Banner;