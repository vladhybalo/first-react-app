import defaultState from '../defaultState'

function productReducer(state = defaultState.products, action) {
    switch (action.type) {
        case 'INIT_PRODUCTS_LIST':
            return [
                ...state,
                ...action.products,
            ];
        default:
            return state;
    }
}

export default productReducer;
