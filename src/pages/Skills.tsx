import { Expressjs } from "../assets/expressjs";
import { Html5 } from "../assets/html";
import { Laravel } from "../assets/laravel";
import { Mysql } from "../assets/mysql";
import { Nodejs } from "../assets/nodejs";
import { Php } from "../assets/php";
import { Python } from "../assets/python";
import { ReactLogo } from "../assets/react";
import { Css3 } from "../assets/stylesheet";
import { Typescript } from "../assets/typescript";
import { LisCardTech } from "../components/ListCardTech";
import { useLanguage } from "../hoocks/useLanguage";

const technologiesUse =[
	<Php width={100} height={100} />,
  <Laravel width={80} height={80} />,
	<ReactLogo width={80} height={80} />,
	<Typescript width={80} height={80} />,
	<Html5 width={80} height={80} />,
	<Css3 width={80} height={80} />,
	<Python width={80} height={80} />,
	<Nodejs width={80} height={80} />,
	<Expressjs width={80} height={80} />,
	<Mysql width={80} height={80} />
]


export default function Skills() {
	const {language} = useLanguage()
	return(
		<div className="container-subdata">
			<h2 className="secondary-title">{language === 'Español' ? 'Habilidades Tecnicas' : 'Skills'}</h2>
			<p>
				{
					language === 'Español' 
					? 'Tecnologías con las que he trabajado y en las que tengo experiencia.'
					: 'Technologies I have worked with and have experience in.'
				}
			</p>
			<LisCardTech
				justify
				gap={'50px'} 
				technologies={technologiesUse} />
		</div>
	)
}