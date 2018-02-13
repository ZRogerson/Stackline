import React, { Component } from 'react';

import Product from './components/Product/';
import Graph from './components/Graph/';
import List from './components/List/';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
    }
  }

  componentWillMount() {
    fetch('/products.json')
      .then(res => res.text())
      .then(data => JSON.parse(data))
      .then((json) => {
        this.setState({ products: json })
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="/logo.jpg" alt="" />
        </header>
        <main>
          {this.state.products.length > 0 && <Product product={this.state.products[0]} />}
          <div className="sales">
            {this.state.products.length > 0 && <Graph product={this.state.products[0].sales} />}
            {this.state.products.length > 0 && <List sales={this.state.products[0].sales} />}            
          </div>
        </main>
      </div>
    );
  }
}

export default App;
