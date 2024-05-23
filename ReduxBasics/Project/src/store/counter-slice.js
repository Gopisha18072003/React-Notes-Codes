import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {counter: 0, showCounter: true}

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            // ---------------- here we are allowed to mutate the existing state
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action){
            state.counter += action.payload;
            // ----- any kind of data can be passed to counterActions.increase() and this value will be stored as key value paired where key is called palyload
        },
        toogleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;