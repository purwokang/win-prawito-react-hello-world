import React, { Component, Fragment } from 'react';
import CardProduct from './CardProduct/CardProduct';
import './Product.css'
// import { connect } from "react-redux";
import { RootContext } from '../../Home/Home';

class Product extends Component {
    // state = {
    //     order: 0,
    //     name: "Kang Purwo"
    // }

    // handleCounterChange = (newValue) => {
    //     this.setState({
    //         order: newValue
    //     })
    // }

    render() {
        return (
            <RootContext>
                {
                    value => {
                        return (
                            <Fragment>
                                <p>Halaman Product</p>
                                <hr />
                                <div className="header">
                                    <div className="logo">
                                        <img src="https://etanee.id/img/content/img_logo_etanee_white.svg" alt="logo_etanee" />
                                    </div>
                                    <div className="troley">
                                        <img src="https://etanee.id/img/icon/ic_cart_white.svg" alt="" />
                                        <div className="count">{value.state.totalOrder}</div>
                                    </div>
                                </div>
                                <CardProduct />
                            </Fragment>
                        )
                    }
                }
            </RootContext>

        )
    }
}

// const mapStateToProps = state => {
//     return {
//         order: state.totalOrder
//     }
// }

// export default connect(mapStateToProps)(Product);
export default Product;