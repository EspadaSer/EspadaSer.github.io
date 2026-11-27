/* ============================================================
   PROYECTOS · edita este archivo para añadir/quitar tarjetas
   ------------------------------------------------------------
   Campos:
     title       título de la tarjeta
     year        año (número)
     category    categoría temática (se muestra como etiqueta)
     scope       "Profesional" o "Personal" (controla el filtro principal)
     description texto corto (1-2 frases)
     icon        kite, sun, signal, grid, dice, volume, cards
     iconSrc     ruta a un SVG propio (opcional, sustituye a icon)
     tags        array de etiquetas (máx. ~3)
     link        ruta relativa desde la raíz, o null si no hay web
     color       color de acento (hex) para icono, línea y enlace
   ============================================================ */
const PROJECTS = [
  {
    title: "SwissKitePower",
    year: 2013,
    category: "Energía",
    scope: "Profesional",
    description: "Proyecto colaborativo de investigación y desarrollo de energía eólica mediante cometas.",
    icon: "kite",
    iconSrc: "2013/images/skp-logo.svg",
    tags: ["Eólica", "I+D"],
    link: "2013/index.html",
    color: "#38bdf8"
  },
  {
    title: "PV Analyzer",
    year: 2015,
    category: "Energía",
    scope: "Profesional",
    description: "Solución de pruebas eléctricas para verificar y diagnosticar el rendimiento de arrays fotovoltaicos.",
    icon: "sun",
    tags: ["Fotovoltaica", "Diagnóstico"],
    link: "2015/index.html",
    color: "#fbbf24"
  },
  {
    title: "Time Domain Reflectometer",
    year: 2016,
    category: "Instrumentación",
    scope: "Profesional",
    description: "Prototipo para medir la longitud de cables mediante reflectometría en el dominio del tiempo.",
    icon: "signal",
    tags: ["Instrumentación", "Prototipo"],
    link: null,
    color: "#a78bfa"
  },
  {
    title: "QS Software",
    year: 2017,
    category: "Software",
    scope: "Profesional",
    description: "Software de ingeniería para el análisis de informes generados con SmartPlant3D.",
    icon: "grid",
    tags: ["Ingeniería", "Automatización"],
    link: null,
    color: "#34d399"
  },
  {
    title: "Bingo de Multiplicaciones",
    year: 2025,
    category: "Educación",
    scope: "Personal",
    description: "Bingo interactivo para practicar las tablas de multiplicar de forma divertida.",
    icon: "dice",
    tags: ["Educación", "Interactivo"],
    link: "personal/bingo100.html",
    color: "#f472b6"
  },
  {
    title: "Bingo Speaker",
    year: 2025,
    category: "Educación",
    scope: "Personal",
    description: "Complemento de voz que anuncia los números cantados durante el juego del bingo.",
    icon: "volume",
    tags: ["Voz", "Bingo"],
    link: "personal/bingospeaker.html",
    color: "#fb923c"
  },
  {
    title: "Generador de Cartones",
    year: 2025,
    category: "Herramientas",
    scope: "Personal",
    description: "Genera cartones de bingo de 90 números listos para imprimir o compartir.",
    icon: "cards",
    tags: ["Bingo", "Generador"],
    link: "personal/cartonbingo.html",
    color: "#22d3ee"
  }
];

/* En _preview/ los enlaces suben un nivel. Al copiar a la raíz del sitio,
   cambia esta constante por ''. */
const BASE = '';
