import React from 'react'
import Basket from './Basket'
import LanguageSelect from './LanguageSelect'
import './Header.css'

function Header() {
    return (
        <header>
            <LanguageSelect/>
            <Basket/>
        </header>
    )
}

Header.displayName = 'Header';

export default Header;
