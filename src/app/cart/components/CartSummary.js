// CartSummary.js
import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import PreferenceContext from '../../PreferenceContext';
//TODO: PropTypes

// TODO: PureComponent
export default class CartSummary extends PureComponent {

    //es.next
    static contextType = PreferenceContext

    constructor(props, context) {
        super(props, context);

        this.state = {
            discount: 0,
            grandTotal: 0
        }

        console.log('cartsummary cons context', context);
    }
 
    //TODO: componentWillMount

    // componentWillMount() {
    //     this.recalculate(this.props);
    // }

    //TODO: componentWillReceiveProps, recalculate 

    // update cycle method
    // called on every parent component render on update cycle
    // componentWillReceiveProps(nextProps) {
    //     console.log('CartSummary componentWillReceiveProps');
    //     console.log('nextProps', nextProps);
    //     console.log('current props', this.props);

    //     if (this.props.count !== nextProps.count || 
    //         this.props.amount !== nextProps.amount) {
    //             console.log('recalculate discount now');
    //             this.recalculate(nextProps)
    //         }

    // }

    // whenever parent render called create/update cycle
    // whenever this.setState called create/update cycle
    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps called');
        console.log('props', props);
        console.log('state ', state);

        let discount = 0;

        if (props.count >= 10) {
            discount = 20;
        } else if (props.count >= 5) {
            discount = 10;
        }

        let grandTotal = props.amount - (props.amount * discount / 100);

        // return new state
        return {
            discount, 
            grandTotal
        }
    }

 
    //TODO: shouldComponentUpdate

    recalculate(props) {
        let discount = 0;

        if (props.count >= 10) {
            discount = 20;
        } else if (props.count >= 5) {
            discount = 10;
        }

        let grandTotal = props.amount - (props.amount * discount / 100);

        this.setState({
            discount, 
            grandTotal
        })
    }
     
    check = () => {
        this.setState({
            flag: true
        })
    }

    
    render() {
        console.log("CartSummary Render");
        return (
            <div> 
            <h2>Cart Summary</h2>
            <p> Amount : {this.props.amount} </p>
            <p> Count : {this.props.count} </p>

            <p> Discount: {this.state.discount} %</p>
            <p> Grand Total: {this.state.grandTotal} </p>

            <p> Context Theme {this.context.theme}</p>

            <p> Context Lang {this.context.lang}</p>
            </div>
        )
    }
} 


CartSummary.defaultProps = {
    
}

CartSummary.propTypes = {
    
}