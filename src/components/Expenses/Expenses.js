import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.expenses.filter((expense) => expense.date.getFullYear().toString() === filteredYear);

    let expensesContent = <p>No expenses found.</p>;

    if (filteredExpenses.length > 0){
        expensesContent = filteredExpenses
        .map((item) =>
            <ExpenseItem
                key={item.id}
                title={item.title}
                date={item.date}
                amount={item.amount}>
            </ExpenseItem>
        )
    };
    
    return (
        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler}></ExpensesFilter>
            {expensesContent}
        </Card>
    );
}

export default Expenses;