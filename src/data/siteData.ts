import {
  NavItem,
  StatItem,
  ServiceItem,
  ProjectItem,
  TestimonialItem,
  BlogPostItem,
  BlogCategoryItem,
  ClientLogo,
  ValueItem,
  OfficeItem,
  TeamMemberItem,
  FaqItem,
} from "../types"

// Asset imports from imports directory
import imgHero from "../../imports/10185a3f5f88a38f8bcacfc25ce58d6da8273c1a.png"
import imgAboutWorker from "../../imports/f9641b74eab7876de42a46053eda0bacf22852e2.png"
import imgAboutTeam from "../../imports/1ad010fa1382c9d050d9cb909c3a89770a426701.png"
import imgService1 from "../../imports/b3e4a346bae70ceaf0c89f2ea4affd9de0a49894.png"
import imgService2 from "../../imports/79dd92e28fbfb330bbcf52d469228d9c4a793783.png"
import imgService3 from "../../imports/f85c9045cdb0319fa07c80500d2d30e9393696c3.png"
import imgVideoThumb from "../../imports/55cdf6636d96e94ea6678b173e960498a200267f.png"
import imgCtaBuilding from "../../imports/7c1558adf697e4a8c82a0798bc0b706a59430731.png"
import imgProject1 from "../../imports/2a19c9c381470d4d62385afa418677c3ba02379b.png"
import imgProject2 from "../../imports/00c0e6650d0225015d4bdb8a271c67518b0892be.png"
import imgProject3 from "../../imports/a9da9c8505905e52f88d58ebb52495a1907ac810.png"
import imgTestimonialStructure from "../../imports/cbe1c1f0dd1d8a41c62cb9b180de6d5834406827.png"
import imgTestimonialAvatar from "../../imports/a7be56f17b9d8fae3c5224f02b27724b75f4169c.png"
import imgBlog1 from "../../imports/382844f52488401d19598d23ba66a83216ce0115.png"
import imgBlog2 from "../../imports/5cd29f14b45346137a6c3cc28f7840f705b60e72.png"
import imgBlog3 from "../../imports/ea7529eb62807bd8df4481e35977587eb7aaa41e.png"
import imgRoofBanner from "../../imports/roof_construction_banner.jpg"
import imgPrinter from "../../imports/printerimage.png"

export const siteImages = {
  hero: imgHero,
  aboutWorker: imgAboutWorker,
  aboutTeam: imgAboutTeam,
  roofBanner: imgRoofBanner,
  typewriterBanner: imgPrinter,
  service1: imgService1,
  service2: imgService2,
  service3: imgService3,
  videoThumb: imgVideoThumb,
  ctaBuilding: imgCtaBuilding,
  project1: imgProject1,
  project2: imgProject2,
  project3: imgProject3,
  testimonialStructure: imgTestimonialStructure,
  testimonialAvatar: imgTestimonialAvatar,
  blog1: imgBlog1,
  blog2: imgBlog2,
  blog3: imgBlog3,
}

export const navLeftItems: NavItem[] = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "BLOG", href: "#blog" },
  { label: "CONTACT", href: "#contact" },
]

export const megaMenuData = {
  mainPages: {
    column1: [
      { label: "HOME (SALES)", href: "#home", route: "home" },
      { label: "HOME V1", href: "#home", route: "home" },
      { label: "HOME V2", href: "#home", route: "home" },
      { label: "HOME V3", href: "#home", route: "home" },
      { label: "ABOUT", href: "#about", route: "about" },
      { label: "SERVICES", href: "#services", route: "services" },
      { label: "SERVICES SINGLE", href: "#services", route: "services" },
      { label: "BLOG V1", href: "#blog", route: "blog" },
    ],
    column2: [
      { label: "BLOG V2", href: "#blog", route: "blog" },
      { label: "BLOG V3", href: "#blog", route: "blog" },
      { label: "BLOG CATEGORY", href: "#blog", route: "blog" },
      { label: "BLOG POST", href: "#blog", route: "blog" },
      { label: "TEAM", href: "#about", route: "about" },
      { label: "TEAM MEMBER", href: "#about", route: "about" },
      { label: "PROJECTS", href: "#work", route: "work" },
      { label: "SINGLE PROJECT", href: "#work", route: "work" },
    ],
    column3: [
      { label: "CONTACT V1", href: "#contact", route: "contact" },
      { label: "CONTACT V2", href: "#contact", route: "contact" },
      { label: "CONTACT V3", href: "#contact", route: "contact" },
      { label: "SINGLE PROJECT", href: "#work", route: "work" },
      { label: "SHOP", href: "#home", route: "home" },
      { label: "SHOP SINGLE", href: "#home", route: "home" },
      { label: "REQUEST A QUOTE", href: "#quote", isQuote: true },
      { label: "COMING SOON", href: "#home", route: "home" },
      { label: "MORE WEBFLOW TEMPLATE", href: "#templates", isBold: true, route: "home" },
    ],
  },
  utilityPages: [
    { label: "STYLE GUIDE", href: "#home", route: "home" },
    { label: "START HERE", href: "#home", route: "home" },
    { label: "404 NOT FOUND", href: "#home", route: "home" },
    { label: "PASSWORD PROTECTED", href: "#home", route: "home" },
    { label: "LICENSES", href: "#home", route: "home" },
    { label: "CHANGELOG", href: "#home", route: "home" },
  ],
}

export const navRightItems: NavItem[] = [
  {
    label: "PAGES",
    href: "#pages",
    hasDropdown: true,
  },
  { label: "SERVICES", href: "#services" },
  { label: "WORK", href: "#work" },
]

export const statsData: StatItem[] = [
  { id: "1", value: "350+", label: "Successful projects" },
  { id: "2", value: "65+", label: "Team members" },
  { id: "3", value: "80+", label: "Happy clients" },
  { id: "4", value: "100%", label: "Clients satisfaction" },
]

export const servicesData: ServiceItem[] = [
  {
    id: "planning",
    title: "Project planning",
    description:
      "Lorem ipsum dolor sit amet consectetur ut facilisis sit nulla sem arcu penatibus.",
    image: imgService1,
    link: "#services",
  },
  {
    id: "management",
    title: "Project management",
    description:
      "Lorem ipsum dolor sit amet consectetur ut facilisis sit nulla sem arcu penatibus.",
    image: imgService2,
    link: "#services",
  },
  {
    id: "contracting",
    title: "General contracting",
    description:
      "Lorem ipsum dolor sit amet consectetur ut facilisis sit nulla sem arcu penatibus.",
    image: imgService3,
    link: "#services",
  },
]

export const servicesPageData: ServiceItem[] = [
  {
    id: "planning",
    title: "Project planning",
    description:
      "Lorem ipsum dolor sit amet consectetur ut facilisis sit nulla sem arcu penatibus.",
    iconType: "planning",
    link: "#services",
  },
  {
    id: "management",
    title: "Project management",
    description:
      "Lorem ipsum dolor sit amet consectetur ut facilisis sit nulla sem arcu penatibus.",
    iconType: "management",
    link: "#services",
  },
  {
    id: "contracting",
    title: "General contracting",
    description:
      "Lorem ipsum dolor sit amet consectetur ut facilisis sit nulla sem arcu penatibus.",
    iconType: "contracting",
    link: "#services",
  },
  {
    id: "interior",
    title: "Interior design",
    description:
      "Lorem ipsum dolor sit amet consectetur ut facilisis sit nulla sem arcu penatibus.",
    iconType: "interior",
    link: "#services",
  },
  {
    id: "exterior",
    title: "Exterior design",
    description:
      "Lorem ipsum dolor sit amet consectetur ut facilisis sit nulla sem arcu penatibus.",
    iconType: "exterior",
    link: "#services",
  },
  {
    id: "space",
    title: "Space planning",
    description:
      "Lorem ipsum dolor sit amet consectetur ut facilisis sit nulla sem arcu penatibus.",
    iconType: "space",
    link: "#services",
  },
]

export const clientLogos: ClientLogo[] = [
  { id: "dynamic", name: "DYNAMIC" },
  { id: "labyrinth", name: "LABYRINTH" },
  { id: "integrity", name: "INTEGRITY" },
  { id: "transcend", name: "TRANSCEND" },
  { id: "enterprise", name: "ENTERPRISE" },
]

export const projectsData: ProjectItem[] = [
  {
    id: "la-building",
    title: "Building construction in Los Angeles, CA",
    location: "Los Angeles, CA",
    category: "General Construction",
    description:
      "Lorem ipsum dolor sit amet consectetur senectus velit faucibus non quisque at ut vitae platea justo nec mattis adipiscing donec tellus id vulputate ac nulla ut in aliquam ut pulvinar vestibulum nulla nisl.",
    image: imgProject1,
    link: "#work",
    featured: true,
  },
  {
    id: "hollywood-kitchen",
    title: "Kitchen remodeling in Hollywood Hills, CA",
    location: "Hollywood Hills, CA",
    category: "Remodeling",
    description:
      "Lorem ipsum dolor sit amet consectetur senectus velit faucibus non quisque at ut vitae platea justo nec mattis.",
    image: imgProject2,
    link: "#work",
  },
  {
    id: "malibu-interior",
    title: "Interior remodeling in Malibu Beach, CA",
    location: "Malibu Beach, CA",
    category: "Project Planning",
    description:
      "Lorem ipsum dolor sit amet consectetur senectus velit faucibus non quisque at ut vitae platea justo nec mattis.",
    image: imgProject3,
    link: "#work",
  },
  {
    id: "downtown-commercial",
    title: "Commercial renovation in Downtown, CA",
    location: "Downtown, CA",
    category: "General Contracting",
    description:
      "Lorem ipsum dolor sit amet consectetur senectus velit faucibus non quisque at ut vitae platea justo nec mattis.",
    image: imgCtaBuilding,
    link: "#work",
  },
  {
    id: "beverly-residence",
    title: "Modern luxury residence in Beverly Hills, CA",
    location: "Beverly Hills, CA",
    category: "Architecture Design",
    description:
      "Lorem ipsum dolor sit amet consectetur senectus velit faucibus non quisque at ut vitae platea justo nec mattis.",
    image: imgHero,
    link: "#work",
  },
  {
    id: "sf-corporate",
    title: "Corporate headquarters in San Francisco, CA",
    location: "San Francisco, CA",
    category: "Project Management",
    description:
      "Lorem ipsum dolor sit amet consectetur senectus velit faucibus non quisque at ut vitae platea justo nec mattis.",
    image: imgService2,
    link: "#work",
  },
]

export const testimonialData: TestimonialItem = {
  id: "t1",
  quote: "Great quality of service & delivered on time",
  author: "Mark Zuckerberg",
  role: "Tech Lead at Enterprise",
  avatar: imgTestimonialAvatar,
}

export const blogCategoriesData: BlogCategoryItem[] = [
  {
    id: "remodeling",
    title: "Remodeling articles",
    description:
      "Lorem ipsum dolor sit amet consectetur ut facilisis sit nulla sem arcu penatibus.",
    iconType: "remodeling",
    link: "#blog",
  },
  {
    id: "design",
    title: "Design articles",
    description:
      "Lorem ipsum dolor sit amet consectetur ut facilisis sit nulla sem arcu penatibus.",
    iconType: "design",
    link: "#blog",
  },
  {
    id: "construction",
    title: "Construction articles",
    description:
      "Lorem ipsum dolor sit amet consectetur ut facilisis sit nulla sem arcu penatibus.",
    iconType: "construction",
    link: "#blog",
  },
]

export const blogPostsData: BlogPostItem[] = [
  {
    id: "b1",
    title: "12 designers tricks for picking the perfect home color palette",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur sed potenti in justo augue volutpat nam diam.",
    category: "REMODELING",
    date: "APR 18, 2023",
    readTime: "5 min read",
    image: imgBlog1,
    link: "#blog",
  },
  {
    id: "b2",
    title: "25 color trends designers can't wait to see in 2023",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur sed potenti in justo augue volutpat nam diam.",
    category: "DESIGN",
    date: "APR 18, 2023",
    readTime: "4 min read",
    image: imgBlog2,
    link: "#blog",
  },
  {
    id: "b3",
    title: "Clever DIY home improvements you can do during the pandemic",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur sed potenti in justo augue volutpat nam diam.",
    category: "CONSTRUCTION",
    date: "APR 14, 2023",
    readTime: "6 min read",
    image: imgBlog3,
    link: "#blog",
  },
]

export const mainFooterPages = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Services Single", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Work Single", href: "#work" },
  { label: "Blog", href: "#blog" },
  { label: "Blog Single", href: "#blog" },
  { label: "Contact", href: "#contact" },
]

export const utilityFooterPages = [
  { label: "Style Guide", href: "#styleguide" },
  { label: "Start Here", href: "#starthere" },
  { label: "Password Protected", href: "#password" },
  { label: "404 Not Found", href: "#404" },
  { label: "Licenses", href: "#licenses" },
  { label: "Changelog", href: "#changelog" },
]

export const valuesData: ValueItem[] = [
  {
    id: "quality",
    title: "Quality",
    description:
      "Lorem ipsum dolor sit amet consectetur ut facilisis sit nulla sem arcu penatibus.",
    iconType: "quality",
  },
  {
    id: "commitment",
    title: "Commitment",
    description:
      "Lorem ipsum dolor sit amet consectetur ut facilisis sit nulla sem arcu penatibus.",
    iconType: "commitment",
  },
  {
    id: "innovation",
    title: "Innovation",
    description:
      "Lorem ipsum dolor sit amet consectetur ut facilisis sit nulla sem arcu penatibus.",
    iconType: "innovation",
  },
  {
    id: "openness",
    title: "Openness",
    description:
      "Lorem ipsum dolor sit amet consectetur ut facilisis sit nulla sem arcu penatibus.",
    iconType: "openness",
  },
  {
    id: "growth",
    title: "Growth",
    description:
      "Lorem ipsum dolor sit amet consectetur ut facilisis sit nulla sem arcu penatibus.",
    iconType: "growth",
  },
  {
    id: "leadership",
    title: "Leadership",
    description:
      "Lorem ipsum dolor sit amet consectetur ut facilisis sit nulla sem arcu penatibus.",
    iconType: "leadership",
  },
]

export const officeLocationsData: OfficeItem[] = [
  {
    id: "la",
    name: "LOS ANGELES",
    title: "Los Angeles, CA",
    description:
      "Lorem ipsum dolor sit amet consectetur id senectus velit faucibus quisque at lorem.",
    email: "losangeles@construcfy.com",
    phone: "(212) 760 - 892",
    location: "149 W 70th St, 9000 Los Angeles",
    image: siteImages.project3,
  },
  {
    id: "hollywood",
    name: "HOLLYWOOD HILLS",
    title: "Hollywood Hills, CA",
    description:
      "Lorem ipsum dolor sit amet consectetur id senectus velit faucibus quisque at lorem.",
    email: "hollywood@construcfy.com",
    phone: "(212) 760 - 893",
    location: "8420 Sunset Blvd, Hollywood Hills, CA",
    image: siteImages.blog2,
  },
  {
    id: "malibu",
    name: "MALIBU BEACH",
    title: "Malibu Beach, CA",
    description:
      "Lorem ipsum dolor sit amet consectetur id senectus velit faucibus quisque at lorem.",
    email: "malibu@construcfy.com",
    phone: "(212) 760 - 894",
    location: "23410 Pacific Coast Hwy, Malibu, CA",
    image: siteImages.blog1,
  },
]

export const teamMembersData: TeamMemberItem[] = [
  {
    id: "john",
    name: "John Carter",
    role: "CEO & FOUNDER",
    description:
      "Lorem ipsum dolor sit amet consectetur id senectus velit faucibus quisque at lorem.",
    image: siteImages.aboutWorker,
  },
  {
    id: "sophie",
    name: "Sophie Moore",
    role: "LEAD ARCHITECT",
    description:
      "Lorem ipsum dolor sit amet consectetur id senectus velit faucibus quisque at lorem.",
    image: siteImages.service2,
  },
  {
    id: "matt",
    name: "Matt Cannon",
    role: "CHIEF ENGINEER",
    description:
      "Lorem ipsum dolor sit amet consectetur id senectus velit faucibus quisque at lorem.",
    image: siteImages.service3,
  },
]

export const faqData: FaqItem[] = [
  {
    question: "How many years of experience does Construcfy X has?",
    answer:
      "Construcfy X has over 15 years of industry experience delivering award-winning residential, commercial, and industrial construction projects across the United States.",
  },
  {
    question: "How big is your team of contractors?",
    answer:
      "Our core team comprises over 65 certified full-time architects, engineers, project managers, and seasoned craftspeople, supplemented by a vetted network of trusted specialized subcontractors.",
  },
  {
    question: "Do you have case studies of past successful projects?",
    answer:
      "Yes, we maintain comprehensive case studies and portfolio documentation for over 350 completed projects, detailing timelines, architectural plans, materials used, and client testimonials.",
  },
]
