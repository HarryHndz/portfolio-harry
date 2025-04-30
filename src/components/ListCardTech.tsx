import { ReactNode } from "react"

interface IPropsListCardTech {
	technologies:ReactNode[]
	gap?:string | number
}
export const LisCardTech = ({technologies,gap}:IPropsListCardTech)=>{
  return(
	<div className="list-icons" style={{gap:gap ?? '10px'}}>
		{technologies.map((icons,index)=>(
			<div className="icon" key={index}>{icons}</div>
		))}
	</div>
	)
}