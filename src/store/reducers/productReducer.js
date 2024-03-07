import {createSlice} from '@reduxjs/toolkit'
import data from "../../data.json";
const productsSlice = createSlice({
    name:'products',
    initialState: {},
    reducers:{ 
        fetch_products:(state , action)=>{
            state.data = data
        }
    }
})

export const {fetch_products} = productsSlice.actions;
export default productsSlice.reducer;