import { combineReducers, configureStore } from '@reduxjs/toolkit'; // Import configureStore

import formReducer from './reducers';

const rootReducer = combineReducers({
  formData: formReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
