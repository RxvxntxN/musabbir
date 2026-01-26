// app/components/ProjectGrid.tsx
import { PlayCircle, ExternalLink} from "lucide-react";
import { FiGithub } from "react-icons/fi";

interface ProjectCard {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  tags: string[];
  views?: string;
  date?: string;
  liveUrl?: string;
  githubUrl?: string;
}

const projects: ProjectCard[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce with Next.js and Stripe",
    thumbnail: "/projects/ecommerce.jpg",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind"],
    views: "1.2k views",
    date: "2 months ago",
    liveUrl: "https://demo.com",
    githubUrl: "https://github.com/yourrepo",
  },
  {
    id: "2",
    title: "Task Management App",
    description: "Real-time collaborative task management",
    thumbnail: "/projects/taskapp.jpg",
    tags: ["React", "Firebase", "Tailwind", "Zustand"],
    views: "800 views",
    date: "1 month ago",
    liveUrl: "https://tasks.demo.com",
    githubUrl: "https://github.com/yourrepo/tasks",
  },
  // More project objects can be added here
];

export default function ProjectGrid() {
  return (
    <div className="p-4 md:p-6">
      
      <div className="flex gap-2 mb-6 flex-wrap">
        <button className="px-4 py-2 bg-black text-white rounded-full">All</button>
        <button className="px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200">Web Dev</button>
        <button className="px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200">Mobile</button>
        <button className="px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200">Design</button>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="group cursor-pointer">
           
            <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-200 mb-3">
              
              <div className="w-full h-full bg-linear-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                <PlayCircle className="w-16 h-16 text-gray-400 group-hover:scale-110 transition-transform" />
              </div>
              
              
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="flex gap-4">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" 
                     className="p-3 bg-white rounded-full hover:bg-gray-100">
                    <ExternalLink size={20} />
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                     className="p-3 bg-white rounded-full hover:bg-gray-100">
                    <FiGithub size={20} />
                  </a>
                </div>
              </div>
            </div>

            
            <div className="space-y-1">
              <h3 className="font-semibold text-lg line-clamp-1 group-hover:text-teal-600">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 line-clamp-2">{project.description}</p>
              
              {/* Tags */}
              <div className="flex gap-2 mt-2 flex-wrap">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2 py-1 bg-gray-100 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Stats */}
              <div className="flex items-center text-sm text-gray-500 mt-2">
                <span>{project.views}</span>
                <span className="mx-2">•</span>
                <span>{project.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}