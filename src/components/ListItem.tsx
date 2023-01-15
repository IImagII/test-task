import {
   Card,
   CardActions,
   CardContent,
   CardMedia,
   Grid,
   Link,
   Typography,
} from '@mui/material'
import React, { useCallback } from 'react'

import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box/Box'

import { HightLight } from '../hooks/HightLight/HightLight'

interface IListItem {
   id: number | string
   title: string
   imageUrl: string
   summary: string
   publishedAt: string
   debouncedSearchTerm: string
}

export const ListItem: React.FC<IListItem> = ({
   id,
   title,
   summary,
   imageUrl,
   publishedAt,
   debouncedSearchTerm,
}) => {
   const navigate = useNavigate()

   //реализуем подсветку вводимого текста в поле Search
   const lightText = useCallback(
      (str: string) => {
         return <HightLight filter={debouncedSearchTerm} str={str} />
      },
      [debouncedSearchTerm]
   )
   return (
      <>
         <Grid item xs={12} md={4} sm={6}>
            <Box
               onClick={() => navigate(`posts/${id}`)}
               sx={{ cursor: 'pointer' }}
            >
               <Card
                  sx={{
                     maxWidth: 345,
                     margin: '0 auto',
                  }}
               >
                  <CardMedia
                     component='img'
                     alt='posts'
                     height='217'
                     width='400'
                     image={imageUrl}
                  />
                  <CardContent sx={{ minHeight: '27em' }}>
                     <Typography
                        component='div'
                        sx={{
                           fontSize: '14px',
                           lineHeight: '150%',
                           fontWeight: 400,
                           color: '#363636',
                           opacity: 0.6,
                           marginTop: '25px',
                        }}
                     >
                        {publishedAt.slice(0, 10)}
                     </Typography>
                     <Typography
                        component='h2'
                        sx={{
                           fontSize: '24px',
                           lineHeight: '29px',
                           fontWeight: 400,
                           color: '#363636',
                           marginTop: '24px',
                        }}
                     >
                        {lightText(title)}
                     </Typography>
                     <Typography
                        component='body'
                        sx={{
                           fontSize: '16px',
                           lineHeight: '150%',
                           fontWeight: 400,
                           color: '#363636',
                           marginTop: '20px',
                           textDecoration: 'none',
                        }}
                     >
                        {lightText(summary)}
                     </Typography>
                  </CardContent>
                  <CardActions>
                     <Link
                        sx={{
                           fontSize: '16px',
                           lineHeight: '150%',
                           fontWeight: 700,
                           color: '#363636',
                           marginTop: '20px',
                        }}
                     >
                        Read More...
                     </Link>
                  </CardActions>
               </Card>
            </Box>
         </Grid>
      </>
   )
}
