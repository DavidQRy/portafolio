import {
  // Font Awesome Icons (manteniendo todos los existentes)
  FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaDatabase, FaGitAlt, FaGithub,
  FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaDribbble, FaCodepen,
  FaHistory, FaFolder, FaRegClock, FaRegBookmark, FaItalic, FaTable,
  FaBars, FaPhp,FaCss3 // Agregado FaPhp
} from 'react-icons/fa';

import { 
  BiCodeAlt 
} from 'react-icons/bi';

import { 
  VscVm, VscDebugConsole, VscDatabase, VscSettingsGear 
} from 'react-icons/vsc';

import { 
  MdGroups 
} from 'react-icons/md';

import { 
  SiTypescript, SiRedux, SiExpress, SiMongodb, SiPostgresql, SiJest, SiWebpack,
  SiTailwindcss, SiPhp // Agregados para Tailwind y PHP oficial
} from 'react-icons/si';

import { 
  GrUserExpert 
} from 'react-icons/gr';
export const MENU_LINKS = [
  { id: "01", label: "Inicio", offset: -100, to: "hero" },
  { id: "02", label: "Habilidades", offset: -80, to: "skills" },
  { id: "03", label: "Sobre Mí", offset: -80, to: "about" },
  { id: "04", label: "Proyectos", offset: -80, to: "projects" },
  { id: "05", label: "Contacto", offset: -80, to: "contact" }
];

// About Me Section
export const ABOUT_ME = {
  content: `
Soy David, un Desarrollador Full-Stack apasionado por crear soluciones web completas y eficientes. 
Mi viaje en el desarrollo comenzó con el frontend, pero rápidamente descubrí mi pasión por ambos lados del desarrollo, disfrutando tanto del diseño de interfaces atractivas como de la lógica robusta del backend.

Especializado en el ecosistema JavaScript, domino tecnologías como React y Next.js para el frontend, junto con Node.js y Express para construir APIs RESTful. En el backend, también tengo experiencia con PHP y sistemas de bases de datos tanto SQL como NoSQL.

Lo que más me motiva es encontrar ese punto perfecto donde el diseño elegante se encuentra con la arquitectura técnica sólida. Creo firmemente en desarrollar aplicaciones que no solo funcionen bien, sino que también ofrezcan experiencias de usuario excepcionales.

Más allá del código, me apasiona aprender constantemente, mantenerme actualizado con las últimas tendencias tecnológicas y compartir conocimiento con la comunidad de desarrolladores. Mi enfoque combina la atención al detalle del frontend con la mentalidad analítica del backend, permitiéndome crear soluciones integrales.

Tengo experiencia trabajando con metodologías ágiles, control de versiones con Git, y despliegue de aplicaciones en entornos cloud. Siempre busco escribir código limpio, mantenible y bien documentado.
`,
  socialLinks: [
    { id: "1", label: "Facebook", icon: FaFacebook, link: "#" },
    { id: "2", label: "Instagram", icon: FaInstagram, link: "#" },
    { id: "3", label: "Twitter", icon: FaTwitter, link: "#" },
    { id: "4", label: "LinkedIn", icon: FaLinkedin, link: "#" },
    { id: "5", label: "GitHub", icon: FaGithub, link: "#" }
  ],
  contactInfo: {
    email: "davidgui393@gamil.com",
    phone: "+57 302 326 34 11",
    website: "https://midominio.com"
  },
  stats: [
    { value: "3+", label: "Años de experiencia" },
    { value: "30+", label: "Proyectos completados" },
    { value: "Full-Stack", label: "Especialización" }
  ]
};

export const STATS = [
    {id: "1", value: "3+", label: "Años de experiencia" },
    {id: "2", value: "30+", label: "Proyectos completados" },
    {id: "3", value: "Full-Stack", label: "Especialización" }
  ]

// Skills Tabs
export const SKILL_TABS = [
  { id: "01", label: "All", value: "all" },
  { id: "02", label: "Frontend", value: "frontend" },
  { id: "03", label: "Backend", value: "backend" },
  { id: "04", label: "Tools", value: "tools" },
  { id: "05", label: "Soft Skills", value: "soft-skills" }
];

// Skills Data
export const SKILLS = [
  // Frontend
  {
    id: "01",
    icon: FaReact,
    skill: "React JS",
    progress: 95,
    type: "frontend",
    description: "Más de 3 años desarrollando aplicaciones web escalables con React. Experto en hooks, Context API, Redux y optimización de rendimiento. He implementado arquitecturas componentizadas, SSR con Next.js y aplicaciones PWA."
  },
  {
    id: "02",
    icon: SiTypescript,
    skill: "TypeScript",
    progress: 85,
    type: "frontend",
    description: "Implementación de TypeScript en proyectos empresariales para mejorar la calidad del código. Experiencia en definición de tipos complejos, interfaces y generics. Integración con React y Node.js para desarrollo full-stack tipado."
  },
  {
    id: "03",
    icon: FaJs,
    skill: "JavaScript",
    progress: 92,
    type: "frontend",
    description: "Dominio avanzado de ECMAScript 6+. Implementación de patrones de diseño como Singleton, Factory y Observer. Uso profesional de programación asíncrona con Promises, async/await y RxJS para manejo de eventos complejos."
  },
  {
    id: "11",
    icon: FaHtml5,
    skill: "HTML5",
    progress: 90,
    type: "frontend",
    description: "Maquetación semántica con énfasis en accesibilidad (WAI-ARIA) y SEO. Experiencia en integración con APIs modernas como Canvas, Geolocation y Web Storage. Implementación de templates para CMS y SSR."
  },
  {
    id: "12",
    icon: FaCss3,
    skill: "CSS3",
    progress: 88,
    type: "frontend",
    description: "Estilizado avanzado con Flexbox, Grid, animaciones CSS y variables custom. Implementación de metodologías como BEM y SMACSS. Diseño responsive con enfoque mobile-first y cross-browser compatibility."
  },
  {
    id: "13",
    icon: SiTailwindcss,
    skill: "Tailwind CSS",
    progress: 87,
    type: "frontend",
    description: "Implementación de sistemas de diseño atomicos con Tailwind. Configuración personalizada de themes, plugins y variantes. Integración con PostCSS y optimización para producción con PurgeCSS."
  },
  
  // Backend
  {
    id: "04",
    icon: FaNodeJs,
    skill: "Node.js",
    progress: 88,
    type: "backend",
    description: "Desarrollo de APIs RESTful y GraphQL con Node.js. Implementación de arquitecturas escalables con patrones como MVC y Clean Architecture. Experiencia con streams, workers y clustering para optimización."
  },
  {
    id: "05",
    icon: SiExpress,
    skill: "Express",
    progress: 85,
    type: "backend",
    description: "Creación de APIs empresariales con middleware custom, manejo de errores y validación de datos. Integración con sistemas de autenticación (JWT, OAuth2) y documentación con Swagger/OpenAPI."
  },
  {
    id: "06",
    icon: SiMongodb,
    skill: "MongoDB",
    progress: 80,
    type: "backend",
    description: "Diseño de esquemas NoSQL optimizados. Implementación de agregaciones complejas, transacciones y replicación. Experiencia con Mongoose para modelado de datos y validaciones."
  },
  {
    id: "14",
    icon: SiPhp,
    skill: "PHP",
    progress: 75,
    type: "backend",
    description: "Desarrollo de aplicaciones web con PHP moderno (7.4+). Experiencia con Laravel para desarrollo de APIs y aplicaciones empresariales. Integración con bases de datos SQL y sistemas legacy."
  },
  
  // Tools
  {
    id: "07",
    icon: FaGitAlt,
    skill: "Git",
    progress: 90,
    type: "tools",
    description: "Flujos de trabajo profesionales con Git Flow y GitHub Flow. Resolución avanzada de conflictos, rebasing y manejo de hooks. Configuración de CI/CD con Git hooks y GitHub Actions."
  },
  {
    id: "15",
    icon: FaGithub,
    skill: "GitHub",
    progress: 88,
    type: "tools",
    description: "Gestión profesional de repositorios con issues, projects y milestones. Implementación de GitHub Actions para CI/CD. Uso avanzado de pull requests, code reviews y gestión de equipos."
  },
  {
    id: "08",
    icon: VscDebugConsole,
    skill: "Terminal",
    progress: 85,
    type: "tools",
    description: "Dominio de terminal en Linux y Windows. Automatización con scripts Bash/PowerShell. Configuración de ambientes de desarrollo con Docker CLI. Manejo avanzado de SSH y conexiones remotas."
  },
  
  // Soft Skills
  {
    id: "09",
    icon: MdGroups,
    skill: "Teamwork",
    progress: 90,
    type: "soft-skills",
    description: "Colaboración efectiva en equipos ágiles multidisciplinarios. Experiencia como tech lead y mentoría de desarrolladores junior. Comunicación técnica efectiva con stakeholders no técnicos."
  },
  {
    id: "10",
    icon: GrUserExpert,
    skill: "Problem Solving",
    progress: 95,
    type: "soft-skills",
    description: "Enfoque sistemático para debugging y optimización. Habilidad para descomponer problemas complejos en soluciones implementables. Mentalidad de crecimiento constante y aprendizaje continuo."
  },
  {
  id: "11",
  icon: SiPostgresql,
  skill: "PostgreSQL",
  progress: 83,
  type: "backend",
  description: "Experiencia en diseño y administración de bases de datos PostgreSQL, incluyendo optimización de queries complejas, implementación de funciones almacenadas, y manejo de tipos de datos avanzados como JSONB. Configuración de ambientes de alta disponibilidad con replicación y particionamiento de tablas para grandes volúmenes de datos."
}
];

import PROJECT_IMG_9 from '../images/portafolio_develoment.png'
import PROJECT_IMG_7 from '../images/sistema_membresias.png'
import PROJECT_IMG_6 from '../images/APIMOVIE.png'
import PROJECT_IMG_8 from '../images/chat_envivo.png'

export const PROJECTS = [
  // Proyectos en proceso (más relevantes primero)
  {
    id: 9,
    title: "Portfolio Developer (en proceso)",
    description: "Portafolio profesional con React, Vite y Tailwind CSS",
    image: PROJECT_IMG_9,
    tags: ["React", "Vite", "Tailwind CSS"],
    complexity: 4,
    inProgress: true
  },
  // {
  //   id: 10,
  //   title: "Task Manager Full Stack (en desarrollo)",
  //   description: "Sistema de gestión de tareas con Node, Express y React",
  //   image: PROJECT_IMG_10,
  //   tags: ["React", "Node.js", "Express", "MongoDB"],
  //   complexity: 5,
  //   inProgress: true
  // },

  // Proyectos completados (ordenados por complejidad)
  {
    id: 7,
    title: "Sistema de Gestión de Membresías",
    description: "Sistema completo con roles, autenticación avanzada y notificaciones por correo",
    image: PROJECT_IMG_7,
    tags: ["PHP", "MySQL", "Bootstrap", "jQuery", "PHP Mailer"],
    complexity: 5,
    features: [
      "CRUD completo",
      "Sistema de roles",
      "Recuperación de contraseña con tokens",
      "Correos automatizados"
    ]
  },
  {
    id: 6,
    title: "API RESTful con MVC",
    description: "API para sistema de gestión construida con arquitectura MVC",
    image: PROJECT_IMG_6,
    tags: ["Node.js", "Express", "MySQL", "MVC"],
    complexity: 5
  },
  {
    id: 8,
    title: "Chat en Tiempo Real",
    description: "Aplicación de chat con WebSockets",
    image: PROJECT_IMG_8,
    tags: ["Node.js", "Express", "Socket.io"],
    complexity: 4
  },
  // {
  //   id: 2,
  //   title: "Sistema de Gestión de Productos",
  //   description: "CRUD completo con autenticación y base de datos relacional",
  //   image: PROJECT_IMG_2,
  //   tags: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
  //   complexity: 4
  // },
  // {
  //   id: 4,
  //   title: "Blog de Notas Personal",
  //   description: "Sistema de blog con autenticación y CRUD",
  //   image: PROJECT_IMG_4,
  //   tags: ["PHP", "MySQL", "Bootstrap"],
  //   complexity: 3
  // },
  // {
  //   id: 3,
  //   title: "Frontend Tienda de Ropa",
  //   description: "Maquetación responsive avanzada para e-commerce",
  //   image: PROJECT_IMG_3,
  //   tags: ["HTML5", "CSS3", "Grid", "Flexbox", "Media Queries"],
  //   complexity: 3
  // },
  // {
  //   id: 1,
  //   title: "Fanpage de Dragon Ball",
  //   description: "Página tributo con diseño responsive",
  //   image: PROJECT_IMG_1,
  //   tags: ["HTML5", "CSS3"],
  //   complexity: 2
  // },
  // {
  //   id: 5,
  //   title: "Fanpage Selección Colombia",
  //   description: "Sitio informativo sobre la selección de fútbol",
  //   image: PROJECT_IMG_5,
  //   tags: ["HTML5", "CSS3", "Bootstrap"],
  //   complexity: 2
  // }
];

// // Projects Data
// export const projects = [
//   {
//     id: "01",
//     title: "E-commerce Full-Stack",
//     description: "Plataforma completa con carrito, autenticación y panel de administración.",
//     technologies: [FaReact, FaNodeJs, SiMongodb],
//     link: "#"
//   },
//   {
//     id: "02",
//     title: "API REST Service",
//     description: "API robusta con autenticación JWT y documentación Swagger.",
//     technologies: [SiExpress, FaDatabase],
//     link: "#"
//   }
// ];