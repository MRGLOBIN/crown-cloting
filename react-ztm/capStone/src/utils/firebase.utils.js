// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from 'firebase/firestore'

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

const googleProvider = new GoogleAuthProvider()

googleProvider.setCustomParameters({
  prompt: 'select_account',
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)

export const db = getFirestore()

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey)
  const batch = writeBatch(db)

  objectsToAdd.forEach(object => {
    const docRef = doc(collectionRef, object.title.toLowerCase())
    batch.set(docRef, object)
  })

  await batch.commit()

  console.log('done')
}

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories')
  const q = query(collectionRef)

  const querySnapShot = await getDocs(q)
  const categoryMap = querySnapShot.docs.reduce((accumalator, docSnapShot) => {
    const { title, items } = docSnapShot.data()
    accumalator[title.toLowerCase()] = items
    return accumalator
  }, {})

  return categoryMap
}

export const createUserDocumnetFromAuth = async (
  userAuth,
  additionalInformation
) => {
  if (!userAuth) return

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
        ...additionalInformation,
      })
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use')
      } else {
        console.log(error.message)
      }
    }
  }

  return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return

  return await createUserWithEmailAndPassword(auth, email, password)
}

export const SignInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return

  return await signInWithEmailAndPassword(auth, email, password)
}

export const SignOurUser = async () => await signOut(auth)

export const onAuthStateChangedListener = callback => {
  return onAuthStateChanged(auth, callback)
}
