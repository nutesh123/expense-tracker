import React, { useRef, useState ,useEffect } from 'react';
import classes from './expenses.module.css'

function Expenses() {

  const nameRef = useRef();
  const amountRef = useRef();
  const CategoryRef = useRef();

  const [data , setdata]=useState([])

  function submitHandler (event) {
    event.preventDefault()

    const name = nameRef.current.value;
    const amount = amountRef.current.value;
     const Category = CategoryRef.current.value

     const expensedata ={
      name :name,
     amount : amount,
     Category : Category
     }
         setdata( (olditems)=>{
       return[...olditems, expensedata]
     })
  };

 // const [expensedata, setexpensedata] = useState([]);

  let handleSubmit = async () => {
      try {

        const name = nameRef.current.value;
        const amount = amountRef.current.value;
         const Category = CategoryRef.current.value

        let res = await fetch("https://expense-tracker-75fc2-default-rtdb.asia-southeast1.firebasedatabase.app//expenselist.json", {
          method: "POST",
          body: JSON.stringify({
            name :name,
           amount : amount,
           Category : Category
           }) ,
           headers: {
            'Content-Type': 'application/json',
          },
        });
        let resJson = await res.json();
        if (res.status === 200) {
          console.log('succesfully send',res)
        } else {
          console.log("Some error occured");
        }
      } catch (err) {
        console.log(err);
      }
    };
    useEffect(()=>{

      fetch("https://expense-tracker-75fc2-default-rtdb.asia-southeast1.firebasedatabase.app//expenselist.json")
      .then(Response=>Response.json()).then(jsondata =>{
        const propertyValues=Object.values(jsondata);
        
        setdata(propertyValues);
               }).catch((err)=>
               {
              console.log(err);  })
    },[])
   

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
        <button type='submit' onClick={handleSubmit}>Add Expense</button>
      </div>
    </form>
    {data.map((item)=> {
          return <div className={classes.expenses} >
            <h4 style={{padding: "1cm"}}>Amount= {item.amount}</h4>
          <div>  <h4> description= {item.name}</h4></div>
            <h4 style={{padding: "1cm"}}> Category= {item.Category}</h4>
            <button>Edit</button>
           - <button style={{ backgroundColor:'orange'}}>Delete</button>
          </div>
        })
        }
    </div>
  );
};

export default Expenses;