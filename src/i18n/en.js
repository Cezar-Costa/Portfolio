const en = {
  nav: {
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    experience: 'Experience',
    contact: 'Contact',
  },
  hero: {
    greeting: "Hi, I'm",
    name: 'Cézar Costa',
    title: 'Fullstack Developer',
    titles: ['Fullstack Developer', 'Backend with Django', 'Frontend with React', 'Deployment with Docker'],
    subtitle: 'Django • React • Docker',
    description:
      'I build complete systems — from database to UI, from server setup to production deployment.',
    cta_projects: 'View Projects',
    cta_contact: 'Get In Touch',
    cta_resume: 'Download Resume',
    badge: 'Available for projects',
  },
  about: {
    title: 'About Me',
    p1: "I'm a fullstack developer focused on building robust and scalable applications. I handle the entire development cycle: data modeling, REST APIs, modern interfaces, and production deployments with Docker and Nginx.",
    p2: 'My edge is mastering the full stack — backend, frontend, and infrastructure. This means I can deliver end-to-end functional systems without depending on multiple specialists.',
    p3: 'Beyond technical skills, my experience in IT Support gave me a clear understanding of actual user pain points. This allows me to build systems that are not only functional but highly intuitive and user-centric.',
    skills_title: 'Stack & Tools',
    stack: [
      { category: 'Backend', items: ['Django', 'Django REST Framework', 'PostgreSQL', 'Python'] },
      { category: 'Frontend', items: ['React', 'Vite', 'JavaScript', 'HTML/CSS'] },
      { category: 'DevOps', items: ['Docker', 'Nginx', 'Linux', 'Git'] },
      { category: 'Others', items: ['WebSockets', 'Web Push (VAPID)', 'REST APIs', 'JWT'] },
    ],
    highlight_title: 'What sets me apart',
    highlights: [
      { icon: '⚙️', label: 'Solid backend' },
      { icon: '🎨', label: 'Modern frontend' },
      { icon: '🚀', label: 'Production deployment' },
    ],
    highlight_desc: 'Few developers master all three. I do.',
  },
  projects: {
    title: 'Projects',
    subtitle: 'Real systems, built from scratch to deployment.',
    items: [
      {
        name: 'HiperDesk',
        tagline: 'Technical Support System',
        description:
          'Full-featured support platform with a customer portal and admin dashboard. Includes authentication, ticket management, real-time chat, file uploads, and push notifications. Deployed at Hiper Tecnologia in 2026.',
        tech: ['Django', 'DRF', 'React', 'Vite', 'PostgreSQL', 'Docker', 'Nginx', 'Web Push'],
        highlights: [
          'Real-time chat via WebSockets',
          'Push notifications with VAPID',
          'Deployed to production environment',
          'Customer portal + admin panel',
          'Live at Hiper Tecnologia (2026)',
        ],
        status: 'Completed',
        github: 'https://github.com/Cezar-Costa',
        demo: null,
      },
    ],
    status_label: 'Status',
    highlights_label: 'Highlights',
    btn_github: 'GitHub',
    btn_demo: 'Demo',
  },
  experience: {
    title: 'Experience',
    subtitle: 'My journey in tech.',
    items: [
      {
        year: '2026',
        role: 'HiperDesk — Completed',
        company: 'Hiper Tecnologia',
        description: 'Complete technical support system developed and deployed at Hiper Tecnologia. Includes customer portal, admin dashboard, real-time chat, file uploads, and push notifications. Project finalized and live in production.',
        tech: ['Django', 'React', 'Docker', 'PostgreSQL', 'Nginx', 'Web Push'],
      },
      {
        year: '2025 - 2026',
        role: 'IT Support',
        company: 'Hiper Tecnologia',
        description: 'Provided direct technical support to customers, helping them resolve IT issues, system configurations, and troubleshooting hardware and software problems.',
        tech: ['Technical Support', 'Customer Service', 'Troubleshooting', 'Networking'],
      },
    ],
  },
  contact: {
    title: 'Contact',
    subtitle: "Have a project in mind? Let's talk.",
    email_label: 'Email',
    github_label: 'GitHub',
    linkedin_label: 'LinkedIn',
    form_name: 'Your name',
    form_email: 'Your email',
    form_message: 'Your message',
    form_send: 'Send Message',
    form_sending: 'Sending...',
    form_success: "Message sent! I'll get back to you soon.",
    form_error: 'Something went wrong. Try again or send a direct email.',
  },
  footer: {
    built: 'Built with React + Vite',
    rights: 'All rights reserved.',
  },
}

export default en
