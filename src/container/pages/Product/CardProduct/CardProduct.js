import React, { Component } from 'react';
import Counter from './Counter';

class CardProduct extends Component {

    render() {
        return (
            <div className="card">
                <div className="img-thumb-prod">
                    <img src="https://s3-ap-southeast-1.amazonaws.com/etanee-images/product/colonel_ori_pack10.jpg" alt="product_image" />
                </div>
                <p className="product-title">Daging Ayam Berbumbu Rasa Original plus Tepung Crispy Enak Sekali [1 Carton - 10 Pack]</p>
                <p className="product-price">Rp 410,000</p>
                <Counter onCounterChange={(value) => this.props.onCounterChange(value)} />
            </div>
        )
    }
}

export default CardProduct;