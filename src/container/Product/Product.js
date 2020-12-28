import React, { Component, Fragment } from 'react';
import CardProduct from '../CardProduct/CardProduct';
import './Product.css'

class Product extends Component {
    state = {
        order: 4,
        name: "Kang Purwo"
    }

    handlePlus = () => {
        this.setState({
            order: this.state.order + 1
        })
    }

    handleMinus = () => {
        if (this.state.order > 0) {
            this.setState({
                order: this.state.order - 1
            })
        }
    }

    render() {
        return (
            <Fragment>
                <div className="header">
                    <div className="logo">
                        <img src="https://etanee.id/img/content/img_logo_etanee_white.svg" alt="logo_etanee" />
                    </div>
                    <div className="troley">
                        <img src="https://etanee.id/img/icon/ic_cart_white.svg" alt="" />
                        <div className="count">{this.state.order}</div>
                    </div>
                </div>
                <CardProduct />
            </Fragment>
        )
    }
}

export default Product;