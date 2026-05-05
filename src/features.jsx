import React, { useState } from 'react';
import { Layers, Store, Lightbulb, Star, ChevronLeft, ChevronRight } from 'lucide-react';

// --- DATA ---

const statsData = [
  {
    icon: <Layers size={32} strokeWidth={1.2} />,
    title: "$1B",
    shortDesc: "in Global Assets Directed",
    longDesc: "Creative and fiduciary oversight across more than one billion dollars in capital expenditure — where brand ambition meets disciplined, high-value execution."
  },
  {
    icon: <Store size={32} strokeWidth={1.2} />,
    title: "20+",
    shortDesc: "Global Flagships Launched",
    longDesc: "Market entry and creative rollouts across six continents, translating brand DNA into high-traffic retail environments that establish immediate authority in new markets."
  },
  {
    icon: <Lightbulb size={32} strokeWidth={1.2} />,
    title: "20+",
    shortDesc: "Prototype Concepts",
    longDesc: "From market gap to physical prototype — defining the visual and operational DNA for new-to-market retail concepts built to last."
  },
  {
    icon: <Star size={32} strokeWidth={1.2} />,
    title: "3",
    shortDesc: "Michelin Stars Housed",
    longDesc: "Designing the theatre of dining for the world's most demanding hospitality brands"
  }
];

const brandsData = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=1200&q=80",
    alt: "Storefront architecture"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1555529733-0e670560f7e1?auto=format&fit=crop&w=1200&q=80",
    alt: "Retail store exterior"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    alt: "Modern clothing boutique"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=1200&q=80",
    alt: "Streetwear retail space"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=1200&q=80",
    alt: "Classic brand facade"
  }
];

// --- SUB-COMPONENTS ---

const StatCard = ({ icon, title, shortDesc, longDesc, index }) => {
  return (
    <div 
      className="group relative h-[320px] md:h-[360px] w-[400px] md:w-[350px] [perspective:1000px] cursor-default animate-fade-in-up"
      style={{ animationDelay: `${300 + index * 150}ms`,
               marginLeft:"20px" }}
    >
      {/* Flipper Container */}
      <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        
        {/* Front Face */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] bg-white rounded-[1.5rem] p-8 md:p-10 flex flex-col justify-between align-left shadow-[0_4px_24px_rgba(0,0,0,0.03)]"
        style={{
            padding: "40px",
            height: "260px",
            marginLeft:"20px"
            
        }}
        
        >
          <div className="text-black mb-auto">
            {icon}
          </div>
          <div className="mt-auto">
            <h3 className="text-5xl md:text-[4rem] font-medium tracking-tight text-black leading-none" 
            // style={{
            //     marginLeft:"50px"
            // }}
            
            >
              {title}
            </h3>
            <p className="text-gray-500 text-[14px] md:text-[15px]">
              {shortDesc}
            </p>
          </div>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white rounded-[1.5rem] p-8 md:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.08)] flex flex-col justify-between border border-gray-50" style={{
            padding: "40px",
            height: "260px",
            marginLeft:"20px"
        }}>
          <div className="text-black opacity-50 mb-auto">
            {icon}
          </div>
          <div className="mt-auto">
            <p className="text-gray-700 text-[14px] md:text-[15px] leading-relaxed mx-[50px]">
              {longDesc}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

// --- MAIN APP ---

export default function Features() {
  // Carousel State
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(brandsData.length - 1, prev + 1));
  };

  return (
    <main className="font-sans selection:bg-gray-200 ">
      
      {/* Global Animation Styles */}
      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
      `}</style>

      {/* SECTION 1: Authority Stats */}
      <section className="min-h-screen bg-[#f5f5f5] py-24 px-6 md:px-12 lg:px-20 ml-8 mr-8 mt-50" style={{
        paddingLeft: '50px',
        paddingRight: '200px',
        paddingTop: '150px'
      }}                    >
        <div className="max-w-[1400px] mx-auto">
          
          {/* Header Area */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-16 md:mb-20 pl-[200px]" style={{
            marginBottom:"50px"
          }}>
            <h2 
              className="text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.05] font-medium tracking-tight text-black w-full lg:w-[55%] animate-fade-in-up"
              style={{ animationDelay: '0ms' }}
            >
              We Turn Legacy<br />
              Into Authority.
            </h2>
            
            <div 
              className="w-full lg:w-[45%] flex lg:pt-4 animate-fade-in-up"
              style={{ animationDelay: '150ms' }}
            >
              <p className="text-gray-500 text-lg md:text-[1.1rem] leading-relaxed max-w-2xl text-left">
                Executive creative leadership for hospitality owners, retail brands, real estate developers, and organizations that need more than a designer.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {statsData.map((stat, index) => (
              <StatCard key={index} index={index} {...stat} />
            ))}
          </div>

        </div>
      </section>


      {/* SECTION 2: Global Formats Carousel */}
      <section className="bg-[#f5f5f5] min-h-screen py-20 md:py-32 flex items-center overflow-hidden">
        <div className="w-full flex flex-col lg:flex-row gap-12 lg:gap-8 pl-6 md:pl-12 lg:pl-20 min-h-[500px] lg:min-h-[600px]">
          
          {/* Left Content Area */}
          <div className="w-full lg:w-[35%] xl:w-[30%] shrink-0 pr-6 lg:pr-0 flex flex-col justify-between relative z-10 pb-4">
            <div>
              <h4 className="text-gray-500 text-xs md:text-sm uppercase tracking-widest font-medium mb-6">
                Retail & Brand
              </h4>
              
              <h2 className="text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.05] font-medium tracking-tight mb-6 text-black">
                Global Formats.<br />
                Brands.
              </h2>
              
              <p className="text-gray-500 text-lg md:text-[1.1rem] leading-relaxed mb-10 max-w-[90%]">
                Store design, flagship formats, and retail experience strategy for some of the world's most recognized brands.
              </p>
            </div>
            
            <div className="mt-8 lg:mt-0">
              <button className="bg-[#111] text-white px-6 py-3.5 rounded-[14px] text-sm font-medium w-max hover:bg-black transition-colors duration-300 shadow-[0_8px_16px_rgba(0,0,0,0.2)]">
                Explore The Work
              </button>
            </div>
          </div>

          {/* Right Carousel Area */}
          <div className="w-full lg:w-[65%] xl:w-[70%] relative flex flex-col justify-between">
            
            {/* Slider Track Wrapper */}
            <div className="w-full overflow-visible py-2">
              <div 
                className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] gap-6"
                style={{ 
                  transform: `translateX(calc(-${currentIndex} * (60% + 24px)))` 
                }}
              >
                {brandsData.map((brand, index) => (
                  <div 
                    key={brand.id}
                    className="w-[85%] md:w-[70%] lg:w-[60%] shrink-0 h-[400px] md:h-[500px] lg:h-[550px] rounded-[2rem] overflow-hidden bg-gray-200 shadow-sm transition-opacity duration-500 cursor-grab active:cursor-grabbing"
                    style={{
                      opacity: index < currentIndex ? 0 : 1 // Hide past items slightly for cleanliness
                    }}
                  >
                    <img 
                      src={brand.image} 
                      alt={brand.alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                      draggable="false"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-end gap-3 mt-10 lg:mt-0 pr-6 md:pr-12 lg:pr-20 pb-4">
              <button 
                onClick={handlePrev}
                disabled={currentIndex === 0}
                aria-label="Previous slide"
                className={`w-10 h-10 md:w-11 md:h-11 rounded-xl flex items-center justify-center transition-all duration-300 ${
                  currentIndex === 0 
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                    : 'bg-[#111] text-white hover:bg-black shadow-md hover:shadow-lg cursor-pointer'
                }`}
              >
                <ChevronLeft size={20} strokeWidth={2.5} />
              </button>
              
              <button 
                onClick={handleNext}
                disabled={currentIndex === brandsData.length - 1}
                aria-label="Next slide"
                className={`w-10 h-10 md:w-11 md:h-11 rounded-xl flex items-center justify-center transition-all duration-300 ${
                  currentIndex === brandsData.length - 1 
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                    : 'bg-[#111] text-white hover:bg-black shadow-md hover:shadow-lg cursor-pointer'
                }`}
              >
                <ChevronRight size={20} strokeWidth={2.5} />
              </button>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}