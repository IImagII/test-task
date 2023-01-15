import { Grid } from '@mui/material'
import React from 'react'
import { ListItem } from './ListItem'
import { useAppDispatch, useAppSelector } from '../@types/hooks'
import { axiosPosts } from '../store/Slice/postsSlice'
import { SearchContext } from '../hooks/SearchProvider'
import { useDebounce } from '../hooks/useDebounce'
import styles from '././Search/Search.module.scss'

export const List: React.FC = () => {
   const { items, status } = useAppSelector(state => state.posts) //через Redux берем значения
   const { searchValue } = React.useContext(SearchContext) //через хук прокидываем наше значение строки поиска
   const debouncedSearchTerm = useDebounce(searchValue, 300) //реализуем кастомный хук для задержки ввода символов

   const dispatch = useAppDispatch()

   //получаем посты с сервера
   React.useEffect(() => {
      dispatch(axiosPosts())
   }, [dispatch])

   //Реализация поиска
   const filterPosts = items.filter(item => {
      return (
         item.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
         item.summary.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
      )
   })

   const HightLight = (props: any) => {
      const { filter, str } = props
      if (!filter) {
         return str
      }
      const regExt = new RegExp(filter, 'ig')
      const matchValue = str.match(regExt)
      if (matchValue) {
         return str.split(regExt).map((item: any, i: any, arr: any) => {
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

   const posts = filterPosts.map(posts => (
      <ListItem {...posts} key={posts.id} />
   ))

   return (
      <>
         <Grid container rowSpacing={2}>
            {status === 'loading'
               ? 'Идет загрузка страницы подождите.....'
               : posts}
         </Grid>
      </>
   )
}
