import React, { Component } from 'react';
import PropTypes from 'prop-types';

// https://rma-consulting.github.io/react-easy-chart/line-chart/index.html
import { LineChart } from 'react-easy-chart';

import './styles.css';

class Graph extends Component {
    constructor(props) {
        super(props);

        this.state = {
            highest: 0,
            data: []
        }
    }

    componentDidMount() {
        const { product } = this.props;
        // Get the highest int to show in the graph so set the Y bounds
        let highest = 0,
            retailSales = [],
            wholesaleSales = [];

        // Populate the graph array data points
        product.map(p => {
            highest = Math.max(highest, p.retailSales, p.wholesaleSales);

            retailSales.push({ x: p.weekEnding, y: p.retailSales })
            wholesaleSales.push({ x: p.weekEnding, y: p.wholesaleSales })
        })

        this.setState({
            highest,
            data: [
                retailSales,
                wholesaleSales
            ]
        })
    }

    render() {
        return (
            <div className="product-graph">
                <LineChart
                    xType={'text'}
                    yDomainRange={[0, this.state.highest]}
                    axes
                    width={1000}
                    height={500}
                    lineColors={['#46a8f6', '#9ba6bf']}
                    interpolate={'cardinal'}
                    data={this.state.data}
                />
            </div>
        );
    }
}

Graph.propTypes = {

}

export default Graph;