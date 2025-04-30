import { ReactNode } from "react"

export interface IPropsCard{
	key:number
	title: string
	language: string
	description: string
	image: string
	technologies: ReactNode[]
	link:string
	link2?:string
}