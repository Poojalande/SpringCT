import {createStore,combineReducers} from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import AuthReducers from './Reducer'
// export default configureStore({
//   reducer: {}
// })
// const RootReducers = combineReducers({
//     AuthReducers,
// })

// export const store = createStore(RootReducers)
// Automatically adds the thunk middleware and the Redux DevTools extension
export const store = configureStore({
    // Automatically calls `combineReducers`
    reducer: {
      AuthReducers
    }
  })