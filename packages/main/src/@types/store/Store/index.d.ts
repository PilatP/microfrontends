export declare type RootDispatch = typeof store.dispatch;
export declare type RootStore = ReturnType<typeof store.getState>;
export declare const useRootDispatch: () => import('@reduxjs/toolkit').ThunkDispatch<
  {
    appReducer: import('./types').IAppStore;
  },
  undefined,
  import('redux').AnyAction
> &
  import('redux').Dispatch<import('redux').AnyAction>;
export declare const useRootSelector: TypedUseSelectorHook<RootStore>;
interface IStoreProviderProps {
  store: typeof store;
}
export declare const StoreProvider: ({
  children,
  store,
}: React.PropsWithChildren<IStoreProviderProps>) => JSX.Element;
export { store };
export declare const logIn: import('@reduxjs/toolkit').ActionCreatorWithoutPayload<string>,
  logOut: import('@reduxjs/toolkit').ActionCreatorWithoutPayload<string>;
