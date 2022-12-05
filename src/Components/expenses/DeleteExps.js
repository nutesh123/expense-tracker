import React from 'react'
import Expenses from './Expenses';
import axios from 'axios';

function DeleteExps(props) {
    const deleteHandler=()=>{
        axios
        .delete("https://expense-tracker-75fc2-default-rtdb.asia-southeast1.firebasedatabase.app/expenselist.json")
        .then(data => console.log(data.data))
        .catch(error => console.log(error));
       }
  return (
    <div>
        <Expenses delete={deleteHandler}></Expenses>
    </div>
  )
}

export default DeleteExps