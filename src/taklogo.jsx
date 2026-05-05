import React, { useEffect, useRef } from "react";
import gsap from "gsap";


const TakLogo = () => {
  const componentRef = useRef(null);

  useEffect(() => {
    // gsap.context ensures smooth cleanup in React (prevents double-firing in Strict Mode)
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // 1. Fade in the background skyline subtly
      tl.from(".building", {
        y: 20,
        opacity: 0,
        stagger: 0.05,
        duration: 1.2,
        ease: "power2.out",
      })

        // 2. Staggered slide-up for the white letters
        .from(
          ".logo-part:not(.red-dot)",
          {
            y: 40,
            opacity: 0,
            stagger: 0.04,
            duration: 0.8,
          },
          "-=0.8",
        ) // Overlap with the skyline animation

        // 3. The Signature Red Dot Elastic Pop
        .from(
          ".red-dot",
          {
            scale: 0,
            rotation: -45,
            transformOrigin: "bottom left",
            duration: 1,
            ease: "elastic.out(1, 0.4)",
          },
          "-=0.4",
        );

      // 4. Subtle idle breathing effect for the red dot
      gsap.to(".red-dot", {
        y: -4,
        duration: 2,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        delay: 2, // Wait for entry animation to finish
      });
    }, componentRef);

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <div className="scene" ref={componentRef}>
      <style>{`
                /* TakLogo.css */
.scene {
    position: relative;
    width: 800px;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #060606;
    overflow: hidden;
}

.skyline {
    position: absolute;
    right: 50px;
    bottom: 0;
    height: 200px;
    width: 250px;
    display: flex;
    align-items: flex-end;
    gap: 4px;
    opacity: 0.2;
    z-index: 1;
}

.building {
    background-color: #222;
    background-image: radial-gradient(circle at 2px 2px, #444 1px, transparent 1px);
    background-size: 8px 10px;
}

.b1 { width: 30px; height: 120px; }
.b2 { width: 45px; height: 180px; }
.b3 { width: 35px; height: 140px; }
.b4 { width: 50px; height: 90px; }
.b5 { width: 40px; height: 160px; }
.b6 { width: 25px; height: 110px; }

.logo-container {
    position: relative;
    width: 390px;
    height: 220px;
    z-index: 2;
    transform: scale(1.2); 
}

.logo-part {
    position: absolute;
    background-color: #ffffff; 
}

.red-dot {
    background-color: #E22028; 
    width: 35px;
    height: 35px;
    top: 0;
    left: 30px; 
    border-radius: 0 100% 0 0; 
}

.t-crossbar { width: 100px; height: 35px; top: 80px; left: 0; }
.t-stem-straight { width: 35px; height: 110px; top: 40px; left: 30px; }
.t-stem-hook {
    background-color: transparent;
    width: 70px; height: 70px; top: 150px; left: 30px;
    border-left: 35px solid #ffffff;
    border-bottom: 35px solid #ffffff;
    border-bottom-left-radius: 70px; 
}

.a-ring {
    background-color: transparent;
    width: 140px; height: 140px; top: 80px; left: 105px; 
    border: 35px solid #ffffff; border-radius: 50%; 
}
.a-stem { width: 35px; height: 140px; top: 80px; left: 220px; }

.k-stem { width: 35px; height: 220px; top: 2px; left: 280px; }
.k-arms {
    width: 95px; height: 140px; top: 80px; left: 315px;
    clip-path: polygon(
        0 45px, 45px 0, 95px 0, 25px 70px, 
        95px 140px, 45px 140px, 0 95px 
    );
}
            `}</style>

      <div className="skyline">
        <div className="building b1"></div>
        <div className="building b2"></div>
        <div className="building b3"></div>
        <div className="building b4"></div>
        <div className="building b5"></div>
        <div className="building b6"></div>
      </div>

      <div className="logo-container">
        {/* The 't' components */}
        <div className="logo-part red-dot"></div>
        <div className="logo-part t-crossbar"></div>
        <div className="logo-part t-stem-straight"></div>
        <div className="logo-part t-stem-hook"></div>

        {/* The 'a' components */}
        <div className="logo-part a-ring"></div>
        <div className="logo-part a-stem"></div>

        {/* The 'k' components */}
        <div className="logo-part k-stem"></div>
        <div className="logo-part k-arms"></div>
      </div>
    </div>
  );
};

export default TakLogo;
