import { auth } from '../firbase';
import React, { useState, useEffect, useContext } from 'react'

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}
export function AuthProvider({ children }) {
    const [currentUser, setCurretUser] = useState();
    const [loading, setLoading] = useState(true);

    function signUp(email, password) {

        return auth.createUserWithEmailAndPassword(email, password);
    }
    function logIn(email, password) {

        return auth.signInWithEmailAndPassword(email, password);
    }
    function logOut(){
        return auth.signOut();
    }
    function forgotPassword(email){
        return auth.sendPasswordResetEmail(email);
    }
    useEffect(() => {
        const unSubscribe = auth.onAuthStateChanged(user => {
            setCurretUser(user);
            setLoading(false);
        })
        return unSubscribe;
    }, [])

    const value = {
        currentUser,
        signUp,
        logIn,
        logOut,
        forgotPassword
    }
    return (
        <div>
            <AuthContext.Provider value={value}>
                {!loading && children}
            </AuthContext.Provider>
        </div>
    )
}
