import { createSlice } from "@reduxjs/toolkit";

const initialState = {
counter: 0,
saved : [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    setCounting(state,actions){
        state.counter =state.counter+1;
        return state;
    },
    
    saveCounter(state,actions)
    {
      const date = actions.payload 
      state.saved.push(date);
      return state;
    },

    clearCounter(state, actions) {
      return initialState;
    },
  },
});
