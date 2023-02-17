import ExpensesList from './ExpensesList';
import Card from '../UI/Card'
import './Expenses.css';
import React, {useState} from 'react';
import ExpensesFilter from './ExpensesFilter'
import ExpensesChart from './ExpensesChart';

function ExpenseList(props){
    const expenses = props.items;
    const [filteredYear, setFilteredYear] = useState('2020')
    
    const filterChangeHandler = (selection) => {
        setFilteredYear(selection)
    }

    const filteredExpenses = expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    });

    return(
        <div>   
            <Card className = 'expenses'>
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList items={filteredExpenses}/>        
            </Card>
        </div>
        
        
    )
}

export default ExpenseList;