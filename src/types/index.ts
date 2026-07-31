/**
 * Navigation item type
 */
export interface NavItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

/**
 * Experience item type
 */
export interface Experience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate?: string;
  current?: boolean;
  description: string;
  accomplishments: string[];
  technologies?: string[];
  metrics?: Array<{
    label: string;
    value: string;
  }>;
}

/**
 * Project type
 */
export interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  outcome: string;
  technologies: string[];
  images?: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

/**
 * Gallery image type — a single placeholder/photo within a gallery
 */
export interface GalleryImage {
  label: string;
  caption?: string;
}

/**
 * Gallery type — a photo shoot or location shown on /portfolio
 */
export interface Gallery {
  slug: string;
  title: string;
  location: string;
  date?: string;
  description: string;
  images: GalleryImage[];
}

/**
 * Skill category type
 */
export interface SkillCategory {
  id: string;
  name: string;
  skills: string[];
}

/**
 * Social link type
 */
export interface SocialLink {
  name: string;
  url: string;
  icon?: React.ReactNode;
}
