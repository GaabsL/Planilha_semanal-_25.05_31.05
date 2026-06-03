import React from 'react';
import { reportData } from '../data/reportData';

export const Hero = () => {
  return (
    <header className="bg-[#0054A6] text-white p-4 flex items-center justify-between border-b-4 border-[#F37021] shrink-0">
      <div className="flex items-center gap-4 shrink-0">
        <div className="bg-white p-1.5 rounded hidden sm:block shrink-0">
          <img src="https://i.imgur.com/ihchsJt.png" alt="Assaí Atacadista" className="h-6 object-contain" />
        </div>
        <div>
          <h1 className="text-lg font-bold uppercase tracking-tight">{reportData.header.title}</h1>
          <p className="text-[10px] opacity-90">{reportData.header.subtitle}</p>
        </div>
      </div>
      
      <div className="flex-1 flex justify-center sm:justify-end sm:pr-8 lg:pr-32 xl:pr-48">
        <div className="text-center">
          <div className="text-xs font-semibold hidden sm:block">Performance Digital Semanal</div>
          <div className="text-[10px] bg-white/20 px-2 py-0.5 rounded mt-1 sm:mt-0 inline-block">Período: {reportData.header.period}</div>
        </div>
      </div>

      <div className="bg-white p-1.5 rounded hidden sm:block shrink-0">
        <img src="https://i.imgur.com/lAyMWKF.png" alt="Mega Midia" className="h-6 object-contain" />
      </div>
    </header>
  );
};
