// CartList.js

import React, {Component} from "react";
import PropTypes from "prop-types";

import CartItem from "./CartItem";

 //TODO: PureComponent

export default class CartList extends Component {
    constructor(props) {
        super(props);
    }
     
    //TODO: shouldComponentUpdate
    // return true - calls render else no render
    // called whenever parent render called on update cycle
    // called whenever this.setState called on update cycle
    // it is not called when we this.forceUpdate
    shouldComponentUpdate(nextProps, nextState) {
        console.log('CartList shouldComponentUpdate');
        console.log('current props', this.props);
        console.log('next props', nextProps);

        console.log("this.props.items != nextProps.items", this.props.items != nextProps.items);


        return this.props.items != nextProps.items;
        
    }
    
    render() {
        console.log("CartList Render");

        let {items} = this.props;

        return (
            <div> 
            <h2>Cart List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Total</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/* TODO props items map with CartItem */ }
                    {
                        items.map (item => (
                            <CartItem item={item}
                                      key={item.id}
                                      removeItem={this.props.removeItem}
                                      />
                        ))
                    }
                </tbody>
            </table>
            </div>
        )
    }
} 

CartList.defaultProps = {
    
}

CartList.propTypes = {
    
}