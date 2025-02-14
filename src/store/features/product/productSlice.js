import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    initialValue: 10,
    dataProduct: [
        {category: "Frutas", price: "$1", stocked: true, name: "Manzana"},
        {category: "Frutas", price: "$1", stocked: true, name: "Fruta del dragón"},
        {category: "Frutas", price: "$2", stocked: false, name: "Maracuyá"},
        {category: "Verduras", price: "$2", stocked: true, name: "Espinaca"},
        {category: "Verduras", price: "$4", stocked: false, name: "Calabaza"},
        {category: "Verduras", price: "$1", stocked: true, name: "Guisantes"}
    ],
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setInitialValue: (state, payload) => {
            state.initialValue = payload
        },
    },
})

export const { setInitialValue } = productSlice.actions
export default productSlice.reducer
