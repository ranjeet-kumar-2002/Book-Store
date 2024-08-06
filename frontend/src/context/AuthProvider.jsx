import React, {useState } from 'react'
import {createContext} from'react';
import {useContext} from'react';

export const AutContext = createContext();
export default function AuthProvider({children}){
     const initalAuthUser = localStorage.getItem("User");
     const [authUser,setAuthUser] = useState(
        initalAuthUser ? JSON.parse(initalAuthUser) : undefined
     )
     return(
         <AutContext.Provider value = {[authUser,setAuthUser]}>
            {children}
         </AutContext.Provider>
     )
}
export const useAuth = () => useContext(AutContext);