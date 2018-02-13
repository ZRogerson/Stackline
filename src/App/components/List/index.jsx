import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ListItem from '../ListItem/';

import './styles.css';

const List = (props) => {
    const { sales } = props;

    return (
        <div className="data-list">
            <header>
                <div>Week Ending</div>
                <div>Retail Sales</div>
                <div>Wholesale Sales</div>
                <div>Units Sold</div>
                <div>Reatailer Margin</div>
            </header>

            {sales.map(sale => {
                return <ListItem item={sale} />
            })}
        </div>
    );
}

export default List;