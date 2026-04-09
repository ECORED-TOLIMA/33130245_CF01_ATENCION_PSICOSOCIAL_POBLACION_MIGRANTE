export default {
  global: {
    componenteFormativo:
      'Política integral y lineamientos de atención psicosocial migratoria',
    descripcionCurso:
      'Este componente formativo aborda los fundamentos de la política migratoria colombiana y el marco normativo nacional e internacional que orienta la atención psicosocial dirigida a personas migrantes, población colombiana retornada y comunidades de acogida. También se revisan los derechos fundamentales y la aplicación de principios humanitarios para promover una intervención psicosocial integral, ética y enfocada en la protección de la dignidad humana.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Contexto general de la migración y su impacto psicosocial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Causas y tipos de migración',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Migración internacional y retorno en Colombia',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Impactos psicosociales de la migración',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Respuesta institucional frente al fenómeno migratorio',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Marco normativo internacional sobre migración y atención psicosocial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Declaración Universal de los Derechos Humanos (ONU, 1948)',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Convención sobre el Estatuto de los Refugiados (1951) y Protocolo (1967)',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Convención sobre los Derechos del Niño (1989)',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Enfoque de protección y dignidad humana (ACNUR)',
            hash: 't_2_4',
          },
        ],
      },

      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Marco normativo nacional de la política migratoria colombiana y atención psicosocial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Política Integral Migratoria (Ley 2136 de 2021)',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Estatuto Temporal de Protección (Decreto 216 de 2021)',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Ley del Retorno (Ley 1565 de 2012)',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Código de Infancia y Adolescencia (Ley 1098 de 2006)',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo:
              'Política Nacional de Salud Mental (Ley 2460) y lineamientos de atención psicosocial (Decreto 0729 de 2025)',
            hash: 't_3_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/33130245_CF1_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1.2 Migración internacional y retorno en Colombia',
      referencia:
        'Colombia Nos Une. (2025). ¿Qué es el Retorno y cómo funciona en Colombia? 🇨🇴 [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=OaWfPqoyeLI',
    },
    {
      tema:
        '3.5. Política Nacional de Salud Mental (Ley 2460) y lineamientos de atención psicosocial (Decreto 0729 de 2025)',
      referencia:
        'LVAbrazarte. (2025). ¿Qué cambia con la nueva Ley 2460 de 2025 en salud mental? [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=aImzsy9d-eM&t=22s',
    },
  ],
  glosario: [
    {
      termino: 'ACNUR',
      significado:
        ' Alto Comisionado de las Naciones Unidas para los Refugiados. Organismo internacional que protege y asiste a las personas desplazadas y refugiadas en el mundo.',
    },
    {
      termino: 'Atención psicosocial',
      significado:
        'Conjunto de acciones orientadas a promover el bienestar emocional, social, familiar y comunitario de las personas afectadas por situaciones adversas.',
    },
    {
      termino: 'Circular',
      significado:
        'Comunicación oficial que contiene orientaciones técnicas o directrices para aplicar políticas públicas en instituciones.',
    },
    {
      termino: 'Código de Infancia y Adolescencia',
      significado:
        'Norma colombiana que protege integralmente los derechos de los niños, niñas y adolescentes (Ley 1098 de 2006).',
    },
    {
      termino: 'Comunidad de acogida',
      significado:
        'Población residente en un territorio que recibe y convive con personas migrantes o retornadas.',
    },
    {
      termino: 'Convención sobre los Derechos del Niño',
      significado:
        'Tratado internacional de la ONU (1989) que garantiza los derechos de la niñez en los Estados firmantes.',
    },
    {
      termino: 'Decreto',
      significado:
        'Disposición normativa emitida por el poder ejecutivo para reglamentar leyes o establecer medidas administrativas.',
    },
    {
      termino: 'Dignidad humana',
      significado:
        'Principio que reconoce el valor intrínseco de todas las personas y constituye la base de los derechos humanos.',
    },
    {
      termino: 'Ley del Retorno',
      significado:
        'Norma colombiana (Ley 1565 de 2012) que promueve la reintegración social y económica de los colombianos que regresan del exterior.',
    },
    {
      termino: 'Migración',
      significado:
        'Movimiento de personas de un lugar a otro, dentro o fuera de un país, con el propósito de residir temporal o permanentemente.',
    },
    {
      termino: 'Población migrante',
      significado:
        'Personas que se trasladan de su lugar de origen a otro territorio por causas económicas, sociales, políticas o ambientales.',
    },
    {
      termino: 'Política Integral Migratoria',
      significado:
        'Marco legal colombiano (Ley 2136 de 2021) que regula la gestión de la migración y garantiza la protección de los derechos humanos.',
    },
    {
      termino: 'Protocolo sobre el Estatuto de los Refugiados',
      significado:
        'Documento complementario a la Convención de 1951, que amplía la protección internacional a las personas refugiadas.',
    },
    {
      termino: 'Refugiado',
      significado:
        'Persona que, debido a persecución, violencia o conflicto, se ve obligada a abandonar su país y solicita protección internacional.',
    },
    {
      termino: 'Salud mental',
      significado:
        'Estado de bienestar en el cual la persona reconoce sus capacidades, afronta el estrés de la vida y contribuye a su comunidad.',
    },
  ],
  referencias: [
    {
      referencia:
        'Achotegui, J. (2019). El duelo migratorio: La necesidad de una nueva psicopatología. Editorial Herder.',
      link: '',
    },

    {
      referencia:
        'ACNUR & OIM. (2023). Atención psicosocial y protección integral para población migrante y refugiada: Recomendaciones para los Estados. Naciones Unidas.',
      link: '',
    },

    {
      referencia:
        'ACNUR. (2017). Tendencias globales: Desplazamiento forzado en 2017. Agencia de la ONU para los Refugiados.',
      link:
        'https://www.acnur.org/sites/default/files/legacy-pdf/5b2956a04.pdf',
    },

    {
      referencia:
        'Congreso de la República de Colombia. (1991). Ley 12 de 1991. Diario Oficial.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=10579',
    },

    {
      referencia:
        'Congreso de la República de Colombia. (2006). Ley 1098 de 2006. Diario Oficial.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=22106',
    },

    {
      referencia:
        'Congreso de la República de Colombia. (2012). Ley 1565 de 2012. Diario Oficial.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=48662',
    },

    {
      referencia:
        'Congreso de la República de Colombia. (2021). Ley 2136 de 2021. Diario Oficial.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=168067',
    },

    {
      referencia:
        'Congreso de la República de Colombia. (2025). Ley 2460 de 2025. Diario Oficial.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=260636',
    },

    {
      referencia:
        'Departamento Nacional de Planeación. (2022). Documento CONPES 4100: Estrategia para la integración de la población migrante venezolana como factor de desarrollo para el país.',
      link:
        'https://colaboracion.dnp.gov.co/CDT/Conpes/Econ%C3%B3micos/4100.pdf',
    },

    {
      referencia:
        'Instituto Colombiano de Bienestar Familiar. (2023). Lineamientos para la protección y restablecimiento de derechos de niños, niñas y adolescentes. ICBF.',
      link: '',
    },

    {
      referencia:
        'Ministerio de Salud y Protección Social. (2022). Línea base de salud mental para poblaciones migrantes. Ministerio de Salud y Protección Social, Colombia.',
      link: '',
    },

    {
      referencia:
        'Ministerio de Salud y Protección Social. (2025). Decreto 0729 de 2025.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/decreto-0729-25-junio-2025.pdf',
    },

    {
      referencia:
        'Ministerio de Salud y Protección Social. (2025). Resolución 401 de 2025.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/resolucion-0401-de-2025.pdf',
    },

    {
      referencia:
        'Naciones Unidas. (1951). Convención sobre el Estatuto de los Refugiados. ACNUR.',
      link: 'https://www.acnur.org/5b0766944.pdf',
    },

    {
      referencia:
        'Naciones Unidas. (1967). Protocolo sobre el Estatuto de los Refugiados. ACNUR.',
      link: '',
    },

    {
      referencia:
        'Naciones Unidas. (s. f.). Declaración Universal de Derechos Humanos.',
      link:
        'https://www.un.org/es/about-us/universal-declaration-of-human-rights',
    },

    {
      referencia: 'Naciones Unidas. (s. f.). Migración internacional.',
      link: 'https://www.un.org/es/global-issues/migration',
    },

    {
      referencia:
        'ONU-HABITAT. (2025). Soluciones Duraderas al Desplazamiento Interno.',
      link:
        'https://onu-habitat.org/index.php/soluciones-duraderas-al-desplazamiento-interno',
    },

    {
      referencia:
        'Organización de las Naciones Unidas. (2018). Pacto Mundial para la Migración Segura, Ordenada y Regular. ONU.',
      link: '',
    },

    {
      referencia:
        'Organización Internacional para las Migraciones (OIM). (2019). Glosario de la OIM sobre Migración.',
      link:
        'https://publications.iom.int/system/files/pdf/iml-34-glossary-es.pdf',
    },

    {
      referencia:
        'Presidencia de la República de Colombia. (2021). Decreto 216 de 2021.',
      link:
        'https://www.cancilleria.gov.co/sites/default/files/Normograma/docs/decreto_0216_2021.htm',
    },

    {
      referencia:
        'Programa de las Naciones Unidas para el Desarrollo. (2023). Informe sobre desarrollo humano y movilidad humana. PNUD.',
      link: '',
    },

    {
      referencia:
        'Protocolo sobre el Estatuto de los Refugiados. (1967). Naciones Unidas.',
      link: '',
    },

    {
      referencia:
        'UNICEF. (1989). Convención sobre los Derechos del Niño. Naciones Unidas.',
      link: 'https://www.unicef.org/es/convencion-derechos-nino',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        // {
        //   nombre: 'Milady Tatiana Villamil Castellanos',
        //   cargo:
        //     'Responsable Ecosistema de Recursos Educativos Digitales (RED)',
        //   centro: 'Dirección General',
        // },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Carolina Yusunguaira Ceballos',
          cargo: 'Experta temática',
          centro:
            'Centro de Formación de Talento Humano en Salud - Regional Distrito Capital',
        },
        {
          nombre: 'Eliana Milena Buitrago Umaña',
          cargo: 'Asesora metodológica',
          centro:
            'Centro de Formación de Talento Humano en Salud - Regional Distrito Capital',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jose Yobani Penagos Mora',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Sebastian Trujillo Afanador',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
