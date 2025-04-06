import React, { useReducer, useEffect } from "react";
import "./Input.css";
import { validate } from "../../shared/util/validators";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val,action.validators),
      };
      case "TOUCH":
      return {
        ...state,
        isTouched:true,
        isValid: validate(action.val,action.validators),
      };
    default:
      return state;
  }
};  
export default function Input(props) {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.value || "",
    isValid: false,
    isTouched:false
  });

  const {id, onInput} = props;
  const {value,isValid} = inputState;
  useEffect(()=>{
    onInput(id,value,isValid)
  },[id,value,isValid,onInput]);

  const changeHandler = event => {
    dispatch({
      type: "CHANGE",
      val: event.target.value,
      validators: props.validators
    });
  };
  const touchHandler = event => {
    dispatch({
      type: "TOUCH",
      val: event.target.value,
      validators: props.validators
    });
  };
  const element =
    props.element === "input" ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    ) : (
      <textarea
        id={props.id}
        rows={props.rows || 3}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    );
  return (
    <div
      className={`form-control ${
        !inputState.isValid && inputState.isTouched &&  "form-control--invalid"
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {!inputState.isValid && inputState.isTouched && <p>{props.erroText}</p>}
    </div>
  );
}
