import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'

const initialState ={

    incomeTransactions:[
        {id:1, incomeText: "car Sold", incomeAmount:1200},
        {id:2, incomeText: "Cycle Sold", incomeAmount:1200}
    ],
    expenseTransactions:[
        {id:4, expenseText: "Rent ", expenseAmount:120},
        {id:5, expenseText: " Grocery", expenseAmount:100}
    ]
};

export const GlobalContext = createContext(initialState);

export const GlobalContextProvider=({children})=>{
const[state, dispatch]= useReducer(AppReducer,initialState)

const addIncome = incomeTransaction => {
    dispatch({
        type: "ADD_INCOME",
        payload: incomeTransaction,
    })
}

const addExpense = expenseTransaction =>{


    dispatch ({
        type:"ADD_EXPENSE",
        payload:expenseTransaction,
    })
}

const deleteTransaction = (id) =>{

    dispatch ({
        type:"DELETE",
        payload: id,
    });
};
return(
       <GlobalContext.Provider value ={{
           incomeTransactions : state.incomeTransactions,
           expenseTransactions : state.expenseTransactions,
           addIncome,
           addExpense,
           deleteTransaction,
       }}>
        {children}
       </GlobalContext.Provider>
   ) 
}