import defaultState from '../defaultState';

function basketReducer(state = defaultState.basketProducts, action) {
    switch (action.type) {
        case 'ADD_PRODUCT_TO_BASKET':
            const product = action.payload;
            const fl = state.find(item => {
                return item.id === product.id;
            });

            // if there isnt such product in basket add it with productsNumber - 1
            if (!fl) {
                product.productsNumber = 1;

                return [
                    ...state,
                    product,
                ];
            } else {
                // id there already is such product in basket increment productsNumber
                return state.map(item => {
                    if (item.id === product.id) {
                        return {
                            ...item,
                            productsNumber: item.productsNumber + 1,
                        }
                    }
                    return item;
                })
            }

        default:
            return state;
    }
}

export default basketReducer;
