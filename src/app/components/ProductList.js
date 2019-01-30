// components/ProductList.js

import React, { Component } from 'react';

class ProductList extends Component {

    componentDidMount() {
        this.props.fetchProductsData();
    }

    render() {
        let {products, 
            loading} = this.props;

        if (loading) {
            return (
                <h2>Products is loading ....</h2>
            )
        }

        return (
            <div>
                <h2>Products </h2>
                <ul>
                    {
                        products.map(product => (
                            <li> {product.name}-{product.price}</li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default ProductList;