import React, { useRef, useState ,useEffect } from 'react';
import classes from './expenses.module.css'
import axios from 'axios';
import { useDispatch , useSelector} from 'react-redux';
import PremButton from './PremButton';
import { Link } from 'react-router-dom';
import Logout from '../nevigationbar/Logout';


function Expenses() {

  const catref =useRef()
  const dispatch =useDispatch()
  const showButton = useSelector((st)=>st.auth.showPremButton)

    const [data , setdata]=useState([])
   const [ showEdit , setshowEdit]=useState(false)
   const [name , setname]=useState( '')
   const [amount , setamount]=useState( )
   const [cat , setcat] = useState( '')
  

  let handleSubmit = async (event) => {
    event.preventDefault()

    const Category =catref.current.value ;
    const Edit= Math.random()
       setcat(Category)
      
     const expensedata ={
      name :name,
     amount : amount,
     Category : Category,
     id : Edit
     }

    console.log(expensedata)

   setdata( (olditems)=>{
       return[...olditems, expensedata]
     })

      try {
        let res = await fetch("http://localhost:3002/posts", {
          method: "POST",
          body: JSON.stringify({
            name :name,
           amount : amount,
           Category : Category,
           id : Edit
           }) ,
           headers: {
            'Content-Type': 'application/json',
          },
        });
        let resJson = await res.json();
        console.log(resJson)
        const idss = resJson.name
        //setid(idss)
       // console.log(id)
         
        if (res.status === 200) {
          console.log('succesfully send')
        } else {
          console.log("Some error occured");
        }
      } catch (err) {
        console.log(err);
      }
    };

    useEffect(()=>{
         
      fetch("http://localhost:3002/posts")
      .then(Response=>Response.json()).then(jsondata =>{

        const propertyValues=Object.values(jsondata);
    
        setdata(propertyValues);
               }).catch((err)=>
               {
              console.log(err);
              })
        
    },[ ])
      const [ids , setid]=useState( )

   const editHandler = (id)=>
   {
    setid(id)
    setshowEdit(true)
    console.log('editHandler')
    
    fetch(`http://localhost:3002/posts/${id}`)
    .then(Response=>Response.json()).then(jsondata =>{

      console.log(jsondata.Category)
      setname(jsondata.name)
      setamount(jsondata.amount)
      setcat(jsondata.Category)
             }).catch((err)=>
             {
            console.log(err);
            })
     }

     const  updateHandler=(e)=>{
           e.preventDefault()
        const id = ids
       const Categoryy =catref.current.value;
       console.log("updatehandler")
       fetch(`http://localhost:3002/posts/${id}`, {
          method: "PUT",
          body: JSON.stringify({
            name :name,
           amount : amount,
           Category : Categoryy
           }) ,
           headers: {
            'Content-Type': 'application/json',
          },
        });
    }
  
   const deleteHandler=(id)=>{
    axios
    .delete(`http://localhost:3002/posts/${id}`)
    .then(data => console.log(data))
    .catch(error => console.log(error));
    setdata(data.filter( exp => exp.id !== id))
   }
     
  return (
    <div >
      <div className={classes.prem}>
    <form>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number'  onChange={(e)=>setamount(e.target.value)}  value={amount} />
        </div>
      </div>
        <div className='new-expense__control'>
          <label>expense item</label>
          <input type='text' onChange={(e)=>setname(e.target.value)}  value={name} />
        </div>
        <div>
            <label> Category </label>  
<select ref={catref}  >  
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
<option value = "miscellaneouse"> miscellaneouse
</option> 
</select> 
 </div>
      <div className='new-expense__actions'>
        {!showEdit ? <button type='submit' onClick={handleSubmit}>Add Expense</button> : <button onClick={updateHandler}>update</button>}
      </div>
    </form>
    {showButton &&  <button className={classes.prembutton}>Activate Premium</button>}
    </div>
    
    {data.map((item)=> {
      
      // {dispatch(getdataToStore(item.amount))}
          return <div key={item.id}  className={classes.expenses} >
            <div key={Math.random()}/>
            <h4 style={{padding: "1cm"}}>Amount= {item.amount}</h4>
          <div>  <h4> description= {item.name}</h4></div>
            <h4 style={{padding: "1cm"}}> Category= {item.Category}</h4>
            <button onClick={()=>editHandler(item.id)}  >Edit</button>
           - <button onClick={ ()=> deleteHandler(item.id)} style={{ backgroundColor:'orange'}}>Delete</button>
           
          </div>
        })
        }
       <Logout></Logout>
        <PremButton></PremButton>
    </div>
  );
};

export default Expenses;