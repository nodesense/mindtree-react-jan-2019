// container/BrandList.js
import {connect} from 'react-redux';

import BrandList from '../components/BrandList';
import * as actions from '../state/actions';
import { bindActionCreators } from 'redux';
 
const mapStateToProps = (state) => {
    return {
        loading: state.brand.loading, 
        brands: state.brand.brands,
    }
}
 
const mapDispatchToProps = (dispatch, getState) => {
    return {
         actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, 
                        mapDispatchToProps) (BrandList);