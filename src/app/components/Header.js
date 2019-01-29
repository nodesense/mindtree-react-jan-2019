// Header.js
import React from 'react';

// functional component
// create and return v.dom
// no state ==> stateless 
// no lifecycle
// no ref, no access to real dom
// react calls this method, get v.dom
function Header(props) {
    console.log('Header props', props);

    // props immutable
    // props.title = "Fail"; // error
    return (
        <div>
            <h2>{props.title}</h2>
            <hr />
        </div>
    )
}

export default Header;