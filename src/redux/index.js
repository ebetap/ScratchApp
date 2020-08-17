import { combineReducers, applyMiddleware, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReducers = combineReducers({});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth']
};

export const store = createStore(
  persistReducer(persistConfig, rootReducers),
  composeWithDevTools(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
