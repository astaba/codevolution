import { configureStore } from '@reduxjs/toolkit';
// import { createLogger } from 'redux-logger';
import cakeReducer from '../features/cake/cakeSlice';
import iceCreamReducer from '../features/iceCream/iceCreamSlice';
import usersReducer from '../features/user/userSlice';

// const logger = createLogger(); 

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    users: usersReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
