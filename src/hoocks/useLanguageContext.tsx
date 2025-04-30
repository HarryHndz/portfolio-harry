import { createContext, ReactNode, useState } from "react";

type TLanguage = 'Español' | 'English'
interface ILanguageContext{
  language:TLanguage;
  setLanguage:(language:TLanguage)=>void;
}

export const LanguageContext = createContext<ILanguageContext | undefined>(undefined)

export const LanguageProvider = ({children}:{children:ReactNode})=>{
  const [language,setLanguage] = useState<TLanguage>('Español')

  return(
    <LanguageContext.Provider value={{language,setLanguage}}>
      {children}
    </LanguageContext.Provider>
  )
}
