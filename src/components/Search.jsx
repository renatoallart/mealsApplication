import React from 'react'
import { useState } from 'react'
import { useGlobalContext } from '../AppProvider'

export function Search() {

  const [nameInput,setNameInput] = useState('')
  const {meals} = useGlobalContext()

  function handleChange(event){
    const {value} = event.target
    setNameInput(value)
  }

  function searchMealByName(name){
    if(name == null) return 
    return (
      <div>
        {meals.filter(meal => meal.strMeal === name).map(meal => <p>{meal.strMeal}</p> )}
      </div>
    )
  }


  return (
    <header className="search-container">
      <div>
        {nameInput}
      </div>
      <input 
        onChange={event => handleChange(event)}
        name='nameInput'
        value={nameInput}
        className='form-input'
        type="text" />
      <button type='submit' onClick={()=> searchMealByName(nameInput)} className='btn'>Submit</button>
      <button type='btn' className='btn btn-hipster'>Surprise me!</button>
    </header>
  )
}
