import React from 'react'
import Product from './Product'
import './Products.css'
import {connect} from 'react-redux';
import {addProductToBasket} from '../../store/actions'

class Products extends React.Component {
    constructor(props) {
        super(props);

        // const products = [
        //     {
        //         name: 'Product 1',
        //         price: 5,
        //         id: 1,
        //     },
        //     {
        //         name: 'Product 1',
        //         price: 5,
        //         id: 2,
        //     },
        //     {
        //         name: 'Product 1',
        //         price: 5,
        //         id: 3,
        //     },
        //     {
        //         name: 'Product 1',
        //         price: 5,
        //         id: 4,
        //     },
        //     {
        //         name: 'Product 1',
        //         price: 5,
        //         id: 5,
        //     },
        //     {
        //         name: 'Product 1',
        //         price: 5,
        //         id: 6,
        //     },
        //     {
        //         name: 'Product 1',
        //         price: 5,
        //         id: 7,
        //     },
        // ];

        const productsList = this.props.products.map(item => {
            return <Product onClick={()=>this.props.addToBasket(item)} name={item.name} price={item.price} id={item.id} key={item.id}/>
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

function mapStateToProps(state) {
    console.log(state);
    return {products: state.products}
}

function mapDispatchToProps(dispatch) {
    return{
        addToBasket(product){
            console.log(product)
            dispatch(addProductToBasket(product))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)
(Products)
