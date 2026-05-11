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
      roleLabel2:"Desarrollador Fullstack",
      role: "Ingeniero de Software",
      roleDescription:"enfocado como desarrollador fullstack de aplicaciones web y movil.",
      cta: "Ver Proyectos",
      cv: "Descargar CV",
    },
    about: {
      title: "Acerca de mí",
      content: "Cuento con experiencia sólida en el ecosistema JavaScript/TypeScript y Python fullstack, complementado con experiencia en bases de datos SQL con PostgreSQL y NoSQL con Firebase. He participado en proyectos gubernamentales y empresariales desarrollando plataformas web, aplicaciones móviles y módulos backend.",
      content2: "Años de experiencia" , 
      content3: "Proyectos personales"   
    },
    experience: {
      title: "Experiencia Profesional",
      items: [
        {
          company: "Secretaria de Gubernatura Tabasco",
          role: "Desarrollador Fullstack",
          period: "Diciembre 2025 - Abril 2026",
          description: "Desarrollo de unaplataforma web para la gestión y monitoreo de indicadores gubernamentales del Estado de Tabasco. Adicionalmente, participé en el análisis y procesamiento de datos para la creación de dashboards interactivos en Power BI, facilitando la visualización de la información.",
        },
        {
          company: "PCGIL (Productos de Computo Gil )",
          role: "Desarrollador Fullstack",
          period: "Agosto 2024 - Noviembre 2025",
          description: "Lideré el soporte y despliegue de actualizaciones para las apps ScolarSoft y ScolarSoft Black, a la par que participé en el desarrollo de una plataforma de gestión ganadera multiplataforma (React, React Native, Expo), enfocándome en la integración integral de servicios, APIs y funcionalidades clave.",
        },
         {
          company: "PCGIL (Productos de Computo Gil )",
          role: "Desarrollador Frontend Practicante",
          period: "Mayo 2024 - Agosto 2024",
          description: "Participé en el ciclo de desarrollo de aplicaciones internas, abarcando desde el diseño de interfaces UI/UX en Figma hasta el desarrollo de componentes interactivos para el frontend web y móvil utilizando React Native y Expo.",
        }
      ]
    },
    education: {
      title: "Estudios",
      items: [
        {
          institution: "Universidad Tecnológica de Tabasco",
          degree: "Ingeniería en Desarrollo y Gestión de Software",
          period: "Septiembre 2022 - Abril 2026",
        },
        {
          institution: "Curso Samsung Innovation Campus 2023/ Universidad de Monterrey",
          degree: "Certificado en Internet de las Cosas (IoT)/python",
          period: "Octubre 2023 - Marzo 2024",
        },
         {
          institution: "Oracle Next Education/Alura Latam",
          degree: "Curso de backend, base de datos y ciencia de datos en línea",
          period: "Marzo 2023 - Septiembre 2023",
        }
      ]
    },
    achievements: {
      title: "Logros",
      items: [
        "Reconocido como Nominados Globales en el NASA International Space Apps Challenge 2025, siendo seleccionado entre más de 1,290 equipos nominados a nivel mundial.",
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
          title: "AirGuard - 2025 Nasa Space Apps Challenge",
          description: "Proyecto ganador regional del hackathon NASA Space Apps Challenge 2025, y nominado globalmente. El equipo desarrolló una aplicación web que permite medir la calidad del aire y generar predicciones para los días siguientes, a partir de los datos proporcionados por TEMPO NASA.",
          images: [
            "/airguard.png"
          ],
          link: "",
          github: "https://github.com/Ivanhdz04/AirGuard",
          technologies: ["JavaScript", "React", "Python"]
        },
        {
          title: "NewsApp - Hackatón Google Cloud Run Hackathon",
          description: "Frontend de una plataforma web que permite a los usuarios informarse si las noticias que leen son falsas o verdaderas con integración de IA con gemini.",
          images: [
            "/news-app.png"
          ],
          link: "https://news-app-frontend-521441037803.us-central1.run.app/",
          github: "https://github.com/Ivanhdz04/AirGuard",
          technologies: ["JavaScript", "React", "Python"]
        },
        {
          title: "SafePulse App",
          description: "Aplicación multiplataforma, web y móvil, para la gestión de contactos y el envío de alertas de emergencia en tiempo real a sus contactos.",
          images: [
            "/safePulse.png"
          ],
          link: "",
          github: "https://github.com/HarryHndz/alert-button-app",
          technologies: ["TypeScript", "React Native", "Expo", "Tailwind CSS", "Protocolo MQTT"]
        },
        {
          title: "Travel Prosus Backend",
          description: "Backend de la plataforma Travel Prosus para la planificación de viajes, que utiliza inteligencia artificial para crear experiencias personalizadas. Proyecto desarrollado por cinco ingenieros de software para el hackathon Raise Your Hack de la plataforma lablab.ai.",
          images: [
            "/travelProsus.png"
          ],
          link: "",
          github: "https://github.com/Rodrup9/travel-prosus/tree/dev",
          technologies: ["Python", "FastAPI", "Supabase", "Neo4j", "WebSocket"]
        },
        {
          title: "Ecommerce",
          description: "Sitio web ecommerce para la venta de productos; con un panel de administración para el alta de tiendas, productos, categorias y pedidos.",
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
      roleLabel2:"Fullstack Developer",
      role: "Software Development Engineer",
      roleDescription:"focused as a fullstack developer of web and mobile applications",
      cta: "View Projects",
      cv: "Download CV",
    },
    about: {
      title: "About Me",
      content: "I have solid experience in the JavaScript/TypeScript and Python full-stack ecosystem, complemented by experience in SQL databases with PostgreSQL and NoSQL with Firebase. I have participated in government and enterprise projects developing web platforms, mobile applications, and backend modules.",
      content2: "Years of experience",
      content3: "Personal Projects"
    },
    experience: {
      title: "Professional Experience",
      items: [
        {
          company: "Secretaria de Gubernatura Tabasco",
          role: "Fullstack Developer",
          period: "December 2025 - April 2026",
          description: "Development of a web platform for the management and monitoring of government indicators for the State of Tabasco. Additionally, I participated in data analysis and processing to create interactive dashboards in Power BI, facilitating information visualization.",
        },
        {
          company: "PCGIL (Productos de Computo Gil )",
          role: "Fullstack Developer",
          period: "August 2024 - November 2025",
          description: "Led the support and deployment of updates for the ScolarSoft and ScolarSoft Black apps, while also participating in the development of a cross-platform livestock management platform (React, React Native, Expo), focusing on the comprehensive integration of services, APIs, and key functionalities.",
        },
        {
          company: "PCGIL (Productos de Computo Gil )",
          role: "Frontend Developer Intern",
          period: "May 2024 - August 2024",
          description: "Participated in the development cycle of internal applications, ranging from UI/UX interface design in Figma to the development of interactive components for web and mobile frontend using React Native and Expo.",
        }
      ]
    },
    education: {
      title: "Education",
      items: [
        {
          institution: "Universidad Tecnológica de Tabasco",
          degree: "Software Development and Management Engineering",
          period: "September 2022 - April 2026",
        },
        {
          institution: "Samsung Innovation Campus Course 2023/ Universidad de Monterrey",
          degree: "Certificate in Internet of Things (IoT)/python",
          period: "October 2023 - March 2024",
        },
        {
          institution: "Oracle Next Education/Alura Latam",
          degree: "Online backend, database, and data science course",
          period: "March 2023 - September 2023",
        }
      ]
    },
    achievements: {
      title: "Achievements",
      items: [
        "Selected as Global Nominees in the NASA International Space Apps Challenge 2025, being chosen from more than 1,290 nominated teams worldwide.",
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
          title: "AirGuard",
          description: "Regional winning project of the NASA Space Apps Challenge 2025, and nominated globally. The team developed a web application that measures air quality and generates predictions for the following days using data provided by NASA's TEMPO.",
          images: [
            "/airguard.png"
          ],
          link: "",
          github: "https://github.com/Ivanhdz04/AirGuard",
          technologies: ["JavaScript", "React", "Python"]
        },
        {
          title: "NewsApp - Hackatón Google Cloud Run Hackathon",
          description: "Frontend of a web platform that allows users to find out if the news they read are false or true with integration of IA with gemini.",
          images: [
            "/news-app.png"
          ],
          link: "https://news-app-frontend-521441037803.us-central1.run.app/",
          github: "https://github.com/Ivanhdz04/AirGuard",
          technologies: ["JavaScript", "React", "Python"]
        },
        {
          title: "SafePulse App",
          description: "Cross-platform web and mobile application for managing contacts and sending real-time emergency alerts to their contacts.",
          images: [
            "/safePulse.png"
          ],
          link: "",
          github: "https://github.com/HarryHndz/alert-button-app",
          technologies: ["TypeScript", "React Native", "Expo", "Tailwind CSS", "Protocolo MQTT"]
        },
        {
          title: "Travel Prosus Backend",
          description: "Backend of the Travel Prosus platform for travel planning, which uses artificial intelligence to create personalized experiences. Project developed by five software engineers for the Raise Your Hack hackathon on the lablab.ai platform.",
          images: [
            "/travelProsus.png"
          ],
          link: "",
          github: "https://github.com/Rodrup9/travel-prosus/tree/dev",
          technologies: ["Python", "FastAPI", "Supabase", "Neo4j", "WebSocket"]
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
