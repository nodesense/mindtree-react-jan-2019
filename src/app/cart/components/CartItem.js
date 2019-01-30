// CartItem.js
import React, {PureComponent} from "react";
import PropTypes from "prop-types";

// PureComponent is derived from React.Component
// PureComponent implementing shouldComponentUpdate method
// PureComponent compare this.props with nextProps and 
// this.state with nextState, return true if any changes
export default class CartItem extends PureComponent {
    constructor(props) {
        super(props);

        //TODO: assing from props
        this.state = {
            qty: props.item.qty
        }
    }

    //TODO: Ref
    //TODO: componentWillMount
    //TODO: state from props, qty

    onChangeQty = (e) => {
        console.log('event ', e);
        // target is real dom, input element
        console.log('value ', e.target.value)

        this.setState({
            qty: parseInt(e.target.value) || ''
        })

    }

   
    render() {
        let {item} = this.props;

        console.log("CartItem Render ", item.id);

        return (
            <tr>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                     <input 
                            value={this.state.qty}
                            type="number"
                            onChange = {this.onChangeQty}
                     />
                </td>
                <td>{item.price * item.qty}</td>
                <td> 
                <button onClick={() => {} }>
                        Update
                </button>    
                <button onClick={() => this.props.removeItem(item.id) }>
                        Delete
                </button>
                </td>
            </tr>
        )
    }
} 


CartItem.defaultProps = {
    
}

CartItem.propTypes = {
    
}