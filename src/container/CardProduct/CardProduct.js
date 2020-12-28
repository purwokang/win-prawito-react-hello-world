import React, { Component } from 'react';

class CardProduct extends Component {
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


            <div className="card">
                <div className="img-thumb-prod">
                    <img src="https://s3-ap-southeast-1.amazonaws.com/etanee-images/product/colonel_ori_pack10.jpg" alt="product_image" />
                </div>
                <p className="product-title">Daging Ayam Berbumbu Rasa Original plus Tepung Crispy[1 Carton - 10 Pack]</p>
                <p className="product-price">Rp 41.000</p>
                <div className="counter">
                    <button className="minus" onClick={this.handleMinus} >-</button>
                    <input type="text" className='input-counter' value={this.state.order} />
                    <button className="plus" onClick={this.handlePlus} >+</button>
                </div>
            </div>

        )
    }
}

export default CardProduct;