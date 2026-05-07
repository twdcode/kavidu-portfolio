import type { WorkSection } from '@/lib/types';
import ProjectCard from './ProjectCard';

interface FeaturedWorkProps {
  work: WorkSection;
}

export default function FeaturedWork({ work }: FeaturedWorkProps) {
  return (
    <section id="work" className="py-20 px-6 border-t border-[#25252A]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            {work.sectionTitle}
          </h2>
          <p className="text-[#B4B4B8] text-lg max-w-2xl">
            {work.sectionDescription}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {work.projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
