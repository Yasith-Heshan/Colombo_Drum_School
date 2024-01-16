"use client";
import {createContext, useContext, useEffect} from "react";
import {useLocalStorage} from "@/app/hooks/useLocalStorage";
import {auth} from '../firebase'
import {useAuthState, useSignInWithGoogle} from "react-firebase-hooks/auth";
import {signOut,signInWithRedirect,GoogleAuthProvider} from 'firebase/auth'
import {toast} from "sonner";

const authContext = createContext({});

export const AuthContextProvider = ({children}) => {
    const setValue = useLocalStorage('user', null)[1];
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [user, loading] = useAuthState(auth);

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

        } catch (e) {
            toast.error('Sign Out failed');
            console.error(e);
        }
    }


    useEffect(() => {
        setValue(user);
    }, [setValue, user]);

    return (
        <authContext.Provider value={{user, handleSignIn, handleSignOut, loading}}>
            {children}
        </authContext.Provider>
    );
}

export const useAuth = () => {
    return useContext(authContext);
}