import { actionTypes } from '../contants/actionTypes'

export const setProducts = (products) => {
    return {
        type: actionTypes.SET_PRODUCTS,
        payload: products
    }
}

export const selectedProducts = (products) => {
    return {
        type: actionTypes.SELECTED_PRODUCTS,
        payload: products
    }
}
export const removeSelectedProducts = (products) => {
    return {
        type: actionTypes.REMOVE_SELECTED_PRODUCTS,
        payload: products
    }
}