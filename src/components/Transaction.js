import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Transaction = (props) => {
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <li className={props.props.amount >= 0 ? "plus" : "minus"}>
      {props.props.text} <span>{"$" + props.props.amount}</span>
      <button
        onClick={() => deleteTransaction(props.props.id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};
