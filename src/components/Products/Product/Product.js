import React from 'react'
import './Product.css'
import bell from '../../../assets/bell.png'

function Product(props) {
    return (
        <div className='product-item'>
            <div className='product-item__image__wrap'>
                <img src={bell} className='product-item__image' alt="product logotype"/>
            </div>
            <h3>
                Product name
            </h3>
            <p>
                Product price 5$
            </p>
            <button onClick={props.onClick}>
                Buy
            </button>
        </div>
    )
}

Product.displayName = 'Product';

export default Product;
