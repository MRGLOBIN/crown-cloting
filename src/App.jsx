import { useEffect } from 'react'

import { useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'

import Navigation from './routes/navigation/navigation.components'
import Home from './routes/home/home.components'
import Auth from './routes/auth/auth.components'
import Shop from './routes/shop/shop.components'
import Checkout from './routes/checkout/checkout.components'

import { setCurrentUser } from './store/user/user.action'

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from './utils/firebase.utils'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const unSubscribe = onAuthStateChangedListener(user => {
      if (user) {
        createUserDocumentFromAuth(user)
      }
      dispatch(setCurrentUser(user))
    })
    return unSubscribe
  })

  return (
    <>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='shop/*' element={<Shop />} />
          <Route path='auth' element={<Auth />} />
          <Route path='checkout' element={<Checkout />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
