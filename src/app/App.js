// App.js
import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import ErrorBoundary from './components/ErrorBoundary';

import Loadable from 'react-loadable';


// import Cart from './cart/components/Cart';

import PreferenceContext from './PreferenceContext';

import {BrowserRouter as Router, 
        Route, 
        Redirect,
        Switch} from 'react-router-dom';

// import Contact from './components/Contact';
import About from './components/About';
import NotFound from './components/NotFound';


import Login from './components/Login';

import AuthRoute from './components/AuthRoute';

import ReduxCounter from './components/ReduxCounter';
import FuncCounter from './containers/FuncCounter';
import ProductList from './containers/ProductList';
import GraphQLExample from './components/GraphQLExample';
import BrandList from './containers/BrandList';

const Loading = ()=>(
    <div>
        <h2>Loading Module..</h2>
    </div>
);

const LazyLoadableCart = Loadable({
    // webpack, look into this, create separate bundle for cart code (Cart, CartList, Sumary, ITem), chunk...
  loader: () => import('./cart/components/Cart'),
  loading: Loading,
});


const LazyLoadableContact = Loadable({
    // webpack, look into this, create separate bundle for cart code (Cart, CartList, Sumary, ITem), chunk...
  loader: () => import('./components/Contact'),
  loading: Loading,
});

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lang: 'en'
        }
    }

    setLangDE = () => {
        this.setState({
            lang: 'de'
        })
    }

    setLangEN = () => {
        this.setState({
            lang: 'en'
        })
    }

    //keyword
    // create virtual dom and return the v.dom
    // react shall call render method
    // create/update cycle
    // end of call, react does diff, then patch
    render() {
        // JSX - JavaScript + XML
        // Babel converts XML to JS,  react preset
        return (
            <Router>
            <PreferenceContext.Provider value= { {lang: this.state.lang, theme: 'light'}  }>
                <div>
                    {/* JSX Comment
                    pass data to child component as props
                    */}
                     <ErrorBoundary>
                         <button onClick={this.setLangDE}>DE</button>
                         <button onClick={this.setLangEN}>EN</button>

                    <Header title="Product App" />
                    
                    {/* <Cart />
                    <Home startValue={0} />
                     */}

                    <Switch>
                    <Route path="/" exact 
                            render={ (props)=> (
                                <Home startValue={100} {...props} />
                            )} />

                    <Route path="/contact/:country" 
                          component={LazyLoadableContact} />
{/* 
                    <Route path='/about'
                            component={About} /> */}

                    
                    <AuthRoute path='/about'
                                authenticated = {true}
                               component={About} />

                    
                    <Route path='/counter'
                            component={ReduxCounter} />

                
                    <Route path='/products'
                            component={ProductList} />

                    <Route path='/brands'
                            component={BrandList} />

                <Route path='/func-counter'
                        component={FuncCounter} />

                    
             <AuthRoute path='/cart'
                               authenticated = {true}
                                component={LazyLoadableCart} />  

                    <Route path='/login'
                            component={Login} />

                    
                    <Route path='/test'
                            render= { (props) => (
                                <div>
                                    <h2>Test Page</h2>
                                    <pre>
                                        {
                                            JSON.stringify(props)
                                        }
                                    </pre>
                                </div>
                            ) } />


                        <Redirect path="/goto-cart"
                                  to="/cart" />

                        <Route path="/graphql-example"   
                                component={GraphQLExample} />

                        

                        <Route path='*'
                            component={NotFound} />

                    </Switch>

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
            </Router>
        )

    }
}

export default App;