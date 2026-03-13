'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isLight = theme === 'light';

  return (
    <button
      onClick={() => setTheme(isLight ? 'dark' : 'light')}
      aria-label="Toggle theme"
      className="relative w-13 h-7 rounded-full shrink-0 overflow-hidden border border-white/25 transition-colors duration-350"
      style={{
        background: isLight ? 'rgba(20, 184, 166, 0.45)' : 'rgba(15, 118, 110, 0.55)',
      }}
    >
      {/* Glass shimmer — matches navbar */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(120deg, rgba(255,255,255,0.12) 0%, transparent 60%)',
        }}
      />

      {/* Spring thumb */}
      <motion.span
        className="absolute top-0.75 left-0.75 w-5 h-5 rounded-full bg-white flex items-center justify-center shadow-sm"
        animate={{ x: isLight ? 24 : 0 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isLight ? (
            <motion.span
              key="sun"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.15 }}
            >
              <Sun size={11} className="text-teal-600" />
            </motion.span>
          ) : (
            <motion.span
              key="moon"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.15 }}
            >
              <Moon size={11} className="text-teal-700" fill="currentColor" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.span>
    </button>
  );
}

// 'use client';

// import { useState, useEffect } from 'react';
// import { useTheme } from 'next-themes';

// const STARS = [
//   [8, 6],
//   [16, 4],
//   [28, 8],
//   [6, 18],
//   [22, 14],
//   [32, 20],
//   [12, 24],
//   [26, 28],
//   [7, 30],
//   [34, 11],
// ] as const;
// const CRATERS = [
//   { left: '20%', top: '18%', w: 6, h: 6 },
//   { left: '52%', top: '48%', w: 4, h: 4 },
//   { left: '22%', top: '58%', w: 3, h: 3 },
// ];

// function SunRays() {
//   return (
//     <svg viewBox="0 0 38 38" className="absolute -inset-[7px]" fill="none">
//       {Array.from({ length: 8 }, (_, i) => {
//         const rad = (i / 8) * 2 * Math.PI;
//         const len = i % 2 === 0 ? 5 : 4;
//         const cx = 19,
//           cy = 19,
//           r1 = 11,
//           r2 = r1 + len;
//         return (
//           <line
//             key={i}
//             x1={(cx + Math.cos(rad) * r1).toFixed(1)}
//             y1={(cy + Math.sin(rad) * r1).toFixed(1)}
//             x2={(cx + Math.cos(rad) * r2).toFixed(1)}
//             y2={(cy + Math.sin(rad) * r2).toFixed(1)}
//             stroke="rgba(255,210,40,0.6)"
//             strokeWidth="2"
//             strokeLinecap="round"
//           />
//         );
//       })}
//     </svg>
//   );
// }

// export default function ModeToggle() {
//   const { theme, setTheme } = useTheme();
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => setMounted(true), []);
//   if (!mounted) return null;

//   const isLight = theme === 'light';

//   return (
//     <button
//       onClick={() => setTheme(isLight ? 'dark' : 'light')}
//       aria-label="Toggle theme"
//       className="relative w-[72px] h-[36px] rounded-full overflow-hidden border flex-shrink-0 transition-all duration-500"
//       style={{
//         background: isLight ? '#cce8ff' : '#1a1a2e',
//         borderColor: isLight ? 'rgba(100,160,255,0.25)' : 'rgba(255,255,255,0.15)',
//         boxShadow: isLight
//           ? 'inset 0 2px 6px rgba(100,180,255,0.15)'
//           : 'inset 0 2px 6px rgba(0,0,0,0.3)',
//       }}
//     >
//       {/* Stars */}
//       <div
//         className="absolute inset-0 transition-opacity duration-400"
//         style={{ opacity: isLight ? 0 : 1 }}
//       >
//         {STARS.map(([x, y], i) => (
//           <div
//             key={i}
//             className="absolute w-0.5 h-0.5 rounded-full bg-white"
//             style={{ left: x, top: y, opacity: 0.35 + (i % 3) * 0.2 }}
//           />
//         ))}
//       </div>

//       {/* Clouds */}
//       <div
//         className="absolute inset-0 transition-opacity duration-400"
//         style={{ opacity: isLight ? 1 : 0 }}
//       >
//         <div
//           className="absolute bg-white/65 rounded-lg"
//           style={{ left: 6, top: 8, width: 18, height: 8 }}
//         />
//         <div
//           className="absolute bg-white/40 rounded-lg"
//           style={{ left: 40, top: 13, width: 12, height: 6 }}
//         />
//       </div>

//       {/* Thumb */}
//       <div
//         className="absolute top-[4px] left-[4px] w-[24px] h-[24px] rounded-full z-10 flex items-center justify-center transition-all duration-500"
//         style={{
//           transform: isLight ? 'translateX(36px)' : 'translateX(0)',
//           transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
//           background: isLight
//             ? 'radial-gradient(circle at 38% 32%, #fff7d6, #ffe066)'
//             : 'radial-gradient(circle at 38% 32%, #ffe066, #ffb300)',
//           boxShadow: isLight
//             ? '0 0 14px 4px rgba(255,220,80,0.6)'
//             : '0 0 10px 3px rgba(255,200,50,0.5)',
//         }}
//       >
//         {/* Craters */}
//         <div
//           className="absolute inset-0 rounded-full transition-opacity duration-300"
//           style={{ opacity: isLight ? 0 : 1 }}
//         >
//           {CRATERS.map((c, i) => (
//             <div
//               key={i}
//               className="absolute rounded-full bg-black/[0.14]"
//               style={{ left: c.left, top: c.top, width: c.w, height: c.h }}
//             />
//           ))}
//         </div>

//         {/* Sun rays */}
//         <div
//           className="absolute -inset-[7px] transition-opacity duration-300"
//           style={{ opacity: isLight ? 1 : 0 }}
//         >
//           <SunRays />
//         </div>
//       </div>
//     </button>
//   );
// }

// 'use client';

// import { useState, useEffect } from 'react';
// import { useTheme } from 'next-themes';

// const STARS = [
//   [12, 8],
//   [22, 6],
//   [35, 10],
//   [8, 22],
//   [28, 18],
//   [38, 26],
//   [15, 30],
//   [32, 34],
//   [10, 38],
//   [40, 15],
// ] as const;

// const CRATERS = [
//   { left: '20%', top: '20%', w: 8, h: 8 },
//   { left: '55%', top: '50%', w: 5, h: 5 },
//   { left: '25%', top: '60%', w: 4, h: 4 },
// ];

// function SunRays() {
//   const rays = Array.from({ length: 8 }, (_, i) => {
//     const angle = (i / 8) * 360;
//     const len = i % 2 === 0 ? 7 : 5;
//     const rad = (angle * Math.PI) / 180;
//     const cx = 23,
//       cy = 23,
//       r1 = 14,
//       r2 = r1 + len;
//     return {
//       x1: cx + Math.cos(rad) * r1,
//       y1: cy + Math.sin(rad) * r1,
//       x2: cx + Math.cos(rad) * r2,
//       y2: cy + Math.sin(rad) * r2,
//     };
//   });

//   return (
//     <svg
//       viewBox="0 0 46 46"
//       className="absolute -inset-2 transition-opacity duration-300"
//       style={{ opacity: 'var(--rays-opacity, 0)' }}
//     >
//       {rays.map((r, i) => (
//         <line
//           key={i}
//           x1={r.x1.toFixed(1)}
//           y1={r.y1.toFixed(1)}
//           x2={r.x2.toFixed(1)}
//           y2={r.y2.toFixed(1)}
//           stroke="rgba(255,210,40,0.6)"
//           strokeWidth="2.5"
//           strokeLinecap="round"
//         />
//       ))}
//     </svg>
//   );
// }

// export default function ModeToggle() {
//   const { theme, setTheme } = useTheme();
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => setMounted(true), []);
//   if (!mounted) return null;

//   const isLight = theme === 'light';

//   return (
//     <div className="flex flex-col items-center gap-8">
//       {/* Pill */}
//       <button
//         onClick={() => setTheme(isLight ? 'dark' : 'light')}
//         aria-label="Toggle theme"
//         className="relative w-[88px] h-[44px] rounded-full cursor-pointer overflow-hidden border transition-all duration-500"
//         style={{
//           background: isLight ? '#d4e9ff' : '#1a1a2e',
//           borderColor: isLight ? 'rgba(100,160,255,0.3)' : 'rgba(255,255,255,0.1)',
//           boxShadow: isLight
//             ? 'inset 0 2px 8px rgba(100,180,255,0.2)'
//             : 'inset 0 2px 8px rgba(0,0,0,0.3)',
//         }}
//       >
//         {/* Stars */}
//         <div
//           className="absolute inset-0 transition-opacity duration-400"
//           style={{ opacity: isLight ? 0 : 1 }}
//         >
//           {STARS.map(([x, y], i) => (
//             <div
//               key={i}
//               className="absolute w-0.5 h-0.5 rounded-full bg-white"
//               style={{ left: x, top: y, opacity: 0.4 + (i % 3) * 0.2 }}
//             />
//           ))}
//         </div>

//         {/* Clouds */}
//         <div
//           className="absolute inset-0 transition-opacity duration-400"
//           style={{ opacity: isLight ? 1 : 0 }}
//         >
//           <div
//             className="absolute bg-white/70 rounded-xl"
//             style={{ left: 8, top: 10, width: 22, height: 10 }}
//           />
//           <div
//             className="absolute bg-white/50 rounded-xl"
//             style={{ left: 50, top: 16, width: 16, height: 8 }}
//           />
//         </div>

//         {/* Thumb */}
//         <div
//           className="absolute top-[5px] left-[5px] w-[30px] h-[30px] rounded-full z-10 flex items-center justify-center transition-all duration-500"
//           style={{
//             transform: isLight ? 'translateX(44px)' : 'translateX(0)',
//             background: isLight
//               ? 'radial-gradient(circle at 40% 35%, #fff7d6, #ffe066)'
//               : 'radial-gradient(circle at 40% 35%, #ffe066, #ffb300)',
//             boxShadow: isLight
//               ? '0 0 16px 5px rgba(255,220,80,0.6)'
//               : '0 0 12px 3px rgba(255,200,50,0.5)',
//             transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
//           }}
//         >
//           {/* Craters (moon mode) */}
//           <div
//             className="absolute inset-0 rounded-full transition-opacity duration-300"
//             style={{ opacity: isLight ? 0 : 1 }}
//           >
//             {CRATERS.map((c, i) => (
//               <div
//                 key={i}
//                 className="absolute rounded-full bg-black/15"
//                 style={{ left: c.left, top: c.top, width: c.w, height: c.h }}
//               />
//             ))}
//           </div>

//           {/* Sun rays (light mode) */}
//           <div
//             className="absolute -inset-2 transition-opacity duration-300"
//             style={{ opacity: isLight ? 1 : 0 }}
//           >
//             <SunRays />
//           </div>
//         </div>
//       </button>
//     </div>
//   );
// }
