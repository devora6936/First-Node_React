import {createSlice} from '@reduxjs/toolkit'


const initValue={posts:[]}

const postSlice=createSlice({
    name:"posts",
    initialState:initValue,
    reducers:{
        update:(state,action)=>{
            state.posts= action.payload.arr
        }
    }
})

export default postSlice.reducer
export const {update}=postSlice.actions