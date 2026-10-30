export interface Project {
  slug: string;
  title: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  liveUrl: string;
  githubUrl: string;
  tags: string[];
  role: string;
  duration?: string;
  category: string;
  overview: string[];
  features: string[];
  technologies: {
    name: string;
    category: "Frontend" | "Backend" | "Styling" | "Deployment" | "API";
  }[];
  challenges: {
    challenge: string;
    solution: string;
  }[];
  futureImprovements: string[];
}

export interface SkillCategory {
  title: string;
  iconName: "frontend" | "backend" | "tools" | "design";
  description: string;
  skills: {
    name: string;
    level?: string;
    icon?: string;
  }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  location?: string;
  description: string;
  highlights?: string[];
  isCurrent?: boolean;
}

export interface AchievementItem {
  title: string;
  organization: string;
  year: string;
  description: string;
  badge: string;
}

export interface PersonalInfo {
  name: string;
  lastName: string;
  designation: string;
  availability: string;
  location: string;
  email: string;
  phone: string;
  whatsapp: string;
  whatsappUrl: string;
  github: string;
  linkedin: string;
  twitter: string;
  bioHeadline: string;
  bioShort: string;
  aboutStory: string[];
  quickFocus: {
    title: string;
    description: string;
  }[];
  stats: {
    label: string;
    value: string;
  }[];
}
