import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const ListItem = (props) => {
    const { item } = props;

    return (
        <div className="list-item">
            <div>{item.weekEnding}</div>
            <div>{item.retailSales}</div>
            <div>{item.wholesaleSales}</div>
            <div>{item.unitsSold}</div>
            <div>{item.retailerMargin}</div>
        </div>
    );
}

export default ListItem;