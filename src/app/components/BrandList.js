// components/BrandList.js

import React, { Component } from 'react';

// taking brandList through containers
// Editing brand is detail done through component state

class BrandList extends Component {
    constructor(props){
        super(props);

        this.state = {
            brand: undefined
        }
    }

    componentDidMount() {
        // actions is bindAction powered
        // dispatch a thunk function
         this.props.actions.fetchBrands();
    }

    selectBrand = (brand) => {
        this.setState({brand});
    }

    onBrandNameChange = (e) => {
        this.setState ({
            brand: {...this.state.brand, name: e.target.value}
        })
    }

    onSaveBrand = () => {
        // thunk method to update the name
        const {id, name} = this.state.brand;
        this.props.actions.updateBrand(id, name);
    }

    render() {
        let {brands, 
            loading} = this.props;

        if (loading) {
            return (
                <h2>Brands is loading ....</h2>
            )
        }

        return (
            <div>
                <h2>Brands </h2>

                { this.state.brand && (
                    <div>
                        <p>Selected Brand {this.state.brand.name}</p>
                        <input name="name"
                               value={this.state.brand.name} 
                               onChange={this.onBrandNameChange} />

                        <button onClick={this.onSaveBrand}>
                            Save
                        </button>
                    </div>
                    )
                }

                <ul>
                    {
                        brands.map(brand => (
                            <li key={brand.id}
                                onClick={ () => this.selectBrand(brand)} 
                            > {brand.name}</li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default BrandList;