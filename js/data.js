const BRANDS = {
  mobil: {
    id: 'mobil',
    name: 'Mobil',
    type: 'oil',
    logo: 'M',
    logoImage: 'images/logos/mobil_logo.webp',
    logoImageBlack: 'images/logos/mobil_black.webp',
    logoImageWhite: 'images/logos/mobil_white.webp'
  },
  firestone: {
    id: 'firestone',
    name: 'Firestone',
    type: 'tires',
    logo: 'F',
    logoImage: 'images/logos/firestone_red_logo_name.webp',
    logoImageBlack: null,
    logoImageWhite: 'images/logos/firestone_white_name.webp'
  },
  rydanz: {
    id: 'rydanz',
    name: 'Rydanz',
    type: 'tires',
    logo: 'R',
    logoImage: 'images/logos/rydanz_black_normal.webp',
    logoImageBlack: 'images/logos/rydanz_black_normal.webp',
    logoImageWhite: 'images/logos/rydanz_white_normal.webp'
  },
  vp_racing: {
    id: 'vp_racing',
    name: 'VP Racing',
    type: 'oil',
    logo: 'V',
    logoImage: 'images/logos/vp_racing_logo.webp',
    logoImageBlack: 'images/logos/vp_racing_logo.webp',
    logoImageWhite: 'images/logos/vp_racing_logo.webp'
  },
  alix: {
    id: 'alix',
    name: 'Alix',
    type: 'tires',
    logo: 'A',
    logoImage: 'images/logos/alix_red_logo.webp',
  },
  bekka: {
    id: 'bekka',
    name: 'Bekka',
    type: 'tires',
    logo: 'B',
    logoImage: 'images/logos/bekka_logo.webp',
    logoImageBlack: 'images/logos/bekka_logo_black.webp',
    logoImageWhite: 'images/logos/bekka_logo_white.webp'
  }
};

const PRESEN = {
  PAILA: 'Paila (5 gl)',
  GALON: 'Galón',
  MEDIO: 'Medio Galón',
  CUARTO: 'Cuarto (1/4 gl)',
  PINTA: 'Pinta (1/8 gl)',
  TAMBOR: 'Tambor (55 gl)',
  LITRO: 'Litro'
}

const OIL_LINES = {
  GAS: 'Gasolina',
  MOTO: 'Moto 2T/4T/2T Fuera de borda',
  DIE: 'Diésel',
  TRAN: 'Transmisiones',
  IND: 'Industrial',
  GRA: 'Grasas',
  ESP: 'Especiales',
}

const OIL_CAT = {
  SINT: 'Sintéticos',
  SEMI: 'Semi Sintéticos',
  MIN: 'Mineral',
  GRA: 'Grasa Complejo de Litio',
  ETI: 'Etilenglicol'
}

const TIRE_LINES = {
  PAS_RADIAL: 'Pasajero Radial',
  CAM_RADIAL: 'Camioneta Radial',
  CAM_CONV: 'Camioneta Convencional',
  AGRI: 'Agrícolas',
  MOTO: 'Motocicleta',
}

const FIRE_TIRE_CAT = {
  FIRE: "Firehawk",
  AFF: "Affinity",
  SEI: "Seiberling",
  MUL: "Multihawk",
  DES: "Destination",
  ATX: "ATX",
  SAT: "Super All Traction",
  SHO: "Shogun",
  CHA: "Champion",
}

const ALIX_TIRE_CAT = {
  VEZ: "Vezetta",
  VEZ_PLUS: "Vezetta Plus",
  VEL: "Veloce",
  IMP: "Impact",
  ST: "ST",
  CT: "CT",
}

const ESP_ATTRIBUTES_OIL = {
  viscosity: 'Viscosidad SAE',
  api: 'API',
  acea: 'ACEA',
  ilsac: 'ILSAC',
  jaso: 'JASO',
  iso: 'ISO',
  nmma: 'NMMA',
  oem: 'Aprobaciones OEM',
  compatibility: 'Compatibilidad',
  other: 'Otras especificaciones'
}

const ESP_ATTRIBUTES_TIRE = {
  size: 'Medida',
  car: 'Modelos de auto compatibles',
  season: 'Temporada',
  speedRating: 'Índice de velocidad',
  loadIndex: 'Índice de carga'
}

const CATALOGS = {
  mobil: {
    brand: BRANDS.mobil,
    categories: [],
    products: [
      {
        id: "mobil-1",
        name: "Mobil Super™ 3000 XE 5W-30",
        image: "images/mobil/mobil_super_3000_xe_5w_30.webp",
        type: "Lubricante sintético para vehículos a gasolina y diésel con filtro de partículas diésel (DPF)",
        description: "Aceite de motor sintético de alto desempeño con bajo contenido de cenizas para motores de vehículos gasolina o diesel prolongando la vida útil del motor y protegiendo los sistemas de reducción de emisiones.",
        category: OIL_CAT.SINT,
        line: OIL_LINES.GAS,
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
        presentations: [PRESEN.CUARTO],
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
        name: "Mobil Super™ 3000 X4 5W-40",
        image: "images/mobil/mobil_super_3000_x4_5w_40.webp",
        type: "Lubricante sintético para vehículos gasolina y diésel sin trampa de partículas (DPF)",
        description: "Aceite de motor totalmente sintético que ayuda a prolongar la vida útil del motor de vehículos de cualquier tipo y edad, mediante una mayor protección en un amplio rango de temperaturas.",
        category: OIL_CAT.SINT,
        line: OIL_LINES.GAS,
        applications: ["Casi todas las tecnologías de motores.", "Gasolina y diésel.", "Vehículos de pasajeros, camionetas deportivas, camiones ligeros y furgonetas.", "Manejo en carretera a velocidad de crucero y conducción en ciudad con arranques y paros continuos.", "Condiciones de operación normales a frecuentemente severas.", "Motores de alto desempeño."
        ],
        benefits: [
          "Protección mejorada contra el desgaste del motor y la formación de depósitos",
          "Protección superior del motor durante el arranque en frío",
          "Protección mejorada a altas temperaturas"
        ],
        approvals: [
          "Aprobación MB 229.3",
          "Aprobación MB 229.5",
          "Volskwagen 502 00",
          "Volskwagen 505 00",
          "Porsche A40",
          "Peugeot/Citroen PSA 2296",
          "BMW Longlife-01",
          "RENAULT RN0700",
          "RENAULT RN0710"
        ],
        presentations: [PRESEN.CUARTO],
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
        image: "images/mobil/mobil_super_2000_5w_20.webp",
        type: "Lubricante semisintético para vehículos a gasolina y gas",
        description: "Aceite de motor semisintético que ayuda a alargar la vida del motor, reduciendo el desgaste y evitando la formación de depósitos.",
        category: OIL_CAT.SEMI,
        line: OIL_LINES.GAS,
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
        presentations: [PRESEN.CUARTO],
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
        image: "images/mobil/mobil_super_2000_10w_30.webp",
        type: "Lubricante semisintético para vehículos a gasolina, gas y motores turboalimentados de inyección directa de gasolina",
        description: "Aceite semi-sintético mejorado de alta calidad para motores que cumplen con las más recientes especificaciones de la industria para los aceites de motores.",
        category: OIL_CAT.SEMI,
        line: OIL_LINES.GAS,
        applications: [
          "Las más recientes tecnologías de motores de gasolina",
          "Vehículos de pasajeros, camionetas deportivas, camiones ligeros y furgonetas",
          "Conducción en la ciudad con muchas paradas",
          "Condiciones operacionales normales a severas",
          "Turboalimentadores",
          "Motores de alto desempeño"
        ],
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
          ilsac: ["GF-6A"],
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
        image: "images/mobil/mobil_super_1000_20w_50.webp",
        type: "Lubricante multigrado para motores a gasolina",
        description: "Aceites minerales de primera calidad que cumple con exigentes requerimientos de la industria para lubricantes de motores. Diseñados para proporcionar un alto nivel de desempeño y protección en variadas condiciones de funcionamiento.",
        category: OIL_CAT.MIN,
        line: OIL_LINES.GAS,
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
        image: "images/mobil/mobil_special_alto_kilometraje_25w_50.webp",
        type: "Lubricante para motores con alto kilometraje",
        description: "Brinda una gruesa película de aceite que ayuda a proteger los motores a gasolina que operan bajo condiciones severas, como altas temperaturas y en tráfico de ciudad donde el parar y arrancar es frecuente.",
        category: OIL_CAT.MIN,
        line: OIL_LINES.GAS,
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
      // {
      //   id: "mobil-7",
      //   name: "Mobil Super™ 4T MX 10W-30",
      //   image: "images/mobil/mobil_super_4t_mx_10w-30.webp",
      //   type: "Lubricante semisintético para motocicletas de 4 Tiempos",
      //   description: "Aceite semisintético de alto desempeño para motores de motocicletas de cuatro tiempos diseñado fundamentalmente para uso general en muchos tipos de motocicletas y motores de cuatro tiempos.",
      //   category: "Motocicletas 4 tiempos",
      //   line: "PVL - Línea MCO",
      //   applications: [
      //     "Motocicletas de 4 tiempos que especifican aceite SAE 10W-30",
      //     "Motores enfriados por aire",
      //     "Motores de 4 tiempos equipados con convertidores catalíticos"
      //   ],
      //   benefits: [
      //     "Ahorros en el consumo de combustible",
      //     "Protección contra el desgaste para alargar vida útil del motor",
      //     "Ayuda a mantener más limpio el motor",
      //     "Excelentes propiedades de fricción"
      //   ],
      //   presentations: [PRESEN.CUARTO],
      //   specifications: {
      //     viscosity: "10W-30",
      //     api: ["SL"],
      //     acea: [],
      //     ilsac: [],
      //     jaso: ["MA2"],
      //     iso: [],
      //     nmma: [],
      //     oem: [],
      //     compatibility: [],
      //     other: []
      //   }
      // },
      {
        id: "mobil-8",
        name: "Mobil Super™ 4T 20W-50",
        image: "images/mobil/mobil_super_4t_20w_50.webp",
        type: "Lubricante semisintético para motocicletas de 4 Tiempos",
        description: "Combina aceites minerales de calidad altamente refinados y un avanzado sistema de aditivos para proporcionar una buena limpieza del motor, buena protección contra el desgaste y protección contra la corrosión.",
        category: OIL_CAT.MIN,
        line: OIL_LINES.MOTO,
        applications: ["Uso general en muchos tipos de motocicletas y motores de cuatro tiempos"],
        benefits: [
          "Ayuda a prolongar la vida útil del motor",
          "Ayuda a mantener los motores limpios",
          "Protege los componentes críticos del motor",
          "Buena protección contra la corrosión"
        ],
        presentations: [PRESEN.LITRO],
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
      // {
      //   id: "mobil-9",
      //   name: "Mobil Delvac Legend™ 1640",
      //   image: "images/mobil/mobil_delvac_legend_1640.webp",
      //   type: "Aceites de alto rendimiento para motores diésel",
      //   description: "Aceite monogrado de alto rendimiento para motores diésel formulados a partir de aceites base de avanzada tecnología y un equilibrado sistema de aditivos. Están recomendados por ExxonMobil para ser utilizados en motores interenfriados y turboalimentados que funcionan en condiciones severas tanto en carretera como fuera de ella, así como en una amplia gama de aplicaciones en las que se recomienda un lubricante monogrado.",
      //   category: OIL_CAT.SEMI,
      //   line: OIL_LINES.DIE,
      //   applications: [
      //     "Equipos accionados por motores diésel aspirados naturalmente y turbocargados",
      //     "Transporte de servicio ligero y pesado por carretera",
      //     "Industrias fuera de carreteras, entre ellas: construcción, minería, explotación de canteras y agricultura"
      //   ],
      //   benefits: [
      //     "Excelente protección contra el espesamiento del aceite, los depósitos de altas temperaturas, la acumulación de lodos, la degradación del aceite y la corrosión",
      //     "Reserva de TBN extendida",
      //     "Prolongación de la vida útil del motor, menos desgaste, excelente protección contra el atascamiento de los anillos.",
      //     "Control a largo plazo de los depósitos y del desgaste. Controla la formación de ácidos cuando se utilizan combustibles con alto contenido de azufre"
      //   ],
      //   presentations: [PRESEN.TAMBOR],
      //   specifications: {
      //     viscosity: "5W-40",
      //     api: ["SF", "CF"],
      //     acea: ["E2"],
      //     ilsac: [],
      //     jaso: [],
      //     iso: [],
      //     nmma: ["270"],
      //     oem: [],
      //     compatibility: [],
      //     other: []
      //   }
      // },
      {
        id: "mobil-10",
        name: "Mobil Delvac Modern™ 15W-40",
        image: "images/mobil/mobil_delvac_modern_15w_40.webp",
        type: "Aceite de alto desempeño para motores diésel de servicio pesado",
        description: "aceite de tecnología sintética para motores diésel que ayuda a prolongar la vida útil del motor, lo cual le permite operar su negocio con confianza. Este producto cumple o excede los requisitos de los fabricantes de equipos originales (OEM) y ofrece un alto desempeño en aplicaciones tanto dentro como fuera de la carretera.",
        category: OIL_CAT.MIN,
        line: OIL_LINES.DIE,
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
        presentations: [PRESEN.CUARTO, PRESEN.GALON, PRESEN.PAILA, PRESEN.TAMBOR],
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
      // {
      //   id: "mobil-11",
      //   name: "Mobil 1™ Synthetic ATF",
      //   image: "images/mobil/mobil_1_synthetic_atf.webp",
      //   type: "Lubricante sintético para transmisiones automáticas",
      //   description: "Supera a los fluidos convencionales para transmisiones automáticas y ayuda a proporcionar excepcional resistencia contra la degradación del aceite y la formación de depósitos.",
      //   category: "Transmisiones Automáticas",
      //   line: "Línea ATF",
      //   applications: [
      //     "Vehículos modernos de alto desempeño (automóviles, SUV, SUT, furgonetas, camiones ligeros)",
      //     "Aplicaciones que requieren niveles de desempeño Dexron III, Ford Mercon y Mercon V"
      //   ],
      //   benefits: [
      //     "Excelente estabilidad térmica y frente a la oxidación",
      //     "Excelente fluidez a bajas temperaturas",
      //     "Propiedades friccionales mejoradas a largo plazo"
      //   ],
      //   approvals: [],
      //   presentations: [PRESEN.CUARTO, PRESEN.PAILA, PRESEN.TAMBOR],
      //   specifications: {
      //     viscosity: null,
      //     api: [],
      //     acea: [],
      //     ilsac: [],
      //     jaso: ["1-A"],
      //     iso: [],
      //     nmma: [],
      //     oem: ["MERCON V", "DEXRON IIIH"],
      //     compatibility: [],
      //     other: []
      //   }
      // },
      {
        id: "mobil-12",
        name: "Mobil Grease XHP 222",
        image: "images/mobil/mobil_grease_xhp_222.webp",
        type: "Grasa de Complejo de Litio",
        description: "Mobilgrease XHP 222 es una grasa de complejo de litio de servicio extendido diseñada para una amplia variedad de aplicaciones y condiciones de operación severas.",
        category: OIL_CAT.GRA,
        line: OIL_LINES.GRA,
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
        presentations: ["0,39 kg", PRESEN.PAILA],
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
        name: "Mobilube™ HD-A Plus 80W-90",
        image: "images/mobil/mobilube_hd_plus_80w_90.webp",
        type: "Lubricante para engranajes automotrices",
        description: "Está diseñado para transmisiones, ejes y mandos finales comerciales donde se esperan presiones extremas y cargas de impacto, y está recomendado por ExxonMobil para aplicaciones que requieren un servicio API GL-5. Está formulado a partir de aceites base de alto rendimiento y un avanzado sistema de aditivos. Este lubricante es un lubricante de servicio pesado para engranajes que permite prolongar los intervalos entre cambios de aceite, predominantemente en ejes Mercedes Benz.",
        category: OIL_CAT.MIN,
        line: OIL_LINES.TRAN,
        applications: [
          "Transmisiones manuales, ejes y mandos finales automotrices de servicio pesado que requieren un desempeño de nivel API GL-5",
          "Autos y camiones ligeros de carretera; vehículos comerciales de servicio pesado",
          "Industrias fuera de carretera, entre ellas: construcción, minería, explotación de canteras y agricultura",
          "Otras cajas de cambios, engranajes de dirección y cajas de cambios variables"
        ],
        benefits: [
          "Excelente estabilidad térmica y resistencia a la oxidación a altas temperaturas",
          "Larga vida útil de los engranajes y cojinetes debido a la mínima generación de depósitos. Larga vida útil de los sellos.",
          "Protección mejorada contra el desgaste de baja velocidad/alto torque y contra el rayado de alta velocidad, especialmente en ejes traseros muy cargados.",
          "Mayor capacidad de carga. Reducción en los costos de mantenimiento y mayor vida útil de los equipos.",
          "Protección efectiva contra la herrumbre y la corrosión.",
          "Reducción del desgaste y mayor vida útil de los componentes."
        ],
        presentations: [PRESEN.CUARTO, PRESEN.PAILA, PRESEN.TAMBOR],
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
        image: "images/mobil/mobil_hydraulic_aw_68.webp",
        type: "Aceite hidráulico antidesgaste",
        description: "Aceite hidráulico antidesgaste de buena calidad destinado a utilizarse en aplicaciones de servicios industriales y móviles que están sometidas a condiciones operativas moderadas.",
        category: OIL_CAT.MIN,
        line: OIL_LINES.IND,
        applications: [
          "Sistemas con bombas de engranajes, de paletas, radiales y axiales de pistón",
          "Situaciones donde la contaminación del aceite hidráulico o las fugas son inevitables"
        ],
        benefits: [
          "Buen desempeño antidesgaste que ayuda a reducir el desgaste de las bombas",
          "Protección contra la corrosión",
          "Filtrabilidad para prevenir la obstrucción de los filtros"
        ],
        presentations: [PRESEN.PAILA, PRESEN.TAMBOR],
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
        id: "mobil-15",
        name: "Mobil Super™ 2000 5W-30",
        image: "images/mobil/mobil_super_2000_5w_30.webp",
        type: "Lubricante semisintético para vehículos a gasolina, gas y motores turboalimentados de inyección directa de gasolina",
        description: "Aceite de motor semisintético que ayuda a alargar la vida del motor, reduciendo el desgaste y evitando la formación de depósitos.",
        category: OIL_CAT.SEMI,
        line: OIL_LINES.GAS,
        applications: [
          "Motores a gasolina y gas",
          "Motores turboalimentados de inyección directa de gasolina",
          "Vehículos livianos y SUV",
          "Conducción en ciudad con paradas frecuentes",
          "Condiciones de funcionamiento severas en terrenos exigentes"
        ],
        benefits: [
          "Una mejor economía de combustible de hasta un 3%",
          "Protección contra el desgaste del motor y la formación de depósitos",
          "Protección superior del motor durante el arranque",
          "Protección a altas temperaturas",
          "Evita la pre-ignición"
        ],
        approvals: [
          "General Motors 6094M",
          "Chrysler MS-6395",
          "FORD WSS-M2C929-A",
          "FORD WSS-M2C946-A",
          "FORD WSS-M2C946-B1"
        ],
        presentations: [PRESEN.CUARTO, PRESEN.GALON, PRESEN.TAMBOR],
        specifications: {
          viscosity: "5W-30",
          api: ["SN PLUS"],
          ilsac: ["GF-5"],
          other: ["RESOURCE CONSERVING"]
        }
      },
      {
        id: "mobil-16",
        name: "Mobil Super™ Moto Scooter MX 10W-40 4T",
        image: "images/mobil/mobil_super_moto_scoter_mx_10w_40.webp",
        type: "Lubricante sintético para motos 4T",
        description: "Aceite para motos scooter de 4 tiempos que protege el motor de diversas condiciones de conducción, minimizando las vibraciones y dando protección a las altas temperaturas.",
        category: OIL_CAT.SEMI,
        line: OIL_LINES.MOTO,
        applications: [
          "Motores scooter de 4 tiempos con transmisión automática",
          "Motores de scooter de alta potencia",
          "Todos los cilindrajes recomendados por el fabricante"
        ],
        benefits: [
          "Molécula antidesgaste termoactivada para excelente protección a altas temperaturas",
          "Reduce la fricción logrando una conducción confortable",
          "Excelente protección contra el desgaste",
          "Buena estabilidad térmica, a la oxidación y control de depósitos",
          "Excelentes propiedades de protección contra la corrosión",
          "Propiedades mejoradas a baja temperatura"
        ],
        presentations: [PRESEN.LITRO],
        specifications: {
          viscosity: "10W-40",
          api: ["SL"],
          jaso: ["MB 2016"]
        }
      },
      {
        id: "mobil-17",
        name: "Mobil Delvac Modern™ 15W-40 Full Protection",
        image: "images/mobil/mobil_delvac_modern_15w_40_full_protection.webp",
        type: "Aceite de alto desempeño para motores diésel de servicio pesado",
        description: "Aceite con tecnología sintética para motores diésel de última generación y de bajas emisiones que cumple o excede los requerimientos de los fabricantes de equipo original.",
        category: OIL_CAT.MIN,
        line: OIL_LINES.DIE,
        applications: [
          "Alto rendimiento dentro y fuera de las carreteras y en aplicaciones marinas",
          "Sistemas de control de emisiones de vehículos Euro V/VI",
          "Compatible con equipos de tecnologías anteriores"
        ],
        benefits: [
          "Larga vida para el motor",
          "Trabajo pesado",
          "Control de hollín",
          "Aprobado por fabricantes, Equipo Original",
          "Estabilidad Térmica y a la oxidación"
        ],
        approvals: [
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
        presentations: [PRESEN.PAILA, PRESEN.TAMBOR],
        specifications: {
          viscosity: "15W-40",
          api: ["CK-4", "CJ-4", "CI-4 PLUS", "CI-4", "CH-4", "SN"],
          "acea": ["E7", "E9"]
        }
      },
      {
        id: "mobil-18",
        name: "Mobil 1™ 0W-20",
        image: "images/mobil/mobil_1_ow_20.webp",
        type: "Lubricante totalmente sintético de avanzada economía de combustible para motores",
        description: "Avanzado aceite totalmente sintético diseñado para brindar una excepcional protección al motor y una mejorada economía de combustible.",
        category: OIL_CAT.SINT,
        line: OIL_LINES.GAS,
        applications: [
          "Todos los tipos de vehículos de pasajeros, SUV, furgonetas y camiones ligeros con motores a gasolina",
          "Aplicaciones SAE 5W-20 y 0W-20",
          "Condiciones de frío extremo"
        ],
        benefits: [
          "Fórmula avanzada totalmente sintética de baja viscosidad",
          "Excepcional estabilidad térmica y contra la oxidación",
          "Excepcionales capacidades a baja temperatura",
          "Sistema de aditivos de componentes precisamente balanceado"
        ],
        presentations: [PRESEN.CUARTO, PRESEN.PAILA, PRESEN.TAMBOR],
        specifications: {
          viscosity: "0W-20",
          api: ["SN"],
          ilsac: ["GF-5"]
        }
      },
      {
        id: "mobil-19",
        name: "Mobilube HD 85W-140",
        image: "images/mobil/mobil_sae_85w_140.webp",
        type: "Lubricantes de servicio pesado para engranajes automotrices",
        description: "Lubricante de alto rendimiento para servicio pesado en engranajes formulado a partir de aceites base de alto rendimiento y un avanzado sistema de aditivos.",
        category: OIL_CAT.MIN,
        line: OIL_LINES.TRAN,
        applications: [
          "Ejes y transmisiones finales para servicio pesado",
          "Aplicaciones automotrices que requieren API GL-5",
          "Camiones de carga ligera y carga pesada y vehículos comerciales",
          "Maquinaria de industria: construcción, extracción, minería y agricultura"
        ],
        benefits: [
          "Compatible con los sellos y empaques automotrices usuales",
          "Sobresaliente protección contra el desgaste a bajas velocidades/altos torques",
          "Protección contra el rayado a altas velocidades",
          "Excelente protección contra la herrumbre y la corrosión",
          "Excepcional estabilidad térmica y resistencia a la oxidación",
          "Lubricación efectiva a bajas temperaturas"
        ],
        presentations: [PRESEN.CUARTO, PRESEN.PAILA, PRESEN.TAMBOR],
        specifications: {
          viscosity: "85W-140",
          api: ["GL-5"]
        }
      },
      // {
      //   id: "mobil-20",
      //   name: "Mobil Super™ 2000 X1 10W-40",
      //   image: "images/mobil/mobil_super_2000_x1_10w_40.webp",
      //   type: "Lubricante semisintético para vehículos a gasolina, gas y motores turboalimentados de inyección directa de gasolina",
      //   description: "Lubricante de motor semisintético que ayuda a alargar la vida del motor, reduciendo el desgaste y evitando la formación de depósitos.",
      //   category: OIL_CAT.SEMI,
      //   line: "Mobil Super 2000",
      //   applications: [
      //     "Motores a gasolina y gas",
      //     "Motores turboalimentados de inyección directa de gasolina",
      //     "Vehículos livianos y SUV",
      //     "Conducción en ciudad con paradas frecuentes",
      //     "Condiciones operacionales normales a severas"
      //   ],
      //   benefits: [
      //     "Protección contra el desgaste del motor y la formación de depósitos",
      //     "Protección superior del motor durante el arranque",
      //     "Protección a altas temperaturas",
      //     "Evita la pre-ignición"
      //   ],
      //   presentations: [PRESEN.CUARTO, PRESEN.GALON, PRESEN.TAMBOR],
      //   specifications: {
      //     viscosity: "10W-40",
      //     api: ["SN PLUS"],
      //     "acea": ["A3/B3-16"],
      //   },
      //   approvals: [
      //     "Aprobación Mercedes Benz 229.1",
      //     "Volkswagen 501 01",
      //     "Volkswagen 505 00"
      //   ]
      // }, 
      {
        id: "mobil-21",
        name: "Mobil Special™ HD 50",
        image: "images/mobil/mobil_special_hd_50.webp",
        type: "Aceite de motor monogrado de alto rendimiento.",
        description: "Formulados a partir de bases lubricantes minerales de alta calidad y de un sistema de aditivos para brindar el desempeño requerido por los motores de combustión interna en donde es requerido un nivel de calidad API SF o API CC. Contienen un efectivo balance de detergentes y dispersantes para reducir la formación de lodos y depósitos, retener la alcalinidad (TBN) y reducir el desgaste.",
        category: OIL_CAT.MIN,
        line: OIL_LINES.GAS,
        applications: [
          "Motores de gasolina de Vehículos de pasajeros, Vehículos comerciales",
          "Motores de gasolina de maquinaria agrícola",
          "Motores diésel de vehículos comerciales y equipos para la construcción",
          "Transmisiones manuales que requieran aceites de calidad API GL1"
        ],
        benefits: [
          "Bajo consumo de aceite",
          "Limpieza del motor"
        ],
        presentations: [PRESEN.CUARTO, PRESEN.GALON, PRESEN.TAMBOR],
        specifications: {
          viscosity: "HD 50",
          api: ["SF", "CC"]
        }
      },
      {
        id: "mobil-22",
        name: "Mobil Super™ 4T MX 10W-40",
        image: "images/mobil/mobil_super_4t_mx_10w_40.webp",
        type: "Lubricante semisintético para motos 4T",
        description: "Aceite semisintético de alto desempeño para motores de motocicletas de cuatro tiempos, concebido principalmente para su uso general en muchos tipos de motocicletas y motores de cuatro tiempos. Su exclusiva fórmula proporciona excelentes características de flujo que permiten reducir el desgaste del motor durante el arranque y una excelente protección de la transmisión y del embrague durante la operación.",
        category: OIL_CAT.SEMI,
        line: OIL_LINES.MOTO,
        applications: [
          "Motocicletas de 4 tiempos que requieren aceite SAE 10W-40", "Protección adecuada para transmisiones y embragues del motor", "Especialmente adecuado para motores refrigerados por aire que operan a altas temperaturas", "Recomendado para motores de 4 tiempos con convertidores catalíticos (reducción de emisiones)"
        ],
        benefits: [
          "Protección contra el desgaste para alargar vida útil del motor",
          "Ayuda a mantener más limpio el motor",
          "Excelentes propiedades  de fricción",
          "Ayuda a reducir las emisiones"
        ],
        presentations: [PRESEN.LITRO],
        specifications: {
          viscosity: "10W-40",
          api: ["SL"],
          jaso: ["MA2"]
        }
      },
      {
        id: "mobil-23",
        name: "Mobil Super™ 4T MX 15W-50",
        image: "images/mobil/mobil_super_4t_mx_15w_50.webp",
        type: "Lubricante semisintético para motos 4T",
        description: "Aceite semisintético de alto desempeño para motores de motocicletas de cuatro tiempos, concebido principalmente para su uso general en muchos tipos de motocicletas y motores de cuatro tiempos. Su exclusiva fórmula proporciona excelentes características de flujo que permiten reducir el desgaste del motor durante el arranque y una excelente protección de la transmisión y del embrague durante la operación.",
        category: OIL_CAT.SEMI,
        line: OIL_LINES.MOTO,
        applications: [
          "Motocicletas de 4 tiempos que requieren aceite SAE 10W-50", "Protección adecuada para transmisiones y embragues del motor", "Especialmente adecuado para motores refrigerados por aire que operan a altas temperaturas", "Recomendado para motores de 4 tiempos con convertidores catalíticos (reducción de emisiones)"
        ],
        benefits: [
          "Protección contra el desgaste para alargar vida útil del motor",
          "Ayuda a mantener más limpio el motor",
          "Excelentes propiedades  de fricción",
          "Ayuda a reducir las emisiones"
        ],
        presentations: [PRESEN.LITRO],
        specifications: {
          viscosity: "15W-50",
          api: ["SL"],
          jaso: ["MA2"]
        }
      },
      {
        id: "mobil-24",
        name: "Mobil Super™ Moto 2T",
        image: "images/mobil/mobil_super_moto_2t.webp",
        type: "Lubricante mineral para motos 2T",
        description: "Mobil Super Moto 2T combina aceites minerales de alta calidad con un robusto sistema de aditivos que proporciona una buena limpieza y desempeño superior al motor. Mobil Super Moto 2T está pre-diluido para asegurar una rápida mezcla con el combustible. Utilice la proporción de mezcla recomendada por el fabricante. Atienda siempre las recomendaciones del manual del usuario.",
        category: OIL_CAT.MIN,
        line: OIL_LINES.MOTO,
        applications: [
          "Adecuado para otros equipos con motores de dos tiempos a gasolina", "Compatible con sistemas de lubricación automática", "Compatible con sistemas de mezcla de aceite con el combustible"
        ],
        benefits: [
          "Ayuda a prolongar la vida útil del motor",
          "Estabilidad térmica y a la oxidación y control de los depósitos",
          "Evita la pre-ignición"
        ],
        presentations: [PRESEN.CUARTO],
        specifications: {
          viscosity: "ASTM D 445",
          api: ["TC"],
          jaso: ["FB"],
          iso: ["L-EGB"]
        }
      },
      {
        id: "mobil-25",
        name: "Mobil™ Extra 2T",
        image: "images/mobil/mobil_extra_2t.webp",
        type: "Lubricante sintético para motos 2T",
        description: "Mobil Extra 2T combina una mezcla de aceites básicos minerales y sintetizados de alta calidad con un sistema de aditivos avanzado para proporcionar una excelente limpieza del motor y un escape de gases libre de humo. Viene diluido para facilitar su mezcla al agregarlo al combustible.",
        category: OIL_CAT.SEMI,
        line: OIL_LINES.MOTO,
        applications: [

        ],
        benefits: [
          "Gas de escape sin humo",
          "Protección contra el desgaste para alargar vida útil del motor",
          "Proporciona una mayor estabilidad contra la oxidación"
        ],
        presentations: [PRESEN.CUARTO, PRESEN.PINTA],
        specifications: {
          viscosity: "ASTM D 445",
          api: ["TC"],
          jaso: ["FC"],
          iso: ["L-EGB"]
        }
      },
      {
        id: "mobil-26",
        name: "Mobil Outboard™ Plus 2T",
        image: "images/mobil/mobil_outboard_plus_2t.webp",
        type: "Lubricante para motores fuera de borda 2 Tiempos",
        description: "Mobil Outboard Plus es un aceite de alto desempeño para motores de dos tiempos que está diseñado para muchos motores de dos tiempos de alto rendimiento, refrigerados por agua, y utilizados en aplicaciones marinas fuera de borda. Mobil Outboard Plus ofrece motores limpios y un comportamiento compatible con el medioambiente. Mobil Outboard Plus está prediluido para facilitar la mezcla cuando se añade al combustible.",
        category: OIL_CAT.MIN,
        line: OIL_LINES.MOTO,
        applications: [
          "Recomendado para inyección directa y sistemas premezclados gasolina/lubricante",
          "Adecuado para motores de dos tiempos enfriados por aire de trabajo liviano a moderado",
          "Aplicable en equipos como cortadoras de pasto, sierras eléctricas, sopladoras de hojas y orilladoras de pasto"
        ],
        benefits: [
          "Extiende la vida del motor.",
          "Extiende la vida de las bujias y de las valvúlas previendo los depositos de suuciedad.",
          "Mejora la economia del combustible.",
          "Buena capacidad para altas y bajas temperaturas",
          "No es toxico para la vida marina"
        ],
        presentations: [PRESEN.CUARTO, PRESEN.GALON, PRESEN.PAILA, PRESEN.TAMBOR],
        specifications: {
          viscosity: null,
          api: ["TC"],
          nmma: ["TC-W3"],
        }
      },
      // {
      //   id: "mobil-27",
      //   name: "Mobil Delvac XHP™ ESP S 10W-40",
      //   image: "images/mobil/mobil_delvac_xhp_esp_10w-40.webp",
      //   type: "Lubricante sintético para la protección del sistema de emisión de aceite de motor diésel",
      //   description: "Aceite sintético de alto desempeño diseñado para proporcionar lubricación a motores diésel modernos de alto rendimiento y bajas emisiones, utilizados en aplicaciones severas. Este aceite se ha diseñado utilizando aceites base ultrarefinadas que proporcionan una excelente fluidez a bajas temperaturas, retención de la viscosidad a altas temperaturas y control de la volatilidad.",
      //   category: "Servicio Pesado - Diésel",
      //   line: "Línea CVL",
      //   applications: [
      //     "Motores diésel de servicio pesado, incluyendo los vehículos modernos de bajas emisiones Euro V/VI que utilizan tecnologías tales como Filtros de Partículas para Motores Diésel (DPF), Reducción Catalítica Selectiva (SCR), Trampas de Regeneración Continua (CRT), Catalizadores de Oxidación para Motores Diésel (DOC) y Recirculación de Gases de Escape (EGR)",
      //     "Equipos accionados por motores diésel aspirados naturalmente y turboalimentados",
      //     "Camiones y autobuses de carretera usados en viajes de larga y corta distancia",
      //     "Equipos fuera de carretera para la minería, la construcción y la agricultura",
      //     "Motores de fábrica europeos que requieren la especificación ACEA E4-16, E6-16, E7-16, E9-16"
      //   ],
      //   benefits: [
      //     "Ayuda a brindar una larga vida del motor",
      //     "Largos intervalos entre cambios de aceite",
      //     "Propiedades anti-desgaste, anti-rayado y protección",
      //     "Ayuda a proteger los dispositivos de los sistemas de escape"
      //   ],
      //   approvals: [
      //     "MTU Categoría de aceite 3.1",
      //     "MAN M 3477/ M 3575/ M 3271-1",
      //     "Volvo VDS-4/ VDS-3",
      //     "Camiones Renault RLD-3/ RLD-2",
      //     "Deutz DQC IV-10 LA",
      //     "Scania bajo contenido de cenizas",
      //     "Voith Aceite retardador Clase B",
      //     "Motores Kamaz Euro-3, 4 y -5",
      //     "Mercedes Benz 228.51 / 235.28",
      //     "Mack EO-O PREMIUM PLUS"
      //   ],
      //   presentations: [PRESEN.PAILA],
      //   specifications: {
      //     viscosity: "10W-40",
      //     api: ["CJ-4", "CI-4 PLUS"],
      //     acea: ["E4-16", "E6-16", "E7-16", "E9-16"],
      //     jaso: ["DH-2"]
      //   },
      //   "requirements": [
      //     "Cummins CES 20081",
      //     "CATERPILLAR ECF-3"
      //   ]
      // },
      // {
      //   id: "mobil-28",
      //   name: "Mobil Delvac™ 1340",
      //   image: "images/mobil/mobil_delvac_1340.webp",
      //   type: "Lubricante para motores diésel de servicio pesado turbocargados",
      //   description: "Aceites monogrados para motores diesel de alto desempeño elaborados a partir de un sistema de aditivos balanceado. Estos aceites fueron diseñados para motores de aspiración natural y turbo-cargados que operan en condiciones severas tanto de carreteras o fuera de ellas. Los Mobil Delvac Serie 1300 son lubricantes usados en un amplio rango de aplicaciones en donde un aceite monogrado es requerido.",
      //   category: "Servicio Pesado - Diésel",
      //   line: "Línea CVL",
      //   applications: [
      //     "Motores diésel que utilizan diseños más viejos y convencionales de aspiración natural",
      //     "Camiones de servicio pesado en carretera y aplicaciones fuera de carretera, incluyendo transporte, minería, construcción, agrícolas y marinas"
      //   ],
      //   benefits: [
      //     "Excelente protección contra el pegado de los anillos",
      //     "Excelente control del consumo de aceite"
      //   ],
      //   presentations: [PRESEN.CUARTO, PRESEN.GALON, PRESEN.PAILA, PRESEN.TAMBOR],
      //   specifications: {
      //     viscosity: null,
      //     api: ["CF", "SF"],
      //   }
      // },
      {
        id: "mobil-29",
        name: "Mobil Delvac™ Legend 1350 SAE50",
        image: "images/mobil/mobil_delvac_1350.webp",
        type: "Lubricante para motores diésel de servicio pesado turbocargados",
        description: "Aceites monogrados para motores diesel de alto desempeño elaborados a partir de un sistema de aditivos balanceado. Estos aceites fueron diseñados para motores de aspiración natural y turbo-cargados que operan en condiciones severas tanto de carreteras o fuera de ellas. Los Mobil Delvac Serie 1300 son lubricantes usados en un amplio rango de aplicaciones en donde un aceite monogrado es requerido.",
        category: OIL_CAT.MIN,
        line: OIL_LINES.DIE,
        applications: [
          "Motores diésel que utilizan diseños más viejos y convencionales de aspiración natural",
          "Camiones de servicio pesado en carretera y aplicaciones fuera de carretera, incluyendo transporte, minería, construcción, agrícolas y marinas"
        ],
        benefits: [
          "Excelente protección contra el pegado de los anillos",
          "Excelente control del consumo de aceite"
        ],
        presentations: [PRESEN.CUARTO, PRESEN.GALON, PRESEN.PAILA, PRESEN.TAMBOR],
        specifications: {
          viscosity: null,
          api: ["CF", "SF"],
        }
      },
      {
        id: "mobil-30",
        name: "Mobil Delvac™ Extended life 50/50",
        image: "images/mobil/mobil_delvac_extended_life_50_50.webp",
        type: "Lubricante para motores diésel de servicio pesado turbocargados",
        description: "El refrigerante/anticongelante de vida prolongada y prediluido Mobil Delvac Extended Life 50/50 Prediluted Coolant/Antifreeze es un refrigerante a base de etilenglicol exento de fosfatos, silicatos, nitritos y boratos, listo para usar, que ha sido diseñado para proporcionar una excepcional protección contra la cavitación y la corrosión de todos los metales del sistema de enfriamiento.\nMobil Delvac Extended Life 50/50 Prediluted Coolant/Antifreeze está formulado con inhibidores orgánicos de la corrosión para proporcionar una protección total del sistema de enfriamiento de hasta 1.600.000 kilómetros de uso en carretera (8 años o 20.000 horas de uso fuera de la carretera). Puesto que los inhibidores de corrosión orgánicos no se agotan con facilidad, Mobil Delvac™ Extended Life 50/50 Prediluted Coolant/Antifreeze elimina la necesidad de utilizar aditivos suplementarios para refrigerantes (SCA) que sí se requieren al usar refrigerantes convencionales.\nMobil Delvac Extended Life 50/50 Prediluted Coolant/Antifreeze es una mezcla 50/50 de Mobil Delvac Extended Life Coolant/Antifreeze y agua desionizada.",
        category: OIL_CAT.ETI,
        line: OIL_LINES.ESP,
        applications: [
          "Todo tipo de motores de servicio pesado diesel, de gasolina y de gas natural.",
          "Aplicaciones de motores estacionarios, independientemente del tipo de combustible utilizado.",
          "Sistemas de enfriamiento marino donde se requiere protección contra el congelamiento.",
          "Flotas mixtas donde hay presentes camiones de servicio tanto ligero como pesado."
        ],
        benefits: [
          "Ideal para motores a gasolina y a Diesel en las condiciones más severas. Proporciona protección total de los sistemas de enfriamiento durante 1.600.000 km de uso en carretera (8 años o 20.000 horas de uso fuera de carretera).",
          "Elimina la necesidad de \"aditivos suplementarios para refrigerantes\" (SCA, por su sigla en inglés), los cuales si se requieren al utilizar refrigerantes convencionales."
        ],
        presentations: [PRESEN.GALON, PRESEN.TAMBOR],
        specifications: {
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
        id: "mobil-31",
        name: "Mobil ATF™ D/M",
        image: "images/mobil/mobil_atf_d_m.webp",
        type: "Fluido para transmisión automática",
        description: "Proporciona excelente estabilidad contra la oxidación y la fricción, propiedades antidesgaste, y la fluidez a bajas temperaturas deseada para la mayoría de las transmisiones automáticas.",
        category: OIL_CAT.MIN,
        line: OIL_LINES.TRAN,
        applications: [
          "Recomendado para aplicaciones que requieren: General Motors DEXRON® IIIH Ford MERCON® Allison Transmission C-4",
          "No recomendado para: GM DEXRON® VI, Ford MERCON® V, MERCON LV®, MERCON SP® y Type F ATF",
          "Puede utilizarse como aceite lubricante en compresores de aire rotatorios bajo ciertas condiciones",
          "Buen desempeño a bajas temperaturas",
          "Alta resistencia a la oxidación para cumplir requisitos de servicio en compresores"
        ],
        benefits: [
          "Excelente estabilidad contra la oxidación",
          "Buenas características lubricantes",
          "Propiedades de fricción controladas",
          "Prevención de la corrosión"
        ],
        presentations: [PRESEN.CUARTO, PRESEN.PAILA, PRESEN.TAMBOR],
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
          other: ["ALLISON C- 4 / MERCON / DEXRON IIIH"]
        }
      },
      {
        id: "mobil-32",
        name: "Mobil Super™ 2000 10W-40",
        image: "images/mobil/mobil_super_2000_10w_40.webp",
        type: "Lubricante Mobil para vehículos de pasajeros",
        description: "Aceite mejorado semisintético de calidad premium para motores que cumplen con las más recientes especificaciones de los aceites para motores de la industria. Está diseñado para proporcionar un excelente nivel de protección y desempeño bajo las condiciones más exigentes.",
        category: OIL_CAT.SEMI,
        line: OIL_LINES.GAS,
        applications: [
          "Las más recientes tecnologías de motores de gasolina",
          "Vehículos de pasajeros, camionetas deportivas, camiones ligeros y furgonetas",
          "Conducción en la ciudad con muchas paradas",
          "Condiciones operacionales normales a severas",
          "Turboalimentadores",
          "Motores de alto desempeño"
        ],
        benefits: [
          "Excelente limpieza del motor",
          "Excelente protección a altas temperaturas",
          "Mejora la eficiencia del motor reduciendo el preencendido a bajas revoluciones (LSPI)"
        ],
        presentations: [PRESEN.CUARTO, PRESEN.GALON, PRESEN.TAMBOR],
        specifications: {
          viscosity: "10W-40",
          api: ["SL", "SM", "SN", "SN PLUS", "SP"],
          acea: ["A3/B3"],
          other: ["RESOURCE CONSERVING"]
        },
      },
      {
        id: "mobil-33",
        name: "Mobil Outboard™ Plus 4T 10W-40",
        image: "images/mobil/mobil_outboard_plus_4t_10w_40.webp",
        type: "Aceite de desempeño superior para motores fuera de borda de cuatro tiempos",
        description: "Aceite de alto desempeño para motores de cuatro tiempos que está diseñado para muchos motores de cuatro tiempos de alto rendimiento, refrigerados por agua, y utilizados en aplicaciones marinas fuera de borda.Mobil Outboard Plus ofrece motores limpios y un comportamiento compatible con el medioambiente.",
        category: OIL_CAT.MIN,
        line: OIL_LINES.MOTO,
        applications: [
          "Utilizado en motores modernos de alto rendimiento, refrigerados por agua y de cuatro tiempos.",
          "Uso en motores de cuatro tiempos donde se recomiendan los aceites NMMA FC-W."
        ],
        benefits: [
          "Protección contra los depósitos, la corrosión y el desgaste.",
          "Minimiza las fllas de las bujías y pre-ingnición, fomentando una operación segura."
        ],
        presentations: [PRESEN.CUARTO],
        specifications: {
          viscosity: "10W-40",
          api: ["SL"],
          nmma: ["FC-W"]
        }
      },
      {
        id: "mobil-34",
        name: "Mobil Delvac Legend™ 25W-50 High Mileage",
        image: "images/mobil/mobil_delvac_legend_25w_50.webp",
        type: "Aceite de alto rendimiento para motores diésel",
        description: "Aceite para motores diésel de alto rendimiento y alta viscosidad que proporciona una comprobada protección en motores diésel que operan en aplicaciones de servicio severo. Mobil Delvac 25W-50 High Mileage es recomendado para utilizarse en una amplia gama de aplicaciones de servicio pesado y en los ambientes operativos que se encuentran en las industrias de acarreo en camiones, minera, de la construcción, de explotación de canteras y agrícola.",
        category: OIL_CAT.MIN,
        line: OIL_LINES.DIE,
        applications: [
          "Equipos de fabricantes europeos, japoneses y estadounidenses propulsados por motores diésel de aspiración natural o turboalimentados",
          "Transporte de servicio ligero y pesado por carretera",
          "Industrias fuera de carreteras, entre ellas: construcción, minería, explotación de canteras y agricultura"
        ],
        benefits: [
          "Estabilidad térmica y ante la oxidación",
          "Controla la acumulación de lodos y depósitos",
          "Reserva de TBN",
          "Control de depósitos y neutralización de ácidos",
          "Alta viscosidad y estabilidad ante los esfuerzos de corte que le permite mantenerse en su grado",
          "Menor consumo de aceite, mayor protección contra el desgaste y alta presión de aceite en un amplio rango de temperaturas de operación.",
          "Excelente detergencia/dispersancia",
          "Motores más limpios y una mayor vida útil de estos",
          "Compatibilidad con los componentes",
          "Larga vida útil de las empaquetaduras y sellos"
        ],
        presentations: [PRESEN.PAILA, PRESEN.TAMBOR],
        specifications: {
          viscosity: "25W-50",
          api: ["CF", "SF"],
        }
      },
      {
        id: "mobil-35",
        name: "Mobil™ Dexron-VI ATF",
        image: "images/mobil/mobil_atf_d_m_dexron_VI.webp",
        type: "Fluido para transmisión automática",
        description: "Es una formulación de alto desempeño a base de una mezcla de productos sintéticos que cumple con los rigurosos requisitos de la especificación DEXRON-VI de General Motors y proporciona protección de la garantía para vehículos de General Motors del año 2006 en adelante. También proporciona un desempeño mejorado en vehículos de General Motors más viejos, cuando DEXRON es especificado.",
        category: OIL_CAT.SEMI,
        line: OIL_LINES.TRAN,
        applications: [
          "Brinda protección de la garantía para vehículos GM 2006 y más nuevos."
        ],
        benefits: [
          "Prolongada vida útil del fluido",
          "Mejor estabilidad térmica y ante la oxidación",
          "Propiedades de fricción optimizadas que proporcionan cambios de marcha suaves durante la operación a bajas temperaturas y que ayudan a prevenir la vibración de la transmisión",
          "Excelente resistencia a la formación de lodos y depósitos",
          "Una mejor protección antidesgaste que contribuye a prolongar la vida útil de la transmisión",
          "Sobresaliente desempeño a bajas temperaturas"
        ],
        presentations: [PRESEN.CUARTO],
        specifications: {
          viscosity: "Brookfield 11500",
          api: [],
          acea: [],
          ilsac: [],
          jaso: [],
          iso: [],
          nmma: [],
          oem: ["GM DEXRON-VI"],
          compatibility: ["Compatible con DEXRON IIIH y anteriores, pero no recomendado para vehículos que requieren DEXRON-VI"]
        }
      },
      {
        id: "mobil-36",
        name: "Mobilfluid™ 424",
        image: "images/mobil/mobilfluid_424.webp",
        type: "Lubricante multipropósito para tractores",
        description: "Lubricante multiuso y de extra alto rendimiento para tractores diseñado para cumplir o exceder los requisitos de los fluidos hidráulicos y de transmisión.  La tecnología avanzada de Mobilfluid 424 está diseñada para optimizar el desempeño de los tractores agrícolas y comerciales que operan en una amplia gama de entornos y condiciones.  Mobilfluid 424 combina aceites base selectos y un paquete de aditivos de avanzada tecnología para proporcionar las variadas propiedades de desempeño de los lubricantes que se requieren en los trenes de transmisión de potencia de equipos agrícolas y de construcción en aplicaciones de servicio severo.  Es particularmente adecuado para reducir el chirrido y traqueteo de los frenos húmedos y de las tomas de fuerza.",
        category: OIL_CAT.MIN,
        line: OIL_LINES.TRAN,
        applications: [
          "Transmisiones, diferenciales, mandos finales, sistemas hidráulicos, sistemas de dirección asistida, frenos húmedos, tomas de fuerza y accionamientos hidrostáticos de servicio pesado",
          "Industrias fuera de carretera que incluyen: agricultura, construcción y canteras",
          "Llenado hasta el tope o recarga de sistemas",
          "En aplicaciones de transmisiones comerciales que requieren fluidos Tipo A (Sufijo A), Dexron y Tipo F. No utilizarse en transmisiones automáticas de vehículos de pasajeros",
          "Aplicaciones que requieren lubricantes grado API GL-4 o SAE 80W en todas las aplicaciones de engranajes excepto en los diseños de engranajes hipoides",
          "Excelente reemplazo de aceites de motor recomendados para sistemas hidráulicos y de transmisión"
        ],
        benefits: [
          "Propiedades de fricción mejoradas",
          "Desempeño optimizado en embragues y tomas de fuerza",
          "Mejor control de los chirridos y traqueteos de los frenos húmedos y de las tomas de fuerza",
          "Compatible con los más recientes materiales y elastómeros de los embragues",
          "Mayor vida útil del embrague y menos fugas",
          "Alto índice de viscosidad y estabilidad ante el cizallamiento",
          "Respuesta operativa consistente"
        ],
        presentations: [PRESEN.GALON, PRESEN.PAILA, PRESEN.TAMBOR],
        specifications: {
          viscosity: "4300",
          api: ["GL-4"],
          acea: [],
          ilsac: [],
          jaso: [],
          iso: [],
          nmma: [],
          compatibility: []
        }
      },
      {
        id: "mobil-37",
        name: "Mobil Nuto™ H 68",
        image: "images/mobil/mobil_nuto_h_68.webp",
        type: "Aceite hidráulico",
        description: "Aceite hidráulico antidesgaste de buena calidad destinados a utilizarse en aplicaciones de servicios industriales y móviles que están sometidas a condiciones operativas moderadas y que requieren lubricantes antidesgaste. Su efectiva resistencia a la oxidación y estabilidad química son la base de la buena vida útil de dichos aceites en aplicaciones moderadas y severas.",
        category: OIL_CAT.MIN,
        line: OIL_LINES.IND,
        applications: [
          "Sistemas que utilizan bombas de engranajes, de paletas, radiales y axiales de pistón para los que se requieren características leves de antidesgaste",
          "En situaciones donde la contaminación del aceite hidráulico o las fugas son inevitables",
          "Donde la presencia de pequeñas cantidades de agua es inevitable"
        ],
        benefits: [
          "Buen desempeño antidesgaste que ayuda a reducir el desgaste de las bombas y a prolongar la vida útil de las mismas",
          "Protección contra la corrosión que ayuda a reducir los efectos negativos de la humedad sobre los componentes del sistema",
          "Filtrabilidad para prevenir la obstrucción de los filtros incluso en la presencia de agua"
        ],
        presentations: [PRESEN.PAILA, PRESEN.TAMBOR],
        specifications: {
          viscosity: null,
          api: [],
          acea: [],
          ilsac: [],
          jaso: [],
          iso: ["VG 68"],
          nmma: [],
          compatibility: []
        },
        approvals: [
          "Denison HF-0",
          "Denison HF-1",
          "Denison HF-2"
        ],
        requirements: [
          "ASTM D6158 (Class HM)",
          "DIN 51524-2:2017-06",
          "ISO L-HM (ISO 11158:2023)",
          "Fives Cincinnati P-69"
        ]
      },
      {
        id: "mobil-38",
        name: "Mobil Nuto™ H 46",
        image: "images/mobil/mobil_nuto_h_68.webp",
        type: "Aceite hidráulico",
        description: "Aceite hidráulico antidesgaste de buena calidad destinados a utilizarse en aplicaciones de servicios industriales y móviles que están sometidas a condiciones operativas moderadas y que requieren lubricantes antidesgaste. Su efectiva resistencia a la oxidación y estabilidad química son la base de la buena vida útil de dichos aceites en aplicaciones moderadas y severas.",
        category: OIL_CAT.MIN,
        line: OIL_LINES.IND,
        applications: [
          "Sistemas que utilizan bombas de engranajes, de paletas, radiales y axiales de pistón para los que se requieren características leves de antidesgaste",
          "En situaciones donde la contaminación del aceite hidráulico o las fugas son inevitables",
          "Donde la presencia de pequeñas cantidades de agua es inevitable"
        ],
        benefits: [
          "Buen desempeño antidesgaste que ayuda a reducir el desgaste de las bombas y a prolongar la vida útil de las mismas",
          "Protección contra la corrosión que ayuda a reducir los efectos negativos de la humedad sobre los componentes del sistema",
          "Filtrabilidad para prevenir la obstrucción de los filtros incluso en la presencia de agua"
        ],
        presentations: [PRESEN.PAILA, PRESEN.TAMBOR],
        specifications: {
          viscosity: null,
          api: [],
          acea: [],
          ilsac: [],
          jaso: [],
          iso: ["VG 46"],
          nmma: [],
          compatibility: []
        },
        approvals: [
          "Denison HF-0",
          "Denison HF-1",
          "Denison HF-2"
        ],
        requirements: [
          "ASTM D6158 (Class HM)",
          "DIN 51524-2:2017-06",
          "ISO L-HM (ISO 11158:2023)"
        ]
      },
      {
        id: "mobil-39",
        name: "Mobil Nuto™ H 32",
        image: "images/mobil/mobil_nuto_h_68.webp",
        type: "Aceite hidráulico",
        description: "Aceite hidráulico antidesgaste de buena calidad destinados a utilizarse en aplicaciones de servicios industriales y móviles que están sometidas a condiciones operativas moderadas y que requieren lubricantes antidesgaste. Su efectiva resistencia a la oxidación y estabilidad química son la base de la buena vida útil de dichos aceites en aplicaciones moderadas y severas.",
        category: OIL_CAT.MIN,
        line: OIL_LINES.IND,
        applications: [
          "Sistemas que utilizan bombas de engranajes, de paletas, radiales y axiales de pistón para los que se requieren características leves de antidesgaste",
          "En situaciones donde la contaminación del aceite hidráulico o las fugas son inevitables",
          "Donde la presencia de pequeñas cantidades de agua es inevitable"
        ],
        benefits: [
          "Buen desempeño antidesgaste que ayuda a reducir el desgaste de las bombas y a prolongar la vida útil de las mismas",
          "Protección contra la corrosión que ayuda a reducir los efectos negativos de la humedad sobre los componentes del sistema",
          "Filtrabilidad para prevenir la obstrucción de los filtros incluso en la presencia de agua"
        ],
        presentations: [PRESEN.PAILA, PRESEN.TAMBOR],
        specifications: {
          viscosity: null,
          api: [],
          acea: [],
          ilsac: [],
          jaso: [],
          iso: ["VG 32"],
          nmma: [],
          compatibility: []
        },
        approvals: [
          "Denison HF-0",
          "Denison HF-1",
          "Denison HF-2"
        ],
        requirements: [
          "Fives Cincinnati P-68",
          "ASTM D6158 (Class HM)",
          "DIN 51524-2:2017-06",
          "ISO L-HM (ISO 11158:2023)"
        ]
      },
      {
        id: "mobil-40",
        name: "Mobil 1™ 0W-16",
        image: "images/mobil/mobil_1_0w_16.webp",
        type: "Aceite avanzado totalmente sintético para motores.",
        description: "Mantenga a su motor funcionando con la máxima eficiencia a la vez que mejora la economía de combustible. Diseñado para los motores avanzados e híbridos de hoy en día, el aceite de motor totalmente sintético Mobil 1 Advanced Fuel Economy 0W-16 ayuda a mejorar la economía de combustible* y a prolongar la vida útil del motor en vehículos de cualquier antigüedad. Mobil 1 0W-20 Advanced Fuel Economy utiliza Fórmula de Triple Acción, distintiva de Mobil 1, para ofrecer un rendimiento, una protección y una limpieza extraordinarios a su vehículo. Los componentes especiales en el aceite sintético reducen la fricción y ayudan a prevenir la formación de depósitos y la acumulación de lodo para mantener las piezas críticas del motor limpias y protegidas hasta 16,000 km (10,000 millas) entre cambios de aceite.",
        category: OIL_CAT.SINT,
        line: OIL_LINES.GAS,
        applications: [
          "Mobil 1 0W-16 está recomendado por ExxonMobil para aplicaciones SAE 0W-16 en motores a gasolina e híbridos diseñados para funcionar con aceite para motores de viscosidad SAE 0W-16.",
          "Mobil 1 0W-16 no se recomienda para los motores de 2 tiempos o de aviación, a menos que esté específicamente aprobado por el fabricante. Revise siempre el manual del propietario para determinar el grado de viscosidad del aceite recomendado por el fabricante, la clasificación de servicio API y cualquier aprobación del fabricante.",
          "Se obtiene una mejora potencial en la economía de combustible al cambiar aceites de mayor viscosidad a un grado de viscosidad más bajo. Los ahorros reales dependen del tipo de vehículo/motor, la temperatura exterior, el tipo de conducción, las condiciones de la carretera y la viscosidad de su actual aceite de motor.",
          "Protege hasta 16,000 km (10,000 millas) o 1 año, lo que ocurra primero. Para mayor información acerca de la Garantía Limitada de Mobil 1, visítenos en Mobil.US."
        ],
        benefits: [
          "El aceite de motor totalmente sintético Mobil 1 Advanced Fuel Economy 0W-16 tiene una baja viscosidad para ayudar a mejorar la economía de combustible*.",
          "Utiliza la Fórmula de Triple Acción», distintiva de Mobil 1, para ofrecer un rendimiento, una protección y una limpieza extraordinarios del motor.",
          "Ayuda a proteger las partes críticas del motor durante hasta 16 000 km (10 000 millas) entre cambios de aceite,** controlando la oxidación para prevenir la degradación del aceite y manteniendo una viscosidad óptima.",
          "Cumple con las normas ILSAC GF-6 para ayudar a proporcionar una protección contra la preignición a bajas velocidades (LSPI) y el desgaste de la cadena de distribución, a la vez que mantiene a su motor limpio.",
          "Ayuda a prolongar la vida del motor, al prevenir la formación de depósitos dañinos y la acumulación de lodos.",
          "Proporciona una excelente protección contra el calor interno del motor hasta 260°C (500°F) y contra las bajas temperaturas hasta -40°C (-40°F)."
        ],
        presentations: [PRESEN.CUARTO, `5x ${PRESEN.CUARTO}`],
        specifications: {
          viscosity: "0W-16",
          api: ["SP"],
          ilsac: ["GF-6B"]
        }
      },
      {
        id: "mobil-41",
        name: "Mobil 1™ 5W-20",
        image: "images/mobil/mobil_1_5w_20.webp",
        type: "Aceite avanzado totalmente sintético para motores.",
        description: "Avanzado aceite completamente sintético para motores diseñado para brindar una excelente protección al motor con el fin de que éste siga funcionando como nuevo y para proteger las piezas críticas del motor hasta 16.000 kilómetros entre cambios de aceite.* Mobil 1 5W-20 cumple o excede los estándares más exigentes de la industria y supera a nuestros aceites de mezcla convencionales y sintéticos. La tecnología Mobil 1™ de aceites sintéticos para motores viene como equipo estándar en muchos vehículos diferentes, incluyendo ciertos vehículos de alto desempeño.",
        category: OIL_CAT.SINT,
        line: OIL_LINES.GAS,
        applications: [
          "Está recomendado por ExxonMobil para todo tipo de vehículo moderno con motor de gasolina, incluyendo motores de alto rendimiento turboalimentados y sobrealimentados con multiválvulas y con inyección de combustible usados en automóviles de pasajeros, vehículos deportivos utilitarios (SUV), y furgonetas y camiones ligeros.",
          "Aceite de motor de alto rendimiento para todo tipo de automóviles para los que se recomienda esta viscosidad",
          "No se recomienda para los motores de 2 tiempos o de aviación, a menos que esté específicamente aprobado por el fabricante."
        ],
        benefits: [
          "Avanzada fórmula completamente sintética",
          "Mantiene al motor funcionando como nuevo",
          "Sobresaliente estabilidad térmica y ante la oxidación",
          "Protege hasta 16.000 kilómetros entre cambios de aceite*.",
          "Excepcionales capacidades a bajas temperaturas",
          "Arranque rápido y una protección rápida en climas fríos ayuda a prolongar la vida del motor"
        ],
        presentations: [PRESEN.CUARTO],
        specifications: {
          viscosity: "5W-20",
          api: ["SP"],
          ilsac: ["GF-6A"]
        }
      },
      {
        id: "mobil-42",
        name: "Mobil 1™ 5W-30",
        image: "images/mobil/mobil_1_5w_30.webp",
        type: "Aceite avanzado totalmente sintético para motores",
        description: "El avanzado aceite sintético para motores Mobil 1 utiliza la emblemática Fórmula de Triple Acción de Mobil 1 para ofrecer un excelente rendimiento, protección y limpieza del motor a vehículos de todas las edades. Los componentes especiales en el aceite sintético prolongan la vida del motor al reducir la fricción que causa la acumulación de depósitos y lodos, lo cual mantiene a las piezas críticas del motor limpias y protegidas hasta 10.000 millas entre cambios de aceite.",
        category: OIL_CAT.SINT,
        line: OIL_LINES.GAS,
        applications: [
          "Aceite de motor de alto desempeño para todo tipo de automóviles para los que se recomienda esta viscosidad",
          "No se recomienda para los motores de 2 tiempos o de aviación, a menos que esté específicamente aprobado por el fabricante."
        ],
        benefits: [
          "Ayuda a proteger las piezas críticas del motor hasta 10.000 millas entre cambios de aceite, al controlar la oxidación de manera de evitar la descomposición del aceite y mantener una excelente viscosidad.",
          "Cumple con las normas ILSAC GF-6 que ayudan a proporcionar una protección contra el preencendido a bajas velocidades (LSPI) y el desgaste de la cadena de distribución, a la vez que mantiene a su motor limpio y ayuda a mejorar su economía de combustible.",
          "Ayuda a prolongar la vida del motor al prevenir los depósitos dañinos y la acumulación de lodos",
          "Proporciona una excelente protección contra el calor interno del motor (hasta 500 grados F) y contra las bajas temperaturas (hasta -30 grados F)"
        ],
        presentations: [PRESEN.CUARTO],
        specifications: {
          viscosity: "5W-30",
          api: ["SP"],
          ilsac: ["GF-6A"]
        }
      },
      {
        id: "mobil-43",
        name: "Mobil 1™ 10W-30",
        image: "images/mobil/mobil_1_10w_30.webp",
        type: "Aceite avanzado totalmente sintético para motores",
        description: "Aceite para motores totalmente sintético diseñado para ayudar a proporcionar una excelente protección del motor con el fin de mantenerlo funcionando como nuevo y proteger las piezas críticas del motor hasta 16.000 kilómetros entre cambios de aceite*. Mobil 1 10W-30 cumple o excede los estándares más exigentes de la industria y brinda un desempeño superior al de nuestras mezclas de aceites convencionales y sintéticos. La tecnología Mobil 1™ de aceites sintéticos para motores viene como equipo estándar en muchos vehículos diferentes, incluyendo ciertos vehículos de alto rendimiento",
        category: OIL_CAT.SINT,
        line: OIL_LINES.GAS,
        applications: [
          "Aceite de motor de alto desempeño para todo tipo de automóviles para los que se recomienda esta viscosidad",
          "No se recomienda para los motores de 2 tiempos o de aviación, a menos que esté específicamente aprobado por el fabricante."
        ],
        benefits: ["Avanzada fórmula completamente sintética",
          "Mantiene al motor funcionando como nuevo",
          "Sobresaliente estabilidad térmica y ante la oxidación",
          "Protege hasta 16.000 kilómetros entre cambios de aceite*.",
          "Excelente desempeño a bajas temperaturas",
          "Arranque rápido y una protección rápida en climas fríos ayuda a prolongar la vida del motor"],
        presentations: [PRESEN.CUARTO],
        specifications: {
          viscosity: "10W-30",
          api: ["SP"],
          ilsac: ["GF-6A"]
        }
      },
      {
        id: "mobil-44",
        name: "Mobil 1™ FS 0W-40",
        image: "images/mobil/mobil_1_fs_0w_40.webp",
        type: "Aceite avanzado para motores totalmente sintético",
        description: "El avanzado aceite para motores totalmente sintético Mobil™ 1 FS 0W-40 está diseñado para las más modernas tecnologías de motores de gasolina y diésel (sin filtros de partículas) y ofrece un excelente desempeño integral. Proporciona un poder de limpieza y una protección contra el desgaste excepcionales. Mobil™ 1 FS 0W-40 mantiene el motor funcionando como nuevo bajo todas las condiciones de conducción.",
        category: OIL_CAT.SINT,
        line: OIL_LINES.GAS,
        applications: [
          "Las últimas tecnologías de motores, incluso turbo­cargadores, inyección directa, diésel (sin filtros para partículas) e híbridos.",
          "Motores de alto desempeño.",
          "Casi todas las condiciones de operación, desde moderadas hasta extremas"
        ],
        benefits: [
          "Cumple o supera las más recientes normas de los fabricantes de equipos originales (OEM) y de la industria.",
          "Proporciona un desempeño general excelente",
          "Tiene excelentes propiedades a baja temperatura para brindar una protección rápida del motor durante el arranque",
          "Tiene propiedades de fricción mejoradas que ayudan a ahorrar combustible",
          "Ofrece una protección rápida para reducir el desgaste del motor y la formación de depósitos, incluso bajo las condiciones de conducción más extremas",
          "Proporciona una excepcional potencia de limpieza para los motores sucios"
        ],
        presentations: [PRESEN.CUARTO],
        specifications: {
          viscosity: "0W-40",
          api: ["SP"],
          ilsac: []
        }
      }
    ]
  },
  vp_racing: {
    brand: BRANDS.vp_racing,
    categories: [
      OIL_CAT.SINT,
      "Motocicleta",
      "Servicio Pesado - Diésel",
      "Aceites de Transmisión"
    ],
    products: // PRESEN enum reference:
      // PAILA  = 'PAILA (5 gl)'       ~18.93 L
      // GALON  = 'Galón'              ~3.785 L
      // MEDIO  = 'Medio Galón'        ~1.893 L
      // CUARTO = 'Cuarto (1/4 gl)'    ~0.946 L
      // PINTA  = 'Pinta (1/8 gl)'     ~0.473 L
      // TAMBOR = 'Tambor (55 gl)'     ~204 L

      [
        {
          id: "29507",
          name: "VP Octanium® Unleaded",
          type: "Aditivo para gasolina",
          description: "Potenciador de octanaje para gasolina sin plomo. Aumenta el octanaje de la gasolina hasta 7 números (70 puntos). Seguro para uso limitado en automóviles y camionetas con sensores de oxígeno y convertidores catalíticos. Mejora la respuesta del acelerador y la aceleración. Una botella de 32 oz (0.946 L) trata hasta 10 galones (38 litros).",
          benefits: [
            "Aumenta el octanaje hasta 7 números (70 puntos)",
            "Seguro con convertidores catalíticos",
            "Seguro con sensores O2",
            "Elimina golpeteos y vibraciones",
            "Sustituto de plomo",
            "Limpia los inyectores de combustible",
            "Mejora la respuesta del acelerador y la aceleración",
            "Elimina la acumulación de goma y barniz"
          ],
          specifications: {
            "has_lead": false,
            "octane_boost": "+7 números (70 puntos)",
            "treat_rate": "1 botella (0.946 L) trata hasta 38 L de gasolina",
            "safe_for_catalytic_converter": true,
            "safe_for_o2_sensors": true,
            "compatible_with": "Motores gasolina 2 y 4 tiempos",
            "proportion_maintenance": "1:260 litros",
            "proportion_activation": "1:38 litros"
          },
          presentations: ["CUARTO"],
          "summary": "Elevador de octanaje sin plomo para gasolina de calle. El más potente de su categoría con hasta +7 números de octanaje, compatible con catalizadores y sensores O2."
        },
        {
          id: "2857",
          name: "VP Octanium®",
          type: "Aditivo para gasolina",
          description: "Potenciador de octanaje de gasolina de alto rendimiento formulado para aplicaciones de carreras todoterreno. Ofrece un aumento de octanaje de hasta 8 números (80 puntos). Una lata de 32 oz (0.946 L) trata hasta 38 litros de combustible. No es seguro para uso en vehículos con convertidores catalíticos ni sensores O2.",
          benefits: [
            "Da un impulso de alto octanaje de hasta 8 números (80 puntos)",
            "Aumenta la potencia",
            "Elimina golpes y pings",
            "Mejora la respuesta del acelerador y la aceleración",
            "Limpia los inyectores de combustible",
            "Elimina la acumulación de goma y barniz",
            "NO seguro para convertidores catalíticos y sensores O2"
          ],
          specifications: {
            "has_lead": true,
            "octane_boost": "+8 números (80 puntos)",
            "treat_rate": "1 botella (0.946 L) trata hasta 38 L de gasolina",
            "safe_for_catalytic_converter": false,
            "safe_for_o2_sensors": false,
            "compatible_with": "Motores gasolina todoterreno y carreras",
            "proportion_maintenance": "1:260 litros",
            "proportion_activation": "1:38 litros"
          },
          presentations: ["CUARTO"],
          "summary": "Elevador de octanaje con plomo para uso todoterreno y carreras. Mayor potencia que el Unleaded (+8 números), pero no apto para vehículos con catalizador."
        },
        {
          id: "28556",
          name: "Octane Booster",
          type: "Aditivo para gasolina",
          description: "Elevador de octanaje sin plomo para vehículos compactos y motos. Formulado para proporcionar un aumento de octanaje de hasta 5 números (50 puntos). Seguro para uso limitado en automóviles y camionetas con convertidores catalíticos y sensores de O2.",
          benefits: [
            "Aumenta el octanaje hasta 5 números completos",
            "Mejora la respuesta del acelerador y la aceleración",
            "Elimina golpes y pings",
            "Seguro para sensores de O2",
            "Limpia los inyectores de combustible",
            "Reduce la acumulación de goma y barniz"
          ],
          specifications: {
            "has_lead": false,
            "octane_boost": "+5 números (50 puntos)",
            "treat_rate": "1 botella (0.473 L) trata hasta 38 L (activación)",
            "safe_for_catalytic_converter": true,
            "safe_for_o2_sensors": true,
            "compatible_with": "Vehículos compactos, motos, gasolina sin plomo",
            "proportion_maintenance": "1:260 litros",
            "proportion_activation": "1:38 litros"
          },
          presentations: ["PINTA"],
          "summary": "Potenciador de octanaje compacto sin plomo, ideal para motos y autos pequeños. Compatible con catalizadores y sensores O2, con un incremento de hasta +5 números."
        },
        {
          id: "2849",
          name: "Fuel Treatment VP 7 in 1",
          type: "Aditivo limpiador de combustible / gasolina",
          description: "Tratamiento de gasolina avanzado para automóviles, camiones y más. Seguro en cualquier motor de gasolina de 2 o 4 tiempos. Limpia, lubrica y elimina depósitos de la cámara de combustión. Mantiene inyectores, pistones y válvulas en óptimas condiciones. Una botella de 16 oz (0.473 L) trata hasta 75 L de gasolina.",
          benefits: [
            "Más caballos de fuerza y torque",
            "Aumenta el octanaje",
            "Limpia inyectores y carburadores",
            "Inhibidor de separación de fases que elimina el agua",
            "Agrega lubricación",
            "61% de limpieza mejorada vs. componentes sin tratar",
            "Reduce las emisiones nocivas"
          ],
          specifications: {
            "has_lead": false,
            "treat_rate": "1 botella (0.473 L) trata hasta 75 L de gasolina",
            "safe_for_catalytic_converter": true,
            "safe_for_o2_sensors": true,
            "compatible_with": "Motores gasolina 2 y 4 tiempos, carretera y todoterreno",
            "cleaning_improvement": "61% vs. componentes sin tratar",
            "proportion_maintenance": "1:600 litros",
            "proportion_activation": "1:140 litros"
          },
          presentations: ["PINTA"],
          "summary": "Tratamiento integral 7 en 1 para gasolina. Limpia, lubrica y mejora el rendimiento en motores de 2 y 4 tiempos, eliminando agua, depósitos y aumentando el octanaje."
        },
        {
          id: "2807",
          name: "Fuel System Cleaner with RP21",
          type: "Aditivo limpiador de combustible / gasolina",
          description: "Aditivo de gasolina premium con detergente PEA (Poliéteramina) avanzado que limpia todo el sistema de combustible, incluidos pistones, anillos, válvulas e inyectores. Ideal para automóviles, camiones, barcos y motocicletas. Una botella de 16 oz (0.473 L) sirve hasta un tanque o 20 galones (76 L), para un máximo de 5000 millas (8.000 km).",
          benefits: [
            "Limpia y restaura carburadores, inyectores, anillos, válvulas de admisión y cámara de combustión",
            "Protege contra los efectos nocivos del Etanol y el agua",
            "Arranques más fáciles y aceleración más rápida",
            "Reduce las emisiones",
            "Agrega lubricación",
            "Incluye inhibidores de corrosión",
            "Mejora del 30% en corrosión, estabilidad y limpieza vs. competidores",
            "Mejora el rendimiento de la gasolina"
          ],
          specifications: {
            "has_lead": false,
            "detergent_type": "PEA (Poliéteramina)",
            "treat_rate": "1 botella (0.473 L) trata hasta 76 L / 5.000 km",
            "safe_for_catalytic_converter": true,
            "safe_for_o2_sensors": true,
            "compatible_with": "Automóviles, camiones, barcos, motocicletas",
            "performance_vs_competition": "+30% en corrosión, estabilidad y limpieza",
            "proportion_maintenance": "1:600 litros",
            "proportion_activation": "1:140 litros"
          },
          presentations: ["PINTA"],
          "summary": "Limpiador profundo del sistema de combustible con tecnología PEA. Protege contra el etanol, reduce emisiones y restaura la potencia del motor. Uso cada 5.000 km."
        },
        {
          id: "2817",
          name: "Fuel Stabilizer With Ethanol Armor®",
          type: "Aditivo estabilizador de combustible / gasolina",
          description: "Estabilizador de combustible con protección contra el Etanol. Funciona hasta por tres años (vs. 12-24 meses de la competencia). Protege motores de gasolina de 2 y 4 tiempos. Una botella de 8 oz (0.273 L) trata hasta 80 galones (303 L) de gasolina.",
          benefits: [
            "Hasta 1-2 años adicionales de estabilidad vs. competidores",
            "Mantiene los motores limpios y al máximo rendimiento",
            "Garantiza arranques fáciles",
            "Mantiene la frescura del combustible",
            "Protege y previene reparaciones costosas del motor",
            "Reduce el calor del motor",
            "Compatible con todos los motores de gasolina de 4 y 2 tiempos",
            "Previene formación de gomas y barnices"
          ],
          specifications: {
            "has_lead": false,
            "stability_duration": "Hasta 3 años",
            "treat_rate": "1 oz (30 ml) por 1 galón (3.785 L) de combustible",
            "safe_for_catalytic_converter": true,
            "safe_for_o2_sensors": true,
            "compatible_with": "Motores gasolina 2 y 4 tiempos, motos, generadores, equipos portátiles",
            "proportion": "1:1280 litros",
            "coverage_per_bottle": "303 L por envase de 8 oz"
          },
          presentations: ["PINTA"],
          "summary": "Estabilizador de gasolina de larga duración (hasta 3 años) con protección especial anti-etanol. Ideal para vehículos, motos, cortadoras y equipos de almacenamiento prolongado."
        },
        {
          id: "1862",
          name: "X98 Ethanol",
          type: "Combustible de alto rendimiento / Etanol",
          description: "Combustible a base de etanol de máxima calidad con 111 octanos. Compuesto por 98% de etanol y 2% de combustible de alto contenido energético. No es recomendable dejarlo por tiempo prolongado en el tanque. Se recomienda usar inyectores, tuberías y bombas compatibles con alcohol.",
          benefits: [
            "RON+MON/2: 111.5 Octanos",
            "No contiene plomo",
            "Se puede utilizar en mezclas",
            "Puede ser utilizado en vehículos modificados",
            "Oxigenado 34.73%, Mezcla 8.98% (Aire-Combustible)"
          ],
          specifications: {
            "has_lead": false,
            "octane_rating": "111.5 (RON+MON/2)",
            "ethanol_content": "98%",
            "oxygenation": "34.73%",
            "air_fuel_ratio": "8.98:1",
            "long_term_storage": false,
            "requires_alcohol_compatible_components": true,
            "compatible_with": "Vehículos modificados para etanol"
          },
          presentations: ["PAILA"],
          "summary": "Etanol de carrera de altísima pureza (98% E) con 111.5 octanos. Para vehículos modificados. Requiere componentes compatibles con alcohol y no debe almacenarse prolongadamente."
        },
        {
          id: "41814",
          name: "X85V",
          type: "Combustible de alto rendimiento / Etanol",
          description: "Equivalente estable al E85 americano, con 85% de etanol y 15% de combustible de alto contenido energético. Mayor consistencia que el E85 de calle. Para vehículos modificados. No recomendable dejarlo prolongado en el tanque.",
          benefits: [
            "RON+MON/2: 101.6 Octanos",
            "No contiene plomo",
            "Se puede utilizar en mezclas",
            "Puede ser utilizado en vehículos modificados",
            "Oxigenado 30.03%, Mezcla 9.81 (Aire-Combustible)",
            "Dosis recomendada: 5% del volumen del tanque (mín. 1 L, máx. 10%)"
          ],
          specifications: {
            "has_lead": false,
            "octane_rating": "101.6 (RON+MON/2)",
            "ethanol_content": "85%",
            "oxygenation": "30.03%",
            "air_fuel_ratio": "9.81:1",
            "long_term_storage": false,
            "requires_alcohol_compatible_components": true,
            "recommended_dose": "5% del volumen del tanque",
            "min_dose": "1 L",
            "max_dose": "10% del volumen del tanque",
            "compatible_with": "Vehículos modificados E85 / Flex"
          },
          presentations: ["GALON"],
          "summary": "Combustible E85 de composición estable para vehículos modificados. Mayor consistencia que el E85 americano, con 101.6 octanos y sin plomo."
        },
        {
          id: null,
          name: "X85",
          type: "Combustible de alto rendimiento / Etanol",
          description: "Combustible con mezcla de 85% de etanol y 15% de hidrocarburos de primera calidad. Consistente siempre, a diferencia del E85 americano. Diseñado para carreras de resistencia, circuitos, rallyes en carretera y todoterreno.",
          benefits: [
            "RON+MON/2: 101.6 Octanos",
            "No contiene plomo",
            "Se puede utilizar en mezclas",
            "Puede ser utilizado en vehículos modificados",
            "Oxigenado 30.03%, Mezcla 9.81 (Aire-Combustible)"
          ],
          specifications: {
            "has_lead": false,
            "octane_rating": "101.6 (RON+MON/2)",
            "ethanol_content": "85%",
            "oxygenation": "30.03%",
            "air_fuel_ratio": "9.81:1",
            "long_term_storage": false,
            "requires_alcohol_compatible_components": true,
            "use_case": "Carreras de resistencia, circuitos, rally carretera y todoterreno",
            "compatible_with": "Vehículos modificados"
          },
          presentations: ["PAILA"],
          "summary": "Combustible de carrera base etanol (85%) para pista y rally. Más consistente que el E85 de calle, con 101.6 octanos, sin plomo."
        },
        {
          id: "6402",
          name: "C9",
          type: "Combustible de alto rendimiento / Gasolina sin plomo",
          description: "Combustible de carrera sin plomo formulado para complementar el C10. Alternativa económica con mayor resistencia a la detonación. Sin etanol, excelente para almacenamiento a largo plazo. No daña convertidores catalíticos ni sensores O2. Elegido como combustible oficial en varias series de carreras en Norteamérica.",
          benefits: [
            "R+M/2: 96.8 Octanos",
            "No contiene etanol (ideal para almacenamiento prolongado)",
            "No contiene oxigenación",
            "No contiene plomo",
            "No requiere entonación ni modificaciones",
            "Puede ser utilizado de forma pura",
            "No daña convertidores catalíticos ni sensores O2"
          ],
          specifications: {
            "has_lead": false,
            "octane_rating": "96.8 (R+M/2)",
            "ethanol_content": "0%",
            "oxygenation": "0%",
            "safe_for_catalytic_converter": true,
            "safe_for_o2_sensors": true,
            "long_term_storage": true,
            "requires_tuning": false,
            "compatible_with": "Motores sin plomo de carrera, uso puro o en mezcla"
          },
          presentations: ["PAILA", "TAMBOR"],
          "summary": "Gasolina de carrera sin plomo y sin etanol de 96.8 octanos. Económica, apta para almacenamiento prolongado, no requiere modificaciones al motor y es segura para catalizadores."
        },
        {
          id: "1122",
          name: "C12",
          type: "Combustible de alto rendimiento / Gasolina",
          description: "Considerado el mejor combustible de carreras jamás fabricado. Recomendado para relaciones de compresión de hasta 15:1, satisface el 75% de los motores de carrera actuales. También es el mejor combustible de dos tiempos para todos los usos, incluidos motores refrigerados por aire.",
          benefits: [
            "R+M/2: 110.5 Octanos",
            "Recomendado para compresiones hasta 15:1",
            "Para mejores resultados se recomienda entonación",
            "Mezcla 14.79 (Aire-Combustible)",
            "Puede ser utilizado en motores de lancha",
            "Ideal para motores de 2 tiempos (nuevos y antiguos)"
          ],
          specifications: {
            "has_lead": true,
            "octane_rating": "110.5 (R+M/2)",
            "max_compression_ratio": "15:1",
            "air_fuel_ratio": "14.79:1",
            "requires_tuning": true,
            "compatible_with": "Pista circular, carretera, motores 2 tiempos, lanchas",
            "use_case": "75% de los motores de carrera actuales"
          },
          presentations: ["PAILA", "TAMBOR"],
          "summary": "El combustible de carrera por excelencia de VP. Con plomo, 110.5 octanos, para motores de alta compresión (hasta 15:1), pista circular, carretera y motores de 2 tiempos."
        },
        {
          id: "1162",
          name: "C16",
          type: "Combustible de alto rendimiento / Gasolina",
          description: "Combustible de carrera con plomo y 120 octanos, estándar de rendimiento vigente hasta hoy. Para carreras de resistencia. Apto para motores turboalimentados, sobrealimentados y aplicaciones nitrosas con compresión de hasta 17:1. Una de las mezclas más populares de VP.",
          benefits: [
            "RON+MON/2: 120 Octanos",
            "Apto para motores turbo, supercargados y con nitro",
            "Compresión hasta 17:1",
            "Mezcla 14.70 (Aire-Combustible)",
            "Se puede utilizar con nitro"
          ],
          specifications: {
            "has_lead": true,
            "octane_rating": "120 (RON+MON/2)",
            "max_compression_ratio": "17:1",
            "air_fuel_ratio": "14.70:1",
            "nitro_compatible": true,
            "requires_tuning": true,
            "compatible_with": "Motores turbo, supercargados, nitro, resistencia"
          },
          presentations: ["PAILA", "TAMBOR"],
          "summary": "Combustible de carrera de resistencia con el mayor octanaje de la gama (120). Con plomo, para motores extremos: turbo, supercargado, nitro y compresiones hasta 17:1."
        },
        {
          id: "2372",
          name: "Performance Unleaded REG",
          type: "Combustible de alto rendimiento / Gasolina sin plomo",
          description: "Combustible de carrera sin plomo con 100.1 octanos. Funciona bien en las mismas aplicaciones que el MS100. Apto para carros turbos y supercargados. Baja oxigenación (2.56%).",
          benefits: [
            "RON+MON/2: 100.1 Octanos",
            "No contiene plomo",
            "Apto para vehículos turbos y supercargados",
            "Combustible con baja oxigenación (2.56%)",
            "Mezcla 13.74 (Aire-Combustible)"
          ],
          specifications: {
            "has_lead": false,
            "octane_rating": "100.1 (RON+MON/2)",
            "oxygenation": "2.56%",
            "air_fuel_ratio": "13.74:1",
            "safe_for_catalytic_converter": false,
            "compatible_with": "Motores turbo y supercargados de carrera",
            "equivalent_to": "MS100"
          },
          presentations: ["PAILA", "TAMBOR"],
          "summary": "Gasolina de carrera sin plomo de 100 octanos para turbos y supercargados. Alternativa limpia al MS100, con baja oxigenación y rendimiento de alto nivel."
        },
        {
          id: "1802",
          name: "M1 Methanol",
          type: "Combustible de alto rendimiento / Metanol",
          description: "Combustible de metanol de pureza mínima del 99.95%, la más alta disponible en Estados Unidos. Mantiene el motor más frío y reduce la corrosión vs. mezclas estándar. Envasado en tambores revestidos para evitar óxido y depósitos metálicos.",
          benefits: [
            "RON+MON/2: 101.6 Octanos",
            "Pureza mínima 99.95%",
            "Mantiene el motor frío",
            "Menor corrosión vs. mezclas estándar",
            "Recomendado para sistema de metanol",
            "Se recomienda usar inyectores, tuberías y bombas para alcohol",
            "Altamente oxigenado: 49.93%, Mezcla 6.45 (Aire-Combustible)"
          ],
          specifications: {
            "has_lead": false,
            "octane_rating": "101.6 (RON+MON/2)",
            "methanol_purity": "99.95% mínimo",
            "oxygenation": "49.93%",
            "air_fuel_ratio": "6.45:1",
            "long_term_storage": false,
            "requires_alcohol_compatible_components": true,
            "packaging_note": "Tambores revestidos anti-óxido y anti-corrosión",
            "compatible_with": "Carreras legales con metanol"
          },
          presentations: ["PAILA"],
          "summary": "Metanol de carrera de máxima pureza (99.95%). Mantiene el motor frío, reduce la corrosión y es ideal para toda competencia legal que permita metanol."
        },
        {
          id: "2836",
          name: "Diesel All-In-One",
          type: "Aditivo acondicionador de combustible / Diésel",
          description: "Acondicionador de combustible diésel todo en uno. Limpia el sistema de combustible, bombas e inyectores, restaura la energía, aumenta el cetano, reemplaza la lubricación perdida, protege en climas fríos y reduce el humo. Incluye aditivo anti gel para invierno. Compatible con biodiesel.",
          benefits: [
            "Aumenta el cetano y reemplaza la pérdida de lubricación",
            "Limpia inyectores y bombas",
            "Disminuye el consumo de combustible",
            "Reduce el humo",
            "Restaura la potencia y el rendimiento",
            "Mejora la estabilidad del combustible",
            "Incluye aditivo anti gel para climas fríos",
            "Limpia los depósitos de lodos",
            "Dispersa el agua, reduciendo contaminación",
            "Catalizador de combustible sintético"
          ],
          specifications: {
            "has_lead": false,
            "anti_gel": true,
            "biodiesel_compatible": true,
            "treat_rate_pinta": "1 tanque de combustible (0.473 L)",
            "treat_rate_medio": "hasta 908 L / 240 gal (0.710 L)",
            "treat_rate_galon": "hasta 2.423 L / 640 gal (1.893 L)",
            "proportion": "1:1280 litros",
            "compatible_with": "Diésel, biodiesel, motores diésel de carretera y todoterreno"
          },
          presentations: ["PINTA", "MEDIO", "GALON"],
          "summary": "El aditivo todo en uno para diésel: limpia, lubrica, aumenta el cetano, protege del frío y reduce el humo. El más completo y versátil de la línea diésel, en varios tamaños."
        },
        {
          id: null,
          name: "VP Cetanium®",
          type: "Aditivo elevador de cetano / Diésel",
          description: "Potenciador de cetano para diésel que aumenta el cetano hasta 10 números. Diseñado para motores de carreras diésel todoterreno. Mejora potencia, rendimiento de combustible, reemplaza lubricación perdida, elimina lodos y depósitos, y reduce el humo. Una lata de 32 oz (0.946 L) trata 10 galones (38 L) al máximo, o hasta 20 galones (76 L) para +5 números.",
          benefits: [
            "Aumenta el cetano hasta 10 números",
            "Aumenta la potencia",
            "Limpia inyectores y bombas",
            "Optimiza el consumo de combustible",
            "Previene lodos y depósitos",
            "Protección para aplicaciones de biodiesel",
            "Reduce el humo",
            "Reemplaza la lubricación perdida"
          ],
          specifications: {
            "has_lead": false,
            "cetane_boost": "+10 números",
            "treat_rate_full": "0.946 L trata 38 L (+10 números de cetano)",
            "treat_rate_half": "0.946 L trata 76 L (+5 números de cetano)",
            "biodiesel_compatible": true,
            "compatible_with": "Diésel y biodiesel, motores todoterreno y de carrera"
          },
          presentations: ["CUARTO"],
          "summary": "Potenciador de cetano diésel de máximo rendimiento (+10 números). Aumenta potencia, optimiza consumo, limpia inyectores y es compatible con biodiesel. Para uso todoterreno."
        },
        {
          id: "VP6015016",
          name: "VP Ultra Power™ Gold ELC Antifreeze & Coolant",
          type: "Refrigerante de motor / Gasolina",
          description: "Anticongelante y refrigerante de vida extendida con tecnología patentada de inhibidores de ácidos poliorgánicos. Fórmula HOAT (ácido orgánico híbrido). Protege acero, aluminio, fundición, cobre, latón y soldadura. Elimina la necesidad de aditivos refrigerantes suplementarios (SCA). Pre-diluido 50/50.",
          benefits: [
            "Protección total del sistema de enfriamiento",
            "Cumple y supera estándares universales para refrigerantes automotrices y de servicio pesado",
            "Protección contra corrosión en múltiples metales",
            "Intervalos de servicio prolongados",
            "Elimina la necesidad de aditivos suplementarios (SCA)",
            "Minimiza costos de mantenimiento"
          ],
          specifications: {
            "has_lead": false,
            "formula_type": "HOAT (Hybrid Organic Acid Technology)",
            "prediluted": "50/50",
            "protected_metals": ["Acero", "Aluminio", "Fundición", "Cobre", "Latón", "Soldadura"],
            "service_interval": "6 años / 600.000 millas",
            "requires_sca": false,
            "compatible_with": "Vehículos a gasolina, automotrices y servicio pesado"
          },
          presentations: ["GALON"],
          "summary": "Refrigerante HOAT de vida extendida para vehículos a gasolina. Protege todos los metales del sistema, sin necesidad de aditivos extra, con intervalos de servicio largos."
        },
        {
          id: "VP6025016",
          name: "VP Ultra Power™ Red ELC Antifreeze & Coolant",
          type: "Refrigerante de motor / Diésel (servicio pesado)",
          description: "Anticongelante y refrigerante de servicio pesado con inhibidor NOAT/HOAT patentado. Para semirremolques diésel, equipos de construcción y agrícolas. Protege camisas de cilindros con camisa húmeda contra picaduras y cavitación. Permite intervalos de servicio prolongados y elimina el uso de SCA.",
          benefits: [
            "Inhibidor NOAT/HOAT patentado",
            "Protección superior contra corrosión en múltiples metales",
            "Protege camisas de cilindros húmedas contra picaduras y cavitación",
            "Intervalos de servicio prolongados",
            "Elimina la necesidad de SCA",
            "Minimiza costos de mantenimiento",
            "Extiende la vida útil del equipo"
          ],
          specifications: {
            "has_lead": false,
            "formula_type": "NOAT/HOAT (Nitrited Hybrid Organic Acid Technology)",
            "prediluted": "50/50",
            "protected_metals": ["Acero", "Aluminio", "Hierro fundido", "Cobre", "Latón", "Soldadura"],
            "wet_sleeve_protection": true,
            "service_interval": "6 años / 600.000 millas",
            "requires_sca": false,
            "compatible_with": "Semirremolques diésel, maquinaria de construcción y agrícola"
          },
          presentations: ["GALON"],
          "summary": "Refrigerante NOAT/HOAT para motores diésel de servicio pesado. Específico para semirremolques, maquinaria de construcción y agrícola. Máxima protección contra cavitación y corrosión."
        },
        {
          id: "VP7910020",
          name: "VP Powersports Lubricante de Cadena Aerosol",
          type: "Lubricante / Motocicleta y vehículo todo terreno",
          description: "Lubricante para cadenas en aerosol que penetra profundamente y recubre la cadena para brindar protección duradera. Fórmula avanzada que repele la suciedad y protege la cadena de los elementos. Perfecto para uso dentro y fuera de carretera.",
          benefits: [
            "Fórmula clara que no deja bultos",
            "Diseñado para repeler, no para acumular suciedad",
            "Perfecto para uso dentro y fuera de carretera"
          ],
          specifications: {
            "has_lead": false,
            "format": "Aerosol",
            "net_weight": "13 oz (369 g)",
            "dirt_repellent": true,
            "residue_free": false,
            "compatible_with": "Cadenas de rodillos, cadenas O-ring, X y Z. Motos de calle y todoterreno"
          },
          presentations: ["PINTA"],
          "summary": "Lubricante de cadena en aerosol de fórmula limpia y duradera. Repele suciedad, protege en todo tipo de terreno y no deja residuos voluminosos."
        },
        {
          id: "vp7920020",
          name: "Limpiador de Cadena Aerosol",
          type: "Limpiador / Motocicleta y vehículo todo terreno",
          description: "Limpiador de cadena en aerosol para cortar y disolver suciedad, mugre, grasa y lubricante viejo. Se seca sin dejar residuos, no requiere enjuague con agua. Para motocicletas y vehículos todo terreno con cadenas sin y con juntas tóricas (O-ring, X y Z).",
          benefits: [
            "Se seca completamente sin dejar residuos, no necesita enjuague",
            "Propulsor especial que penetra profundamente en grasa y mugre",
            "Seguro para cadenas sin y con juntas tóricas, X y Z",
            "Seguro para todos los materiales de juntas tóricas"
          ],
          specifications: {
            "has_lead": false,
            "format": "Aerosol",
            "net_weight": "13 oz (369 g)",
            "residue_free": true,
            "requires_water_rinse": false,
            "o_ring_safe": true,
            "compatible_chains": ["Sin juntas tóricas", "O-ring", "X-ring", "Z-ring"],
            "compatible_with": "Motos y vehículos todoterreno, calle y campo"
          },
          presentations: ["PINTA"],
          "summary": "Desengrasante de cadena en aerosol de secado rápido y sin residuos. Compatible con todo tipo de juntas tóricas. Úsalo antes de aplicar el lubricante de cadena VP."
        },
        {
          id: null,
          name: "SAE 20W-50 Power Sports Engine Oil",
          type: "Aceite mineral para motocicletas",
          description: "Aceite mineral SAE 20W-50 para motocicletas de carretera con motor de 4 tiempos. Alta viscosidad para climas cálidos. Recomendado especialmente para motocicletas con motor Wtim (wet clutch).",
          benefits: [
            "Máxima durabilidad",
            "Mantiene el motor limpio",
            "Evita la pérdida por evaporación",
            "Alta protección contra el desgaste",
            "Intervalos de cambio de aceite más largos",
            "Alta viscosidad para climas de alta temperatura",
            "Baja contaminación por transferencia combustible-aceite"
          ],
          specifications: {
            "has_lead": false,
            viscosity: "SAE 20W-50",
            "oil_type": "Mineral",
            "certifications": ["SM", "JASO MA2"],
            "wet_clutch_safe": true,
            "recommended_for": "Motocicletas de carretera con motor Wtim (4T)",
            "high_temp_performance": true
          },
          presentations: ["CUARTO"],
          "summary": "Aceite mineral 20W-50 para motos de carretera con embrague húmedo. Alta protección al desgaste, estabilidad en calor y formulación que minimiza la contaminación combustible-aceite."
        },
        {
          id: "34904-34915",
          name: "Tank Snake",
          type: "Protector de sistemas de almacenamiento de combustible",
          description: "Absorbedor de agua para tanques de combustible diésel. Disponible en tres versiones: Móvil (cisternas y tanques estacionarios), Instant (remueve agua en tan solo 30 minutos) y Reusable (uso continuo en tanques enterrados o a nivel de suelo).",
          benefits: [
            "Remueve agua y contaminantes del combustible",
            "Versión instant actúa en tan solo 30 minutos",
            "Versión reutilizable para tanques enterrados",
            "Versión móvil para cisternas y tanques estacionarios"
          ],
          specifications: {
            "has_lead": false,
            "variants": {
              "mobile": { id: "34904", "use": "Cisternas y tanques estacionarios de patios y fincas" },
              "instant": { id: "34906", "action_time": "30 minutos", "use": "Remoción rápida de agua" },
              "reusable": { id: "34908 / 34915", "use": "Uso continuo en tanques enterrados o a nivel de suelo" }
            },
            "compatible_with": "Tanques de combustible diésel"
          },
          presentations: ["PINTA"],
          "summary": "Sistema absorbedor de agua para tanques de diésel en tres versiones: instantáneo, reutilizable y móvil. Protege el combustible almacenado de contaminación y agua."
        },
        {
          id: "3532-3582",
          name: "Contenedor Cuadrado Motorsport® 5.5 Galones",
          type: "Accesorio / Bidón",
          description: "Bidón de polietileno virgen de alta densidad con 30% más de material que los estándar. Garantía limitada de 3 años. Mango ergonómico, asa inferior y tapa multipropósito irrompible con juntas de goma. IMPORTANTE: No apto para almacenar o transportar combustible ni queroseno.",
          benefits: [
            "Polietileno virgen de alta densidad",
            "30% más de material vs. contenedores estándar",
            "Prueba de calidad de 15 puntos",
            "Garantía limitada de 3 años",
            "Mango ergonómico y asa inferior para verter fácilmente",
            "Tapa multipropósito irrompible con juntas de goma"
          ],
          specifications: {
            "has_lead": false,
            "material": "Polietileno virgen de alta densidad",
            "capacity_options": ["3 galones", "5.5 galones"],
            "warranty": "3 años (grietas, fugas o roturas)",
            "quality_test_points": 15,
            "fuel_safe": false,
            "suitable_for": [
              "Fluidos automotrices e industriales reciclables",
              "Agua no potable",
              "Alimentos para animales",
              "Herbicidas e insecticidas"
            ]
          },
          presentations: ["GALON", "PAILA"],
          "summary": "Bidón de alta resistencia VP para fluidos no combustibles. Polietileno premium, diseño ergonómico y garantía de 3 años. NO apto para gasolina ni queroseno."
        }
      ]
  },
  firestone: {
    brand: BRANDS.firestone,
    categories: ["Pasajero", "SUV", "Camioneta", "Deportivo"],
    products: [
      {
        id: 'firestone-1',
        name: "Affinity",
        type: "Neumático deportivo",
        description: "El neumático Firestone Affinity Touring brinda un buen nivel de comodidad y estabilidad en carretera. Su diseño ofrece una gran tracción manteniendo una conducción suave y silenciosa.",
        category: FIRE_TIRE_CAT.AFF,
        line: TIRE_LINES.PAS_RADIAL,
        benefits: ["Gran agarre en pavimento seco y mojado.", "Conducción suave y silenciosa.", "Alta resistencia al desgaste."],
        specifications: { sizes: ["P195/75R14", "P235/70R15"], cars: ["Toyota GR86", "Subaru BRZ", "Honda Civic Type R", "Hyundai Veloster", "Ford Focus ST"] },
      },
      {
        id: 'firestone-2',
        name: "Firehawk 900",
        type: "Neumático de turismo premium",
        description: "Diseñado para brindar un excelente agarre y durabilidad; además ofrece un gran desempeño sobre superficies secas y mojadas.",
        category: FIRE_TIRE_CAT.FIRE,
        line: TIRE_LINES.PAS_RADIAL,
        benefits: ["Respuesta y frenado confiable.", "Conducción suave y silenciosa.", "Gran agarre en pavimento seco y mojado."],
        specifications: {
          sizes: [
            "195/60R13",
            "185/60R14",
            "195/60R14",
            "235/60R14",
            "195/60R15",
            "195/65R15"
          ],
          cars: ["Toyota Corolla", "Honda Civic", "Hyundai Elantra", "Nissan Sentra", "Kia Forte"],
        }
      },
      {
        id: 'firestone-3',
        name: "Firehawk V950",
        type: "Neumático deportivo",
        description: "Diseñado para satisfacer las necesidades de conductores que buscan características más deportivas. Su diseño unidireccional de canales amplios optimiza el desalojo de agua y reduce sustancialmente el riesgo de hidroplaneo.",
        category: FIRE_TIRE_CAT.FIRE,
        line: TIRE_LINES.PAS_RADIAL,
        benefits: ["Gran agarre en pavimento seco y mojado.", "Conducción precisa y gran maniobrabilidad.", "Gran agarre en curvas."],
        specifications: {
          sizes: ["185/60R14", "185/65R14", "195/60R15", "195/65R15"],
          cars: ["Honda Civic", "Toyota Corolla", "Mazda 3", "Volkswagen Golf", "Hyundai Elantra"],
        },
      },
      {
        id: 'firestone-4',
        name: "Firehawk V970",
        type: "Neumático de alto rendimiento",
        description: "Este diseño combina buena apariencia, maniobrabilidad, confort y bajos niveles de ruido, además de proveer excelente tracción sobre superficies secas o mojadas.",
        category: FIRE_TIRE_CAT.FIRE,
        line: TIRE_LINES.PAS_RADIAL,
        benefits: ["Conducción silenciosa y cómoda.", "Desempeño confiable en pavimento seco y mojado.", "Alta resistencia al desgaste."],
        specifications: {
          sizes: ["205/55R16", "215/60R17"],
          cars: ["Ford Focus", "Volkswagen Jetta", "Honda Accord", "Toyota Camry", "Mazda 6"],
        },
      },
      {
        id: 'firestone-5',
        name: "Multihawk",
        type: "Neumático de uso mixto",
        description: "El neumático Firestone Multihawk es ideal para uso en carreteras pavimentadas. Ofrece una conducción precisa en superficies secas y un frenado eficiente. Optimiza la evacuación del agua y reduce el riesgo de hidroplaneo en condiciones de lluvia.",
        category: FIRE_TIRE_CAT.MUL,
        line: TIRE_LINES.PAS_RADIAL,
        benefits: ["Mayor drenaje de agua y mejor manejo en superficies mojadas.", "Mejor control y frenado.", "Gran rendimiento en ciudad y autopista."],
        specifications: {
          sizes: ["165/65R13", "165/70R13", "175/70R13", "175/65R14", "185/65R14"],
          cars: ["Chevrolet Spark", "Renault Clio", "Kia Picanto", "Toyota Yaris", "Hyundai i10"],
        },
      },
      {
        id: 'firestone-6',
        name: "Seiberling 500",
        type: "Neumático económico de larga duración",
        description: "Este neumático ofrece una vida útil extensa y una estructura duradera, además de proporcionar el agarre y la estabilidad que busca en superficies secas y mojadas.",
        category: FIRE_TIRE_CAT.SEI,
        line: TIRE_LINES.PAS_RADIAL,
        benefits: ["Conducción suave y silenciosa.", "Excelente tracción en superficies secas y húmedas.", "Resistente al desgaste."],
        specifications: {
          sizes: ["175/70R13", "185/65R14", "195/75R14"],
          cars: ["Chevrolet Aveo", "Renault Logan", "Toyota Yaris", "Hyundai Accent", "Kia Rio"],
        },
      },
      {
        id: 'firestone-7',
        name: "ATX Radial 23°",
        type: "Neumático off-road",
        description: "Neumático diseñado para uso fuera de carretera. Alta resistencia y excelente tracción en los terrenos más severos.",
        category: FIRE_TIRE_CAT.ATX,
        line: TIRE_LINES.CAM_RADIAL,
        benefits: ["Tacos en ángulo de 23° que proporciona elevada fuerza de tracción y excelente autolimpieza.", "Alta resistencia al desgaste.", "Gran desempeño en los trabajos más exigentes."],
        specifications: {
          sizes: ["31X10.50R15LT"],
          cars: ["Ford F-150", "Chevrolet Silverado", "Toyota Hilux", "Nissan Frontier", "RAM 1500"],
        },
      },
      {
        id: 'firestone-8',
        name: "Destination A/T",
        type: "Neumático todo terreno",
        description: "Este neumático otorga una excelente capacidad de tracción dentro y fuera de carretera. Su desempeño todo terreno se complementa con un rodaje confortable y silencioso.",
        category: FIRE_TIRE_CAT.DES,
        line: TIRE_LINES.CAM_RADIAL,
        benefits: ["Excelente tracción y gran resistencia a las agresiones del camino.", "Baja generación de ruido.", "Maniobrabilidad dentro y fuera carretera."],
        specifications: {
          sizes: ["P235/75R15", "31X10.50R15LT", "LT245/75R16", "P255/70R16", "P265/75R16"],
          cars: ["Toyota 4Runner", "Ford Explorer", "Jeep Wrangler", "Chevrolet Tahoe", "Nissan Pathfinder"],
        },
      },
      {
        id: 'firestone-9',
        name: "Destination A/T2",
        type: "Neumático todo terreno avanzado",
        description: "El neumático Destination A/T 2 tiene excelente tracción en todo momento y gran resistencia en cualquier camino. Incorpora la tecnología de Ranuras 3D que ayuda a disminuir el desgaste irregular durante la vida útil del caucho.",
        category: FIRE_TIRE_CAT.DES,
        line: TIRE_LINES.CAM_RADIAL,
        benefits: ["Hombros agresivos para mejorar el agarre fuera de carretera.", "Ranuras más amplias que evacuan el agua y aumentan la tracción en superficies mojadas.", "Eyector de piedras que ayuda a reducir perforaciones y daños en la banda de rodamiento."],
        specifications: {
          sizes: ["P235/75R15", "P265/75R16", "P235/65R17", "P245/65R17", "P265/65R17", "P265/70R17", "P285/70R17"],
          cars: ["RAM 1500", "Ford F-150", "Chevrolet Silverado", "Toyota Tundra", "GMC Sierra"],
        },
      },
      {
        id: 'firestone-10',
        name: "Destination LE",
        type: "Neumático highway para SUV",
        description: "El neumático Destination LE ofrece beneficios a vehículos utilitarios deportivos, vans y pick-ups de trabajo livianos. Esta tecnología aumenta el confort, el rendimiento y disminuye el desgaste irregular.",
        category: FIRE_TIRE_CAT.DES,
        line: TIRE_LINES.CAM_RADIAL,
        benefits: ["Excelente tracción y gran resistencia a las agresiones del camino.", "Baja generación de ruido.", "Maniobrabilidad dentro y fuera carretera."],
        specifications: {
          sizes: ["P235/75R15", "P265/70R16", "P245/65R17"],
          cars: ["Ford Explorer", "Toyota RAV4", "Honda Pilot", "Chevrolet Equinox", "Nissan Murano"],
        },
      },
      {
        id: 'firestone-11',
        name: "Destination V A/T",
        type: "Neumático todo terreno versátil",
        description: "Este diseño combina confort y seguridad con un excelente comportamiento en carretera y un desempeño sobresaliente en terrenos más exigentes.",
        category: FIRE_TIRE_CAT.DES,
        line: TIRE_LINES.CAM_RADIAL,
        benefits: ["Tracción confiable en superficies mojadas y secas.", "Diseñado para una conducción confortable.", "Desempeño versátil en todo terreno."],
        specifications: {
          sizes: ["P215/75R15", "P265/75R16", "P245/65R17", "P245/70R17", "P265/70R17", "P285/70R17", "P265/60R18"],
          cars: ["Toyota Land Cruiser", "Mitsubishi Montero", "Ford Expedition", "Chevrolet Suburban", "Nissan Armada"],
        },
      },
      {
        id: 'firestone-12',
        name: "Destination V H/T 684II",
        type: "Neumático highway para camioneta",
        description: "Cuenta con un diseño de banda de rodadura moderno que ofrece una excelente estabilidad en el manejo y un viaje por carretera más silencioso, suave y cómodo para camionetas y vehículos 4x4.",
        category: FIRE_TIRE_CAT.DES,
        line: TIRE_LINES.CAM_RADIAL,
        benefits: ["Tracción confiable en superficies mojadas y secas.", "Alta durabilidad y resistencia al desgaste.", "Diseñado para una conducción confortable."],
        specifications: {
          sizes: ["265/65R17"],
          cars: ["Chevrolet Tahoe", "Ford Expedition", "Toyota Sequoia", "Nissan Armada", "GMC Yukon"],
        },
      },
      {
        id: 'firestone-13',
        name: "Destination V H/T 687",
        type: "Neumático highway para SUV",
        description: "Neumático para uso en carreteras pavimentadas. Su diseño asegura una excelente maniobrabilidad y tracción en pavimentos secos y mojados. Esto se combina con un rodaje confortable y silencioso.",
        category: FIRE_TIRE_CAT.DES,
        line: TIRE_LINES.CAM_RADIAL,
        benefits: ["Tracción confiable en superficies mojadas y secas.", "Alta durabilidad y resistencia al desgaste.", "Diseñado para una conducción confortable."],
        specifications: {
          sizes: ["205/70R15", "215/65R16", "235/60R16"],
          cars: ["Honda CR-V", "Toyota RAV4", "Hyundai Tucson", "Kia Sportage", "Nissan X-Trail"],
        },
      },
      {
        id: 'firestone-14',
        name: "Destination V H/T 689",
        type: "Neumático highway premium para camioneta",
        description: "Máximo agarre en todo tipo de situaciones y rendimiento perfectamente equilibrado en autopista que garantiza una conducción con bajas emisiones de ruido y confortable.",
        category: FIRE_TIRE_CAT.DES,
        line: TIRE_LINES.CAM_RADIAL,
        benefits: ["Tracción confiable en superficies mojadas y secas.", "Alta durabilidad y resistencia al desgaste.", "Diseñado para una conducción confortable."],
        specifications: {
          sizes: ["P255/70R16"],
          cars: ["Dodge Ram", "Ford F-150", "Chevrolet Silverado", "GMC Sierra", "Toyota Tundra"],
        },
      },
      {
        id: 'firestone-15',
        name: "Destination V H/T 840",
        type: "Neumático highway para uso mixto",
        description: "Neumático para uso en carreteras pavimentadas. Su diseño asegura una excelente maniobrabilidad y tracción en pavimentos secos y mojados. Esto se combina con un rodaje confortable y silencioso.",
        category: FIRE_TIRE_CAT.DES,
        line: TIRE_LINES.CAM_RADIAL,
        benefits: ["Tracción confiable en superficies mojadas y secas.", "Alta durabilidad y resistencia al desgaste.", "Diseñado para una conducción confortable."],
        specifications: {
          sizes: ["205R16C", "265/70R16", "P265/70R17"],
          cars: ["Mitsubishi L300", "Toyota Hiace", "Ford Transit", "Chevrolet Express", "Nissan Urvan"],
        },
      },
      {
        id: 'firestone-16',
        name: "Destination V TP",
        type: "Neumático para camión ligero y van",
        description: "Neumático para todas las posiciones, de gran tracción, con diseño de banda de rodamiento que mejora la resistencia al desgaste. Es el caucho adecuado para camiones Ligeros y Vans con aplicación dentro de carretera.",
        category: FIRE_TIRE_CAT.DES,
        line: TIRE_LINES.CAM_RADIAL,
        benefits: ["Excelente tracción en superficies mojadas y secas.", "Alta durabilidad y resistencia al desgaste irregular.", "Rendimiento superior."],
        specifications: {
          sizes: ["LT215/85R16", "7.50R16LT"],
          cars: ["Ford Transit", "Nissan Urvan", "Toyota Hiace", "Mercedes-Benz Sprinter", "Chevrolet Express"],
        },
      },
      {
        id: 'firestone-17',
        name: "Destination X/T",
        type: "Neumático extremo off-road",
        description: "Su diseño agresivo y estructura robusta permitirá a los más aventureros disfrutar todos los caminos. La tecnología aplicada en el diseño de su banda de rodamiento proporciona una conducción segura en cualquier terreno.",
        category: FIRE_TIRE_CAT.DES,
        line: TIRE_LINES.CAM_RADIAL,
        benefits: ["Tracción confiable en superficies mojadas y secas.", "Alta durabilidad y resistencia al desgaste.", "Diseñado para una conducción confortable."],
        specifications: {
          sizes: ["31X10.5R15LT", "LT265/75R16", "LT265/65R17", "LT265/70R17", "LT285/70R17", "LT265/65R18", "LT275/65R18"],
          cars: ["Jeep Wrangler", "Ford Bronco", "Toyota 4Runner", "RAM 1500", "Chevrolet Colorado ZR2"],
        },
      },
      {
        id: 'firestone-18',
        name: "Firehawk RMT",
        type: "Neumático rugged terrain",
        description: "El neumático Firehawk RMT está diseñado para proporcionar máxima tracción en superficies fuera de carretera y un gran desempeño en vías pavimentadas. Está orientado a SUV's, Pick Up's y vehículos de carga ligera.",
        category: FIRE_TIRE_CAT.FIRE,
        line: TIRE_LINES.CAM_RADIAL,
        benefits: ["Máxima tracción fuera de carretera y gran desempeño en vías urbanas.", "Gran resistencia a las agresiones del camino.", "Baja generación de ruido."],
        specifications: {
          sizes: ["7.50R16LT"],
          cars: ["Ford F-150", "Toyota Hilux", "Nissan Frontier", "Mitsubishi L200", "RAM 1500"],
        },
      },
      {
        id: 'firestone-19',
        name: "Super All Traction",
        type: "Neumático convencional todo terreno",
        description: "Neumático convencional para camiones ligeros, ideal para ejes de tracción en servicios dentro y fuera de carretera. Ofrece excelente tracción en terrenos fangosos y pavimentados, alta resistencia al desgaste y mayor durabilidad.",
        category: FIRE_TIRE_CAT.SAT,
        line: TIRE_LINES.CAM_CONV,
        benefits: ["Excelente tracción y autolimpieza.", "Alta resistencia al desgaste para una mayor vida útil.", "Alta capacidad de resistencia a cortes."],
        specifications: {
          sizes: ["LT215/85D15", "7.50-16LT"],
          cars: ["Ford F-150", "Chevrolet C/K", "Dodge Ram", "Toyota Land Cruiser 70", "Nissan Patrol"],
        },
      },
      {
        id: 'firestone-20',
        name: "Shogun",
        type: "Neumático convencional direccional",
        description: "Neumático convencional con excelente comportamiento direccional y gran agarre en pavimento seco o mojado. Ideal para camiones y autobuses ligeros, preferiblemente en ejes de dirección y libres.",
        category: FIRE_TIRE_CAT.SHO,
        line: TIRE_LINES.CAM_CONV,
        benefits: ["Alta resistencia al desgaste irregular.", "Alta durabilidad y resistencia.", "Tracción confiable en superficies mojadas y secas."],
        specifications: {
          sizes: ["7.50-16LT"],
          cars: ["Autobuses ligeros", "Camiones de reparto", "Vans de trabajo", "Ford Transit", "Toyota Coaster"],
        },
      },
      {
        id: 'firestone-21',
        name: "Champion Guide Grip 3Rib H.D. F2",
        type: "Neumático agrícola eje delantero",
        description: "Neumático diseñado específicamente para el eje delantero, con un ancho de tres costillas, ideal para diversas condiciones agrícolas. Uso con cámara.",
        category: FIRE_TIRE_CAT.CHA,
        line: TIRE_LINES.AGRI,
        benefits: ["Tecnología autolimpiante para una mejor dirección.", "Su banda de rodamiento se adapta a la necesidad del terreno.", "Alta resistencia a cortes e impactos."],
        specifications: {
          sizes: ["11.00-16"],
          cars: ["Tractores agrícolas eje delantero", "John Deere", "Massey Ferguson", "New Holland", "Case IH"],
        },
      },
      {
        id: 'firestone-22',
        name: "Champion Guide Grip H.D. F2",
        type: "Neumático agrícola para lodo profundo",
        description: "Neumático para uso en eje delantero con diseño de una costilla gruesa para condiciones agrícolas de lodo profundo. Uso con cámara.",
        category: FIRE_TIRE_CAT.CHA,
        line: TIRE_LINES.AGRI,
        benefits: ["Banda de rodamiento de una costilla gruesa.", "Específicamente diseñado para condiciones de lodo profundo en campos de caña y arroz.", "Alta resistencia a cortes e impactos."],
        specifications: {
          sizes: ["7.50-16"],
          cars: ["Tractores de caña de azúcar", "Tractores arroceros", "John Deere", "Kubota", "Massey Ferguson"],
        },
      },
      {
        id: 'firestone-23',
        name: "Champion Spade Grip R-2",
        type: "Neumático agrícola de tracción",
        description: "Diseñado para condiciones de suelo húmedo. Banda de rodamiento extra profunda de 45° para una mejor tracción en el lodo. Excelente opción para aplicaciones en cultivos de arroz y caña de azúcar. Uso con cámara.",
        category: FIRE_TIRE_CAT.CHA,
        line: TIRE_LINES.AGRI,
        benefits: ["Barras curvas en la banda de rodamiento para una mayor tracción.", "Reforzados para evitar el desgaste y mejorar el rendimiento.", "Alta resistencia a cortes e impactos."],
        specifications: {
          sizes: ["14.9-24", "23.1-26", "14.9-28", "18.4-30", "23.1-30", "18.4-34", "23.1-34"],
          cars: ["Tractores arroceros", "Tractores cañeros", "John Deere", "Massey Ferguson", "New Holland"],
        },
      },
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
        specifications: { size: "225/45 R17", car: ["Toyota Supra", "Nissan Z", "Mazda MX-5", "Subaru WRX", "Honda S2000"], season: "Verano", speedRating: "W", loadIndex: "94" },
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
        specifications: { size: "265/70 R16", car: ["Toyota Hilux", "Ford Ranger", "Nissan Frontier", "Mitsubishi L200", "Isuzu D-Max"], season: "All-Season", speedRating: "S", loadIndex: "112" },
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
        specifications: { size: "205/55 R16", car: ["Toyota Corolla", "Honda Civic", "Hyundai Elantra", "Nissan Sentra", "Kia Forte"], season: "All-Season", speedRating: "H", loadIndex: "91" },
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
        specifications: { size: "235/60 R18", car: ["Toyota Highlander", "Honda CR-V", "Hyundai Santa Fe", "Kia Sorento", "Ford Explorer"], season: "All-Season", speedRating: "V", loadIndex: "103" },
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
        specifications: { size: "195/65 R15", car: ["Toyota Corolla", "Honda Civic", "Hyundai Accent", "Nissan Versa", "Chevrolet Aveo"], season: "Invierno", speedRating: "T", loadIndex: "91" },
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
        specifications: { size: "185/65 R15", car: ["Toyota Corolla", "Honda Fit", "Hyundai Accent", "Nissan March", "Kia Rio"], season: "Verano", speedRating: "H", loadIndex: "88" },
        presentations: []
      }
    ]
  },
  alix: {
    brand: BRANDS.alix,
    categories: Object.values(ALIX_TIRE_CAT),
    products: [
      {
        id: 'alix-1',
        name: "Vezetta",
        type: "Neumático de turismo",
        description: "Desarrollados para usuarios de vehículos sedanes y cupés, posee un atractivo diseño que combina estabilidad, maniobrabilidad y desempeño.",
        category: ALIX_TIRE_CAT.VEZ,
        line: TIRE_LINES.PAS_RADIAL,
        benefits: [
          "Diseño atractivo y moderno.",
          "Bloques anchos en hombros que mejoran la estabilidad lateral.",
          "Andar suave y silencioso en todo tipo de superficie.",
        ],
        specifications: {
          sizes: ["165/70R13", "175/70R13", "175/65R14", "185/65R14"],
          cars: ["Toyota Corolla", "Chevrolet Aveo", "Hyundai Elantra", "Kia Cerato", "Renault Logan"],
        },
      },
      {
        id: 'alix-2',
        name: "Vezetta Plus",
        type: "Neumático de turismo premium",
        description: "El ALIX VEZETTA PLUS es un neumático diseñado para ofrecer un excelente desempeño en cualquier tipo de carretera. Si buscas neumáticos con gran rendimiento y larga duración, este es el producto ideal para ti.",
        category: ALIX_TIRE_CAT.VEZ_PLUS,
        line: TIRE_LINES.PAS_RADIAL,
        benefits: [
          "Banda diseñada para proporcionar un manejo tranquilo, cómodo y seguro.",
          "Excelente adherencia en carreteras mojadas y secas.",
          "Hombros rígidos para garantizar máxima estabilidad en las curvas.",
        ],
        specifications: {
          sizes: ["195/60R15"],
          cars: ["Honda Civic", "Toyota Corolla", "Hyundai Elantra", "Mazda 3", "Volkswagen Jetta"],
        },
      },
      {
        id: 'alix-3',
        name: "Veloce",
        type: "Neumático de alto rendimiento",
        description: "Los neumáticos ALIX VELOCE son ideales para superficies pavimentadas húmedas y secas. Ofrecen un excelente rendimiento y mayor confort en el camino, además de una alta resistencia al desgaste irregular.",
        category: ALIX_TIRE_CAT.VEL,
        line: TIRE_LINES.PAS_RADIAL,
        benefits: [
          "Nueva banda de rodamiento diseñada para aumentar la durabilidad.",
          "Grooves externos ampliados para mejor desalojo de agua.",
          "Especialmente diseñado para mayor confort.",
        ],
        specifications: {
          sizes: ["205/55R16"],
          cars: ["Honda Civic", "Volkswagen Golf", "Ford Focus", "Toyota Corolla", "Mazda 3"],
        },
      },
      {
        id: 'alix-4',
        name: "Impact HT Plus",
        type: "Neumático highway para SUV y pick-up",
        description: "El neumático ALIX IMPACT HT PLUS está especialmente diseñado para su uso en pick-ups de trabajo liviano y vehículos utilitarios deportivos (SUV), en caminos mayoritariamente pavimentados.",
        category: ALIX_TIRE_CAT.IMP,
        line: TIRE_LINES.CAM_RADIAL,
        benefits: [
          "Nueva banda de rodamiento mejorada para aumentar vida útil.",
          "Surcos optimizados para un manejo cómodo y silencioso.",
          "Gran balance de desempeño entre carreteras y terrenos no pavimentados.",
        ],
        specifications: {
          sizes: ["P235/60R16", "P255/70R16"],
          cars: ["Toyota Hilux", "Ford Ranger", "Chevrolet S10", "Nissan Frontier", "Mitsubishi L200"],
        },
      },
      {
        id: 'alix-5',
        name: "ST-17",
        type: "Neumático para motocicleta urbana",
        description: "El neumático ALIX ST-17 fue desarrollado para enfrentar las peores condiciones de uso en áreas urbanas y en carretera, brindando agilidad, manejo seguro y respuesta rápida.",
        category: ALIX_TIRE_CAT.ST,
        line: TIRE_LINES.MOTO,
        benefits: [
          "Diseño elegante y deportivo.",
          "Óptima adherencia sobre pavimento seco y húmedo.",
          "Estructura reforzada para proporcionar alta resistencia al impacto y comodidad al motociclista.",
        ],
        specifications: {
          sizes: ["110/90-16 M/C", "2.75-18 M/C", "90/90-18 M/C"],
          cars: ["Honda CB 125", "Yamaha YBR 125", "Suzuki GN 125", "AKT 125", "Bera BR 150"],
        },
      },
      {
        id: 'alix-6',
        name: "CT-21",
        type: "Neumático para moto de trabajo",
        description: "Neumático especial para motos de trabajo. Alto desempeño en áreas urbanas y sub-urbanas. Otorga resistencia, estabilidad y excelente tracción.",
        category: ALIX_TIRE_CAT.CT,
        line: TIRE_LINES.MOTO,
        benefits: [
          "Alto desempeño en las rutas más exigentes.",
          "Gran estabilidad y agarre en suelo seco y húmedo.",
          "Alta durabilidad y resistencia al desgaste.",
        ],
        specifications: {
          sizes: ["90/90-18M/C", "3.00-18M/C"],
          cars: ["Honda CG 150", "Yamaha YBR 125", "Bajaj Boxer 150", "Hero Hunk", "TVS Apache"],
        },
      }
    ]
  },
  bekka: {
    brand: BRANDS.bekka,
    categories: [],
    products: [
      {
        id: "3490-3491",
        name: "Absorbedor de Agua Bekka® para Tanques de Combustible Diésel",
        type: "Accesorio / Absorbedor de agua",
        description: "Sistema absorbedor de agua para tanques de diésel en tres versiones: instantáneo, reutilizable y móvil. Protege el combustible almacenado de contaminación y agua.",
        benefits: [
          "Protege el combustible almacenado de contaminación y agua",
          "Versión instantánea para remoción rápida de agua",
          "Versión reutilizable para uso continuo en tanques enterrados o a nivel de suelo",
          "Versión móvil para cisternas y tanques estacionarios de patios y fincas"
        ],
        specifications: {
          "has_lead": false,
          "variants": {
            "mobile": { id: "34904", "use": "Cisternas y tanques estacionarios de patios y fincas" },
            "instant": { id: "34906", "action_time": "30 minutos", "use": "Remoción rápida de agua" },
            "reusable": { id: "34908 / 34915", "use": "Uso continuo en tanques enterrados o a nivel de suelo" }
          },
          "compatible_with": "Tanques de combustible diésel"
        },
        presentations: ["PINTA"],
        "summary": "Sistema absorbedor de agua para tanques de diésel en tres versiones: instantáneo, reutilizable y móvil. Protege el combustible almacenado de contaminación y agua."
      }
    ]
  }
};

function getBrand(brandId) {
  return BRANDS[brandId] || null;
}

function getCatalog(brandId) {
  return CATALOGS[brandId] || null;
}