import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";

const userslice=createSlice({

    name:"users",
    initialState:userList,
    reducers:{
        addUser:(state , action)=>{
            state.push(action.payload)
        },

        updateUser:(state , action)=>{
            const {id, name, age, email}= action.payload
            const uu =state.find(user => user.id == id);
            if(uu){
                uu.name = name;
                uu.age = age;
                uu.email = email;
            }
        },

        deleteUser:(state , action)=>{
            const {id} = action.payload
            const uu =state.find(user => user.id == id);
            if(uu){
                return state.filter(f=>f.id !==id);
            }
           

        }

    }


})
export const {addUser,updateUser,deleteUser} = userslice.actions
export default userslice.reducer