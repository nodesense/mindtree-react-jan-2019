// Footer.js
import React from 'react';
import Address from './Address';

import PropTypes from 'prop-types';

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

// ES6 function
const Footer = (props) => {
    // deconstruct
    let {year, company, 
        address, countries } = props;
    // let year = props.year;
    return (
        <div>
            <hr />
            <p>Copyrights @{year}, {company}</p>
            <Address address={address} />
            <CountryList countries={countries} />
            {
                true && <span>True</span>
            }
            {
                false && <span>Not Shown</span>
            }
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

export default Footer;