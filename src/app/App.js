// App.js
import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Cart from './cart/components/Cart';


class App extends React.Component {
    //keyword
    // create virtual dom and return the v.dom
    // react shall call render method
    // create/update cycle
    // end of call, react does diff, then patch
    render() {
        // JSX - JavaScript + XML
        // Babel converts XML to JS,  react preset
        return (
            <div>
                {/* JSX Comment
                  pass data to child component as props
                */}
                <Header title="Product App" />

                <Cart />

                <Home startValue={0} />

                <Footer year={2019} 
                        company="MindTree" 
                        
                        address = {  {state: "KA", city:'BLR'}   }
                        countries= { ['India', 'USA']  }
                        
                        />
            </div>
        )

    }
}

export default App;