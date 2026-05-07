'use client';

import Link from 'next/link';
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
} from 'react-icons/fa';
import type { ContactSection, Social } from '@/lib/types';

interface ContactCTAProps {
  contact: ContactSection;
  socials: Social[];
}

const socialIconMap: Record<string, React.ReactNode> = {
  whatsapp: <FaWhatsapp size={18} />,
  facebook: <FaFacebookF size={18} />,
  instagram: <FaInstagram size={18} />,
  tiktok: <FaTiktok size={18} />,
};

export default function ContactCTA({ contact, socials }: ContactCTAProps) {
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

          {/* Primary CTA Button */}
          <div className="mb-8">
            <Link
              href={contact.primaryButton.href}
              className="inline-block px-8 py-3 bg-[#FF7A1A] hover:bg-[#FF8F3A] text-white rounded-lg font-semibold transition-colors active:scale-95 transition-transform"
            >
              {contact.primaryButton.label}
            </Link>
          </div>

          {/* Social Icons Row */}
          <div className="flex items-center justify-center gap-3 flex-wrap">
            {socials.map((social) => (
              <Link
                key={social.icon}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-[#25252A] hover:border-[#FF7A1A] text-[#B4B4B8] hover:text-[#FF7A1A] transition-all duration-200 hover:bg-[#FF7A1A]/10 group"
                aria-label={social.label}
                title={social.label}
              >
                {socialIconMap[social.icon]}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
