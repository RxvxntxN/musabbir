// "use client"; // Required for using onClick handlers

// import { motion } from "framer-motion";

// export default function SimpleScrollPage() {
//   // This is the function that performs the scroll
//   const scrollToSection = () => {
//     // Find the element on the page with the ID "target-section"
//     const element = document.getElementById("end-Section");
    
//     // If the element exists, scroll to it smoothly
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <div>
//       {/* 1. The Navigation Link */}
//       <nav style={{ position: 'sticky', top: 0, background: '#f0f0f0', padding: '1rem', zIndex: 10 }}>
//         <motion.button
//           // The onClick calls our scroll function
//           onClick={scrollToSection}
          
//           // These are simple Framer Motion animations for the button itself
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
          
//           style={{ 
//             background: 'teal', 
//             color: 'white', 
//             border: 'none', 
//             padding: '10px 20px', 
//             cursor: 'pointer', 
//             borderRadius: '5px',
//             fontWeight: 'bold'
//           }}
//         >
//           Scroll to Section
//         </motion.button>
//       </nav>

//       {/* Some placeholder content to make the page scrollable */}
//       <div style={{ height: '150vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>
//         <p>Keep scrolling down...</p>
//       </div>

//       {/* 2. The Target Section */}
//       <section
//         // This ID is CRUCIAL. It must match the ID in our function.
//         id="target-section" 
        
//         style={{ 
//           height: '100vh', 
//           background: '#2d3748', 
//           color: 'white', 
//           display: 'flex', 
//           alignItems: 'center', 
//           justifyContent: 'center', 
//           fontSize: '3rem' 
//         }}
//       >
//         <h2>You've Arrived!</h2>
//       </section>

//       {/* More content after the section */}
//       <div id="end-Section" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>
//         <p>This is the end.</p>
//       </div>
//     </div>
//   );
// }

// {-------------------------------------------------------------------------------------------}

// "use client";
// import { motion } from "framer-motion";

// const AutoScrollMarquee = () => {
//   const items = ["React", "TypeScript", "Next.js", "Framer Motion", "Tailwind CSS", "Node.js"];

//   return (
//     <div className="relative overflow-hidden py-8">
//       <div className="absolute inset-0 z-10 pointer-events-none" />
      
//       <motion.div
//         className="flex gap-8"
//         animate={{ x: ["0%", "-50%"] }}
//         transition={{
//           x: {
//             repeat: Infinity,
//             duration: 20,
//             ease: "linear",
//           },
//         }}
//       >
//         {/* Double the items for seamless looping */}
//         {[...items, ...items].map((item, index) => (
//           <div
//             key={index}
//             className="px-6 py-3 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-lg shadow-lg whitespace-nowrap"
//           >
//             {item}
//           </div>
//         ))}
//       </motion.div>
//     </div>
//   );
// };

// export default AutoScrollMarquee;

// {-------------------------------------------------------------------------------------------}

// "use client";
// import { motion, AnimatePresence } from "framer-motion";
// import { useState, useEffect } from "react";

// const AutoScrollCarousel = () => {
//   const testimonials = [
//     { id: 1, text: "Amazing work!", author: "Client A" },
//     { id: 2, text: "Highly professional", author: "Client B" },
//     { id: 3, text: "Exceeded expectations", author: "Client C" },
//     { id: 4, text: "Will work again", author: "Client D" },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % testimonials.length);
//     }, 3000); // Change every 3 seconds

//     return () => clearInterval(interval);
//   }, [testimonials.length]);

//   return (
//     <div className="sticky h-40 w-full max-w-lg mx-auto overflow-hidden">
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={currentIndex}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -20 }}
//           transition={{ duration: 0.5 }}
//           className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-white dark:bg-stone-800 rounded-xl shadow-lg"
//         >
//           <p className="text-lg italic text-gray-700 dark:text-gray-200 text-center">
//             "{testimonials[currentIndex].text}"
//           </p>
//           <p className="mt-4 font-semibold text-teal-600 dark:text-teal-400">
//             - {testimonials[currentIndex].author}
//           </p>
//         </motion.div>
//       </AnimatePresence>

//       {/* Dots indicator */}
//       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
//         {testimonials.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={`w-2 h-2 rounded-full transition-all ${
//               index === currentIndex
//                 ? "bg-teal-500 w-6"
//                 : "bg-gray-300 dark:bg-gray-600"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AutoScrollCarousel;

// {-------------------------------------------------------------------------------------------}

// "use client";
// import { motion } from "framer-motion";

// const InfiniteVerticalScroll = () => {
//   const newsItems = [
//     "🔥 New Project: AI Chat Application",
//     "🚀 Just launched my portfolio v2.0",
//     "📚 Learning Three.js for 3D web experiences",
//     "🏆 Won Best UI/UX Design Award 2024",
//   ];

//   return (
//     <div className="relative h-12 overflow-hidden">
//       <motion.div
//         className="flex flex-col"
//         animate={{ y: [40, -90] }}
//         transition={{
//           y: {
//             repeat: Infinity,
//             duration: 20,
//             ease: "linear",
//           },
//         }}
//       >
//         {/* Double the items for seamless loop */}
//         {[...newsItems, ...newsItems].map((item, index) => (
//           <div
//             key={index}
//             className="h-12 flex items-center px-4 text-gray-600 dark:text-gray-300 border-b border-gray-100 dark:border-stone-700"
//           >
//             <span className="mr-2">•</span>
//             {item}
//           </div>
//         ))}
//       </motion.div>
//     </div>
//   );
// };

// export default InfiniteVerticalScroll;

// {-------------------------------------------------------------------------------------------}

// "use client";
// import { motion, useAnimation } from "framer-motion";
// import { useRef, useEffect } from "react";

// const InteractiveAutoScroll = () => {
//   const controls = useAnimation();
//   const containerRef = useRef<HTMLDivElement>(null);
//   const contentRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (containerRef.current && contentRef.current) {
//       const containerHeight = containerRef.current.clientHeight;
//       const contentHeight = contentRef.current.scrollHeight;
//       const scrollDistance = contentHeight - containerHeight;

//       if (scrollDistance > 0) {
//         controls.start({
//           y: -scrollDistance,
//           transition: {
//             duration: 20,
//             ease: "linear",
//             repeat: Infinity,
//             repeatType: "loop",
//           },
//         });
//       }
//     }
//   }, [controls]);

//   const handleHoverStart = () => controls.pause();
//   const handleHoverEnd = () => controls.resume();

//   const techStack = [
//     "React", "Next.js", "TypeScript", "Tailwind CSS", 
//     "Node.js", "Express", "MongoDB", "PostgreSQL",
//     "GraphQL", "Redis", "Docker", "AWS",
//     "Git", "Jest", "Cypress", "Webpack"
//   ];

//   return (
//     <div
//       ref={containerRef}
//       className="relative h-64 overflow-hidden rounded-lg bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-stone-800 dark:to-stone-900 p-4"
//       onMouseEnter={handleHoverStart}
//       onMouseLeave={handleHoverEnd}
//     >
//       <h3 className="text-lg font-semibold text-teal-800 dark:text-teal-300 mb-4">
//         Tech Stack (Hover to pause)
//       </h3>
      
//       <motion.div
//         ref={contentRef}
//         animate={controls}
//         className="flex flex-col gap-3"
//       >
//         {techStack.map((tech, index) => (
//           <div
//             key={index}
//             className="px-4 py-2 bg-white/80 dark:bg-stone-700/80 backdrop-blur-sm rounded-lg shadow-sm"
//           >
//             {tech}
//           </div>
//         ))}
//       </motion.div>

//       {/* Gradient overlays for fade effect */}
//       <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-teal-50/100 to-transparent dark:from-stone-800/100 pointer-events-none" />
//       <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-teal-50/100 to-transparent dark:from-stone-800/100 pointer-events-none" />
//     </div>
//   );
// };

// export default InteractiveAutoScroll;

// {-------------------------------------------------------------------------------------------}

// "use client";
// import { motion, useMotionValue, animate } from "framer-motion";
// import { useState, useEffect, useRef, useCallback } from "react";
// import { Play, Pause, RotateCcw } from "lucide-react";

// interface TimelineItem {
//   year: string;
//   event: string;
// }

// const ControlledAutoScroll = () => {
//   const [isPlaying, setIsPlaying] = useState<boolean>(true);
//   const y = useMotionValue(0);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const contentRef = useRef<HTMLDivElement>(null);
//   const animationRef = useRef<ReturnType<typeof animate> | null>(null);

//   const timelineItems: TimelineItem[] = [
//     { year: "2020", event: "Started learning web development" },
//     { year: "2021", event: "First freelance project" },
//     { year: "2022", event: "Landed first full-time job" },
//     { year: "2023", event: "Promoted to Senior Developer" },
//     { year: "2024", event: "Started own agency" },
//     { year: "2025", event: "Expanded to international clients" },
//     { year: "2026", event: "Open source contributions" },
//   ];

//   const startAnimation = useCallback(() => {
//     if (!containerRef.current || !contentRef.current) return;

//     const containerHeight = containerRef.current.clientHeight;
//     const contentHeight = contentRef.current.scrollHeight;
//     const scrollDistance = contentHeight - containerHeight;

//     if (scrollDistance <= 0) return;

//     // Stop any existing animation
//     if (animationRef.current) {
//       animationRef.current.stop();
//     }

//     // Start new animation
//     animationRef.current = animate(y, -scrollDistance, {
//       duration: 30,
//       ease: "linear",
//       repeat: Infinity,
//       repeatType: "loop",
//       onRepeat: () => {
//         y.set(0);
//       },
//     });
//   }, [y]);

//   const stopAnimation = useCallback(() => {
//     if (animationRef.current) {
//       animationRef.current.stop();
//       animationRef.current = null;
//     }
//   }, []);

//   useEffect(() => {
//     if (isPlaying) {
//       startAnimation();
//     } else {
//       stopAnimation();
//     }

//     return () => {
//       stopAnimation();
//     };
//   }, [isPlaying, startAnimation, stopAnimation]);

//   const handleReset = () => {
//     stopAnimation();
//     y.set(0);
//     if (isPlaying) {
//       // Restart animation after a brief delay
//       setTimeout(() => {
//         startAnimation();
//       }, 50);
//     }
//   };

//   const handlePlayPause = () => {
//     if (isPlaying) {
//       stopAnimation();
//     } else {
//       startAnimation();
//     }
//     setIsPlaying(!isPlaying);
//   };

//   return (
//     <div className="space-y-4 p-4">
//       <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
//         Career Timeline
//       </h3>
      
//       <div
//         ref={containerRef}
//         className="relative h-80 overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-stone-800 dark:to-stone-900 border border-blue-100 dark:border-stone-700"
//       >
//         <motion.div
//           ref={contentRef}
//           style={{ y }}
//           className="p-6"
//         >
//           <div className="space-y-8">
//             {timelineItems.map((item, index) => (
//               <div key={index} className="relative pl-6">
//                 {/* Timeline dot */}
//                 <div className="absolute left-0 top-1 w-3 h-3 bg-blue-500 rounded-full transform -translate-x-1/2" />
//                 {/* Timeline line */}
//                 <div className="absolute left-0 top-4 w-0.5 h-full bg-blue-200 dark:bg-blue-800 transform -translate-x-1/2" />
                
//                 <div className="ml-4">
//                   <div className="inline-block px-3 py-1 text-xs font-semibold text-white bg-blue-500 rounded-full">
//                     {item.year}
//                   </div>
//                   <div className="mt-2 text-gray-700 dark:text-gray-300">
//                     {item.event}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Gradient overlays */}
//         <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-blue-50 to-transparent dark:from-stone-800 to-transparent pointer-events-none" />
//         <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-blue-50 to-transparent dark:from-stone-800 to-transparent pointer-events-none" />

//         {/* Controls */}
//         <div className="absolute bottom-4 right-4 flex gap-2">
//           <button
//             onClick={handlePlayPause}
//             className="p-3 bg-white/90 dark:bg-stone-700/90 backdrop-blur-sm rounded-lg shadow-lg hover:scale-105 transition-transform hover:shadow-xl"
//             aria-label={isPlaying ? "Pause animation" : "Play animation"}
//           >
//             {isPlaying ? (
//               <Pause size={20} className="text-blue-600 dark:text-blue-400" />
//             ) : (
//               <Play size={20} className="text-blue-600 dark:text-blue-400" />
//             )}
//           </button>
//           <button
//             onClick={handleReset}
//             className="p-3 bg-white/90 dark:bg-stone-700/90 backdrop-blur-sm rounded-lg shadow-lg hover:scale-105 transition-transform hover:shadow-xl"
//             aria-label="Reset to top"
//           >
//             <RotateCcw size={20} className="text-blue-600 dark:text-blue-400" />
//           </button>
//         </div>
//       </div>

//       <div className="flex items-center justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
//         <div className="flex items-center gap-2">
//           <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
//           <span>Timeline point</span>
//         </div>
//         <div className="flex items-center gap-2">
//           {isPlaying ? (
//             <>
//               <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
//               <span>Auto-scrolling</span>
//             </>
//           ) : (
//             <>
//               <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
//               <span>Paused</span>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ControlledAutoScroll;

// "use client";
// import { motion, useAnimation, PanInfo } from "framer-motion";
// import { useRef, useState, useEffect, useCallback } from "react";

// const AdvancedInfiniteCarousel = () => {
//   const controls = useAnimation();
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [isDragging, setIsDragging] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);

//   const items = [
//     { id: 1, color: "bg-gradient-to-r from-rose-500 to-pink-500", text: "React Expert" },
//     { id: 2, color: "bg-gradient-to-r from-violet-500 to-purple-500", text: "Next.js Pro" },
//     { id: 3, color: "bg-gradient-to-r from-blue-500 to-cyan-500", text: "TypeScript" },
//     { id: 4, color: "bg-gradient-to-r from-emerald-500 to-teal-500", text: "Tailwind CSS" },
//     { id: 5, color: "bg-gradient-to-r from-amber-500 to-orange-500", text: "Framer Motion" },
//     { id: 6, color: "bg-gradient-to-r from-red-500 to-rose-500", text: "Full Stack" },
//   ];

//   // Double the items for infinite loop
//   const duplicatedItems = [...items, ...items, ...items];

//   // Auto-play animation
//   useEffect(() => {
//     if (!isAutoPlaying || isDragging) return;

//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => {
//         const next = prev + 1;
//         // Reset to middle section when reaching the end
//         if (next >= items.length * 2) {
//           return items.length; // Jump back to middle
//         }
//         return next;
//       });
//     }, 2000);

//     return () => clearInterval(interval);
//   }, [isAutoPlaying, isDragging, items.length]);

//   // Animate when currentIndex changes
//   useEffect(() => {
//     controls.start({
//       x: -currentIndex * 200, // 200px per item (gap + width)
//       transition: {
//         type: "spring",
//         stiffness: 300,
//         damping: 30,
//         mass: 1,
//       },
//     });
//   }, [currentIndex, controls]);

//   // Handle drag gesture
//   const handleDragEnd = useCallback(
//     (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
//       setIsDragging(false);
      
//       // If dragged enough, change slide
//       if (info.offset.x > 50) {
//         // Swiped right - go to previous
//         setCurrentIndex((prev) => {
//           const newIndex = prev - 1;
//           // If we go too far left, jump to middle
//           return newIndex < 0 ? items.length * 2 - 1 : newIndex;
//         });
//       } else if (info.offset.x < -50) {
//         // Swiped left - go to next
//         setCurrentIndex((prev) => {
//           const newIndex = prev + 1;
//           // If we go too far right, jump to middle
//           return newIndex >= items.length * 3 ? items.length : newIndex;
//         });
//       }
      
//       // Resume auto-play after dragging
//       setTimeout(() => setIsAutoPlaying(true), 3000);
//     },
//     [items.length]
//   );

//   // Handle wheel scroll
//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     const handleWheel = (e: WheelEvent) => {
//       if (isDragging) return;
      
//       e.preventDefault();
//       setIsAutoPlaying(false);
      
//       if (e.deltaX > 0 || e.deltaY > 0) {
//         // Scroll right/down
//         setCurrentIndex((prev) => {
//           const newIndex = prev + 1;
//           return newIndex >= items.length * 3 ? items.length : newIndex;
//         });
//       } else {
//         // Scroll left/up
//         setCurrentIndex((prev) => {
//           const newIndex = prev - 1;
//           return newIndex < 0 ? items.length * 2 - 1 : newIndex;
//         });
//       }
//     };

//     container.addEventListener("wheel", handleWheel, { passive: false });
//     return () => container.removeEventListener("wheel", handleWheel);
//   }, [isDragging, items.length]);

//   // Handle touch on mobile
//   const handleTouchStart = () => {
//     setIsDragging(true);
//     setIsAutoPlaying(false);
//   };

//   // Manual navigation buttons
//   const goToNext = () => {
//     setIsAutoPlaying(false);
//     setCurrentIndex((prev) => {
//       const newIndex = prev + 1;
//       return newIndex >= items.length * 3 ? items.length : newIndex;
//     });
//   };

//   const goToPrev = () => {
//     setIsAutoPlaying(false);
//     setCurrentIndex((prev) => {
//       const newIndex = prev - 1;
//       return newIndex < 0 ? items.length * 2 - 1 : newIndex;
//     });
//   };

//   // Jump to specific slide
//   const goToSlide = (index: number) => {
//     setIsAutoPlaying(false);
//     setCurrentIndex(index + items.length); // Jump to middle section
//   };

//   return (
//     <div className="w-full max-w-4xl mx-auto p-6">
//       <div className="mb-8 text-center">
//         <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
//           Advanced Infinite Carousel
//         </h2>
//         <p className="text-gray-600 dark:text-gray-400 mt-2">
//           Drag, swipe, scroll, or use buttons to navigate
//         </p>
//       </div>

//       <div className="relative">
//         {/* Controls */}
//         <div className="flex justify-between items-center mb-6">
//           <div className="flex items-center gap-4">
//             <button
//               onClick={() => setIsAutoPlaying(!isAutoPlaying)}
//               className={`px-4 py-2 rounded-lg font-semibold transition-all ${
//                 isAutoPlaying
//                   ? "bg-green-500 hover:bg-green-600 text-white"
//                   : "bg-gray-200 hover:bg-gray-300 dark:bg-stone-700 dark:hover:bg-stone-600 text-gray-800 dark:text-gray-200"
//               }`}
//             >
//               {isAutoPlaying ? "⏸️ Pause" : "▶️ Play"}
//             </button>
//             <span className="text-sm text-gray-500 dark:text-gray-400">
//               {isAutoPlaying ? "Auto-playing" : "Paused"} • Draggable
//             </span>
//           </div>
          
//           <div className="flex gap-2">
//             <button
//               onClick={goToPrev}
//               className="p-3 bg-white dark:bg-stone-800 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
//             >
//               ←
//             </button>
//             <button
//               onClick={goToNext}
//               className="p-3 bg-white dark:bg-stone-800 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
//             >
//               →
//             </button>
//           </div>
//         </div>

//         {/* Carousel Container */}
//         <div
//           ref={containerRef}
//           className="relative h-64 overflow-hidden rounded-2xl bg-gradient-to-r from-gray-50 to-gray-100 dark:from-stone-900 dark:to-stone-800 p-4 cursor-grab active:cursor-grabbing"
//         >
//           <motion.div
//             className="flex gap-6 h-full"
//             animate={controls}
//             drag="x"
//             dragConstraints={{ left: -1000, right: 1000 }}
//             onDragStart={() => {
//               setIsDragging(true);
//               setIsAutoPlaying(false);
//             }}
//             onDragEnd={handleDragEnd}
//             onTouchStart={handleTouchStart}
//             style={{ x: 0 }}
//           >
//             {duplicatedItems.map((item, index) => (
//               <motion.div
//                 key={`${item.id}-${index}`}
//                 className={`relative flex-shrink-0 w-48 rounded-xl ${item.color} p-6 shadow-2xl ${
//                   Math.floor(index - currentIndex) === 0
//                     ? "ring-4 ring-white/50 scale-105"
//                     : "opacity-80"
//                 }`}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <div className="text-white h-full flex flex-col justify-center items-center">
//                   <div className="text-4xl mb-4">✨</div>
//                   <h3 className="text-xl font-bold text-center">{item.text}</h3>
//                   <p className="text-white/80 text-sm mt-2">Slide {index % items.length + 1}</p>
//                 </div>
                
//                 {/* Index indicator */}
//                 <div className="absolute top-3 right-3 w-8 h-8 bg-black/20 rounded-full flex items-center justify-center text-white text-xs">
//                   {index + 1}
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>

//           {/* Gradient edges */}
//           <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent dark:from-stone-900 pointer-events-none" />
//           <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent dark:from-stone-900 pointer-events-none" />
//         </div>

//         {/* Dots indicator */}
//         <div className="flex justify-center gap-3 mt-8">
//           {items.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => goToSlide(index)}
//               className={`w-3 h-3 rounded-full transition-all ${
//                 (currentIndex - items.length) % items.length === index
//                   ? "bg-blue-500 w-8"
//                   : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
//               }`}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>

//         {/* Instructions */}
//         <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600 dark:text-gray-400">
//           <div className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-stone-800/50 rounded-lg">
//             <div className="w-8 h-8 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 rounded">
//               🖱️
//             </div>
//             <span>Drag left/right</span>
//           </div>
//           <div className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-stone-800/50 rounded-lg">
//             <div className="w-8 h-8 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 rounded">
//               ⚡
//             </div>
//             <span>Mouse wheel scroll</span>
//           </div>
//           <div className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-stone-800/50 rounded-lg">
//             <div className="w-8 h-8 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 rounded">
//               👆
//             </div>
//             <span>Touch swipe on mobile</span>
//           </div>
//         </div>

//         {/* Current position info */}
//         <div className="mt-6 text-center">
//           <p className="text-gray-700 dark:text-gray-300">
//             Current position:{" "}
//             <span className="font-bold text-blue-600 dark:text-blue-400">
//               {(currentIndex - items.length) % items.length + 1} / {items.length}
//             </span>
//             {" • "}
//             <span className="text-sm text-gray-500">
//               Real index: {currentIndex}
//             </span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdvancedInfiniteCarousel;

// {-------------------------------------------------------------------------------------------}

// "use client";
// import { motion, useAnimation, PanInfo, useMotionValue, animate } from "framer-motion";
// import { useRef, useState, useEffect, useCallback } from "react";

// const MomentumInfiniteCarousel = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [isDragging, setIsDragging] = useState(false);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);
//   const x = useMotionValue(0);
//   const velocity = useRef(0);
//   const lastDragTime = useRef(0);
//   const autoPlayAnimation = useRef<ReturnType<typeof animate>>();

//   const items = [
//     { id: 1, emoji: "⚛️", title: "React", desc: "Frontend Library" },
//     { id: 2, emoji: "🚀", title: "Next.js", desc: "Fullstack Framework" },
//     { id: 3, emoji: "📘", title: "TypeScript", desc: "Type Safe JavaScript" },
//     { id: 4, emoji: "🎨", title: "Tailwind", desc: "Utility-First CSS" },
//     { id: 5, emoji: "✨", title: "Framer Motion", desc: "Animation Library" },
//     { id: 6, emoji: "🗄️", title: "Node.js", desc: "Backend Runtime" },
//     { id: 7, emoji: "📱", title: "React Native", desc: "Mobile Development" },
//     { id: 8, emoji: "☁️", title: "AWS", desc: "Cloud Services" },
//   ];

//   // Duplicate items for infinite loop (front + back)
//   const duplicatedItems = [...items, ...items, ...items];
//   const itemWidth = 220; // Width of each item + gap
//   const totalOriginalWidth = items.length * itemWidth;

//   // Auto-play function
//   const startAutoPlay = useCallback(() => {
//     if (!isAutoPlaying || isDragging) return;
    
//     autoPlayAnimation.current = animate(x, x.get() - itemWidth, {
//       duration: 2,
//       ease: "linear",
//       onComplete: () => {
//         // Check if we need to loop back
//         const currentX = x.get();
//         if (Math.abs(currentX) >= totalOriginalWidth * 1.5) {
//           x.set(-totalOriginalWidth); // Jump back to middle
//         }
//         if (isAutoPlaying && !isDragging) {
//           startAutoPlay();
//         }
//       },
//     });
//   }, [isAutoPlaying, isDragging, x, itemWidth, totalOriginalWidth]);

//   // Stop auto-play
//   const stopAutoPlay = useCallback(() => {
//     if (autoPlayAnimation.current) {
//       autoPlayAnimation.current.stop();
//     }
//   }, []);

//   // Toggle auto-play
//   useEffect(() => {
//     if (isAutoPlaying && !isDragging) {
//       startAutoPlay();
//     } else {
//       stopAutoPlay();
//     }

//     return () => {
//       stopAutoPlay();
//     };
//   }, [isAutoPlaying, isDragging, startAutoPlay, stopAutoPlay]);

//   // Handle drag with momentum
//   const handleDragStart = () => {
//     setIsDragging(true);
//     stopAutoPlay();
//     lastDragTime.current = Date.now();
//   };

//   const handleDrag = (event: any, info: PanInfo) => {
//     // Update velocity based on drag speed
//     const currentTime = Date.now();
//     const deltaTime = currentTime - lastDragTime.current;
    
//     if (deltaTime > 0) {
//       velocity.current = info.delta.x / deltaTime;
//     }
    
//     lastDragTime.current = currentTime;
//   };

//   const handleDragEnd = (event: any, info: PanInfo) => {
//     setIsDragging(false);
    
//     // Calculate momentum (continues movement after release)
//     const momentum = velocity.current * 500; // Multiply velocity by factor
//     const targetX = x.get() + momentum;
    
//     // Animate with spring physics for the momentum
//     const momentumAnimation = animate(x, targetX, {
//       type: "spring",
//       stiffness: 100,
//       damping: 20,
//       velocity: velocity.current * 1000,
//       onUpdate: (latest) => {
//         // Check for infinite loop bounds
//         if (latest <= -totalOriginalWidth * 2) {
//           x.set(-totalOriginalWidth); // Jump to middle (from left)
//           momentumAnimation.stop();
//         } else if (latest >= 0) {
//           x.set(-totalOriginalWidth); // Jump to middle (from right)
//           momentumAnimation.stop();
//         }
//       },
//       onComplete: () => {
//         velocity.current = 0;
//         if (isAutoPlaying) {
//           setTimeout(() => startAutoPlay(), 1000); // Resume auto-play after momentum
//         }
//       },
//     });
    
//     velocity.current = 0;
//   };

//   // Handle wheel scroll with momentum
//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     const handleWheel = (e: WheelEvent) => {
//       e.preventDefault();
//       setIsAutoPlaying(false);
//       stopAutoPlay();
      
//       // Add wheel velocity
//       const wheelVelocity = e.deltaY * 0.5;
//       const newX = x.get() + wheelVelocity;
      
//       animate(x, newX, {
//         type: "spring",
//         stiffness: 200,
//         damping: 25,
//         velocity: wheelVelocity * 10,
//       });
//     };

//     container.addEventListener("wheel", handleWheel, { passive: false });
//     return () => container.removeEventListener("wheel", handleWheel);
//   }, [x, stopAutoPlay]);

//   // Manual navigation with momentum
//   const navigateWithMomentum = (direction: "left" | "right") => {
//     setIsAutoPlaying(false);
//     stopAutoPlay();
    
//     const moveDistance = direction === "left" ? itemWidth : -itemWidth;
//     const newX = x.get() + moveDistance;
    
//     animate(x, newX, {
//       type: "spring",
//       stiffness: 150,
//       damping: 20,
//       velocity: direction === "left" ? -500 : 500,
//     });
//   };

//   // Snap to nearest item
//   const snapToNearest = () => {
//     const currentX = x.get();
//     const nearestIndex = Math.round(-currentX / itemWidth) % items.length;
//     const targetX = -nearestIndex * itemWidth;
    
//     animate(x, targetX, {
//       type: "spring",
//       stiffness: 300,
//       damping: 30,
//     });
//   };

//   return (
//     <div className="w-full max-w-6xl mx-auto p-6">
//       <div className="mb-8 text-center">
//         <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">
//           Momentum Infinite Carousel
//         </h2>
//         <p className="text-gray-600 dark:text-gray-400">
//           Drag fast to see momentum effect • Items continue moving after release
//         </p>
//       </div>

//       {/* Controls */}
//       <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
//         <div className="flex items-center gap-4">
//           <button
//             onClick={() => setIsAutoPlaying(!isAutoPlaying)}
//             className={`px-4 py-2 rounded-lg font-semibold transition-all flex items-center gap-2 ${
//               isAutoPlaying
//                 ? "bg-emerald-500 hover:bg-emerald-600 text-white"
//                 : "bg-gray-200 hover:bg-gray-300 dark:bg-stone-700 dark:hover:bg-stone-600 text-gray-800 dark:text-gray-200"
//             }`}
//           >
//             {isAutoPlaying ? "⏸️ Pause Auto" : "▶️ Play Auto"}
//           </button>
          
//           <button
//             onClick={snapToNearest}
//             className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-colors"
//           >
//             🔍 Snap to Item
//           </button>
//         </div>
        
//         <div className="flex gap-3">
//           <button
//             onClick={() => navigateWithMomentum("left")}
//             className="w-12 h-12 bg-white dark:bg-stone-800 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center text-xl"
//           >
//             ←
//           </button>
//           <button
//             onClick={() => navigateWithMomentum("right")}
//             className="w-12 h-12 bg-white dark:bg-stone-800 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center text-xl"
//           >
//             →
//           </button>
//         </div>
//       </div>

//       {/* Carousel Container */}
//       <div
//         ref={containerRef}
//         className="relative h-72 overflow-hidden rounded-2xl bg-gradient-to-r from-gray-50 to-gray-100 dark:from-stone-900 dark:to-stone-800 p-6"
//       >
//         <motion.div
//           className="flex gap-6 h-full"
//           style={{ x }}
//           drag="x"
//           dragElastic={0.1}
//           dragConstraints={{ left: -totalOriginalWidth * 2, right: 0 }}
//           onDragStart={handleDragStart}
//           onDrag={handleDrag}
//           onDragEnd={handleDragEnd}
//           onTouchStart={handleDragStart}
//         >
//           {duplicatedItems.map((item, index) => {
//             const isInMiddleSection = index >= items.length && index < items.length * 2;
            
//             return (
//               <motion.div
//                 key={`${item.id}-${index}`}
//                 className={`relative flex-shrink-0 w-64 rounded-2xl p-6 shadow-xl ${
//                   isInMiddleSection 
//                     ? 'bg-gradient-to-br from-white to-gray-50 dark:from-stone-800 dark:to-stone-900'
//                     : 'bg-gradient-to-br from-gray-100 to-gray-200 dark:from-stone-900 dark:to-stone-800 opacity-70'
//                 } border border-gray-200 dark:border-stone-700`}
//                 whileHover={{ scale: 1.03 }}
//                 whileTap={{ scale: 0.98 }}
//               >
//                 <div className="flex flex-col items-center justify-center h-full text-center">
//                   <div className="text-5xl mb-4">{item.emoji}</div>
//                   <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
//                     {item.title}
//                   </h3>
//                   <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
                  
//                   {/* Velocity indicator */}
//                   {isDragging && (
//                     <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2">
//                       <div className="text-xs text-blue-500 font-mono">
//                         Vel: {velocity.current.toFixed(2)}
//                       </div>
//                     </div>
//                   )}
//                 </div>
                
//                 {/* Section indicator */}
//                 <div className={`absolute top-3 right-3 text-xs font-semibold px-2 py-1 rounded ${
//                   isInMiddleSection 
//                     ? 'bg-blue-500 text-white'
//                     : 'bg-gray-300 dark:bg-stone-700 text-gray-600 dark:text-gray-400'
//                 }`}>
//                   {index < items.length ? 'Front' : index < items.length * 2 ? 'Middle' : 'Back'}
//                 </div>
//               </motion.div>
//             );
//           })}
//         </motion.div>

//         {/* Gradient edges */}
//         <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent dark:from-stone-900 pointer-events-none" />
//         <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent dark:from-stone-900 pointer-events-none" />
//       </div>

//       {/* Physics Info Panel */}
//       <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl">
//         <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">
//           🚀 Physics Settings
//         </h3>
        
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           <div className="p-4 bg-white/50 dark:bg-stone-800/50 rounded-lg">
//             <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Current Velocity</div>
//             <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
//               {velocity.current.toFixed(2)}
//             </div>
//             <div className="text-xs text-gray-500 mt-1">px/ms (higher = more momentum)</div>
//           </div>
          
//           <div className="p-4 bg-white/50 dark:bg-stone-800/50 rounded-lg">
//             <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Auto-play</div>
//             <div className={`text-2xl font-bold ${isAutoPlaying ? 'text-green-600' : 'text-yellow-600'}`}>
//               {isAutoPlaying ? 'ACTIVE' : 'PAUSED'}
//             </div>
//             <div className="text-xs text-gray-500 mt-1">
//               {isDragging ? '(Dragging)' : '(Click items to drag)'}
//             </div>
//           </div>
          
//           <div className="p-4 bg-white/50 dark:bg-stone-800/50 rounded-lg">
//             <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Current Position</div>
//             <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
//               {Math.round(-x.get() / itemWidth) % items.length + 1} / {items.length}
//             </div>
//             <div className="text-xs text-gray-500 mt-1">
//               Absolute: {Math.round(-x.get())}px
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Instructions */}
//       <div className="mt-8">
//         <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">
//           How to use momentum scrolling:
//         </h4>
//         <ul className="space-y-2 text-gray-600 dark:text-gray-400">
//           <li className="flex items-center gap-2">
//             <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
//             <span><strong>Quick drag & release</strong> - Items keep moving with physics</span>
//           </li>
//           <li className="flex items-center gap-2">
//             <div className="w-2 h-2 bg-green-500 rounded-full"></div>
//             <span><strong>Slow drag</strong> - Items stop where you release</span>
//           </li>
//           <li className="flex items-center gap-2">
//             <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
//             <span><strong>Use mouse wheel</strong> - Scroll vertically to move horizontally</span>
//           </li>
//           <li className="flex items-center gap-2">
//             <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
//             <span><strong>Flick on mobile</strong> - Touch and swipe quickly for momentum</span>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default MomentumInfiniteCarousel;

// {-------------------------------------------------------------------------------------------}

// "use client";

// import { motion, useAnimation, useMotionValue } from "framer-motion";
// import { useEffect, useRef, useState } from "react";

// const items = [
//   "🎨 Design", "⚡ Performance", "🔋 Battery Life", "📷 Camera", 
//   "🤖 AI", "🔒 Security", "🌐 Global", "💡 Innovation",
//   "🚀 Speed", "📱 Usability", "🧩 Integration"
// ];

// export default function TrueInfiniteCarousel() {
//   const carouselRef = useRef<HTMLDivElement>(null);
//   const [carouselWidth, setCarouselWidth] = useState(0);
  
//   const controls = useAnimation();
//   const x = useMotionValue(0);

//   // --- THE FIX IS HERE ---
//   // We create a dedicated function to start the animation.
//   // This ensures we are always providing a full, valid animation definition.
//   const startAnimation = () => {
//     // Only run if we have a valid width
//     if (carouselWidth > 0) {
//       controls.start({
//         x: -carouselWidth,
//         transition: {
//           x: {
//             repeat: Infinity,
//             repeatType: "loop",
//             duration: 25,
//             ease: "linear",
//           },
//         },
//       });
//     }
//   };

//   // 1. This effect runs once to measure the width.
//   useEffect(() => {
//     if (carouselRef.current) {
//       // We divide by 3 because we render the list 3 times
//       const width = carouselRef.current.scrollWidth / 3;
//       setCarouselWidth(width);
//     }
//   }, []); // Empty dependency array ensures this runs only once on mount.

//   // 2. This effect runs whenever the width is set, to start the initial animation.
//   useEffect(() => {
//     startAnimation();
//   }, [carouselWidth]);

//   return (
//     <div className="relative w-full overflow-hidden bg-gray-900 py-8">
//       <motion.div
//         ref={carouselRef}
//         className="flex gap-4 cursor-grab active:cursor-grabbing"
//         drag="x"
//         style={{ x }}
//         animate={controls}
//         whileHover={{ animationPlayState: "paused" }}
        
//         // Stop the animation on drag start
//         onDragStart={() => controls.stop()}
        
//         // --- THE OTHER PART OF THE FIX ---
//         // On drag end, we call our robust start function instead of just controls.start()
//         onDragEnd={startAnimation}
        
//         onDrag={() => {
//           const dragOffset = x.get();
          
//           if (dragOffset > 0) {
//             x.set(dragOffset - carouselWidth);
//           } 
//           else if (dragOffset < -carouselWidth) {
//             x.set(dragOffset + carouselWidth);
//           }
//         }}
//       >
//         {/* Render the list three times */}
//         {items.map((item, index) => (
//           <motion.div
//             key={`first-${index}`}
//             className="min-w-[200px] h-[100px] bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white text-xl font-bold shadow-lg"
//           >
//             {item}
//           </motion.div>
//         ))}
//         {items.map((item, index) => (
//           <motion.div
//             key={`second-${index}`}
//             className="min-w-[200px] h-[100px] bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center text-white text-xl font-bold shadow-lg"
//           >
//             {item}
//           </motion.div>
//         ))}
//         {items.map((item, index) => (
//           <motion.div
//             key={`third-${index}`}
//             className="min-w-[200px] h-[100px] bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center text-white text-xl font-bold shadow-lg"
//           >
//             {item}
//           </motion.div>
//         ))}
//       </motion.div>
//     </div>
//   );
// }

// {-------------------------------------------------------------------------------------------}

// "use client";

// import { motion, useAnimation, useMotionValue } from "framer-motion";
// import { useEffect, useRef, useState } from "react";

// const items = [
//   "🎨 Design", "⚡ Performance", "🔋 Battery Life", "📷 Camera", 
//   "🤖 AI", "🔒 Security", "🌐 Global", "💡 Innovation",
//   "🚀 Speed", "📱 Usability", "🧩 Integration"
// ];

// export default function TrueInfiniteCarousel() {
//   const carouselRef = useRef<HTMLDivElement>(null);
//   const [carouselWidth, setCarouselWidth] = useState(0);
  
//   const controls = useAnimation();
//   const x = useMotionValue(0);

//   // --- REFINED LOGIC ---

//   // 1. This effect runs once to measure the width of ONE list.
//   useEffect(() => {
//     if (carouselRef.current) {
//       // We divide by 4 because we render the list 4 times
//       const width = carouselRef.current.scrollWidth / 4;
//       setCarouselWidth(width);
//     }
//   }, []);

//   // 2. This function defines and starts the animation.
//   const startAnimation = () => {
//     if (carouselWidth === 0) return;
//     controls.start({
//       // Animate across the width of THREE lists
//       x: -carouselWidth * 3,
//       transition: {
//         x: {
//           duration: 30, // Slower duration for a more relaxed feel
//           ease: "linear",
//           repeat: Infinity,
//           repeatType: "loop", // The snap back is now visually hidden
//         },
//       },
//     });
//   };

//   // 3. Start the animation once the width is measured
//   useEffect(() => {
//     startAnimation();
//   }, [carouselWidth]);

//   return (
//     <div className="relative w-full overflow-hidden bg-gray-900 py-8">
//       <motion.div
//         ref={carouselRef}
//         className="flex gap-4 cursor-grab active:cursor-grabbing"
//         drag="x"
//         dragConstraints={{ left: -carouselWidth * 4, right: 0 }} // Constraints for the full 4-list width
//         style={{ x }}
//         animate={controls}
        
//         // Pause on hover
//         whileHover={{ animationPlayState: "paused" }}
        
//         // Stop animation on drag start
//         onDragStart={() => controls.stop()}
        
//         // Restart animation on drag end
//         onDragEnd={startAnimation}
//       >
//         {/* We render the list FOUR times to create the long path */}
//         {items.map((item, index) => (
//           <motion.div key={`list1-${index}`} className="min-w-[200px] h-[100px] bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white text-xl font-bold shadow-lg">{item}</motion.div>
//         ))}
//         {items.map((item, index) => (
//           <motion.div key={`list2-${index}`} className="min-w-[200px] h-[100px] bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center text-white text-xl font-bold shadow-lg">{item}</motion.div>
//         ))}
//         {items.map((item, index) => (
//           <motion.div key={`list3-${index}`} className="min-w-[200px] h-[100px] bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center text-white text-xl font-bold shadow-lg">{item}</motion.div>
//         ))}
//         {items.map((item, index) => (
//           <motion.div key={`list4-${index}`} className="min-w-[200px] h-[100px] bg-gradient-to-br from-green-500 to-lime-500 rounded-xl flex items-center justify-center text-white text-xl font-bold shadow-lg">{item}</motion.div>
//         ))}
//       </motion.div>
//     </div>
//   );
// }

//{-------------------------------------------------------------------------------------------}
// "use client";

// import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
// import { useRef, useState, useEffect } from "react";

// const items = [
//   { id: 1, title: "Dia Browser", color: "from-purple-500 to-pink-500" },
//   { id: 2, title: "Collins Carousel", color: "from-blue-500 to-teal-500" },
//   { id: 3, title: "Business Switcher", color: "from-orange-500 to-red-500" },
//   { id: 4, title: "Scroll Animation", color: "from-green-500 to-lime-500" },
//   { id: 5, title: "Radial Slider", color: "from-cyan-500 to-blue-500" },
//   { id: 6, title: "Heart Button", color: "from-rose-500 to-pink-500" },
//   { id: 7, title: "iPhone Accordion", color: "from-indigo-500 to-purple-500" },
//   { id: 8, title: "Looping Images", color: "from-yellow-500 to-orange-500" },
// ];

// export default function ProInfiniteCarousel() {
//   const carouselRef = useRef<HTMLDivElement>(null);
//   const [itemsWidth, setItemsWidth] = useState(0);
  
//   const x = useMotionValue(0);
//   const baseVelocity = -50; // pixels per second (negative = left, positive = right)
//   const velocityRef = useRef(baseVelocity);
//   const isDraggingRef = useRef(false);

//   // Measure width of ONE set of items
//   useEffect(() => {
//     if (carouselRef.current) {
//       const width = carouselRef.current.scrollWidth / 2;
//       setItemsWidth(width);
//     }
//   }, []);

//   // Continuous animation loop using useAnimationFrame
//   useAnimationFrame((t, delta) => {
//     if (!itemsWidth || isDraggingRef.current) return;

//     // Move based on velocity (delta is in milliseconds)
//     let moveBy = (velocityRef.current * delta) / 1000;
//     let newX = x.get() + moveBy;

//     // Seamless loop: reset when we've moved one full width
//     if (newX <= -itemsWidth) {
//       newX = newX + itemsWidth;
//     } else if (newX >= 0) {
//       newX = newX - itemsWidth;
//     }

//     x.set(newX);
//   });

//   const handleDrag = (event: any, info: any) => {
//     if (!itemsWidth) return;
    
//     let newX = x.get() + info.delta.x;

//     // Seamless loop during drag
//     if (newX <= -itemsWidth) {
//       newX = newX + itemsWidth;
//     } else if (newX >= 0) {
//       newX = newX - itemsWidth;
//     }

//     x.set(newX);
//   };

//   return (
//     <div className="relative w-full overflow-hidden bg-gray-900 py-12">
//       <motion.div
//         ref={carouselRef}
//         className="flex gap-6 cursor-grab active:cursor-grabbing"
//         style={{ x }}
//         drag="x"
//         dragConstraints={{ left: 0, right: 0 }}
//         dragElastic={0}
//         onDragStart={() => {
//           isDraggingRef.current = true;
//         }}
//         onDrag={handleDrag}
//         onDragEnd={(event, info) => {
//           isDraggingRef.current = false;
//           // Add velocity based on drag speed
//           velocityRef.current = baseVelocity + info.velocity.x * 0.1;
//           // Gradually return to base velocity
//           setTimeout(() => {
//             velocityRef.current = baseVelocity;
//           }, 1000);
//         }}
//       >
//         {/* Render items exactly TWICE */}
//         {[0, 1].map((listIndex) =>
//           items.map((item) => (
//             <motion.div
//               key={`${item.id}-${listIndex}`}
//               className={`min-w-[300px] h-[200px] rounded-2xl bg-gradient-to-br ${item.color} p-6 flex flex-col justify-between shadow-2xl`}
//             >
//               <h3 className="text-white text-2xl font-bold">{item.title}</h3>
//               <div className="w-full h-16 bg-white/20 rounded-lg"></div>
//             </motion.div>
//           ))
//         )}
//       </motion.div>
//     </div>
//   );
// }

// {-------------------------------------------------------------------------------------------}

// "use client";

// import { motion, useAnimation, useMotionValue, PanInfo } from "framer-motion";
// import { useEffect, useRef, useState } from "react";

// // --- Your Items ---
// // Use items with varying widths to really test the robustness
// const items = [
//   { id: 1, title: "Dia Browser", color: "from-purple-500 to-pink-500" },
//   { id: 2, title: "Collins Carousel", color: "from-blue-500 to-teal-500" },
//   { id: 3, title: "Business Switcher", color: "from-orange-500 to-red-500" },
//   { id: 4, title: "Scroll Animation", color: "from-green-500 to-lime-500" },
//   { id: 5, title: "Radial Slider", color: "from-cyan-500 to-blue-500" },
//   { id: 6, title: "Heart Button", color: "from-rose-500 to-pink-500" },
//   { id: 7, title: "iPhone Accordion", color: "from-indigo-500 to-purple-500" },
//   { id: 8, title: "Looping Images", color: "from-yellow-500 to-orange-500" },
// ];

// export default function ProInfiniteCarousel() {
//   // We need a ref to the container to measure its width
//   const carouselRef = useRef<HTMLDivElement>(null);
//   const [carouselWidth, setCarouselWidth] = useState(0);
  
//   // useAnimation gives us full manual control to start/stop animations
//   const controls = useAnimation();
//   // useMotionValue tracks the current x position, which is useful for drag gestures
//   const x = useMotionValue(0);

//   // --- Step 1: Measure the width of ONE set of items ---
//   useEffect(() => {
//     if (carouselRef.current) {
//       // We divide by 4 because we render the list 4 times
//       const width = carouselRef.current.scrollWidth / 4;
//       setCarouselWidth(width);
//     }
//   }, []);

//   // --- Step 2: Define the animation and start it ---
//   const startAnimation = () => {
//     // Don't start if we don't have a width yet
//     if (carouselWidth === 0) return;
    
//     controls.start({
//       // Animate from the current position to the position of the THIRD list
//       // This creates a very long, smooth path before the reset
//       x: -carouselWidth * 2,
//       transition: {
//         x: {
//           duration: 40, // A longer duration feels more premium
//           ease: "linear", // Constant speed is key for a ticker
//           repeat: Infinity,
//           repeatType: "loop", // The magic: instantly snap back to 0
//         },
//       },
//     });
//   };

//   // Start the animation once the width is measured
//   useEffect(() => {
//     startAnimation();
//   }, [carouselWidth, controls]);

//   // --- Step 3: Handle drag interactions for a tactile feel ---
//   const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
//     // When the user lets go, we calculate a new offset based on their drag velocity
//     const dragOffset = info.offset.x;
//     const dragVelocity = info.velocity.x;

//     // We snap the carousel back to a position that feels natural
//     // and then restart the animation from there.
//     const snapPosition = x.get() + dragOffset + dragVelocity * 50; // 50 is a dampening factor

//     // Set the new position instantly
//     x.set(snapPosition);

//     // Restart the animation from this new position
//     controls.start({
//       x: -carouselWidth * 2,
//       transition: {
//         x: {
//           duration: 40,
//           ease: "linear",
//           repeat: Infinity,
//           repeatType: "loop",
//         },
//       },
//     });
//   };

//   return (
//     <div className="relative w-full overflow-hidden bg-gray-900 py-12">
//       <motion.div
//         ref={carouselRef}
//         className="flex gap-6 cursor-grab active:cursor-grabbing"
//         style={{ x }}
//         drag="x"
//         // We don't use dragConstraints, allowing free dragging
//         onDragStart={() => controls.stop()} // Stop auto-scroll on drag
//         onDragEnd={handleDragEnd} // Handle the end of the drag
//       >
//         {/* 
//           --- Step 4: Render the list FOUR times ---
//           This creates the long path. The animation travels across two lists,
//           and the snap back happens when the third list is in view, which is
//           identical to the first, making the loop invisible.
//         */}
//         {[0, 1, 2, 3].map((listIndex) =>
//           items.map((item) => (
//             <motion.div
//               key={`${item.id}-${listIndex}`}
//               className={`min-w-[300px] h-[200px] rounded-2xl bg-gradient-to-br ${item.color} p-6 flex flex-col justify-between shadow-2xl`}
//             >
//               <h3 className="text-white text-2xl font-bold">{item.title}</h3>
//               <div className="w-full h-16 bg-white/20 rounded-lg"></div>
//             </motion.div>
//           ))
//         )}
//       </motion.div>
//     </div>
//   );
// }

// {    -------------------------------------------------------------------------------------------}


// "use client";

// import { motion, useMotionValue, useAnimationFrame, PanInfo } from "framer-motion";
// import { useRef, useState, useEffect } from "react";

// const items = [
//   { id: 1, title: "Dia Browser", color: "from-purple-500 to-pink-500" },
//   { id: 2, title: "Collins Carousel", color: "from-blue-500 to-teal-500" },
//   { id: 3, title: "Business Switcher", color: "from-orange-500 to-red-500" },
//   { id: 4, title: "Scroll Animation", color: "from-green-500 to-lime-500" },
//   { id: 5, title: "Radial Slider", color: "from-cyan-500 to-blue-500" },
//   { id: 6, title: "Heart Button", color: "from-rose-500 to-pink-500" },
//   { id: 7, title: "iPhone Accordion", color: "from-indigo-500 to-purple-500" },
//   { id: 8, title: "Looping Images", color: "from-yellow-500 to-orange-500" },
// ];

// export default function ProInfiniteCarousel() {
//   const carouselRef = useRef<HTMLDivElement>(null);
//   const [itemsWidth, setItemsWidth] = useState(0);
  
//   const x = useMotionValue(0);
//   const velocityRef = useRef(0);
//   const isDraggingRef = useRef(false);

//   // Measure width of ONE set of items
//   useEffect(() => {
//     if (carouselRef.current) {
//       const width = carouselRef.current.scrollWidth / 2;
//       setItemsWidth(width);
//     }
//   }, []);

//   // Continuous animation with momentum
//   useAnimationFrame((t, delta) => {
//     if (!itemsWidth || isDraggingRef.current) return;

//     // Apply velocity and decay it over time
//     if (Math.abs(velocityRef.current) > 0.5) {
//       let moveBy = (velocityRef.current * delta) / 1000;
//       let newX = x.get() + moveBy;

//       // Seamless loop
//       if (newX <= -itemsWidth) {
//         newX = newX + itemsWidth;
//       } else if (newX >= 0) {
//         newX = newX - itemsWidth;
//       }

//       x.set(newX);

//       // Decay velocity (friction)
//       velocityRef.current *= 0.95;
//     }
//   });

//   const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
//     isDraggingRef.current = false;
    
//     // Set velocity based on drag velocity
//     velocityRef.current = info.velocity.x;
//   };

//   return (
//     <div className="relative w-full overflow-hidden bg-gray-900 py-12">
//       <motion.div
//         ref={carouselRef}
//         className="flex gap-6 cursor-grab active:cursor-grabbing"
//         style={{ x }}
//         drag="x"
//         dragElastic={0.2}
//         dragMomentum={false}
//         onDragStart={() => {
//           isDraggingRef.current = true;
//           velocityRef.current = 0;
//         }}
//         onDragEnd={handleDragEnd}
//       >
//         {/* Render items exactly TWICE */}
//         {[0, 1].map((listIndex) =>
//           items.map((item) => (
//             <motion.div
//               key={`${item.id}-${listIndex}`}
//               className={`min-w-[300px] h-[200px] rounded-2xl bg-gradient-to-br ${item.color} p-6 flex flex-col justify-between shadow-2xl`}
//             >
//               <h3 className="text-white text-2xl font-bold">{item.title}</h3>
//               <div className="w-full h-16 bg-white/20 rounded-lg"></div>
//             </motion.div>
//           ))
//         )}
//       </motion.div>
//     </div>
//   );
// }

// {    -------------------------------------------------------------------------------------------}
// "use client";

// import { motion, useMotionValue, useAnimationFrame, PanInfo, useTransform } from "framer-motion";
// import { useRef, useState, useEffect } from "react";

// const items = [
//   { id: 1, title: "Dia Browser", color: "from-purple-500 to-pink-500" },
//   { id: 2, title: "Collins Carousel", color: "from-blue-500 to-teal-500" },
//   { id: 3, title: "Business Switcher", color: "from-orange-500 to-red-500" },
//   { id: 4, title: "Scroll Animation", color: "from-green-500 to-lime-500" },
//   { id: 5, title: "Radial Slider", color: "from-cyan-500 to-blue-500" },
//   { id: 6, title: "Heart Button", color: "from-rose-500 to-pink-500" },
//   { id: 7, title: "iPhone Accordion", color: "from-indigo-500 to-purple-500" },
//   { id: 8, title: "Looping Images", color: "from-yellow-500 to-orange-500" },
// ];

// export default function ProInfiniteCarousel() {
//   const carouselRef = useRef<HTMLDivElement>(null);
//   const [itemsWidth, setItemsWidth] = useState(0);
  
//   const baseX = useMotionValue(0);
//   const baseVelocity = -250;
//   const velocityRef = useRef(baseVelocity);
//   const isDraggingRef = useRef(false);

//   useEffect(() => {
//     if (carouselRef.current) {
//       const width = carouselRef.current.scrollWidth / 2;
//       setItemsWidth(width);
//     }
//   }, []);

//   const x = useTransform(baseX, (value) => {
//     if (!itemsWidth) return 0;
//     return ((value % itemsWidth) + itemsWidth) % itemsWidth - itemsWidth;
//   });

//   useAnimationFrame((t, delta) => {
//     if (isDraggingRef.current || !itemsWidth) return;

//     let moveBy = (velocityRef.current * delta) / 1000;
//     baseX.set(baseX.get() + moveBy);

//     if (velocityRef.current !== baseVelocity) {
//       const diff = baseVelocity - velocityRef.current;
//       velocityRef.current += diff * 0.02;
//     }
//   });

//   const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
//     isDraggingRef.current = false;
//     velocityRef.current = baseVelocity + info.velocity.x * 0.5;
//   };

//   return (
//     <div className="relative w-full overflow-hidden bg-gray-900 py-12">
//       <motion.div
//         ref={carouselRef}
//         className="flex gap-6 cursor-grab active:cursor-grabbing"
//         style={{ x }}
//         drag="x"
//         dragElastic={0.2}
//         dragMomentum={false}
//         onDragStart={() => {
//           isDraggingRef.current = true;
//         }}
//         onDragEnd={handleDragEnd}
//       >
//         {[0, 1].map((listIndex) =>
//           items.map((item) => (
//             <motion.div
//               key={`${item.id}-${listIndex}`}
//               className={`min-w-75 h-50 rounded-2xl bg-linear-to-br ${item.color} p-6 flex flex-col justify-between shadow-2xl`}
//             >
//               <h3 className="text-white text-2xl font-bold">{item.title}</h3>
//               <div className="w-full h-16 bg-white/20 rounded-lg"></div>
//             </motion.div>
//           ))
//         )}
//       </motion.div>
//     </div>
//   );
// }

// {    -------------------------------------------------------------------------------------------}
"use client";

import { motion, useMotionValue, useAnimationFrame, PanInfo, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const items = [
  { id: 1, title: "Dia Browser", color: "from-purple-500 to-pink-500" },
  { id: 2, title: "Collins Carousel", color: "from-blue-500 to-teal-500" },
  { id: 3, title: "Business Switcher", color: "from-orange-500 to-red-500" },
  { id: 4, title: "Scroll Animation", color: "from-green-500 to-lime-500" },
  { id: 5, title: "Radial Slider", color: "from-cyan-500 to-blue-500" },
  { id: 6, title: "Heart Button", color: "from-rose-500 to-pink-500" },
  { id: 7, title: "iPhone Accordion", color: "from-indigo-500 to-purple-500" },
  { id: 8, title: "Looping Images", color: "from-yellow-500 to-orange-500" },
];

// Pre-calculate item dimensions
const ITEM_WIDTH = 300; // min-w-75 = 300px
const GAP = 24; // gap-6 = 24px
const ITEM_WITH_GAP = ITEM_WIDTH + GAP;
const TOTAL_ITEMS = items.length;
const LOOP_WIDTH = ITEM_WITH_GAP * TOTAL_ITEMS;

export default function CustomFM() {
  const baseX = useMotionValue(0);
  const baseVelocity = -250;
  const velocityRef = useRef(baseVelocity);
  const isDraggingRef = useRef(false);

  const x = useTransform(baseX, (value) => {
    return -(LOOP_WIDTH + (value % LOOP_WIDTH));
  });

  useAnimationFrame((t, delta) => {
    if (isDraggingRef.current) return;

    let moveBy = (velocityRef.current * delta) / 1000;
    baseX.set(baseX.get() + moveBy);

    if (velocityRef.current !== baseVelocity) {
      const diff = baseVelocity - velocityRef.current;
      velocityRef.current += diff * 0.02;
    }
  });

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    isDraggingRef.current = false;
    velocityRef.current = baseVelocity + info.velocity.x * 0.5;
  };

  return (
    <div className="relative w-full overflow-hidden bg-white py-12">
      <motion.div
        className="flex gap-6 cursor-grab active:cursor-grabbing"
        style={{ x }}
        drag="x"
        dragElastic={0.2}
        dragMomentum={false}
        onDragStart={() => {
          isDraggingRef.current = true;
        }}
        onDragEnd={handleDragEnd}
      >
        {[0, 1, 2].map((listIndex) =>
          items.map((item) => (
            <motion.div
              key={`${item.id}-${listIndex}`}
              className={`min-w-75 h-50 rounded-2xl bg-linear-to-br ${item.color} p-6 flex flex-col justify-between shadow-2xl`}
            >
              <h3 className="text-white text-2xl font-bold">{item.title}</h3>
              <div className="w-full h-16 bg-white/20 rounded-lg"></div>
            </motion.div>
          ))
        )}
      </motion.div>
    </div>
  );
}

