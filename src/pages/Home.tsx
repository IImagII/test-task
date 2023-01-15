import React from 'react'

import { Container } from '@mui/material'
import { Box } from '@mui/system'
import { List } from '../components/List'
import { Search } from '../components/Search/Search'
import { useAppSelector } from '../@types/hooks'

export const Home: React.FC = () => {
   const { items } = useAppSelector(state => state.posts)

   return (
      <>
         <Container sx={{ maxWidth: '1290px' }}>
            <Box
               sx={{
                  fontSize: '16px',
                  lineHeight: '20px',
                  color: '#363636',
                  fontWeight: 600,
                  marginTop: '50px',
                  marginBottom: '10px',
               }}
            >
               Filter by keywords
            </Box>

            <Search />

            <Box
               sx={{ borderBottom: '1px solid #EAEAEA', marginBottom: '15px' }}
            >
               Result: {items.length}
            </Box>

            <List />
         </Container>
      </>
   )
}
