import { createStore, applyMiddleware } from 'redux'
import rootReducer from './rootReducer'

const configureStore = () => {
  const middlewares = []

  const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares)
  )

  return { store }
}

export default configureStore
