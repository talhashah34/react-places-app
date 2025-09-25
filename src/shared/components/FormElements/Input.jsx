import React, { useReducer, useEffect } from 'react'


import { validate } from '../../util/validators'
import './Input.css'

const inputReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE":
            return{
                ...state,
                value: action.val,
                isValid: validate(action.val, action.validators)
            }
        case "TOUCH":
            return{
                ...state,
                isTouched: true
            }
        default:
            return state;
    }
}

const Input = ({id, element, rows, type, label, placeholder, errorMsg, validators, onInput}) => {
    const [inputState, dispatch] = useReducer(inputReducer, {value: '', isTouched: false, isValid: false})

    const {value, isValid} = inputState
    useEffect(() => {
        onInput(id, inputState.value, inputState.isValid)
    },[id, value, isValid, onInput])


    const changeHandler = (e) => {
        dispatch({type: "CHANGE", val: e.target.value, validators: validators})
    }

    const touchHandler = () => {
        dispatch({
            type: 'TOUCH',
        })
    }

    const inputElement = element === 'input' ? (
        <input 
            id={id}
            type={type}
            placeholder={placeholder}
            onChange={changeHandler}
            onBlur={touchHandler}
            value={inputState.value}
        />
    ) : (
        <textarea 
            id={id}
            rows={rows || 3}
            onChange={changeHandler}
            onBlur={touchHandler}
            value={inputState.value}
        />
    )

    return (
        <div 
        className={`form-control 
        ${!inputState.isValid && inputState.isTouched && 'form-control--invalid'}`}>
            <label htmlFor={id}>{label}</label>
            {inputElement}
            {!inputState.isValid && inputState.isTouched && <p>{errorMsg}</p>}
        </div>
    )
}

export default Input
