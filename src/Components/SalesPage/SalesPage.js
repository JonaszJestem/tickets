import React, {Component} from "react";
import SalesList from "../SalesList/SalesList";
import "./salesPage.css";

class SalesPage extends Component {
    state = {
        id: 0,
        normalTickets: 0,
        discountedTickets: 0
    };

    render() {
        return <React.Fragment>
            <form onSubmit={this.onCreateSale}>
                <label htmlFor='normalTickets'>Normal tickets:</label>
                <button type='button' value="1" onClick={this.onNormalChange}>+</button>
                <input name='normal' type='number' min='0' onChange={this.onNormalChange} value={this.state.normalTickets}/>
                <button type='button'  value="-1" onClick={this.onNormalChange}>-</button>
                <label htmlFor='discountedTickets'>Discounted tickets:</label>
                <button type='button'  value="1" onClick={this.onDiscountedChange}>+</button>
                <input name='discounted' type='number' min='0'  onChange={this.onDiscountedChange}
                       value={this.state.discountedTickets}/>
                <button type='button'  value="-1" onClick={this.onDiscountedChange}>-</button>
                <button type='submit'>Save sale</button>
            </form>
            <div className='salesList'>
                <SalesList sales={this.props.sales}/>
            </div>
        </React.Fragment>
    }

    onNormalChange = (e) => {
        if(e.target.tagName === "BUTTON") {
            let buttonValue = parseInt(e.target.value, 10);
            this.setState(prevState => {return {normalTickets: prevState.normalTickets + buttonValue}})
        }
        else {
            this.setState({normalTickets: e.target.value});
        }
    };
    onDiscountedChange = (e) => {
        if(e.target.tagName === "BUTTON") {
            let buttonValue = parseInt(e.target.value, 10);
            this.setState(prevState => {return {discountedTickets: prevState.discountedTickets + buttonValue}})
        }
        else {
            this.setState({discountedTickets: e.target.value});
        }
    };

    onCreateSale = (e) => {
        e.preventDefault();
        this.props.onCreateSale({
            id: 0,
            normalTickets: this.state.normalTickets,
            discountedTickets: this.state.discountedTickets
        });
        this.resetForm();
    };

    resetForm() {
        this.setState({
            normalTickets: 0,
            discountedTickets: 0
        })
    }
}

export default SalesPage;