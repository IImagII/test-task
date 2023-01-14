import { Container } from '@mui/material'
import TextField from '@mui/material/TextField'
import { Box } from '@mui/system'
import React from 'react'
import { List } from '../components/List'
import { useAppSelector } from '../@types/hooks'

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

            <TextField
               type='search'
               label='The most successful IT companies in 2023'
               sx={{
                  border: '1 px solid #EAEAEA',
                  backgroundColor: '#fff',
                  boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.05)',
                  borderRadius: '5px',
                  width: '600px',
                  marginBottom: '40px',
               }}
            ></TextField>

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
