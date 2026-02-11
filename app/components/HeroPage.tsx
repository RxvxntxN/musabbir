'use client';
import CardDesign from './CardDesign';
import Link from 'next/link';

const HeroPage = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen dark:bg-stone-900 ">
      <div className="flex-1 flex justify-center items-center p-4 md:pl-10 order-1 md:order-1">
        <div className=" md:space-y-6 text-center w-lg md:text-left">
          <h1 className=" text-4xl text-gray-700 md:text-6xl font-bold font-alegreya dark:text-gray-300">
            Hello, I&apos;m Musabbir
          </h1>
          <span className="text-teal-500 text-2xl md:text-3xl block">Front End Developer</span>
          <p className="text-black text-sm md:text-base dark:text-gray-300">
            I'm always trying to bring real value and define problem with my codes. Welcome to my
            portfolio.
          </p>
          <div className="pt-2">
            <Link href={'/projects'}>
              <button className="px-6 py-2 border-2 dark:text-gray-300 border-teal-500 text-black rounded-md hover:bg-teal-500 hover:text-white transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-opacity-50">
                See What I've Built
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex-1 w-full flex items-center justify-center p-4 order-2">
        <CardDesign />
      </div>
    </div>
  );
};

export default HeroPage;
