import { Expo } from "../assets/expo";
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
import { TTechnologies } from "../types/IPropsCard";

const technologiesUse:TTechnologies[] =[
	{
    name: 'PHP',
    icon: <Php width={100} height={100} />
  },
  {
    name: 'Laravel',
    icon: <Laravel width={80} height={80} />
  },
  {
    name: 'React',
    icon: <ReactLogo width={80} height={80} />
  },
  {
    name: 'Expo',
    icon: <Expo width={80} height={80} />
  },
  {
    name: 'TypeScript',
    icon: <Typescript width={80} height={80} />
  },
  {
    name: 'HTML5',
    icon: <Html5 width={80} height={80} />
  },
  {
    name: 'CSS3',
    icon: <Css3 width={80} height={80} />
  },
  {
    name: 'Python',
    icon: <Python width={80} height={80} />
  },
  {
    name: 'Node.js',
    icon: <Nodejs width={80} height={80} />
  },
  {
    name: 'Express.js',
    icon: <Expressjs width={80} height={80} />
  },
  {
    name: 'MySQL',
    icon: <Mysql width={80} height={80} />
  },
]


export default function Skills() {
	const {language} = useLanguage()
	return(
		<div className="container-subdata" style={{backgroundColor:'#111827',justifyContent:'center'}}>
			<h2 className="secondary-title">{language === 'Español' ? 'Habilidades Tecnicas' : 'Skills'}</h2>
			<p style={{color:'#d1d5db',marginBottom:'20px',textAlign:'center'}}>
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