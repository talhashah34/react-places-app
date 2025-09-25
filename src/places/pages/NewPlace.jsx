import React, { useCallback, useReducer } from 'react'
 
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators'
import Input from '../../shared/components/FormElements/Input'
import Button from '../../shared/components/FormElements/Button'
import './NewPlace.css'

const formReducer = (state, actions) => {
  switch (actions.type) {
    case "INPUT_CHANGE": {
    let formIsValid = true;
    for (const inputId in state.inputs) {
      if (inputId === actions.inputId) {
        formIsValid = formIsValid && actions.isValid;
      }
      else {
        formIsValid = formIsValid && state.inputs[inputId].isValid
      }
    }
    return {
        ...state,
        inputs: {
          ...state.inputs,
          [actions.inputId]: { value: actions.value, isValid: actions.isValid}
        },
        isValid: formIsValid
    }
    }
    default:
      return state;
  }
}


 const NewPlace = () => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs:{
      title:{
        value: '',
        isValid: false
      },
      description:{
        value: '',
        isValid: false
      },
  },
  isValid: false
  })


  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: "INPUT_CHANGE",
      value: value,
      isValid: isValid,
      inputId: id
    })
  }, [])

  const placeSubmitHandler = (e) => {
    e.preventDefault()
    console.log(formState.inputs) // Later we have to send this to backend.
  }

   return (
    <form className='place-form' onSubmit={placeSubmitHandler}>
     <Input 
     id="title"
     element="input" 
     type='text' 
     label='Title' 
     validators={[VALIDATOR_REQUIRE()]} 
     errorMsg="Please enter a valid input."
     onInput={inputHandler}
     />
    <Input 
     id="description"
     element="textarea" 
     label='Description' 
     validators={[VALIDATOR_MINLENGTH(5)]} 
     errorMsg="Please enter a valid description (at least 5 characters)."
     onInput={inputHandler}
     />

    <Input 
     id="address"
     element="input" 
     label='Address' 
     validators={[VALIDATOR_REQUIRE()]} 
     errorMsg="Please enter a valid address."
     onInput={inputHandler}
     />

     <Button type="submit" disabled={!formState.isValid}>
      ADD PLACE
     </Button>
     </form>
   )
 }
 
 export default NewPlace
 