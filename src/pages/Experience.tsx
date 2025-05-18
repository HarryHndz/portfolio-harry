import { CardJobs } from "../components/CardJobs"
import { useLanguage } from "../hoocks/useLanguage"
import { jobsEnglish,jobsSpanish } from "../utils/experienceList"


export default function Experience() {
	const {language} = useLanguage()
	const jobsList = language === 'English' ? jobsEnglish : jobsSpanish
	return(
		<div className="container-subdata" style={{gap:'30px',paddingTop:'10px'}} id="experience" tabIndex={0}>
			<h2 className="secondary-title">{language === 'Español' ? 'Experiencia': 'Experience'}</h2>
			{
				jobsList.map((j)=>(
					<CardJobs
						key={j.id}
						id={j.id} 
						title={j.title}
						description={j.description}
						date={j.date}
						url={j.url}
						rol={j.rol}
					/>
				))
			}
			
		</div>
	)
}