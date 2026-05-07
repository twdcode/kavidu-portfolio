'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import type { Project } from '@/lib/types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="group bg-[#18181B] border border-[#25252A] rounded-xl overflow-hidden hover:border-[#FF7A1A] transition-all duration-300">
      {/* Thumbnail */}
      <div className="relative w-full aspect-video overflow-hidden bg-gradient-to-br from-[#25252A] to-[#18181B] flex items-center justify-center">
        {!imageError ? (
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#25252A] to-[#18181B]">
            <p className="text-[#8A8A91] text-sm">Project Thumbnail</p>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category Chip */}
        <div className="inline-block mb-4">
          <span className="px-3 py-1 bg-[#25252A] text-[#FF7A1A] text-xs font-semibold rounded-full">
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-white font-bold text-lg mb-2 line-clamp-2">
          {project.title}
        </h3>

        {/* Platform */}
        <p className="text-[#B4B4B8] text-sm mb-4">{project.platform}</p>

        {/* Button */}
        <Link
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 bg-[#FF7A1A] hover:bg-[#FF8F3A] text-white rounded-lg font-semibold text-sm transition-colors"
        >
          {project.buttonLabel}
        </Link>
      </div>
    </div>
  );
}
