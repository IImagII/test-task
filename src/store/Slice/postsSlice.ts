import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

enum Status {
   LOADING = 'loading',
   SUCCESS = 'success',
   ERROR = 'error',
}

export type PostsListItem = {
   id: number | string
   featured: false
   title: string
   url: string
   imageUrl: string
   newsSite: string
   summary: string
   publishedAt: string
   launches: [
      {
         id: string
         provider: string
      }
   ]
   events: [
      {
         id: string
         provider: string
      }
   ]
}

type TPost = {
   items: PostsListItem[]
   status: Status
}

export const axiosPosts = createAsyncThunk('posts/axiosPosts', async _ => {
   try {
      const { data } = await axios.get(
         `https://api.spaceflightnewsapi.net/v3/articles`
      )

      return data
   } catch (error) {
      return console.log(error)
   }
})

const initialState: TPost = {
   items: [],
   status: Status.LOADING,
}

export const postsSlice = createSlice({
   name: 'posts',
   initialState,
   reducers: {},
   extraReducers: builder => {
      builder
         .addCase(axiosPosts.pending, state => {
            state.status = Status.LOADING
         })
         .addCase(axiosPosts.fulfilled, (state, action) => {
            state.status = Status.SUCCESS
            state.items = action.payload
         })
         .addCase(axiosPosts.rejected, (state, action) => {
            state.status = Status.ERROR
            state.items = []
         })
   },
})

export default postsSlice.reducer
