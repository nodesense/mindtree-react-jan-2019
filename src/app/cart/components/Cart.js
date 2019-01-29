// Cart.js

import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import CartList from "./CartList";
import CartSummary from "./CartSummary";

export default class Cart extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            items: [ 
            			{id: 1, name: 'P1', price: 100, qty: 5}
            	   ],
            amount: 0, // sum of all items price * qty
            count: 0, // sum of all items qty
            flag: true
        }
    }
    
    addItem = () => {
        let id = Math.ceil(Math.random() * 10000);
        let item = {
            id,
            name: `Product ${id}`,
            price: Math.ceil(Math.random() * 100),
            qty: 1
        }

        // wrong, this.state.items.push(item), mutate directly
        //TODO:
        // clone, add item at end of new array
        // immutable
        const items = [...this.state.items, item]
        this.setState({
            // items:items //es5
            items // items: items
        })

        //Wrong, setState is aync, bug,
        // wrong one this.recalculate(this.state.items);
        this.recalculate(items);
 
    }
    
    // es.next function, resolve this in context
    // pass removeItem as props to cart list
    // cart list pass the same to cart item
    // cart item call this method as callback
    removeItem = (id) => {
        //TODO
        console.log('removeItem ', id);

        const items = this.state.items
                          .filter (item => item.id !== id);

        this.setState({
            items
        })

        this.recalculate(items);
    }

    // assignment
    // array immutablity, object immutablity 
    // items,               item
    updateItem = (id, qty) => {
        //TODO
    }

    empty = () => {
        //TODO
        this.setState({
            items: []
        })


        this.recalculate([]);
    }

    //dummy
    refresh = () => {
        this.setState({
            flag: true
        })
    }

    // derived data from state
    recalculate(items) {
        let count = 0, 
            amount = 0;

        for (let item of items) {
            amount += item.price * item.qty;
            count += item.qty;
        }

        this.setState({
            amount,
            count
        })
    }

    //TODO:
    //componentWillMount
    componentWillMount() {
        this.recalculate(this.state.items);
    }
    
    
    render() {
        console.log("Cart render")
        return (
            <div> 
            <h2>Cart</h2>

            <button onClick={this.addItem}>
                Add Item
            </button>


            <button onClick={this.empty}>
                Empty
            </button>

            <button onClick={this.refresh}>
                Refresh
            </button>
            

            <CartList  items={this.state.items}  
                       removeItem={this.removeItem}
            />

            <CartSummary amount={this.state.amount}
                         count = {this.state.count}
            />

            </div>
        )
    }
} 


Cart.defaultProps = {
    
}

Cart.propTypes = {
    
}