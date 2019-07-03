import React from 'react'
import logo from '../../../assets/bell.png'
import Count from './Count'
import TotalPrice from '../../../components/TotalPrice'
import './BuyingProduct.css'

function BuyingProducts({price, name, productsNumber}) {
    return (
        <div className='buying-product-item'>
            <img className='buying-product-item__img' src={logo} alt="product logo"/>
            <h2>
                {name}
            </h2>
            <Count number={productsNumber}/>
            <TotalPrice>
                Total price {price * productsNumber}
            </TotalPrice>
        </div>
    )
}

export default BuyingProducts;
