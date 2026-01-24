import React from 'react';
import Image from 'next/image';
import Musabbir from '@/app/images/musabbir.png';
import { FaReact } from "react-icons/fa";
import Reactjs from '@/app/images/svgs/reactjs.svg';
import { RiNextjsFill } from "react-icons/ri";
import Nextjs from '@/app/images/svgs/next-js.svg';
import { IoLogoJavascript } from "react-icons/io";
import JavaScript from '@/app/images/svgs/javascript.svg';
import { RiTailwindCssFill } from "react-icons/ri";
import MaterialUI from '@/app/images/svgs/materialui.svg';
import { Icon } from 'next/dist/lib/metadata/types/metadata-types';
import { IconType } from 'react-icons';

// Define TypeScript interfaces
interface Skill {
  icon: IconType;
  label: string;
}

interface UserData {
  name: string;
  labels: string[];
}

const HeroPage: React.FC = () => {
  // Type the userData object
  const userData: UserData = {
    name: 'Muhammad Musabbir',
    labels: [
      'React.js',
      'Next.js',
      'JavaScript Coding',
      'Tailwind CSS Design',
    ],
  };

  // Type the skills array
  const skills: Skill[] = [
    { icon: FaReact, label: userData.labels[0] },
    { icon: RiNextjsFill, label: userData.labels[1] },
    { icon: IoLogoJavascript, label: userData.labels[2] },
    { icon: RiTailwindCssFill, label: userData.labels[3] },
  ];

  return (
    <div className="bg-linear-to-br from-bg-stone-800 to-[#121212] text-[#E0E0E0] p-6 rounded-xl shadow-2xl max-w-sm mx-auto transition-all duration-300 hover:scale-105">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="relative">
          <Image
            src={Musabbir}
            alt="RxvxntxN"
            width={136}
            height={136}
            className="object-cover rounded-full border-4 border-teal-500 shadow-lg transition-transform duration-300 hover:rotate-6"
          />
          <div className="absolute bottom-0 right-0 bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-teal-400 transition-colors duration-300 hover:text-teal-300">
            {userData.name}
          </h2>
          <p className="text-sm text-gray-400 tracking-wide">
            Front End Developer
          </p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-[#222222] p-4 rounded-lg text-center flex flex-col items-center justify-center space-y-3 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-[#2A2A2A]"
          >
            <skill.icon className="skill-icon" />
            {/* <Image
              src={skill.icon}
              alt={`${skill.label} Logo`}
              width={40}
              height={40}
              className="transition-transform duration-300 hover:rotate-12"
            /> */}
            <p className="font-semibold text-sm text-gray-300 hover:text-teal-400 transition-colors">
              {skill.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroPage;