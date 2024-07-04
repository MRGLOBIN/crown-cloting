import { compose, createStore, applyMiddleware } from 'redux'
// import logger from 'redux-logger'

import { rootReducer } from './root-reducer'
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'
import { thunk } from 'redux-thunk'

const loggerMiddleware = store => next => action => {
  if (!action.type) {
    return next(action)
  }

  console.log('type: ', action.type)
  console.log('payload: ', action.payload)
  console.log('currentState: ', store.getState())

  next(action)

  console.log('NextState: ', store.getState())
}

const persistConfig = {
  key: 'root',
  whitelist: ['cart'],
  storage,
}

const presistedReducer = persistReducer(persistConfig, rootReducer)

const middleWares = [
  process.env.NODE_ENV !== 'production' && loggerMiddleware,
  thunk,
]

const composedEnhancers = compose(applyMiddleware(...middleWares))

export const store = createStore(presistedReducer, undefined, composedEnhancers)

export const persistor = persistStore(store)
