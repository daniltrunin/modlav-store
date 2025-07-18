import {createSlice} from '@reduxjs/toolkit'

export const ContentSlice = createSlice({
    name: 'content',
    initialState: {
        products: [],
        offset: 0,
    },
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },
        addProducts: (state, action) => {
            state.products = [...state.products, ...action.payload]
        },
        setOffset: (state, action) => {
            state.offset = action.payload
        }
    },
})

export const {setProducts, addProducts, setOffset} = ContentSlice.actions

export default ContentSlice.reducer
