import { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

const initialState = {
    transactions: [
        {
            id: 1,
            text: 'shopping',
            amount: -20
        },
        {
            id: 2,
            text: 'Salary',
            amount: 1000
        },
        {
            id: 3,
            text: 'Book',
            amount: -10
        }
    ]
}

export const GlobalContext = createContext(initialState)

//Provider component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    function deleteTransaction (id) {
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id
        })
    }

    function addTransaction (transaction) {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction
        })
    }

    return (
        <GlobalContext.Provider
        value={{
            transactions: state.transactions,
            addTransaction,
            deleteTransaction
        }}
        >
          {children}
        </GlobalContext.Provider>
    )
}
