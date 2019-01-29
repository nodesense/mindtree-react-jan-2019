// Address.js
import React from 'react';

// address = props.address
// deconstruct
const Address = ({address}) => {
    return (
        <div>
            <span>Address </span>
            <span>{address.city} </span>
            <span>{address.state} </span>
        </div>
    )
}

export default Address;