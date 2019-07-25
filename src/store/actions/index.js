function addProductToBasket(product) {
    return {
        type: 'ADD_PRODUCT_TO_BASKET',
        payload: product,
    }
}

export {addProductToBasket};