import { Box, Link } from '@mui/material'
import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { PostsListItem } from '../store/Slice/postsSlice'
import axios from 'axios'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

export const OnePost: React.FC = () => {
   const { id } = useParams()
   const [post, setPost] = React.useState<PostsListItem>()

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
   }, [])

   if (!post) {
      return <>"Идет загрузка...."</>
   }
   return (
      <>
         <Container sx={{ marginBottom: '20px' }}>
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
               <Box
                  sx={{
                     maxWidth: '1000px',
                  }}
               >
                  <Typography>{post.summary}</Typography>
               </Box>
            </Box>
         </Container>
         <NavLink to={'/'}>
            <Link
               sx={{
                  fontWeight: 700,
                  fontSize: '16px',
                  lineHeight: '150%',
                  color: '#363636',
                  marginLeft: '240px',
               }}
            >
               Back to homepage
            </Link>
         </NavLink>
      </>
   )
}
