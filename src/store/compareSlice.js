import { createSlice } from "@reduxjs/toolkit";
import { uniq } from "lodash";

const state = {
  compare: [],
};

const compareSlice = createSlice({
  name: "compareSlice",
  initialState: state,
  reducers: {
    addBook: (state, action) => {
      return { ...state, compare: uniq([...state.compare, action.payload]) };
    },
    removeBook: (state, action) => {
      return {
        ...state,
        compare: uniq(state.compare.filter((item) => item !== action.payload)),
      };
    },
  },
});

export const { addBook, removeBook } = compareSlice.actions;

export default compareSlice.reducer;
