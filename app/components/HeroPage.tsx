'use client';
import React, { useEffect, useState } from 'react';
import CardDesign from './CardDesign';
import Link from 'next/link';
import TextTransition from './Transition';

const TEXTS = ['responsive website', 'reusable component', 'smooth user experience'];

const HeroPage = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((i) => i + 1), 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col md:flex-row min-h-screen dark:bg-stone-900">
      <div className="flex-1 flex justify-center items-center p-6 md:pl-10">
        <div className="space-y-4 md:space-y-6 text-center max-w-xl md:text-left">
          <h1 className="text-3xl md:text-6xl font-bold text-gray-700 dark:text-gray-300">
            Hello, I&apos;m Musabbir
          </h1>

          <span className="text-teal-500 text-2xl md:text-3xl block">Front End Developer</span>

          <div className="text-gray-600 text-sm md:text-base dark:text-gray-300 leading-relaxed">
            I&apos;m a junior developer who takes my craft seriously and I care about clean code,
            good design, and building things people actually enjoy using. I&apos;m currently focused
            on building{' '}
            <TextTransition
              inline
              className="inline-flex text-teal-500 font-medium"
              transition={{ type: 'spring', damping: 15, stiffness: 200 }}
            >
              {TEXTS[index % TEXTS.length]}
            </TextTransition>
            <span className="text-teal-500">s</span> that make a difference.
          </div>

          <div className="pt-2">
            <Link href="/projects">
              <button
                className="px-6 py-2 bg-teal-500 text-white rounded-md shadow-sm
                hover:bg-transparent hover:text-teal-500 border-2 border-teal-500
                transition-all duration-300 hover:scale-105
                focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-opacity-50
                dark:hover:text-teal-400 dark:hover:border-teal-400"
              >
                See What I&apos;ve Built
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex-1 w-full flex items-center justify-center p-4">
        <CardDesign />
      </div>
    </div>
  );
};

export default HeroPage;
