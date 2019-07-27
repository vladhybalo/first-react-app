import React from 'react'
import BuyingProduct from './BuyingProduct'
import {connect} from "react-redux";
import BasketBuyAllButton from '../../components/BasketBuyAllButton';

// const productsList = [
//     {
//         name: 'Product 1',
//         productNumbers: 10,
//         pricePerProduct: 100,
//         id: 1,
//     },
//     {
//         name: 'Product 1',
//         productNumbers: 10,
//         pricePerProduct: 100,
//         id: 2,
//     },
//     {
//         name: 'Product 1',
//         productNumbers: 10,
//         pricePerProduct: 100,
//         id: 3,
//     },
//     {
//         name: 'Product 1',
//         productNumbers: 10,
//         pricePerProduct: 100,
//         id: 4,
//     },
// ];

function Basket(props) {
    return (
        <div>
            {props.basketProducts.map(({name, price, productsNumber, id}) => {
                return <BuyingProduct name={name} price={price} productsNumber={productsNumber} key={id}/>
            })}
            <BasketBuyAllButton>Buy All</BasketBuyAllButton>
        </div>
    )
}

Basket.displayName = 'BasketPage';

export default connect(
    state => ({
        basketProducts: state.basketProducts,
    }),
    dispatch => ({
        // initProducts: () => {
        //     dispatch(initProductsList());
        // }
    })
)(Basket);
