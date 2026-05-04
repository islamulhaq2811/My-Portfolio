export const projects = [
  {
    id: 1,
    title: 'PSX Trading Dashboard',
    description: 'Real-time stock market dashboard for Pakistan Stock Exchange with live data visualization and portfolio tracking.',
    image_url: '/psx.png',
    tech_stack: ['React', 'Chart.js', 'Node.js', 'WebSocket'],
    github_url: 'https://github.com/islamulhaq2811',
    live_url: 'https://stock-exchange-kappa.vercel.app/',
  },
  {
    id: 2,
    title: 'Mandi House',
    description: 'Agricultural marketplace connecting farmers with buyers. Features include product listings, price comparisons, and order management.',
    image_url: '/mandi-house.png',
    tech_stack: ['React', 'Tailwind CSS', 'Firebase', 'Stripe'],
    github_url: 'https://github.com/islamulhaq2811',
    live_url: 'https://mandi-house-8dik.vercel.app/',
  },
  {
    id: 3,
    title: 'Fleja',
    description: 'Modern portfolio website showcasing projects, skills, and experience with smooth animations..',
    image_url: '/fleja.png',
    tech_stack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    github_url: 'https://github.com/islamulhaq2811',
    live_url: 'https://fleja-six.vercel.app/',
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'A sleek, dark-themed portfolio website showcasing projects, skills, and experience with smooth animations.',
    image_url: '/portfolio.png',
    tech_stack: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    github_url: 'https://github.com/islamulhaq2811',
    live_url: 'https://islamulhaq28-portfolio.netlify.app/',
  },
];

export const skills = [
  {
    name: 'Frontend',
    skills: [
      { name: 'React', level: 'Advanced' },
      { name: 'JavaScript', level: 'Advanced' },
      { name: 'TypeScript', level: 'Intermediate' },
      { name: 'HTML/CSS', level: 'Advanced' },
      { name: 'Tailwind CSS', level: 'Advanced' },
      { name: 'Next.js', level: 'Intermediate' },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', level: 'Intermediate' },
      { name: 'Python', level: 'Intermediate' },
      { name: 'FastAPI', level: 'Intermediate' },
      { name: 'Express', level: 'Intermediate' },
    ],
  },
  {
    name: 'Tools & Others',
    skills: [
      { name: 'Git', level: 'Advanced' },
      { name: 'Firebase', level: 'Intermediate' },
      { name: 'PostgreSQL', level: 'Intermediate' },
    
    ],
  },
];

export const about = {
  name: 'Islam ul Haq',
  title: 'Web Developer',
  profile_image: '/images/Profile.png',
  location: 'Pakistan',
  social_links: {
    github: 'https://github.com/islamulhaq2811',
    linkedin: 'https://www.linkedin.com/in/islam-ul-haq-89a8ab34a/',
    email: 'mailto:islamulhaq2811@gmail.com',
  },
  // experience: [
  //   {
  //     id: 1,
  //     role: 'Frontend Developer',
  //     company: 'Tech Solutions Inc.',
  //     start_date: 'Jan 2024',
  //     end_date: 'Present',
  //     description: 'Developed responsive web applications using React and TypeScript. Collaborated with design and backend teams to deliver high-quality products.',
  //     technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Redux'],
  //   },
  //   {
  //     id: 2,
  //     role: 'Junior Web Developer',
  //     company: 'Digital Agency',
  //     start_date: 'Jun 2023',
  //     end_date: 'Dec 2023',
  //     description: 'Built custom websites for clients across various industries. Implemented responsive designs and optimized performance.',
  //     technologies: ['HTML', 'CSS', 'JavaScript', 'WordPress'],
  //   },
  // ],
  education: [
    {
      id: 1,
      degree: 'Bachelor of Computer Science',
      field: 'Software Engineering',
      institution: 'Virtual University of Pakistan',
      graduation_year: '2025-Continue',
    },
  ],
};
