import defaultState from '../defaultState';

function basketReducer(state = defaultState.basketProducts, action) {
    switch (action.type) {
        case 'ADD_PRODUCT_TO_BASKET':
            return [
                ...state,
                action.payload
            ];
        default:
            return state;
    }
}

export default basketReducer;
