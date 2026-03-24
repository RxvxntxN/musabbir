'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Eye } from 'lucide-react';

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  skills?: string[];
}

const certificates: Certificate[] = [
  {
    id: '1',
    title: 'Internship Certificate',
    issuer: 'EWN Bangladesh Limited',
    date: '2024',
    image: '/images/InternshipCertificate.jpg',
    skills: ['Web Development', 'React', 'Next.js'],
  },
  {
    id: '2',
    title: 'JavaScript Algorithms and Data Structures',
    issuer: 'FreeCodeCamp',
    date: '2025',
    image:
      '/images/www.freecodecamp.org_certification_rxvxntxn_javascript-algorithms-and-data-structures-v8.png',
    skills: ['JavaScript', 'Algorithms', 'Data Structures'],
  },
];

export default function CertificatesPage() {
  const openFullImage = (imagePath: string) => {
    window.open(imagePath, '_blank');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-stone-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-teal-500 dark:text-gray-400 dark:hover:text-teal-400 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-700 dark:text-gray-300">My</span>
            <span className="text-teal-500"> Certificates</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Professional certifications and achievements
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="group bg-white dark:bg-stone-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Certificate Image */}
              <div
                className="relative h-56 w-full overflow-hidden bg-gray-100 dark:bg-stone-700 cursor-pointer"
                onClick={() => openFullImage(cert.image)}
              >
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Eye className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Certificate Info */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-1">
                  {cert.title}
                </h3>
                <p className="text-teal-500 font-medium text-sm">{cert.issuer}</p>
                <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">{cert.date}</p>

                {/* Skills Tags */}
                {cert.skills && cert.skills.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 text-xs bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
