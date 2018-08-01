import {CREATE_SALE} from "../../Actions";

export default function sales(state = {sales: []}, action) {
    switch (action.type) {
        case CREATE_SALE:
            console.log("In reducer - CREATE_SALE");
            console.log("State: ");
            console.log(state);
            return {sales: state.sales.concat(action.payload)};
        default:
            return state;
    }
}