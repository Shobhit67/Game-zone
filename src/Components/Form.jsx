import React from "react";

function Form(props) {
  return (
    <div>
      <div class="input-group input-group-lg">
        <input
          class="form-control"
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
        />
      </div>
    </div>
  );
}

export default Form;
