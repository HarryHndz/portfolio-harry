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

export const projectsSpanish: Omit<IPropsCard, 'language'>[] = [
  {
    key: 1,
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
  {
    key: 2,
    title: 'Front End transporte',
    link: 'https://github.com/HarryHndz/proyecto-combis',
    description:
      'Sitio web para la visualización del transporte publico de la región en tiempo real, panel de admimistración para dueños y choferes.',
    image: '/frontCombis.png',
    technologies: [
      { name: 'TypeScript', icon: <Typescript width={20} height={20} /> },
      { name: 'React', icon: <ReactLogo width={20} height={35} /> },
      { name: 'Material UI', icon: <Materialui width={20} height={20} /> }
    ]
  },
  {
    key: 3,
    title: 'Visualización de sensores',
    link: 'https://github.com/HarryHndz/Samsung-iotpy',
    description:
      'Sitio web para la visualización y recolección de datos de sensores de temperatura y humedad; con opción para generar graficas y reportes.',
    image:
      'https://1.bp.blogspot.com/-Ft2qnANLqjM/XvzV_3XHndI/AAAAAAAAChs/x0YYzxB4cS88fCekPWVnGZStfEJjlnznACLcBGAsYHQ/s1600/1_nIjfoUR90CUKibydNhq_Bw.jpeg',
    technologies: [
      { name: 'HTML5', icon: <Html5 width={20} height={20} /> },
      { name: 'CSS3', icon: <Css3 width={20} height={20} /> },
      { name: 'Python', icon: <Python width={20} height={20} /> }
    ]
  },
  {
    key: 4,
    title: 'Calidad del sueño',
    link: 'https://github.com/Edd0720/backend-sleep-samsung',
    description:
      'Proyecto para calcular la calidad del sueño de una persona,utilizando un modelo de aprendizaje hecho con python.',
    image:
      'https://1.bp.blogspot.com/-Ft2qnANLqjM/XvzV_3XHndI/AAAAAAAAChs/x0YYzxB4cS88fCekPWVnGZStfEJjlnznACLcBGAsYHQ/s1600/1_nIjfoUR90CUKibydNhq_Bw.jpeg',
    technologies: [
      { name: 'Python', icon: <Python width={20} height={35} /> },
      { name: 'MySQL', icon: <Mysql width={35} height={35} /> }
    ]
  }
];

export const projectsEnglish: Omit<IPropsCard, 'language'>[] = [
  {
    key: 1,
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
  {
    key: 2,
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
    key: 3,
    title: 'Sensor Data Visualization',
    link: 'https://github.com/HarryHndz/Samsung-iotpy',
    description:
      'Website for visualizing and collecting data from temperature and humidity sensors, with options to generate graphs and reports.',
    image:
      'https://1.bp.blogspot.com/-Ft2qnANLqjM/XvzV_3XHndI/AAAAAAAAChs/x0YYzxB4cS88fCekPWVnGZStfEJjlnznACLcBGAsYHQ/s1600/1_nIjfoUR90CUKibydNhq_Bw.jpeg',
    technologies: [
      { name: 'HTML5', icon: <Html5 width={20} height={20} /> },
      { name: 'CSS3', icon: <Css3 width={20} height={20} /> },
      { name: 'Python', icon: <Python width={20} height={20} /> }
    ]
  },
  {
    key: 4,
    title: 'Sleep Quality',
    link: 'https://github.com/Edd0720/backend-sleep-samsung',
    description:
      'Project to calculate a persons sleep quality using a machine learning model in python.',
    image:
      'https://1.bp.blogspot.com/-Ft2qnANLqjM/XvzV_3XHndI/AAAAAAAAChs/x0YYzxB4cS88fCekPWVnGZStfEJjlnznACLcBGAsYHQ/s1600/1_nIjfoUR90CUKibydNhq_Bw.jpeg',
    technologies: [
      { name: 'Python', icon: <Python width={20} height={35} /> },
      { name: 'MySQL', icon: <Mysql width={35} height={35} /> }
    ]
  }
];