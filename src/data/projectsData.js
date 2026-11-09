/**
 * Dados dos Projetos da Germina Code
 * Inclui dados para as 3 telas do carrossel do modal:
 * Tela 1: Visual / Imagem / Categoria
 * Tela 2: Descrição e Comentário do Cliente
 * Tela 3: Stack de Tecnologias e Funcionalidades
 */
export const projectsData = [
  {
    id: '01',
    slug: 'lumina-analytics',
    title: 'Lumina Analytics Platform',
    category: 'Aplicações web e front-end',
    year: '2026',
    client: 'Lumina Data Corp',
    colorScheme: {
      background: '#E4DDCB', // Creme pastel
      textColor: '#14201A',
    },
    // Tela 1: Visual & Resumo
    mediaPlaceholder: 'LUMINA // ANALYTICS DASHBOARD',
    caption: 'Plataforma de alta densidade de métricas e visualizações interativas em tempo real.',

    // Tela 2: O Projeto & Comentário do Cliente
    aboutText: 'Desenvolvemos do zero uma interface analítica de ponta com foco em performance e fluidez. O desafio era renderizar mais de 50.000 nós de dados sem engasgos no DOM, mantendo uma experiência visual elegante e intuitiva para tomadores de decisão.',
    clientReview: {
      quote: 'A Germina Code transformou uma ferramenta analítica complexa em um software fluido que nossa equipe adora usar todos os dias. A velocidade de entrega e o rigor técnico superaram qualquer expectativa.',
      author: 'Carolina Mendes',
      role: 'Head of Product na Lumina Corp',
    },

    // Tela 3: Tecnologias e Funcionalidades
    techStack: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'GraphQL', 'Chart.js', 'Zustand'],
    features: [
      'Visualização de dados preditivos em tempo real com WebSocket',
      'Design System proprietário com mais de 45 componentes acessíveis',
      'Exportação de relatórios customizáveis em PDF e Excel',
      'Modo escuro e claro integrado com design tokens',
      'Tempo de carregamento inicial abaixo de 0.8s (Lighthouse 98)',
    ],
    projectUrl: 'https://lumina-demo.germinacode.com.br',
  },
  {
    id: '02',
    slug: 'arvore-capital',
    title: 'Árvore Capital Investimentos',
    category: 'Sites e landing pages',
    year: '2026',
    client: 'Árvore Gestão de Ativos',
    colorScheme: {
      background: '#F3C7B5', // Salmão pêssego
      textColor: '#14201A',
    },
    // Tela 1: Visual & Resumo
    mediaPlaceholder: 'ARVORE // PLATAFORMA INSTITUCIONAL',
    caption: 'Presença digital institucional sofisticada com simuladores dinâmicos de portfólio.',

    // Tela 2: O Projeto & Comentário do Cliente
    aboutText: 'Criamos a plataforma institucional da gestora com base em tipografia suíça e interações refinadas. Desenvolvemos simuladores interativos de rentabilidade que aumentaram em 140% o tempo médio de permanência dos investidores no portal.',
    clientReview: {
      quote: 'Precisávamos de um posicionamento digital que refletisse a solidez de um fundo de bilhões com o frescor de uma fintech moderna. O resultado foi cirúrgico e impecável.',
      author: 'Rodrigo Falcão',
      role: 'Sócio-Diretor de RI na Árvore Capital',
    },

    // Tela 3: Tecnologias e Funcionalidades
    techStack: ['React', 'Next.js', 'Framer Motion', 'CSS Modules', 'Prisma', 'PostgreSQL'],
    features: [
      'Simulador interativo de investimentos com gráficos vetoriais SVG',
      'Área de RI com integração automática de relatórios da CVM',
      'Performance nota máxima no Core Web Vitals',
      'Arquitetura headless pronta para internacionalização (EN/PT)',
      'Segurança e conformidade total com a LGPD',
    ],
    projectUrl: 'https://arvore-demo.germinacode.com.br',
  },
  {
    id: '03',
    slug: 'orquestra-erp',
    title: 'Orquestra Logística Suite',
    category: 'Sistemas desktop em Java',
    year: '2025',
    client: 'Orquestra Express',
    colorScheme: {
      background: '#B8CEB7', // Sálvia suave
      textColor: '#14201A',
    },
      // Tela 1: Visual & Resumo
      mediaPlaceholder: 'ORQUESTRA // ERP DESKTOP SUITE',
      caption: 'Modernização completa de sistema desktop de controle de frotas e rastreamento em malha nacional.',

      // Tela 2: O Projeto & Comentário do Cliente
      aboutText: 'Modernização de arquitetura legada para um sistema desktop moderno em Java. Redesenhamos a experiência completa dos operadores de logística, reduzindo o tempo de fechamento de fretes de 12 minutos para menos de 90 segundos.',
      clientReview: {
        quote: 'O time da Germina Code entendeu a complexidade das nossas operações industriais e nos entregou um sistema robusto que não trava e é incrivelmente simples de operar.',
        author: 'Marcio Albuquerque',
        role: 'CTO na Orquestra Logística',
      },

      // Tela 3: Tecnologias e Funcionalidades
      techStack: ['Java 21', 'JavaFX', 'Spring Boot 3', 'Hibernate', 'PostgreSQL', 'Docker'],
      features: [
        'Interface desktop acelerada por GPU com tema personalizável',
        'Rastreamento de mais de 1.200 veículos simultaneamente no mapa',
        'Emissão e validação de CTe e NFe em lote offline-first',
        'Sincronização em segundo plano resiliente a quedas de conexão',
        'Exportação para os principais bancos e adquirentes',
      ],
      projectUrl: 'https://orquestra-demo.germinacode.com.br',
    },
];
