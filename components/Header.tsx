'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import type { NavLink, CTA } from '@/lib/types';

interface HeaderProps {
  brand: {
    name: string;
    logoText: string;
  };
  navigation: NavLink[];
  hireCta: CTA;
}

export default function Header({ brand, navigation, hireCta }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0B0B0C]/80 backdrop-blur-md border-b border-[#25252A]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="#home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-[#FF7A1A] rounded-lg flex items-center justify-center font-bold text-[#0B0B0C] group-hover:bg-[#FF8F3A] transition-colors">
            {brand.logoText}
          </div>
          <span className="text-white font-semibold hidden sm:inline">{brand.name}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navigation.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#B4B4B8] hover:text-white transition-colors text-sm"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <Link
            href={hireCta.href}
            className="px-6 py-2 bg-[#FF7A1A] hover:bg-[#FF8F3A] text-white rounded-lg font-semibold text-sm transition-colors"
          >
            {hireCta.label}
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-[#141416] border-t border-[#25252A] px-6 py-4 space-y-4">
          {navigation.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-[#B4B4B8] hover:text-white transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={hireCta.href}
            className="block w-full text-center px-6 py-2 bg-[#FF7A1A] hover:bg-[#FF8F3A] text-white rounded-lg font-semibold transition-colors mt-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            {hireCta.label}
          </Link>
        </nav>
      )}
    </header>
  );
}
