import React, {useContext} from 'react'
import {GlobalContext} from '../Context/GlobalState'

const Balance = () => {

    const {incomeTransactions, expenseTransactions} = useContext(GlobalContext);
    
    const incomeAmounts = incomeTransactions.map(
        incomeTransaction => incomeTransaction.incomeAmount
    )

    const totalIncome = incomeAmounts.reduce((prev, current) => (prev += current),0).toFixed(2);
    
 const expenseAmounts = expenseTransactions.map(expenseTransaction => expenseTransaction.expenseAmount)

const totalExpense = expenseAmounts.reduce((prev, current)=>prev += current,0).toFixed(2);

//const totalBalance = (totalIncome *1 ) - (totalExpense *1);
    return (
        <div className= "balance"> 
            <h2>Balance</h2>
            <h3>{(totalIncome *1 ) - (totalExpense *1)}</h3>
            <div className= "income-expense">
                <div className="plus">
                <h3>income</h3>
                <p>+{totalIncome}</p>
                </div>
                <div className="minus">
                <h3>expense</h3>
                <p>-{totalExpense}</p>
                </div>
            </div>
        </div>
    )
}

export default Balance
