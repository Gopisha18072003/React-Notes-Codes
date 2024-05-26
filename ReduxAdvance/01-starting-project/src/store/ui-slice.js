import { createSlice } from "@reduxjs/toolkit";

// redux-toolkit is not actually mutaing the state behind the science redux-toolkit uses another library 
// called emur which change state in immutable way
const uiSlice = createSlice({
    name: 'ui',
    initialState: {cartIsVisible: false, notification: null},
    reducers: {
        toggle(state) {
            state.cartIsVisible = !state.cartIsVisible
        },

        showNotification(state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message,
            }
        }
    }
});

export const uiActions = uiSlice.actions;

export default uiSlice;
