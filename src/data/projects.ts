export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  liveUrl?: string
  githubUrl?: string
  comingSoon?: boolean
  gradient: string
}

export const projects: Project[] = [
  {
    id: 'portfolio',
    title: 'Personal Portfolio',
    description:
      'This website — my first shipped project. A responsive React portfolio with dark mode, smooth scrolling, scroll animations, and a mobile-friendly layout. Built from scratch with React, TypeScript, and Vite.',
    tags: ['React', 'TypeScript', 'Vite', 'CSS'],
    liveUrl: 'https://portfolio-seven-rho-37.vercel.app/',
    githubUrl: 'https://github.com/throwerderricka-arch/Portfolio',
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 50%, #3b82f6 100%)',
  },
  {
    id: 'coming-soon',
    title: 'Full-Stack App (In Progress)',
    description:
      'My next project — a full-stack web app using React, Node.js, and Express. Currently in development. Check back soon or follow my GitHub for updates.',
    tags: ['React', 'Node.js', 'Express', 'TypeScript'],
    comingSoon: true,
    gradient: 'linear-gradient(135deg, #27272a 0%, #3f3f46 50%, #52525b 100%)',
  },
]
