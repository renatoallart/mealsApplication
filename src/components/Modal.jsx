import { useGlobalContext } from "../AppProvider";

export function Modal() {
  const { selectedMealID, closeModal } = useGlobalContext();
  const {
    strMeal: title,
    strMealThumb: image,
    strInstructions: description,
  } = selectedMealID;
  console.log(selectedMealID);
  return (
    <aside className="modal-overlay">
      <div className="modal-container">
        <img className="img modal-img" src={image} alt="" />
        <div className="modal-content">
          <h4>{title}</h4>
          <p>{description}</p>
          <button className="btn btn-hipster close-btn" onClick={closeModal}>
            Close
          </button>
        </div>
      </div>
    </aside>
  );
}
