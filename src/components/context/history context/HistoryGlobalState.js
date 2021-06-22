import React, { createContext, useReducer } from 'react'
import HistoryReducer from './HistoryReducer'

if (localStorage.getItem('historyList') === null) {
    localStorage.setItem('historyList', [])
}
const initialState = {historyArray:[]}

export const HistoryGlobalContext = createContext(initialState)

export const HistoryGlobalProvider = ({ children }) => {
    
    const [state, dispatch] = useReducer(HistoryReducer, initialState)
    
    const AddHistory = (item) => {

        console.log(item);
        localStorage.setItem('historyList',JSON.stringify([...state.historyArray,item]))
        dispatch({
            type: 'ADD_TO_HISTORY',
            payload:item
        })
    }
    
    return (<HistoryGlobalContext.Provider
        value={{
            historyArray: state.historyArray,
            AddHistory
            
        }}
    >
        {children}
            </HistoryGlobalContext.Provider>)
}