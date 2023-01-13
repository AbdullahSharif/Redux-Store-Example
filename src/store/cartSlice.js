import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
    name: "cart",        // name of the slice
    initialState,       // provide the initial state
    reducers: {         // define the reducer. it contains the methods which we will use to update the state in the slice.
        add() { },
        remove() { }
    }
});