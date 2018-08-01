import {Sale} from "../Sale/Sale";
import React, {Component} from "react";
import "./salesList.css"

class SalesList extends Component {
    render() {
        return (
            <table>
                <thead>
                <tr>
                    <th>ID:</th>
                    <th>Date: </th>
                    <th>Normal tickets:</th>
                    <th>Discounted tickets:</th>
                    <th>Total price:</th>
                    <th>Actions:</th>
                </tr>
                </thead>
                <tbody>
                {this.props.sales.map((sale) =>
                    <Sale key={sale.id} id={sale.id} normalTickets={sale.normalTickets}
                          discountedTickets={sale.discountedTickets}/>)
                }</tbody>
            </table>
        );
    }
}

export default SalesList;