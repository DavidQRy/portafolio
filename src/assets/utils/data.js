import {
  // Font Awesome Icons
  FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaDatabase, FaGitAlt, FaGithub,
  FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaDribbble, FaCodepen,
  FaHistory, FaFolder, FaRegClock, FaRegBookmark,
  FaItalic, FaTable
} from 'react-icons/fa';
// Cambia tus imports de iconos por estos (versiones correctas):
import { 
  FaBars // Para el menú hamburguesa
} from 'react-icons/fa';
import { BiCodeAlt } from 'react-icons/bi';
import { VscVm, VscDebugConsole, VscDatabase, VscSettingsGear } from 'react-icons/vsc';
import { MdGroups } from 'react-icons/md';
import { SiTypescript, SiRedux, SiExpress, SiMongodb, SiPostgresql, SiJest, SiWebpack } from 'react-icons/si';
import { GrUserExpert } from 'react-icons/gr';

export const MENU_LINKS = [
  { id: "01", label: "Inicio", offset: -100, to: "hero" },
  { id: "02", label: "Habilidades", offset: -80, to: "skills" },
  { id: "03", label: "Sobre Mí", offset: -80, to: "about" },
  { id: "04", label: "Proyectos", offset: -80, to: "projects" },
  { id: "05", label: "Contacto", offset: -80, to: "contact" }
];

// About Me Section
export const ABOUT_ME = {
  content: [
    "Soy un Desarrollador Full-Stack apasionado por crear soluciones web completas.",
    "Mi viaje comenzó con el frontend, pero descubrí que amo tanto el backend como el frontend.",
    "Especializado en JavaScript (React, Node.js), disfruto crear aplicaciones desde la base de datos hasta la interfaz."
  ],
  socialLinks: [
    { id: "1", label: "Facebook", icon: FaFacebook, link: "#" },
    { id: "2", label: "Instagram", icon: FaInstagram, link: "#" },
    { id: "3", label: "Twitter", icon: FaTwitter, link: "#" },
    { id: "4", label: "LinkedIn", icon: FaLinkedin, link: "#" },
    { id: "5", label: "GitHub", icon: FaGithub, link: "#" }
  ],
  contactInfo: {
    email: "contacto@midominio.com",
    phone: "+34 123 456 789",
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
    description: "Experiencia en construcción de aplicaciones web escalables con React, hooks y Context API."
  },
  {
    id: "02",
    icon: SiTypescript,
    skill: "TypeScript",
    progress: 85,
    type: "frontend",
    description: "Desarrollo de aplicaciones tipadas para mayor robustez y mantenibilidad."
  },
  {
    id: "03",
    icon: FaJs,
    skill: "JavaScript",
    progress: 92,
    type: "frontend",
    description: "Dominio de ES6+, patrones de diseño y programación asíncrona."
  },
  
  // Backend
  {
    id: "04",
    icon: FaNodeJs,
    skill: "Node.js",
    progress: 88,
    type: "backend",
    description: "Creación de APIs y aplicaciones server-side con Node.js."
  },
  {
    id: "05",
    icon: SiExpress,
    skill: "Express",
    progress: 85,
    type: "backend",
    description: "Desarrollo de APIs RESTful con Express y middleware."
  },
  {
    id: "06",
    icon: SiMongodb,
    skill: "MongoDB",
    progress: 80,
    type: "backend",
    description: "Modelado de datos y consultas con bases de datos NoSQL."
  },
  
  // Tools
  {
    id: "07",
    icon: FaGitAlt,
    skill: "Git",
    progress: 90,
    type: "tools",
    description: "Control de versiones y flujos de trabajo colaborativos."
  },
  {
    id: "08",
    icon: VscDebugConsole,
    skill: "Terminal",
    progress: 85,
    type: "tools",
    description: "Uso avanzado de línea de comandos en diferentes entornos."
  },
  
  // Soft Skills
  {
    id: "09",
    icon: MdGroups,
    skill: "Teamwork",
    progress: 90,
    type: "soft-skills",
    description: "Colaboración efectiva en equipos multidisciplinarios."
  },
  {
    id: "10",
    icon: GrUserExpert,
    skill: "Problem Solving",
    progress: 95,
    type: "soft-skills",
    description: "Enfoque analítico para solucionar desafíos técnicos."
  }
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