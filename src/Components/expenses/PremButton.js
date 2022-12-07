import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { showPremButton , dontshowPremButton } from '../../store/Auth';
import { getdataToStore } from '../../store/ExpenseData';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function PremButton() {

  const dispatch =useDispatch();
  const data =useSelector((state)=>state.ExpenseDataa.itemList)

useEffect(()=>{

  fetch("http://localhost:3002/posts")
  .then(Response=>Response.json()).then(jsondata =>{
    const propertyValues=Object.values(jsondata);
    propertyValues.map((num)=>{
      dispatch(getdataToStore(num.amount))
    })
          })
},[])

    const intdata = data.map((amt)=>{
   return parseInt(amt)
     })

   var sum = 0;
     intdata.forEach(x => {
        sum += x;
    });

    if(sum >= 10000){
      dispatch(showPremButton())
     }
     else{
      console.log(sum)
      dispatch(dontshowPremButton())
     }
  

  return (
    <div style={{justifycontent: 'center'}}>
       <Link><button>Download Expenses</button></Link>
    </div>
  )
}

export default PremButton