export interface SkillCategory {
  name: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Languages',
    skills: [
      'JavaScript',
      'TypeScript',
      'Python',
      'HTML',
      'CSS',
    ],
  },
  {
    name: 'Frameworks & Tools',
    skills: [
      'React',
      'Vite',
      'Node.js',
      'Express',
      'Cursor AI',
      'Git & GitHub',
    ],
  },
  {
    name: 'Strengths',
    skills: [
      'Responsive Web Apps',
      'Clean Code Principles',
      'Debugging',
      'Problem Solving',
      'Fast Learner',
      'IT Basics',
    ],
  },
]
