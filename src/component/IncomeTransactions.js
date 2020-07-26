import React, {useContext} from 'react' ;
import { GlobalContext } from '../Context/GlobalState' ;


const incomeTransactions = ({incomeTransaction}) => {
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {deleteTransaction} = useContext(GlobalContext);

    return (
        <li className ='transaction'>
                   <span className='transaction-text'>{incomeTransaction.incomeText}</span> 
                <span className='transaction-amount'>{incomeTransaction.incomeAmount}</span> 
                    <button 
                    className="delete-btn"
                    onClick = {()=> deleteTransaction(incomeTransaction.id)}
                    >
                       <i className="fa fa-trash"></i>

                    </button>
                </li>
    )
}

export default incomeTransactions
