import React from "react";


const Select = (props) => {
    return (
        <select
            id={props.id}
            name={props.name}
            value={props.value}
            onChange={props.handleChange}
            defaultValue={props.defaultValue}
        >
            {props.options.map((option) => {
                return (
                    <option
                        key={option.id}
                        value={option.id}
                        label={option.value}
                    >
                        {option.value}
                    </option>
                )
            })}
        </select>
    )
};

export default Select;