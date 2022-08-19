import React, {useState} from 'react';
import './ΕxpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title);
    console.log(title);

    const clickHandler = () => {
        console.log('Clicked!!');
        setTitle(1000);
    };

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>{props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
        );
}

export default ExpenseItem;