import type { ToolsSection } from '@/lib/types';

interface ToolsProps {
  tools: ToolsSection;
}

export default function Tools({ tools }: ToolsProps) {
  return (
    <section className="py-16 px-6 border-t border-[#25252A]">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-[#8A8A91] text-sm uppercase tracking-wider font-semibold mb-6">
          {tools.sectionTitle}
        </h3>
        <div className="flex flex-wrap gap-3">
          {tools.items.map((tool) => (
            <span
              key={tool}
              className="px-4 py-2 bg-[#18181B] border border-[#25252A] text-[#B4B4B8] rounded-lg text-sm hover:border-[#FF7A1A] hover:text-[#FF7A1A] transition-colors"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
