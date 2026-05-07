import type { ServicesSection } from '@/lib/types';

interface ServicesProps {
  services: ServicesSection;
}

export default function Services({ services }: ServicesProps) {
  return (
    <section id="services" className="py-20 px-6 border-t border-[#25252A]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            {services.sectionTitle}
          </h2>
          <p className="text-[#B4B4B8] text-lg max-w-2xl">
            {services.sectionDescription}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.items.map((service) => (
            <div
              key={service.title}
              className="bg-[#18181B] border border-[#25252A] rounded-xl p-8 hover:border-[#FF7A1A] transition-colors group"
            >
              {/* Icon Mark */}
              <div className="w-12 h-12 bg-[#25252A] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#FF7A1A] transition-colors">
                <div className="w-6 h-6 border-2 border-[#FF7A1A] rounded-md" />
              </div>

              {/* Content */}
              <h3 className="text-white font-bold text-xl mb-3">
                {service.title}
              </h3>
              <p className="text-[#B4B4B8] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
