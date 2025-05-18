import { TTechnologies } from "../types/IPropsCard"

interface IPropsListCardTech {
	technologies:TTechnologies[]
	gap?:string | number
	justify:boolean
}
export const LisCardTech = ({technologies,gap,justify}:IPropsListCardTech)=>{
  return(
	<div className="list-icons" style={{gap:gap ?? '10px',justifyContent:justify ? 'center' : 'flex-start'}}>
		{technologies.map(({icon,name},index)=>(
			<div className="icon" key={index}>
				{icon}
				<p>{name}</p>
			</div>
		))}
	</div>
	)
}