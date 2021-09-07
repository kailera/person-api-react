import React from "react";
import classnames from "classnames";

const InputField = ({ id, error, hint, label, touched, ...inputProps }) => {
  return (
    <>
      <div className="form-group">
        <label className="form-label" htmlFor={id}>
          {label}
        </label>
        <input
          className={classnames("form-control", {
            "is-invalid": !!error && touched,
          })}
          id={id}
          type="text"
          name={id}
          {...inputProps}
        />
        {error && touched ? (
          <div className="invalid-feedback">{error}</div>
        ) : (
          <div id={`${id} Help`} className="form-text">
            {hint}
          </div>
        )}
      </div>
    </>
  );
};

export default InputField;
