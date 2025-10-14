import { IPropsCard } from "../types/IPropsCard"
import { Html5 } from "../assets/html"
import { Javascript } from "../assets/javascript"
import { Laravel } from "../assets/laravel"
import { Materialui } from "../assets/materialUi"
import { Mysql } from "../assets/mysql"
import { Php } from "../assets/php"
import { Python } from "../assets/python"
import { ReactLogo } from "../assets/react"
import { Css3 } from "../assets/stylesheet"
import { Typescript } from "../assets/typescript"
import { Expo } from "../assets/expo"
import { TailwindCss } from "../assets/tailwind"
import { FastApi } from "../assets/fastapi"
import { Supabase } from "../assets/supabase"
import { Neo4j } from "../assets/neo4j"
import { Mqtt } from "../assets/mqtt"
import { WebSocket } from "../assets/websocket"


export const projectsSpanish: Omit<IPropsCard, 'language'>[] = [
  {
    key: 1,
    title: 'AirGuard - 2025 Nasa Space Apps Challenge',
    link: 'https://github.com/Ivanhdz04/AirGuard',
    description:'Proyecto ganador regional del hackatón NASA Space Apps Challenge 2025, celebrado en la Ciudad de México. El equipo, conformado por seis ingenieros de software, desarrolló una aplicación web que permite medir la calidad del aire y generar predicciones para los días siguientes, a partir de los datos proporcionados por TEMPO NASA.',
    image: '/airguard.png',
    technologies: [
      { name: 'JavaScritp', icon: <Javascript width={20} height={20} /> },
      { name: 'React', icon: <ReactLogo width={20} height={35} /> },
      { name: 'Python', icon: <Python width={20} height={35} /> },
    ]
  },
  {
    key: 2,
    title: 'SafePulse App',
    link: 'https://github.com/HarryHndz/alert-button-app',
    description:'Aplicación multiplataforma, web y móvil, para la gestión de contactos y el envío de alertas de emergencia en tiempo real a sus contactos.',
    image: '/safePulse.png',
    technologies: [
      { name: 'TypeScript', icon: <Typescript width={20} height={20} /> },
      { name: 'React Native', icon: <ReactLogo width={20} height={35} /> },
      { name: 'Expo', icon: <Expo width={20} height={35} /> },
      { name: 'Tailwind', icon: <TailwindCss width={20} height={20} /> },
      {name:'Protocolo Mqtt',icon:<Mqtt width={20} height={35} />}
    ]
  },
  {
    key: 3,
    title: 'Travel Prosus Backend',
    link: 'https://github.com/Rodrup9/travel-prosus/tree/dev',
    description:'Backend de la plataforma Travel Prosus para la planificación de viajes, que utiliza inteligencia artificial para crear experiencias personalizadas. Proyecto desarrollado por cinco ingenieros de software para el hackathon Raise Your Hack de la plataforma lablab.ai.',
    image: '/travelProsus.png',
    technologies: [
      { name: 'Python', icon: <Python width={20} height={20} /> },
      { name: 'FastAPI', icon: <FastApi width={20} height={35} /> },
      { name: 'Supabase', icon: <Supabase width={20} height={35} /> },
      { name: 'Neo4j', icon: <Neo4j width={20} height={20} /> },
      { name: 'WebSocket', icon: <WebSocket width={20} height={20} color="white" /> }
    ]
  },
  {
    key: 4,
    title: 'Front End transporte',
    link: 'https://github.com/HarryHndz/proyecto-combis',
    description:'Sitio web para la visualización del transporte publico de la región en tiempo real, panel de admimistración para dueños y choferes.',
    image: '/frontCombis.png',
    technologies: [
      { name: 'TypeScript', icon: <Typescript width={20} height={20} /> },
      { name: 'React', icon: <ReactLogo width={20} height={35} /> },
      { name: 'Material UI', icon: <Materialui width={20} height={20} /> }
    ]
  },
  {
    key: 5,
    title: 'Ecommerce',
    link: 'https://github.com/HarryHndz/laravel-ecommerce',
    description:
      'Sitio web ecommerce para la venta de productos; con un panel de administración para el alta de tiendas, productos, categorias y pedidos.',
    image: '/ecomercephp.png',
    technologies: [
      { name: 'PHP', icon: <Php width={25} height={25} /> },
      { name: 'Laravel', icon: <Laravel width={20} height={20} /> },
      { name: 'MySQL', icon: <Mysql width={35} height={35} /> },
      { name: 'HTML5', icon: <Html5 width={20} height={20} /> },
      { name: 'CSS3', icon: <Css3 width={20} height={20} /> },
      { name: 'JavaScript', icon: <Javascript width={20} height={20} /> }
    ]
  },
  
];

export const projectsEnglish: Omit<IPropsCard, 'language'>[] = [
  {
    key: 1,
    title: 'AirGuard',
    link: 'https://github.com/Ivanhdz04/AirGuard',
    description:"Regional winning project of the NASA Space Apps Challenge 2025, held in Mexico City. The team, composed of six software engineers, developed a web application that measures air quality and generates predictions for the following days using data provided by NASA's TEMPO.",
    image: '/airguard.png',
    technologies: [
      { name: 'JavaScritp', icon: <Javascript width={20} height={20} /> },
      { name: 'React', icon: <ReactLogo width={20} height={35} /> },
      { name: 'Python', icon: <Python width={20} height={35} /> },
    ]
  },
  {
    key: 2,
    title: 'SafePulse App',
    link: 'https://github.com/HarryHndz/alert-button-app',
    description:'Cross-platform web and mobile application for managing contacts and sending real-time emergency alerts to their contacts.',
    image: '/safePulse.png',
    technologies: [
      { name: 'TypeScript', icon: <Typescript width={20} height={20} /> },
      { name: 'React Native', icon: <ReactLogo width={20} height={35} /> },
      { name: 'Expo', icon: <Expo width={20} height={35} /> },
      { name: 'Tailwind', icon: <TailwindCss width={20} height={20} /> },
      {name:'Protocolo Mqtt',icon:<Mqtt width={20} height={35} />}
    ]
  },
  {
    key: 3,
    title: 'Travel Prosus Backend',
    link: 'https://github.com/Rodrup9/travel-prosus/tree/dev',
    description:'Backend of the Travel Prosus platform for travel planning, which uses artificial intelligence to create personalized experiences. Project developed by five software engineers for the Raise Your Hack hackathon on the lablab.ai platform.',
    image: '/travelProsus.png',
    technologies: [
      { name: 'Python', icon: <Python width={20} height={20} /> },
      { name: 'FastAPI', icon: <FastApi width={20} height={35} /> },
      { name: 'Supabase', icon: <Supabase width={20} height={35} /> },
      { name: 'Neo4j', icon: <Neo4j width={20} height={20} /> },
      { name: 'WebSocket', icon: <WebSocket width={20} height={20} color="white" /> }
    ]
  },
  {
    key: 4,
    title: 'Public Transport Frontend',
    link: 'https://github.com/HarryHndz/proyecto-combis',
    description:
      'Website for real-time public transport visualization in the region, with an admin panel for owners and drivers.',
    image: '/frontCombis.png',
    technologies: [
      { name: 'TypeScript', icon: <Typescript width={20} height={20} /> },
      { name: 'React', icon: <ReactLogo width={20} height={35} /> },
      { name: 'Material UI', icon: <Materialui width={20} height={20} /> }
    ]
  },
  {
    key: 5,
    title: 'Ecommerce',
    link: 'https://github.com/HarryHndz/laravel-ecommerce',
    description:
      'Ecommerce website for selling products, including an admin panel to manage stores, products, categories, and orders.',
    image: '/ecomercephp.png',
    technologies: [
      { name: 'PHP', icon: <Php width={25} height={25} /> },
      { name: 'Laravel', icon: <Laravel width={20} height={20} /> },
      { name: 'MySQL', icon: <Mysql width={35} height={35} /> },
      { name: 'HTML5', icon: <Html5 width={20} height={20} /> },
      { name: 'CSS3', icon: <Css3 width={20} height={20} /> },
      { name: 'JavaScript', icon: <Javascript width={20} height={20} /> }
    ]
  },
];