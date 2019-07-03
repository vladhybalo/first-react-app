import React from 'react'
import Product from './Product'
import './Products.css'

class Products extends React.Component {
    constructor() {
        super();

        const products = [
            {
                name: 'Product 1',
                price: 5,
                id: 1,
            },
            {
                name: 'Product 1',
                price: 5,
                id: 2,
            },
            {
                name: 'Product 1',
                price: 5,
                id: 3,
            },
            {
                name: 'Product 1',
                price: 5,
                id: 4,
            },
            {
                name: 'Product 1',
                price: 5,
                id: 5,
            },
            {
                name: 'Product 1',
                price: 5,
                id: 6,
            },
            {
                name: 'Product 1',
                price: 5,
                id: 7,
            },
        ];

        const productsList = products.map(item => {
            return <Product name={item.name} price={item.price} id={item.id} key={item.id}/>
        });

        this.state = {
            productsList,
        }
    }
    render() {
        return (
            <div className='products-list'>
                {this.state.productsList}
            </div>
        )
    }
}

Products.displayName = 'ProductsComponent';

export default Products;
