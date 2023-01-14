import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
    name: "cart",        // name of the slice
    initialState,       // provide the initial state
    reducers: {         // define the reducer. it contains the methods which we will use to update the state in the slice.
        add(state, action) {
            state.push(action.payload);
        },
        remove(state, action) {
            return state.filter(item => (item.id !== action.payload));
        }
    }
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;