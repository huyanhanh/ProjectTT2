import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: null
}

export const productModalSlice = createSlide({
    name: 'productModal',
    initialState,
    reducers: {
        // giong switch case reducer cua hook useReducer
        set: (state, action) => {
            state.value
        },

        remove: (state) => {
            state.value = null
        }
    }
})

export const { set, remove } = productModalSlice.action
console.log(set)
