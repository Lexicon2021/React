import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer';

// Initial State
const initialState =  {
//     transactions: [
//   { id: 1, text: 'Blommor', amount: -20 },
//   { id: 2, text: 'Lön', amount: 300 },
//   { id: 3, text: 'Bok', amount: -10 },
//   { id: 4, text: 'Kamera', amount: 150 }
//     ] // *** sen radera så det blir en tom array
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider component / Gör så man kan importera context i hela appen.
export const GlobalProvider = ({ children }) => { // Global Provider är ** named import ** för att det är export const
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // *** Actions make call to reducer
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }
    
    return (<GlobalContext.Provider value={{ transactions: state.transactions, deleteTransaction, addTransaction }}>
        {children}
    </GlobalContext.Provider>)
};