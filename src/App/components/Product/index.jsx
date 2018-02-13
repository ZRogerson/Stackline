import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

class Product extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const { product } = this.props;

        return (
            <div className="product-info">
                <img src={product.image} alt="" />
                <h3 className="product-title">{product.title}</h3>
                <p>{product.subtitle}</p>
                <div className="product-tags">
                    {product.tags.map(tag => {
                        return (<span key={tag}>{tag}</span>);
                    })}
                </div>
                <div className="product-info-nav">
                    <ul>
                        <li><i>i</i> OVERVIEW</li>
                        <li className="selected"><i>i</i> SALES</li>
                    </ul>
                </div>
            </div>
        );
    }
}

Product.propTypes = {
    product: PropTypes.object.isRequired
}

export default Product;