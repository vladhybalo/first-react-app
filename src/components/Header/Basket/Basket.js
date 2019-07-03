import React from 'react'
import logo from '../../../assets/basket logo.jpg'
import BasicLable from '../../BasicLabel'
import './Basket.css'
import {Link} from 'react-router-dom'

function Basket() {
    return (
        <Link to='/basket' className='basket'>
            <img src={logo} alt="basket logotype"/>
            <BasicLable>
                Basket
            </BasicLable>
        </Link>
    )
}

Basket.displayName = 'Basket';

export default Basket;
