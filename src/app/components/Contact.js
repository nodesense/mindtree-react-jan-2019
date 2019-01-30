// Contact.js
import React, { Component } from 'react';

class Contact extends Component {
    render() {
        console.log('Contact render', this.props);
        return (
            <div>
                <h2>Contact</h2>
                <p>Country {this.props.match.params.country} </p>

                <button onClick={ () => {} }>
                    Home
                </button>

                <button onClick={ () => this.props.history.push("/cart") }>
                    Cart
                </button>
            </div>
        );
    }
}

export default Contact;