import { ReactNode } from "react"

interface IPropsListCardTech {
	technologies:ReactNode[]
	gap?:string | number
	justify:boolean
}
export const LisCardTech = ({technologies,gap,justify}:IPropsListCardTech)=>{
  return(
	<div className="list-icons" style={{gap:gap ?? '10px',justifyContent:justify ? 'center' : 'flex-start'}}>
		{technologies.map((icons,index)=>(
			<div className="icon" key={index}>{icons}</div>
		))}
	</div>
	)
}