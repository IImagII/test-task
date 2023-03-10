import React from 'react'
import axios from 'axios'

import { Box, Link } from '@mui/material'
import { NavLink, useParams } from 'react-router-dom'
import { PostsListItem } from '../store/Slice/postsSlice'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

export const OnePost: React.FC = () => {
   const { id } = useParams() //получаем параметры id
   const [post, setPost] = React.useState<PostsListItem>()

   //Реализуем получение данных асинхронным запросом на сервер по конкретному id
   React.useEffect(() => {
      const post = async () => {
         try {
            const { data } = await axios.get(
               `https://api.spaceflightnewsapi.net/v3/articles/${id}`
            )
            setPost(data)
         } catch (err) {
            console.log(err)
         }
      }
      post()
   }, [id])

   //показываем пользователю если еще не подгрузился наш пост
   if (!post) {
      return <p>Идет загрузка....</p>
   }
   return (
      <>
         <Container>
            <Box
               sx={{
                  maxWidth: '1290px',
                  height: '80vh',
                  textAlign: 'center',
                  border: '1px solid #EAEAEA',
                  boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
               }}
            >
               <img
                  src={post.imageUrl}
                  alt={post.title}
                  style={{
                     height: '400px',
                     width: '700px',
                     marginTop: '25px',
                     maxWidth: '100%',
                  }}
               />
               <Typography
                  variant='h1'
                  sx={{
                     fontSize: '24px',
                     marginTop: '35px',
                     marginBottom: '50px',
                  }}
               >
                  {post.title}
               </Typography>

               <Typography
                  sx={{
                     maxWidth: '1000px',
                  }}
               >
                  {post.summary}
               </Typography>

               <Box sx={{ marginTop: '70px' }}>
                  <NavLink to={'/'}>
                     <Link
                        sx={{
                           fontWeight: 700,
                           fontSize: '16px',
                           lineHeight: '150%',
                           color: '#363636',
                        }}
                     >
                        Back to homepage
                     </Link>
                  </NavLink>
               </Box>
            </Box>
         </Container>
      </>
   )
}
