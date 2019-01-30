// container/ProductList.js
import {connect} from 'react-redux';

import ProductList from '../components/ProductList';
import * as actions from '../state/actions';
import { bindActionCreators } from 'redux';
 
const mapStateToProps = (state) => {
    return {
        loading: state.product.loading, 
        products: state.product.products,
    }
}
 
const mapDispatchToProps = (dispatch, getState) => {
    return {
        fetchProductsData: function() {
            const actionFunc = actions.fetchProducts();
            dispatch(actionFunc);
        }
    }
}

export default connect(mapStateToProps, 
                        mapDispatchToProps) (ProductList);