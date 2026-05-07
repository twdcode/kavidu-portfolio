import Link from 'next/link';
import Image from 'next/image';
import type { HeroSection, Stat, Brand } from '@/lib/types';

interface HeroProps {
  hero: HeroSection;
  stats: Stat[];
  brand: Brand;
}

export default function Hero({ hero, stats, brand }: HeroProps) {
  return (
    <section id="home" className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
          {/* Left Side - Text */}
          <div>
            <p className="text-[#FF7A1A] text-sm font-semibold mb-4 uppercase tracking-wide">
              {hero.eyebrow}
            </p>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {hero.title}
            </h1>
            <p className="text-[#FF7A1A] text-lg mb-6">{hero.subtitle}</p>
            <p className="text-[#B4B4B8] text-base leading-relaxed mb-8">
              {hero.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mb-8">
              {hero.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-[#18181B] border border-[#25252A] text-[#B4B4B8] rounded-lg text-sm hover:border-[#FF7A1A] transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={hero.primaryCta.href}
                className="px-8 py-3 bg-[#FF7A1A] hover:bg-[#FF8F3A] text-white rounded-lg font-semibold transition-colors text-center sm:w-auto"
              >
                {hero.primaryCta.label}
              </Link>
              <Link
                href={hero.secondaryCta.href}
                className="px-8 py-3 bg-[#18181B] border border-[#25252A] text-white hover:border-[#FF7A1A] rounded-lg font-semibold transition-colors text-center sm:w-auto"
              >
                {hero.secondaryCta.label}
              </Link>
            </div>
          </div>

          {/* Right Side - Creator Card */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Glow Effect */}
            <div className="absolute -inset-8 bg-gradient-to-br from-[#FF7A1A]/20 to-transparent rounded-2xl blur-3xl" />

            {/* Card */}
            <div className="relative w-full max-w-sm bg-[#18181B] border border-[#25252A] rounded-2xl p-8 backdrop-blur-sm">
              {/* Profile Section */}
              <div className="flex flex-col items-center mb-6">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-[#FF7A1A]">
                  <Image
                    src="/images/kd-profile.jpg"
                    alt={brand.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{brand.name}</h3>
                <p className="text-[#FF7A1A] font-semibold text-sm mb-4">{brand.role}</p>
              </div>

              {/* Availability Badge */}
              <div className="bg-[#25252A]/50 border border-[#FF7A1A]/30 rounded-lg px-4 py-3 text-center mb-6">
                <p className="text-[#B4B4B8] text-sm">{brand.availability}</p>
              </div>

              {/* Tools */}
              <div className="mb-6">
                <p className="text-[#8A8A91] text-xs uppercase tracking-wider mb-3">Editing Tools</p>
                <div className="space-y-2">
                  <p className="text-white font-semibold">CapCut Pro</p>
                  <p className="text-white font-semibold">Adobe Premiere Pro</p>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-[#25252A] pt-6">
                <p className="text-[#8A8A91] text-xs uppercase tracking-wider mb-2">Based in</p>
                <p className="text-white font-semibold">{brand.location}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-[#18181B] border border-[#25252A] rounded-lg p-6 text-center">
              <p className="text-4xl lg:text-5xl font-bold text-[#FF7A1A] mb-2">
                {stat.value}
              </p>
              <p className="text-[#8A8A91] text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
