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
