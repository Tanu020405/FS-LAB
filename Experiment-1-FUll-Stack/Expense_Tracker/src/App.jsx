  import { useState } from 'react';

  const categories = ["Food","Shopping","Miscallaneous","Essentials"];



  export default function App() {
    const [title, setTitle] = useState("");
    const [expenses, setExpenses] = useState([]);
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState(categories[0]);
    const [filterCategory, setFilterCategory] = useState("All");

    const addExpense = (e) => {
      e.preventDefault();
      const expense = {
        id: Date.now(),
        title,
        amount: parseInt(amount),
        category,
      };
      setExpenses([...expenses, expense]);
      setTitle("");
      setAmount("");
      setCategory(categories[0]);
    };

    let filter=expenses;
    if(filterCategory!=="ALL"){
      filter=expenses.filter((expense)=>expense.category===filterCategory);
    }

    return(
      <>
      <form onSubmit={addExpense}>
      <h1>Expense Tracker</h1>
      <input type='text' placeholder='Title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
      <input type='number' placeholder='Amount' value={amount} onChange={(e)=>setAmount(e.target.value)}/>
      <select value={category} onChange={(e)=>setCategory(e.target.value)}>
        {categories.map((categoriess)=><option key={categoriess} value={categoriess}>{categoriess}</option>)}
      </select>
      <button type='submit'>Add Expense</button>
      </form>

      <label>
        Categories:{" "}
        <select value={filterCategory} onChange={(e)=>setFilterCategory(e.target.value)}>
          <option value="ALL">ALL</option>
          {categories.map((categoriess)=><option key={categoriess} value={categoriess}>{categoriess}</option>)}
        </select>
      </label>

      <h2>Expenses</h2>
        {filter.map((expense)=>(
          <ul key={expense.id}>
            {expense.title} - ₹{expense.amount} [{expense.category}]
          </ul>
        ))}

      </>
    );
  }