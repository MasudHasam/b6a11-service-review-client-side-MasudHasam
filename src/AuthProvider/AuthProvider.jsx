import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../Firebase/Firebase.config'

export const AuthContext = createContext();
const Auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState();

    //this function is for sign up / register
    const register = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(Auth, email, password);
    }

    //this function is for log in 
    const emailLogIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(Auth, email, password);
    }

    // this function is for google log in
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(Auth, googleProvider);
    }


    //this function is for sign out.
    const logOut = () => {
        return signOut(Auth);
    }

    //get currently login user.
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(Auth, currentUser => {
            // console.log(currentUser);
            setUser(currentUser)
            setLoading(false)
        })
        return () => unSubscribe();
    }, [])


    const info = {
        register,
        emailLogIn,
        googleLogin,
        logOut,
        user, loading,
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;