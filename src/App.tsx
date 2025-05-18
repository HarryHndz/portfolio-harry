import { Header } from "./components/Header"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import './App.css'
import Skills from "./pages/Skills"
import Experience from "./pages/Experience"
import {LanguageProvider} from './hoocks/useLanguageContext.tsx'

function App() {
  return (
    <LanguageProvider>
      <Header />
      <main className="main">
        <Home />
        <Skills />
        <Experience />
        <Projects />
      </main>
    </LanguageProvider>
  )
}

export default App
