import './App.css';
import Expenses from './components/Expenses';
import Card from './components/Card';

function App() {
  const expenses = [ 
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]; 
  return (
    <Card>
      <div style={{backgroundColor: "#4b4b4b"}}>
        <h2>Demo</h2>
        <Expenses items={expenses} /> 
        {/* <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} /> */}
      </div>
    </Card>
    
  );
}

export default App;
