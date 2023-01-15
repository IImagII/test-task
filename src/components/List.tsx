
import React from 'react'

import { Grid } from '@mui/material'
import { ListItem } from './ListItem'
import { useAppDispatch, useAppSelector } from '../@types/hooks'
import { axiosPosts } from '../store/Slice/postsSlice'
import { SearchContext } from '../hooks/SearchProvider'
import { useDebounce } from '../hooks/useDebounce'

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

   const posts = filterPosts.map(posts => (
      <ListItem
         id={posts.id}
         title={posts.title}
         summary={posts.summary}
         imageUrl={posts.imageUrl}
         publishedAt={posts.publishedAt}
         key={posts.id}
         debouncedSearchTerm={debouncedSearchTerm}
      />
   ))

   return (
      <>
         <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {status === 'loading' ? (
               <>Идет загрузка страницы подождите.....</>
            ) : (
               posts
            )}
         </Grid>
      </>
   )
}
