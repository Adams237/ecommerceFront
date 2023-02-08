import { configureStore, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: [],
        quantity: 0,
        total: 0
    },
    reducers: {
        addProduct: (state, action) => {
            if (state.products.length>0) {
                const product = state.products.find(product => product.id === action.payload.id)
                if (product) {
                    product.quantity += action.payload.quantity
                } else {
                    state.quantity += 1
                    state.products.push(action.payload)
                }
            } else {
                console.log('3er')
                state.quantity += 1
                state.products.push(action.payload)
            }
            state.total += Number(action.payload.price) * Number(action.payload.quantity)
        },
        removeProduct: (state, action) => {

            state.products.map((product) => {
                if (product.id === action.payload.id) {
                    if (product.quantity > 1) {
                        product.quantity -= 1
                        state.total -= Number(product.price)
                        return 0
                    } else {
                        state.quantity -= 1
                        state.products = state.products.filter((product) => product.id !== action.payload.id)
                        state.total -= Number(action.payload.price) * Number(action.payload.quantity)
                        return 1
                    }
                }
                return 0
            })

        },
        removeProducts: ((state, action) => {
            state.quantity = 0
            state.products = []
            state.total = 0
        })
    },
})


export const { addProduct, removeProduct, removeProducts } = cartSlice.actions

export const store = configureStore({
    reducer: {
        cart: cartSlice.reducer
    }
})