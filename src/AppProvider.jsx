import React from 'react'
import { useContext, useEffect } from 'react'
import { createContext } from 'react'
import axios from 'axios'
import { useState } from 'react'


export const MealsProvider = createContext()

const allMealsURL = 'https://themealdb.com/api/json/v1/1/search.php?s='
const randomMealURL = 'https://themealdb.com/api/json/v1/1/random.php'

function getFavoritesFromLocalStorage(){
  let favorites = localStorage.getItem('favorites')
  if(!favorites) return favorites = []
  return favorites = JSON.parse(localStorage.getItem('favorites'))
  
    
}

export function useGlobalContext() {
  return useContext(MealsProvider)
}

export function AppProvider({ children }) {
  const [meals, setMeals] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [selectedMealID, setSelectedMealID] = useState(null)
  const [favorites, setFavorites] = useState(()=> getFavoritesFromLocalStorage())

  




  function addToFavorites(idMeal) {
    const meal = meals.find(meal => meal.idMeal === idMeal)
    if (favorites.includes(meal)) return
    const updatedFavorites = [...favorites, meal]
    setFavorites(updatedFavorites)
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites))

  }

  function removeFromFavorite(idMeal) {
    const removeFavorites = favorites.filter(meal => meal.idMeal !== idMeal)
    setFavorites(removeFavorites)
    localStorage.setItem('favorites', JSON.stringify(removeFavorites))
  }


  function selectMeal(mealId, favoriteMeal) {
    let meal
    if(favoriteMeal) meal = favorites.find(meal => meal.idMeal === mealId)
    meal = meals.find(meal => meal.idMeal === mealId)
    setSelectedMealID(meal)
    setShowModal(true)
  }

  function closeModal() {
    setShowModal(false)
  }

  function fetchRandomMeals() {
    fetchMeals(randomMealURL)
  }

  async function fetchMeals(url) {
    setIsLoading(true)
    try {
      const { data } = await axios(url)
      if (!data.meals) return setMeals([])
      setMeals(data.meals)
    } catch (error) {
      console.log(error.response)
    }
    setIsLoading(false)

  }

  useEffect(() => {
    fetchMeals(allMealsURL)

  }, [])

  useEffect(() => {
    if (!searchTerm) return
    fetchMeals(`${allMealsURL}${searchTerm}`)


  }, [searchTerm])


  return (
    <MealsProvider.Provider value={{
      meals, isLoading, setSearchTerm, fetchRandomMeals,
      showModal, setShowModal, selectedMealID, selectMeal, closeModal,
      addToFavorites, removeFromFavorite, favorites
    }}>
      {children}
    </MealsProvider.Provider>
  )
}
