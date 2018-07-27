import {DISCOUNTED, NORMAL} from "./tickets_actions";

export function ticketsApp(state, action) {
    switch(action.type) {
        case DISCOUNTED || NORMAL:
            return [...state, {numberOfTickets: action.num}];
        default:
            return state;
    }
}
