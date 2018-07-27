import React from 'react';
import Ticket from './Ticket';

class Tickets extends React.Component {
    constructor(props) {
        super(props);

        this.addTickets = this.addTickets.bind(this);
    }

    addTickets = function (name, sum) {
        this.setState({
            [name]: sum
        }, () => {
            let sum = Object.values(this.state).reduce(function (a, b) {
                return a + b;
            }, 0);
            this.props.updateCurrentSale(sum);
        });
    };

    render() {
        return <div>
            <Ticket name="Normalny" price="13" setTicketsSum={this.addTickets}/>
            <Ticket name="Ulgowy" price="7" setTicketsSum={this.addTickets}/>
        </div>
    }
}

export default Tickets;