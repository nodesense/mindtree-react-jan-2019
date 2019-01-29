// Home.js

import React, { Component } from 'react';

import Counter from './Counter';

class Home extends Component {
    render() {
        // class component, get props as this.props
        console.log('Home render', this.props);
        return (
            <div>
                <h2>Home</h2>
                <Counter  startValue={this.props.startValue} />
            </div>
        );
    }
}

export default Home;