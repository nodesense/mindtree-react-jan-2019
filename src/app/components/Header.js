// Header.js
import React from 'react';

import {NavLink} from 'react-router-dom';

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

            <NavLink to="/"
                     exact
                     className="button"
                     activeClassName="success">
                        Home
                     </NavLink>

            <NavLink to="/products"
                className="button"
                activeClassName="success">
                 Products
            </NavLink>


            <NavLink to="/brands"
                className="button"
                activeClassName="success">
                 Brands
            </NavLink>

            <NavLink to="/cart"
                className="button"
                activeClassName="success">
                 Cart
            </NavLink>


            <NavLink to="/about"
                className="button"
                activeClassName="success">
                 About
            </NavLink>


            <NavLink to="/contact/india"
                className="button"
                activeClassName="success">
                 Contact IN
            </NavLink>


            <NavLink to="/contact/usa"
                className="button"
                activeClassName="success">
                 Contact USA
            </NavLink>


            <NavLink to="/test"
                className="button"
                activeClassName="success">
                 Test
            </NavLink>


            <NavLink to="/goto-cart"
                className="button"
                activeClassName="success">
                 Goto cart
            </NavLink>



            <NavLink to="/counter"
                className="button"
                activeClassName="success">
                 Counter
            </NavLink>

            <NavLink to="/func-counter"
                className="button"
                activeClassName="success">
                Func Counter
            </NavLink>

            

            <NavLink to="/graphql-example"
                className="button"
                activeClassName="success">
                 GraphQL Example
            </NavLink>


            <NavLink to="/login"
                className="button"
                activeClassName="success">
                 Login
            </NavLink>


            <hr />
        </div>
    )
}

export default Header;