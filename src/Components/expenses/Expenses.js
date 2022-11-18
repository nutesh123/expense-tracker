import React, { useRef, useState } from 'react';
import ExpenseForm from './ExpenseForm';
import classes from './expenses.module.css'

//import './ExpenseForm.css';

function Expenses() {
  const [enteredTitle, setEnteredTitle] = useState([]);
  const [enteredAmount, setEnteredAmount] = useState([]);

  const nameRef = useRef();
  const amountRef = useRef();
  const CategoryRef = useRef();

  const [data , setdata]=useState([])

  // function detaChangeHandler (event) {
  //   event.preventDefault();
  //   setEnteredTitle(event.target.value);
  //   setEnteredAmount(event.target.value);
  // };

  function submitHandler (event) {
    event.preventDefault()

    const name = nameRef.current.value;
    const amount = amountRef.current.value;
     const Category = CategoryRef.current.value

     const expensedeta={
      item :name,
      amount:amount,
      Category:Category
     }

         setdata( (olditems)=>{
       //event.preventDefault();
       return[...olditems,[ name, amount,Category]]
     })

    console.log(data);
    //console.log(amount);
  };

  return (
    <div>
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' ref={amountRef} />
        </div>
      </div>
        <div className='new-expense__control'>
          <label>expense item</label>
          <input type='text' ref={nameRef} />
        </div>
        <div>
            <label> Category </label>  
<select ref={CategoryRef}>  
<option value = "food"> food   
</option>  
<option value = "EMI"> emi   
</option>  
<option value = "rent"> rent  
</option>  
<option value = "shopping"> shopping
</option>  
<option value = "bills"> monthly_bills
</option> 
<option value = "investment"> investment
</option> 
<option value = "billsM."> miscellaneouse
</option> 
</select> 
 </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
    {data.map((item)=> {
          return <div className={classes.expenses} >
            <h4 style={{padding: "1cm"}}>Amount= {item[1]}</h4>
          <div>  <h4> description= {item[0]}</h4></div>
            <h4 style={{padding: "1cm"}}> Category= {item[2]}</h4>
          </div>
        })
        }
    </div>
  );
};

export default Expenses;