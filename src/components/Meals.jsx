import { useGlobalContext } from '../AppProvider'


export function Meals() {

  const mealsContext = useGlobalContext()

  return (
    <div>
      {mealsContext}
    </div>
  )
}
