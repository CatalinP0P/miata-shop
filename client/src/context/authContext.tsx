import React, { createContext, useContext, useEffect, useState } from 'react'
import firebase from 'firebase/compat/app'
import { GoogleAuthProvider } from 'firebase/auth'
import app from 'utils/firebase'

interface AuthContextProps {
  currentUser: firebase.User | null
  loading: boolean
  error: string | null
  createAccount: (
    email: string,
    password: string,
    confirmPassword: string,
  ) => Promise<void>
  signInWithGoogle: () => Promise<void>
  signInWithEmail: (email: string, password: string) => Promise<void>
  signOut: () => void
}

const AuthContext = createContext<AuthContextProps>({
  currentUser: null,
  loading: true,
  error: null,
  createAccount: async () => {},
  signInWithGoogle: async () => {},
  signInWithEmail: async () => {},
  signOut: () => {},
})

const auth = app.auth()

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<firebase.User | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  firebase
    .auth()
    .getRedirectResult()
    .then((result) => {
      if (result.user) {
        window.location.href = '/'
      }
    })
    .catch((error) => {
      console.error(error)
    })

  const createAccount = async (
    email: string,
    password: string,
    confirmPassword: string,
  ) => {
    if (confirmPassword != password) {
      return setError('Passwords do not match')
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        window.location.href = '/'
      })
      .catch((err: firebase.FirebaseError) => {
        setError(err.message.split(':')[1].split('.')[0])
      })
  }

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider()
    await auth.signInWithRedirect(provider)
  }

  const signInWithEmail = async (email: string, password: string) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        window.location.href = '/'
      })
      .catch((err: firebase.FirebaseError) => {
        setError(err.message.split(':')[1].split('.')[0])
      })
  }

  const signOut = async () => {
    await auth.signOut()
  }

  useEffect(() => {
    auth.onAuthStateChanged((user: firebase.User | null) => {
      setCurrentUser(user)
      if (loading) setLoading(false)
    })
  }, [])

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        loading,
        error,
        createAccount,
        signInWithGoogle,
        signInWithEmail,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
