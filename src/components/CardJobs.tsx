import { IPropsCardJobs } from "../types/IPropsCardJobs"

export const CardJobs = ({url,title,date,description,rol}:IPropsCardJobs)=>{
	return(
		<div
			className="card-job"
		>
			<div style={{
				display:'flex',
				flexDirection:'row',
				justifyContent:'space-between',
			}}>
				<div style={{
					display:'flex',
					flexDirection:'row',
					gap:'7px',
					alignItems:'center'
				}}>
					<img src={url} width={80} height={80} />
					<div style={{
						display:'flex',
						flexDirection:'column',
						gap:'5px'
					}}>
						<p style={{
							margin:0,
							fontSize:'20px',
							fontWeight:'700'
						}}>{title}</p>
						<p style={{
							margin:0,
							fontSize:'18px',
							fontWeight:'600'
						}}>{rol}</p>
					</div>
				</div>
				<span style={{
					color:'#C1C1C1',
					fontStyle:'italic'
				}}>{date}</span>
			</div>
			<p style={{
					color:'#C1C1C1',
				}}>{description}</p>
		</div>
	)
}