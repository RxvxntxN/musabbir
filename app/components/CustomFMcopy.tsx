"use client";

import { motion, useMotionValue, useAnimationFrame, PanInfo, useTransform } from "framer-motion";
import { useRef } from "react";

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

// Calculate loop width: (item + gap) × total items
const LOOP_WIDTH = (300 + 24) * items.length; // 2592px

export default function ProInfiniteCarousel() {
  const baseX = useMotionValue(0);
  const baseVelocity = 250;
  const velocityRef = useRef(baseVelocity);
  const isDraggingRef = useRef(false);
  const carouselRef = useRef(null);
  const loopWidth = LOOP_WIDTH; // Declare loopWidth variable

  // Simple wrapping transform
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
    <div className="relative w-full overflow-hidden bg-gray-900 py-12">
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
        {/* Create infinite loop with 3 copies for seamless wrapping */}
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
