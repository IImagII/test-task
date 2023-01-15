//Реализуем кастомный хук для задержки ввода символов в поле Search

import React from 'react'

export const useDebounce = (value: string, delay: number) => {
   const [debouncedValue, setDebouncedValue] = React.useState(value)

   React.useEffect(() => {
      const handler = setTimeout(() => {
         setDebouncedValue(value)
      }, delay)

      return () => {
         clearTimeout(handler)
      }
   }, [value])

   return debouncedValue
}
