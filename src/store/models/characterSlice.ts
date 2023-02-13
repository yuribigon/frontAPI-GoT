import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { doGet } from "../../service/api/apiService";
import Char from "../../types/character";

//action para PROMESSA
//GET - ALL
export const getAll = createAsyncThunk(
  //nome da action
  "characters/get",
  //funcao de promise
  async () => {
    const response: Char[] = await doGet('/api/v2/Characters')
        console.log(response);
        return response;
  }
);

//GET - ID
export const idChar = createAsyncThunk(
  //nome da action
  "characters/id",
  //funcao de promise
  async (id:any) => {
    const response: Char = await doGet('/api/v2/Characters/'+id)
      console.log(response);
      return response;
  }
);

interface CharInitial {
  data: null | Char[]; //o atributo que recebe a lista
  selectChar: null | Char;
  loading: boolean; //é para dizer a minha aplicação se está dando certo os seus processos
};

const initialState = {
  data: null,
  selectChar: null,
  loading: false,
} as CharInitial;

const characterSlice = createSlice({
  name: "char",
  initialState,
  reducers: {},
  extraReducers(builder) {
    // aciona as actions externas
    // (funcao promise, (state, action))
    builder
      .addCase(getAll.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getAll.fulfilled, (state, action: PayloadAction<Char[]>) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(getAll.rejected, (state, action) => {
        state.loading = false;
      });

      builder
      .addCase(idChar.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(idChar.fulfilled, (state, action: PayloadAction<Char>) => {
        state.selectChar = action.payload;
        state.loading = false;
      })
      .addCase(idChar.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export default characterSlice.reducer;
