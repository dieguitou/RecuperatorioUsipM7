import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  words: [],
};

const dictionarySlice = createSlice({
  name: "dictionary",
  initialState,
  reducers: {
    addWord: (state, action) => {
      state.words.push(action.payload);
    },
    //eli
    removeWord: (state, action) => {
        state.words = state.words.filter(
          (word) => word.es !== action.payload && word.en !== action.payload && word.pt !== action.payload
        );
      },
  },
});

export const { addWord, removeWord  } = dictionarySlice.actions;
export default dictionarySlice.reducer;