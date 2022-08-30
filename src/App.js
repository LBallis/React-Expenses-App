import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, {useState} from 'react';

const DUMMY_EXPENSES = [
  {id:'e1', title:"Wooden Table", amount:294.75 , date:new Date(2021,9,10)},
  {id:'e2',title:"TV", amount:594.75 , date:new Date(2019,10,10)},
  {id:'e3',title:"Working Desk", amount:94.75 , date:new Date(2011,11,10)},
  {id:'e4',title:"Air condition", amount:1294.75 , date:new Date(2020,12,10)},
];

function App() {
  const [expenses, setExpenses] =  useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {

    setExpenses((prevExpenses) => {
      return [expense,...prevExpenses];
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
