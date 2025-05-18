import { IPropsCardJobs } from "../types/IPropsCardJobs"

export const CardJobs = ({url,title,date,description,rol}:IPropsCardJobs)=>{
	return(
		<div
			className="card-job"
		>
			<div className="container-subdata-card">
				<div className="container-logo">
					<img src={url} width={80} height={80} />
				</div>
				<div style={{
					display:'flex',
					flexDirection:'column',
					gap:'5px'
				}}>
					<p style={{
						margin:0,
						fontSize:'20px',
						fontWeight:'700',
						color:'#f9fafb'
					}}>{title}</p>
					<p style={{
						margin:0,
						fontSize:'18px',
						fontWeight:'600',
						color:'#f9fafb'
					}}>{rol}</p>
				</div>
				<span style={{
					color:'#d1d5db',
					fontStyle:'italic'
				}}>{date}
				</span>
			</div>
			<p style={{
					color:'#d1d5db',
				}}>{description}</p>
		</div>
	)
}