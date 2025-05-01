
import React, { useEffect, useState } from "react";

const Loader = () => {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading time
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
    
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-design-dark transition-opacity duration-500 ${loading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="flex space-x-2">
        {[1, 2, 3, 4, 5].map((_, index) => (
          <div 
            key={index} 
            className="w-3 h-12 bg-design-light rounded-full"
            style={{ 
              animation: `loader 1s ${index * 0.1}s infinite ease-in-out alternate`
            }}
          ></div>
        ))}
      </div>
      <div className="absolute mt-32 text-design-light font-serif text-xl tracking-widest">
        INTERIOR
      </div>
    </div>
  );
};

export default Loader;
