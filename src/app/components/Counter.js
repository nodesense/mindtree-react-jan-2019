// Counter.js

import React, { Component } from 'react';
 
class Counter extends Component {
    // called only once per instance
    constructor(props) {
        super(props);
        console.log('Counter cons', props);

        // state is a keyword for react
        // mutation
        // state is owned by component instance
        // state is destroyed when component instance destroyed
        this.state = {
            // initialize state from props
            counter: props.startValue
        }
    }

    //Es6 styled member function
    increment() {
        console.log('increment called', this );
        console.log('counter before is ', this.state.counter);

        //Good
        //setState: keyword
        // setState accepts new state
        // merge the new state with current state (this.state)
        // trigger react to call render function of this component
        // setState is async
        this.setState({
            counter: this.state.counter + 1
        }, () => {
            // callback method. called after render method
            console.log('setstate callback ', this.state.counter);
        })

        console.log('counter after is ', this.state.counter);


        //BAD, mutating state directly, syncronous
        //this.state.counter++;
    }

    //ES.NEXT styled member function
    // GOOD
    // Arrow in place, solve 'this' in context
    // decrement function created once per instance
    decrement = () => {
        console.log('decrement called', this);
        console.log('counter is ', this.state.counter);

        this.setState({
            counter: this.state.counter - 1
        })
    }

    multiply = () => {
        // BAD, mutating directly
        this.state.counter = this.state.counter * 2;
        //react keyword
        // trigger react to call render function of this component
        // BAD
        this.forceUpdate(); 
    }

    // Render twice, bad
    incrementBy2 = () => {
         this.setState({
             counter: this.state.counter + 2
         }, () => {
            this.setState({
                counter: this.state.counter + 2
            })
         })
    }

    decrementBy2 = () => {
         // Good practice to keep outside class,
        
         function funcSetState(state, props) {
             console.log('funcSetState called', state)
             // return new state
             return {
                 counter: state.counter - 2
             }
         }

         this.setState(funcSetState)
         this.setState(funcSetState)
   }

    render() {
        console.log('Counter render', this.props);
        console.log('counter in render is ', this.state.counter);

        let {startValue} = this.props;

        return (
            <div>
                <h2>Counter</h2>
                <p>Start Value {startValue}</p>

                <p>Counter is {this.state.counter}</p>

                <button onClick={this.increment}>
                    Incr Crash
                </button>

                {/* calling increment in 'this' scope */}
                <button onClick={() => this.increment() }>
                    Incr ES6 Way
                </button>
                
                <button onClick={this.decrement}>
                    Decr ES.Next Way
                </button>

                <button onClick={this.multiply}>
                    Mul * 2
                </button>

                <button onClick={this.incrementBy2}>
                    Incr + 2 twice
                </button>


                <button onClick={this.decrementBy2}>
                    Decr - 2 twice
                </button>



            </div>
        );
    }
}

export default Counter;