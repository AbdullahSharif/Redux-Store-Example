import { createSlice } from "@reduxjs/toolkit";

const STATUS = Object.freeze({
    IDLE: "IDLE",
    LOADING: "LOADING",
    ERROR: "ERROR"
})

const productSlice = createSlice({
    name: "product",
    initialState: {
        data: [],
        status: STATUS.IDLE
    },
    reducers: {
        setProducts(state, action) {
            state.data.push(action.payload);
        },
        setStatus(state, action) {
            state.status = action.payload;
        }
    }

})

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

// we use a thunk to make api calls.
export function fetchProducts() {
    return async function fetchProductsFromApi(dispatch, getState) {
        dispatch(setStatus(STATUS.LOADING));
        try {
            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json();
            dispatch(setProducts(data))

            dispatch(setStatus(STATUS.IDLE));

        } catch (exc) {
            console.log(exc);
            dispatch(setStatus(STATUS.ERROR));
        }
    }
}