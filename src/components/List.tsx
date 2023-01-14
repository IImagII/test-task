import { Grid } from '@mui/material'
import React from 'react'
import { ListItem } from './ListItem'
import { useAppDispatch, useAppSelector } from '../@types/hooks'
import { axiosPosts } from '../store/Slice/postsSlice'
import { Link } from 'react-router-dom'

export const List: React.FC = () => {
   const { items, status } = useAppSelector(state => state.posts)

   const dispatch = useAppDispatch()

   React.useEffect(() => {
      dispatch(axiosPosts())
   }, [dispatch])

   const posts = items.map(posts => <ListItem {...posts} key={posts.id} />)

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
