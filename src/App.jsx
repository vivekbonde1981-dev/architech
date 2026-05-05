import React, { useState, useEffect, useRef } from 'react';
import { Layers, Store, Lightbulb, Star, ChevronLeft, ChevronRight, SlidersHorizontal, ChevronDown, Quote, Ruler, Building2, Award, ArrowRight, MapPin, Phone, Mail,
  //  Instagram, Linkedin, Twitter 
  } from 'lucide-react';
import { s } from 'framer-motion/client';

// --- CUSTOM SCROLL REVEAL HOOK ---
const useScrollReveal = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;
    
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(currentRef); 
      }
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    observer.observe(currentRef);
    return () => {
      if (currentRef) observer.disconnect();
    };
  }, []);

  return [ref, isVisible];
};

// --- DATA ---
const portfolioData = [
  { id: 1, title: "Selby's", location: "Redwood City, CA", image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=1200", size: "large" },
  { id: 2, title: "La Connessa", location: "San Francisco, CA", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200", size: "large" },
  { id: 3, title: "Augustine", location: "San Jose, CA", image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800", size: "normal" },
  { id: 4, title: "Luxzuries Resturant", location: "San Francisco, CA", image: "https://lh3.googleusercontent.com/p/AF1QipP3vmLar9zFPQsU8un4jXi5V9OaAHpq5YB9opRO=w243-h174-n-k-no-nu", size: "normal" },
  { id: 5, title: "Louie's Original", location: "San Francisco, CA", image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=800", size: "normal" },
  { id: 6, title: "Old Navy Flagship", location: "New York, NY", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800", size: "normal" },
  { id: 7, title: "Gap Flagship", location: "New York, NY", image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=800", size: "normal" },
  { id: 8, title: "AZenith Rooftop", location: "San Francisco, CA", image: "office.webp" , size: "normal" },
  { id: 9, title: "Gap Flagship - Ginza", location: "Tokyo, Japan", image: "https://lh3.googleusercontent.com/p/AF1QipOQTmHC7zYvGpMhLRKmax4oKtx1Ow4eD51ApWWH=w243-h174-n-k-no-nu" ,size: "normal" },
  { id: 10, title: "Old Navy Prototype", location: "Walnut Creek, CA", image: "https://lh3.googleusercontent.com/p/AF1QipPsdFeQHmmOdbGNtAUFEy648cVTxEFHHSBdhBRq=w243-h174-n-k-no-nu" ,size: "normal" },
  { id: 11, title: "Janie and Jack", location: "Sherman Oaks, CA", image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=800", size: "normal" },
];

const statsData = [
  { icon: <Layers size={32} strokeWidth={1.2} />, title: "10M+", shortDesc: "Sq. Ft. of Space Designed", longDesc: "Creative and fiduciary oversight across more than one billion dollars in capital expenditure — where brand ambition meets disciplined, high-value execution." },
  { icon: <Store size={32} strokeWidth={1.2} />, title: "500+", shortDesc: "Luxury Units Delivered", longDesc: "Market entry and creative rollouts across six continents, translating brand DNA into high-traffic retail environments that establish immediate authority in new markets." },
  { icon: <Lightbulb size={32} strokeWidth={1.2} />, title: "15+", shortDesc: "Years of Regional Excellence", longDesc: "From market gap to physical prototype — defining the visual and operational DNA for new-to-market retail concepts built to last." },
  { icon: <Star size={32} strokeWidth={1.2} />, title: "5+", shortDesc: "IIA (Indian Institute of Architects) Awards", longDesc: "Designing the theatre of dining for the world's most demanding hospitality brands, where every aesthetic decision supports operational excellence and guest experience." }
];

const brandsData = [
  { id: 1, image: "hero1.webp" },
  { id: 2, image: "hero2.webp" },
  { id: 3, image: "hero3.webp" },
  { id: 4, image: "slide.webp", alt: "Streetwear retail space" },
  { id: 5, image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=1200&q=80", alt: "Classic brand facade" }
];

const slides = [
  { meta: "2024 / RESIDENTIAL / NAGPUR, INDIA", subtitle: "RESIDENTIAL", title: "The Gilded Lounge", desc: "House Of Trails - a bespoke residence where architecture becomes a daily experience, allowing natural light, open volumes, and curated materiality into the rhythm of home.", bg: "url('hero1.webp')" },
  { meta: "2025 / INTERIOR / NAGPUR, INDIA", subtitle: "Exterior Commercial Design", title: "AZenith Rooftop", desc: "A thoughtfully designed private residence where contemporary elegance meets everyday warmth - refined surfaces, and spaces that breathe.", bg: "url('hero2.webp')" },
  { meta: "2025 / INTERIOR / NAGPUR, INDIA", subtitle: "Commercial Interior Design", title: "Marble & Oak Reception", desc: "A private residence where contemporary elegance meets everyday warmth - refined surfaces, ambient lighting, and spaces that breathe.", bg: "url('hero3.webp')" }
];

// --- SUB-COMPONENTS ---

const Intro = () => {
  const [introRef, isVisible] = useScrollReveal();

  return (
    <section ref={introRef} className="intro-section">
      <div className="intro-bg-grid" />
      <div className="intro-container">
        
        <div className={`intro-left reveal-right ${isVisible ? 'is-visible' : ''}`}>
          <div className={`intro-frame ${isVisible ? 'is-visible' : ''}`}></div>
          <div className="intro-image-wrap">
            <img 
              src="ar.webp" 
              alt="Ar Mayur Tak - Principal Architect" 
              className="intro-image"
            />
            <div className="intro-overlay"></div>
          </div>
        </div>

        <div className="intro-right">
          <div className={`intro-eyebrow reveal-up ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '200ms' }}>
            <div className="intro-line"></div>
            <span className="intro-eyebrow-text">Meet The Visionary</span>
          </div>

          <h1 className={`intro-title reveal-up ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '300ms' }}>
            Ar Mayur <span>Tak</span>
          </h1>
          
          <h2 className={`intro-subtitle reveal-up ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '400ms' }}>
            Principal Architect & Interior Designer
          </h2>

          <div className={`intro-quote-box reveal-left ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '500ms' }}>
            <Quote className="intro-quote-icon" size={24} />
            <p className="intro-quote-text">
              "Architecture is not just about designing buildings; it's about choreographing human experience within the boundaries of space and light."
            </p>
          </div>

          <p className={`intro-bio reveal-up ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '600ms' }}>
            With over two decades of transforming skylines, Nilesh specializes in sustainable, human-centric design. His philosophy bridges the gap between raw modernist aesthetics and environmental consciousness, resulting in spaces that breathe and evolve with their inhabitants.
          </p>

          <div className={`intro-stats-grid reveal-up ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '700ms' }}>
            <div className="intro-stat-item">
              <Building2 size={24} className="intro-stat-icon" />
              <span className="intro-stat-val">50+</span>
              <span className="intro-stat-label">Projects Completed</span>
            </div>
            <div className="intro-stat-item">
              <Award size={24} className="intro-stat-icon" />
              <span className="intro-stat-val">17 yr exp</span>
              <span className="intro-stat-label">BArch</span>
            </div>
            {/* <div className="intro-stat-item">
              <Ruler size={24} className="intro-stat-icon" />
              <span className="intro-stat-val">NWCMC</span>
              <span className="intro-stat-label">Certified Member</span>
            </div> */}
          </div>

          <div className={`reveal-up ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '800ms' }}>
            <button className="intro-btn">
              View Portfolio
              <ArrowRight className="intro-btn-icon" size={16} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

const PortfolioGrid = () => {
  const [headerRef, headerVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal();

  return (
    <section className="portfolio-section">
      <div className="inner-container">
        
        <div ref={headerRef} className={`portfolio-header scroll-reveal ${headerVisible ? 'is-visible' : ''}`}>
          <h2 className="section-title">Selected Works</h2>
          <div className="filter-wrapper">
            <button className="filter-btn">
              <div className="filter-left">
                <SlidersHorizontal size={14} strokeWidth={2.5} />
                <span>Filter</span>
              </div>
              <div className="filter-right">
                <span>All 15</span>
                <ChevronDown size={16} />
              </div>
            </button>
          </div>
        </div>

        <div ref={gridRef} className="portfolio-grid">
          {portfolioData.map((project, index) => (
            <div key={project.id} className={`port-item ${project.size}`}>
              <div 
                className={`port-image-wrap reveal-mask ${gridVisible ? 'is-visible' : ''}`}
                style={{ transitionDelay: `${(index % 3) * 150}ms` }}
              >
                <div 
                  className="reveal-image-inner"
                  style={{ transitionDelay: `${(index % 3) * 150}ms` }}
                >
                  <img src={project.image} alt={project.title} loading="lazy" />
                </div>
              </div>
              <div 
                className={`port-meta scroll-reveal ${gridVisible ? 'is-visible' : ''}`}
                style={{ transitionDelay: `${((index % 3) * 150) + 250}ms` }}
              >
                <h3>{project.title}</h3>
                <span>{project.location}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

const StatCard = ({ icon, title, shortDesc, longDesc, index, isVisible }) => {
  return (
    <div 
      className={`stat-card scroll-reveal ${isVisible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="tak-flip-inner">
        <div className="tak-flip-front">
          <div className="stat-icon">{icon}</div>
          <div className="stat-content">
            <h3 className="stat-val">{title}</h3>
            <p className="stat-short">{shortDesc}</p>
          </div>
        </div>
        <div className="tak-flip-back">
          <div className="stat-icon-faded">{icon}</div>
          <div className="stat-content">
            <p className="stat-long">{longDesc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

function Another() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const [statsHeaderRef, statsHeaderVisible] = useScrollReveal();
  const [statsGridRef, statsGridVisible] = useScrollReveal();
  const [carouselRef, carouselVisible] = useScrollReveal();

  const handlePrev = () => setCurrentIndex((prev) => Math.max(0, prev - 1));
  const handleNext = () => setCurrentIndex((prev) => Math.min(brandsData.length - 1, prev + 1));

  return (
    <div className="another-wrapper">
      
      <section className="stats-section">
        <div className="inner-container">
          
          <div ref={statsHeaderRef} className="stats-header">
            <h2 className={`section-title scroll-reveal ${statsHeaderVisible ? 'is-visible' : ''}`}>
              We Turn Legacy<br />Into Authority.
            </h2>
            <div className={`stats-desc-wrapper scroll-reveal ${statsHeaderVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '150ms' }}>
              <p className="stats-desc">
                Executive creative leadership for hospitality owners, retail brands, real estate developers, and organizations that need more than a designer.
              </p>
            </div>
          </div>

          <div ref={statsGridRef} className="stats-grid">
            {statsData.map((stat, index) => (
              <StatCard key={index} index={index} isVisible={statsGridVisible} {...stat} />
            ))}
          </div>

        </div>
      </section>

      <section ref={carouselRef} className="carousel-section">
        <div className="carousel-container">
          
          <div className="carousel-left">
            <div>
              <h4 className={`carousel-meta scroll-reveal ${carouselVisible ? 'is-visible' : ''}`}>Retail & Brand</h4>
              <h2 className={`section-title scroll-reveal ${carouselVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '100ms' }}>
                Global Formats.<br />Brands.
              </h2>
              <p className={`stats-desc scroll-reveal ${carouselVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '200ms', marginBottom: '40px' }}>
                Store design, flagship formats, and retail experience strategy for some of the world's most recognized brands.
              </p>
            </div>
            <div className={`scroll-reveal ${carouselVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '300ms' }}>
              <button className="explore-btn">Explore The Work</button>
            </div>
          </div>

          <div className={`carousel-right scroll-reveal ${carouselVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '400ms' }}>
            <div className="carousel-track-wrapper">
              <div 
                className="carousel-track"
                style={{ transform: `translateX(calc(-${currentIndex} * (60% + 24px)))` }}
              >
                {brandsData.map((brand, index) => (
                  <div 
                    key={brand.id}
                    className="carousel-item"
                    style={{ opacity: index < currentIndex ? 0 : 1 }}
                  >
                    <img src={brand.image} alt={brand.alt} draggable="false" />
                  </div>
                ))}
              </div>
            </div>

            <div className="carousel-controls-bottom">
              <button onClick={handlePrev} disabled={currentIndex === 0} className={`nav-btn ${currentIndex === 0 ? 'disabled' : 'active'}`}>
                <ChevronLeft size={20} strokeWidth={2.5} />
              </button>
              <button onClick={handleNext} disabled={currentIndex === brandsData.length - 1} className={`nav-btn ${currentIndex === brandsData.length - 1 ? 'disabled' : 'active'}`}>
                <ChevronRight size={20} strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

const Skyline = () => (
  <div className="skyline">
    {[1, 2, 3, 4, 5].map(i => <div key={i} className={`building b${i}`}></div>)}
  </div>
);

const TakLogo = () => (
  <div className="logo-wrapper">
    <div className="logo-container">
      <div className="logo-part red-dot"></div>
      <div className="logo-part t-crossbar"></div>
      <div className="logo-part t-stem-straight"></div>
      <div className="logo-part t-stem-hook"></div>
      <div className="logo-part a-ring"></div>
      <div className="logo-part a-stem"></div>
      <div className="logo-part k-stem"></div>
      <div className="logo-part k-arms"></div>
      <div className="spaces-text">
        <span>S</span><span>P</span><span>A</span><span>C</span><span>E</span><span>S</span>
      </div>
    </div>
  </div>
);

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <section className="hero-section">
      {slides.map((slide, index) => (
        <div key={index} className={`slider-bg ${index === current ? 'active' : ''}`} style={{ backgroundImage: slide.bg }} />
      ))}
      <div className="slider-overlay"></div>

      <header className="main-header">
        <div className="header-left"></div> 
        <nav className="header-center">
          <a href="#projects">Projects</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="header-right">
          <div className="icon-circle">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </div>
          <div className="icon-circle">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          </div>
          <button className="connect-btn">CONNECT</button>
        </div>
      </header>

      <div className="slide-content-wrapper">
        <div className="slide-inner" key={current}>
          <div className="slide-meta">{slides[current].meta}</div>
          <div className="slide-subtitle">{slides[current].subtitle}</div>
          <h1 className="slide-title">{slides[current].title}</h1>
          <p className="slide-desc">{slides[current].desc}</p>
        </div>
      </div>

      <div className="slider-controls">
        <div className="pagination">0{current + 1} &mdash; 0{slides.length}</div>
        <div className="nav-arrows">
          <button onClick={prevSlide}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"></polyline></svg></button>
          <button onClick={nextSlide}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg></button>
        </div>
      </div>
    </section>
  );
};

// --- NEW COMPONENT: CONTACT & FOOTER ---
const ContactFooter = () => {
  const [contactRef, isVisible] = useScrollReveal();

  return (
    <section ref={contactRef} className="contact-footer-section" id="contact">
      <div className="inner-container contact-container">
        
        {/* Contact Left - Information */}
        <div className="contact-left">
          <div className={`intro-eyebrow reveal-up ${isVisible ? 'is-visible' : ''}`}>
            <div className="intro-line" style={{ background: 'white' }}></div>
            <span className="intro-eyebrow-text" style={{ color: 'white' }}>Get in Touch</span>
          </div>
          
          <h2 className={`contact-title reveal-up ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '100ms' }}>
            Let's build something<br/><span>extraordinary.</span>
          </h2>
          
          <p className={`contact-desc reveal-up ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '200ms' }}>
            Ready to transform your legacy into authority? Whether it's a flagship rollout or a bespoke hospitality space, we bring visionary concepts into disciplined execution.
          </p>

          <div className={`contact-info-list reveal-up ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '300ms' }}>
            <div className="contact-info-item">
              <MapPin size={20} />
              <span>Saptagiri plaza, beside Saptagiri banquite hall, G -12, Old Kautha, Maharashtra 431603</span>
            </div>
            <div className="contact-info-item">
              <Mail size={20} />
              <span>studio@takspaces.com</span>
            </div>
            <div className="contact-info-item">
              <Phone size={20} />
              <span> 080879 04005</span>
            </div>
          </div>
        </div>

        {/* Contact Right - Form */}
        <div className="contact-right">
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className={`form-group reveal-up ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '200ms' }}>
              <input type="text" className="form-input" placeholder="Your Name" required />
            </div>
            <div className={`form-group reveal-up ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '300ms' }}>
              <input type="email" className="form-input" placeholder="Email Address" required />
            </div>
            <div className={`form-group reveal-up ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '400ms' }}>
              <input type="text" className="form-input" placeholder="Company / Project Name" />
            </div>
            <div className={`form-group reveal-up ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '500ms' }}>
              <textarea className="form-input form-textarea" placeholder="Tell us about your project..." rows="4" required></textarea>
            </div>
            <div className={`reveal-up ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '600ms' }}>
              <button type="submit" className="submit-btn">
                Send Message
                <ArrowRight size={16} className="submit-btn-icon" />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer Area */}
      <footer className="footer-area">
        <div className="inner-container footer-container">
          <div className="footer-logo">
            <span className="footer-logo-text">TAK SPACES</span>
            {/* <div className="footer-socials">
              <a href="#"><Instagram size={18} /></a>
              <a href="#"><Linkedin size={18} /></a>
              <a href="#"><Twitter size={18} /></a>
            </div> */}
          </div>
          <div className="footer-links">
            <div className="footer-col">
              <h4>Studio</h4>
              <a href="#">About Us</a>
              <a href="#">Selected Works</a>
              <a href="#">Services</a>
              <a href="#">Careers</a>
            </div>
            <div className="footer-col">
              <h4>Legal</h4>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Tak Spaces Architecture & Design. All rights reserved.</p>
        </div>
      </footer>
    </section>
  );
};


// --- PURE CSS STYLES ---
const globalStyles = `
  /* --- BASE RESET --- */
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { background-color: #060606; color: white; overflow-x: hidden; }

  /* --- MAIN APP STRUCTURE --- */
  .app-container {
      position: relative;
      width: 100vw;
      min-height: 100vh;
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  .inner-container {
      max-width: 1400px;
      margin: 0 auto;
  }
  .hero-wrapper {
      position: relative;
      width: 100%;
      height: 100vh;
      overflow: hidden;
  }
  .another-wrapper {
      background-color: #f5f5f5;
      color: #1a1a1a;
  }

  /* --- GLOBAL SCROLL REVEAL UTILITIES --- */
  .scroll-reveal {
      opacity: 0;
      transform: translateY(40px);
      transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .scroll-reveal.is-visible {
      opacity: 1;
      transform: translateY(0);
  }

  /* --- DIRECTIONAL REVEALS (INTRO SECTION) --- */
  .reveal-right { opacity: 0; transform: translateX(-40px); transition: opacity 1s ease-out, transform 1s ease-out; }
  .reveal-left { opacity: 0; transform: translateX(40px); transition: opacity 1s ease-out, transform 1s ease-out; }
  .reveal-up { opacity: 0; transform: translateY(40px); transition: opacity 1s ease-out, transform 1s ease-out; }
  .reveal-right.is-visible, .reveal-left.is-visible, .reveal-up.is-visible { opacity: 1; transform: translate(0, 0); }

  /* --- INTRO SECTION (PURE CSS) --- */
  .intro-section {
      min-height: 100vh;
      background: #ffffff;
      color: #000000;
      position: relative;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 100px 5vw;
  }
  .intro-bg-grid {
      position: absolute; inset: 0; z-index: 0; opacity: 0.15; pointer-events: none;
      background-size: 40px 40px;
      background-image: 
          linear-gradient(to right, #000 1px, transparent 1px), 
          linear-gradient(to bottom, #000 1px, transparent 1px);
  }
  .intro-container {
      max-width: 1400px; width: 100%; display: grid; grid-template-columns: repeat(12, 1fr); gap: 5rem; position: relative; z-index: 10;
  }
  .intro-left { grid-column: span 5; position: relative; }
  .intro-right { grid-column: span 7; display: flex; flex-direction: column; justify-content: center; }

  .intro-frame { 
      position: absolute; top: -16px; left: -16px; width: 100%; height: 100%; 
      border: 2px solid #000; z-index: 0; display: none; 
      transition: transform 1s ease-out 0.3s; transform: translate(10px, 10px); 
  }
  @media (min-width: 768px) { .intro-frame { display: block; } }
  .intro-frame.is-visible { transform: translate(0, 0); }

  .intro-image-wrap { 
      position: relative; z-index: 10; width: 100%; aspect-ratio: 3/4; overflow: hidden; 
      background: #e5e5e5; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25); 
  }
  .intro-image { width: 100%; height: 100%; object-fit: cover; filter: grayscale(100%); transition: all 1s ease; transform: scale(1.1); }
  .intro-left.is-visible .intro-image { transform: scale(1); }
  .intro-image-wrap:hover .intro-image { filter: grayscale(0%); transform: scale(1.05) !important; }
  .intro-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.4), transparent); opacity: 0.6; pointer-events: none; }

  .intro-eyebrow { display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem; }
  .intro-line { height: 1px; width: 3rem; background: #000; }
  .intro-eyebrow-text { font-family: monospace; letter-spacing: 0.2em; font-size: 0.875rem; text-transform: uppercase; font-weight: bold; color: #000; }
  .intro-title { font-size: 4.5rem; font-weight: 300; color: #000; margin-bottom: 0.5rem; letter-spacing: -0.025em; line-height: 1.1; }
  .intro-title span { font-weight: 700; }
  .intro-subtitle { font-size: 1.5rem; color: #444; margin-bottom: 2.5rem; font-weight: 300; }

  .intro-quote-box { position: relative; margin-bottom: 3rem; padding-left: 2rem; border-left: 2px solid #000; }
  .intro-quote-icon { position: absolute; left: -12px; top: -8px; color: #000; fill: #000; background: white; padding: 2px 0; }
  .intro-quote-text { font-size: 1.5rem; color: #111; font-style: italic; line-height: 1.6; font-family: serif; }

  .intro-bio { font-size: 1.05rem; color: #444; line-height: 1.6; margin-bottom: 2.5rem; max-width: 42rem; }

  .intro-stats-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-bottom: 3rem; }
  .intro-stat-item { display: flex; flex-direction: column; gap: 0.5rem; }
  .intro-stat-icon { color: #000; }
  .intro-stat-val { color: #000; font-weight: bold; font-size: 1.25rem; }
  .intro-stat-label { font-size: 0.75rem; color: #666; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600; }

  .intro-btn { 
      display: flex; align-items: center; gap: 0.75rem; background: transparent; border: 2px solid #000; 
      color: #000; padding: 1rem 2rem; text-transform: uppercase; letter-spacing: 0.1em; font-size: 0.875rem; 
      font-weight: bold; cursor: pointer; transition: all 0.3s; width: max-content; 
  }
  .intro-btn:hover { background: #000; color: #fff; }
  .intro-btn-icon { transition: transform 0.3s; }
  .intro-btn:hover .intro-btn-icon { transform: translateX(8px); }

  /* --- SECTION 1: STATS & FLIP CARDS (COLLAPSE BUG FIXED) --- */
  .stats-section {
      padding: 120px 5vw;
      position: relative;
      z-index: 10;
  }
  .stats-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 2rem;
      margin-bottom: 80px;
  }
  .section-title {
      font-size: 4.5rem;
      line-height: 1.05;
      font-weight: 500;
      letter-spacing: -1px;
      color: #000;
      width: 55%;
  }
  .stats-desc-wrapper {
      width: 45%;
      padding-top: 1rem;
  }
  .stats-desc {
      font-size: 1.1rem;
      color: #666;
      line-height: 1.6;
      max-width: 600px;
  }
  .stats-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 2rem;
  }

  /* The fix: CSS Grid layering for 3D cards prevents 0px height collapse */
  .stat-card {
      perspective: 1000px;
      width: 100%;
  }
  .tak-flip-inner {
      display: grid; /* Grid holds the height naturally */
      position: relative;
      width: 100%;
      min-height: 360px;
      transform-style: preserve-3d;
      transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  }
  .stat-card:hover .tak-flip-inner {
      transform: rotateY(180deg);
  }
  .tak-flip-front, .tak-flip-back {
      grid-area: 1 / 1; /* Stacks them on top of each other in the grid */
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
      background: #fff;
      border-radius: 1.5rem;
      padding: 2.5rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      box-shadow: 0 4px 24px rgba(0,0,0,0.03);
      border: 1px solid rgba(0,0,0,0.05);
  }
  .tak-flip-back {
      transform: rotateY(180deg);
      box-shadow: 0 8px 32px rgba(0,0,0,0.08);
  }
  .stat-icon { color: #000; margin-bottom: 2rem; }
  .stat-icon-faded { color: rgba(0,0,0,0.5); margin-bottom: 2rem; }
  .stat-val { font-size: 4rem; font-weight: 500; margin-bottom: 0.5rem; line-height: 1; color: #000; }
  .stat-short { font-size: 0.95rem; color: #666; }
  .stat-long { font-size: 0.95rem; color: #444; line-height: 1.6; }


  /* --- SECTION 2: CAROUSEL --- */
  .carousel-section {
      padding: 100px 0;
      display: flex;
      align-items: center;
      overflow: hidden;
      position: relative;
      z-index: 10;
      min-height: 600px;
  }
  .carousel-container {
      display: flex;
      gap: 2rem;
      width: 100%;
      padding-left: 5vw;
  }
  .carousel-left {
      width: 30%;
      flex-shrink: 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-bottom: 1rem;
      padding-right: 2rem;
  }
  .carousel-meta {
      font-size: 0.85rem;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: #666;
      margin-bottom: 1.5rem;
      font-weight: 500;
  }
  .explore-btn {
      background: #111; color: #fff; padding: 14px 24px; border-radius: 14px; 
      font-size: 0.875rem; font-weight: 500; border: none; cursor: pointer; 
      transition: 0.3s; box-shadow: 0 8px 16px rgba(0,0,0,0.2);
  }
  .explore-btn:hover { background: #000; }
  
  .carousel-right {
      width: 70%;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
  }
  .carousel-track-wrapper {
      width: 100%;
      padding: 10px 0;
      overflow: visible;
  }
  .carousel-track {
      display: flex;
      gap: 1.5rem;
      transition: transform 0.7s cubic-bezier(0.25,1,0.5,1);
  }
  .carousel-item {
      width: 60%;
      flex-shrink: 0;
      height: 550px;
      border-radius: 2rem;
      overflow: hidden;
      background: #ddd;
      transition: opacity 0.5s;
      cursor: grab;
  }
  .carousel-item img {
      width: 100%; height: 100%; object-fit: cover; transition: transform 0.7s ease-out;
  }
  .carousel-item:hover img { transform: scale(1.05); }
  .carousel-controls-bottom {
      display: flex;
      justify-content: flex-end;
      gap: 12px;
      margin-top: 2rem;
      padding-right: 5vw;
  }
  .nav-btn {
      width: 44px; height: 44px; border-radius: 12px; display: flex; align-items: center; justify-content: center; 
      border: none; transition: 0.3s; cursor: pointer;
  }
  .nav-btn.active { background: #111; color: #fff; box-shadow: 0 4px 12px rgba(0,0,0,0.15); }
  .nav-btn.active:hover { background: #000; }
  .nav-btn.disabled { background: #e5e5e5; color: #999; cursor: not-allowed; }


  /* --- SECTION 3: PORTFOLIO GRID --- */
  .portfolio-section {
      background: #f5f5f5;
      padding: 100px 5vw;
      position: relative;
      z-index: 10;
  }
  .portfolio-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      margin-bottom: 4rem;
  }
  .filter-wrapper { display: flex; align-items: center; }
  .filter-btn {
      display: flex; align-items: center; gap: 16px; background: #fff; border: 1px solid #e5e5e5; 
      border-radius: 50px; padding: 10px 20px; cursor: pointer; transition: 0.3s;
  }
  .filter-btn:hover { border-color: #999; }
  .filter-left { display: flex; align-items: center; gap: 8px; color: #666; font-size: 10px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; transition: color 0.3s;}
  .filter-btn:hover .filter-left { color: #000; }
  .filter-right { display: flex; align-items: center; gap: 8px; border-left: 1px solid #e5e5e5; padding-left: 16px; font-size: 14px; font-weight: 600; color: #000; transition: color 0.3s; }
  .filter-btn:hover .filter-right svg { color: #000; }
  .filter-right svg { color: #999; transition: color 0.3s; }
  
  .portfolio-grid {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      gap: 3rem 2rem;
  }
  .port-item { cursor: pointer; }
  .port-item.large { grid-column: span 6; }
  .port-item.normal { grid-column: span 4; }
  .port-image-wrap {
      position: relative;
      overflow: hidden;
      border-radius: 1rem;
      background: #fafafa;
      margin-bottom: 1.25rem;
  }
  .port-item.large .port-image-wrap { aspect-ratio: 16/10; }
  .port-item.normal .port-image-wrap { aspect-ratio: 4/3; }
  .port-item img {
      width: 100%; height: 100%; object-fit: cover; transition: transform 1s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .port-item:hover img { transform: scale(1.05); }
  .port-meta {
      display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem;
  }
  .port-meta h3 { font-size: 1.125rem; font-weight: 500; color: #1a1a1a; margin: 0; letter-spacing: -0.5px; }
  .port-meta span { font-size: 13px; color: #666; text-align: right; }

  /* Premium Image Reveal (Portfolio Grid) */
  .reveal-mask {
      clip-path: inset(100% 0 0 0); 
      transition: clip-path 1.2s cubic-bezier(0.76, 0, 0.24, 1);
  }
  .reveal-mask.is-visible { clip-path: inset(0 0 0 0); }
  .reveal-image-inner {
      width: 100%; height: 100%;
      transform: scale(1.3); 
      transition: transform 1.6s cubic-bezier(0.76, 0, 0.24, 1);
  }
  .reveal-mask.is-visible .reveal-image-inner { transform: scale(1); }


  /* --- NEW: CONTACT & FOOTER SECTION --- */
  .contact-footer-section {
      background-color: #060606;
      color: #ffffff;
      padding: 120px 5vw 0 5vw;
      position: relative;
      z-index: 10;
  }
  .contact-container {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      gap: 5rem;
      margin-bottom: 100px;
      padding-bottom: 100px;
      border-bottom: 1px solid rgba(255,255,255,0.1);
  }
  .contact-left { grid-column: span 5; }
  .contact-right { grid-column: span 7; }

  .contact-title { font-size: 4rem; font-weight: 300; margin-bottom: 1.5rem; letter-spacing: -1px; line-height: 1.1; }
  .contact-title span { font-weight: 600; color: #E22028; }
  .contact-desc { font-size: 1.125rem; color: #aaaaaa; line-height: 1.6; margin-bottom: 3rem; max-width: 450px; }
  
  .contact-info-list { display: flex; flex-direction: column; gap: 1.5rem; }
  .contact-info-item { display: flex; align-items: center; gap: 1rem; color: #ffffff; font-size: 0.95rem; font-weight: 300; }
  .contact-info-item svg { color: #E22028; }

  .contact-form { display: flex; flex-direction: column; gap: 2rem; }
  .form-group { width: 100%; }
  .form-input { 
      width: 100%; background: transparent; border: none; border-bottom: 1px solid rgba(255,255,255,0.2); 
      color: white; padding: 15px 0; font-size: 1.125rem; font-family: inherit; transition: border-color 0.3s;
  }
  .form-input::placeholder { color: rgba(255,255,255,0.3); font-weight: 300; }
  .form-input:focus { outline: none; border-bottom-color: #E22028; }
  .form-textarea { resize: vertical; min-height: 120px; }

  .submit-btn { 
      display: flex; align-items: center; gap: 0.75rem; background: #ffffff; border: none; 
      color: #000; padding: 1rem 2.5rem; text-transform: uppercase; letter-spacing: 0.1em; font-size: 0.875rem; 
      font-weight: bold; cursor: pointer; transition: all 0.3s; margin-top: 1rem; border-radius: 4px;
  }
  .submit-btn:hover { background: #E22028; color: #fff; }
  .submit-btn-icon { transition: transform 0.3s; }
  .submit-btn:hover .submit-btn-icon { transform: translateX(8px); }

  /* Footer specific styles */
  .footer-area { padding-bottom: 40px; }
  .footer-container { display: flex; justify-content: space-between; margin-bottom: 40px; }
  .footer-logo { display: flex; flex-direction: column; gap: 1.5rem; }
  .footer-logo-text { font-size: 1.5rem; font-weight: bold; letter-spacing: 2px; }
  .footer-socials { display: flex; gap: 1rem; }
  .footer-socials a { color: #aaaaaa; transition: color 0.3s; }
  .footer-socials a:hover { color: #ffffff; }

  .footer-links { display: flex; gap: 5rem; }
  .footer-col { display: flex; flex-direction: column; gap: 1rem; }
  .footer-col h4 { font-size: 0.875rem; color: #666; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 0.5rem; }
  .footer-col a { color: #dddddd; text-decoration: none; font-size: 0.95rem; font-weight: 300; transition: color 0.3s; }
  .footer-col a:hover { color: #E22028; }

  .footer-bottom { display: flex; justify-content: center; padding-top: 40px; border-top: 1px solid rgba(255,255,255,0.05); }
  .footer-bottom p { color: #666666; font-size: 0.875rem; }


  /* --- HERO SECTION --- */
  .hero-section {
      position: absolute; 
      top: 0; left: 0; right: 0; bottom: 0;
      z-index: 10;
      opacity: 0;
      animation: fadeInHero 1.2s ease-in-out 4.3s forwards;
  }

  .main-header {
     position: absolute; /* Change this from 'fixed' to 'absolute' */
    top: 50px; left: 0; right: 0; padding: 0 60px; 
    display: flex; justify-content: space-between; align-items: center; 
    z-index: 1000;
  }

  .header-left { flex: 1; display: flex; justify-content: flex-start; }
  .header-center {
      display: flex; background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
      border-radius: 40px; padding: 6px 30px; gap: 35px; border: 1px solid rgba(255,255,255,0.05);
  }
  .header-center a { color: #ffffff; text-decoration: none; font-weight: 500; font-size: 12px; letter-spacing: 1px; text-transform: uppercase; transition: color 0.3s; }
  .header-center a:hover { color: #E22028; }

  .header-right { flex: 1; display: flex; align-items: center; justify-content: flex-end; gap: 16px; }

  .icon-circle { 
      width: 48px; height: 48px; flex-shrink: 0; 
      border: 1px solid rgba(255,255,255,0.3); border-radius: 50%; 
      display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.3s ease; 
  }
  .icon-circle:hover { background: white; color: black; }
  .connect-btn { border: 1px solid rgba(255,255,255,0.3); background: transparent; color: white; padding: 10px 24px; border-radius: 30px; font-size: 10px; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase; cursor: pointer; transition: all 0.3s ease; }
  .connect-btn:hover { background: white; color: black; }

  .slider-bg { position: absolute; top: 0; left: 0; right: 0; bottom: 0; background-size: cover; background-position: center; opacity: 0; transition: opacity 1.5s ease-in-out, transform 10s ease-out; z-index: 1; transform: scale(1.05); }
  .slider-bg.active { opacity: 1; transform: scale(1); }
  .slider-overlay { position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.1) 100%); z-index: 2; }
  .slide-content-wrapper { position: absolute; left: 10vw; top: 50%; transform: translateY(-50%); z-index: 10; max-width: 650px; padding-right: 20px; }
  .slide-inner { animation: slideTextFadeUp 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
  .slide-meta { font-size: 10px; letter-spacing: 2px; color: #aaaaaa; text-transform: uppercase; margin-bottom: 20px; }
  .slide-subtitle { font-size: 11px; letter-spacing: 1.5px; color: #dddddd; text-transform: uppercase; margin-bottom: 8px; }
  .slide-title { font-size: 64px; font-weight: 400; letter-spacing: -1px; line-height: 1.1; margin-bottom: 20px; font-family: serif; color: white; }
  .slide-desc { font-size: 15px; line-height: 1.6; color: #cccccc; max-width: 500px; }
  .slider-controls { position: absolute; right: 60px; top: 50%; transform: translateY(-50%); z-index: 10; display: flex; flex-direction: column; align-items: center; gap: 25px; }
  .pagination { font-size: 12px; letter-spacing: 2px; color: white; writing-mode: vertical-rl; transform: rotate(180deg); }
  .nav-arrows { display: flex; flex-direction: column; gap: 10px; }
  .nav-arrows button { background: transparent; border: 1px solid rgba(255,255,255,0.2); color: white; border-radius: 50%; width: 40px; height: 40px; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: 0.3s; }
  .nav-arrows button:hover { background: white; color: black; }


  /* --- INTRO ANIMATIONS & LOGO --- */
  .skyline { position: absolute; right: 5vw; bottom: 0; height: 150px; display: flex; align-items: flex-end; gap: 4px; z-index: 1; animation: skylineTimeline 3.2s linear 1s forwards; }
  .building { background-color: #222; background-image: radial-gradient(circle at 2px 2px, #444 1px, transparent 1px); background-size: 8px 10px; }
  .b1 { width: 20px; height: 100px; } .b2 { width: 30px; height: 150px; } .b3 { width: 25px; height: 120px; } .b4 { width: 35px; height: 80px; } .b5 { width: 30px; height: 140px; }
  
  .logo-wrapper { 
      position: absolute; /* Change this from 'fixed' to 'absolute' */
    top: 50%; left: 50%; transform: translate(-50%, -50%) scale(1.2); 
    transform-origin: top left; z-index: 1001; 
    animation: moveToHeader 1.2s cubic-bezier(0.76, 0, 0.24, 1) 4.3s forwards;
  }
  .logo-container { position: relative; width: 410px; height: 310px;  }

  @media (min-width: 768px) {
    .logo-container {
        margin-left: 250px; /* Shift left on smaller screens */
    }


  .logo-part { position: absolute; background-color: #ffffff; }
  .red-dot { background-color: #E22028; width: 35px; height: 35px; top: 35px; rotate: 90deg; left: 30px; border-radius: 0 100% 0 0; animation: wipeLeftToRight 0.4s cubic-bezier(0.4, 0, 0.2, 1) both; }
  .t-crossbar { width: 100px; height: 35px; top: 80px; left: 0; animation: wipeLeftToRight 0.4s cubic-bezier(0.4, 0, 0.2, 1) 0.2s both; }
  .t-stem-straight { width: 35px; height: 66px; top: 90px; left: 30px; animation: wipeTopToBottom 0.4s cubic-bezier(0.4, 0, 0.2, 1) 0.4s both; }
  .t-stem-hook { background-color: transparent; width: 70px; height: 70px; top: 150px; left: 30px; border-left: 35px solid #ffffff; border-bottom: 35px solid #ffffff; border-bottom-left-radius: 70px; animation: wipeTopToBottom 0.4s cubic-bezier(0.4, 0, 0.2, 1) 0.7s both; }
  .a-ring { background-color: transparent; width: 140px; height: 140px; top: 80px; left: 105px; border: 35px solid #ffffff; border-radius: 50%; animation: wipeLeftToRight 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.9s both; }
  .a-stem { width: 35px; height: 140px; top: 80px; left: 220px; animation: wipeTopToBottom 0.4s cubic-bezier(0.4, 0, 0.2, 1) 1.2s both; }
  .k-stem { width: 35px; height: 185px; top: 35px; left: 280px; animation: wipeTopToBottom 0.4s cubic-bezier(0.4, 0, 0.2, 1) 1.4s both; }
  .k-arms { width: 95px; height: 140px; top: 80px; left: 315px; clip-path: polygon(0 45px, 45px 0, 95px 0, 25px 70px, 95px 140px, 45px 140px, 0 95px); animation: drawKArms 0.5s cubic-bezier(0.4, 0, 0.2, 1) 1.7s both; }
  .spaces-text { position: absolute; top: 235px; left: 30px; width: 380px; display: flex; justify-content: space-between; color: #ffffff; font-size: 70px; font-weight: 600; animation: spacesTimeline 2s linear 2.2s forwards; }

  /* INTRO KEYFRAMES */
  @keyframes wipeLeftToRight { 0% { clip-path: inset(0 100% 0 0); } 100% { clip-path: inset(0 0 0 0); } }
  @keyframes wipeTopToBottom { 0% { clip-path: inset(0 0 100% 0); } 100% { clip-path: inset(0 0 0 0); } }
  @keyframes drawKArms { 0% { clip-path: polygon(0 45px, 0 45px, 0 45px, 0 70px, 0 95px, 0 95px, 0 95px); } 100% { clip-path: polygon(0 45px, 45px 0, 95px 0, 25px 70px, 95px 140px, 45px 140px, 0 95px); } }
  @keyframes spacesTimeline { 0% { opacity: 0; transform: translateY(15px); } 30% { opacity: 1; transform: translateY(0); } 80% { opacity: 1; transform: translateY(0); } 100% { opacity: 0; transform: translateY(0); visibility: hidden; } }
  @keyframes skylineTimeline { 0% { opacity: 0; transform: translateY(20px); } 31% { opacity: 0.2; transform: translateY(0); } 87% { opacity: 0.2; transform: translateY(0); } 100% { opacity: 0; transform: translateY(0); visibility: hidden; } }
  @keyframes moveToHeader { 0% { top: 50%; left: 50%; transform: translate(-50%, -50%) scale(1.2); } 100% { top: 50px; left: 60px; transform: translate(0, 0) scale(0.2); } }
  @keyframes fadeInHero { 0% { opacity: 0; } 100% { opacity: 1; } }
  @keyframes slideTextFadeUp { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0); } }


  /* --- RESPONSIVE BREAKPOINTS --- */
  @media (max-width: 1024px) {
      /* Intro Responsive */
      .intro-container { display: flex; flex-direction: column; gap: 3rem; }
      .intro-left, .intro-right { width: 100%; }
      .intro-image-wrap { aspect-ratio: 16/9; max-height: 500px; }
      .intro-title { font-size: 3.5rem; }
      
      .stats-header, .portfolio-header { flex-direction: column; align-items: flex-start; gap: 2rem; margin-bottom: 3rem; }
      .section-title { width: 100%; font-size: 3.5rem; }
      .stats-desc-wrapper { width: 100%; }
      .stats-grid { grid-template-columns: repeat(2, 1fr); }
      
      .carousel-container { flex-direction: column; }
      .carousel-left { width: 100%; padding-right: 0; }
      .carousel-right { width: 100%; }
      .carousel-item { width: 80%; height: 450px; }

      .port-item.large, .port-item.normal { grid-column: span 6; }
      
      /* Contact Footer Responsive */
      .contact-container { display: flex; flex-direction: column; gap: 3rem; padding-bottom: 60px; margin-bottom: 60px; }
      .contact-left, .contact-right { width: 100%; }
      .contact-title { font-size: 3.5rem; }
      .footer-container { flex-direction: column; gap: 3rem; }

      .main-header { padding: 0 30px; top: 30px; }
      .header-center { gap: 20px; padding: 6px 20px; }
      .slide-title { font-size: 48px; }
      .slider-controls { right: 30px; }
      @keyframes moveToHeader { 0% { top: 50%; left: 50%; transform: translate(-50%, -50%) scale(1.2); } 100% { top: 30px; left: 30px; transform: translate(0, 0) scale(0.2); } }
  }

  @media (max-width: 768px) {
      /* Intro Mobile */
      .intro-stats-grid { grid-template-columns: repeat(2, 1fr); gap: 2rem; }
      .intro-title { font-size: 2.5rem; }
      .intro-subtitle { font-size: 1.25rem; }
      .intro-quote-text { font-size: 1.25rem; }
      .intro-image-wrap { aspect-ratio: 4/5; max-height: none; }

      .stats-section, .portfolio-section, .carousel-section, .contact-footer-section { padding: 60px 5vw; }
      .section-title { font-size: 2.5rem; }
      .stats-grid { grid-template-columns: 1fr; gap: 1.5rem; }
      
      .carousel-item { width: 90%; height: 400px; }
      
      .port-item.large, .port-item.normal { grid-column: span 12; }
      .portfolio-grid { gap: 2rem; }
      
      /* Contact Footer Mobile */
      .contact-title { font-size: 2.5rem; }
      .footer-links { flex-direction: column; gap: 2rem; }

      .header-center { display: none; }
      .header-right { width: auto; flex: none; }
      .header-left { width: 60px; flex: none; }
      .main-header { top: 20px; padding: 0 20px; }
      .logo-wrapper { transform: translate(-50%, -50%) scale(0.7); }
      @keyframes moveToHeader { 0% { top: 50%; left: 50%; transform: translate(-50%, -50%) scale(0.7); } 100% { top: 20px; left: 20px; transform: translate(0, 0) scale(0.12); } }
      .slide-content-wrapper { left: 20px; right: 20px; bottom: 120px; top: auto; transform: none; }
      .slide-title { font-size: 36px; margin-bottom: 15px; }
      .slide-desc { font-size: 14px; max-width: 100%; }
      .spaces-text { font-size: 45px; top: 210px; left: 35px; width: 250px; }
      .slider-controls { right: 20px; bottom: 20px; top: auto; transform: none; flex-direction: row-reverse; width: calc(100% - 40px); justify-content: space-between; }
      .pagination { writing-mode: horizontal-tb; transform: none; }
      .nav-arrows { flex-direction: row; }
      .connect-btn { display: none; }
  }
`;

export default function App() {
  return (
    <>
      <style>{globalStyles}</style>
      <div className="app-container">
        <div className="hero-wrapper">
          <Skyline />
          <TakLogo />
          <HeroSection />
        </div>
        <Intro />
        <Another />
        <PortfolioGrid />
        <ContactFooter />
      </div>
    </>
  );
}