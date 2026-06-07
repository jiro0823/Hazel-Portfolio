export type SocialLink = {
  label: string
  href: string
}

export type SkillGroup = {
  title: string
  skills: string[]
}

export type FeaturedWork = {
  title: string
  type: string
  description: string
  href: string
  highlights: string[]
}

export type TimelineItem = {
  period: string
  title: string
  place: string
  description: string
}

export type Portfolio = {
  name: string
  title: string
  location: string
  email: string
  intro: string
  hero: {
    eyebrow: string
    signature: string
    primaryCta: SocialLink
    secondaryCta: SocialLink
  }
  socials: SocialLink[]
  about: {
    heading: string
    body: string[]
    traits: string[]
  }
  stats: Array<{
    value: string
    label: string
  }>
  skillGroups: SkillGroup[]
  works: FeaturedWork[]
  timeline: TimelineItem[]
  contact: {
    heading: string
    body: string
  }
}

export const portfolio = {
  name: 'Hazel P. Felicilda',
  title: 'Frontend Developer & UI/UX Designer',
  location: 'Panabo, Philippines',
  email: 'Felicilda.hazel46@gmail.com',
  intro:
    'I am a Frontend Developer and UI/UX Designer passionate about creating modern, user-friendly, and visually engaging digital experiences. I enjoy transforming ideas into intuitive interfaces that combine clean design, usability, and responsive web development. Continuously learning and improving, I strive to build solutions that deliver both functionality and exceptional user experiences.',
  hero: {
    eyebrow: 'Portfolio made with care',
    signature: 'Thoughtful interfaces, warm details, and polished web experiences.',
    primaryCta: {
      label: 'View her work',
      href: '#projects',
    },
    secondaryCta: {
      label: 'Contact Hazel',
      href: 'mailto:Felicilda.hazel46@gmail.com',
    },
  },
  socials: [
    {
      label: 'GitHub',
      href: 'https://github.com/Graham-Bar',
    },
  ],
  about: {
    heading: 'A designer-developer with a soft eye for detail',
    body: [
      'Hazel builds digital experiences that feel calm, clear, and intentional. Her work blends frontend development with UI/UX thinking, so every screen is shaped around both beauty and usability.',
      'This portfolio uses placeholder project and memory details in a few sections. Replace them with Hazel\'s real photos, client work, school achievements, certificates, and favorite milestones inside src/data/portfolio.ts.',
    ],
    traits: ['Creative', 'Detail-oriented', 'Responsive', 'User-focused'],
  },
  stats: [
    { value: '100%', label: 'Responsive mindset' },
    { value: 'UI/UX', label: 'Design-led development' },
    { value: 'Always', label: 'Learning and improving' },
  ],
  skillGroups: [
    {
      title: 'Frontend Development',
      skills: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Responsive Layouts'],
    },
    {
      title: 'UI/UX Design',
      skills: ['Wireframing', 'Prototyping', 'Design Systems', 'User Flows', 'Visual Hierarchy'],
    },
    {
      title: 'Tools & Workflow',
      skills: ['GitHub', 'Figma', 'Vite', 'Component Thinking', 'Accessibility Basics'],
    },
  ],
  works: [
    {
      title: 'SukiSave',
      type: 'Figma prototype',
      description:
        'A mobile app prototype designed to help users manage savings goals with a friendly, easy-to-follow interface and practical money-tracking flow.',
      href: 'https://www.figma.com/design/JGDt84jFK7Skv2G8MUbaS4/SukiSave?node-id=0-1&t=4TDNUMGb0aQREJOh-1',
      highlights: ['Savings-focused UX', 'Figma prototype', 'Mobile app interface'],
    },
    {
      title: 'Secure Registration & Login System',
      type: 'Cybersecurity project',
      description:
        'A deployed web project focused on secure user registration and authentication, built to practice safer login flows and protected account access.',
      href: 'https://secure-registration-login-system.onrender.com/',
      highlights: ['Authentication flow', 'Secure access design', 'Live web deployment'],
    },
    {
      title: 'NV S Street Fade',
      type: 'Figma prototype',
      description:
        'A mobile barber app prototype for booking services, browsing barber details, and creating a smoother customer experience for street-style grooming services.',
      href: 'https://www.figma.com/design/rGyK4w1UaLVs76Utlqcsdk/NV-S-STREET-FADE?t=4TDNUMGb0aQREJOh-1',
      highlights: ['Booking experience', 'Service app UI', 'Mobile-first prototype'],
    },
  ],
  timeline: [
    {
      period: '2023 - Present',
      title: 'Frontend Developer & UI/UX Designer',
      place: 'Davao del Norte State College',
      description:
        'Developing practical skills in frontend development, responsive web design, and user interface design through academic projects, self-learning, and hands-on development experience. Continuously improving proficiency in modern design tools and web technologies while creating user-centered digital experiences.',
    },
    {
      period: '2023 - Present',
      title: 'Bachelor of Science in Information Technology',
      place: 'Davao del Norte State College',
      description:
        'Currently pursuing a degree in Information Technology with a focus on web development, software design, database management, and user-centered digital solutions. Actively participating in academic projects that strengthen both technical and problem-solving skills.',
    },
    {
      period: '2023',
      title: 'TVL - ICT (Information and Communications Technology)',
      place: 'Panabo City Senior High School',
      description:
        'Graduated with Honors. Built a strong foundation in programming, digital design, technical problem-solving, and information technology concepts that inspired a passion for frontend development and UI/UX design.',
    },
  ],
  contact: {
    heading: 'Let\'s create something beautiful and useful.',
    body:
      'For collaborations, opportunities, or project conversations, Hazel is open to thoughtful work that combines design, development, and meaningful user experiences.',
  },
} satisfies Portfolio
