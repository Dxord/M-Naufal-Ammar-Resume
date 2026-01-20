import React from 'react';

interface CodeWindowProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export default function CodeWindow({ 
  children, 
  title = "readme.md", 
  className = "" 
}: CodeWindowProps) {
  return (
    <div className={`rounded-lg overflow-hidden border border-[var(--border)] bg-[#1e1e1e] text-[#d4d4d4] shadow-xl ${className}`}>
      {/* Window Header */}
      <div className="flex items-center px-4 py-2 bg-[#252526] border-b border-[#333]">
        <div className="flex gap-2 mr-4">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        <div className="text-xs font-mono text-center flex-1 opacity-60">
          {title}
        </div>
      </div>
      
      {/* Content Area */}
      <div className="p-4 font-mono text-sm overflow-x-auto">
        <div className="flex">
          {/* Line Numbers */}
          <div className="flex flex-col text-right mr-4 text-[#858585] select-none">
            {Array.from({ length: 7 }).map((_, i) => (
              <span key={i} className="leading-6">{i + 1}</span>
            ))}
          </div>
          
          {/* Code Content */}
          <div className="flex-1 leading-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
