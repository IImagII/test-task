import { Container } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { List } from '../components/List'
import { useAppSelector } from '../@types/hooks'
import { Search } from '../components/Search/Search'

export const Home: React.FC = () => {
   const { items } = useAppSelector(state => state.posts)

   return (
      <div>
         <Container sx={{ width: '1290px' }}>
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

            <Box>
               <Search />
            </Box>
            <Box
               sx={{ borderBottom: '1px solid #EAEAEA', marginBottom: '15px' }}
            >
               Result: {items.length}
            </Box>
            <Box>
               <List />
            </Box>
         </Container>
      </div>
   )
}
