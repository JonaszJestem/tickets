import {connect} from "react-redux";
import React, {Component} from "react";
import SalesPage from "./Components/SalesPage/SalesPage";
import {createSale} from "./Actions";
import "./App.css"


class App extends Component {
    onCreateSale = ({normalTickets, discountedTickets}) => {
        this.props.dispatch(createSale({normalTickets, discountedTickets}));
    };

    render() {
        return (
            <div className="main-content">
                <SalesPage sales={this.props.sales} onCreateSale={this.onCreateSale}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        sales: state.sales
    }
}

export default connect(mapStateToProps)(App);