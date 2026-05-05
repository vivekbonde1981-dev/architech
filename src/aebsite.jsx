import React, { useState, useEffect, useRef } from 'react';

import Intro from './intro';
import { 
  Search, 
  MapPin, 
  Building2, 
  IndianRupee, 
  Home, 
  Map, 
  Smile, 
  Headphones,
  ArrowRight,
  Star,
  // Facebook,
  // Twitter,
  // Instagram,
  // Linkedin,
  Menu,
  X,
  PenTool,
  Ruler,
  ChevronLeft,
  ChevronRight,
  Phone,
  Layers,
  Box,
  FileCheck,
  TreeDeciduous,
  Settings,
  Key
} from 'lucide-react';

// Reusable Scroll Animation Component
const FadeInUp = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(currentRef);
        }
      },
      { threshold: 0.15 }
    );
    
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      } ${className}`}
    >
      {children}
    </div>
  );
};

// Google Icon SVG Component
const GoogleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 48 48">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
  </svg>
);

const Aebsite = () => {
  const [mounted, setMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    // Trigger initial load animations
    setMounted(true);

    // Parallax scroll listener
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollReviews = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -420 : 420;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const reviews = [
    {
      name: "Harshal H.",
      time: "2 years ago",
      review: "Nice designers and create look that perfectly matches our vision. Professional team from start to finish.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80"
    },
    {
      name: "Namrata K.",
      time: "2 years ago",
      review: "Studio99 Architecture is a gem in the architectural world. Their creativity and expertise are evident in every project they undertake. We were thrilled with the results!",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
    },
    {
      name: "Rahul M.",
      time: "1 year ago",
      review: "Exceptional attention to detail. They transformed our bare commercial space into a vibrant, modern office that our employees love.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80"
    },
    {
      name: "Sneha P.",
      time: "8 months ago",
      review: "Highly recommend! The turnkey interior execution was flawless and completely hassle-free. Delivered exactly on time.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80"
    }
  ];

  return (
    <div className="font-sans text-black bg-white min-h-screen overflow-x-hidden selection:bg-black selection:text-white">
      {/* Navigation */}
      

      {/* About Section */}
      <div className="max-w-7xl mx-auto px-6 pt-12 md:pt-4 pb-16 md:pb-24 mt-[60px]">
        <FadeInUp>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-black">
                Designing Spaces With <span className="italic font-light text-black">Perfect</span> Aesthetics.
              </h2>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                Studio99 is a premier architecture and interior design platform that connects you with top-tier professionals across India. We provide access to verified design portfolios, comprehensive material catalogs, and advanced styling filters to make your dream space a reality. Whether you are looking for modern residential interiors, functional commercial setups, or bespoke architectural planning, our platform ensures a seamless experience from concept to execution.
              </p>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl shadow-black/20 border border-gray-300">
               <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnd_Ch9Svkeq_prmff6zVRMRfwkkfpWspvMA&s" 
                alt="Modern Interior" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
            </div>
          </div>
        </FadeInUp>
      </div>

      <Intro/>

      {/* What We Offer / Our Services Section */}
      <div className="bg-gray-100 py-16 md:py-24 border-y border-gray-300">
        <div className="max-w-7xl mx-auto px-6">
          <FadeInUp>
            <div className="flex flex-col items-center justify-center mb-12 md:mb-16">
              <p className="text-gray-600 font-bold tracking-widest uppercase text-xs md:text-sm mb-2">Our Services</p>
              <h2 className="text-3xl md:text-4xl font-bold text-center text-black">What We Offer</h2>
            </div>
          </FadeInUp>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16 md:mb-24">
            {[
              { title: 'Architectural Design', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600', desc: 'Innovative and sustainable architectural solutions for modern living.' },
              { title: 'Interior Design', img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=600', desc: 'Crafting luxurious, functional, and highly personalized interior spaces.' },
              { title: 'Planner', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGON43TQWAdtFG80-HTSuUEKjXQIHD57ei1A&s', desc: 'Robust engineering for safe, enduring, and compliant structures.' },
              { title: 'Dome Art work', img: 'https://images.jdmagicbox.com/quickquotes/images_main/dome-art-work-600146800-17feb18f.jpg', desc: 'Efficient mechanical, electrical, and plumbing engineering systems.' },
            
            ].map((service, index) => (
              <FadeInUp key={index} delay={index * 100} className="h-full">
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-black/5 border border-gray-300 group cursor-pointer hover:shadow-black/15 transition-all duration-300 h-full flex flex-col">
                  <div className="h-40 md:h-48 overflow-hidden relative shrink-0">
                    <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition duration-500"></div>
                  </div>
                  <div className="p-5 md:p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-bold mb-2 text-black">{service.title}</h3>
                    <p className="text-xs md:text-sm text-gray-600 mb-4 leading-relaxed">{service.desc}</p>
                    <div className="mt-auto pt-4 border-t border-gray-300 flex justify-between items-center">
                       <span className="text-black font-semibold text-xs md:text-sm group-hover:text-gray-600 transition-colors">Learn More</span>
                       <ArrowRight className="w-4 h-4 text-black transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center max-w-4xl mx-auto">
            <FadeInUp delay={0}><div className="flex flex-col items-center"><div className="bg-gradient-to-br from-gray-100 to-white border border-gray-300 p-3 md:p-4 rounded-2xl shadow-lg shadow-black/5 mb-3 md:mb-4"><PenTool className="w-6 h-6 md:w-8 md:h-8 text-black" /></div><h4 className="text-lg md:text-xl font-bold text-black">15,000+</h4><p className="text-xs md:text-sm text-gray-700 font-medium">Projects Delivered</p></div></FadeInUp>
            <FadeInUp delay={100}><div className="flex flex-col items-center"><div className="bg-gradient-to-br from-gray-100 to-white border border-gray-300 p-3 md:p-4 rounded-2xl shadow-lg shadow-black/5 mb-3 md:mb-4"><Map className="w-6 h-6 md:w-8 md:h-8 text-black" /></div><h4 className="text-lg md:text-xl font-bold text-black">50+</h4><p className="text-xs md:text-sm text-gray-700 font-medium">Cities</p></div></FadeInUp>
            <FadeInUp delay={200}><div className="flex flex-col items-center"><div className="bg-gradient-to-br from-gray-100 to-white border border-gray-300 p-3 md:p-4 rounded-2xl shadow-lg shadow-black/5 mb-3 md:mb-4"><Smile className="w-6 h-6 md:w-8 md:h-8 text-black" /></div><h4 className="text-lg md:text-xl font-bold text-black">98%</h4><p className="text-xs md:text-sm text-gray-700 font-medium">Client Satisfaction</p></div></FadeInUp>
            <FadeInUp delay={300}><div className="flex flex-col items-center"><div className="bg-gradient-to-br from-gray-100 to-white border border-gray-300 p-3 md:p-4 rounded-2xl shadow-lg shadow-black/5 mb-3 md:mb-4"><Headphones className="w-6 h-6 md:w-8 md:h-8 text-black" /></div><h4 className="text-lg md:text-xl font-bold text-black">24/7</h4><p className="text-xs md:text-sm text-gray-700 font-medium">Design Support</p></div></FadeInUp>
          </div>
        </div>
      </div>

      {/* Our Vision Section */}
      <div className="bg-white py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <FadeInUp>
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-black mb-4 tracking-wide">Our Vision</h2>
              <p className="text-gray-700 max-w-2xl mx-auto text-sm md:text-lg px-2">
                Discover Our Design Portfolio tailored to client aspirations and modern aesthetics.
              </p>
            </div>
          </FadeInUp>

          {/* Masonry Layout - Adjusted for small screens */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
            {/* Column 1 */}
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-6">
              <FadeInUp delay={100}>
                <img src="https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&q=80&w=600&h=500" alt="Interior" className="w-full rounded-xl md:rounded-2xl shadow-lg shadow-black/10 object-cover hover:shadow-black/20 transition-shadow duration-300" />
              </FadeInUp>
              <FadeInUp delay={200}>
                <img src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=600&h=600" alt="Interior" className="w-full rounded-xl md:rounded-2xl shadow-lg shadow-black/10 object-cover hover:shadow-black/20 transition-shadow duration-300" />
              </FadeInUp>
            </div>
            {/* Column 2 */}
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-6 lg:mt-4">
              <FadeInUp delay={150} className="h-full">
                <img src="building.jpeg" alt="Interior" className="w-full h-full rounded-xl md:rounded-2xl shadow-lg shadow-black/10 object-cover hover:shadow-black/20 transition-shadow duration-300 min-h-[150px]" />
              </FadeInUp>
            </div>
            {/* Column 3 - Hidden on mobile, shown on md+ */}
            <div className="hidden md:flex flex-col gap-3 sm:gap-4 md:gap-6">
              <FadeInUp delay={200}>
                <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=600&h=400" alt="Interior" className="w-full rounded-xl md:rounded-2xl shadow-lg shadow-black/10 object-cover hover:shadow-black/20 transition-shadow duration-300" />
              </FadeInUp>
              <FadeInUp delay={300} className="h-full">
                <img src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=600&h=700" alt="Interior3" className="w-full h-full rounded-xl md:rounded-2xl shadow-lg shadow-black/10 object-cover hover:shadow-black/20 transition-shadow duration-300 min-h-[150px]" />
              </FadeInUp>
            </div>
            {/* Column 4 - Hidden on tablet, shown on lg+ */}
            <div className="hidden lg:flex flex-col gap-3 sm:gap-4 md:gap-6 lg:mt-8">
              <FadeInUp delay={250}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnd_Ch9Svkeq_prmff6zVRMRfwkkfpWspvMA&s" alt="Interior4" className="w-full rounded-xl md:rounded-2xl shadow-lg shadow-black/10 object-cover hover:shadow-black/20 transition-shadow duration-300" />
              </FadeInUp>
              <FadeInUp delay={350} className="h-full">
                <img src="https://images.unsplash.com/photo-1558211583-d26f610c1eb1?auto=format&fit=crop&q=80&w=600&h=500" alt="Interior5" className="w-full h-full rounded-xl md:rounded-2xl shadow-lg shadow-black/10 object-cover hover:shadow-black/20 transition-shadow duration-300 min-h-[150px]" />
              </FadeInUp>
            </div>
            {/* Column 5 - Hidden on tablet, shown on lg+ */}
            <div className="hidden lg:flex flex-col gap-3 sm:gap-4 md:gap-6">
              <FadeInUp delay={300}>
                <img src="vision.jpeg" alt="Interior" className="w-full rounded-xl md:rounded-2xl shadow-lg shadow-black/10 object-cover hover:shadow-black/20 transition-shadow duration-300" />
              </FadeInUp>
              <FadeInUp delay={400} className="h-full">
                <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=600&h=800" alt="Interior" className="w-full h-full rounded-xl md:rounded-2xl shadow-lg shadow-black/10 object-cover hover:shadow-black/20 transition-shadow duration-300 min-h-[150px]" />
              </FadeInUp>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Projects */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <FadeInUp>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-12 text-black">Featured Projects</h2>
        </FadeInUp>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Main Large Card */}
          <FadeInUp delay={100} className="lg:row-span-2 lg:col-span-1 h-full">
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-black/10 border border-gray-300 flex flex-col h-full group">
              <div className="relative h-64 lg:h-1/2 overflow-hidden shrink-0">
                <img src="about.jpeg" alt="House Design" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition duration-500"></div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-1 text-black">Modern Villa Architecture</h3>
                  <p className="text-sm text-gray-700 mb-4 font-medium">Complete Rebuild</p>
                  <div className="mb-4">
                    <p className="text-xs text-gray-600">Budget Range</p>
                    <p className="text-xl font-bold flex items-center text-black"><IndianRupee className="w-4 h-4 text-gray-800" /> 1.5 Cr - 2.5 Cr</p>
                  </div>
                  <p className="text-sm text-gray-700">Sector 14, Dwarka, New Delhi</p>
                </div>
                <button className="w-full mt-6 bg-gray-200 hover:bg-gray-300 text-black font-semibold py-3 rounded-xl transition">View Gallery</button>
              </div>
            </div>
          </FadeInUp>

          {/* Smaller Cards */}
          {[
            { title: 'Minimalist Apartment', price: '2 Cr - 4 Cr', img: 'appartment.jpeg' },
            { title: 'Luxury Barber shop ', price: '45L - 75L', img: 'shop.jpeg' },
            { title: 'Designer Bedroom', price: '20L - 30L', img: 'bed.jpeg' },
            { title: 'Corporate Office Space', price: '75L - 1 Cr', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=400' },
          ].map((item, index) => (
            <FadeInUp key={index} delay={200 + (index * 50)} className="h-full">
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg shadow-black/5 border border-gray-300 flex flex-col items-center p-4 h-full group">
                 <div className="w-full h-40 sm:h-48 md:h-52 overflow-hidden rounded-2xl mb-4 relative shrink-0">
                   <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                   <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition duration-500"></div>
                 </div>
                 <div className="flex flex-col items-center mb-4 sm:mb-5">
                   <h4 className="font-bold mb-1 sm:mb-2 text-center text-black">{item.title}</h4>
                   <p className="text-[10px] text-gray-600 uppercase tracking-widest mb-1">Budget Range</p>
                   <p className="text-xs sm:text-sm font-bold flex items-center text-black"><IndianRupee className="w-3.5 h-3.5 text-gray-800 mr-0.5" /> {item.price}</p>
                 </div>
                 <button className="w-full mt-auto bg-gray-200 hover:bg-gray-300 text-black text-xs sm:text-sm font-semibold py-2.5 rounded-xl transition">View Gallery</button>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>

      {/* Testimonials / Reviews Section */}
      <div className="bg-[#1f1f1f] py-16 md:py-24 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 items-center">
          
          {/* Left Side: Title & Stats */}
          <div className="lg:col-span-4 text-white text-center lg:text-left">
            <FadeInUp>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-white leading-tight">
                Why customers love <br className="hidden lg:block"/><span className="text-white">Natural Design</span>
              </h2>
              <p className="text-base md:text-lg text-gray-300 mb-6">
                82+ Users rated us <span className="text-black font-bold">4.7</span> out of 5.
              </p>
              
              {/* Overlapping Avatars */}
              <div className="flex -space-x-3 justify-center lg:justify-start">
                <img className="w-10 h-10 md:w-12 md:h-12 rounded-full border-[3px] border-[#1f1f1f] object-cover relative z-50" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" alt="User"/>
                <img className="w-10 h-10 md:w-12 md:h-12 rounded-full border-[3px] border-[#1f1f1f] object-cover relative z-40" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="User"/>
                <img className="w-10 h-10 md:w-12 md:h-12 rounded-full border-[3px] border-[#1f1f1f] object-cover relative z-30" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="User"/>
                <img className="w-10 h-10 md:w-12 md:h-12 rounded-full border-[3px] border-[#1f1f1f] object-cover relative z-20" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80" alt="User"/>
                <img className="w-10 h-10 md:w-12 md:h-12 rounded-full border-[3px] border-[#1f1f1f] object-cover relative z-10" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80" alt="User"/>
              </div>
            </FadeInUp>
          </div>

          {/* Right Side: Review Cards Carousel */}
          <div className="lg:col-span-8 relative">
            <FadeInUp delay={200}>
              <div className="flex items-center gap-2 md:gap-4 relative">
                
                {/* Left Arrow Button */}
                <button 
                  onClick={() => scrollReviews('left')}
                  className="hidden md:flex w-12 h-12 bg-white rounded-full items-center justify-center shadow-lg shrink-0 hover:bg-gray-200 transition absolute -left-6 z-10"
                >
                  <ChevronLeft className="w-6 h-6 text-black" />
                </button>

                {/* Cards Wrapper */}
                <div 
                  ref={scrollContainerRef}
                  className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory pb-4 pt-2 px-2 w-full"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  <style>{`
                    /* Hide scrollbar for Chrome, Safari and Opera */
                    div::-webkit-scrollbar {
                      display: none;
                    }
                  `}</style>
                  
                  {reviews.map((review, idx) => (
                    <div key={idx} className="snap-center shrink-0 w-[85%] sm:w-[70%] md:w-[calc(50%-12px)] bg-[#2a2a2a] border border-gray-700/50 rounded-2xl p-5 md:p-6 flex flex-col justify-between min-h-[240px] md:min-h-[260px]">
                      <div>
                        <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-5">
                          <img src={review.avatar} alt={review.name} className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"/>
                          <div>
                            <h4 className="text-white font-semibold text-sm md:text-base">{review.name}</h4>
                            <p className="text-gray-400 text-xs md:text-sm">{review.time}</p>
                          </div>
                        </div>
                        <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                          {review.review}
                        </p>
                      </div>
                      
                      <div className="flex justify-between items-end mt-4 md:mt-6">
                        <div className="flex space-x-1 text-yellow-400">
                          <Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-current"/><Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-current"/><Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-current"/><Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-current"/><Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-current"/>
                        </div>
                        <GoogleIcon />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Right Arrow Button */}
                <button 
                  onClick={() => scrollReviews('right')}
                  className="hidden md:flex w-12 h-12 bg-white rounded-full items-center justify-center shadow-lg shrink-0 hover:bg-gray-200 transition absolute -right-6 z-10"
                >
                  <ChevronRight className="w-6 h-6 text-black" />
                </button>
              </div>

              {/* Pagination Dots */}
              <div className="flex justify-center gap-2 mt-4">
                 <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gray-600"></div>
                 <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-amber-500"></div>
                 <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gray-600"></div>
                 <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gray-600"></div>
                 <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gray-600"></div>
              </div>
            </FadeInUp>
          </div>

        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-white pt-16 md:pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6 mb-12 md:mb-16">
          <FadeInUp>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-black">Contact Us</h2>
          </FadeInUp>
          
          <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8 max-w-4xl mx-auto">
            {/* Address Card */}
            <FadeInUp delay={100} className="flex-1">
              <div className="bg-gray-50 rounded-2xl p-6 md:p-8 shadow-xl shadow-black/5 border border-gray-300 h-full flex flex-col items-center text-center">
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center mb-3 md:mb-4">
                  <MapPin className="w-6 h-6 md:w-8 md:h-8 text-gray-700" strokeWidth={1.5} />
                </div>
                <h3 className="text-base md:text-lg font-bold text-black mb-3 md:mb-4">Office Address</h3>
                <p className="text-gray-700 leading-relaxed text-xs md:text-sm">
                  Bhagya nagar, Irrigation Colony, T Point, Nanded, Maharashtra 431605
                </p>
              </div>
            </FadeInUp>

            {/* Phone Card */}
            <FadeInUp delay={200} className="flex-1">
              <div className="bg-gray-50 rounded-2xl p-6 md:p-8 shadow-xl shadow-black/5 border border-gray-300 h-full flex flex-col items-center text-center">
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center mb-3 md:mb-4">
                  <Phone className="w-6 h-6 md:w-8 md:h-8 text-gray-700" strokeWidth={1.5} />
                </div>
                <h3 className="text-base md:text-lg font-bold text-black mb-3 md:mb-4">Call us</h3>
                <p className="text-gray-700 mb-2 text-xs md:text-sm">We're Just a Call Away!</p>
                <a href="tel:+919766963495" className="text-black font-semibold text-sm md:text-base hover:text-gray-600 transition underline decoration-gray-300 underline-offset-4">
                  +91 9923418241
                </a>
              </div>
            </FadeInUp>
          </div>
        </div>

        {/* Map */}
        <FadeInUp delay={300}>
          <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] bg-gray-200">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14882.261947265535!2d79.10300600129767!3d21.16956697074381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0cba9fcb4dd%3A0xc9cf451480f2d34a!2sLakadganj%2C%20Nagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1714636901804!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location Map"
            ></iframe>
          </div>
        </FadeInUp>
      </div>

      {/* Top Cities */}
      <div className="bg-gray-50 py-16 md:py-24 border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-6">
          <FadeInUp>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-12 text-black">Find Top Designers in Indian Cities</h2>
          </FadeInUp>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
            {[
              { name: 'Nanded', count: '1,500+ Experts', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs7RzsMJurQ-9uBiKjvT4NKIWLdUcJMTb7jg&s' },
              { name: 'Nagpur', count: '1,200+ Experts', img: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&q=80&w=300' },
              { name: 'Pune', count: '800+ Experts', img: 'https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVzb3J0fGVufDB8fDB8fHww' },
              { name: 'Mumbai', count: '2,000+ Experts', img: 'https://media-cdn.tripadvisor.com/media/photo-s/17/29/5f/89/dash-resort.jpg' },
              { name: 'Amravati', count: '900+ Experts', img: 'https://t3.ftcdn.net/jpg/01/22/75/46/360_F_122754636_ohzKmEdPZvNPi9GCpFq1XNKPAPkpqxIU.jpg' },
              { name: 'Latur', count: '600+ Experts', img: 'https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&q=80&w=300' },
            ].map((city, index) => (
              <FadeInUp key={index} delay={index * 100} className="h-full">
                <div className="bg-white p-3 md:p-4 rounded-3xl text-center shadow-lg shadow-black/5 hover:shadow-black/15 transition cursor-pointer border border-gray-300 h-full flex flex-col justify-center">
                  <img src={city.img} alt={city.name} className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 mx-auto rounded-2xl object-cover mb-3 md:mb-4 border border-gray-300" />
                  <h4 className="font-bold text-xs md:text-sm mb-1 text-black">{city.name}</h4>
                  <p className="text-[10px] text-gray-700 font-medium">{city.count}</p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-neutral-900 text-gray-300 py-12 md:py-16 text-xs md:text-sm border-t border-gray-700">
        <FadeInUp>
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            
            <div>
              <h4 className="font-bold text-base md:text-lg mb-4 md:mb-6 text-white">Natural Design</h4>
              <ul className="space-y-2 md:space-y-3 text-gray-400">
                
                <li><a href="#" className="hover:text-white transition">Our Services</a></li>
                <li><a href="#" className="hover:text-white transition">Design Trends</a></li>
                <li><a href="#" className="hover:text-white transition">Join as Designer</a></li>
                <li><a href="#" className="hover:text-white transition">Material Costs</a></li>
                <li><a href="#" className="hover:text-white transition">Area Calculator</a></li>
                <li><a href="#" className="hover:text-white transition">Articles</a></li>
                <li><a href="#" className="hover:text-white transition">Customer Service</a></li>
                <li><a href="#" className="hover:text-white transition">Sitemap</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-base md:text-lg mb-4 md:mb-6 text-white">Company</h4>
              <ul className="space-y-2 md:space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition">About us</a></li>
                <li><a href="#" className="hover:text-white transition">Contact us</a></li>
                <li><a href="#" className="hover:text-white transition">Careers with us</a></li>
                <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-white transition">Request Info</a></li>
                <li><a href="#" className="hover:text-white transition">Feedback</a></li>
                <li><a href="#" className="hover:text-white transition">Report a problem</a></li>
                <li><a href="#" className="hover:text-white transition">Testimonials</a></li>
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              </ul>
            </div>

            <div className="sm:col-span-2 lg:col-span-2">
              <h4 className="font-bold text-base md:text-lg mb-4 md:mb-6 text-white">Our Partners</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Naukri.com - Jobs in India</a></li>
                <li><a href="#" className="hover:text-white transition">DesignersGuild.com</a></li>
                <li><a href="#" className="hover:text-white transition">Jeevansathi.com</a></li>
                <li><a href="#" className="hover:text-white transition">Brijj.com</a></li>
                <li><a href="#" className="hover:text-white transition">Shiksha.com</a></li>
                <li><a href="#" className="hover:text-white transition">Policybazaar.com</a></li>
                <li><a href="#" className="hover:text-white transition">PaisaBazaar.com</a></li>
                <li><a href="#" className="hover:text-white transition">Techminis</a></li>
              </ul>
            </div>

            <div className="sm:col-span-2 md:col-span-4 lg:col-span-1">
              <h4 className="font-bold text-base md:text-lg mb-4 md:mb-6 text-white">Contact Us</h4>
              <div className="text-gray-400 mb-6">
                <p className="mb-2">+91 9923418241</p>
                <p>9:30 AM to 6:30 PM (Mon-Sun)</p>
              </div>
              <h4 className="font-bold text-base md:text-lg mb-4 text-white">Connect with us</h4>
              {/* <div className="flex space-x-4">
                <a href="#" className="bg-amber-900/50 p-2 rounded-full hover:bg-[#D8B43D] transition border border-amber-900"><Facebook className="w-4 h-4 text-amber-400" /></a>
                <a href="#" className="bg-amber-900/50 p-2 rounded-full hover:bg-[#D8B43D] transition border border-amber-900"><Twitter className="w-4 h-4 text-amber-400" /></a>
                <a href="#" className="bg-amber-900/50 p-2 rounded-full hover:bg-[#D8B43D] transition border border-amber-900"><Instagram className="w-4 h-4 text-amber-400" /></a>
                <a href="#" className="bg-amber-900/50 p-2 rounded-full hover:bg-[#D8B43D] transition border border-amber-900"><Linkedin className="w-4 h-4 text-amber-400" /></a>
              </div> */}
            </div>
          </div>
        </FadeInUp>
      </footer>
    </div>
  );
};

export default Aebsite;