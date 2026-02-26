<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
export default {
  name: 'ActividadDidactica',
  data: () => ({
    cuestionario: {
      tema: 'tema_actividad_didactica',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo</b>: evaluar la comprensión de los fundamentos normativos y psicosociales que orientan la atención integral a personas migrantes, retornadas y comunidades de acogida, fortaleciendo el reconocimiento de sus derechos y del marco institucional vigente en Colombia.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            'La migración implica únicamente el movimiento físico de personas entre territorios, sin efectos emocionales ni culturales.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una comprensión adecuada del marco normativo y del enfoque psicosocial en la atención a población migrante y retornada.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            'Más de 280 millones de personas viven fuera de su país de origen a nivel mundial.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una comprensión adecuada del marco normativo y del enfoque psicosocial en la atención a población migrante y retornada.',
          mensaje_incorrecto:
            'Retome los materiales del Componente Formativo y revise los aspectos relacionados con esta pregunta.',
        },
        {
          id: 3,
          texto:
            'El Estatuto Temporal de Protección otorga el Permiso por Protección Temporal por diez años.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una comprensión adecuada del marco normativo y del enfoque psicosocial en la atención a población migrante y retornada.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto: 'La Ley 2136 de 2021 no incluye la atención psicosocial.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una comprensión adecuada del marco normativo y del enfoque psicosocial en la atención a población migrante y retornada.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            'La Convención de 1951 define refugiado por motivos económicos.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una comprensión adecuada del marco normativo y del enfoque psicosocial en la atención a población migrante y retornada.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            'La Declaración Universal reconoce el derecho a salir de un país y regresar.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una comprensión adecuada del marco normativo y del enfoque psicosocial en la atención a población migrante y retornada.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            'La Convención sobre los Derechos del Niño no aplica a migrantes.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una comprensión adecuada del marco normativo y del enfoque psicosocial en la atención a población migrante y retornada.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            'Colombia alberga más de 2.8 millones de migrantes, según la OIM.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una comprensión adecuada del marco normativo y del enfoque psicosocial en la atención a población migrante y retornada.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto: 'La atención psicosocial solo abarca terapia individual.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una comprensión adecuada del marco normativo y del enfoque psicosocial en la atención a población migrante y retornada.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            'La Circular 035 de 2022 regula la atención integral a migrantes.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una comprensión adecuada del marco normativo y del enfoque psicosocial en la atención a población migrante y retornada.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            'Según la normativa colombiana, ¿qué enfoque orienta la atención psicosocial a personas migrantes y retornadas para garantizar la dignidad y protección de sus derechos?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Enfoque diferencial.', esCorrecta: true },
            { id: 'b', texto: 'Enfoque de neutralidad.', esCorrecta: false },
            { id: 'c', texto: 'Enfoque punitivo.', esCorrecta: false },
            { id: 'd', texto: 'Enfoque militar.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una comprensión adecuada del marco normativo y del enfoque psicosocial en la atención a población migrante y retornada.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            'Según la normativa nacional colombiana, ¿qué propósito tiene la Ley 1565 de 2012, conocida como Ley del Retorno?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Regular el ingreso temporal de migrantes extranjeros.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Facilitar la reintegración social, económica y emocional de los colombianos que regresan del exterior de manera voluntaria.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Establecer requisitos para la nacionalización de población venezolana.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reglamentar la atención psicosocial en salud mental.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una comprensión adecuada del marco normativo y del enfoque psicosocial en la atención a población migrante y retornada.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            'De acuerdo con el enfoque de protección y dignidad humana promovido por el ACNUR, ¿cómo se reconoce a las personas migrantes y refugiadas?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Como beneficiarios pasivos de asistencia humanitaria.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Como sujetos activos de derechos y protagonistas de su proceso de integración.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Como población dependiente de la cooperación internacional.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Como receptores temporales de ayuda y acompañamiento psicosocial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una comprensión adecuada del marco normativo y del enfoque psicosocial en la atención a población migrante y retornada.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            'De acuerdo con el Código de Infancia y Adolescencia (Ley 1098 de 2006), ¿qué garantiza este marco normativo frente a los derechos de los niños, niñas y adolescentes?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La atención psicosocial únicamente en casos de vulneración grave.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El acompañamiento educativo sin atención en salud.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La asistencia temporal hasta que se regularice su situación migratoria.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La protección integral y la prevalencia de los derechos de todos los niños, niñas y adolescentes.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una comprensión adecuada del marco normativo y del enfoque psicosocial en la atención a población migrante y retornada.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            'Según el contexto general de la migración, ¿cuáles son las principales causas que originaron la migración forzada?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La búsqueda de oportunidades educativas en el exterior.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Factores asociados a violencia, conflictos armados o desastres naturales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Intercambios culturales promovidos por gobiernos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La decisión voluntaria de mejorar las condiciones laborales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una comprensión adecuada del marco normativo y del enfoque psicosocial en la atención a población migrante y retornada.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            'De acuerdo con la Ley 2136 de 2021, que adopta la Política Integral Migratoria, ¿qué aspecto se resalta dentro de sus principios y ejes de acción?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La participación ciudadana y sociedad civil.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'La exclusión de las comunidades de acogida en los procesos de decisión',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El fortalecimiento exclusivo de la seguridad fronteriza.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La limitación de la atención a personas en situación irregular.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una comprensión adecuada del marco normativo y del enfoque psicosocial en la atención a población migrante y retornada.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            'Según el componente psicosocial, ¿a quiénes afectan los impactos generados por los procesos de migración?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo a las personas migrantes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Únicamente a las autoridades locales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'A las personas migrantes, retornados y a las comunidades receptoras.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Exclusivamente a las organizaciones humanitarias.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una comprensión adecuada del marco normativo y del enfoque psicosocial en la atención a población migrante y retornada.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            'Según la Ley 2460 de 2025, ¿qué reconoce el Estado colombiano respecto a la salud mental?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Que sea un servicio opcional dentro del sistema de salud.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Que solo aplica en casos de emergencia.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Que es un derecho fundamental y de acceso universal.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Que depende de la condición económica del usuario.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una comprensión adecuada del marco normativo y del enfoque psicosocial en la atención a población migrante y retornada.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            'De acuerdo con el Decreto 0729 de 2025, ¿qué deben garantizar las entidades territoriales en sus planes de salud?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La inclusión de programas de atención psicosocial con enfoque diferencial.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La eliminación de los servicios de salud mental.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La atención solo a población migrante irregular.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El cierre progresivo de los servicios comunitarios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una comprensión adecuada del marco normativo y del enfoque psicosocial en la atención a población migrante y retornada.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            'Según el contenido del componente formativo, ¿cómo se relacionan las normas internacionales con la legislación nacional sobre migración y atención psicosocial?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Las normas internacionales sustituyen completamente las leyes nacionales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Orientar la formulación de leyes y políticas nacionales en materia migratoria y psicosocial.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'No tienen relación con la legislación colombiana.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Se aplica únicamente en casos de emergencia humanitaria.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una comprensión adecuada del marco normativo y del enfoque psicosocial en la atención a población migrante y retornada.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
