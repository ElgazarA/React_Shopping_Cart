import {createSlice} from '@reduxjs/toolkit'
const RegisterReducer = createSlice({
    name:'Register',
    initialState: {fName:'',lname:'',email:'',password:''},
    reducers:{ 
        setNewUser:(state, action)=>{
            state= state.payload;
        }
    }
})
export const {setNewUser} = RegisterReducer.actions;
export default RegisterReducer.reducer;