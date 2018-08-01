export const CREATE_SALE = 'CREATE_SALE';

let id = 0;
export function uniqueId() {
    return id++;
}

export function createSale({normalTickets, discountedTickets}) {
    return {
        type: CREATE_SALE,
        payload: {
            id: uniqueId(),
            normalTickets,
            discountedTickets
        }
    };
}