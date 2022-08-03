import { useReducer } from "react";

import styles from "./Input.module.css";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        value: action.value,
        isValid: true,
        isTouched: true,
      };
    case "TOUCH":
      return {
        value: action.value,
        isValid: true,
        isTouched: true,
      };
    default:
      return state;
  }
};

const Input = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.value,
    isValid: false,
    isTouched: false,
  });

  const changeHandler = (event) => {
    dispatch({ type: "CHANGE", value: event.target.value });
  };

  return (
    <div className={`${styles.input__container} ${props.className}`}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        value={inputState.value}
        onChange={changeHandler}
        disabled={props.disabled}
      />
      {!inputState.isValid && <span>{props.errorMsg}</span>}
    </div>
  );
};

export default Input;
