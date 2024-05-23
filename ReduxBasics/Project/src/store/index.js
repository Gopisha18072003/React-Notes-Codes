import {createStore} from 'redux';
import {configureStore } from '@reduxjs/toolkit';

import counterSliceReducer from './counter-slice';
import authSliceReducer from './auth-slice';


// counterSlice.actions.toogleCounter()
// ----------- returns an action object of shape: {type: 'some auto-generated unique identifier}

// ----------- OLD COUNTER REDUCER

// function counterReducer(state=initialState, action) {

//     if(action.type === 'increment') 
//         // never change/mutate the existing state
//         // always return new object
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//         }

//     if(action.type === 'increase')
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter
//     }
//     if(action.type === 'decrement') 
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         }
//     if(action.type === 'toggleCounter')
//         return{
//             showCounter: !state.showCounter,
//             counter: state.counter
//         }
//     return state;
// }

// const store = createStore(counterSlice.reducer);

// ----------- USING REDUX TOOLKIT

// ----------- configureStore function makes multiple reducer merge easily
const store = configureStore( {
    reducer: { counter: counterSliceReducer, auth: authSliceReducer }
});

export default store;