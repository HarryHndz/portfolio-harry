import { LanguageProvider } from './components/LanguageProvider';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About, EducationAndAchievements } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';

function Portfolio() {
  return (
    <div className="min-h-screen bg-[#0A0A0B]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <EducationAndAchievements />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Portfolio />
    </LanguageProvider>
  );
}
