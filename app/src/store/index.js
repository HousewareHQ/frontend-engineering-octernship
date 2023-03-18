import { configureStore,createSlice } from "@reduxjs/toolkit";


const dataSlice = createSlice({
    name:"Octenship",
    initialState:{
        Original:'',
        Duplicate:[],

    },
    reducers:{
        change_Original(state,action){
            return{
                ...state,
                Original:action.payload
            }
        },
        change_Diplicate(state,action){
            return{
                ...state,
                Duplicate:[...state.Duplicate,action.payload]
            }

        },
        reset_duplicate(state){
            return{
                ...state,
                Duplicate:[]
            }
        },
        delete_value(state,action){
            return{
                ...state,
                Duplicate:[...state.Duplicate.slice(0,action.payload),...state.Duplicate.slice(action.payload+1)]
            }
        }
    }
})

export const changeData = dataSlice.actions

const store = configureStore({reducer:{
    data:dataSlice.reducer
} 
})

export default store