import {createSlice} from '@reduxjs/toolkit'


const initValue={photos:[]}

const photoSlice=createSlice({
    name:"photos",
    initialState:initValue,
    reducers:{
        update:(state,action)=>{
            state.photos= action.payload.arr
        }
    }
})

export default photoSlice.reducer
export const {update}=photoSlice.actions