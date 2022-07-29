import React from "react";


const Input = (props) => {

    return (
        <input
            min={"0"}
            id={props.id}
            type={props.type}
            className={`form-control ${props.className}`}
            name={props.name}
            value={props.value}
            onChange={props.handleChange}
            placeholder={props.placeholder}
        />
    )
};

export default Input;

