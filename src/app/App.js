// App.js
import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import ErrorBoundary from './components/ErrorBoundary';

import Cart from './cart/components/Cart';

import PreferenceContext from './PreferenceContext';

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
            <PreferenceContext.Provider value= { {lang: 'eng', theme: 'light'}  }>
                <div>
                    {/* JSX Comment
                    pass data to child component as props
                    */}
                     <ErrorBoundary>
                    <Header title="Product App" />
                    <Cart />
                    <Home startValue={0} />
                    <Footer year={2019} 
                            company="MindTree" 
                            
                            address = {  {state: "KA", city:'BLR'}   }
                            countries= { ['India', 'USA']  }
                            
                    >
                        {/* content children */}
                        <p>Contact time USA: 8:00 5:00</p>
                        <p>Contact time India: 9:00 6:00</p>
                    </Footer>
                    </ErrorBoundary>
                </div>
            </PreferenceContext.Provider>
        )

    }
}

export default App;