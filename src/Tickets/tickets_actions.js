export const NORMAL = 'SET_NORMAL';
export const DISCOUNTED = 'DISCOUNTED';

export function setNormalTickets(value) {
    return {type: NORMAL, num: value}
}

export function setDiscountedTickets(value) {
    return {type: DISCOUNTED, num: value}
}