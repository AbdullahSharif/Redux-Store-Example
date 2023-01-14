import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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
    // reducers: {
    //     setProducts(state, action) {
    //         state.data.push(action.payload);
    //     },
    //     setStatus(state, action) {
    //         state.status = action.payload;
    //     }
    // },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = STATUS.LOADING;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUS.IDLE;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = STATUS.ERROR;
            })
    }

})

// export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

// we use a thunk to make api calls.

// the redux toolkit way.
export const fetchProducts = createAsyncThunk("product", async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    return data;
})


// the redux way
// export function fetchProducts() {
//     return async function fetchProductsFromApi(dispatch, getState) {
//         dispatch(setStatus(STATUS.LOADING));
//         try {
//             const res = await fetch("https://fakestoreapi.com/products");
//             const data = await res.json();
//             dispatch(setProducts(data))

//             dispatch(setStatus(STATUS.IDLE));

//         } catch (exc) {
//             console.log(exc);
//             dispatch(setStatus(STATUS.ERROR));
//         }
//     }
// }