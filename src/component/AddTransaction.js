import React ,{useState , useContext} from 'react'
import {v4 as uuid, v4} from 'uuid'
import {GlobalContext} from '../Context/GlobalState'
const AddTransaction = () => {

    const {addIncome} = useContext(GlobalContext);

    const [income,setIncome]=useState({
        incomeText:"",
        incomeAmount:0
    })

    const {incomeText, incomeAmount} = income

    const onChangeIncome = (e) =>{
        setIncome({...income, [e.target.name]: e.target.value});
  console.log(income);
    }

    const onSubmitIncome=(e)=>{
        e.preventDefault();

        const newIncomeTransaction= {
            id: v4(),
            incomeText,
            incomeAmount: incomeAmount *1 ,

        };
        addIncome(newIncomeTransaction);
        console.log(newIncomeTransaction)
    };
    return (
        <div className='form-wrapper'>
            <form onSubmit= {onSubmitIncome}>
                <div className="input-group income">
                    <input type ='text' name ="incomeText" placeholder ="Add income..." autoComplete = "off" onChange={onChangeIncome}/>
                    <input type ='number' name = "incomeAmount" placeholder ="AMOUNT" autoComplete = "off" onChange={onChangeIncome}/>
                    <input type ="submit" value ="submit" />
                </div>
                
            </form>
            <form>
                <div className="input-group expense">
                    <input type ='text' placeholder ="Add expense..." autoComplete = "off"/>
                    <input type ='number' placeholder ="AMOUNT" autoComplete = "off"/>
                    <input type ="submit" value ="submit" />
                </div>
                
            </form>
        </div>
    )
}

export default AddTransaction
