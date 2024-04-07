import {createSlice} from '@reduxjs/toolkit'


const initValue={todos:[]}

const todoSlice=createSlice({
    name:"todos",
    initialState:initValue,
    reducers:{
        updateTodo:(state,action)=>{
            state.todos= action.payload.arr
        }
    }
})

export default todoSlice.reducer
export const {updateTodo}=todoSlice.actions