import React, { Component } from 'react';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import gql from "graphql-tag";


const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'http://localhost:4000/'
})
const client = new ApolloClient({
  cache,
  link
})


class GraphQLExample extends Component {

    constructor(props) {
        super(props);

        this.state = {
            brands: [],
            products: []
        }
    }

    getProducts = () => {

        client
            .query({
                    query: gql`
                            query GetProducts {
                                products {
                                    id
                                    name
                                    price
                                }
                            }
                    `
            })
            .then(result => {
                console.log(result);

                const {
                    data
                } = result;

                this.setState({
                    products: data.products
                })
            })


    }

    getBrands = () => {

            client
            .query({
                    query: gql`
                            query GetBrands {
                                brands {
                                    id
                                    name
                                }
                            }
                    `
            })
            .then(result => {
                console.log(result);

                const {
                    data
                } = result;

                this.setState({
                    brands: data.brands
                })
            })
        }


    

    render() {
        return (
            <div>
                <h2>GraphQL Example</h2>

                <button onClick={this.getBrands}>
                    Get Brands
                </button>

                <button onClick={this.getProducts}>
                    Get Products
                </button>

                <ul>
                    {
                        this.state.brands.map (brand => (
                            <li key={brand.id}>
                                {brand.name}
                            </li>
                        ))
                    }
                </ul>

                <table>
                    <tbody>
                    {
                        this.state.products.map (product => (
                            <tr key={product.id}>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>

            </div>
        );
    }
}

export default GraphQLExample;