import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import { Provider } from 'react-redux';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { appReducer, appSlice } from './appSlice';

const store = configureStore({
  reducer: {
    appReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootDispatch = typeof store.dispatch;
export type RootStore = ReturnType<typeof store.getState>;

export const useRootDispatch = () => useDispatch<RootDispatch>();
export const useRootSelector: TypedUseSelectorHook<RootStore> = useSelector;

interface IStoreProviderProps {
  store: typeof store;
}
export const StoreProvider = ({
  children,
  store,
}: React.PropsWithChildren<IStoreProviderProps>) => (
  <Provider store={store}>{children}</Provider>
);
export const { logIn, logOut } = appSlice.actions;

export { store };
