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
      role: "Ingeniero en Desarrollo de Software",
      cta: "Ver Proyectos",
      cv: "Descargar CV",
    },
    about: {
      title: "Acerca de mí",
      content: "Ingeniero de software apasionado por crear soluciones innovadoras y eficientes. Con experiencia en desarrollo web moderno, arquitectura de sistemas y resolución de problemas técnicos complejos. Me enfoco en entregar código de alta calidad y experiencias de usuario excepcionales.",
    },
    experience: {
      title: "Experiencia Profesional",
      items: [
        {
          company: "Empresa Tecnológica A",
          role: "Ssr. Software Developer",
          period: "2022 - Presente",
          description: "Desarrollo de microservicios escalables y optimización de interfaces frontend de alto tráfico.",
        },
        {
          company: "Agencia Digital B",
          role: "Junior Web Developer",
          period: "2020 - 2022",
          description: "Colaboración en proyectos agile para clientes internacionales, utilizando React y Node.js.",
        }
      ]
    },
    education: {
      title: "Estudios",
      items: [
        {
          institution: "Universidad Tecnológica",
          degree: "Grado en Ingeniería de Software",
          period: "2016 - 2020",
        },
        {
          institution: "Instituto de Tecnología",
          degree: "Diplomado en Desarrollo Web Full Stack",
          period: "2019",
        }
      ]
    },
    achievements: {
      title: "Logros",
      items: [
        "Primer lugar en el Hackathon Nacional 2023.",
        "Reducción del 40% en tiempo de carga de la plataforma principal.",
        "Liderazgo técnico en la migración de infraestructura local a la nube.",
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
          title: "E-commerce Platform",
          description: "Una plataforma de comercio electrónico completa con pagos integrados y panel de administración.",
          images: [
            "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
            "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=800&q=80"
          ],
          link: "#",
          github: "#"
        },
        {
          title: "Task Management App",
          description: "Aplicación de gestión de tareas con tiempo real y colaboración en equipo.",
          images: [
            "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=800&q=80",
            "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80"
          ],
          link: "#",
          github: "#"
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
      role: "Software Development Engineer",
      cta: "View Projects",
      cv: "Download CV",
    },
    about: {
      title: "About Me",
      content: "Software engineer passionate about creating innovative and efficient solutions. With experience in modern web development, system architecture, and solving complex technical problems. I focus on delivering high-quality code and exceptional user experiences.",
    },
    experience: {
      title: "Professional Experience",
      items: [
        {
          company: "Tech Company A",
          role: "Ssr. Software Developer",
          period: "2022 - Present",
          description: "Scalable microservices development and high-traffic frontend optimization.",
        },
        {
          company: "Digital Agency B",
          role: "Junior Web Developer",
          period: "2020 - 2022",
          description: "Collaboration on agile projects for international clients, using React and Node.js.",
        }
      ]
    },
    education: {
      title: "Education",
      items: [
        {
          institution: "Technological University",
          degree: "B.S. in Software Engineering",
          period: "2016 - 2020",
        },
        {
          institution: "Technology Institute",
          degree: "Full Stack Web Development Diploma",
          period: "2019",
        }
      ]
    },
    achievements: {
      title: "Achievements",
      items: [
        "First place in the National Hackathon 2023.",
        "Reduced main platform loading time by 40%.",
        "Technical leadership in the migration from on-premise to cloud infrastructure.",
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
          title: "E-commerce Platform",
          description: "A complete e-commerce platform with integrated payments and admin panel.",
          images: [
            "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
            "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=800&q=80"
          ],
          link: "#",
          github: "#"
        },
        {
          title: "Task Management App",
          description: "Task management application with real-time updates and team collaboration.",
          images: [
            "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=800&q=80",
            "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80"
          ],
          link: "#",
          github: "#"
        }
      ]
    }
  }
};

export type Language = 'es' | 'en';
export type I18n = typeof translations.en;
