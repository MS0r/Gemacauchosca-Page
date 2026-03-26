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

const rawProducts = [
  {
    id: "mobil-1",
    name: "Mobil Super 3000 XE 5W-30",
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
    presentations: ["Cuarto (1/4 gl)", "Galón", "Tambor (55 gl)"],
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
    name: "Mobil Super 3000 X4 5W-40",
    type: "Lubricante sintético para vehículos gasolina y diésel sin trampa de partículas (DPF)",
    description: "Aceite de motor totalmente sintético que ayuda a prolongar la vida útil del motor de vehículos de cualquier tipo y edad, mediante una mayor protección en un amplio rango de temperaturas.",
    category: "Full Sintéticos - Gasolina",
    line: "Mobil Super 3000",
    applications: [
      "Casi todas las tecnologías de motores",
      "Gasolina y diésel",
      "Vehículos de pasajeros, camionetas deportivas, camiones ligeros y furgonetas",
      "Manejo en carretera a velocidad de Crucero y conducción en ciudad con arranques y paros continuos",
      "Condiciones de operación normales a frecuentemente severas",
      "Motores de alto desempeño"
    ],
    benefits: [
      "Mayor protección a temperaturas",
      "Mejor desempeño durante el arranque en frío",
      "Mayor limpieza del motor, como resultado de la menor formación de lodos",
      "Mayor protección contra el desgaste"
    ],
    approvals: [
      "Aprobación MB 229.3",
      "Aprobación MB 229.5",
      "VW 502 00",
      "VW 505 00",
      "Porsche A40",
      "PSA B71 2296",
      "BMW Longlife-01",
      "RENAULT RN0700",
      "RENAULT RN0710"
    ],
    presentations: ["Cuarto (1/4 gl)", "Galón", "Tambor"],
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
    name: "Mobil Super 2000 5W-20",
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
    presentations: ["Cuarto (1/4 gl)", "Galón", "Tambor"],
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
    name: "Mobil Super 2000 10W-30",
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
    presentations: ["Cuarto (1/4 gl)", "Galón", "Tambor (55 gl)"],
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
    name: "Mobil Super 1000 20W-50",
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
    presentations: ["Cuarto (1/4 gl)", "Galón", "Tambor (55 gl)"],
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
    name: "Mobil Special Alto Kilometraje 25W-50",
    type: "Lubricante para motores con alto kilometraje",
    description: "Brinda una gruesa película de aceite que ayuda a proteger los motores a gasolina que operan bajo condiciones severas, como altas temperaturas y en tráfico de ciudad donde el parar y arrancar es frecuente.",
    category: "Mineral Premium - Gasolina",
    line: "Mobil Special",
    applications: ["Motores con más de 150.000 kilómetros"],
    benefits: [
      "Reduce el consumo de aceite",
      "Reduce el desgaste y la corrosión del motor"
    ],
    presentations: ["Cuarto (1/4 gl)", "Galón", "Tambor (55 gl)"],
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
    name: "Mobil Super 4T MX 10W-30",
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
    presentations: ["Cuarto (1/4 gl)"],
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
    name: "Mobil Super 4T 20W-50",
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
    presentations: ["Pinta (1/8 gl)", "Cuarto (1/4 gl)", "Tambor (55 gl)"],
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
    presentations: ["Galón", "Balde (5 gl)", "Tambor (55 gl)"],
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
    presentations: ["Cuarto (1/4 gl)", "Galón", "Balde (5 gl)", "Tambor (55 gl)"],
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
    name: "Mobil 1 Synthetic ATF",
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
    presentations: ["Cuarto (1/4 gl)", "Balde (5 gl)", "Tambor (55 gl)"],
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
    presentations: ["0,39 kg", "Balde (5 gl)"],
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
    presentations: ["Cuarto (1/4 gl)", "Balde (5 gl)", "Tambor (55 gl)"],
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
    presentations: ["Cuarto (1/4 gl)", "Galón", "Balde (5 gl)", "Tambor (55 gl)"],
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
  }
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
