import { createContext, useEffect, useState } from 'react'
import {
  createUserDocumnetFromAuth,
  onAuthStateChangedListener,
} from '../utils/firebase.utils'

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
})

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const value = { currentUser, setCurrentUser }

  useEffect(() => {
    const unSubscribe = onAuthStateChangedListener(user => {
      if (user) {
        createUserDocumnetFromAuth(user)
      }
      setCurrentUser(user)
    })
    return unSubscribe
  })

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
