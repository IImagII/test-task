//Делаем рефакторинг кода для хука useContext()

import React, { ReactNode } from 'react'
import { createContext, useState } from 'react'

type TChildren = {
   children: ReactNode
}
interface IContextProps {
   searchValue: string
   setSearchValue: (type: string) => void
}

export const SearchContext = createContext<IContextProps>({} as IContextProps)

export const SearchProvider: React.FC<TChildren> = ({ children }) => {
   const [searchValue, setSearchValue] = useState<string>('')

   return (
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
         {children}
      </SearchContext.Provider>
   )
}
