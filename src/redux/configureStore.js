import { configureStore } from '@reduxjs/toolkit';
import dropdownReducer from './dropdown';

export default configureStore({
  reducer: {
    dropdown: dropdownReducer,
  },
});
