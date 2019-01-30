// container/FuncCounter.js
import {connect} from 'react-redux';

import FuncCounter from '../components/FuncCounter';
import * as actions from '../state/actions';
import { bindActionCreators } from 'redux';

// return required props (data/state) for component 
// state = store.getState()
// container passes state as argument
// who call? container will call, pass state as arg
// when? very first when component created
// when? whenever dispatch (subscribe)
const mapStateToProps = (state) => {
    return {
        // propName: value from state
        counter: state.counter
    }
}

// return props functions like increment, reset
// let dispatch = store.dispatch
// who call this? container
// when? very first when component created
const mapDispatchToProps = (dispatch, getState) => {
    return {
        increment: function() {
            const action = actions.increment(1);
            dispatch(action);
        },

        // reset: () => {
        //     dispatch(actions.reset())
        // }

        reset: bindActionCreators(actions.reset, dispatch),

        actions: bindActionCreators(actions, dispatch),
    }
}


// const Container = connect(mapStateToProps, 
//                          mapDispatchToProps) (FuncCounter);

// export default Container;

// container get store usign React Context, given by Provider

export default connect(mapStateToProps, 
                        mapDispatchToProps) (FuncCounter);