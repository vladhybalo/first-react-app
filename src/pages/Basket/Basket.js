import React from 'react'
import BuyingProduct from './BuyingProduct'

const productsList = [
    {
        name: 'Product 1',
        productNumbers: 10,
        pricePerProduct: 100,
        id: 1,
    },
    {
        name: 'Product 1',
        productNumbers: 10,
        pricePerProduct: 100,
        id: 2,
    },
    {
        name: 'Product 1',
        productNumbers: 10,
        pricePerProduct: 100,
        id: 3,
    },
    {
        name: 'Product 1',
        productNumbers: 10,
        pricePerProduct: 100,
        id: 4,
    },
];

function Basket() {
    return (
        <div>
            {productsList.map(item => {
                return <BuyingProduct name={item.name} price={item.productNumbers} />
            })}
        </div>
    )
}

Basket.displayName = 'BasketPage';

export default Basket;
