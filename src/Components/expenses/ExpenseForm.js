import React from 'react'

function ExpenseForm(props) {
  return (
    <div>ExpenseForm
        {props.expenseData.amount}
    </div>
  )
}

export default ExpenseForm