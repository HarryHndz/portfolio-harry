# 👨‍💻 Software Engineer Portfolio

Un portafolio profesional de Harry Hernández Arias, interactivo y responsivo construido para mostrar proyectos, experiencia, habilidades e información de contacto.

## 🚀 Características del Proyecto
- **Diseño Moderno y Responsivo**: Se adapta a todos los tamaños de pantalla (móviles, tablets y computadoras de escritorio).
- **Animaciones Fluidas**: Integración con librerías de animación para una experiencia de usuario dinámica.
- **Soporte Multilingüe**: Capacidad de cambiar el idioma de la aplicación.
- **Carrusel de Proyectos**: Visualización atractiva de proyectos destacados.
- **Secciones Clave**: Inicio (Hero), Sobre mí (About), Experiencia, Habilidades (Skills), Proyectos y Pie de página (Footer).

## 🛠️ Tecnologías Utilizadas

Este proyecto fue desarrollado utilizando las siguientes tecnologías y herramientas:

### Frontend Core
- **[React 19](https://react.dev/)**: Biblioteca principal para la construcción de interfaces de usuario.
- **[TypeScript](https://www.typescriptlang.org/)**: Tipado estático para un código más robusto y mantenible.
- **[Vite 6](https://vitejs.dev/)**: Herramienta de compilación ultrarrápida y entorno de desarrollo.

### Estilos y Diseño
- **[Tailwind CSS v4](https://tailwindcss.com/)**: Framework de CSS de utilidad (Utility-first) para un estilizado rápido.
- **[Lucide React](https://lucide.dev/)**: Colección de iconos modernos y consistentes.
- **clsx** & **tailwind-merge**: Utilidades para combinar y gestionar clases dinámicas de Tailwind de forma eficiente.

### Animaciones
- **[Motion](https://motion.dev/)**: Biblioteca para crear animaciones y transiciones fluidas en componentes de la interfaz.

## 📁 Estructura del Proyecto

```text
src/
├── components/          # Componentes reutilizables de UI y secciones (Hero, About, Projects, etc.)
├── constants/           # Datos estáticos, configuración e internacionalización
├── App.tsx              # Componente principal que estructura la página
├── main.tsx             # Punto de entrada de la aplicación
└── index.css            # Estilos globales y configuración de Tailwind CSS
```

## ⚙️ Instalación y Configuración Local

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

1. **Instalar dependencias**:
   Navega al directorio del proyecto e instala los paquetes necesarios usando `npm`, `yarn` o `pnpm`.
   ```bash
   npm install
   ```

2. **Ejecutar el servidor de desarrollo**:
   ```bash
   npm run dev
   ```
   La aplicación estará disponible por defecto en `http://localhost:3000`.

3. **Construir para producción**:
   ```bash
   npm run build
   ```
   Esto generará una carpeta `dist` con los archivos optimizados y empaquetados, listos para ser desplegados en plataformas como Vercel, Netlify o GitHub Pages.


