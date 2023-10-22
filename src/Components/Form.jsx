import React from "react";

function Form(props) {
  return (
    <div>
      <div class="input-group input-group-lg">
        <input
          type="text"
          class="form-control"
          placeholder={props.placeholder}
        />
      </div>
    </div>
  );
}

export default Form;
