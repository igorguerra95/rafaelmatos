export interface Specialty {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  indications: string[];
  sessionDuration: string;
  badge: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  condition: string;
  content: string;
  recoveryTime: string;
  rating: number;
}

export interface Metric {
  value: number;
  suffix: string;
  label: string;
  detail: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const CLINICAL_METRICS: Metric[] = [
  {
    value: 4800,
    suffix: "+",
    label: "Atendimentos Clínicos",
    detail: "Sessões personalizadas 1-a-1 com foco em biomecânica de precisão",
  },
  {
    value: 98,
    suffix: ".4%",
    label: "Taxa de Recuperação Funcional",
    detail: "Pacientes que retornaram às suas rotinas sem dores incapacitantes",
  },
  {
    value: 12,
    suffix: " Anos",
    label: "Experiência e Pesquisa",
    detail: "Dedicação integral à fisioterapia ortopédica e postural",
  },
  {
    value: 100,
    suffix: "%",
    label: "Atendimento Individualizado",
    detail: "Sem revezamento de pacientes, com atenção clínica exclusiva",
  },
];

export const SPECIALTIES: Specialty[] = [
  {
    id: "rpg",
    title: "Reeducação Postural Global (RPG)",
    subtitle: "Alinhamento das cadeias musculares e alívio da pressão discal",
    description: "Método terapêutico manual de alta precisão que trata desvios posturais e dores na coluna vertebral de forma global, identificando e corrigindo a causa primária da lesão e não apenas o sintoma.",
    highlights: [
      "Descompressão de hérnias de disco cervicais e lombares",
      "Alinhamento postural em escolioses e hiperlordoses",
      "Tratamento de cefaleias tensionais e dores cervicais",
      "Restauração do eixo articular e flexibilidade global"
    ],
    indications: ["Hérnia discal", "Escoliose", "Dor crônica na coluna", "Hipercifose", "Síndrome do túnel do carpo"],
    sessionDuration: "60 minutos",
    badge: "Certificação Souchard",
    iconName: "ShieldCheck",
  },
  {
    id: "pilates-clinico",
    title: "Pilates Clínico & Estabilidade Central",
    subtitle: "Fortalecimento seguro e controle neuromuscular profundo",
    description: "Adaptação médica dos princípios de Pilates para reabilitação e prevenção. Foco específico no complexo lombo-pélvico-quadril (Core), com aparelhos específicos e resistência progressiva orientada.",
    highlights: [
      "Ativação do transverso abdominal e multífidos vertebrais",
      "Melhora expressiva da mobilidade torácica e quadril",
      "Sem impacto ou sobrecarga nas articulações lesionadas",
      "Ideal para prevenção de recidivas e ganho de vigor"
    ],
    indications: ["Instabilidade lombar", "Lombociatalgia", "Condromalácia patelar", "Recuperação articular"],
    sessionDuration: "50 minutos",
    badge: "Equipamentos Clínicos",
    iconName: "Activity",
  },
  {
    id: "reabilitacao-ortopedica",
    title: "Reabilitação Traumato-Ortopédica",
    subtitle: "Recuperação funcional pós-cirúrgica e pós-traumática acelerada",
    description: "Protocolos fisioterapêuticos avançados baseados nas diretrizes mais rigorosas da ortopedia mundial, acelerando a regeneração tecidual e o ganho seguro de amplitude e força.",
    highlights: [
      "Pós-operatório de LCA, meniscos, manguito rotador e próteses",
      "Recuperação de fraturas, entorses e luxações articulares",
      "Controle ágil de edema, rigidez e inflamação",
      "Testes dinâmicos de força para liberação funcional"
    ],
    indications: ["Pós-cirúrgico", "Lesões ligamentares", "Tendinopatias", "Bursites", "Capsulite adesiva"],
    sessionDuration: "60 minutos",
    badge: "Baseado em Evidências",
    iconName: "Bone",
  },
  {
    id: "fisioterapia-esportiva",
    title: "Fisioterapia Esportiva & Retorno ao Esporte",
    subtitle: "Da lesão aguda à performance máxima sem medo de novas lesões",
    description: "Abordagem especializada para atletas amadores e de alto rendimento. Avaliação cinemática do gesto esportivo (corrida, tênis, musculação, ciclismo) e protocolo criterioso de Return to Play.",
    highlights: [
      "Análise biomecânica do movimento e apoio podopostural",
      "Treinamento proprioceptivo e pliometria controlada",
      "Liberação miofascial e recuperação neuromuscular",
      "Critérios objetivos de prontidão funcional para o esporte"
    ],
    indications: ["Estiramentos musculares", "Fascite plantar", "Canelite", "Tendão de Aquiles", "Sobrecarga de treino"],
    sessionDuration: "60 minutos",
    badge: "Critérios Return to Play",
    iconName: "Trophy",
  },
  {
    id: "dor-cronica-coluna",
    title: "Tratamento Especializado de Dor Crônica",
    subtitle: "Neuromodulação periférica e desensibilização do sistema nervoso",
    description: "Pacientes que sofrem há meses ou anos encontram uma metodologia integrativa: educação moderna em neurociência da dor, terapia manual suave, exposição gradual ao movimento e restauração da confiança motora.",
    highlights: [
      "Quebra do ciclo vicioso de dor-medo-inatividade física",
      "Técnicas de modulação periférica e relaxamento visceral",
      "Diminuição comprovada do uso contínuo de analgésicos",
      "Resgate da autonomia e da qualidade de vida diária"
    ],
    indications: ["Fibromialgia", "Dor lombar persistente", "Dor miofascial difusa", "Sensibilização central"],
    sessionDuration: "60 minutos",
    badge: "Neurociência da Dor",
    iconName: "Sparkles",
  },
  {
    id: "terapia-manual",
    title: "Terapia Manual & Liberação Miofascial",
    subtitle: "Precisão tátil para destravar fáscias e articulações bloqueadas",
    description: "Combinação criteriosa de mobilizações articulares (Maitland, Mulligan), manipulação de tecidos moles e liberação miofascial instrumental para eliminação imediata de pontos-gatilho.",
    highlights: [
      "Restauração do deslizamento entre planos fasciais",
      "Alívio instantâneo da rigidez articular matinal",
      "Estímulo à circulação local e drenagem tecidual profunda",
      "Preparação ideal para o trabalho de fortalecimento postural"
    ],
    indications: ["Pontos-gatilho (trigger points)", "Torcicolo", "Travamento lombar", "Espasmos musculares"],
    sessionDuration: "45 a 60 min",
    badge: "Maitland & Mulligan",
    iconName: "HandMetal",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Dra. Helena Vasconcellos",
    role: "Médica Cirurgiã Geral",
    condition: "Hérnia de Disco Lombar L5-S1",
    content: "Como médica, confesso que estava cética após receber indicação cirúrgica para minha hérnia discal lombar. O Dr. Rafael Matos conduziu um trabalho impecável de RPG e descompressão biomecânica. Em 8 semanas a dor irradiada cessou completamente e voltei a operar sem qualquer limitação. Um padrão de competência raríssimo.",
    recoveryTime: "Recuperação total em 8 semanas",
    rating: 5,
  },
  {
    id: "2",
    name: "Marcelo Silveira",
    role: "Triatleta Amador e Empresário",
    condition: "Tendinopatia Patelar e Dor no Joelho",
    content: "Sofria há quase dois anos com dores nos joelhos que me impediam de correr mais de 5km. A avaliação biomecânica detalhada do Dr. Rafael identificou fraquezas específicas no quadril que ninguém havia notado. O protocolo de reabilitação esportiva e Pilates clínico me permitiu cruzar a linha de chegada da minha primeira meia-maratona sem dor.",
    recoveryTime: "Retorno aos treinos em 6 semanas",
    rating: 5,
  },
  {
    id: "3",
    name: "Carlos Eduardo Mendes",
    role: "Diretor de Tecnologia",
    condition: "Cervicalgia Severa e Cefaleia Tensional",
    content: "Mais de 12 horas diárias em frente ao computador haviam destruído minha postura e me causavam enxaquecas diárias incapacitantes. O tratamento com RPG focado em cadeia respiratória e cervical mudou minha rotina de trabalho. Não tomei mais um único remédio para dor de cabeça nos últimos 5 meses.",
    recoveryTime: "Alívio significativo na 3ª sessão",
    rating: 5,
  },
  {
    id: "4",
    name: "Beatriz Albuquerque",
    role: "Arquiteta de Interiores",
    condition: "Pós-Operatório de Ligamento Cruzado (LCA)",
    content: "O cuidado do Dr. Rafael no meu pós-operatório foi fundamental para vencer o medo de apoiar a perna. Cada evolução era medida milimetricamente com dinamometria e testes funcionais. O consultório tem um ambiente impecável, silencioso e acolhedor.",
    recoveryTime: "Alta funcional completa",
    rating: 5,
  },
];

export const CLINICAL_STEPS = [
  {
    step: "01",
    title: "Avaliação Biomecânica Detalhada",
    description: "Análise profunda do histórico clínico, postura global estática e dinâmica, amplitude articular e testes ortopédicos específicos para encontrar a real origem da dor.",
    tag: "Diagnóstico Clínico",
  },
  {
    step: "02",
    title: "Planejamento Terapêutico Singular",
    description: "Construção de um plano individualizado com metas claras, frequência ideal e seleção das técnicas mais adequadas ao seu estilo de vida e objetivos funcionais.",
    tag: "Estratégia 1-a-1",
  },
  {
    step: "03",
    title: "Tratamento Ativo & Terapia Manual",
    description: "Combinação precisa de RPG, Pilates clínico, mobilizações articulares e cinesioterapia com acompanhamento direto e constante do fisioterapeuta.",
    tag: "Recuperação Ativa",
  },
  {
    step: "04",
    title: "Consolidação & Prevenção de Recidivas",
    description: "Treinamento de consciência corporal, ajustes ergonômicos e orientações para que você mantenha sua saúde biomecânica com total autonomia.",
    tag: "Autonomia do Paciente",
  },
];

export const FAQS: FaqItem[] = [
  {
    question: "Como funciona a primeira consulta de avaliação fisioterapêutica?",
    answer: "A consulta inicial tem duração aproximada de 60 minutos. Realizamos uma anamnese clínica completa, inspeção postural milimétrica, testes de mobilidade articular, palpação diagnóstica e testes ortopédicos provocativos. Ao final da sessão, você já recebe o direcionamento claro do seu plano terapêutico e orientações imediatas para o manejo do desconforto.",
  },
  {
    question: "Atendem através de convênios médicos ou planos de saúde?",
    answer: "Os atendimentos são realizados na modalidade particular para assegurar a atenção exclusiva de 1 hora inteira por paciente, sem fracionamento de tempo. No entanto, fornecemos relatório fisioterapêutico minucioso, nota fiscal discriminada e toda a documentação necessária para que você solicite o reembolso integral ou parcial junto ao seu plano de saúde.",
  },
  {
    question: "Qual a diferença entre o Pilates tradicional e o Pilates Clínico?",
    answer: "O Pilates Clínico é conduzido exclusivamente por um fisioterapeuta especialista e focado em lesões diagnosticadas. Os exercícios são adaptados de forma estrita para evitar sobrecarga em articulações comprometidas (como hérnias de disco ou pós-cirúrgicos), priorizando a estabilização lombar e a biomecânica correta com segurança absoluta.",
  },
  {
    question: "Quantas sessões de RPG costumam ser necessárias?",
    answer: "Por ser uma técnica intensiva e de longa permanência postural, o RPG costuma ser praticado uma ou duas vezes por semana. A maioria dos pacientes relata alívio perceptível já entre a 3ª e a 5ª sessão, enquanto a consolidação postural de casos como escoliose ou hérnias crônicas geralmente é alcançada em ciclos de 10 a 15 semanas.",
  },
  {
    question: "Preciso de encaminhamento médico para iniciar a fisioterapia?",
    answer: "Não é obrigatório. O fisioterapeuta é um profissional de primeiro contato habilitado legalmente para avaliar, diagnosticar disfunções biomecânicas e prescrever o tratamento fisioterapêutico adequado. Caso você já possua laudos ou exames de imagem (ressonâncias, tomografias ou radiografias), solicitamos que os traga na primeira consulta.",
  },
];
