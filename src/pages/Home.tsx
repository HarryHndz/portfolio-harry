import { Button } from "../components/Button"
import { DocumentCvv } from "../assets/cvv"
import { Linkedin } from "../assets/linkedin"
import { Github } from "../assets/github"
import { profile } from "../utils/profile"
import { useLanguage } from "../hoocks/useLanguage"
export default function Home() {
  const {language} = useLanguage()
  return(
    <div className="home" id="home">
      <img 
        src="/profile.jpg" 
        className="image-profile" 
      />
      <div className="description-profile">
        <h1>Harry Hernández Arias </h1>
        <h2>{language === 'Español' ? profile.rolSpanish : profile.rolEnglish}</h2>
        <p>{language === 'Español' ? profile.descriptionSpanish: profile.descriptionEnglish}</p>
      </div>
      <div className="buttons-socials">
          <Button 
            text={language === 'Español' ?'Descargar cv' : 'Download cv'} 
            iconRight={<DocumentCvv width={20} height={20} />}
            onClick={()=> window.location.href='/HarryHernandezAriasCV.docx.pdf'} 
          />
          <Button
            iconRight={<Linkedin width={20} height={20} />}
            text="Linkedin" 
            onClick={()=>window.location.href='https://www.linkedin.com/in/harry-hdze/'}
          />
          <Button
            iconRight={<Github width={20} height={20} />}
            text="GitHub"
            onClick={()=>window.location.href='https://github.com/HarryHndz'} 
          />
        </div>
    </div>
  )
}
