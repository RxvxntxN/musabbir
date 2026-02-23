// 'use client';

// import { useEffect, useState } from 'react';
// import TextTransition from './Transition'; // Updated import
// const TEXTS = ['website', 'backend', 'app'];

// export default function Transition() {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);
//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <span className="ml-2 text-white">
//       <TextTransition inline transition={{ type: 'spring', damping: 15, stiffness: 200 }}>
//         {TEXTS[index % TEXTS.length]}
//       </TextTransition>
//       s.
//     </span>
//   );
// }
