const initProductsList = () => dispatch => {
    fetch('http://localhost:3000/products')
        .then(response => {
            console.log(response);
            return response.json();
        })
        .then(products => {
            console.log(products);
            dispatch({
                type: 'INIT_PRODUCTS_LIST',
                products,
            })
        })
        .catch(err => {
            console.warn(err);
        })
};

export default initProductsList;