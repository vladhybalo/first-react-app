import React from 'react'

function Count({number}) {
    return (
        <label>
            Count
            <input type="number" defaultValue={number}  />
        </label>
    )
}

export default Count;
