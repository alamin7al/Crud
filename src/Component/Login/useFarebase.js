import React from 'react';
import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import { useEffect } from 'react';
import initializeFirebase from './firebase.init';
initializeFirebase()
const useFarebase = () => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [admin, setAdmin] = useState(false)
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    //sigin
    const loginInUser = (email, password, location, history) => {
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const distination = location?.state?.from || '/'
                history.replace(distination)
                setError('')
            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => setLoading(false))
    }
    //loginUser 
    const signInuser = (email, password, name, location, history) => {
        setLoading(true)

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError('')
                const newUser = { email, displayName: name }
                setUser(newUser)
                //database
                saveUser(email, name, 'POST')
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {

                });

                history.replace('/')
            })
            .catch((error) => {
                setError(error.message)

            })
            .finally(() => setLoading(false))

    }
    //googleSignIn
    const googleLogin = (location, history) => {
        setLoading(true)

        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user
                const distination = location?.state?.from || '/'
                history.replace(distination)
                saveUser(user.email, user.displayName, 'PUT')
                setError('')

            }).catch((error) => {
                setError(error.message)

            })
            .finally(() => setLoading(false))
    }

    //logOut
    const logOut = () => {
        setLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setLoading(false))
    }
    //state Change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {

                setUser(user)

            } else {
                setUser({})
            }
            setLoading(false)

        });
        return () => unsubscribe
    }, [])

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName }
        fetch('http://localhost:5000/emailcollection', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }


    useEffect(() => {
        fetch(`http://localhost:5000/emailcollection/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user?.email])



    return {
        user,
        signInuser,
        loginInUser,
        logOut,
        loading,
        error,
        googleLogin,
        admin
    }
};

export default useFarebase;