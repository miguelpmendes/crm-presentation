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
  password: 'crm2026'
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
          label: 'Incremento no time-to-market através da utilização com ferramentas de desenvolvimento agentic baseadas em IA'
        },
        {
          num: 'Menor TCO',
          color: 'how',
          label: 'Redução de custo face a uma implementação tradicional com o mesmo âmbito funcional'
        },
        {
          num: '100%',
          color: 'what',
          label: 'Alinhamento da solução ao negócio, sem cedências impostas por funcionalidades genéricas de plataforma'
        }
      ],
      callout: 'A dependência de plataformas externas, com custo crescente de licenças, roadmap condicionado, e difícil adequação funcional, <strong>abre o caminho para soluções alternativas.</strong>'
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
      subheadline: 'A aquisição de packages de CRM tem sido a principal opção das organizações. O contexto tecnológico colocava desafios significativos ao desenvolvimento à medida para a maioria das organizações.',
      col1: {
        icon: '📦',
        title: 'Fatores que impulsionam a adoção de packages',
        color: 'muted',
        items: [
          'Elevada complexidade associada ao desenvolvimento à medida',
          'Time-to-market de vários anos para soluções verdadeiramente customizadas',
          'Elevada taxa de insucesso em projetos de desenvolvimento de raiz',
          'Plataformas como Salesforce e Dynamics oferecem ecossistemas maduros e funcionalmente ricos'
        ]
      },
      col2: {
        icon: '⚠',
        title: 'Cedências estruturais que nunca foram resolvidas',
        color: 'red',
        items: [
          'Processos de negócio, em muitos casos, forçados a adaptar-se ao software, e não o inverso',
          'Modelo de licenciamento por utilizador que poderá escalar custos de forma significativa',
          'Componentes base das plataformas não utilizadas e elevado volume de customizações',
          'Dependência do roadmap do fornecedor para evoluções estratégicas do negócio'
        ]
      },
      callout: 'Estas cedências foram durante décadas o <strong>preço a pagar</strong> pela adoção deste modelo. Essa realidade está a mudar.'
    }
  },

  /* ══════════════════════════════════════════════════
     SLIDE 4 — WHY: O QUE MUDOU
  ══════════════════════════════════════════════════ */
  {
    type: 'cards',
    section: 'why',
    data: {
      headline: 'Os fatores que <accent>alteram a equação</accent>',
      subheadline: 'Os modelos de linguagem de linguagem de soluções como Claude Code e Gemini atingiram um nível de maturidade que lhes permite gerar, rever e evoluir código de produção de forma eficiente e consistente, servindo de aceleradores significativos à força de trabalho humana.',
      accent: 'green',
      cards: [
        {
          icon: '',
          title: 'Modelos de Linguagem de Nova Geração',
          body: 'Modelos como o Claude Sonnet e o GPT-4o compreendem requisitos funcionais e aceleram de forma significativa o processo de desenho, desenvolvimento e teste.'
        },
        {
          icon: '',
          title: 'Ferramentas de Desenvolvimento Agentic',
          body: 'Ferramentas como o <strong style="color:var(--green)">Claude Code</strong> transcendem o processo de "autocomplete": executam tarefas de múltiplos passos de forma autónoma, iterando sobre código real em projetos reais, com resultados auditáveis.'
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
      headline: 'O que é o <accent>Desenvolvimento Agentic</accent>',
      subheadline: 'Mais do que um co-piloto que fornece sugestões, trata-se de um sistema orquestrado de agentes autónomos que planeia, implementa, testa e itera — com validação e supervisão humana aplicada às atividades de maior valor.',
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
      callout: 'O developer humano assume o papel de <strong>maestro</strong> — define o contexto funcional e arquitectural, valida decisões críticas e delega a execução aos agentes. A produtividade multiplica-se de forma exponencial.'
    }
  },

  /* ══════════════════════════════════════════════════
     SLIDE 6 — HOW: CICLOS DE DESENVOLVIMENTO
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
          body: 'O developer valida o resultado, refina onde necessário e aprova. O output é um pull request limpo, documentado e pronto a integrar.'
        },
        {
          num: '5',
          title: 'Deploy e Ciclo de Feedback',
          body: 'O ciclo encerra com feedback real de utilizadores e de negócio, que alimenta o planeamento do sprint seguinte.'
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
      headline: 'A combinação que gera <accent-how>diferenciação real</accent-how>',
      subheadline: 'As ferramentas de IA são condição necessária, mas não suficiente. Os restantes dois pilares são determinantes para transformar potencial tecnológico em valor real para o cliente.',
      pillars: [
        {
          colorClass: 'p1',
          num: '1',
          icon: '🧠',
          title: 'Capacidades dos Modelos LLM',
          body: 'Modelos de última geração capazes de gerar, rever e refatorar código de produção de forma autónoma e consistente — com qualidade equivalente a developers seniores.',
          tag: 'Tecnologia'
        },
        {
          colorClass: 'p2',
          num: '2',
          icon: '⚙️',
          title: 'Experiência de Utilização',
          body: 'Saber extrair o máximo destas ferramentas — engenharia de prompts, gestão de contexto, supervisão de agentes — é uma competência diferenciadora que a Deloitte está ativamente a desenvolver.',
          tag: 'Deloitte Digital'
        },
        {
          colorClass: 'p3',
          num: '3',
          icon: '🏦',
          title: 'Conhecimento Funcional de Indústria',
          body: 'CRM, Seguros, Gestão de Leads, Apólices, Sinistros, Renovações — o conhecimento de indústria que orienta cada decisão de produto e confere rigor funcional a cada épico.',
          tag: 'Deloitte Industry'
        }
      ],
      equalsText: 'Uma solução verdadeiramente diferenciadora para o cliente, entregue a um custo e numa velocidade até agora impossíveis com metodologias tradicionais.'
    }
  },

  /* ══════════════════════════════════════════════════
     SLIDE 8 — HOW: TCO
  ══════════════════════════════════════════════════ */
  {
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
    type: 'epic-table',
    section: 'what',
    data: {
      headline: 'Contexto funcional — <accent-what>CRM de Seguros</accent-what>',
      subheadline: 'Mapeamento dos épicos funcionais identificados para uma solução completa de gestão de clientes no setor segurador.',
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
          name: 'Pipeline de Leads',
          desc: 'Página dedicada de gestão de leads com vistas em tabela e kanban, transições de estado e edição inline',
          scope: 'Contexto funcional definido — desenvolvimento planeado',
          phase: 'mvp'
        },
        {
          name: 'Gestão de Casos',
          desc: 'Lista de casos com filtros por estado e prioridade, associação a clientes e apólices',
          scope: 'Desenvolvimento planeado',
          phase: 'mvp'
        },
        {
          name: 'Gestão Documental',
          desc: 'Carregamento e armazenamento de documentos por cliente e apólice, com pré-visualização integrada',
          scope: 'Aguarda configuração de infraestrutura de armazenamento',
          phase: 'mvp'
        },
        {
          name: 'Segurança e Acessos',
          desc: 'Autenticação via Azure AD, perfis de acesso (Administrador, Gestor, Mediador), auditoria de ações e segurança ao nível do campo',
          scope: 'Scaffolding concluído — aguarda configuração de Azure AD',
          phase: 'mvp'
        },
        {
          name: 'Relatórios e Exportação',
          desc: 'Exportação para CSV e PDF, análise de prémios por tipo de seguro e indicadores de desempenho por mediador',
          scope: 'Desenvolvimento planeado',
          phase: 'full'
        },
        {
          name: 'Integrações Externas',
          desc: 'Ligações a APIs de seguradoras, sistemas de legado e sincronização bidirecional de dados',
          scope: 'A definir em alinhamento com o cliente',
          phase: 'full'
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
      headline: 'O <accent-what>protótipo</accent-what> em desenvolvimento',
      subheadline: 'CRM de Seguros — construído de raiz com Desenvolvimento Agentic, num horizonte de poucas semanas.',
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
      headline: 'De <accent-what>POC</accent-what> a produto — o percurso',
      subheadline: 'Uma progressão clara com entregas de valor concreto em cada fase, sem dependência de um big bang no final do projeto.',
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
  }

]; // fim de SLIDES
