import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enterdExoenseData) =>{
      const expenseData = {
        ...enterdExoenseData,
        id: Math.random().toString
      };
      props.onAddExpense(expenseData)
    };



  return (
    <div className="new-expense">
      <ExpenseForm onDateSaveNew={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
