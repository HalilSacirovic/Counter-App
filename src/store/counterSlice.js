import { createSlice } from "@reduxjs/toolkit";

const initialState = {
counter: 0,
saved : [],
};

export const quoteSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    setCounting(state,actions){
        state.counter++;
        return state;
    },
    
    saveCounter(state,actions)
    {
      const counted = actions.payload;
      state.saved.push(counted);
      return state;
    },

    clearCounter(state, actions) {
      return initialState;
    },
  },
});
