'use client';
import React from 'react';
import AutoScroll from 'embla-carousel-auto-scroll';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

interface TechItem {
  id: string;
  name: string;
  icon: string;
}

const techItems: TechItem[] = [
  {
    id: '1',
    name: 'Tailwind CSS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
  },
  {
    id: '2',
    name: 'Next.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  },
  {
    id: '3',
    name: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  },
  {
    id: '4',
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    id: '5',
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    id: '6',
    name: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  },
  {
    id: '8',
    name: 'MUI',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg',
  },
  {
    id: '10',
    name: 'Git',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  },
  {
    id: '12',
    name: 'Figma',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
  },
];

export default function TechShowcase() {
  const plugin = React.useRef(
    AutoScroll({
      speed: 2,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  return (
    <div className="w-full bg-white dark:bg-stone-900 text-gray-900 flex flex-col items-center justify-center px-4 py-16 pt-24">
      {/* Header */}
      <div className="mb-12 text-center max-w-2xl">
        <div className="text-sm font-semibold text-gray-500 mb-4 tracking-widest dark:text-gray-300">
          TECHNOLOGY STACK
        </div>
        <h1 className="text-6xl text-gray-700 dark:text-gray-300 font-bold mb-4 flex items-center hover:text-teal-500 dark:hover:text-teal-500">
          Built with Modern Tech
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          We leverage the latest technologies to build robust, scalable, and beautiful applications.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative w-full max-w-7xl mb-12 overflow-hidden">
        <Carousel
          opts={{
            align: 'start',
            dragFree: true,
            loop: true,
          }}
          plugins={[plugin.current]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {techItems.map((item) => (
              <CarouselItem key={item.id} className="basis-1/4 md:basis-1/6 lg:basis-1/8 pl-4">
                <div className="h-full flex flex-col items-center">
                  <div className="group relative flex h-24 w-24 items-center justify-center rounded-lg transition-all duration-300 hover:bg-gray-100">
                    {/* Icon */}
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="h-16 w-16 object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  {/* Title */}
                  <div className="mt-3 text-center w-full">
                    <h3 className="font-medium text-gray-900 text-sm">{item.name}</h3>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Left Gradient Overlay */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r from-white to-transparent dark:from-stone-900" />

        {/* Right Gradient Overlay */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l from-white to-transparent dark:from-stone-900" />
      </div>
    </div>
  );
}
