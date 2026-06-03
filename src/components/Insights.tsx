import React from 'react';
import { reportData } from '../data/reportData';
import { IconByName } from './ui/shared';

export const Insights = () => {
  return (
    <section className="bg-slate-900 text-white p-4 rounded shadow-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-6">
      {reportData.insights.map((insight, idx) => {
        
        let titleColor = "text-[#0054A6]";
        let dotColor = "bg-[#0054A6]";
        
        if (insight.type === 'positive') {
          titleColor = "text-[#FFCB05]";
          dotColor = "bg-[#FFCB05]";
        } else if (insight.type === 'negative') {
          titleColor = "text-[#F37021]";
          dotColor = "bg-[#F37021]";
        } else if (insight.type === 'focus') {
          titleColor = "text-white";
          dotColor = "bg-white hidden";
        }

        if (insight.type === 'focus') {
          return (
             <div key={idx} className="bg-white/10 p-3 rounded border border-white/20 col-span-1 sm:col-span-2 lg:col-span-3 xl:col-span-1">
                <h4 className="text-white text-[10px] font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
                  <IconByName name={insight.icon} className="w-3 h-3" />
                  {insight.title}
                </h4>
                <p className="text-[10px] space-y-1 text-slate-300">
                  {insight.desc}
                </p>
             </div>
          );
        }

        return (
          <div key={idx} className="space-y-2">
            <h4 className={`${titleColor} text-[10px] font-bold uppercase tracking-wider flex items-center gap-2`}>
              <span className={`w-1.5 h-1.5 rounded-full ${dotColor}`}></span> 
              <span className="flex items-center gap-1.5">
                  <IconByName name={insight.icon} className="w-3 h-3" />
                  {insight.title}
              </span>
            </h4>
            <p className="text-[11px] leading-snug">
              {insight.desc}
            </p>
          </div>
        );
      })}
    </section>
  );
};
