import { ExternalLink } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';
import NavigationBar from '@/app/components/NavigationBar';
import spfCheckerImage from '@/app/images/spfchecker.png';
import { StaticImageData } from 'next/image';
import Image from 'next/image';
import atspage from '@/app/images/atslandingpage.png';
import dashboard from '@/app/images/dashboard.png';

interface ProjectCard {
  id: string;
  title: string;
  description: string;
  thumbnail: string | StaticImageData;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projects: ProjectCard[] = [
  {
    id: '1',
    title: 'Coffee Shop',
    description: 'Coffee shop with redux and nightmode feature',
    thumbnail:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    tags: ['Next.js', 'Redux', 'React', 'Tailwind CSS'],
    liveUrl: 'https://coffee-shop-gray-eight.vercel.app/',
    githubUrl: 'https://github.com/RxvxntxN/coffee-shop',
  },
  {
    id: '2',
    title: 'SPF Checker',
    description: 'A simple SPF record checker built with Next.js and Google DNS',
    thumbnail: spfCheckerImage,
    tags: ['Next.js', 'Google DNS', 'Tailwind CSS', 'JavaScript'],
    liveUrl: 'https://simple-spf-checker.vercel.app/',
    githubUrl: 'https://github.com/RxvxntxN/simple_spf_checker',
  },
  {
    id: '3',
    title: 'Car Garage',
    description: 'A simple car garage app built with Next.js with Swipper.',
    thumbnail: 'https://images.unsplash.com/photo-1617814086906-d847a8bc6fca',
    tags: ['Next.js', 'Swipper.js', 'Tailwind CSS', 'JavaScript'],
    liveUrl: 'https://interesting-business-app.vercel.app/',
    githubUrl: 'https://github.com/RxvxntxN/interesting-business-app',
  },
  {
    id: '4',
    title: 'ATS Landing Page',
    description: 'A simple ATS built with Next.js with animations.',
    thumbnail: atspage,
    tags: ['Next.js', 'Animation', 'Tailwind CSS', 'JavaScript'],
    liveUrl: 'https://basic-ultimate-ats.vercel.app/',
    githubUrl: 'https://github.com/RxvxntxN/Basic-ATS',
  },
  {
    id: '5',
    title: 'Dashboard Application',
    description: 'A simple dashboard application built with Next.js and Tailwind CSS.',
    thumbnail: dashboard,
    tags: ['Next.js', 'Zustand', 'Typescript', 'Tailwind CSS', 'Shadcn UI'],
    liveUrl: 'https://dashboard-application-liart.vercel.app/',
    githubUrl: 'https://github.com/RxvxntxN/dashboard-application',
  },
];

export default function ProjectGrid() {
  return (
    <>
      <NavigationBar />
      <div className="p-4 md:p-6 bg-white dark:bg-stone-900 min-h-screen">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative aspect-video rounded-xl overflow-hidden mb-3">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="max-w-full object-cover transition-all duration-200 group-hover:blur-sm"
                />
                <div className="absolute inset-0 bg-black transition-colors duration-200 flex items-center justify-center opacity-0 group-hover:opacity-50">
                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white dark:bg-gray-800 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <ExternalLink size={20} className="text-gray-800 dark:text-gray-200" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white dark:bg-gray-800 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <FiGithub size={20} className="text-gray-800 dark:text-gray-200" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="font-bold text-lg line-clamp-1 text-gray-900 dark:text-gray-300 group-hover:text-teal-600 dark:group-hover:text-teal-400">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex gap-2 mt-2 flex-wrap">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
