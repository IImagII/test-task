import React from 'react'
import styles from './HightLight.module.scss'

//реализуем хук для подсветки вводимой строки

export const HightLight = (props: any) => {
   const { filter, str } = props
   if (!filter) {
      return str
   }
   const regExt = new RegExp(filter, 'ig')
   const matchValue = str.match(regExt)

   if (matchValue) {
      return str.split(regExt).map((item: string, i: number, arr: []) => {
         if (i < arr.length - 1) {
            const value = matchValue.shift()
            return (
               <>
                  {item}
                  <span className={styles.hightlight}>{value}</span>
               </>
            )
         }
         return item
      })
   }
   return str
}
