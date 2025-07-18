import {createSlice} from '@reduxjs/toolkit'

export const HeaderListSlice = createSlice({
    name: 'favorites',
    initialState: {
        value: 0,
    },
    reducers: {
        increment(state) {
            state.value++;
        },
        toggleFavorite(state, action) {
            if (action.payload === true) {
                state.value += 1
            } else {
                state.value -= 1
            }
        }
    },
})

export const {increment, toggleFavorite} = HeaderListSlice.actions

export default HeaderListSlice.reducer
