import { IAppStore } from './types';
export declare const appSlice: import("@reduxjs/toolkit").Slice<IAppStore, {
    logIn: (state: import("immer/dist/internal").WritableDraft<IAppStore>) => void;
    logOut: (state: import("immer/dist/internal").WritableDraft<IAppStore>) => void;
}, "authSlice">;
export declare const appReducer: import("redux").Reducer<IAppStore, import("redux").AnyAction>;
