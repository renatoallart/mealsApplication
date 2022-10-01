import { useGlobalContext } from '../AppProvider'
import { BsHandThumbsUp } from 'react-icons/bs'

export function Meals() {

  const { meals, isLoading } = useGlobalContext()


  if (isLoading) {
    return (
      <section className="section">
        <h4> Loading...</h4>
      </section>
    )
  }

  if(meals.length < 1){
    return (
      <section className="section">
        <h4> No meals match ur search term. Please try again.</h4>
      </section>
    )
  }
  return (
    <section className='section-center'>
      {meals.map(meal => {
        const { idMeal, strMeal: title, strMealThumb: image } = meal
        return <article key={idMeal} className='single-meal'>
          <img src={image} className='img' alt="" />
          <footer>
            <h5>{title}</h5>
            <button className='like-btn'> <BsHandThumbsUp /></button>
          </footer>

        </article>
      })}
    </section>
  )
}
