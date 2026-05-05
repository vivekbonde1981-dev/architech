import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Hero from './hero'
import TakLogo from './taklogo'

function App() {
  // const containerRef = useRef(null)
  // const { scrollYProgress } = useScroll({
  //   target: containerRef,
  //   offset: ["0px", "700px"]
  // })

  // // Exterior: scale up and fade to opacity 0 (invisible forever)
  // const exteriorScale = useTransform(scrollYProgress, [0, 1], [1, 2.2])
  // const exteriorOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0])

  // // Interior: fade in and stay visible
  // const interiorOpacity = useTransform(scrollYProgress, [0, 1], [0, 1])

  // return (
  //   <div ref={containerRef} className='w-[100vw]'>
  //     {/* Exterior Image - Scales up and fades out */}
  //     <motion.div 
  //       className='exterior fixed top-0 left-0 w-full h-screen overflow-hidden z-10'
  //       style={{ opacity: exteriorOpacity }}
  //     >
  //       <motion.img 
  //         src="exteriors.png" 
  //         alt="exterior" 
  //         className='w-full h-full object-cover'
  //         style={{ scale: exteriorScale ,marginTop: '100px' }}
  //       />
  //     </motion.div>

  //     {/* Interior Image - Fades in and stays visible */}
  //     <motion.div 
  //       className='interior fixed top-0 left-0 w-full h-screen overflow-hidden z-0'
  //       style={{ opacity: interiorOpacity }}
  //     >
  //       <img src="interior.png" alt="interior" className='w-full h-full object-cover' />
  //     </motion.div>

  //     {/* Scroll trigger area */}
  //     <div className='h-[200vh]' />
  //   </div>
  // )

  return(
    <TakLogo />
  )
}

export default App
