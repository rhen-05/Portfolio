import React from 'react';

export const PageLoader: React.FC = () => {
  return (
    <div
      className="w-full min-h-[50vh] flex items-center justify-center py-24 select-none"
      aria-label="Loading page"
      role="status"
    >
      <div className="flex flex-col items-center gap-3">
        <div className="relative w-8 h-8 flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-primary/10 border-t-[#087F5B] animate-spin" />
        </div>
        <span className="font-mono text-[10px] tracking-widest uppercase text-muted font-bold">
          LOADING
        </span>
      </div>
    </div>
  );
};

export default PageLoader;
