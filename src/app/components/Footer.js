// Footer.js
import React from 'react';
import Address from './Address';

import PropTypes from 'prop-types';
import PreferenceContext from '../PreferenceContext';


// functional component
// local to Footer.js, private
const CountryList = ({countries}) => {
    return (
        <div>
            <span>Branches: </span>
            {
                countries.map(country => {
                    return (
                        <span key={country}>{country} </span>
                    )
                })
            }


        </div>
    )
}

// element, not component (component should be function or class)
const notice = <p>Updated  timing refer here....</p>

// ES6 function
const Footer = (props, context) => {
    // deconstruct
    let {year, company, 
        address, countries } = props;
    // let year = props.year;
    return (
        <div>
            <hr />
            <p id="copyrights">Copyrights @{year}, {company}</p>
            <Address address={address} />
            <CountryList countries={countries} />
            {
                true && <span>True</span>
            }
            {
                false && <span>Not Shown</span>
            }

            {/* children is keyword, represent content child */}
            {props.children}
            {notice}

            <p> Context Theme {context.theme}</p>

            <p> Context Lang {context.lang}</p>
        </div>
    )
}

// propTypes is a keyword
Footer.propTypes = {
    year: PropTypes.number.isRequired, // number, mandatory
    company: PropTypes.string, // string, optional
    address: PropTypes.shape({
        city: PropTypes.string.isRequired,
        state: PropTypes.string.isRequired,
         
        pincode: PropTypes.number, // optional
    }).isRequired
}

//defaultProps is react keyword
Footer.defaultProps = {
    company: 'Product App'
}

Footer.contextType = PreferenceContext;

export default Footer;