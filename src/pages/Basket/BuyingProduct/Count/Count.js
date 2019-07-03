import React from 'react'

function Count({number}) {
    return (
        <label>
            Count
            <input type="number" value={number}/>
        </label>
    )
}

export default Count;
