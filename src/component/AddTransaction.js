import React ,{useState , useContext} from 'react'
import {v4 as uuid, v4} from 'uuid'
import {GlobalContext} from '../Context/GlobalState'

const AddTransaction = () => {

    const {addIncome , addExpense} = useContext(GlobalContext);


    const [ expense ,setExpense]=useState({
        expenseText:"",
        expenseAmount: 0
    })

    const [income,setIncome]=useState({
        incomeText:"",
        incomeAmount:0
    })

    const {expenseText, expenseAmount} = expense

    const onChangeExpense = (f) => {
        setExpense({...expense,[f.target.name]: f.target.value});
        console.log(expense)
    }

    const onSubmitExpense= (f)=>{
        f.preventDefault();

        const newExpenseTrnsaction={
            id:v4(),
            expenseText,
            expenseAmount:expenseAmount * 1 ,
        };

       addExpense(newExpenseTrnsaction);
        console.log(newExpenseTrnsaction)
        
        setExpense({
            expenseText:'',
            expenseAmount:0,
        });

    };


    
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
       
        setIncome({
            incomeText: '',
            incomeAmount: 0,
        });

    };
    return (
        <div className='form-wrapper'>
            <form onSubmit= {onSubmitIncome}>
                <div className="input-group income">
                    <input type ='text' name ="incomeText" value ={incomeText} placeholder ="Add income..." autoComplete = "off" onChange={onChangeIncome}/>
                    <input type ='number' name = "incomeAmount" value= {incomeAmount} placeholder ="AMOUNT" autoComplete = "off" onChange={onChangeIncome}/>
                    <input type ="submit" value ="submit" />
                </div>
                
            </form>
            <form onSubmit = {onSubmitExpense}>
                <div className="input-group expense">
                    <input type ='text' name= "expenseText" value = {expenseText} placeholder ="Add expense..." autoComplete = "off" onChange={onChangeExpense}/>
                    <input type ='number' name = "expenseAmount" value = {expenseAmount} placeholder ="AMOUNT" autoComplete = "off" onChange={onChangeExpense} />
                    <input type ="submit" value ="submit" />
                </div>
                
            </form>
        </div>
    )
}

export default AddTransaction
