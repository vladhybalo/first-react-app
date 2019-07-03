import React from 'react'
import BasicLabel from "../../BasicLabel";
import {Link} from 'react-router-dom'

function LanguageSelect() {
    return (
        <Link to='/' className='language'>
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
        </Link>
    )
}

LanguageSelect.displayName = 'LanguageSelect';

export default LanguageSelect;
