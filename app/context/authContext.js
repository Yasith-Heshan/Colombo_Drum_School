"use client";
import {createContext, useContext, useEffect, useState} from "react";
import {useLocalStorage} from "@/app/hooks/useLocalStorage";
import {auth} from '../firebase'
import {useAuthState} from "react-firebase-hooks/auth";
import {signOut,signInWithRedirect,GoogleAuthProvider} from 'firebase/auth'
import {toast} from "sonner";

const authContext = createContext({});

export const AuthContextProvider = ({children}) => {
    const [storedValues,setValue] = useLocalStorage('user', null);
    const [user, loading] = useAuthState(auth);
    const [loggedUser, setLoggedUser] = useState(null);

    const handleSignIn = async () => {
        try {
            const provider = new GoogleAuthProvider();
            await signInWithRedirect(auth,provider);
        } catch (e) {
            toast.error('Sign In failed');
            console.error(e);
        }
    }

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            setValue(null);
        } catch (e) {
            toast.error('Sign Out failed');
            console.error(e);
        }
    }


    useEffect(() => {
        if(user){
            setValue(user);
        }
        setLoggedUser(storedValues);
    }, [setValue, user]);




    return (
        <authContext.Provider value={{loggedUser, handleSignIn, handleSignOut, loading}}>
            {children}
        </authContext.Provider>
    );
}

export const useAuth = () => {
    return useContext(authContext);
}