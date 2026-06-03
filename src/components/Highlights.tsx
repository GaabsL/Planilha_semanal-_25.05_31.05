import React from 'react';
import { reportData } from '../data/reportData';
import { Heart, MessageCircle, Share2 } from 'lucide-react';

export const Highlights = () => {
  return (
    <section className="flex-1 space-y-3">
      <h3 className="text-xs font-bold uppercase flex items-center gap-2">
        <span className="w-1 h-4 bg-[#F37021]"></span> Highlights da Semana
      </h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
        {reportData.highlights.map((post, idx) => (
          <div key={idx} className={`bg-white p-2 rounded shadow-sm border-l-4 ${post.color.replace('border-t-4', '')} flex flex-col`}>
            
            <p className={`text-[9px] font-bold mb-1 ${post.color.replace('border-', 'text-')}`}>
              {post.network} ({post.date})
            </p>
            <p className="text-[10px] font-semibold">"{post.title}"</p>
            
            <div className="flex gap-4 mt-2 text-[9px] text-slate-500">
              <span>Eng: <strong>{post.eng}</strong></span>
              <span>Interações: <strong>{post.interactions}</strong></span>
              {(post as any).link && (
                <span className="hidden lg:inline">Link: <a href={(post as any).link} target="_blank" rel="noreferrer" className="font-bold text-[#0054A6] hover:underline">Acessar post</a></span>
              )}
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
};
