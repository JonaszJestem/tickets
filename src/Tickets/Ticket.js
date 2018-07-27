import React from "react";

class Ticket extends React.Component {
    constructor(props) {
        super(props);
        this.state = {numberOfTickets: 0};
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange = function (e) {
        let value = e.target.value === "+" ? 1 : -1;

        this.setState((prevState) => {
            return {numberOfTickets: prevState.numberOfTickets + value}
        }, () => this.props.setTicketsSum(this.props.name, this.state.numberOfTickets * this.props.price))
    };

    render() {
        return <div>
            {this.props.name}
            {this.state.numberOfTickets}
            <button value="+" onClick={e => {
                this.handleChange(e)
            }}>+
            </button>
            <button value="-" onClick={e => {
                this.handleChange(e)
            }}>-
            </button>
        </div>
    }
}

export default Ticket;