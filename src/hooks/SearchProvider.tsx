//Делаем рефакторинг кода для хука useContext()

import React from 'react'

type TChildren = {
   children: React.ReactNode
}
interface IContextProps {
   searchValue: string
   setSearchValue: (type: string) => void
}

export const SearchContext = React.createContext<IContextProps>(
   {} as IContextProps
)

export const SearchProvider: React.FC<TChildren> = ({ children }) => {
   const [searchValue, setSearchValue] = React.useState<string>('')

   return (
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
         {children}
      </SearchContext.Provider>
   )
}
