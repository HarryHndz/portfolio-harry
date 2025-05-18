import { Github } from "../assets/github"
import { IPropsCard } from "../types/IPropsCard"
import { Button } from "./Button"

export const Card = ({title,description,image,technologies,link,link2,language}:IPropsCard)=>{ 
  const titleButton = language === 'Español' ? 'código' : 'code'
  return(
    <div className="card-projects">
      <div className="container-img-project">
        <img src={image} alt={title} />
      </div>
      <div className="container-info-card">
        <p className="title-card">{title}</p>
        <p className="description-card">{description}</p>
        <div className="container-tech">
          {technologies.map(({icon,name})=>(
            <span className="span-icons">
              {icon}
              <p>{name}</p>
            </span>
          ))}
        </div>
        <div className="links-repo">
          <Button 
            text={titleButton} 
            iconRight={<Github width={20} height={20} />}
            style={{width:'120px',height:'50px',backgroundColor:'#1f2937'}} 
            onClick={()=>window.location.href =link }
          />
          {
            link2 && (
              <Button 
                text={titleButton} 
                iconRight={<Github width={20} height={20} />}
                style={{width:'120px',height:'50px',backgroundColor:'#1f2937'}} 
                onClick={()=>window.location.href =link2 }
              />
            )
          }
        </div>
      </div>
    </div>
  )

}

