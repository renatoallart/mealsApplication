import React from 'react'
import { useContext, useEffect } from 'react'
import { createContext } from 'react'
import axios from 'axios'
import { useState } from 'react'


export const MealsProvider = createContext()

const allMealsURL = 'https://themealdb.com/api/json/v1/1/search.php?s=a'
const randomMealURL = 'https://themealdb.com/api/json/v1/1/random.php'

export function useGlobalContext() {
  return useContext(MealsProvider)
}

export function AppProvider({ children }) {
  const [meals, setMeals] = useState([])
  const [isLoading, setIsLoading] = useState(false)



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


  return (
    <MealsProvider.Provider value={{ meals, isLoading }}>
      {children}
    </MealsProvider.Provider>
  )
}
