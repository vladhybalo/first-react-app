import React from 'react'
import Basket from './Basket'
import BasicLabel from '../BasicLabel'
import './Header.css'

function Header() {
    return (
        <header>
            <div className='language'>
                <select name="" id="">
                    <option value="en">
                        En
                    </option>
                    <option value="ukr">
                        Ukr
                    </option>
                </select>
                <BasicLabel>
                    Catalog
                </BasicLabel>
            </div>
            <Basket/>
        </header>
    )
}

Header.displayName = 'Header';

export default Header;
