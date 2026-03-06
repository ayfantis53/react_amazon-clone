// This file defines the initial application state and reducer actions
// to manage changes to the basket state (e.g., adding/removing items).

// 1. Initial State: The basket starts empty
export const initialState = {
    basket: [], };

// 2. Selector: Calculates the total price of items in the basket
// Uses Array.prototype.reduce() to sum up item prices
export const getBasketTotal = (basket) => {
    return basket?.reduce((amount, item) => item.price + amount, 0);
};

// 3. Reducer: Pure function to handle state transitions based on action types
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_BASKET":
            // Returns a new state object with the old state spread
            // and the new item added to the basket array.
            return {
                ...state, basket: [...state.basket, action.item], };
        case "REMOVE_FROM_BASKET":
            // Finds the index of the item to remove
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );

            // Create a copy of the current basket to avoid direct mutation
            let newBasket = [...state.basket];

            if (index >= 0) {
                // Remove the item if found
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `Can't remove product (id: ${action.id}) as its not in the basket!`
                );
            }

            // Return new state with updated basket
            return {
                ...state, basket: newBasket, };
        default:
            // Return current state if action type is not recognized
            return state;
    }
};

export default reducer;
