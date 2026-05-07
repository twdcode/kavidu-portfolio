export interface NavLink {
  label: string;
  href: string;
}

export interface CTA {
  label: string;
  href: string;
}

export interface Brand {
  name: string;
  role: string;
  location: string;
  logoText: string;
  availability: string;
}

export interface HeroSection {
  eyebrow: string;
  title: string;
  subtitle: string;
  specialization: string;
  description: string;
  primaryCta: CTA;
  secondaryCta: CTA;
  tags: string[];
}

export interface Stat {
  value: string;
  label: string;
}

export interface Project {
  title: string;
  category: string;
  platform: string;
  url: string;
  buttonLabel: string;
  thumbnail: string;
}

export interface WorkSection {
  sectionTitle: string;
  sectionDescription: string;
  projects: Project[];
}

export interface Service {
  title: string;
  description: string;
}

export interface ServicesSection {
  sectionTitle: string;
  sectionDescription: string;
  items: Service[];
}

export interface ToolsSection {
  sectionTitle: string;
  items: string[];
}

export interface AboutSection {
  sectionTitle: string;
  description: string;
}

export interface ContactInfo {
  email: string;
  whatsappNumber: string;
  whatsappDisplay: string;
}

export interface Social {
  label: string;
  href: string;
  icon: 'whatsapp' | 'facebook' | 'instagram' | 'tiktok';
}

export interface ContactSection {
  sectionTitle: string;
  description: string;
  primaryButton: CTA;
}

export interface FooterSection {
  text: string;
  links: NavLink[];
}

export interface Portfolio {
  brand: Brand;
  navigation: NavLink[];
  hero: HeroSection;
  stats: Stat[];
  work: WorkSection;
  services: ServicesSection;
  tools: ToolsSection;
  about: AboutSection;
  contactInfo: ContactInfo;
  socials: Social[];
  contact: ContactSection;
  footer: FooterSection;
}
