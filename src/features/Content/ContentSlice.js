import {createSlice} from '@reduxjs/toolkit'

export const ContentSlice = createSlice({
    name: 'content',
    initialState: {
        products: [],
    },
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        }
    },
})

export const {setProducts} = ContentSlice.actions

export default ContentSlice.reducer
