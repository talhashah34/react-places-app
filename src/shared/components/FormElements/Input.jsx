import React, { useReducer } from 'react'

import './Input.css'

const inputReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE":
            return{
                ...state,
                value: action.val,
                isValid: true
            }
        default:
            return state;
    }
}

const Input = ({id, element, rows, type, label, placeholder, errorMsg}) => {
    const [inputState, dispatch] = useReducer(inputReducer, {value: '', isValid: false})

    const changeHandler = (e) => {
        dispatch({type: "CHANGE", val: e.target.value})
    }

    const inputElement = element === 'input' ? (
        <input 
            id={id}
            type={type}
            placeholder={placeholder}
            onChange={changeHandler}
            value={inputState.value}
        />
    ) : (
        <textarea 
            id={id}
            rows={rows || 3}
            onChange={changeHandler}
            value={inputState.value}
        />
    )

    return (
        <div 
        className={`form-control 
        ${!inputState.isValid && 'form-control--invalid'}`}>
            <label htmlFor={id}>{label}</label>
            {inputElement}
            {!inputState.isValid && <p>{errorMsg}</p>}
        </div>
    )
}

export default Input
