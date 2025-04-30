import { Github } from "../assets/github"
import { IPropsCard } from "../types/IPropsCard"
import { Button } from "./Button"
import { LisCardTech } from "./ListCardTech"

export const Card = ({title,description,image,technologies,link,link2,language}:IPropsCard)=>{ 
  const titleButton = language === 'Español' ? 'código' : 'code'
  return(
    <div className="card-projects">
      <img src={image} alt={title} />
      <div className="container-info-card">
        <p className="title-card">{title}</p>
        <p className="description-card">{description}</p>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
          <Button 
            text={titleButton} 
            iconRight={<Github width={20} height={20} />}
            style={{width:'120px',height:'50px'}} 
            onClick={()=>window.location.href =link }
          />
          {
            link2 && (
              <Button 
                text={titleButton} 
                iconRight={<Github width={20} height={20} />}
                style={{width:'120px',height:'50px'}} 
                onClick={()=>window.location.href =link2 }
              />
            )
          }
        </div>
      </div>
      <LisCardTech technologies={technologies} />
    </div>
  )

}