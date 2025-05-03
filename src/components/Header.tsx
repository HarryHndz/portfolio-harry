import { Button } from "./Button"
import { Translate } from "../assets/translate"
import { useLanguage } from "../hoocks/useLanguage"
export const Header = () => {
  const {language,setLanguage} = useLanguage()
  return(
    <nav className="header">
      <ul>
        <a className="links" href="#home">{language === 'Español' ? 'Perfil' : 'Profile'}</a>
        <a className="links" href="#experience">{language === 'Español' ? 'Experiencia' : 'Experience'}</a>
        <a className="links" href="#projects">{language === 'Español' ? 'Proyectos' : 'Projects'}</a>
      </ul>
      <div>
        <Button 
          iconRight={<Translate width={20} height={20} />} 
          text={language} 
          onClick={()=>setLanguage(language === 'Español' ? 'English' : 'Español')}
        />
      </div>
    </nav>
  )
}