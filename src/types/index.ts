export interface NavItem {
  label: string
  href: string
  hasDropdown?: boolean
  dropdownItems?: { label: string; href: string }[]
}

export interface StatItem {
  id: string
  value: string
  label: string
}

export interface ServiceItem {
  id: string
  title: string
  description: string
  image?: string
  iconType?: "planning" | "management" | "contracting" | "interior" | "exterior" | "space"
  link: string
}

export interface ProjectItem {
  id: string
  title: string
  category?: string
  location: string
  image: string
  link: string
  description?: string
  featured?: boolean
}

export interface TestimonialItem {
  id: string
  quote: string
  author: string
  role: string
  company?: string
  avatar: string
}

export interface BlogPostItem {
  id: string
  title: string
  excerpt: string
  category?: string
  date: string
  readTime?: string
  image: string
  link: string
}

export interface ClientLogo {
  id: string
  name: string
  svg?: string
}

export interface ValueItem {
  id: string
  title: string
  description: string
  iconType: "quality" | "commitment" | "innovation" | "openness" | "growth" | "leadership"
}

export interface OfficeItem {
  id: string
  name?: string
  title: string
  description: string
  email: string
  phone?: string
  location?: string
  image: string
}

export interface TeamMemberItem {
  id: string
  name: string
  role: string
  description: string
  image: string
}

export interface FaqItem {
  question: string
  answer: string
}

export interface BlogCategoryItem {
  id: string
  title: string
  description: string
  iconType: "remodeling" | "design" | "construction"
  link: string
}
