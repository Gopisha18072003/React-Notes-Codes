import {createStore} from 'redux';

const initialState = {counter: 0, showCounter: true}
function counterReducer(state=initialState, action) {

    if(action.type === 'increment') 
        // never change/mutate the existing state
        // always return new object
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter
        }

    if(action.type === 'increase')
        return {
            counter: state.counter + action.amount,
            showCounter: state.showCounter
    }
    if(action.type === 'decrement') 
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter
        }
    if(action.type === 'toggleCounter')
        return{
            showCounter: !state.showCounter,
            counter: state.counter
        }
    return state;
}

const store = createStore(counterReducer);

export default store;