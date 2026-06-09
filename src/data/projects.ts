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
    id: 'task-manager',
    title: 'Task Manager — Full-Stack App',
    description:
      'A full-stack task manager with a React/TypeScript frontend and Express REST API. Features CRUD operations, filter tabs (All/Active/Done), JSON file persistence, and a unified production deploy serving both UI and API from one server.',
    tags: ['React', 'Node.js', 'Express', 'TypeScript', 'REST API'],
    liveUrl: 'https://task-manager-uwzw.onrender.com',
    githubUrl: 'https://github.com/throwerderricka-arch/task-manager',
    gradient: 'linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%)',
  },
]
