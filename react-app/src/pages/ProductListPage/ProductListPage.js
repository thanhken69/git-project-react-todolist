import React, { Component } from 'react';
import ProductList from '../../components/ProductList/ProductList'
import ProductItem from '../../components/ProductItem/ProductItem'
import { connect } from 'react-redux'
import apiCaller from '../../utils/apiCaller'
import { actFetchProductsRequest, actDeleteProductRequest } from '../../actions/index'

class ProductListPage extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         products: []
    //     }
    // }

    componentDidMount() {
        this.props.fetchAllProducts()
    }

    onDelete = (id) => {
        this.props.onDeleteProduct(id)
        // apiCaller(`products/${id}`, 'DELETE', null).then(res => {
        //     if (res.status === 200) {
        //         var { products } = this.props
        //         products = products.filter(product => product.id !== id);
        //         this.props.fetchAllProducts(products)
        //     }
        // })

    }
    render() {
        var { products } = this.props
        return (
            <div>
                <ProductList>
                    {this.showProducts(products)}
                </ProductList>
            </div>
        );
    }

    showProducts(products) {
        var result = null
        result = products.map((product, index) => {
            return (
                <ProductItem
                    key={index}
                    product={product}
                    index={index}
                    onDelete={this.onDelete}
                />
            )
        })
        return result
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllProducts: () => {
            dispatch(actFetchProductsRequest())
        },
        onDeleteProduct: (id) => {
            dispatch(actDeleteProductRequest(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
