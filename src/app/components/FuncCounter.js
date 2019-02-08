// FuncCounter.js
 
import React, { Component } from 'react';

// functional/presentational/dumb component

function FuncCounter(props) {
        console.log('FuncCounter ', props);
        return (
            <div>
                <h2>Redux Func Counter</h2>
                <p> Counter {props.counter} </p>
                
                <button onClick={props.increment}>+1</button>
                <button onClick={props.reset}>Reset</button>

                {/* props.actions.increment, 
                   props.actions.reset */}
                <button onClick={() => props.actions.increment(1) }>+1 Bind Action</button>
                <button onClick={props.actions.reset}>Reset bind Action</button>


                <button onClick={() => props.actions.addToCartAndRedirect({id: 1}, props.history)}>Add to Cart</button>

            </div>
        );
    }

export default FuncCounter;