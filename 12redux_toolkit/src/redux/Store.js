import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../ features/counter/CounterSclice/'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})

// steps :-
// -> create store
//-> wrap up app component under provider
//-> create slice
//-> register reducer in store