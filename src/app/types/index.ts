export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  tags: string[];
  color?: string;
}

export interface Industry {
  id: string;
  name: string;
  description: string;
  icon: string;
  services: string[];
  stats: { projects: string; years: string };
  gradient: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  industry: string;
  location: string;
  year: string;
  image: string;
  results: string[];
  tags: string[];
  gradient: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface Insight {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  author: string;
  readTime: string;
}

export interface Career {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  isNew?: boolean;
}

export interface NavItem {
  name: string;
  path: string;
  submenu?: {
    name: string;
    path: string;
    icon?: string;
    desc?: string;
  }[];
}
