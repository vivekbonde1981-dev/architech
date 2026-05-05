import React, { useState, useEffect } from 'react';
import { Quote, Ruler, Building2, Award, ArrowRight } from 'lucide-react';

export default function Intro() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations shortly after mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Shared animation classes
  const baseAnimClass = "transition-all duration-1000 ease-out";
  const slideUpClass = isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0";
  const slideRightClass = isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0";
  const slideLeftClass = isVisible ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0";

  return (
    <div className="min-h-screen bg-white text-black font-sans relative overflow-hidden flex items-center justify-center p-6 md:p-12 lg:p-24">
      
      {/* Background Architectural Grid Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundSize: '40px 40px',
          backgroundImage: `
            linear-gradient(to right, #000000 1px, transparent 1px),
            linear-gradient(to bottom, #000000 1px, transparent 1px)
          `
        }}
      />

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 relative z-10">
        
        {/* Left Column: Photo & Decorative Elements */}
        <div className={`lg:col-span-5 relative ${baseAnimClass} ${slideRightClass}`}>
          {/* Decorative Frame */}
          <div className="absolute -top-4 -left-4 w-full h-full border-2 border-black z-0 hidden md:block transition-transform duration-1000 ease-out delay-300" 
               style={{ transform: isVisible ? 'translate(0, 0)' : 'translate(10px, 10px)' }}></div>
          
          {/* Image Container */}
          <div className="relative z-10 w-full aspect-[3/4] overflow-hidden bg-gray-200 shadow-2xl">
            <img 
              src="image.png" 
              alt="Marcus Vance - Principal Architect" 
              className={`w-full h-full object-cover grayscale transition-all duration-1000 ${isVisible ? 'scale-100' : 'scale-110 hover:scale-105'} hover:grayscale-0`}
            />
            
            {/* Overlay Gradient for Text readability if needed */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
            
            {/* Floating Badge */}
           
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          
          <div className={`flex items-center gap-4 mb-4 ${baseAnimClass} ${slideUpClass}`} style={{ transitionDelay: '200ms' }}>
            <div className="h-[1px] w-12 bg-black"></div>
            <span className="text-black font-mono tracking-[0.2em] text-sm uppercase font-bold">Meet The Visionary</span>
          </div>

          <h1 className={`text-5xl md:text-7xl font-light text-black mb-2 tracking-tight ${baseAnimClass} ${slideUpClass}`} style={{ transitionDelay: '300ms' }}>
            Ar Nilesh<span className="font-bold">Patil</span>
          </h1>
          
          <h2 className={`text-xl md:text-2xl text-gray-700 mb-10 mr-1 font-light ${baseAnimClass} ${slideUpClass}`} style={{ transitionDelay: '400ms' }}>
            Principal Architect & Interior Designer
          </h2>

          {/* The Thought / Quote */}
          <div className={`relative mb-12 pl-8 border-l-2 border-black ${baseAnimClass} ${slideLeftClass}`} style={{ transitionDelay: '500ms' }}>
            <Quote className="absolute -left-3 -top-2 w-6 h-6 text-black fill-black" />
            <p className="text-xl md:text-2xl text-gray-900 italic leading-relaxed font-serif">
              "Architecture is not just about designing buildings; it's about choreographing human experience within the boundaries of space and light."
            </p>
          </div>

          {/* Bio Description */}
          <p className={`text-gray-700 leading-relaxed mb-10 max-w-2xl ${baseAnimClass} ${slideUpClass}`} style={{ transitionDelay: '600ms' }}>
            With over two decades of transforming skylines, Marcus specializes in sustainable, human-centric design. His philosophy bridges the gap between raw modernist aesthetics and environmental consciousness, resulting in spaces that breathe and evolve with their inhabitants.
          </p>

          {/* Stats / Credentials Grid */}
          <div className={`grid grid-cols-2 md:grid-cols-3 gap-6 mb-12 ${baseAnimClass} ${slideUpClass}`} style={{ transitionDelay: '700ms' }}>
            <div className="flex flex-col gap-2">
              <Building2 className="w-6 h-6 text-black" />
              <span className="text-black font-bold text-xl">50+</span>
              <span className="text-xs text-gray-600 uppercase tracking-wider font-semibold">Projects Completed</span>
            </div>
            <div className="flex flex-col gap-2">
              <Award className="w-6 h-6 text-black" />
              <span className="text-black font-bold text-xl">17 yr exp</span>
              <span className="text-xs text-gray-600  tracking-wider font-semibold">BArch</span>
            </div>
            <div className="flex flex-col gap-2">
              <Ruler className="w-6 h-6 text-black" />
              <span className="text-black font-bold text-xl">NWCMC</span>
              <span className="text-xs text-gray-600 uppercase tracking-wider font-semibold">Certified Member</span>
            </div>
          </div>

          {/* Action Button */}
          <div className={`${baseAnimClass} ${slideUpClass}`} style={{ transitionDelay: '800ms' }}>
            <button className="group flex items-center gap-3 bg-transparent border-2 border-black text-black px-8 py-4 uppercase tracking-widest text-sm font-bold hover:bg-black hover:text-white transition-all duration-300 shadow-sm">
              View Portfolio
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}