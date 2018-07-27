import React, {Component} from 'react';
import './App.css';
import Tickets from "./Tickets/Tickets";

class App extends Component {

    state = {
        sales: [],
        currentSale: 0
    };

    constructor(props) {
        super(props);

        this.updateCurrentSale = this.updateCurrentSale.bind(this);
        this.saveSale = this.saveSale.bind(this);
    }

    updateCurrentSale = function (price) {
        this.setState(() => ({currentSale: price}));
    };

    saveSale = function () {
        let currentSale = this.state.currentSale;
        this.setState((prevState) => {
            return {sales: [...prevState.sales, currentSale], currentSale: 0}
        });
    };

    render() {
        return (
                <div className="App">
                    <Tickets updateCurrentSale={this.updateCurrentSale}/>
                    <Save saveSale={this.saveSale}/>
                    <Sales list={this.state.sales}/>
                </div>
        );
    }
}

class Save extends React.Component {
    render() {
        return <button onClick={this.props.saveSale}>Save</button>;
    }
}

class Sales extends React.Component {
    render() {
        return <ul>{this.props.list.map((price, index) => <li key={index}>{price}</li>)}</ul>;
    }
}

export default App;
