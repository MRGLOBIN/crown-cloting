// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth'

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDmsra0vBgVigQRYe7ux1I9vg6yZviMLBk',
  authDomain: 'crown-clothing-251f5.firebaseapp.com',
  projectId: 'crown-clothing-251f5',
  storageBucket: 'crown-clothing-251f5.appspot.com',
  messagingSenderId: '267110643548',
  appId: '1:267110643548:web:35001644abf2bb42027399',
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
  prompt: 'select_account',
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocumnetFromAuth = async userAuth => {
  const userDocRef = doc(db, 'user', userAuth.uid)

  const userShapshot = await getDoc(userDocRef)

  if (!userShapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      })
    } catch (error) {
      console.log(error.message)
    }
  }

  return userDocRef
}
