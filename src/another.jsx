import React, { useState, useEffect } from 'react';
import Features from './features';

// --- STYLES ---
const globalStyles = `
  /* Base Reset */
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  .app-container {
      position: relative;
      width: 100vw;
      height: 100vh;
      background-color: #060606; 
      overflow: hidden; 
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      color: white;
  }

  /* * ----------------------------------------
   * HERO SECTION & SLIDER
   * ----------------------------------------
   */
  .hero-section {
      position: absolute; 
      top: 0; left: 0; right: 0; bottom: 0;
      z-index: 10;
      opacity: 0;
      animation: fadeInHero 1.2s ease-in-out 4.3s forwards;
  }

  .slider-bg {
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background-size: cover;
      background-position: center;
      opacity: 0;
      transition: opacity 1.5s ease-in-out, transform 10s ease-out;
      z-index: 1;
      transform: scale(1.05);
  }

  .slider-bg.active {
      opacity: 1;
      transform: scale(1);
  }

  .slider-overlay {
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background: linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.1) 100%);
      z-index: 2;
  }

  /* --- HEADER LAYOUT --- */
  .main-header {
      position: absolute;
      top: 50px; /* Aligned with logo top destination */
      left: 0; right: 0;
      padding: 0 60px; /* Aligned with logo left destination */
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 100;
  }

  .header-left {
      width: 150px; 
  }

  .header-center {
      display: flex;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border-radius: 40px;
      padding: 15px 30px;
      gap: 35px;
      border: 1px solid rgba(255,255,255,0.05);
      height: 50px;
  }

  .header-center a {
      color: #ffffff;
      text-decoration: none;
      font-weight: 500;
      font-size: 12px;
      letter-spacing: 1px;
      text-transform: uppercase;
      transition: color 0.3s;
  }

  .header-center a:hover { color: #E22028; }

  .header-right {
      display: flex;
      align-items: center;
      gap: 12px;
      width: 150px;
      justify-content: flex-end;
  }

  .icon-circle {
      width: 40px; height: 40px;
      border: 1px solid rgba(255,255,255,0.3);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.3s ease;
  }

  .icon-circle:hover { background: white; color: black; }

  .connect-btn {
      border: 1px solid rgba(255,255,255,0.3);
      background: transparent;
      color: white;
      padding: 10px 24px;
      border-radius: 30px;
      font-size: 10px;
      font-weight: 600;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      cursor: pointer;
      transition: all 0.3s ease;
  }

  .connect-btn:hover { background: white; color: black; }

  /* --- SLIDER CONTENT --- */
  .slide-content-wrapper {
      position: absolute;
      left: 10vw;
      top: 50%;
      transform: translateY(-50%);
      z-index: 10;
      max-width: 650px;
      padding-right: 20px;
  }

  .slide-inner {
      animation: slideTextFadeUp 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
  }

  .slide-meta {
      font-size: 10px;
      letter-spacing: 2px;
      color: #aaaaaa;
      text-transform: uppercase;
      margin-bottom: 20px;
  }

  .slide-subtitle {
      font-size: 11px;
      letter-spacing: 1.5px;
      color: #dddddd;
      text-transform: uppercase;
      margin-bottom: 8px;
  }

  .slide-title {
      font-size: 64px;
      font-weight: 400;
      letter-spacing: -1px;
      line-height: 1.1;
      margin-bottom: 20px;
      font-family: serif;
  }

  .slide-desc {
      font-size: 15px;
      line-height: 1.6;
      color: #cccccc;
      max-width: 500px;
  }

  /* --- SLIDER CONTROLS --- */
  .slider-controls {
      position: absolute;
      right: 60px;
      top: 50%;
      transform: translateY(-50%);
      z-index: 10;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 25px;
  }

  .pagination {
      font-size: 12px;
      letter-spacing: 2px;
      color: white;
      writing-mode: vertical-rl;
      transform: rotate(180deg);
  }

  .nav-arrows {
      display: flex;
      flex-direction: column;
      gap: 10px;
  }

  .nav-arrows button {
      background: transparent;
      border: 1px solid rgba(255,255,255,0.2);
      color: white;
      border-radius: 50%;
      width: 40px; height: 40px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.3s;
  }

  .nav-arrows button:hover { background: white; color: black; }

  /* * ----------------------------------------
   * INTRO ANIMATIONS & LOGO
   * ----------------------------------------
   */
  .skyline {
      position: absolute;
      right: 5vw;
      bottom: 0;
      height: 150px;
      display: flex;
      align-items: flex-end;
      gap: 4px;
      z-index: 1;
      animation: skylineTimeline 3.2s linear 1s forwards;
  }

  .building {
      background-color: #222;
      background-image: radial-gradient(circle at 2px 2px, #444 1px, transparent 1px);
      background-size: 8px 10px;
  }
  .b1 { width: 20px; height: 100px; }
  .b2 { width: 30px; height: 150px; }
  .b3 { width: 25px; height: 120px; }
  .b4 { width: 35px; height: 80px; }
  .b5 { width: 30px; height: 140px; }

  .logo-wrapper {
      position: absolute;
      top: 50%;
      left: 50%;
      /* Initially centered with translate offsets */
      transform: translate(-50%, -50%) scale(1.2);
      transform-origin: top left;
      z-index: 1000;
      animation: moveToHeader 1.2s cubic-bezier(0.76, 0, 0.24, 1) 4.3s forwards;
  }

  .logo-container {
      position: relative;
      width: 410px;
      height: 310px; 
  }

  .logo-part { position: absolute; background-color: #ffffff; }

  .red-dot { background-color: #E22028; width: 35px; height: 35px; top: 35px; rotate: 90deg; left: 30px; border-radius: 0 100% 0 0; animation: wipeLeftToRight 0.4s cubic-bezier(0.4, 0, 0.2, 1) both; }
  .t-crossbar { width: 100px; height: 35px; top: 80px; left: 0; animation: wipeLeftToRight 0.4s cubic-bezier(0.4, 0, 0.2, 1) 0.2s both; }
  .t-stem-straight { width: 35px; height: 60px; top: 90px; left: 30px; animation: wipeTopToBottom 0.4s cubic-bezier(0.4, 0, 0.2, 1) 0.4s both; }
  .t-stem-hook { background-color: transparent; width: 70px; height: 70px; top: 150px; left: 30px; border-left: 35px solid #ffffff; border-bottom: 35px solid #ffffff; border-bottom-left-radius: 70px; animation: wipeTopToBottom 0.4s cubic-bezier(0.4, 0, 0.2, 1) 0.7s both; }
  .a-ring { background-color: transparent; width: 140px; height: 140px; top: 80px; left: 105px; border: 35px solid #ffffff; border-radius: 50%; animation: wipeLeftToRight 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.9s both; }
  .a-stem { width: 35px; height: 140px; top: 80px; left: 220px; animation: wipeTopToBottom 0.4s cubic-bezier(0.4, 0, 0.2, 1) 1.2s both; }
  .k-stem { width: 35px; height: 185px; top: 35px; left: 280px; animation: wipeTopToBottom 0.4s cubic-bezier(0.4, 0, 0.2, 1) 1.4s both; }
  .k-arms { width: 95px; height: 140px; top: 80px; left: 315px; clip-path: polygon(0 45px, 45px 0, 95px 0, 25px 70px, 95px 140px, 45px 140px, 0 95px); animation: drawKArms 0.5s cubic-bezier(0.4, 0, 0.2, 1) 1.7s both; }

  .spaces-text {
      position: absolute;
      top: 235px;
      left: 30px; 
      width: 380px; 
      display: flex;
      justify-content: space-between;
      color: #ffffff;
      font-size: 70px;
      font-weight: 600;
      animation: spacesTimeline 2s linear 2.2s forwards;
  }

  /* KEYFRAMES */
  @keyframes wipeLeftToRight { 0% { clip-path: inset(0 100% 0 0); } 100% { clip-path: inset(0 0 0 0); } }
  @keyframes wipeTopToBottom { 0% { clip-path: inset(0 0 100% 0); } 100% { clip-path: inset(0 0 0 0); } }
  @keyframes drawKArms { 0% { clip-path: polygon(0 45px, 0 45px, 0 45px, 0 70px, 0 95px, 0 95px, 0 95px); } 100% { clip-path: polygon(0 45px, 45px 0, 95px 0, 25px 70px, 95px 140px, 45px 140px, 0 95px); } }
  @keyframes spacesTimeline { 0% { opacity: 0; transform: translateY(15px); } 30% { opacity: 1; transform: translateY(0); } 80% { opacity: 1; transform: translateY(0); } 100% { opacity: 0; transform: translateY(0); visibility: hidden; } }
  @keyframes skylineTimeline { 0% { opacity: 0; transform: translateY(20px); } 31% { opacity: 0.2; transform: translateY(0); } 87% { opacity: 0.2; transform: translateY(0); } 100% { opacity: 0; transform: translateY(0); visibility: hidden; } }
  
  /* * MODIFIED: Precision positioning for the header shift
   * top: 50px aligns with main-header top
   * left: 60px aligns with main-header horizontal padding
   */
  @keyframes moveToHeader { 
      0% { 
          top: 50%; 
          left: 50%; 
          transform: translate(-50%, -50%) scale(1.2); 
      } 
      100% { 
          top: 50px; 
          left: 60px; 
          transform: translate(0, 0) scale(0.2); 
      } 
  }
  @keyframes fadeInHero { 0% { opacity: 0; } 100% { opacity: 1; } }
  @keyframes slideTextFadeUp { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0); } }

  /* * ----------------------------------------
   * RESPONSIVE BREAKPOINTS
   * ----------------------------------------
   */

  /* TABLET */
  @media (max-width: 1024px) {
      .main-header { padding: 0 30px; top: 30px; }
      .header-center { gap: 20px; padding: 6px 20px; }
      .slide-title { font-size: 48px; }
      .slider-controls { right: 30px; }
      @keyframes moveToHeader { 
          0% { top: 50%; left: 50%; transform: translate(-50%, -50%) scale(1.2); } 
          100% { top: 30px; left: 30px; transform: translate(0, 0) scale(0.2); } 
      }
  }

  /* MOBILE */
  @media (max-width: 768px) {
      .header-center { display: none; }
      .header-right { width: auto; }
      .header-left { width: 60px; }
      .main-header { top: 20px; padding: 0 20px; }
      
      .logo-wrapper { transform: translate(-50%, -50%) scale(0.7); }
      @keyframes moveToHeader { 
          0% { top: 50%; left: 50%; transform: translate(-50%, -50%) scale(0.7); } 
          100% { top: 20px; left: 20px; transform: translate(0, 0) scale(0.12); } 
      }

      .slide-content-wrapper { left: 20px; right: 20px; bottom: 120px; top: auto; transform: none; }
      .slide-title { font-size: 36px; margin-bottom: 15px; }
      .slide-desc { font-size: 14px; max-width: 100%; }
      .spaces-text { font-size: 45px; top: 210px; left: 35px; width: 250px; }
      
      .slider-controls { 
          right: 20px; 
          bottom: 20px; 
          top: auto; 
          transform: none; 
          flex-direction: row-reverse; 
          width: calc(100% - 40px);
          justify-content: space-between;
      }
      .pagination { writing-mode: horizontal-tb; transform: none; }
      .nav-arrows { flex-direction: row; }
      
      .hero-section { padding-left: 0; }
      .connect-btn { display: none; }
  }
`;

// --- DATA ---
const slides = [
  {
    meta: "2024 / RESIDENTIAL / NAGPUR, INDIA",
    subtitle: "RESIDENTIAL",
    title: "HOUSE OF TRAILS",
    desc: "House Of Trails - a bespoke residence where architecture becomes a daily experience, allowing natural light, open volumes, and curated materiality into the rhythm of home.",
    bg: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80')"
  },
  {
    meta: "2025 / INTERIOR / NAGPUR, INDIA",
    subtitle: "RESIDENTIAL INTERIOR",
    title: "ARCHED HOME, NAGPUR",
    desc: "A thoughtfully designed private residence where contemporary elegance meets everyday warmth - refined surfaces, and spaces that breathe.",
    bg: "url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1920&q=80')"
  },
  {
    meta: "2025 / INTERIOR / NAGPUR, INDIA",
    subtitle: "RESIDENTIAL INTERIOR",
    title: "THE FRANCIS HOUSE",
    desc: "A private residence where contemporary elegance meets everyday warmth - refined surfaces, ambient lighting, and spaces that breathe.",
    bg: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80')"
  }
];

// --- COMPONENTS ---

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
        <div 
          key={index} 
          className={`slider-bg ${index === current ? 'active' : ''}`}
          style={{ backgroundImage: slide.bg }}
        />
      ))}
      <div className="slider-overlay"></div>

      <header className="main-header">
        <div className="header-left"></div> 
        
        <nav className="header-center">
          <a href="#projects">Projects</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#calculator">Calculator</a>
        </nav>

        <div className="header-right">
          <div className="icon-circle">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </div>
          <div className="icon-circle">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
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
        <div className="pagination">
          0{current + 1} &mdash; 0{slides.length}
        </div>
        <div className="nav-arrows">
          <button onClick={prevSlide}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          <button onClick={nextSlide}>
             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>
      </div>
    </section>
  );
};

// --- MAIN APP ---
export default function App() {
  return (
    <div className="w-100vh h-100vh">
      <style>{globalStyles}</style>
      <div className="app-container">
        <Skyline />
        <TakLogo />
        <HeroSection />
        
      </div>
    </div>
  );
}