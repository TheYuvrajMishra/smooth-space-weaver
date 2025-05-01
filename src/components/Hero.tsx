
import React, { useEffect, useRef } from "react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleParallax = () => {
      if (!heroRef.current) return;
      const scrollValue = window.scrollY;
      const opacity = 1 - Math.min(scrollValue / 700, 1);
      const translateY = scrollValue * 0.3;
      
      if (heroRef.current) {
        heroRef.current.style.opacity = `${opacity}`;
        heroRef.current.style.transform = `translateY(${translateY}px)`;
      }
    };

    window.addEventListener("scroll", handleParallax);
    return () => window.removeEventListener("scroll", handleParallax);
  }, []);

  return (
    <section 
      id="home" 
      className="h-screen relative overflow-hidden" 
      data-scroll-section
    >
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div 
        ref={heroRef}
        className="container mx-auto h-full flex flex-col justify-center items-center text-center px-6 relative z-10"
        data-scroll
        data-scroll-speed="-0.5"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight">
          Elegance in <br /> Interior Design
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-10">
          Crafting beautiful spaces that reflect your personality and lifestyle
        </p>
        <a 
          href="#projects" 
          className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-design-dark transition-all duration-300"
          data-scroll-to
        >
          View Our Projects
        </a>
      </div>
      
      <div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        data-scroll
        data-scroll-speed="1"
        data-scroll-direction="horizontal"
      >
        <div className="flex flex-col items-center">
          <span className="text-white text-sm mb-2">Scroll to explore</span>
          <div className="w-0.5 h-16 bg-white/60"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
