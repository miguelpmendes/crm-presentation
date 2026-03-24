/**
 * FICHEIRO DE CONTEÚDOS — CRM à Medida: O Novo Paradigma
 * ═══════════════════════════════════════════════════════
 * Edite este ficheiro para atualizar os textos da apresentação.
 * Após guardar, recarregue o browser para ver as alterações.
 *
 * Estrutura de cada slide:
 *   type       → tipo de layout (não alterar)
 *   section    → 'why' | 'how' | 'what' | null
 *   data       → todos os textos e dados do slide
 */

/* ══════════════════════════════════════════════════
   CREDENCIAIS DE ACESSO
   Altere username e password aqui.
══════════════════════════════════════════════════ */
const AUTH = {
  username: 'deloitte',
  password: 'crm2026',
  enabled: true   // true = login activo | false = login desactivado
};

const SLIDES = [

  /* ══════════════════════════════════════════════════
     SLIDE 1 — CAPA
  ══════════════════════════════════════════════════ */
  {
    type: 'cover',
    section: null,
    data: {
      logo: 'Deloitte Technology',
      titleAccent: 'Agentic-Built',
      titleLine1: 'CRM',
      titleLine2: 'O Novo Paradigma',
      subtitle: 'Do modelo de aquisição de SaaS package ao desenvolvimento acelerado por Agentic AI',
      tags: []
    }
  },

  /* ══════════════════════════════════════════════════
     SLIDE 2 — WHY: PONTO DE INFLEXÃO
  ══════════════════════════════════════════════════ */
  {
    type: 'stats',
    section: 'why',
    data: {
      headline: 'Encontramo-nos num <accent>ponto de inflexão</accent>',
      subheadline: 'O surgimento de AI, e o seu rápido crescimento, torna o desenvolvimento de um CRM à medida viável e passível de competir, em condições de igualdade, com a aquisição de uma solução SaaS — em custo, tempo de entrega e viabilidade operacional.',
      stats: [
        {
          num: 'Até 2×',
          color: 'green',
          label: 'Incremento no time-to-market através da utilização de ferramentas de desenvolvimento agentic baseadas em IA'
        },
        {
          num: 'Menor TCO',
          color: 'how',
          label: 'Redução de custo face a uma implementação tradicional com o mesmo âmbito funcional'
        },
        {
          num: '100%',
          color: 'what',
          label: 'Alinhamento da solução ao negócio, sem cedências necessárias por via de funcionalidades genéricas de plataforma'
        }
      ],
      callout: 'A dependência de plataformas externas, com custo crescente de licenças, roadmap condicionado, e difícil adequação funcional, <strong>abre o caminho para diferentes opções.</strong>'
    }
  },

  /* ══════════════════════════════════════════════════
     SLIDE 3 — WHY: O PARADIGMA HISTÓRICO
  ══════════════════════════════════════════════════ */
  {
    type: 'two-col',
    section: 'why',
    data: {
      headline: 'O <accent> atual paradigma </accent> de desenvolvimento de CRM </accent>',
      subheadline: 'A aquisição de packages de CRM tem sido a principal tendência, em particular num contexto anterior à sofisticação tecnológica que se observa com novas ferramentas de IA. ',
      col1: {
        icon: '📦',
        title: 'Fatores que impulsionam a adoção de packages',
        color: 'muted',
        items: [
          'Elevada complexidade percecionada em modelos de desenvolvimento à medida',
          'Time-to-market elevado para soluções verdadeiramente customizadas',
          'Elevada taxa de insucesso em projetos de desenvolvimento de raiz',
          'Plataformas como Salesforce e Dynamics oferecem ecossistemas maduros e funcionalmente ricos'
        ]
      },
      col2: {
        icon: '⚠',
        title: 'Desafios associados à sua adoção',
        color: 'muted',
        items: [
          'Processos de negócio tipicamente forçados a adaptar-se ao software, e não o inverso',
          'Modelo de licenciamento por utilizador, cujos custos escalam de forma significativa',
          'Componentes base das plataformas não utilizados, e elevado volume de customizações',
          'Dependência do roadmap do fornecedor para evoluções estratégicas para o negócio'
        ]
      },
      callout: 'Os novos paradigmas de desenvolvimento endereçam diretamente estes desafios, minimizando as cedências necessárias à adoção de um package.'
    }
  },

  /* ══════════════════════════════════════════════════
     SLIDE 4 — WHY: O QUE MUDOU
  ══════════════════════════════════════════════════ */
  {
    type: 'cards-consequence',
    section: 'why',
    data: {
      headline: 'Os fatores que <accent>alteram a equação</accent>',
      subheadline: 'Os modelos de vendors como Claude Code e Gemini atingiram um nível de maturidade que lhes permite gerar, rever e evoluir código de forma eficiente e consistente, servindo de aceleradores significativos às equipas "humanas".',
      accent: 'green',
      cards: [
        {
          icon: '',
          title: 'Modelos de Linguagem de Nova Geração',
          body: 'Modelos como Claude Sonnet e Gemini 2.5 Pro compreendem requisitos funcionais e aceleram de forma significativa o processo de desenho, desenvolvimento e teste.'
        },
        {
          icon: '',
          title: 'Ferramentas de Desenvolvimento Agentic',
          body: 'Ferramentas como o <strong style="color:var(--green)">Claude Code</strong> transcendem o processo de "autocomplete": executam tarefas de múltiplos passos de forma autónoma, iterando sobre código projetos produtivos, com resultados auditáveis.'
        },
        {
          icon: '',
          title: 'Novo Paradigma de Desenvolvimento de Software',
          body: 'Com um foco maior no planeamento e no âmbito funcional, será cada vez mais rápido implementar e evoluir software, o que reduz significamente a vantagem competitiva de vendors de software Saas.'
        }
      ]
    }
  },

  /* ══════════════════════════════════════════════════
     SLIDE 5 — WHY: AGENTIC DEVELOPMENT
  ══════════════════════════════════════════════════ */
  {
    type: 'agent-diagram',
    section: 'why',
    data: {
      headline: 'O <accent>desenvolvimento Agentic (1/2)</accent>',
      subheadline: 'Mais do que um copiloto que fornece sugestões, trata-se de um sistema orquestrado de agentes autónomos que planeia, implementa, testa e itera. É combinado com supervisão humana para garantia de qualidade, entrega de atividades de alto valor e adequação aos objetivos de negócio.',
      orchestrator: {
        label: 'Orquestrador',
        name: '🤖 Claude Code / Agente Principal'
      },
      agents: [
        { label: 'Especialista', name: '🗄 Agente de Base de Dados',  color: 'green' },
        { label: 'Especialista', name: '🎨 Agente de Frontend',        color: 'how'   },
        { label: 'Especialista', name: '⚙️ Agente de Backend',         color: 'what'  },
        { label: 'Especialista', name: '📋 Agente de Documentação',    color: 'yellow'}
      ],
      callout: 'O developer humano define o contexto funcional e arquitectural, valida decisões críticas e delega a execução de componentes da solução nos agentes. A produtividade dos processos de desenvolvimento e a sua posterior evolução aumenta de forma significativa.'
    }
  },

  /* ══════════════════════════════════════════════════
     SLIDE 6 — WHY: AGENTIC DEVELOPMENT
  ══════════════════════════════════════════════════ */
  {
    type: 'vibe-coding',
    section: 'why',
    data: {
      headline: 'O <accent>desenvolvimento Agentic (2/2)</accent>',
      quote: {
        text: 'You just see things, say things, run things, and copy-paste things — and it mostly works.',
        author: 'Andrej Karpathy, February 2025'
      },
      maturityLabel: 'Avaliação de Maturidade',
      strong: {
        label: 'Pontos Fortes:',
        items: ['Aplicações CRUD e formulários', 'Prototipagem e MVPs', 'Scaffolding de UI', 'Redução de boilerplate']
      },
      weak: {
        label: 'Áreas de Preocupação:',
        items: ['Lógica de negócio complexa', 'Hardening de segurança', 'Performance à escala', 'Manutenibilidade a longo prazo']
      }
    }
  },

  /* ══════════════════════════════════════════════════
     SLIDE 7 — HOW: CICLOS DE DESENVOLVIMENTO
  ══════════════════════════════════════════════════ */
  {
    type: 'cycle',
    section: 'how',
    data: {
      headline: 'Modelo de execução de um <accent-how>projeto de desenvolvimento Agentic</accent-how>',
      subheadline: 'No novo paradigma, torna-se cada vez mais relevante a criação de ciclos curtos e iterativos, com ênfase no planeamento funcional e técnico, em que o contexto fornecido aos agentes é o principal fator de qualidade do output.',
      steps: [
        {
          num: '1',
          title: 'Planeamento Funcional',
          body: 'Definição de épicos, user stories e critérios de aceitação detalhados, em que a profundidade do contexto determina diretamente a qualidade do output dos agentes.'
        },
        {
          num: '2',
          title: 'Arquitetura e Decisões Técnicas',
          body: 'Definição e iteração sobre sobre arquitetura e stack tecnológicos, desenho de modelo de dados e padrões desenho — tendo em conta melhores práticas, benchmark e adequação ao contexto.'
        },
        {
          num: '3',
          title: 'Execução Agentic',
          body: 'A equipa de desenvolvimento é extendida através de agentes, que implementam e efetuam testes unitários sobre funcionalidades, iterando até ao resultado esperado.'
        },
        {
          num: '4',
          title: 'Revisão Técnica Humana',
          body: 'O developer complementa os desenvolvimentos e valida o resultado, refinando sempre que necessário ou promovendo um novo ciclo de iteração dos agentes.'
        },
        {
          num: '5',
          title: 'Deploy e Ciclo de Feedback',
          body: 'O ciclo encerra com feedback do negócio e com a passagem de casos de teste, dando origem ao planeamento do sprint seguinte.'
        }
      ],
      callout: ''
    }
  },

  /* ══════════════════════════════════════════════════
     SLIDE 7 — HOW: OS TRÊS PILARES
  ══════════════════════════════════════════════════ */
  {
    type: 'pillars',
    section: 'how',
    data: {
      headline: 'Acreditamos na <accent-how>nossa diferenciação</accent-how>, como resultado de três fatores principais',
      subheadline: 'As ferramentas de IA são condição necessária, mas não suficiente, para desenvolvimento com base em agentes. Os restantes dois pilares são determinantes para transformar o potencial tecnológico em valor tangível para o cliente.',
      pillars: [
        {
          colorClass: 'p1',
          num: '1',
          icon: '🧠',
          title: 'Capacidades dos Modelos LLM',
          body: 'Modelos de última geração capazes de gerar, rever e refatorizar código de produção de forma autónoma e consistente.',
          tag: 'Ferramentas'
        },
        {
          colorClass: 'p2',
          num: '2',
          icon: '⚙️',
          title: 'Experiência de Utilização',
          body: 'O domínio destas ferramentas, através da engenharia de prompts, gestão de contexto e supervisão de agentes, é uma competência diferenciadora desenvolvemos nas nossas equipas.',
          tag: 'Proficiência Tecnológica'
        },
        {
          colorClass: 'p3',
          num: '3',
          icon: '🏦',
          title: 'Conhecimento Funcional de Indústria',
          body: 'Aplicamos o nosso conhecimento de indústria, e vasta experiência na implementação de CRM, para criação de soluções adaptadas ao contexto de negócio.',
          tag: 'Conhecimento de Negócio'
        }
      ],
      equalsText: ''
    }
  },

  /* ══════════════════════════════════════════════════
     SLIDE 8 — HOW: DUAS ABORDAGENS
  ══════════════════════════════════════════════════ */
  {
    type: 'two-paths',
    section: 'how',
    data: {
      headline: 'Abordagens para o desenvolvimento de <accent-how>CRM à medida</accent-how>',
      subheadline: 'O desenvolvimento agentic é aplicável em dois cenários: construção de raiz para máxima adequação funcional, ou migração tecnológica a partir de uma plataforma existente.',
      orLabel: 'ou',
      path1: {
        icon: '⚙️',
        title: 'Desenvolvimento de Raiz',
        body: 'Construção integral de uma solução CRM desenhada de raiz para os processos e necessidades específicas da organização.',
        items: [
          'Máxima flexibilidade funcional e técnica',
          'Solução sem legado nem limitações de plataforma',
          'Modelo de dados e experiência de utilizador desenhados como "folha em branco"'
        ],
        tag: { text: 'VER DETALHE NA SECÇÃO SEGUINTE' }
      },
      path2: {
        icon: '🔄',
        title: 'Migração Tecnológica',
        body: 'Transição a partir de um CRM existente (Salesforce, Dynamics 365) para uma solução proprietária, preservando dados e continuidade operacional.',
        accel: {
          label: 'Processos de aceleração da migração:',
          items: [
            'Extração e mapeamento do modelo de dados existente',
            'Migração de histórico de clientes e interações',
            'Replicação e validação de fluxos de negócio críticos',
            'Aceleração tecnológica por via da utilização de agentes'
          ]
        }
      }
    }
  },

  /* ══════════════════════════════════════════════════
     SLIDE 9 — HOW: TCO
  ══════════════════════════════════════════════════ */
  {
    hidden: true,
    type: 'tco',
    section: 'how',
    data: {
      headline: 'Análise de <accent-how>TCO — Horizonte de 5 anos</accent-how>',
      subheadline: 'Comparação ilustrativa para uma organização de média dimensão com 50 utilizadores de CRM. Valores em euros.',
      columns: [
        { label: 'CRM à Medida',   sublabel: 'Desenvolvimento Agentic', class: 'col-custom' },
        { label: 'Salesforce',      sublabel: 'Sales Cloud Enterprise',   class: 'col-sf'     },
        { label: 'Dynamics 365',    sublabel: 'Sales Premium',            class: 'col-dyn'    }
      ],
      rows: [
        {
          label: 'Licenças / Subscrição (5 anos)',
          values: ['€ 0', '€ 540 000', '€ 390 000'],
          highlight: true
        },
        {
          label: 'Implementação inicial',
          values: ['€ 180 000', '€ 320 000', '€ 250 000']
        },
        {
          label: 'Customizações ao longo dos 5 anos',
          values: ['€ 80 000', '€ 220 000', '€ 170 000']
        },
        {
          label: 'Infraestrutura / Cloud (5 anos)',
          values: ['€ 60 000', '€ 0 (incluído)', '€ 0 (incluído)']
        },
        {
          label: 'Manutenção e evolução contínua (5 anos)',
          values: ['€ 120 000', '€ 180 000', '€ 160 000']
        },
        {
          label: 'Integrações com sistemas de legado',
          values: ['€ 40 000', '€ 120 000', '€ 100 000']
        }
      ],
      total: {
        label: 'TCO Total — 5 Anos',
        values: ['€ 480 000', '€ 1 380 000', '€ 1 070 000']
      },
      note: '⚠ Valores ilustrativos, baseados em benchmarks de mercado publicamente disponíveis. A análise de business case deverá ser calibrada para o contexto específico de cada organização. Salesforce: ~€ 9 000/utilizador/ano. Dynamics 365: ~€ 6 500/utilizador/ano. O desenvolvimento agentic reduz os custos de implementação estimados em 60 a 70%.'
    }
  },

  /* ══════════════════════════════════════════════════
     SLIDE 9 — HOW: VALOR ESTRATÉGICO ADICIONAL
  ══════════════════════════════════════════════════ */
  {
    hidden: true,
    type: 'cards',
    section: 'how',
    data: {
      headline: 'Para além do <accent-how>custo direto</accent-how>',
      subheadline: 'A análise de TCO não captura a totalidade do valor. Uma solução à medida gera benefícios estratégicos que um package de terceiros dificilmente pode replicar.',
      accent: 'how',
      cards: [
        {
          icon: '🔒',
          title: 'Soberania e Governação de Dados',
          body: 'Os dados dos clientes residem na infraestrutura da própria organização. Elimina-se a dependência de data centers de terceiros, com impacto direto na conformidade regulatória e no cumprimento do RGPD.'
        },
        {
          icon: '🚀',
          title: 'Agilidade de Evolução',
          body: 'Qualquer nova funcionalidade pode ser desenvolvida e entregue em dias. Não existe roadmap externo a aguardar, nem módulos adicionais a adquirir para cada nova necessidade de negócio.'
        },
        {
          icon: '🧩',
          title: 'Integração Nativa com o Ecossistema',
          body: 'A solução adapta-se ao ecossistema tecnológico existente — e não o inverso. Integrações profundas com sistemas de legado sem conectores proprietários de custo elevado.'
        },
        {
          icon: '📈',
          title: 'Alinhamento Total ao Negócio',
          body: 'Processos concebidos de raiz para o cliente, sem cedências impostas pela lógica de produto do vendor. Uma experiência de utilização desenhada para os colaboradores reais da organização.'
        }
      ]
    }
  },

  /* ══════════════════════════════════════════════════
     SLIDE 10 — WHAT: CONTEXTO FUNCIONAL
  ══════════════════════════════════════════════════ */
  {
    hidden: false,
    type: 'epic-table',
    section: 'what',
    data: {
      headline: '<accent-what>Agentic CRM by Deloitte</accent-what> - Contexto funcional',
      subheadline: 'Mapeamento dos épicos funcionais identificados para um CRM no setor segurador.',
      epics: [
        {
          name: 'Dashboard e KPIs',
          desc: 'Indicadores de desempenho operacional, renovações em pipeline e alertas de negócio em tempo real',
          scope: 'KPIs em tempo real, representações gráficas de pipeline',
          phase: 'poc'
        },
        {
          name: 'Cliente 360°',
          desc: 'Visão unificada do cliente: apólices, leads, casos, interações, preferências de comunicação e linha temporal',
          scope: '7 histórias de utilizador entregues',
          phase: 'poc'
        },
        {
          name: 'Gestão de Apólices',
          desc: 'Ciclo de vida completo de apólices, associação a clientes e registo de histórico de alterações',
          scope: '4 histórias de utilizador entregues',
          phase: 'poc'
        },
        {
          name: 'Renovações',
          desc: 'Pipeline de renovações próximas, criação automatizada de leads de renovação e notificações proativas',
          scope: '4 histórias de utilizador entregues',
          phase: 'poc'
        },
        {
          name: 'Lorem ipsum dolor',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
          scope: '',
          phase: 'tobe'
        },
        {
          name: 'Lorem ipsum dolor',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
          scope: '',
          phase: 'tobe'
        },
        {
          name: 'Lorem ipsum dolor',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
          scope: '',
          phase: 'tobe'
        },
        {
          name: 'Lorem ipsum dolor',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
          scope: '',
          phase: 'tobe'
        },
        {
          name: 'Lorem ipsum dolor',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
          scope: '',
          phase: 'tobe'
        },
        {
          name: 'Lorem ipsum dolor',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
          scope: '',
          phase: 'tobe'
        }
      ]
    }
  },

  /* ══════════════════════════════════════════════════
     SLIDE 11 — WHAT: PROTÓTIPO
  ══════════════════════════════════════════════════ */
  {
    type: 'prototype',
    section: 'what',
    data: {
      headline: '<accent-what>Protótipo</accent-what>',
      subheadline: 'CRM de Seguros — construído de raiz com Desenvolvimento Agentic.',
      note: 'Substituir por screenshots reais. Link a saltar para a aplicação.',
      frames: [
        {
          icon: '📊',
          label: 'Dashboard e KPIs',
          sub: 'Métricas operacionais em tempo real, pipeline de renovações'
        },
        {
          icon: '👤',
          label: 'Cliente 360°',
          sub: 'Visão unificada: apólices, leads, casos, histórico, preferências'
        },
        {
          icon: '🔄',
          label: 'Pipeline de Renovações',
          sub: 'Alertas automáticos, criação de leads de renovação'
        },
        {
          icon: '🔔',
          label: 'Notificações e Interações',
          sub: 'Centro de notificações e registo de interações por cliente'
        }
      ]
    }
  },

  /* ══════════════════════════════════════════════════
     SLIDE 12 — WHAT: ROADMAP
  ══════════════════════════════════════════════════ */
  {
    type: 'roadmap',
    section: 'what',
    data: {
      headline: '<accent-what>Roadmap</accent-what> de desenvolvimento',
      subheadline: 'Roadmap ilustrativo da entrega iterativa do CRM, de POC a produto final.',
      phases: [
        {
          dotClass: 'g',
          duration: '4 – 6 Semanas',
          title: 'Prova de Conceito',
          titleColor: 'green',
          items: [
            'Dashboard e KPIs operacionais',
            'Cliente 360° (7 vistas funcionais)',
            'Gestão de Apólices',
            'Pipeline de Renovações',
            'Sistema de Notificações',
            'Autenticação simulada e dados de demonstração'
          ]
        },
        {
          dotClass: 'b',
          duration: '+ 8 – 10 Semanas',
          title: 'MVP',
          titleColor: 'how',
          items: [
            'Pipeline de Leads (tabela e kanban)',
            'Gestão de Casos',
            'Carregamento de Documentos',
            'Azure AD e perfis de acesso',
            'Registo de auditoria',
            'Migrações de base de dados'
          ]
        },
        {
          dotClass: 'p',
          duration: '+ 10 – 14 Semanas',
          title: 'Produto',
          titleColor: 'what',
          items: [
            'Relatórios e Exportação',
            'Integrações com seguradoras',
            'Experiência mobile-responsive',
            'Otimização de desempenho e escalabilidade',
            'Go-live e acompanhamento',
            'Evolução contínua orientada ao negócio'
          ]
        }
      ],
      callout: 'Com Desenvolvimento Agentic, cada fase é concluída <strong>2 a 3 vezes mais rapidamente</strong> face a uma metodologia tradicional — mantendo a qualidade de código e a integridade arquitetural.'
    }
  },

  /* ══════════════════════════════════════════════════
     SLIDE 13 — FECHO
  ══════════════════════════════════════════════════ */
  {
    hidden: true,
    type: 'closing',
    section: null,
    data: {
      titleLine1: 'O próximo',
      titleLine2: 'passo',
      items: [
        {
          num: '1',
          text: '<strong>Validar o business case</strong> com os dados reais da organização — utilizadores, processos críticos, custo total de detenção atual.'
        },
        {
          num: '2',
          text: '<strong>Definir o âmbito da Prova de Conceito</strong> — 4 a 6 semanas para colocar uma solução funcional nas mãos dos utilizadores.'
        },
        {
          num: '3',
          text: '<strong>Alinhar o contexto funcional</strong> — identificar os épicos e histórias de maior impacto para o negócio a priorizar na primeira fase.'
        },
        {
          num: '4',
          text: '<strong>Iniciar o projeto</strong> — com uma equipa focada, ciclos curtos e Desenvolvimento Agentic a multiplicar a produtividade desde o primeiro dia.'
        }
      ]
    }
  },

  /* ══════════════════════════════════════════════════
     SLIDE FINAL — LOGO
  ══════════════════════════════════════════════════ */
  {
    type: 'logo-end',
    section: null,
    data: {
      name: 'Deloitte'
    }
  }

]; // fim de SLIDES

/* ══════════════════════════════════════════════════
   UI STRINGS — interface labels translated per language
══════════════════════════════════════════════════ */
const UI_STRINGS = {
  pt: {
    consequenceLabel: 'Consequência',
    tcoComponentLabel: 'Componente',
    epicEpicLabel: 'Épico',
    epicDescLabel: 'Descrição',
    epicPhaseLabel: 'Fase',
    reviewWatermark: 'REVER',
    unknownSlide: 'Tipo de slide desconhecido',
    loginTitle: 'Acesso Restrito',
    loginSub: 'Introduza as suas credenciais para continuar.',
    loginUserLabel: 'Utilizador',
    loginUserPlaceholder: 'utilizador',
    loginPassLabel: 'Password',
    loginBtn: 'Entrar',
    loginError: 'Credenciais inválidas. Tente novamente.',
    commentsPanelTitle: 'Comentários',
    commentsEmpty: 'Sem comentários neste slide.',
    commentsTextPlaceholder: 'Escreva um comentário...',
    commentsAddBtn: 'Adicionar',
    commentsResolveBtn: 'Resolver',
    commentsReopenBtn: 'Reabrir',
    commentsDeleteBtn: 'Apagar',
    commentsExportBtn: 'Exportar comentários',
    commentsImportBtn: 'Importar comentários',
    commentsImportMerge: 'comentário(s) importado(s).',
    commentsNameModal: 'Como quer ser identificado nos comentários?',
    commentsNameBtn: 'Confirmar',
    commentsResolved: 'Resolvido'
  },
  en: {
    consequenceLabel: 'Consequence',
    tcoComponentLabel: 'Component',
    epicEpicLabel: 'Epic',
    epicDescLabel: 'Description',
    epicPhaseLabel: 'Phase',
    reviewWatermark: 'REVIEW',
    unknownSlide: 'Unknown slide type',
    loginTitle: 'Restricted Access',
    loginSub: 'Enter your credentials to continue.',
    loginUserLabel: 'Username',
    loginUserPlaceholder: 'username',
    loginPassLabel: 'Password',
    loginBtn: 'Sign in',
    loginError: 'Invalid credentials. Please try again.',
    commentsPanelTitle: 'Comments',
    commentsEmpty: 'No comments on this slide.',
    commentsTextPlaceholder: 'Write a comment...',
    commentsAddBtn: 'Add',
    commentsResolveBtn: 'Resolve',
    commentsReopenBtn: 'Reopen',
    commentsDeleteBtn: 'Delete',
    commentsExportBtn: 'Export comments',
    commentsImportBtn: 'Import comments',
    commentsImportMerge: 'comment(s) imported.',
    commentsNameModal: 'How would you like to be identified in comments?',
    commentsNameBtn: 'Confirm',
    commentsResolved: 'Resolved'
  }
};

/* ══════════════════════════════════════════════════
   SLIDES_EN — English version of the presentation
══════════════════════════════════════════════════ */
const SLIDES_EN = [

  /* ── SLIDE 1 — COVER ── */
  {
    type: 'cover',
    section: null,
    data: {
      logo: 'Deloitte Technology',
      titleAccent: 'Agentic-Built',
      titleLine1: 'CRM',
      titleLine2: 'The New Paradigm',
      subtitle: 'From SaaS package acquisition to accelerated development powered by Agentic AI',
      tags: []
    }
  },

  /* ── SLIDE 2 — WHY: INFLECTION POINT ── */
  {
    type: 'stats',
    section: 'why',
    data: {
      headline: 'We are at an <accent>inflection point</accent>',
      subheadline: 'The emergence of AI, and its rapid growth, makes custom CRM development viable and able to compete, on equal terms, with acquiring a SaaS solution — in cost, delivery time and operational viability.',
      stats: [
        {
          num: 'Up to 2×',
          color: 'green',
          label: 'Increase in time-to-market through the use of AI-based agentic development tools'
        },
        {
          num: 'Lower TCO',
          color: 'how',
          label: 'Cost reduction compared to a traditional implementation with the same functional scope'
        },
        {
          num: '100%',
          color: 'what',
          label: 'Solution alignment to the business, without concessions due to generic platform features'
        }
      ],
      callout: 'Dependence on external platforms, with rising licence costs, constrained roadmaps, and difficult functional fit, <strong>opens the door to different options.</strong>'
    }
  },

  /* ── SLIDE 3 — WHY: THE HISTORICAL PARADIGM ── */
  {
    type: 'two-col',
    section: 'why',
    data: {
      headline: 'The <accent>current paradigm</accent> of CRM development',
      subheadline: 'The acquisition of CRM packages has been the dominant trend, particularly in a context prior to the technological sophistication now seen with new AI tools.',
      col1: {
        icon: '📦',
        title: 'Factors driving package adoption',
        color: 'muted',
        items: [
          'High perceived complexity in custom development models',
          'Long time-to-market for truly customised solutions',
          'High failure rate in greenfield development projects',
          'Platforms such as Salesforce and Dynamics offer mature, feature-rich ecosystems'
        ]
      },
      col2: {
        icon: '⚠',
        title: 'Challenges associated with their adoption',
        color: 'muted',
        items: [
          'Business processes typically forced to adapt to the software, not the other way around',
          'Per-user licensing model whose costs scale significantly',
          'Unused base platform components, and a high volume of customisations',
          'Dependence on the vendor roadmap for strategically important evolutions'
        ]
      },
      callout: 'New development paradigms directly address these challenges, minimising the concessions required when adopting a package.'
    }
  },

  /* ── SLIDE 4 — WHY: WHAT CHANGED ── */
  {
    type: 'cards-consequence',
    section: 'why',
    data: {
      headline: 'The factors that <accent>change the equation</accent>',
      subheadline: 'Models from vendors such as Claude Code and Gemini have reached a level of maturity that allows them to generate, review and evolve code efficiently and consistently, serving as significant accelerators for human teams.',
      accent: 'green',
      cards: [
        {
          icon: '',
          title: 'Next-Generation Language Models',
          body: 'Models such as Claude Sonnet and Gemini 2.5 Pro understand functional requirements and significantly accelerate the design, development and testing process.'
        },
        {
          icon: '',
          title: 'Agentic Development Tools',
          body: 'Tools such as <strong style="color:var(--green)">Claude Code</strong> go beyond "autocomplete": they execute multi-step tasks autonomously, iterating over production code with auditable results.'
        },
        {
          icon: '',
          title: 'New Software Development Paradigm',
          body: 'With a greater focus on planning and functional scope, it will be increasingly faster to implement and evolve software, which significantly reduces the competitive advantage of SaaS vendors.'
        }
      ]
    }
  },

  /* ── SLIDE 5 — WHY: AGENTIC DEVELOPMENT ── */
  {
    type: 'agent-diagram',
    section: 'why',
    data: {
      headline: 'The <accent>Agentic development (1/2)</accent>',
      subheadline: 'More than a co-pilot providing suggestions, this is an orchestrated system of autonomous agents that plans, implements, tests and iterates. It is combined with human oversight to ensure quality, delivery of high-value activities and alignment with business objectives.',
      orchestrator: {
        label: 'Orchestrator',
        name: '🤖 Claude Code / Main Agent'
      },
      agents: [
        { label: 'Specialist', name: '🗄 Database Agent',      color: 'green' },
        { label: 'Specialist', name: '🎨 Frontend Agent',      color: 'how'   },
        { label: 'Specialist', name: '⚙️ Backend Agent',       color: 'what'  },
        { label: 'Specialist', name: '📋 Documentation Agent', color: 'yellow'}
      ],
      callout: 'The human developer defines the functional and architectural context, validates critical decisions and delegates the execution of solution components to the agents. The productivity of development processes and their subsequent evolution increases significantly.'
    }
  },

  /* ── SLIDE 6 — WHY: AGENTIC DEVELOPMENT 2/2 ── */
  {
    type: 'vibe-coding',
    section: 'why',
    data: {
      headline: 'The <accent>Agentic development (2/2)</accent>',
      quote: {
        text: 'You just see things, say things, run things, and copy-paste things — and it mostly works.',
        author: 'Andrej Karpathy, February 2025'
      },
      maturityLabel: 'Maturity Assessment',
      strong: {
        label: 'Strengths:',
        items: ['CRUD applications and forms', 'Prototyping and MVPs', 'UI scaffolding', 'Boilerplate reduction']
      },
      weak: {
        label: 'Areas of Concern:',
        items: ['Complex business logic', 'Security hardening', 'Performance at scale', 'Long-term maintainability']
      }
    }
  },

  /* ── SLIDE 7 — HOW: DEVELOPMENT CYCLES ── */
  {
    type: 'cycle',
    section: 'how',
    data: {
      headline: 'Execution model for an <accent-how>Agentic development project</accent-how>',
      subheadline: 'In the new paradigm, creating short, iterative cycles becomes increasingly important, with emphasis on functional and technical planning, where the context provided to agents is the main quality factor for the output.',
      steps: [
        {
          num: '1',
          title: 'Functional Planning',
          body: 'Definition of epics, user stories and detailed acceptance criteria, where the depth of context directly determines the quality of the agents\' output.'
        },
        {
          num: '2',
          title: 'Architecture & Technical Decisions',
          body: 'Definition and iteration on architecture and technology stack, data model design and design patterns — taking into account best practices, benchmarks and contextual fit.'
        },
        {
          num: '3',
          title: 'Agentic Execution',
          body: 'The development team is extended through agents, which implement and perform unit tests on features, iterating until the expected result is achieved.'
        },
        {
          num: '4',
          title: 'Human Technical Review',
          body: 'The developer complements the developments and validates the result, refining where necessary or initiating a new agent iteration cycle.'
        },
        {
          num: '5',
          title: 'Deploy & Feedback Loop',
          body: 'The cycle closes with business feedback and test case execution, giving rise to the planning of the next sprint.'
        }
      ],
      callout: ''
    }
  },

  /* ── SLIDE 8 — HOW: THREE PILLARS ── */
  {
    type: 'pillars',
    section: 'how',
    data: {
      headline: 'We believe in our <accent-how>differentiation</accent-how>, as a result of three main factors',
      subheadline: 'AI tools are a necessary but not sufficient condition for agent-based development. The other two pillars are decisive for transforming technological potential into tangible value for the client.',
      pillars: [
        {
          colorClass: 'p1',
          num: '1',
          icon: '🧠',
          title: 'LLM Model Capabilities',
          body: 'State-of-the-art models capable of generating, reviewing and refactoring production code autonomously and consistently.',
          tag: 'Tools'
        },
        {
          colorClass: 'p2',
          num: '2',
          icon: '⚙️',
          title: 'Usage Experience',
          body: 'Mastery of these tools, through prompt engineering, context management and agent supervision, is a differentiating competence we develop within our teams.',
          tag: 'Technical Proficiency'
        },
        {
          colorClass: 'p3',
          num: '3',
          icon: '🏦',
          title: 'Industry Functional Knowledge',
          body: 'We apply our industry knowledge, and extensive experience in CRM implementation, to create solutions tailored to the business context.',
          tag: 'Business Knowledge'
        }
      ],
      equalsText: ''
    }
  },

  /* ── SLIDE 8b — HOW: TWO APPROACHES ── */
  {
    type: 'two-paths',
    section: 'how',
    data: {
      headline: 'Two approaches to an <accent-how>Agentic custom CRM</accent-how>',
      subheadline: 'Agentic development applies to two distinct scenarios: greenfield build for maximum functional fit, or technology migration from an existing platform.',
      orLabel: 'or',
      path1: {
        icon: '⚙️',
        title: 'Greenfield Development',
        body: 'Full build of a CRM solution designed from scratch for the organisation\'s specific processes and requirements.',
        items: [
          'Maximum functional and technical flexibility',
          'No legacy constraints or platform limitations',
          'Data model and user experience designed as a "blank slate"'
        ],
        tag: { text: 'SEE DETAIL IN THE NEXT SECTION' }
      },
      path2: {
        icon: '🔄',
        title: 'Technology Migration',
        body: 'Transition from an existing CRM (Salesforce, Dynamics 365) to a proprietary solution, preserving data and operational continuity.',
        accel: {
          label: 'Migration acceleration processes:',
          items: [
            'Extraction and mapping of the existing data model',
            'Migration of client history and interactions',
            'Replication and validation of critical business flows',
            'Technology acceleration through the use of agents'
          ]
        }
      }
    }
  },

  /* ── SLIDE 9 — HOW: TCO ── */
  {
    hidden: true,
    type: 'tco',
    section: 'how',
    data: {
      headline: 'TCO Analysis — <accent-how>5-Year Horizon</accent-how>',
      subheadline: 'Illustrative comparison for a mid-sized organisation with 50 CRM users. Values in euros.',
      columns: [
        { label: 'Custom CRM',   sublabel: 'Agentic Development',    class: 'col-custom' },
        { label: 'Salesforce',   sublabel: 'Sales Cloud Enterprise',  class: 'col-sf'     },
        { label: 'Dynamics 365', sublabel: 'Sales Premium',           class: 'col-dyn'    }
      ],
      rows: [
        {
          label: 'Licences / Subscription (5 years)',
          values: ['€ 0', '€ 540 000', '€ 390 000'],
          highlight: true
        },
        {
          label: 'Initial implementation',
          values: ['€ 180 000', '€ 320 000', '€ 250 000']
        },
        {
          label: 'Customisations over 5 years',
          values: ['€ 80 000', '€ 220 000', '€ 170 000']
        },
        {
          label: 'Infrastructure / Cloud (5 years)',
          values: ['€ 60 000', '€ 0 (included)', '€ 0 (included)']
        },
        {
          label: 'Maintenance and continuous evolution (5 years)',
          values: ['€ 120 000', '€ 180 000', '€ 160 000']
        },
        {
          label: 'Legacy system integrations',
          values: ['€ 40 000', '€ 120 000', '€ 100 000']
        }
      ],
      total: {
        label: 'Total TCO — 5 Years',
        values: ['€ 480 000', '€ 1 380 000', '€ 1 070 000']
      },
      note: '⚠ Illustrative values, based on publicly available market benchmarks. Business case analysis should be calibrated to the specific context of each organisation. Salesforce: ~€ 9,000/user/year. Dynamics 365: ~€ 6,500/user/year. Agentic development reduces estimated implementation costs by 60 to 70%.'
    }
  },

  /* ── SLIDE 10 — HOW: ADDITIONAL STRATEGIC VALUE ── */
  {
    hidden: true,
    type: 'cards',
    section: 'how',
    data: {
      headline: 'Beyond <accent-how>direct cost</accent-how>',
      subheadline: 'TCO analysis does not capture the full value. A custom solution generates strategic benefits that a third-party package can hardly replicate.',
      accent: 'how',
      cards: [
        {
          icon: '🔒',
          title: 'Data Sovereignty and Governance',
          body: 'Customer data resides on the organisation\'s own infrastructure. Dependence on third-party data centres is eliminated, with a direct impact on regulatory compliance and GDPR.'
        },
        {
          icon: '🚀',
          title: 'Evolution Agility',
          body: 'Any new feature can be developed and delivered in days. There is no external roadmap to wait for, nor additional modules to acquire for each new business need.'
        },
        {
          icon: '🧩',
          title: 'Native Ecosystem Integration',
          body: 'The solution adapts to the existing technology ecosystem — not the other way around. Deep integrations with legacy systems without expensive proprietary connectors.'
        },
        {
          icon: '📈',
          title: 'Full Business Alignment',
          body: 'Processes designed from scratch for the client, without concessions imposed by the vendor\'s product logic. A user experience designed for the organisation\'s real employees.'
        }
      ]
    }
  },

  /* ── SLIDE 11 — WHAT: FUNCTIONAL CONTEXT ── */
  {
    hidden: false,
    type: 'epic-table',
    section: 'what',
    data: {
      headline: '<accent-what>Agentic CRM by Deloitte</accent-what> - Functional context',
      subheadline: 'Mapping of the functional epics identified for a CRM in the insurance sector.',
      epics: [
        {
          name: 'Dashboard & KPIs',
          desc: 'Operational performance indicators, renewals in pipeline and business alerts in real time',
          scope: 'Real-time KPIs, pipeline charts',
          phase: 'poc'
        },
        {
          name: 'Client 360°',
          desc: 'Unified client view: policies, leads, cases, interactions, communication preferences and timeline',
          scope: '7 user stories delivered',
          phase: 'poc'
        },
        {
          name: 'Policy Management',
          desc: 'Full policy lifecycle, association to clients and change history recording',
          scope: '4 user stories delivered',
          phase: 'poc'
        },
        {
          name: 'Renewals',
          desc: 'Upcoming renewals pipeline, automated renewal lead creation and proactive notifications',
          scope: '4 user stories delivered',
          phase: 'poc'
        },
        {
          name: 'Lorem ipsum dolor',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
          scope: '',
          phase: 'tobe'
        },
        {
          name: 'Lorem ipsum dolor',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
          scope: '',
          phase: 'tobe'
        },
        {
          name: 'Lorem ipsum dolor',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
          scope: '',
          phase: 'tobe'
        },
        {
          name: 'Lorem ipsum dolor',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
          scope: '',
          phase: 'tobe'
        },
        {
          name: 'Lorem ipsum dolor',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
          scope: '',
          phase: 'tobe'
        },
        {
          name: 'Lorem ipsum dolor',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
          scope: '',
          phase: 'tobe'
        }
      ]
    }
  },

  /* ── SLIDE 12 — WHAT: PROTOTYPE ── */
  {
    type: 'prototype',
    section: 'what',
    data: {
      headline: '<accent-what>Prototype</accent-what>',
      subheadline: 'Insurance CRM — built from scratch with Agentic Development.',
      note: 'Replace with real screenshots. Link to jump to the application.',
      frames: [
        {
          icon: '📊',
          label: 'Dashboard & KPIs',
          sub: 'Real-time operational metrics, renewals pipeline'
        },
        {
          icon: '👤',
          label: 'Client 360°',
          sub: 'Unified view: policies, leads, cases, history, preferences'
        },
        {
          icon: '🔄',
          label: 'Renewals Pipeline',
          sub: 'Automatic alerts, renewal lead creation'
        },
        {
          icon: '🔔',
          label: 'Notifications & Interactions',
          sub: 'Notification centre and interaction log per client'
        }
      ]
    }
  },

  /* ── SLIDE 13 — WHAT: ROADMAP ── */
  {
    type: 'roadmap',
    section: 'what',
    data: {
      headline: 'Development <accent-what>Roadmap</accent-what>',
      subheadline: 'Illustrative roadmap for iterative CRM delivery, from POC to final product.',
      phases: [
        {
          dotClass: 'g',
          duration: '4 – 6 Weeks',
          title: 'Proof of Concept',
          titleColor: 'green',
          items: [
            'Dashboard and operational KPIs',
            'Client 360° (7 functional views)',
            'Policy Management',
            'Renewals Pipeline',
            'Notification System',
            'Simulated authentication and demo data'
          ]
        },
        {
          dotClass: 'b',
          duration: '+ 8 – 10 Weeks',
          title: 'MVP',
          titleColor: 'how',
          items: [
            'Leads Pipeline (table and kanban)',
            'Case Management',
            'Document Upload',
            'Azure AD and access profiles',
            'Audit log',
            'Database migrations'
          ]
        },
        {
          dotClass: 'p',
          duration: '+ 10 – 14 Weeks',
          title: 'Product',
          titleColor: 'what',
          items: [
            'Reports and Export',
            'Insurer integrations',
            'Mobile-responsive experience',
            'Performance and scalability optimisation',
            'Go-live and follow-up',
            'Continuous business-driven evolution'
          ]
        }
      ],
      callout: 'With Agentic Development, each phase is completed <strong>2 to 3 times faster</strong> than with a traditional methodology — maintaining code quality and architectural integrity.'
    }
  },

  /* ── SLIDE 14 — CLOSING ── */
  {
    hidden: true,
    type: 'closing',
    section: null,
    data: {
      titleLine1: 'The next',
      titleLine2: 'step',
      items: [
        {
          num: '1',
          text: '<strong>Validate the business case</strong> with the organisation\'s real data — users, critical processes, current total cost of ownership.'
        },
        {
          num: '2',
          text: '<strong>Define the Proof of Concept scope</strong> — 4 to 6 weeks to put a working solution in the hands of users.'
        },
        {
          num: '3',
          text: '<strong>Align the functional context</strong> — identify the highest-impact epics and stories for the business to prioritise in the first phase.'
        },
        {
          num: '4',
          text: '<strong>Start the project</strong> — with a focused team, short cycles and Agentic Development multiplying productivity from day one.'
        }
      ]
    }
  },

  /* ── FINAL SLIDE — LOGO ── */
  {
    type: 'logo-end',
    section: null,
    data: {
      name: 'Deloitte'
    }
  }

]; // end of SLIDES_EN
