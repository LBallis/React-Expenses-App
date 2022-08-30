import ExpenseForm from './ExpsenseForm';
import './NewExpense.css';
import React, {useState} from 'react';



function NewExpense(props) {
    const [showForm, setShowForm] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        setShowForm(false);
    }

    const startEditingHandler = () => {
        setShowForm(true);
    }

    const stopEditingHandler = () => {
        setShowForm(false);
    }

    let newExpenseContent = <button className='new-expense button' onClick={startEditingHandler}>Add New Expense</button>;

    if (showForm === true){
        newExpenseContent = <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>;
    }


    return ( 
        <div className='new-expense'>
            {newExpenseContent}
        </div>
    );
}

export default NewExpense;