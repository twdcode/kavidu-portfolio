import Link from 'next/link';
import type { ContactSection } from '@/lib/types';

interface ContactCTAProps {
  contact: ContactSection;
}

export default function ContactCTA({ contact }: ContactCTAProps) {
  return (
    <section id="contact" className="py-20 px-6 border-t border-[#25252A]">
      <div className="max-w-4xl mx-auto">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF7A1A]/10 to-transparent blur-3xl -z-10" />

        <div className="bg-gradient-to-br from-[#18181B] to-[#141416] border border-[#FF7A1A]/20 rounded-2xl p-12 lg:p-16 text-center relative">
          {/* Optional Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FF7A1A] to-transparent rounded-t-2xl" />

          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            {contact.sectionTitle}
          </h2>
          <p className="text-[#B4B4B8] text-lg mb-10 max-w-2xl mx-auto">
            {contact.description}
          </p>

          {/* Buttons Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {contact.buttons.map((button) => (
              <Link
                key={button.href}
                href={button.href}
                target={button.href.startsWith('http') ? '_blank' : undefined}
                rel={button.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="px-4 py-3 bg-[#FF7A1A] hover:bg-[#FF8F3A] text-white rounded-lg font-semibold text-sm transition-colors active:scale-95 transition-transform"
              >
                {button.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
