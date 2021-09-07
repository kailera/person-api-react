import React from "react";
import clasnames from 'classnames';

const InputField = ({id, error, hint, label, touched, options, ...inputProps}) =>{
    return (
        <div>
            <label
                className="form-label" 
                htmlFor="firstName"
            >
                {label}
            </label>
            <input 
                className={clasnames('form-control', {'is-invalid':!!(error) && touched})} 
                id={id}
                type="text" 
                name={id}
                aria-decribedby = {`${id} Help`}  
                {...inputProps}
            />
            {!!(error) && touched
            
            ?<div className="invalid-feedback">{error}</div>
            :
            <div
                id={`${id} Help`}
                className="form-text"
            >
                {hint}
            </div>

            
            }
            
        </div>
    )
}

export default InputField;