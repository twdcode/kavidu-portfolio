import type { AboutSection } from '@/lib/types';

interface AboutProps {
  about: AboutSection;
}

export default function About({ about }: AboutProps) {
  return (
    <section id="about" className="py-20 px-6 border-t border-[#25252A]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
          {about.sectionTitle}
        </h2>

        <div className="bg-[#18181B] border border-[#25252A] rounded-xl p-8 lg:p-12">
          <p className="text-[#B4B4B8] text-lg leading-relaxed">
            {about.description}
          </p>
        </div>
      </div>
    </section>
  );
}
