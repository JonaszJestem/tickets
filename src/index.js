import React from 'react';
import {render} from 'react-dom';
import './index.css';
import {createStore} from "redux";
import sales from "./Containers/Sales/sales";
import {Provider} from "react-redux";
import App from "./App";

const store = createStore(sales);

export const SalesMock = {
  sales: [
      {
          id: 0,
          normalTickets: 3,
          discountedTickets: 5
      },
      {
          id: 1,
          normalTickets: 1,
          discountedTickets: 2
      },
      {
          id: 2,
          normalTickets: 3,
          discountedTickets: 1
      }
  ]
};

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);