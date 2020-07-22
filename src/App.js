import React from 'react'
import "./App.css"
import Header from './component/Header'
import Balance from './component/Balance'
import AddTransaction from './component/AddTransaction'
import IncomeList from './component/IncomeList'
import ExpenseList from './component/ExpenseList'
import {GlobalContextProvider} from './Context/GlobalState'
const App = () => {
    return (
        <GlobalContextProvider>
        <div className = "container">
            <div className= "app-wrapper">
              
            <Header/>    
            <Balance/>  
            <AddTransaction/>  
            <IncomeList/>
            <ExpenseList/>
            
             </div>
             
        </div>
        </GlobalContextProvider>
    )
}

export default App
