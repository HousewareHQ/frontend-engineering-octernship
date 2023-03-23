import { configureStore } from '@reduxjs/toolkit';
import { formReducer } from './slices/formSlice';

const store = configureStore({
  reducer: {
    form: formReducer,
  },
});

export { store };
export * from './slices/formSlice';
