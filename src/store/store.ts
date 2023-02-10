import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import characterSlice from "./models/characterSlice";

const store = configureStore({
  reducer: {
    charReducer: characterSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;//OS ESTADOS INICIAIS
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;//FUNCIONALIDADE DE DISPARO DAS ACTIONS

export default store;
