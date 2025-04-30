import { ButtonHTMLAttributes, ReactNode } from "react"

type PropsButton  = {
  text?: string,
  iconRight?:ReactNode,
  iconLeft?:ReactNode,
} & ButtonHTMLAttributes<HTMLButtonElement>


export const Button = ({text,iconLeft,iconRight,...props}:PropsButton)=>{
  return(
    <button {...props}>
      <div style={{display:'flex',flexDirection:'row',gap:'5px',alignItems:'center',justifyContent:'center'}}>
        {iconRight && iconRight}
        <span>{text}</span>
        {iconLeft && iconLeft}
      </div>
    </button>
  )
}