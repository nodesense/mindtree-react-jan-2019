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
            qty: 0
        }
    }

    //TODO: Ref
    //TODO: componentWillMount
    //TODO: state from props, qty
   
    render() {
        let {item} = this.props;

        console.log("CartItem Render ", item.id);

        return (
            <tr>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                     <input 
                            value={item.qty}
                            type="number"
                            onChange = { () => {} }
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