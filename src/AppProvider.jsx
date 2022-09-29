import React from 'react'
import { useContext } from 'react'
import { createContext } from 'react'

export const MealsProvider = createContext()

export function useGlobalContext(){
    return useContext(MealsProvider)
}

export function AppProvider({children}) {
  return (
    <MealsProvider.Provider value='Hello Guys'>
        {children}
    </MealsProvider.Provider>
  )
}
