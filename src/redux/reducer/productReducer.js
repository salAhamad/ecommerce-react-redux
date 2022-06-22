import { actionTypes } from "../contants/actionTypes";

const initialState = {
    products: [{
        id: 1,
        titel: 'salman',
        category: 'front-end developer  '
    }],
};
export const productReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case actionTypes.SET_PRODUCTS:
            return state    
        default:
            return state
    }
}