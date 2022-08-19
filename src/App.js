import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {title:"Wooden Table", amount:294.75 , date:new Date(2021,9,10)},
    {title:"TV", amount:594.75 , date:new Date(2019,10,10)},
    {title:"Working Desk", amount:94.75 , date:new Date(2011,11,10)},
    {title:"Air condistion", amount:1294.75 , date:new Date(2020,12,10)},
  ];

  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
    expenses.push(expense);
    console.log(expenses);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
