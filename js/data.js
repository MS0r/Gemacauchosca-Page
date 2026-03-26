const BRANDS = {
  mobil: {
    id: 'mobil',
    name: 'Mobil',
    type: 'oil',
    logo: 'M',
    logoImage: 'images/mobil_logo.png',
    logoImageBlack: 'images/mobil_black.png',
    logoImageWhite: 'images/mobil_white.png'
  },
  firestone: {
    id: 'firestone',
    name: 'Firestone',
    type: 'tires',
    logo: 'F',
    logoImage: 'images/firestone_red_logo_name.png',
    logoImageBlack: null,
    logoImageWhite: 'images/firestone_white_name.png'
  },
  rydanz: {
    id: 'rydanz',
    name: 'Rydanz',
    type: 'tires',
    logo: 'R',
    logoImage: 'images/rydanz_black_normal.png',
    logoImageBlack: 'images/rydanz_black_normal.png',
    logoImageWhite: 'images/rydanz_white_normal.png'
  },
  vp_racing: {
    id: 'vp_racing',
    name: 'VP Racing',
    type: 'oil',
    logo: 'V',
    logoImage: 'images/vp_racing_logo.png',
    logoImageBlack: 'images/vp_racing_logo.png',
    logoImageWhite: 'images/vp_racing_logo.png'
  }
};

const OIL_SCHEMA = {
  viscosity: 'Viscosidad SAE',
  api: 'API',
  acea: 'ACEA',
  presentations: 'Presentaciones'
};

const TIRE_SCHEMA = {
  size: 'Medida',
  season: 'Temporada',
  speedRating: 'Índice de Velocidad',
  loadIndex: 'Índice de Carga'
};

const PRESEN = {
  BALDE: 'Balde (5 gl)',
  GALON: 'Galón',
  MEDIO: 'Medio Galón',
  CUARTO: 'Cuarto (1/4 gl)',
  PINTA: 'Pinta (1/8 gl)',
  TAMBOR: 'Tambor (55 gl)',
}

const rawProducts = [
  {
    id: "mobil-1",
    name: "Mobil Super™ 3000 XE 5W-30",
    mobilImage: "images/mobil/mobil_super_3000_xe_5w_30.png",
    type: "Lubricante sintético para vehículos a gasolina y diésel con filtro de partículas diésel (DPF)",
    description: "Aceite de motor sintético de alto desempeño con bajo contenido de cenizas para motores de vehículos gasolina o diesel prolongando la vida útil del motor y protegiendo los sistemas de reducción de emisiones.",
    category: "Full Sintéticos - Gasolina",
    line: "Mobil Super 3000",
    applications: [
      "Motores a gasolina y diésel livianos de últimas tecnologías",
      "Vehículos livianos y SUV",
      "Motores de alto rendimiento"
    ],
    benefits: [
      "Protege los sistemas de tratamiento de gases de escape o los catalizadores, reduciendo las emisiones",
      "Periodos extendidos de cambio de aceite (más kilómetros entre cambios)",
      "Protección contra el desgaste del motor y la formación de depósitos",
      "Proporciona excelente fluidez en arranque en frío",
      "Permite la operación prolongada a altas temperaturas evitando la oxidación o degradación del aceite"
    ],
    approvals: [
      "Aprobación Mercedes Benz 229.31",
      "Aprobación Mercedes Benz 229.51",
      "Aprobación Mercedes Benz 229.52",
      "Volkswagen 505 00",
      "Volkswagen 505 01",
      "General Motors Dexos 2™-SF"
    ],
    requirements: ["FORD WSS-M2C917A"],
    presentations: [PRESEN.CUARTO, PRESEN.GALON, PRESEN.TAMBOR],
    specifications: {
      viscosity: "5W-30",
      api: ["SN"],
      acea: ["C2-16", "C3-16"],
      ilsac: [],
      jaso: [],
      iso: [],
      nmma: [],
      oem: [],
      compatibility: ["DPF"],
      other: []
    }
  },
  {
    id: "mobil-2",
    name: "Mobil Super™ 3000 X1 5W-40",
    mobilImage: "images/mobil/mobil_super_3000_x1_5w_40.png",
    type: "Lubricante sintético para vehículos gasolina y diésel sin trampa de partículas (DPF)",
    description: "Aceite de motor sintético, que proporciona una larga vida útil del motor para casi todas las tecnologías y edades de vehículos, ofreciendo mayor protección en un amplio rango de temperaturas.",
    category: "Full Sintéticos - Gasolina",
    line: "Mobil Super 3000",
    applications: [
      "Motores a gasolina y diésel sin trampa de partículas (DPF)",
      "Vehículos livianos y SUV",
      "Conducción en ciudad con paradas frecuentes",
      "Conducción severa a altas temperaturas "
    ],
    benefits: [
      "Protección mejorada contra el desgaste del motor y la formación de depósitos",
      "Protección superior del motor durante el arranque en frío",
      "Protección mejorada a altas temperaturas"
    ],
    approvals: [
      "Aprobación MB 229.3",
      "Volskwagen 502 00",
      "Volskwagen 505 00",
      "Porsche A40",
      "Peugeot/Citroen PSA 2296",
      "RENAULT RN0700",
      "RENAULT RN0710"
    ],
    presentations: [PRESEN.CUARTO, PRESEN.GALON, PRESEN.TAMBOR],
    specifications: {
      viscosity: "5W-40",
      api: ["SN"],
      acea: ["A3/B4-16", "A3/B3-16"],
      ilsac: [],
      jaso: [],
      iso: [],
      nmma: [],
      oem: [],
      compatibility: ["TDI"],
      other: []
    }
  },
  {
    id: "mobil-3",
    name: "Mobil Super™ 2000 5W-20",
    mobilImage: "images/mobil/mobil_super_2000_5w_20.png",
    type: "Lubricante semisintético para vehículos a gasolina y gas",
    description: "Aceite de motor semisintético que ayuda a alargar la vida del motor, reduciendo el desgaste y evitando la formación de depósitos.",
    category: "Semi Sintéticos - Gasolina",
    line: "Mobil Super 2000",
    applications: [
      "Motores a gasolina y gas",
      "Vehículos livianos y SUV",
      "Conducción en ciudad con paradas frecuentes",
      "Condiciones de funcionamiento severas en terrenos exigentes"
    ],
    benefits: [
      "Una mejor economía de combustible",
      "Protección contra el desgaste del motor y la formación de depósitos",
      "Protección superior del motor durante el arranque",
      "Protección a altas temperaturas"
    ],
    presentations: [PRESEN.CUARTO, PRESEN.GALON, PRESEN.TAMBOR],
    specifications: {
      viscosity: "5W-20",
      api: ["SN"],
      acea: [],
      ilsac: ["GF-5"],
      jaso: [],
      iso: [],
      nmma: [],
      oem: [],
      compatibility: [],
      other: ["RESOURCE CONSERVING"]
    }
  },
  {
    id: "mobil-4",
    name: "Mobil Super™ 2000 10W-30",
    mobilImage: "images/mobil/mobil_super_2000_10w_30.webp",
    type: "Lubricante semisintético para vehículos a gasolina, gas y motores turboalimentados de inyección directa de gasolina",
    description: "Aceite semi-sintético mejorado de alta calidad para motores que cumplen con las más recientes especificaciones de la industria para los aceites de motores.",
    category: "Semi Sintéticos - Gasolina",
    line: "Mobil Super 2000",
    applications: [],
    benefits: [
      "Una mejor economía de combustible de hasta un 3%",
      "Protección contra el desgaste del motor y la formación de depósitos",
      "Protección superior del motor durante el arranque",
      "Protección a altas temperaturas",
      "Evita la pre-ignición"
    ],
    presentations: [PRESEN.CUARTO, PRESEN.GALON, PRESEN.TAMBOR],
    specifications: {
      viscosity: "10W-30",
      api: ["SN PLUS"],
      acea: [],
      ilsac: ["GF-5"],
      jaso: [],
      iso: [],
      nmma: [],
      oem: [],
      compatibility: [],
      other: ["RESOURCE CONSERVING"]
    }
  },
  {
    id: "mobil-5",
    name: "Mobil Super™ 1000 20W-50",
    mobilImage: "images/mobil/mobil_super_1000_20w_50.webp",
    type: "Lubricante multigrado para motores a gasolina",
    description: "Aceites minerales de primera calidad que cumple con exigentes requerimientos de la industria para lubricantes de motores. Diseñados para proporcionar un alto nivel de desempeño y protección en variadas condiciones de funcionamiento.",
    category: "Mineral Premium - Gasolina",
    line: "Mobil Super 1000",
    applications: [
      "Casi todas las tecnologías de motores de gasolina",
      "Vehículos de pasajeros y SUV",
      "Condiciones normales de funcionamiento",
      "Apropiado para utilizarse en un amplio rango de condiciones de temperatura"
    ],
    benefits: [
      "Protección prolongada contra el desgaste del motor",
      "Protección del motor durante el arranque",
      "Ayuda a combatir los lodos"
    ],
    presentations: [PRESEN.CUARTO, PRESEN.GALON, PRESEN.TAMBOR],
    specifications: {
      viscosity: "20W-50",
      api: ["SN"],
      acea: [],
      ilsac: [],
      jaso: [],
      iso: [],
      nmma: [],
      oem: [],
      compatibility: [],
      other: []
    }
  },
  {
    id: "mobil-6",
    name: "Mobil Special™ Alto Kilometraje 25W-50",
    mobilImage: "images/mobil/mobil_special_alto_kilometraje_25w_50.webp",
    type: "Lubricante para motores con alto kilometraje",
    description: "Brinda una gruesa película de aceite que ayuda a proteger los motores a gasolina que operan bajo condiciones severas, como altas temperaturas y en tráfico de ciudad donde el parar y arrancar es frecuente.",
    category: "Mineral Premium - Gasolina",
    line: "Mobil Special",
    applications: ["Motores con más de 150.000 kilómetros"],
    benefits: [
      "Reduce el consumo de aceite",
      "Reduce el desgaste y la corrosión del motor"
    ],
    presentations: [PRESEN.CUARTO, PRESEN.GALON, PRESEN.TAMBOR],
    specifications: {
      viscosity: "25W-50",
      api: ["SG"],
      acea: [],
      ilsac: [],
      jaso: [],
      iso: [],
      nmma: [],
      oem: [],
      compatibility: [],
      other: []
    }
  },
  {
    id: "mobil-7",
    name: "Mobil Super™ 4T MX 10W-30",
    mobilImage: "images/mobil/mobil_super_4t_mx_10w-30.webp",
    type: "Lubricante semisintético para motocicletas de 4 Tiempos",
    description: "Aceite semisintético de alto desempeño para motores de motocicletas de cuatro tiempos diseñado fundamentalmente para uso general en muchos tipos de motocicletas y motores de cuatro tiempos.",
    category: "Motocicletas 4 tiempos",
    line: "PVL - Línea MCO",
    applications: [
      "Motocicletas de 4 tiempos que especifican aceite SAE 10W-30",
      "Motores enfriados por aire",
      "Motores de 4 tiempos equipados con convertidores catalíticos"
    ],
    benefits: [
      "Ahorros en el consumo de combustible",
      "Protección contra el desgaste para alargar vida útil del motor",
      "Ayuda a mantener más limpio el motor",
      "Excelentes propiedades de fricción"
    ],
    presentations: [PRESEN.CUARTO],
    specifications: {
      viscosity: "10W-30",
      api: ["SL"],
      acea: [],
      ilsac: [],
      jaso: ["MA2"],
      iso: [],
      nmma: [],
      oem: [],
      compatibility: [],
      other: []
    }
  },
  {
    id: "mobil-8",
    name: "Mobil Super™ 4T 20W-50",
    mobilImage: "images/mobil/mobil_super_4t_20w_50.webp",
    type: "Lubricante semisintético para motocicletas de 4 Tiempos",
    description: "Combina aceites minerales de calidad altamente refinados y un avanzado sistema de aditivos para proporcionar una buena limpieza del motor, buena protección contra el desgaste y protección contra la corrosión.",
    category: "Motocicletas 4 tiempos",
    line: "PVL - Línea MCO",
    applications: ["Uso general en muchos tipos de motocicletas y motores de cuatro tiempos"],
    benefits: [
      "Ayuda a prolongar la vida útil del motor",
      "Ayuda a mantener los motores limpios",
      "Protege los componentes críticos del motor",
      "Buena protección contra la corrosión"
    ],
    presentations: ["Pinta (1/8 gl)", PRESEN.CUARTO, PRESEN.TAMBOR],
    specifications: {
      viscosity: "20W-50",
      api: ["SL"],
      acea: [],
      ilsac: [],
      jaso: ["MA2"],
      iso: [],
      nmma: [],
      oem: [],
      compatibility: [],
      other: []
    }
  },
  {
    id: "mobil-9",
    name: "Mobil Delvac 1 ESP 5W-40",
    mobilImage: "images/mobil/mobil_delvac_1_esp_5w-40.png",
    type: "Lubricante sintético para motores diésel de servicio pesado",
    description: "Excelente solución lubricante para las modernas y más recientes tecnologías de motores equipadas con post-tratamiento de emisiones. Mantiene una insuperable estabilidad a la oxidación.",
    category: "Servicio Pesado - Diésel",
    line: "Línea CVL",
    applications: [
      "Motores diésel de alto rendimiento con turbocargador, inyección directa y diseños de bajas emisiones (DPF, SCR, CRT, DOC, EGR)",
      "Motores de carretera a altas velocidades/altas cargas y paradas y arranques continuos",
      "Motores fuera de carretera bajo condiciones severas de baja velocidad/altas cargas"
    ],
    benefits: [
      "Menor consumo de combustible",
      "Excelente resistencia a la corrosión",
      "Menor desgaste del motor que promueve una larga vida",
      "Largos intervalos entre cambio de aceite"
    ],
    approvals: [
      "Detroit Fluids Specification 93K218",
      "Mercedes Benz MB 228.52",
      "Cummins CES 20086",
      "CATERPILLAR ECF-3",
      "VOLVO VDS-4.5",
      "ACEA E9-16/E7-16/E6-16"
    ],
    presentations: [PRESEN.GALON, PRESEN.BALDE, PRESEN.TAMBOR],
    specifications: {
      viscosity: "5W-40",
      api: ["CJ-4", "CI-4 PLUS", "CK-4", "SN"],
      acea: [],
      ilsac: [],
      jaso: [],
      iso: [],
      nmma: [],
      oem: [],
      compatibility: [],
      other: []
    }
  },
  {
    id: "mobil-10",
    name: "Mobil Delvac MX ESP 15W-40",
    mobilImage: "images/mobil/mobil_delvac_mx_esp_15w_40.png",
    type: "Aceite de alto desempeño para motores diésel de servicio pesado",
    description: "El más avanzado aceite convencional para motores diésel modernos, formulado con bases hidrotratadas y un exclusivo paquete de aditivos para proteger el motor y permitir periodos de cambio extendidos.",
    category: "Servicio Pesado - Diésel",
    line: "Línea CVL",
    applications: [
      "Motores diésel de servicio pesado modernos Euro V/VI (DPF, SCR, CRT, DOC, EGR)",
      "Motores diésel con diseños más viejos y convencionales de aspiración natural",
      "Camiones de servicio pesado en carretera y fuera de carretera"
    ],
    benefits: [
      "Superior estabilidad contra la oxidación",
      "Protección contra la corrosión",
      "Larga vida útil del motor y del aceite",
      "Mayor eficiencia del motor"
    ],
    approvals: [
      "Mack EOS-4.5",
      "Aprobación MB 228.31",
      "Cummins CES 20081",
      "CATERPILLAR ECF-3",
      "Volvo VDS-4.5",
      "ACEA E7-16, E9-16"
    ],
    presentations: [PRESEN.CUARTO, PRESEN.GALON, PRESEN.BALDE, PRESEN.TAMBOR],
    specifications: {
      viscosity: "15W-40",
      api: ["CK-4", "CJ-4", "CI-4 PLUS", "CI-4", "CH-4", "SN"],
      acea: ["E7", "E9"],
      ilsac: [],
      jaso: [],
      iso: [],
      nmma: [],
      oem: [],
      compatibility: [],
      other: []
    }
  },
  {
    id: "mobil-11",
    name: "Mobil 1™ Synthetic ATF",
    mobilImage: "images/mobil/mobil_1_synthetic_atf.webp",
    type: "Lubricante sintético para transmisiones automáticas",
    description: "Supera a los fluidos convencionales para transmisiones automáticas y ayuda a proporcionar excepcional resistencia contra la degradación del aceite y la formación de depósitos.",
    category: "Transmisiones Automáticas",
    line: "Línea ATF",
    applications: [
      "Vehículos modernos de alto desempeño (automóviles, SUV, SUT, furgonetas, camiones ligeros)",
      "Aplicaciones que requieren niveles de desempeño Dexron III, Ford Mercon y Mercon V"
    ],
    benefits: [
      "Excelente estabilidad térmica y frente a la oxidación",
      "Excelente fluidez a bajas temperaturas",
      "Propiedades friccionales mejoradas a largo plazo"
    ],
    approvals: [],
    presentations: [PRESEN.CUARTO, PRESEN.BALDE, PRESEN.TAMBOR],
    specifications: {
      viscosity: null,
      api: [],
      acea: [],
      ilsac: [],
      jaso: ["1-A"],
      iso: [],
      nmma: [],
      oem: ["MERCON V", "DEXRON IIIH"],
      compatibility: [],
      other: []
    }
  },
  {
    id: "mobil-12",
    name: "Mobil Grease XHP 222",
    mobilImage: "images/mobil/mobil_grease_xhp_222.png",
    type: "Grasa de Complejo de Litio",
    description: "Mobilgrease XHP 222 es una grasa de complejo de litio de servicio extendido diseñada para una amplia variedad de aplicaciones y condiciones de operación severas.",
    category: "Grasa",
    line: "Línea Industrial",
    applications: [
      "Sector industrial, automotriz, de construcción y marino",
      "Alta temperatura, contaminación por agua, carga de choque",
      "Aplicaciones industriales y marinas, componentes de chasis"
    ],
    benefits: [
      "Excelente resistencia a la oxidación y corrosión",
      "Estructura altamente adhesiva y cohesiva",
      "Muy buen desempeño anti desgaste",
      "Resistencia excelente al lavado por agua"
    ],
    presentations: ["0,39 kg", PRESEN.BALDE],
    specifications: {
      viscosity: null,
      api: [],
      acea: [],
      ilsac: [],
      jaso: [],
      iso: [],
      nmma: [],
      oem: [],
      compatibility: [],
      other: ["Complejo de litio"]
    }
  },
  {
    id: "mobil-13",
    name: "Mobil SAE 80W-90",
    mobilImage: "images/mobil/mobil_sae_80w_90.png",
    type: "Lubricante para transmisiones automotrices de servicio pesado para engranajes",
    description: "Lubricante SAE 80W-90 de alto rendimiento para transmisiones sometidas a muy altas velocidades y cargas de choque, donde se requieren fluidos API GL-5.",
    category: "Engranajes Automotrices",
    line: "Línea Transmisiones",
    applications: [
      "Automóviles, todo terrenos y motocicletas donde el constructor solicite API GL-5",
      "Ejes y mandos finales de servicio pesado que requieren API GL-5",
      "Camiones de carga ligera y carga pesada y vehículos comerciales"
    ],
    benefits: [
      "Excepcional estabilidad térmica y resistencia frente a la oxidación",
      "Sobresaliente protección contra el desgaste",
      "Mayor vida de los engranajes y de los cojinetes"
    ],
    presentations: [PRESEN.CUARTO, PRESEN.BALDE, PRESEN.TAMBOR],
    specifications: {
      viscosity: "80W-90",
      api: ["GL-5"],
      acea: [],
      ilsac: [],
      jaso: [],
      iso: [],
      nmma: [],
      oem: [],
      compatibility: [],
      other: []
    }
  },
  {
    id: "mobil-14",
    name: "Mobil Hydraulic AW 68",
    mobilImage: "images/mobil/mobil_hydraulic_aw_68.png",
    type: "Aceite hidráulico antidesgaste",
    description: "Aceite hidráulico antidesgaste de buena calidad destinado a utilizarse en aplicaciones de servicios industriales y móviles que están sometidas a condiciones operativas moderadas.",
    category: "Hidráulico",
    line: "Línea Industrial",
    applications: [
      "Sistemas con bombas de engranajes, de paletas, radiales y axiales de pistón",
      "Situaciones donde la contaminación del aceite hidráulico o las fugas son inevitables"
    ],
    benefits: [
      "Buen desempeño antidesgaste que ayuda a reducir el desgaste de las bombas",
      "Protección contra la corrosión",
      "Filtrabilidad para prevenir la obstrucción de los filtros"
    ],
    presentations: [PRESEN.CUARTO, PRESEN.GALON, PRESEN.BALDE, PRESEN.TAMBOR],
    specifications: {
      viscosity: "AW 68",
      api: [],
      acea: [],
      ilsac: [],
      jaso: [],
      iso: [],
      nmma: [],
      oem: [],
      compatibility: [],
      other: []
    }
  },
  {
    "id": "mobil-15",
    "name": "Mobil Super™ 2000 5W-30",
    mobilImage: "images/mobil/mobil_super_2000_5w_30.png",
    "type": "Lubricante semisintético para vehículos a gasolina, gas y motores turboalimentados de inyección directa de gasolina",
    "description": "Aceite de motor semisintético que ayuda a alargar la vida del motor, reduciendo el desgaste y evitando la formación de depósitos.",
    "category": "Semi Sintéticos - Gasolina",
    "line": "Mobil Super 2000",
    "applications": [
      "Motores a gasolina y gas",
      "Motores turboalimentados de inyección directa de gasolina",
      "Vehículos livianos y SUV",
      "Conducción en ciudad con paradas frecuentes",
      "Condiciones de funcionamiento severas en terrenos exigentes"
    ],
    "benefits": [
      "Una mejor economía de combustible de hasta un 3%",
      "Protección contra el desgaste del motor y la formación de depósitos",
      "Protección superior del motor durante el arranque",
      "Protección a altas temperaturas",
      "Evita la pre-ignición"
    ],
    "approvals": [
      "General Motors 6094M",
      "Chrysler MS-6395",
      "FORD WSS-M2C929-A",
      "FORD WSS-M2C946-A",
      "FORD WSS-M2C946-B1"
    ],
    "presentations": [PRESEN.CUARTO, PRESEN.GALON, PRESEN.TAMBOR],
    "specifications": {
      "viscosity": "5W-30",
      "api": ["SN PLUS"],
      "ilsac": ["GF-5"],
      "other": ["RESOURCE CONSERVING"]
    }
  },
  {
    "id": "mobil-16",
    "name": "Mobil Super™ Moto Scooter MX 10W-40",
    mobilImage: "images/mobil/mobil_super_moto_scoter_mx_10w_40.webp",
    "type": "Lubricante sintético para motos 4T",
    "description": "Aceite para motos scooter de 4 tiempos que protege el motor de diversas condiciones de conducción, minimizando las vibraciones y dando protección a las altas temperaturas.",
    "category": "Motocicletas 4 tiempos",
    "line": "PVL - Línea MCO",
    "applications": [
      "Motores scooter de 4 tiempos con transmisión automática",
      "Motores de scooter de alta potencia",
      "Todos los cilindrajes recomendados por el fabricante"
    ],
    "benefits": [
      "Molécula antidesgaste termoactivada para excelente protección a altas temperaturas",
      "Reduce la fricción logrando una conducción confortable",
      "Excelente protección contra el desgaste",
      "Buena estabilidad térmica, a la oxidación y control de depósitos",
      "Excelentes propiedades de protección contra la corrosión",
      "Propiedades mejoradas a baja temperatura"
    ],
    "presentations": [PRESEN.CUARTO],
    "specifications": {
      "viscosity": "10W-40",
      "api": ["SL"],
      "jaso": ["MB 2016"]
    }
  },
  {
    "id": "mobil-17",
    "name": "Mobil Delvac Modern™ 15W-40 Full Protection",
    mobilImage: "images/mobil/mobil_delvac_modern_15w_40_full_protection.png",
    "type": "Aceite de alto desempeño para motores diésel de servicio pesado",
    "description": "Aceite con tecnología sintética para motores diésel de última generación y de bajas emisiones que cumple o excede los requerimientos de los fabricantes de equipo original.",
    "category": "Servicio Pesado - Diésel",
    "line": "Línea CVL",
    "applications": [
      "Alto rendimiento dentro y fuera de las carreteras y en aplicaciones marinas",
      "Sistemas de control de emisiones de vehículos Euro V/VI",
      "Compatible con equipos de tecnologías anteriores"
    ],
    "benefits": [
      "Larga vida para el motor",
      "Trabajo pesado",
      "Control de hollín",
      "Aprobado por fabricantes, Equipo Original",
      "Estabilidad Térmica y a la oxidación"
    ],
    "approvals": [
      "Detroit Fluids Specification 93K222",
      "Detroit Fluids Specification 93K218",
      "Deutz DQC II-10 LA",
      "Mack EOS-4.5, EO-O Premium Plus",
      "Aprobación MB 228.31",
      "Cummins CES 20081 / 20086",
      "Camiones Renault RLD-3",
      "MAN M 3575",
      "MAN M 3275-1",
      "Volvo VDS-4.5, VDS-4",
      "CATERPILLAR ECF-3",
      "ALLISON TES 439",
      "ACEA E7-16, E9-16",
      "JASO DH-2"
    ],
    "presentations": [PRESEN.CUARTO, PRESEN.GALON, PRESEN.BALDE, PRESEN.TAMBOR],
    "specifications": {
      "viscosity": "15W-40",
      "api": ["CK-4", "CJ-4", "CI-4 PLUS", "CI-4", "CH-4", "SN"],
      "acea": ["E7", "E9"]
    }
  },
  {
    "id": "mobil-18",
    "name": "Mobil 1™ OW-20",
    mobilImage: "images/mobil/mobil_1_ow_20.webp",
    "type": "Lubricante totalmente sintético de avanzada economía de combustible para motores",
    "description": "Avanzado aceite totalmente sintético diseñado para brindar una excepcional protección al motor y una mejorada economía de combustible.",
    "category": "Full Sintéticos - Gasolina",
    "line": "Mobil 1",
    "applications": [
      "Todos los tipos de vehículos de pasajeros, SUV, furgonetas y camiones ligeros con motores a gasolina",
      "Aplicaciones SAE 5W-20 y 0W-20",
      "Condiciones de frío extremo"
    ],
    "benefits": [
      "Fórmula avanzada totalmente sintética de baja viscosidad",
      "Excepcional estabilidad térmica y contra la oxidación",
      "Excepcionales capacidades a baja temperatura",
      "Sistema de aditivos de componentes precisamente balanceado"
    ],
    "presentations": [PRESEN.CUARTO, PRESEN.BALDE, PRESEN.TAMBOR],
    "specifications": {
      "viscosity": "0W-20",
      "api": ["SN"],
      "ilsac": ["GF-5"]
    }
  },
  {
    "id": "mobil-19",
    "name": "Mobil SAE 85W-140",
    mobilImage: "images/mobil/mobil_sae_85w_140.png",
    "type": "Lubricantes de servicio pesado para engranajes automotrices",
    "description": "Lubricante de alto rendimiento para servicio pesado en engranajes formulado a partir de aceites base de alto rendimiento y un avanzado sistema de aditivos.",
    "category": "Engranajes Automotrices",
    "line": "Línea Transmisiones",
    "applications": [
      "Ejes y transmisiones finales para servicio pesado",
      "Aplicaciones automotrices que requieren API GL-5",
      "Camiones de carga ligera y carga pesada y vehículos comerciales",
      "Maquinaria de industria: construcción, extracción, minería y agricultura"
    ],
    "benefits": [
      "Compatible con los sellos y empaques automotrices usuales",
      "Sobresaliente protección contra el desgaste a bajas velocidades/altos torques",
      "Protección contra el rayado a altas velocidades",
      "Excelente protección contra la herrumbre y la corrosión",
      "Excepcional estabilidad térmica y resistencia a la oxidación",
      "Lubricación efectiva a bajas temperaturas"
    ],
    "presentations": [PRESEN.CUARTO, PRESEN.BALDE, PRESEN.TAMBOR],
    "specifications": {
      "viscosity": "85W-140",
      "api": ["GL-5"]
    }
  },
  {
    "id": "mobil-20",
    "name": "Mobil Super™ 2000 X1 10W-40",
    mobilImage: "images/mobil/mobil_super_2000_x1_10w_40.webp",
    "type": "Lubricante semisintético para vehículos a gasolina, gas y motores turboalimentados de inyección directa de gasolina",
    "description": "Lubricante de motor semisintético que ayuda a alargar la vida del motor, reduciendo el desgaste y evitando la formación de depósitos.",
    "category": "Semi Sintéticos - Gasolina",
    "line": "Mobil Super 2000",
    "applications": [
      "Motores a gasolina y gas",
      "Motores turboalimentados de inyección directa de gasolina",
      "Vehículos livianos y SUV",
      "Conducción en ciudad con paradas frecuentes",
      "Condiciones operacionales normales a severas"
    ],
    "benefits": [
      "Protección contra el desgaste del motor y la formación de depósitos",
      "Protección superior del motor durante el arranque",
      "Protección a altas temperaturas",
      "Evita la pre-ignición"
    ],
    "presentations": [PRESEN.CUARTO, PRESEN.GALON, PRESEN.TAMBOR],
    "specifications": {
      "viscosity": "10W-40",
      "api": ["SN PLUS"],
      "acea": ["A3/B3-16"],
    },
    approvals: [
      "Aprobación Mercedes Benz 229.1",
      "Volkswagen 501 01",
      "Volkswagen 505 00"
    ]
  }, {
    "id": "mobil-21",
    "name": "Mobil Special™ HD 50",
    mobilImage: "images/mobil/mobil_special_hd_50.webp",
    "type": "",
    "description": "Formulados a partir de bases lubricantes minerales de alta calidad y de un sistema de aditivos para brindar el desempeño requerido por los motores de combustión interna en donde es requerido un nivel de calidad API SF o API CC. Contienen un efectivo balance de detergentes y dispersantes para reducir la formación de lodos y depósitos, retener la alcalinidad (TBN) y reducir el desgaste.",
    "category": "",
    "line": "",
    "applications": [
      "Motores de gasolina de Vehículos de pasajeros, Vehículos comerciales",
      "Motores de gasolina de maquinaria agrícola",
      "Motores diésel de vehículos comerciales y equipos para la construcción",
      "Transmisiones manuales que requieran aceites de calidad API GL1"
    ],
    "benefits": [
      "Bajo consumo de aceite",
      "Limpieza del motor"
    ],
    "presentations": [PRESEN.CUARTO, PRESEN.GALON, PRESEN.TAMBOR],
    "specifications": {
      viscosity: "HD 50",
      api: ["SF", "CC"]
    }
  },
  {
    "id": "mobil-22",
    "name": "Mobil Super™ 4T MX 10W-40",
    mobilImage: "images/mobil/mobil_super_4t_mx_10w_40.webp",
    "type": "Lubricante semisintético para motos 4T",
    "description": "Aceite semisintético de alto desempeño para motores de motocicletas de cuatro tiempos, concebido principalmente para su uso general en muchos tipos de motocicletas y motores de cuatro tiempos. Su exclusiva fórmula proporciona excelentes características de flujo que permiten reducir el desgaste del motor durante el arranque y una excelente protección de la transmisión y del embrague durante la operación.",
    "category": "Motocicletas 4 tiempos",
    "line": "PVL - Línea MCO",
    "applications": [
      "Motocicletas de 4 tiempos que requieren aceite SAE 10W-40", "Protección adecuada para transmisiones y embragues del motor", "Especialmente adecuado para motores refrigerados por aire que operan a altas temperaturas", "Recomendado para motores de 4 tiempos con convertidores catalíticos (reducción de emisiones)"
    ],
    "benefits": [
      "Protección contra el desgaste para alargar vida útil del motor",
      "Ayuda a mantener más limpio el motor",
      "Excelentes propiedades  de fricción",
      "Ayuda a reducir las emisiones"
    ],
    "presentations": [PRESEN.CUARTO],
    "specifications": {
      viscosity: "10W-40",
      api: ["SL"],
      jaso: ["MA2"]
    }
  },
  {
    "id": "mobil-23",
    "name": "Mobil Super™ 4T MX 15W-50",
    mobilImage: "images/mobil/mobil_super_4t_mx_15w_50.webp",
    "type": "Lubricante semisintético para motos 4T",
    "description": "Aceite semisintético de alto desempeño para motores de motocicletas de cuatro tiempos, concebido principalmente para su uso general en muchos tipos de motocicletas y motores de cuatro tiempos. Su exclusiva fórmula proporciona excelentes características de flujo que permiten reducir el desgaste del motor durante el arranque y una excelente protección de la transmisión y del embrague durante la operación.",
    "category": "Motocicletas 4 tiempos",
    "line": "PVL - Línea MCO",
    "applications": [
      "Motocicletas de 4 tiempos que requieren aceite SAE 10W-50", "Protección adecuada para transmisiones y embragues del motor", "Especialmente adecuado para motores refrigerados por aire que operan a altas temperaturas", "Recomendado para motores de 4 tiempos con convertidores catalíticos (reducción de emisiones)"
    ],
    "benefits": [
      "Protección contra el desgaste para alargar vida útil del motor",
      "Ayuda a mantener más limpio el motor",
      "Excelentes propiedades  de fricción",
      "Ayuda a reducir las emisiones"
    ],
    "presentations": [PRESEN.CUARTO],
    "specifications": {
      viscosity: "15W-50",
      api: ["SL"],
      jaso: ["MA2"]
    }
  },
  {
    "id": "mobil-24",
    "name": "Mobil Super™ Moto 2T",
    mobilImage: "images/mobil/mobil_super_moto_2t.webp",
    "type": "Lubricante mineral para motos 2T",
    "description": "Mobil Super Moto 2T combina aceites minerales de alta calidad con un robusto sistema de aditivos que proporciona una buena limpieza y desempeño superior al motor. Mobil Super Moto 2T está pre-diluido para asegurar una rápida mezcla con el combustible. Utilice la proporción de mezcla recomendada por el fabricante. Atienda siempre las recomendaciones del manual del usuario.",
    "category": "Motocicletas 2 tiempos",
    "line": "PVL - Línea MCO",
    "applications": [
      "Adecuado para otros equipos con motores de dos tiempos a gasolina", "Compatible con sistemas de lubricación automática", "Compatible con sistemas de mezcla de aceite con el combustible"
    ],
    "benefits": [
      "Ayuda a prolongar la vida útil del motor",
      "Estabilidad térmica y a la oxidación y control de los depósitos",
      "Evita la pre-ignición"
    ],
    "presentations": [PRESEN.CUARTO],
    "specifications": {
      viscosity: "GRADO 1",
      api: ["TC"],
      jaso: ["FB"],
      iso: ["L-EGB"]
    }
  },
  {
    "id": "mobil-25",
    "name": "Mobil™ Extra 2T",
    mobilImage: "images/mobil/mobil_extra_2t.webp",
    "type": "Lubricante sintético para motos 2T",
    "description": "Mobil Extra 2T combina una mezcla de aceites básicos minerales y sintetizados de alta calidad con un sistema de aditivos avanzado para proporcionar una excelente limpieza del motor y un escape de gases libre de humo. Viene diluido para facilitar su mezcla al agregarlo al combustible.",
    "category": "Motocicletas 2 tiempos",
    "line": "PVL - Línea MCO",
    "applications": [

    ],
    "benefits": [
      "Gas de escape sin humo",
      "Protección contra el desgaste para alargar vida útil del motor",
      "Proporciona una mayor estabilidad contra la oxidación"
    ],
    "presentations": [PRESEN.CUARTO, PRESEN.MEDIO],
    "specifications": {
      viscosity: null,
      api: ["TC"],
      jaso: ["FC"],
      iso: ["L-EGB"]
    }
  },
  {
    "id": "mobil-26",
    "name": "Mobil Outboard™ Plus",
    mobilImage: "images/mobil/mobil_outboard_plus.png",
    "type": "Lubricante para motores fuera de borda 2 Tiempos",
    "description": "Mobil Outboard Plus es un aceite de alto desempeño para motores de dos tiempos que está diseñado para muchos motores de dos tiempos de alto rendimiento, refrigerados por agua, y utilizados en aplicaciones marinas fuera de borda. Mobil Outboard Plus ofrece motores limpios y un comportamiento compatible con el medioambiente. Mobil Outboard Plus está prediluido para facilitar la mezcla cuando se añade al combustible.",
    "category": "Marino - Fuera de borda",
    "line": "Línea Marina",
    "applications": [
      "Recomendado para inyección directa y sistemas premezclados gasolina/lubricante",
      "Adecuado para motores de dos tiempos enfriados por aire de trabajo liviano a moderado",
      "Aplicable en equipos como cortadoras de pasto, sierras eléctricas, sopladoras de hojas y orilladoras de pasto"
    ],
    "benefits": [
      "Extiende la vida del motor.",
      "Extiende la vida de las bujias y de las valvúlas previendo los depositos de suuciedad.",
      "Mejora la economia del combustible.",
      "Buena capacidad para altas y bajas temperaturas",
      "No es toxico para la vida marina"
    ],
    "presentations": [PRESEN.CUARTO, PRESEN.GALON, PRESEN.BALDE, PRESEN.TAMBOR],
    "specifications": {
      viscosity: null,
      api: ["TC"],
      nmma: ["TC-W3"],
    }
  },
  {
    "id": "mobil-27",
    "name": "Mobil Delvac XHP™ ESP S 10W-40",
    mobilImage: "images/mobil/mobil_delvac_xhp_esp_10w-40.png",
    "type": "Lubricante sintético para la protección del sistema de emisión de aceite de motor diésel",
    "description": "Aceite sintético de alto desempeño diseñado para proporcionar lubricación a motores diésel modernos de alto rendimiento y bajas emisiones, utilizados en aplicaciones severas. Este aceite se ha diseñado utilizando aceites base ultrarefinadas que proporcionan una excelente fluidez a bajas temperaturas, retención de la viscosidad a altas temperaturas y control de la volatilidad.",
    "category": "Servicio Pesado - Diésel",
    "line": "Línea CVL",
    "applications": [
      "Motores diésel de servicio pesado, incluyendo los vehículos modernos de bajas emisiones Euro V/VI que utilizan tecnologías tales como Filtros de Partículas para Motores Diésel (DPF), Reducción Catalítica Selectiva (SCR), Trampas de Regeneración Continua (CRT), Catalizadores de Oxidación para Motores Diésel (DOC) y Recirculación de Gases de Escape (EGR)",
      "Equipos accionados por motores diésel aspirados naturalmente y turboalimentados",
      "Camiones y autobuses de carretera usados en viajes de larga y corta distancia",
      "Equipos fuera de carretera para la minería, la construcción y la agricultura",
      "Motores de fábrica europeos que requieren la especificación ACEA E4-16, E6-16, E7-16, E9-16"
    ],
    "benefits": [
      "Ayuda a brindar una larga vida del motor",
      "Largos intervalos entre cambios de aceite",
      "Propiedades anti-desgaste, anti-rayado y protección",
      "Ayuda a proteger los dispositivos de los sistemas de escape"
    ],
    "approvals": [
      "MTU Categoría de aceite 3.1",
      "MAN M 3477/ M 3575/ M 3271-1", 
      "Volvo VDS-4/ VDS-3",
      "Camiones Renault RLD-3/ RLD-2", 
      "Deutz DQC IV-10 LA",
      "Scania bajo contenido de cenizas",
      "Voith Aceite retardador Clase B",
      "Motores Kamaz Euro-3, 4 y -5",
      "Mercedes Benz 228.51 / 235.28",
      "Mack EO-O PREMIUM PLUS"
    ],
    "presentations": [PRESEN.BALDE],
    "specifications": {
      viscosity: "10W-40",
      api: ["CJ-4", "CI-4 PLUS"],
      acea: ["E4-16", "E6-16", "E7-16", "E9-16"],
      jaso: ["DH-2"]
    },
    "requirements" : [
      "Cummins CES 20081",
      "CATERPILLAR ECF-3"
    ]
  },
  {
    "id": "mobil-28",
    "name" : "Mobil Delvac™ 1340",
    mobilImage: "images/mobil/mobil_delvac_1340.png",
    "type" : "Lubricante para motores diésel de servicio pesado turbocargados",
    "description" : "Aceites monogrados para motores diesel de alto desempeño elaborados a partir de un sistema de aditivos balanceado. Estos aceites fueron diseñados para motores de aspiración natural y turbo-cargados que operan en condiciones severas tanto de carreteras o fuera de ellas. Los Mobil Delvac Serie 1300 son lubricantes usados en un amplio rango de aplicaciones en donde un aceite monogrado es requerido.",
    "category" : "Servicio Pesado - Diésel",
    "line" : "Línea CVL",
    "applications" : [
      "Motores diésel que utilizan diseños más viejos y convencionales de aspiración natural",
      "Camiones de servicio pesado en carretera y aplicaciones fuera de carretera, incluyendo transporte, minería, construcción, agrícolas y marinas"
    ],
    "benefits" : [
      "Excelente protección contra el pegado de los anillos",
      "Excelente control del consumo de aceite"
    ],
    "presentations" : [PRESEN.CUARTO, PRESEN.GALON, PRESEN.BALDE, PRESEN.TAMBOR],
    "specifications" : {
      viscosity: null,
      api: ["CF", "SF"],
    }
  },
  {
    "id": "mobil-29",
    "name" : "Mobil Delvac™ 1350",
    mobilImage: "images/mobil/mobil_delvac_1350.webp",
    "type" : "Lubricante para motores diésel de servicio pesado turbocargados",
    "description" : "Aceites monogrados para motores diesel de alto desempeño elaborados a partir de un sistema de aditivos balanceado. Estos aceites fueron diseñados para motores de aspiración natural y turbo-cargados que operan en condiciones severas tanto de carreteras o fuera de ellas. Los Mobil Delvac Serie 1300 son lubricantes usados en un amplio rango de aplicaciones en donde un aceite monogrado es requerido.",
    "category" : "Servicio Pesado - Diésel",
    "line" : "Línea CVL",
    "applications" : [
      "Motores diésel que utilizan diseños más viejos y convencionales de aspiración natural",
      "Camiones de servicio pesado en carretera y aplicaciones fuera de carretera, incluyendo transporte, minería, construcción, agrícolas y marinas"
    ],
    "benefits" : [
      "Excelente protección contra el pegado de los anillos",
      "Excelente control del consumo de aceite"
    ],
    "presentations" : [PRESEN.CUARTO, PRESEN.GALON, PRESEN.BALDE, PRESEN.TAMBOR],
    "specifications" : {
      viscosity: null,
      api: ["CF", "SF"],
    }
  },
  {
    "id": "mobil-30",
    "name" : "Mobil Delvac™ Extended life 50/50",
    mobilImage: "images/mobil/mobil_delvac_extended_life_50_50.png",
    "type" : "Lubricante para motores diésel de servicio pesado turbocargados",
    "description" : "El refrigerante/anticongelante de vida prolongada y prediluido Mobil Delvac Extended Life 50/50 Prediluted Coolant/Antifreeze es un refrigerante a base de etilenglicol exento de fosfatos, silicatos, nitritos y boratos, listo para usar, que ha sido diseñado para proporcionar una excepcional protección contra la cavitación y la corrosión de todos los metales del sistema de enfriamiento.\nMobil Delvac Extended Life 50/50 Prediluted Coolant/Antifreeze está formulado con inhibidores orgánicos de la corrosión para proporcionar una protección total del sistema de enfriamiento de hasta 1.600.000 kilómetros de uso en carretera (8 años o 20.000 horas de uso fuera de la carretera). Puesto que los inhibidores de corrosión orgánicos no se agotan con facilidad, Mobil Delvac™ Extended Life 50/50 Prediluted Coolant/Antifreeze elimina la necesidad de utilizar aditivos suplementarios para refrigerantes (SCA) que sí se requieren al usar refrigerantes convencionales.\nMobil Delvac Extended Life 50/50 Prediluted Coolant/Antifreeze es una mezcla 50/50 de Mobil Delvac Extended Life Coolant/Antifreeze y agua desionizada.",
    "category" : "Servicio Pesado - Diésel",
    "line" : "Línea CVL",
    "applications" : [
      "Todo tipo de motores de servicio pesado diesel, de gasolina y de gas natural.",
      "Aplicaciones de motores estacionarios, independientemente del tipo de combustible utilizado.",
      "Sistemas de enfriamiento marino donde se requiere protección contra el congelamiento.",
      "Flotas mixtas donde hay presentes camiones de servicio tanto ligero como pesado."
    ],
    "benefits" : [
      "Ideal para motores a gasolina y a Diesel en las condiciones más severas. Proporciona protección total de los sistemas de enfriamiento durante 1.600.000 km de uso en carretera (8 años o 20.000 horas de uso fuera de carretera).",
      "Elimina la necesidad de \"aditivos suplementarios para refrigerantes\" (SCA, por su sigla en inglés), los cuales si se requieren al utilizar refrigerantes convencionales."
    ],
    "presentations" : [PRESEN.GALON, PRESEN.TAMBOR],
    "specifications" : {
      viscosity: null,
      api: [],
      acea: [],
      ilsac: [],
      jaso: [],
      iso: [],
      nmma: [],
      oem: [],
      compatibility: []
    }
  },
  {
    "id": "mobil-31",
    "name" : "Mobil ATF™ D/M",
    mobilImage: "images/mobil/mobil_atf_d_m.webp",
    "type" : "Fluido para transmisión automática",
    "description" : "Proporciona excelente estabilidad contra la oxidación y la fricción, propiedades antidesgaste, y la fluidez a bajas temperaturas deseada para la mayoría de las transmisiones automáticas.",
    "category" : "Transmisión Automática",
    "line" : "Línea Transmisiones",
    "applications" : [
      "Recomendado para aplicaciones que requieren: General Motors DEXRON® IIIH Ford MERCON® Allison Transmission C-4",
      "No recomendado para: GM DEXRON® VI, Ford MERCON® V, MERCON LV®, MERCON SP® y Type F ATF",
      "Puede utilizarse como aceite lubricante en compresores de aire rotatorios bajo ciertas condiciones",
      "Buen desempeño a bajas temperaturas",
      "Alta resistencia a la oxidación para cumplir requisitos de servicio en compresores"
    ],
    "benefits" : [
      "Excelente estabilidad contra la oxidación",
      "Buenas características lubricantes",
      "Propiedades de fricción controladas",
      "Prevención de la corrosión"
    ],
    "presentations" : [PRESEN.CUARTO, PRESEN.BALDE, PRESEN.TAMBOR],
    "specifications" : {
      viscosity: null,
      api: [],
      acea: [],
      ilsac: [],
      jaso: [],
      iso: [],
      nmma: [],
      oem: [],
      compatibility: [],
      other: ["ALLISON C- 4 / MERCON / DEXRON IIIH"]
    }
  },
];

const CATALOGS = {
  mobil: {
    brand: BRANDS.mobil,
    categories: [],
    products: []
  },
  vp_racing: {
    brand: BRANDS.vp_racing,
    categories: [
      "Full Sintéticos - Gasolina",
      "Motocicleta",
      "Servicio Pesado - Diésel",
      "Aceites de Transmisión"
    ],
    products: [
      {
        id: 'vp_racing-1',
        name: "VP Racing Hard Runtime 10W-40",
        type: "Lubricante sintético de alto rendimiento",
        description: "Aceite de motor sintético diseñado para motores de alto rendimiento y competencia. Proporciona máxima protección en condiciones extremas.",
        category: "Full Sintéticos - Gasolina",
        line: "Hard Runtime",
        applications: ["Motores de alto rendimiento", "Vehículos de competencia", "Motores turboalimentados"],
        benefits: ["Máxima protección en condiciones extremas", "Excelente resistencia térmica", "Bajo consumo de aceite"],
        approvals: [],
        specifications: { viscosity: "10W-40", api: ["SN"], acea: ["A3/B4"] },
        presentations: ["1L", "4L", "60L"]
      },
      {
        id: 'vp_racing-2',
        name: "VP Racing Protect 5W-30",
        type: "Lubricante sintético avanzado",
        description: "Aceite de última generación con tecnología de protección total. Ideal para vehículos modernos con sistemas de control de emisiones.",
        category: "Full Sintéticos - Gasolina",
        line: "Protect",
        applications: ["Vehículos modernos", "Motores con turbo", "Sistemas DPF"],
        benefits: ["Compatibilidad con DPF", "Ahorro de combustible", "Larga vida útil del motor"],
        approvals: [],
        specifications: { viscosity: "5W-30", api: ["SN"], acea: ["C2"] },
        presentations: ["1L", "4L", "5L"]
      },
      {
        id: 'vp_racing-3',
        name: "VP Racing 4T Ester 10W-40",
        type: "Lubricante para motocicletas de 4 tiempos",
        description: "Formula Premium con ésteres para máxima protección de motores de motocicletas de alta cilindrada.",
        category: "Motocicleta",
        line: "4T Ester",
        applications: ["Motocicletas deportivas", "Motocicletas de competencia", "Scooters de alta cilindrada"],
        benefits: ["Protección superior del embrague húmedo", "Excelente disipación del calor", "Máxima potencia"],
        approvals: [],
        specifications: { viscosity: "10W-40", api: ["SN"], jaso: ["MA2"] },
        presentations: ["1L", "4L"]
      },
      {
        id: 'vp_racing-4',
        name: "VP Racing Diesel Heavy Duty 15W-40",
        type: "Lubricante para motores diésel",
        description: "Aceite de alto rendimiento para motores diésel de servicio pesado. Diseñado para extrema presión y temperaturas elevadas.",
        category: "Servicio Pesado - Diésel",
        line: "Diesel Heavy Duty",
        applications: ["Camiones pesados", "Máquinaria pesada", "Generadores industriales"],
        benefits: ["Excelente protección contra el desgaste", "Largos intervalos de cambio", "Baja formación de depósitos"],
        approvals: [],
        specifications: { viscosity: "15W-40", api: ["CI-4", "CH-4"] },
        presentations: ["5L", "20L", "60L", "200L"]
      },
      {
        id: 'vp_racing-5',
        name: "VP Racing Gear Oil 80W-90",
        type: "Aceite de transmisión y diferenciales",
        description: "Aceite de engranajes de alta presión para transmisiones manuales y diferenciales.",
        category: "Aceites de Transmisión",
        line: "Gear Oil",
        applications: ["Transmisiones manuales", "Diferenciales", "Cajas de transferencia"],
        benefits: ["Excelente resistencia a la presión", "Protección contra el desgaste", "Funcionamiento silencioso"],
        approvals: [],
        specifications: { viscosity: "80W-90", api: ["GL-5"] },
        presentations: ["1L", "4L", "20L"]
      },
      {
        id: 'vp_racing-6',
        name: "VP Racing Brake Fluid DOT 4",
        type: "Líquido de frenos",
        description: "Líquido de frenos de alto rendimiento con punto de ebullición elevado para máxima seguridad.",
        category: "Líquidos Técnicos",
        line: "Brake Fluid",
        applications: ["Sistemas de frenos de disco", "Sistemas ABS", "Vehículos de alta rendimiento"],
        benefits: ["Punto de ebullición elevado", "Protección contra la corrosión", "Compatibilidad con sellos"],
        approvals: [],
        specifications: { viscosity: "DOT 4", api: [], acea: [] },
        presentations: ["0.5L", "1L"]
      }
    ]
  },
  firestone: {
    brand: BRANDS.firestone,
    categories: ["Pasajero", "SUV", "Camioneta", "Deportivo"],
    products: [
      {
        id: 'firestone-1',
        name: "Firestone Turanza T005",
        type: "Neumático de turismo premium",
        description: "Excelente rendimiento en mojado con tecnología NanoPro-Tech. Diseño de hombro erguido para mayor estabilidad.",
        category: "Pasajero",
        line: "Firestone Turanza",
        applications: ["Sedanos premium", "Familiares"],
        benefits: ["Frenado excepcional en mojado", "Confort y silencio", "Eficiencia de combustible"],
        approvals: [],
        specifications: { size: "205/55 R17", season: "Verano", speedRating: "W", loadIndex: "95" },
        presentations: []
      },
      {
        id: 'firestone-2',
        name: "Firestone Potenza RE003",
        type: "Neumático deportivo",
        description: "Diseño asimétrico para máximo rendimiento en seco. Tecnología de compuestos reactivos para mejor agarre en curvas.",
        category: "Deportivo",
        line: "Firestone Potenza",
        applications: ["Deportivos", "Hot hatchbacks"],
        benefits: ["Agarre superior en curvas", "Respuesta precisa", "Deportivo en circuito"],
        approvals: [],
        specifications: { size: "215/40 R18", season: "Verano", speedRating: "W", loadIndex: "89" },
        presentations: []
      },
      {
        id: 'firestone-3',
        name: "Firestone WeatherControl A005",
        type: "Neumático all-season",
        description: "Neumático todo clima con certificación invernal. Rendimiento constante en cualquier condición.",
        category: "SUV",
        line: "Firestone WeatherControl",
        applications: ["SUVs", "Crossovers"],
        benefits: ["Certificación invernal 3PMSF", "Rendimiento todo el año"],
        approvals: ["3PMSF"],
        specifications: { size: "225/60 R18", season: "All-Weather", speedRating: "H", loadIndex: "104" },
        presentations: []
      },
      {
        id: 'firestone-4',
        name: "Firestone Dueler A/T 001",
        type: "Neumático todo terreno",
        description: "Neumático para uso mixto asfalto/off-road. Bloques de hombro robustos para tracción en terrenos difíciles.",
        category: "Camioneta",
        line: "Firestone Dueler",
        applications: ["4x4", "Pickups off-road"],
        benefits: ["Tracción en off-road", "Durabilidad", "Confort en autopista"],
        approvals: [],
        specifications: { size: "265/65 R17", season: "All-Season", speedRating: "S", loadIndex: "120" },
        presentations: []
      },
      {
        id: 'firestone-5',
        name: "Firestone Ecopia H/L 422 Plus",
        type: "Neumático eco-friendly",
        description: "Neumático de bajo consumo con tecnología ologic. Reduce resistencia al rodamiento sin sacrificar seguridad.",
        category: "SUV",
        line: "Firestone Ecopia",
        applications: ["SUVs híbridos", "Eléctricos"],
        benefits: ["Hasta 15% menos consumo", "Larga vida", "Bajo nivel de ruido"],
        approvals: [],
        specifications: { size: "235/60 R18", season: "All-Season", speedRating: "H", loadIndex: "103" },
        presentations: []
      },
      {
        id: 'firestone-6',
        name: "Firestone Blizzak LM005",
        type: "Neumático de invierno",
        description: "El neumático de invierno de referencia. Tecnología 3D sipe para máximo agarre en nieve y hielo.",
        category: "Pasajero",
        line: "Firestone Blizzak",
        applications: ["Vehículos en zonas nevadas"],
        benefits: ["Máximo agarre en nieve", "Excelente frenado en hielo"],
        approvals: ["3PMSF", "M+S"],
        specifications: { size: "195/65 R15", season: "Invierno", speedRating: "T", loadIndex: "91" },
        presentations: []
      }
    ]
  },
  rydanz: {
    brand: BRANDS.rydanz,
    categories: ["Pasajero", "SUV", "Camioneta", "Deportivo"],
    products: [
      {
        id: 'rydanz-1',
        name: "Rydanz Sport RX1",
        type: "Neumático de alto rendimiento",
        description: "Neumático deportivo de última generación con compuesto de sílice para máximo agarre en seco y mojado.",
        category: "Deportivo",
        line: "Sport RX",
        applications: ["Vehículos deportivos", "Altas velocidades", "Conducción dinámica"],
        benefits: ["Excelente agarre en curvas", "Respuesta precisa de dirección", "Baja resistencia al rodamiento"],
        approvals: [],
        specifications: { size: "225/45 R17", season: "Verano", speedRating: "W", loadIndex: "94" },
        presentations: []
      },
      {
        id: 'rydanz-2',
        name: "Rydanz Comfort A/T",
        type: "Neumático todo terreno",
        description: "Neumático para uso mixto con excelente tracción en superficies variadas y comfort de marcha.",
        category: "Camioneta",
        line: "Comfort A/T",
        applications: ["SUVs", "Pickups", "Uso mixto ciudad/carretera"],
        benefits: ["Tracción versátil", "Durabilidad", "Confort de marcha"],
        approvals: [],
        specifications: { size: "265/70 R16", season: "All-Season", speedRating: "S", loadIndex: "112" },
        presentations: []
      },
      {
        id: 'rydanz-3',
        name: "Rydanz Touring TS5",
        type: "Neumático de turismo",
        description: "Neumático diseñado para proporcionar confort y seguridad en el uso diario.",
        category: "Pasajero",
        line: "Touring TS",
        applications: ["Sedanos", "Compactos", "Uso familiar"],
        benefits: ["Confort de marcha", "Bajo nivel de ruido", "Larga vida útil"],
        approvals: [],
        specifications: { size: "205/55 R16", season: "All-Season", speedRating: "H", loadIndex: "91" },
        presentations: []
      },
      {
        id: 'rydanz-4',
        name: "Rydanz SUV Ultra",
        type: "Neumático para SUV",
        description: "Neumático premium para SUV con excelente rendimiento en todas las condiciones.",
        category: "SUV",
        line: "SUV Ultra",
        applications: ["SUVs medianos", "Crossovers", "Vehículos familiares"],
        benefits: ["Estabilidad a alta velocidad", "Frenado en mojado", "Confort superior"],
        approvals: [],
        specifications: { size: "235/60 R18", season: "All-Season", speedRating: "V", loadIndex: "103" },
        presentations: []
      },
      {
        id: 'rydanz-5',
        name: "Rydanz Winter WD1",
        type: "Neumático de invierno",
        description: "Neumático específico para condiciones de invierno con máximo agarre en nieve y hielo.",
        category: "Pasajero",
        line: "Winter WD",
        applications: ["Zonas con nieve", "Climas fríos", "Vehículos en invierno"],
        benefits: ["Certificación invernal 3PMSF", "Agarre en nieve", "Frenado en hielo"],
        approvals: ["3PMSF", "M+S"],
        specifications: { size: "195/65 R15", season: "Invierno", speedRating: "T", loadIndex: "91" },
        presentations: []
      },
      {
        id: 'rydanz-6',
        name: "Rydanz Eco Drive",
        type: "Neumático económico",
        description: "Neumático de excelente relación calidad-precio con buena eficiencia de combustible.",
        category: "Pasajero",
        line: "Eco Drive",
        applications: ["Vehículos económicos", "Flotas", "Uso urbano"],
        benefits: ["Ahorro de combustible", "Larga duración", "Precio accesible"],
        approvals: [],
        specifications: { size: "185/65 R15", season: "Verano", speedRating: "H", loadIndex: "88" },
        presentations: []
      }
    ]
  }
};

function initCatalogs() {
  CATALOGS.mobil.products = rawProducts;

  const categories = new Set();
  rawProducts.forEach(p => {
    if (p.category) categories.add(p.category);
  });
  CATALOGS.mobil.categories = Array.from(categories).sort();
}

initCatalogs();

function getBrand(brandId) {
  return BRANDS[brandId] || null;
}

function getCatalog(brandId) {
  return CATALOGS[brandId] || null;
}

function getSchema(type) {
  return type === 'oil' ? OIL_SCHEMA : TIRE_SCHEMA;
}
