import React, { createContext, useContext, useEffect, useState } from 'react'
import firebase from 'firebase/compat/app'
import { GoogleAuthProvider } from 'firebase/auth'
import app from 'utils/firebase'

interface AuthContextProps {
  currentUser: firebase.User | null
  loading: boolean
  error: string | null
  signInWithGoogle: () => Promise<void>
  signInWithEmail: (email: string, password: string) => Promise<void>
  signOut: () => void
}

const AuthContext = createContext<AuthContextProps>({
  currentUser: null,
  loading: true,
  error: null,
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

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider()
    await auth.signInWithRedirect(provider)
  }

  const signInWithEmail = async (email: string, password: string) => {
    try {
      await auth.signInWithEmailAndPassword(email, password)
    } catch (err: unknown) {
      setError('Email or Password is incorrect')
    }
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
        signInWithGoogle,
        signInWithEmail,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
