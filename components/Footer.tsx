import Link from 'next/link';
import type { FooterSection } from '@/lib/types';

interface FooterProps {
  footer: FooterSection;
}

export default function Footer({ footer }: FooterProps) {
  return (
    <footer className="border-t border-[#25252A] bg-[#0B0B0C]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
          {/* Copyright Text */}
          <p className="text-[#8A8A91] text-sm">
            © {new Date().getFullYear()} {footer.text}
          </p>

          {/* Footer Links */}
          <nav className="flex items-center gap-8">
            {footer.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#8A8A91] hover:text-white transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
