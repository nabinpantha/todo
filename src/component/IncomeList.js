import React , {useContext}from 'react'
import {GlobalContext} from '../Context/GlobalState'
import IncomeTransaction from './IncomeTransactions'
const IncomeList = () => {
    const {incomeTransactions} = useContext(GlobalContext);
    console.log(incomeTransactions); 
    return (
        <div className='transactions transactions-income'>
           <h2>Transaction History</h2>
            <ul className='transaction-list'>
                {incomeTransactions.map(incomeTransaction =>(
                <IncomeTransaction key = {incomeTransaction.id} incomeTransaction ={incomeTransaction}/>
                ))}
            </ul>
        </div>
    )
}

export default IncomeList
