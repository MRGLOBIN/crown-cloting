import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux'

import { PersistGate } from 'redux-persist/integration/react'

import App from './App.jsx'

// import { UserProvider } from './contexts/user.context.jsx'
// import { CategoriesProvider } from './contexts/categories.context.jsx'

import './index.scss'
import { CartProvider } from './contexts/cart.context.jsx'

import { persistor, store } from './store/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate loading={null} persistor={persistor}>
          {/* <CartProvider> */}
          {/* <UserProvider> */}
          {/* <CategoriesProvider> */}
          <App />
          {/* </CartProvider> */}
          {/* </CategoriesProvider> */}
          {/* </UserProvider> */}
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
