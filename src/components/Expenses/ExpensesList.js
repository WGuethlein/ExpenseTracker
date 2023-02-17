import React from 'react'
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css'

const ExpensesList = props => {


    if(props.items.length === 0){
        return <h2 className='expenses-list__fallback'>Found No Expenses</h2>
    }

    return(
        <ul className='expenses-list'>
            {props.items.map(expense => 
                <ExpenseItem
                    //key is NECESSARY, otherwise the entire list will get rerendered.
                    // this could/would be bad in the even that the state changes after original input, the list would change on rerender
                    key={expense.id} 
                    title={expense.title} 
                    amount={expense.amount} 
                    date={expense.date}
                />
            )}
        </ul>
        
    )

};

export default ExpensesList;