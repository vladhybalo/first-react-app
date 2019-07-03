import React from 'react'
import logo from '../../../assets/basket logo.jpg'
import BasicLable from '../../BasicLabel'
import './Basket.css'

function Basket() {
    return (
        <div className='basket'>
            <img src={logo} alt="basket logotype"/>
            <BasicLable>
                Basket
            </BasicLable>
        </div>
    )
}

Basket.displayName = 'Basket';

export default Basket;
