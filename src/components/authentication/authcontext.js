import React, { useState, createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,updateProfile } from 'firebase/auth';
import { app } from "../../firebaseInit";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const authContext = createContext();

export default function CustomAuth({ children }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const auth = getAuth(app);

    const handleSignUp = async (Name) => {
        try {
            const {user}=await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(user, {
                displayName:Name
            });
            toast.success('Signed Up Successfully!!');
        } catch (error) {
            setError(error);
            toast.error(`${error}`);
        }
    };

    const handleSignIn = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            toast.success('Signed in Successfully!!');
        } catch (error) {
            setError(error);
            toast.error(`${error}`);
        }
    };

    return (
        <authContext.Provider value={{ setEmail, setPassword, error, handleSignUp, handleSignIn }}>
            {children}
        </authContext.Provider>
    );
}
