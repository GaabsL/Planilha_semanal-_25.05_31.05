import React from 'react';
import { reportData } from '../data/reportData';

export const BehaviorAnalysis = () => {
  const { categories, formats } = reportData.behavior;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
        
        {/* Gráfico Barras Horizontal */}
        <div className="bg-slate-50 p-3 rounded">
          <h4 className="text-[10px] font-bold uppercase mb-2">Categorias das Publicações</h4>
          
          <div className="space-y-2">
            {categories.map((cat, idx) => (
              <div key={idx}>
                <div className="flex justify-between text-[10px] mb-1">
                  <span>{cat.name}</span>
                  <span>{cat.percentage}%</span>
                </div>
                <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${cat.color}`} 
                    style={{ width: `${cat.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Formatos e Descritivos */}
        <div className="bg-slate-50 p-3 rounded text-[10px] leading-relaxed overflow-y-auto max-h-32">
          <h4 className="text-[10px] font-bold uppercase mb-2">Picos de Performance</h4>
          
          <div className="space-y-2">
            {formats.map((fmt, idx) => (
              <div key={idx}>
                  <strong>{fmt.channel}:</strong> {fmt.desc}
              </div>
            ))}
          </div>
        </div>
        
    </div>
  );
};
