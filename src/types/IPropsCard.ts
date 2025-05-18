import { ReactNode } from "react"

export type TTechnologies = {
	name: string
	icon: ReactNode
}

export interface IPropsCard{
	key:number
	title: string
	language: string
	description: string
	image: string
	technologies: TTechnologies[]
	link:string
	link2?:string
}