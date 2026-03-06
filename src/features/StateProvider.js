// Import necessary functions from the React library for creating and using context and managing state.
import React, { createContext, useContext, useReducer } from 'react';

// Create a new Context object. This object will hold the current state value and the dispatch function, 
// making them available to all components wrapped within the Provider.
export const StateContext = createContext();

// Create the StateProvider component. This component is used to wrap a part of your application 
// where you want the state to be accessible. 
// - It accepts 'reducer' (a function defining how state changes), 
// - 'initialState' (the starting value of the state), and 
// - 'children' (the components within its scope).
export const StateProvider = ({ reducer, initialState, children }) => (
    // The Provider component makes the state and dispatch function available to its children.
    // useReducer is called with the reducer and initial state, returning the current state 
    // and a dispatch function to update it. These are passed as the 'value'.
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// Custom hook 'useStateValue' to easily access the state and dispatch function from any functional component 
// within the provider's scope without repeatedly using useContext(StateContext).
export const useStateValue = () => useContext(StateContext);
