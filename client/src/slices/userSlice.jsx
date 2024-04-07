import {createSlice} from '@reduxjs/toolkit'


const initValue={users:[]}

const userSlice=createSlice({
    name:"users",
    initialState:initValue,
    reducers:{
        update:(state,action)=>{
            state.users= action.payload.arr
        }
    }
})

export default userSlice.reducer
export const {update}=userSlice.actions