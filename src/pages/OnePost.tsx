import { Box } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'
// import { axiosPostsId } from '../store/Slice/postsSlice'
import { useAppDispatch, useAppSelector } from '../@types/hooks'

export const OnePost: React.FC = () => {
   const { id } = useParams()

   const dispatch = useAppDispatch()

   React.useEffect(() => {
      dispatch(axiosPostsId(id))
   }, [])

   return <Box component='img'></Box>
}
