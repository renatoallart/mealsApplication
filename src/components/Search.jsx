
import { useState } from 'react'
import { useGlobalContext } from '../AppProvider'

export function Search() {


  const [searchInput, setSearchInput] = useState('')
  const {setSearchTerm, fetchRandomMeals} = useGlobalContext()


  function handleChange(event) {
    const { value } = event.target
    setSearchInput(value)
  }

  function handleRandomMeal(){
    setSearchInput('')
    setSearchTerm('')
    fetchRandomMeals()
  }

  function handleSubmit(event) {
    event.preventDefault()
    if(searchInput) setSearchTerm(searchInput)

  }
 

  return (

    <header className='search-container'>
      <h3>{searchInput} </h3>
      <form onSubmit={handleSubmit}>
        <input className='form-input'
          placeholder='type favorite meal'
          onChange={event => handleChange(event)}
          type="text" name='searchInput' value={searchInput} />
        <button className='btn'>Search</button>
        <button onClick={handleRandomMeal} className='btn btn-hipster' type='button'>Surprise me!</button>
      </form>
    </header>

)}

 
