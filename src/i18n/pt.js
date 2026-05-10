const pt = {
  nav: {
    home: 'Início',
    about: 'Sobre',
    projects: 'Projetos',
    experience: 'Experiência',
    contact: 'Contato',
  },
  hero: {
    greeting: 'Olá, eu sou',
    name: 'Cézar Costa',
    title: 'Fullstack Developer',
    titles: ['Fullstack Developer', 'Backend com Django', 'Frontend com React', 'Deploy com Docker'],
    subtitle: 'Django • React • Docker',
    description:
      'Desenvolvo sistemas completos — do banco de dados à interface, do servidor ao deploy em produção.',
    cta_projects: 'Ver Projetos',
    cta_contact: 'Entrar em Contato',
    cta_resume: 'Baixar Currículo',
    badge: 'Disponível para projetos',
  },
  about: {
    title: 'Sobre Mim',
    p1: 'Sou desenvolvedor fullstack com foco em construir aplicações robustas e escaláveis. Trabalho com todo o ciclo de desenvolvimento: modelagem de dados, APIs REST, interfaces modernas e deploy em produção com Docker e Nginx.',
    p2: 'Meu diferencial é dominar o stack completo — backend, frontend e infraestrutura. Isso significa que consigo entregar sistemas funcionais de ponta a ponta sem depender de múltiplos especialistas.',
    p3: 'Além da técnica, minha experiência com Suporte de TI me deu uma visão clara das dores reais dos usuários, o que me permite criar sistemas não apenas funcionais, mas também altamente intuitivos e focados na experiência do cliente.',
    skills_title: 'Stack & Ferramentas',
    stack: [
      { category: 'Backend', items: ['Django', 'Django REST Framework', 'PostgreSQL', 'Python'] },
      { category: 'Frontend', items: ['React', 'Vite', 'JavaScript', 'HTML/CSS'] },
      { category: 'DevOps', items: ['Docker', 'Nginx', 'Linux', 'Git'] },
      { category: 'Outros', items: ['WebSockets', 'Web Push (VAPID)', 'REST APIs', 'JWT'] },
    ],
    highlight_title: 'O que me diferencia',
    highlights: [
      { icon: '⚙️', label: 'Backend sólido' },
      { icon: '🎨', label: 'Frontend moderno' },
      { icon: '🚀', label: 'Deploy em produção' },
    ],
    highlight_desc: 'Poucos desenvolvedores dominam os três. Eu domino.',
  },
  projects: {
    title: 'Projetos',
    subtitle: 'Sistemas reais, construídos do zero até o deploy.',
    items: [
      {
        name: 'HiperDesk',
        tagline: 'Sistema de Suporte Técnico',
        description:
          'Plataforma completa de suporte com portal para clientes e painel administrativo. Inclui autenticação, gerenciamento de chamados, chat em tempo real, upload de arquivos e notificações push. Implantado na empresa Hiper Tecnologia em 2026.',
        tech: ['Django', 'DRF', 'React', 'Vite', 'PostgreSQL', 'Docker', 'Nginx', 'Web Push'],
        highlights: [
          'Chat em tempo real via WebSockets',
          'Notificações push com VAPID',
          'Deploy em ambiente de produção',
          'Portal cliente + painel admin',
          'Implantado na Hiper Tecnologia (2026)',
        ],
        status: 'Finalizado',
        github: 'https://github.com/Cezar-Costa',
        demo: null,
      },
    ],
    status_label: 'Status',
    highlights_label: 'Destaques',
    btn_github: 'GitHub',
    btn_demo: 'Demo',
  },
  experience: {
    title: 'Experiência',
    subtitle: 'Minha trajetória na área de tecnologia.',
    items: [
      {
        year: '2026',
        role: 'HiperDesk — Concluído',
        company: 'Hiper Tecnologia',
        description: 'Sistema completo de suporte técnico desenvolvido e implantado na Hiper Tecnologia. Inclui portal para clientes, painel administrativo, chat em tempo real, upload de arquivos e notificações push. Projeto finalizado e em produção.',
        tech: ['Django', 'React', 'Docker', 'PostgreSQL', 'Nginx', 'Web Push'],
      },
      {
        year: '2025 - 2026',
        role: 'Suporte de TI',
        company: 'Hiper Tecnologia',
        description: 'Atendimento e suporte técnico direto aos clientes, auxiliando na resolução de problemas de TI, configuração de sistemas e esclarecimento de dúvidas sobre hardware e software.',
        tech: ['Suporte Técnico', 'Atendimento ao Cliente', 'Troubleshooting', 'Redes'],
      },
    ],
  },
  contact: {
    title: 'Contato',
    subtitle: 'Tem um projeto em mente? Vamos conversar.',
    email_label: 'E-mail',
    github_label: 'GitHub',
    linkedin_label: 'LinkedIn',
    form_name: 'Seu nome',
    form_email: 'Seu e-mail',
    form_message: 'Sua mensagem',
    form_send: 'Enviar Mensagem',
    form_sending: 'Enviando...',
    form_success: 'Mensagem enviada! Entrarei em contato em breve.',
    form_error: 'Algo deu errado. Tente novamente ou mande um e-mail direto.',
  },
  footer: {
    built: 'Desenvolvido com React + Vite',
    rights: 'Todos os direitos reservados.',
  },
}

export default pt
