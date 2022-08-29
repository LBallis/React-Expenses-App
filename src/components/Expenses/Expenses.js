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
        </Card>
    );
}

export default Expenses;