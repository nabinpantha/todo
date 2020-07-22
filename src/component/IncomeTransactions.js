import React from 'react'


const incomeTransactions = ({incomeTransaction}) => {
    return (
        <li className ='transaction'>
                   <span className='transaction-text'>{incomeTransaction.incomeText}</span> 
                <span className='transaction-amount'>{incomeTransaction.incomeAmount}</span> 
                    <button className="delete-btn">
                       <i className="fas fa-trash"></i>

                    </button>
                </li>
    )
}

export default incomeTransactions
