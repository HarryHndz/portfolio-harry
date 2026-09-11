export const translations = {
  es: {
    nav: {
      about: "Sobre mí",
      experience: "Experiencia",
      education: "Estudios",
      achievements: "Logros",
      skills: "Habilidades",
      projects: "Proyectos",
      contact: "Contacto",
    },
    hero: {
      greeting: "Hola, soy",
      roleLabel: "Ingeniero de Software",
      roleLabel2: "Desarrollador Fullstack",
      role: "Ingeniero de Software",
      roleDescription: "con experiencia fullstack en gobierno y sector privado, orientado a sistemas con LLM, RAG y agentes sobre AWS Bedrock y Grok.",
      cta: "Ver Proyectos",
      cv: "Descargar CV",
      cvFile: "/HarryHernandezArias_CV_ESP.pdf",
    },
    about: {
      title: "Acerca de mí",
      content: "Ingeniero en Desarrollo y Gestión de Software con experiencia fullstack en los sectores gobierno y privado: sistemas multiplataforma, integración de sistemas, APIs/backend y módulos de analítica. Trabajo con AWS, Firebase, Python (FastAPI), SQL (PostgreSQL/MySQL) y el ecosistema JavaScript/TypeScript en React, Node.js y NestJS. He orientado mi perfil hacia sistemas basados en LLM, diseño de prompts, arquitecturas RAG y agentes.",
      content2: "Años de experiencia",
      content3: "Proyectos personales"
    },
    experience: {
      title: "Experiencia Profesional",
      items: [
        {
          company: "Tribunal de Justicia Administrativa de Tabasco",
          role: "Ingeniero de Software",
          period: "Mayo 2026 - Actualidad",
          description: "Adapté e integré el sistema de juicios en línea de la CDMX al Tribunal de Tabasco, normalizando el modelo de datos y los catálogos documentales, lo que automatizó el flujo judicial de 5 salas unitarias. Construí un módulo centralizado de analítica e informes con SQL sobre PostgreSQL, unificando el seguimiento operativo y reduciendo el tiempo de reportes en Excel.",
        },
        {
          company: "XpectreLabs — YogoApp (freelance)",
          role: "Backend Developer / Fullstack",
          period: "Diciembre 2025 - Julio 2026",
          description: "Diseñé y construí el backend de una app de transporte en NestJS, TypeScript y Firestore: API REST modular, autenticación y roles, verificación de conductores, membresías con Pub/Sub, Firebase y notificaciones push. Desplegué la infraestructura en AWS Lightsail, la landing en S3, y apoyé las apps móviles de conductores y pasajeros en React Native.",
        },
        {
          company: "Secretaría de Gubernatura del Estado de Tabasco",
          role: "Desarrollador Fullstack",
          period: "Diciembre 2025 - Abril 2026",
          description: "Desarrollé una plataforma de gestión y monitoreo de indicadores de gobierno con dashboards, consolidando datos de 9 dependencias. Construida con TypeScript, Angular, Express.js y PostgreSQL. Traduje requerimientos de áreas no técnicas en especificaciones y modelos de datos, reduciendo el retrabajo por ambigüedad.",
        },
        {
          company: "Productos de Cómputo Gil (PCGIL)",
          role: "Desarrollador Fullstack",
          period: "Agosto 2024 - Noviembre 2025",
          description: "Lideré el soporte, mantenimiento y despliegue de actualizaciones de ScolarSoft y ScolarSoft Black, reduciendo el tiempo medio de resolución de incidencias. Desarrollé una app multiplataforma de gestión ganadera con React, React Native y Expo (11 módulos, frontend, backend y pruebas de integración) e integré APIs REST en dos backends Node.js/Express.",
        },
        {
          company: "Productos de Cómputo Gil (PCGIL)",
          role: "Desarrollador Frontend (Prácticas profesionales)",
          period: "Mayo 2024 - Agosto 2024",
          description: "Diseñé en Figma interfaces responsivas para una aplicación interna y construí componentes reutilizables para frontends web con React.",
        }
      ]
    },
    education: {
      title: "Estudios",
      items: [
        {
          institution: "Universidad Tecnológica de Tabasco",
          degree: "Ingeniería en Desarrollo y Gestión de Software Multiplataforma",
          period: "Septiembre 2022 - Abril 2026",
        },
        {
          institution: "Anthropic Claude Partner Network",
          degree: "Agent Skills, Building with the Claude API, Model Context Protocol y Claude Code in Action",
          period: "Mayo 2026 - Junio 2026",
        },
        {
          institution: "Samsung Innovation Campus / Universidad de Monterrey",
          degree: "Internet de las Cosas (IoT) e Inteligencia Artificial con Python",
          period: "Octubre 2023 - Marzo 2024",
        },
        {
          institution: "Oracle Next Education / Alura Latam",
          degree: "Backend y análisis de datos",
          period: "Marzo 2023 - Septiembre 2023",
        }
      ]
    },
    achievements: {
      title: "Logros",
      items: [
        "NASA International Space Apps Challenge 2025 — Global Nominee, seleccionado entre más de 1,290 equipos nominados a nivel mundial por un sistema de calidad del aire con datos de observación terrestre de la NASA para Ciudad de México y Los Ángeles.",
        "Construí agentes de IA para planificación de viajes e identificación de noticias falsas sobre AWS Bedrock y Grok en los hackathones de Google Cloud Run y Lablab.ai, con prompts de sistema, salidas JSON estructuradas y guardrails de entrada/salida.",
        "Organizador y líder del AWS User Group Cárdenas (Tabasco, México).",
      ]
    },
    skills: {
      title: "Lenguajes y Herramientas",
      categories: {
        languages: "Lenguajes",
        frontend: "Frontend",
        backend: "Backend",
        tools: "Herramientas",
      }
    },
    projects: {
      title: "Proyectos Destacados",
      viewProject: "Ver Proyecto",
      viewGithub: "GitHub",
      items: [
        {
          title: "AirGuard — NASA Space Apps Challenge 2025",
          description: "Proyecto Global Nominee del NASA International Space Apps Challenge 2025. Sistema para comprender datos complejos de calidad del aire con observaciones de la NASA y otras fuentes: visualizaciones, pronósticos y recomendaciones de salud para Ciudad de México y Los Ángeles.",
          images: [
            "/airguard.png"
          ],
          link: "",
          github: "https://github.com/Ivanhdz04/AirGuard",
          technologies: ["JavaScript", "React", "Python"]
        },
        {
          title: "NewsApp — Google Cloud Run Hackathon",
          description: "Agente de IA para identificar noticias falsas, con frontend web e integración de Grok/Gemini. Diseñé prompts de sistema, salidas JSON estructuradas y guardrails de entrada/salida bajo restricciones de tiempo de hackathón.",
          images: [
            "/news-app.png"
          ],
          link: "https://news-app-frontend-521441037803.us-central1.run.app/",
          github: "https://github.com/Ivanhdz04/AirGuard",
          technologies: ["JavaScript", "React", "Python", "Grok"]
        },
        {
          title: "SafePulse App",
          description: "Aplicación multiplataforma, web y móvil, para la gestión de contactos y el envío de alertas de emergencia en tiempo real a sus contactos.",
          images: [
            "/safePulse.png"
          ],
          link: "",
          github: "https://github.com/HarryHndz/alert-button-app",
          technologies: ["TypeScript", "React Native", "Expo", "Tailwind CSS", "MQTT"]
        },
        {
          title: "Travel Prosus Backend",
          description: "Backend de planificación de viajes con agentes de IA sobre AWS Bedrock y Grok. Proyecto de cinco ingenieros para el hackathon Raise Your Hack de Lablab.ai, con prompts de sistema, salidas estructuradas y guardrails.",
          images: [
            "/travelProsus.png"
          ],
          link: "",
          github: "https://github.com/Rodrup9/travel-prosus/tree/dev",
          technologies: ["Python", "FastAPI", "Supabase", "Neo4j", "AWS Bedrock"]
        },
        {
          title: "Ecommerce",
          description: "Sitio web ecommerce para la venta de productos, con un panel de administración para el alta de tiendas, productos, categorías y pedidos.",
          images: [
            "/ecomercephp.png"
          ],
          link: "",
          github: "https://github.com/HarryHndz/laravel-ecommerce",
          technologies: ["PHP", "Laravel", "MySQL", "HTML5", "CSS3", "JavaScript"]
        }
      ]
    }
  },
  en: {
    nav: {
      about: "About Me",
      experience: "Experience",
      education: "Education",
      achievements: "Achievements",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      roleLabel: "Software Engineer",
      roleLabel2: "Fullstack Developer",
      role: "Software Engineer",
      roleDescription: "with fullstack experience in government and private sectors, focused on LLM systems, RAG architectures, and agents on AWS Bedrock and Grok.",
      cta: "View Projects",
      cv: "Download CV",
      cvFile: "/HarryHernandezArias_CV_ENG.pdf",
    },
    about: {
      title: "About Me",
      content: "Software Engineer with fullstack experience in the government and private sectors, building cross-platform systems, system integrations, APIs/backend services, and data analytics modules. I work with AWS, Firebase, Python (FastAPI), SQL (PostgreSQL/MySQL), and the JavaScript/TypeScript ecosystem in React, Node.js, and NestJS. I have focused my profile on LLM-based systems, prompt design, RAG architectures, and agents.",
      content2: "Years of experience",
      content3: "Personal Projects"
    },
    experience: {
      title: "Professional Experience",
      items: [
        {
          company: "Tribunal de Justicia Administrativa de Tabasco",
          role: "Software Engineer",
          period: "May 2026 - Present",
          description: "Adapted and integrated Mexico City's online court filing system for the Tabasco Court, normalizing the data model and document catalogs across both institutions and automating the judicial workflow of 5 unitary chambers. Built a centralized analytics and reporting module with optimized SQL on PostgreSQL, unifying operational tracking and reducing time spent on Excel reports.",
        },
        {
          company: "XpectreLabs — YogoApp (freelance)",
          role: "Backend Developer / Fullstack",
          period: "December 2025 - July 2026",
          description: "Designed and built the complete backend of a ride-hailing app in NestJS, TypeScript, and Firestore: modular REST API, authentication and roles, driver verification, paid memberships with Pub/Sub, Firebase, and push notifications. Deployed infrastructure on AWS Lightsail, hosted the landing on S3, and supported driver and passenger mobile apps in React Native.",
        },
        {
          company: "Secretaría de Gubernatura del Estado de Tabasco",
          role: "Fullstack Developer",
          period: "December 2025 - April 2026",
          description: "Developed a government indicator management and monitoring platform with dashboards, consolidating data from 9 agencies. Built with TypeScript, Angular, Express.js, and PostgreSQL. Translated non-technical requirements into functional specifications and scalable data models, reducing rework caused by ambiguity.",
        },
        {
          company: "Productos de Cómputo Gil (PCGIL)",
          role: "Fullstack Developer",
          period: "August 2024 - November 2025",
          description: "Led support, maintenance, and rollout of updates for ScolarSoft and ScolarSoft Black, reducing mean time to resolution. Developed a cross-platform livestock management app with React, React Native, and Expo (11 modules including frontend, backend, and integration tests) and integrated REST APIs into two Node.js/Express backends.",
        },
        {
          company: "Productos de Cómputo Gil (PCGIL)",
          role: "Frontend Developer (Internship)",
          period: "May 2024 - August 2024",
          description: "Designed responsive, high-performance interfaces in Figma for an internal application and built reusable React components for web frontends.",
        }
      ]
    },
    education: {
      title: "Education",
      items: [
        {
          institution: "Universidad Tecnológica de Tabasco",
          degree: "Engineering Degree in Cross-Platform Software Development and Management",
          period: "September 2022 - April 2026",
        },
        {
          institution: "Anthropic Claude Partner Network",
          degree: "Agent Skills, Building with the Claude API, Model Context Protocol, and Claude Code in Action",
          period: "May 2026 - June 2026",
        },
        {
          institution: "Samsung Innovation Campus / Universidad de Monterrey",
          degree: "Internet of Things (IoT) and Artificial Intelligence with Python",
          period: "October 2023 - March 2024",
        },
        {
          institution: "Oracle Next Education / Alura Latam",
          degree: "Backend and data analysis",
          period: "March 2023 - September 2023",
        }
      ]
    },
    achievements: {
      title: "Achievements",
      items: [
        "NASA International Space Apps Challenge 2025 — Global Nominee, selected among more than 1,290 nominated teams worldwide for an air quality system using NASA Earth observation data for Mexico City and Los Angeles.",
        "Built AI agents for trip planning and fake news detection on AWS Bedrock and Grok at the Google Cloud Run and Lablab.ai hackathons, with system prompts, structured JSON outputs, and input/output guardrails.",
        "Organizer and lead of the AWS User Group Cárdenas (Tabasco, Mexico).",
      ]
    },
    skills: {
      title: "Languages and Tools",
      categories: {
        languages: "Languages",
        frontend: "Frontend",
        backend: "Backend",
        tools: "Tools",
      }
    },
    projects: {
      title: "Featured Projects",
      viewProject: "View Project",
      viewGithub: "GitHub",
      items: [
        {
          title: "AirGuard — NASA Space Apps Challenge 2025",
          description: "Global Nominee project of the NASA International Space Apps Challenge 2025. A system to make complex air quality data easier to understand using NASA Earth observation data: visualizations, forecasts, and health recommendations for Mexico City and Los Angeles.",
          images: [
            "/airguard.png"
          ],
          link: "",
          github: "https://github.com/Ivanhdz04/AirGuard",
          technologies: ["JavaScript", "React", "Python"]
        },
        {
          title: "NewsApp — Google Cloud Run Hackathon",
          description: "AI agent for fake news detection, with a web frontend and Grok/Gemini integration. Designed system prompts, structured JSON outputs, and input/output guardrails under hackathon time constraints.",
          images: [
            "/news-app.png"
          ],
          link: "https://news-app-frontend-521441037803.us-central1.run.app/",
          github: "https://github.com/Ivanhdz04/AirGuard",
          technologies: ["JavaScript", "React", "Python", "Grok"]
        },
        {
          title: "SafePulse App",
          description: "Cross-platform web and mobile application for managing contacts and sending real-time emergency alerts to their contacts.",
          images: [
            "/safePulse.png"
          ],
          link: "",
          github: "https://github.com/HarryHndz/alert-button-app",
          technologies: ["TypeScript", "React Native", "Expo", "Tailwind CSS", "MQTT"]
        },
        {
          title: "Travel Prosus Backend",
          description: "Travel planning backend with AI agents on AWS Bedrock and Grok. Built by five software engineers for the Raise Your Hack hackathon on Lablab.ai, with system prompts, structured outputs, and guardrails.",
          images: [
            "/travelProsus.png"
          ],
          link: "",
          github: "https://github.com/Rodrup9/travel-prosus/tree/dev",
          technologies: ["Python", "FastAPI", "Supabase", "Neo4j", "AWS Bedrock"]
        },
        {
          title: "Ecommerce",
          description: "Ecommerce website for selling products, including an admin panel to manage stores, products, categories, and orders.",
          images: [
            "/ecomercephp.png"
          ],
          link: "",
          github: "https://github.com/HarryHndz/laravel-ecommerce",
          technologies: ["PHP", "Laravel", "MySQL", "HTML5", "CSS3", "JavaScript"]
        }
      ]
    }
  }
};

export type Language = 'es' | 'en';
export type I18n = typeof translations.en;
