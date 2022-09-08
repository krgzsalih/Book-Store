import React, { useContext } from 'react'
import { createContext } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,

} from 'firebase/auth'

import { collection} from 'firebase/firestore'

import { auth } from '../constants/firebase';
import { toast } from 'react-toastify';

const userAuthContext = createContext()

export const useUserAuth = () => useContext(userAuthContext)


const UserAuthProvider = ({ children }) => {


    const signUp = (name, email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = async (email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
            return auth;
        }
        catch (error) {
            toast.error(error.code)
        }
    }

    const signOut = () => {
        auth.signOut()
    }







    return (
        <userAuthContext.Provider value={{ signUp, signIn, signOut }}>
            {children}
        </userAuthContext.Provider>
    )
}

export default UserAuthProvider