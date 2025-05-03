import { Card } from "../components/Card"
import { useLanguage } from "../hoocks/useLanguage"
import { projectsEnglish,projectsSpanish } from "../utils/projectList"

export default function Projects() {
  const {language} = useLanguage()
  const listDetails = language === 'Español' ? projectsSpanish : projectsEnglish
	return (
		<div className="container-subdata" id="projects" tabIndex={0}>
			<h2 className="secondary-title">{language === 'Español' ? 'Proyectos' : 'Projects'}</h2>
      <div className="list-cards">
        { listDetails.map((p)=>(
          <Card
            key={p.key}
            language={language} 
            title={p.title}
            description={p.description}
            link={p.link}
            link2={p.link2}
            image={p.image}
            technologies={p.technologies}
          />
        ))
      }
      </div>
		</div>
	)

}