import ExensItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import AppFliter from "./ExpensesFilter";

const Exenses = (props) => {

  return (
    <Card className="expenses">
      <AppFliter />

      {props.item.map((expense) => (
        <ExensItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Exenses;
