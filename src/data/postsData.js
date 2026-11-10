/**
 * Dados completos dos 4 Artigos Fictícios do Diário de Bordo
 * Foco editorial em desenvolvimento, design system, arquitetura e processos digitais
 */
export const postsData = [
  {
    id: 'arquitetura-do-broto-sistemas-escalaveis',
    tag: 'PROCESSO',
    tagVariant: 'processo', // #C8E86B verde-limão
    title: 'A Arquitetura do Broto: Como Projetamos Sistemas Que Crescem Sem Dívida Técnica',
    date: '14 OUTUBRO, 2026',
    readTime: '6 MIN',
    author: 'GERMINA CODE LABS',
    subtitle: 'Da semente ao ecossistema: o método de desenvolvimento modular onde cada linha de código é cultivada para suportar a escala real de usuários e negócios.',
    externalLink: {
      label: 'Acessar Manifesto de Engenharia na Substack',
      url: 'https://substack.com/@germinacode/arquitetura-do-broto-sistemas-escalaveis',
      sourceType: 'Substack Newsletter & Whitepaper',
    },
    heroImage: {
      badge: 'FIG 01 // BLUEPRINT ARQUITETURAL',
      title: 'Topologia do Sistema: Ciclos de Crescimento em Módulos Isolados',
      aspect: 'panorama',
      accentColor: '#E4DDCB',
      caption: 'Diagrama de fluxo mostrando a separação de responsabilidades e micro-fronteiras reativas no ecossistema Germina.',
    },
    contentSections: [
      {
        heading: '1. O Problema da Escala Prematura',
        paragraphs: [
          'No universo de software moderno, a pressa em construir arranha-céus antes de entender a qualidade do solo é a principal causa da morte prematura de startups e plataformas ambiciosas. Chamamos isso de hipertrofia arquitetural: adotar dezenas de microsserviços, orquestradores complexos e dependências desnecessárias quando tudo o que o projeto precisava era de uma fundação sólida, legível e ágil.',
          'Na Germina Code, adotamos uma abordagem inspirada na botânica: cada software começa como uma semente enxuta. A semente contém toda a informação genética necessária — domínio de negócio claro, tipagem consistente e fluxos de dados unidirecionais —, mas consome o mínimo de recursos operacionais.',
        ],
        quote: 'Uma semente não tenta produzir frutos na primeira semana. Ela estabelece raízes profundas antes de erguer seu primeiro ramo.',
        mediaLayout: 'diptych',
        mediaItems: [
          {
            badge: 'FIG 02.A // FASE SEMENTE',
            title: 'Núcleo Monolítico Modular',
            aspect: 'square',
            accentColor: '#B8CEB7',
            caption: 'Estrutura compacta: baixo acoplamento interno e deploy atômico sem fricção.',
          },
          {
            badge: 'FIG 02.B // FASE COLHEITA',
            title: 'Ramificação Horizontal',
            aspect: 'square',
            accentColor: '#F3C7B5',
            caption: 'Evolução orgânica: apenas serviços com alta carga são desacoplados dinamicamente.',
          },
        ],
      },
      {
        heading: '2. Isolamento de Domínio e Contratos Estritos',
        paragraphs: [
          'Para garantir que novas funcionalidades não quebrem o núcleo existente, organizamos as entidades em anéis concêntricos. Nenhum módulo externo acessa diretamente a camada de dados sem passar por interfaces estritas.',
          'Isso permite que times diferentes trabalhem simultaneamente no design system, na API GraphQL e na camada de persistência sem gerar gargalos de revisão de código ou regressões silenciosas.',
        ],
        mediaLayout: 'offset-right',
        mediaItems: [
          {
            badge: 'FIG 03 // MATRIZ DE CICLO VITAL',
            title: 'Fluxo Contínuo de Entrega Contínua',
            aspect: 'portrait',
            accentColor: '#256B42',
            caption: 'Pipeline de validação automática: tipagem estática, testes unitários e preview environments por branch.',
          },
        ],
      },
      {
        heading: '3. Resultados e Métricas no Mundo Real',
        paragraphs: [
          'Ao aplicar este método em plataformas financeiras e e-commerces de alto tráfego, reduzimos o tempo de onboarding de novos engenheiros de semanas para menos de 48 horas. Mais importante: o custo com infraestrutura de nuvem caiu em média 42% no primeiro ano de operação.',
          'Criar código que dura não é sobre prever o futuro distante, mas sobre escrever módulos fáceis de substituir quando o momento exigir.',
        ],
        mediaLayout: 'technical-box',
        mediaItems: [
          {
            badge: 'INSPEÇÃO // BENCHMARKS EM PRODUÇÃO',
            title: 'Métricas de Latência & Throughput',
            aspect: 'landscape',
            accentColor: '#14201A',
            caption: 'P99 Latency: 42ms | Build Time: 1.8s | Test Coverage: 94.6% em 12 microsserviços integrados.',
          },
        ],
      },
    ],
  },
  {
    id: 'micro-animacoes-60fps-web-moderna',
    tag: 'CÓDIGO',
    tagVariant: 'codigo', // #BCD3BC verde-sálvia
    title: 'Micro-Animações a 60 FPS: A Matemática dos Movimentos Orgânicos no Navegador',
    date: '28 SETEMBRO, 2026',
    readTime: '8 MIN',
    author: 'EQUIPE DE ENGENHARIA',
    subtitle: 'Por que a física das curvas de Bézier cúbicas e a aceleração por hardware transformam interfaces frias em produtos digitais vivos e memoráveis.',
    externalLink: {
      label: 'Ver Repositório & Playground Interativo no GitHub',
      url: 'https://github.com/germinacode/physics-curves-lab',
      sourceType: 'GitHub Open Source Lab',
    },
    heroImage: {
      badge: 'FIG 01 // PIPELINE DE RENDERIZAÇÃO DO BROWSER',
      title: 'Composite Thread vs Layout Thrashing: O Orçamento de 16.6ms',
      aspect: 'panorama',
      accentColor: '#BCD3BC',
      caption: 'Visualização da pipeline gráfica do Chromium isolando transform e opacity na GPU.',
    },
    contentSections: [
      {
        heading: '1. O Orçamento Sagrado de 16 Milissegundos',
        paragraphs: [
          'Para que uma animação seja percebida pelo cérebro humano como natural e tátil, o navegador precisa entregar um novo quadro a cada 16.6 milissegundos. Se um script bloquear a thread principal por meros 4 milissegundos a mais durante uma rolagem, o usuário sente a interface "engasgar".',
          'Na Germina Code, estabelecemos uma regra pétrea: nenhuma propriedade que force reflow (como width, height, top, left ou margin) pode ser animada dinamicamente. Todas as transições são delegadas exclusivamente às propriedades transform e opacity, manipuladas diretamente na camada do compositor da GPU.',
        ],
        quote: 'A diferença entre um produto que parece um aplicativo nativo e um site comum está nos milissegundos invisíveis.',
        mediaLayout: 'diptych',
        mediaItems: [
          {
            badge: 'FIG 02.A // FÍSICA ARTIFICIAL',
            title: 'Easing Linear (Robótico)',
            aspect: 'square',
            accentColor: '#E4DDCB',
            caption: 'Velocidade constante que contraria a inércia da física do mundo real.',
          },
          {
            badge: 'FIG 02.B // FÍSICA ORGÂNICA',
            title: 'Cubic-Bézier Natural (Mola)',
            aspect: 'square',
            accentColor: '#C8E86B',
            caption: 'Aceleração inicial e amortecimento suave com overshoot proporcional.',
          },
        ],
      },
      {
        heading: '2. As Curvas de Bézier do Broto Germina',
        paragraphs: [
          'Ao projetar a interação de rega do broto e os modais de projetos, desenvolvemos a curva customizada cubic-bezier(0.34, 1.56, 0.64, 1). Ela simula a elasticidade de uma haste vegetal sob a força do vento e o retorno suave à sua posição original.',
          'Quando combinada com transform-origin estratégicos nas juntas dos elementos SVG, o movimento deixa de ser mecânico e ganha respiração orgânica.',
        ],
        mediaLayout: 'triptych',
        mediaItems: [
          {
            badge: 'PASSO 01',
            title: 'Absorção de Impacto',
            aspect: 'portrait',
            accentColor: '#256B42',
            caption: 'Achatamento horizontal elástico.',
          },
          {
            badge: 'PASSO 02',
            title: 'Extensão Vertical',
            aspect: 'portrait',
            accentColor: '#C8E86B',
            caption: 'Alongamento em direção à luz.',
          },
          {
            badge: 'PASSO 03',
            title: 'Desabrochar',
            aspect: 'portrait',
            accentColor: '#F6F4EE',
            caption: 'Rotação e expansão das pétalas.',
          },
        ],
      },
      {
        heading: '3. Acessibilidade e Redução de Movimento',
        paragraphs: [
          'Performance e beleza estética nunca devem sobrepor o conforto do usuário. Todas as nossas implementações respeitam rigorosamente a media query prefers-reduced-motion.',
          'Para usuários sensíveis à cinetose, transições com deslocamentos espaciais são automaticamente convertidas em suaves dissoluções de opacidade instantâneas.',
        ],
        mediaLayout: 'technical-box',
        mediaItems: [
          {
            badge: 'INSPEÇÃO // CSS COMPOSITING RULES',
            title: 'Regras de GPU & Will-Change Hygiene',
            aspect: 'landscape',
            accentColor: '#14201A',
            caption: 'will-change: transform, opacity aplicado apenas durante interações ativas para evitar estouro de memória gráfica.',
          },
        ],
      },
    ],
  },
  {
    id: 'estetica-suica-encontra-a-natureza',
    tag: 'DESIGN',
    tagVariant: 'design', // #F5CEBD salmão-pêssego
    title: 'Quando a Estética Suíça Encontra a Botânica: A Construção do Nosso Design System',
    date: '12 SETEMBRO, 2026',
    readTime: '5 MIN',
    author: 'DIREÇÃO DE DESIGN',
    subtitle: 'Como a precisão do Estilo Tipográfico Internacional dos anos 60 inspirou um sistema de design contemporâneo que valoriza o vazio, a geometria e o ritmo orgânico.',
    externalLink: {
      label: 'Explorar Estudo de Caso Completo no Behance',
      url: 'https://behance.net/gallery/germinacode-identity-system',
      sourceType: 'Behance Case Study & Design Tokens',
    },
    heroImage: {
      badge: 'FIG 01 // GRID MODULAR & ESCALA TIPOGRÁFICA',
      title: 'A Matemática do Vazio: Espaçamentos Baseados na Razão Áurea',
      aspect: 'panorama',
      accentColor: '#F5CEBD',
      caption: 'Grid suíço de 12 colunas assimétricas equilibrado por ilustrações botânicas de linhas finas.',
    },
    contentSections: [
      {
        heading: '1. O Encontro de Dois Mundos Aparentemente Opostos',
        paragraphs: [
          'À primeira vista, o rigor modernista suíço — caracterizado pela clareza, objetividade, grids matemáticos e tipografia sem serifa — parece o exato oposto da imprevisibilidade da natureza viva.',
          'No entanto, quando observamos a filotaxia das folhas em um caule ou a proporção espiral de uma semente de girassol, descobrimos que a natureza é a arquiteta mais rigorosa de todas. Nosso objetivo com o Germina Design System foi fundir essa exatidão estrutural com o calor e a vitalidade de organismos vivos.',
        ],
        quote: 'O design suíço não é sobre ausência de emoção; é sobre eliminar o ruído para que a essência da mensagem floresça.',
        mediaLayout: 'diptych',
        mediaItems: [
          {
            badge: 'FIG 02.A // RIGOR TÉCNICO',
            title: 'Space Mono (Monospace)',
            aspect: 'square',
            accentColor: '#FAF8F2',
            caption: 'Tags, carimbos de data, coordenadas e telemetria de código.',
          },
          {
            badge: 'FIG 02.B // ELEGÂNCIA EDITORIAL',
            title: 'Space Grotesk (Display)',
            aspect: 'square',
            accentColor: '#F5CEBD',
            caption: 'Grandes títulos com peso fino (300) e ritmo editorial suíço.',
          },
        ],
      },
      {
        heading: '2. A Paleta de Cores: Pigmentos Naturais & Tinta Digital',
        paragraphs: [
          'Evitamos os tradicionais azuis corporativos assépticos do ecossistema de tecnologia. Nossa paleta é inspirada em elementos físicos palpáveis: Tinta (#14201A), Broto (#256B42), Semente (#C8E86B) e Papel Algodão (#F6F4EE).',
          'Cada cor cumpre uma função semiótica precisa na hierarquia visual, guiando o olhar do usuário com naturalidade.',
        ],
        mediaLayout: 'offset-right',
        mediaItems: [
          {
            badge: 'FIG 03 // EXTRAÇÃO CROMÁTICA',
            title: 'Amostras de Pigmentos Orgânicos',
            aspect: 'portrait',
            accentColor: '#B8CEB7',
            caption: 'Harmonia cromática testada para acessibilidade e contraste WCAG AAA.',
          },
        ],
      },
      {
        heading: '3. O Respiro Como Elemento Ativo de Interface',
        paragraphs: [
          'Muitos estúdios têm medo do espaço em branco e enchem as telas com cartões flutuantes, gradientes pesados e bordas desnecessárias.',
          'Na Germina, consideramos o espaço vazio não como falta de conteúdo, mas como o ar que permite ao projeto respirar e ao leitor digerir a informação com clareza e serenidade.',
        ],
        mediaLayout: 'technical-box',
        mediaItems: [
          {
            badge: 'INSPEÇÃO // TOKENS DE ESPAÇAMENTO',
            title: 'Hierarquia de Spacing & Elevation',
            aspect: 'landscape',
            accentColor: '#14201A',
            caption: 'Escala modular de 4px a 128px mantendo consistência entre desktop e telas mobile.',
          },
        ],
      },
    ],
  },
  {
    id: 'germinacode-2-novo-estudio-digital',
    tag: 'NOVIDADES',
    tagVariant: 'novidades', // #E6DFCE bege-creme
    title: 'Germina Code v2.0: Um Novo Ciclo de Projetos Digitais com Alma e Performance',
    date: '01 AGOSTO, 2026',
    readTime: '4 MIN',
    author: 'FUNDADORES',
    subtitle: 'Expandindo horizontes com parceiros ambiciosos, novas tecnologias de ponta e um compromisso inegociável com a simplicidade e a elegância no código.',
    externalLink: {
      label: 'Ler Reportagem Especial no TechDesign Magazine',
      url: 'https://techdesign.press/germinacode-v2-announcement',
      sourceType: 'TechDesign Global Press & Media',
    },
    heroImage: {
      badge: 'FIG 01 // O NOVO ATELIÊ DIGITAL',
      title: 'Germina Code 2.0: Artesanato Tecnológico para Marcas Globais',
      aspect: 'panorama',
      accentColor: '#E6DFCE',
      caption: 'A nova fase do estúdio une consultoria arquitetural com execução visual de excelência.',
    },
    contentSections: [
      {
        heading: '1. O Amadurecimento de Uma Ideia',
        paragraphs: [
          'Há dois anos, começamos a Germina Code com uma premissa simples: o desenvolvimento de software corporativo havia se tornado excessivamente burocrático, cinzento e desconectado da sensibilidade estética. Os sistemas eram rápidos ou bonitos, raramente os dois ao mesmo tempo.',
          'O lançamento da versão 2.0 do nosso estúdio consolida uma trajetória de dezenas de aplicações entregues para clientes no Brasil, Europa e Estados Unidos, provando que código limpo e design refinado geram resultados de negócios mensuráveis e duradouros.',
        ],
        quote: 'Não construímos apenas telas para serem clicadas; construímos experiências digitais onde marcas e pessoas criam raízes.',
        mediaLayout: 'diptych',
        mediaItems: [
          {
            badge: 'FIG 02.A // IMPACTO REAL',
            title: 'Métricas de Retenção',
            aspect: 'square',
            accentColor: '#C8E86B',
            caption: '+135% de engajamento médio em plataformas redesenhadas pela Germina.',
          },
          {
            badge: 'FIG 02.B // VELOCIDADE',
            title: 'Core Web Vitals Impecáveis',
            aspect: 'square',
            accentColor: '#E4DDCB',
            caption: 'Score médio de 99/100 em performance no Google PageSpeed.',
          },
        ],
      },
      {
        heading: '2. Novos Laboratórios e Áreas de Atuação',
        paragraphs: [
          'A partir de agora, além do desenvolvimento sob medida de plataformas web e mobile, inauguramos o Germina Labs: um núcleo de pesquisa dedicado a micro-animações performáticas, inteligência artificial contextual e ferramentas de código aberto.',
          'Acreditamos que devolver conhecimento e código para a comunidade global é a forma mais sustentável de cultivar o futuro da internet.',
        ],
        mediaLayout: 'offset-right',
        mediaItems: [
          {
            badge: 'FIG 03 // ROADMAP 2026-2027',
            title: 'Laboratórios Experimentais e SDKs',
            aspect: 'portrait',
            accentColor: '#256B42',
            caption: 'Lançamento de componentes reativos abertos para ecossistemas React e Vite.',
          },
        ],
      },
      {
        heading: '3. Um Convite aos Visionários',
        paragraphs: [
          'Seja para conceber uma nova fintech do zero, transformar um e-commerce em um ateliê digital de luxo ou refatorar uma infraestrutura legada que travou o crescimento da sua empresa: estamos prontos para cultivar o próximo capítulo com você.',
        ],
        mediaLayout: 'technical-box',
        mediaItems: [
          {
            badge: 'INSPEÇÃO // MANIFESTO GERMINA 2.0',
            title: 'Contrato com a Simplicidade',
            aspect: 'landscape',
            accentColor: '#14201A',
            caption: 'Menos dependências. Mais clareza. Software cultivado com rigor artesanal.',
          },
        ],
      },
    ],
  },
];
