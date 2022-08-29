import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    return (
        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler}></ExpensesFilter>
            {props.expenses
                .map(item =>
                    <ExpenseItem
                        title={item.title}
                        date={item.date}
                        amount={item.amount}>
                    </ExpenseItem>
                )
            }
            {/* <ExpenseItem title={props.expenses[0].title} date={props.expenses[0].date} amount={props.expenses[0].amount}></ExpenseItem>
            <ExpenseItem title={props.expenses[1].title} date={props.expenses[1].date} amount={props.expenses[1].amount}></ExpenseItem>
            <ExpenseItem title={props.expenses[2].title} date={props.expenses[2].date} amount={props.expenses[2].amount}></ExpenseItem>
            <ExpenseItem title={props.expenses[3].title} date={props.expenses[3].date} amount={props.expenses[3].amount}></ExpenseItem> */}
        </Card>
    );
}

export default Expenses;