import React from "react";
import './sale.css';
import {DISCOUNTED_PRICE, NORMAL_PRICE} from "../TicketUtils";

function getCurrentDate() {
    let date = new Date();
    return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
}

export const Sale = props => {
    return (
        <tr className='sale'>
            <td>{props.id}</td>
            <td>{getCurrentDate()}</td>
            <td>{props.normalTickets}</td>
            <td>{props.discountedTickets}</td>
            <td>{props.discountedTickets * DISCOUNTED_PRICE + props.normalTickets * NORMAL_PRICE}</td>
            {/*<td><button type='button' onClick={this.props.removeSale(props.id)}>X</button></td>*/}
        </tr>
    );
};