import { configureStore, createSlice } from "@reduxjs/toolkit";

interface State {
  counter: number;
}

const counterReducer = {
  increment(state: State, action: any, payload?: number) {
    state.counter++;
  },
};

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducers: counterReducer,
});

export const actions = counterSlice.actions;

export const store = configureStore({
  reducer: counterSlice.reducer,
});
