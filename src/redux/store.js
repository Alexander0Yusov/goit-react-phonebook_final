import { configureStore } from '@reduxjs/toolkit';
// import { reducer } from './reducer'; - на случай отдельной комбинации
import { contactsReducer } from './contactsService/contactsSlice';
import { filterReducer } from './filter/filterSlice';
import { authReducer } from './authService/authSlice';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'goit-react-phonebook_final_',
  storage,
  whitelist: ['token'],
};

const authPersistedReducer = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
  reducer: {
    contactsCombine: contactsReducer,
    filterCombine: filterReducer,
    authCombine: authPersistedReducer,
  },
  // лечит ошибки в консоли
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
