import React, {useState} from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExensItem = (props) => {


  const[title , setTitle] = useState(props.title);


  const clickHandler = () => {
    setTitle("New !!!");
    console.log(title)
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2 className="">{title} </h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickHandler}>Chenge Title</button>
      </div>
    </Card>
  );
};

export default ExensItem;
