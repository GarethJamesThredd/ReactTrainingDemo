import React from "react";

const Input = (props) => {
  return (
    <div>
      <label for={props.id}>{props.label}: </label>
      <input className="text-input" type={props.type} id={props.id} name={props.id} onChange={props.onChange} value={props.value} required />
    </div>
  );
};

export default Input