// ReduxCounter.js

// Demo code, not for production

import React, { Component } from 'react';
import * as actions from '../state/actions';
import configureStore from '../configureStore';
import {bindActionCreators} from 'redux';

const store = configureStore();

class ReduxCounter extends Component {

    componentDidMount() {
        this.unsubscribeFunc = store.subscribe ( ()=> {
            // callback, called for every dispatch
            console.log('ReduxCounter subscribe');
            this.forceUpdate();
        })
    }

    componentWillUnmount() {
        this.unsubscribeFunc();
    }

    increment = () => {
        // create action using action creator
        const action = actions.increment(1);
        console.log('dispatching action', action);
        store.dispatch(action);  // calls reducer, calls susbcriber
        console.log('current state', store.getState());
    }

    reset = () => {
        //const dispatch = store.dispatch;
        const {dispatch} = store;
        //store.dispatch(actions.reset());
        dispatch(actions.reset());
    }

    // bind action creators
    incrementBy2 = () => {
        const {dispatch} = store;

        // creates  a wrapper function, return wrapper function
        // call actionCreator with parameter if any
        // dispatch the action


        const incrementWrappperFunc = 
                        bindActionCreators(actions.increment,
                                            dispatch);
        incrementWrappperFunc(2);


        console.log("Actions creators raw ", actions)
        const wrappperObj = 
                        bindActionCreators(actions,
                                            dispatch);

       console.log("Actions creators wrappperObj ", wrappperObj)

       wrappperObj.increment(5);

    }

    reset2 = () => {
        const {dispatch} = store;

        const wrappperObj = 
                        bindActionCreators(actions,
                                            dispatch);

       wrappperObj.reset();

    }

    render() {
        const state = store.getState();
        console.log('reduxcounter state ', state);
        return (
            <div>
                <h2>Redux Counter</h2>
                <p> Counter {state.counter} </p>


                <button onClick={this.increment}>+1</button>
                <button onClick={this.reset}>Reset</button>
                <button onClick={this.incrementBy2}>+2</button>
                <button onClick={this.reset2}>Reset 2</button>


            </div>
        );
    }
}

export default ReduxCounter;