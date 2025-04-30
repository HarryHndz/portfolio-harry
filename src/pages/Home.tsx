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
        src="https://c.wallhere.com/photos/ef/16/Jujutsu_Kaisen_Satoru_Gojo_breath_white_hair_blue_eyes_glowing_eyes_crowd_anime-2277402.jpg!d" 
        className="image-profile" 
      />
      <div className="description-profile">
        <h1>Harry Hernández Arias </h1>
        <h2>{language === 'Español' ? profile.rolSpanish : profile.rolEnglish}</h2>
        <p>{language === 'Español' ? profile.descriptionSpanish: profile.descriptionEnglish}</p>
      </div>
      <div className="buttons-socials">
          <Button 
            text={language === 'Español' ?'Descargar cvv' : 'Download cvv'} 
            iconRight={<DocumentCvv width={20} height={20} />} 
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
