import { useGlobalContext } from "../AppProvider"

export function Favorites() {

  const {favorites, selectMeal, removeFromFavorite} = useGlobalContext()

  return (
    <section className="favorites">
      <div className="favorites-content">
        <h5>Favorites</h5>
        <div className="favorites-container">
          {favorites.map(meal => {
            const { idMeal, strMealThumb: image} = meal
            return <div key={idMeal} className='favorite-item'>
              <img onClick={() => selectMeal(idMeal, true)} src={image}  className='favorites-img img' alt="" />
              <button className="remove-btn" onClick={()=> removeFromFavorite(idMeal)}>Remove</button>

            </div>
          })}
        </div>
      </div>
    </section>
  )
}
