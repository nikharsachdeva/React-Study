import GroceryItemComponent from "./GroceryItemComponent";
import style from "./GroceryListComponent.module.css";

const GroceryListComponent = ({ listOfGrocery, deleteHandler }) => {
  return (
    <div className={`card ${style.cardStyle}`}>
      <ul className="list-group list-group-flush">
        {listOfGrocery.map((item) => (
          <GroceryItemComponent
            key={item}
            item={item}
            deleteHandler={deleteHandler}
          />
        ))}
      </ul>
    </div>
  );
};

export default GroceryListComponent;
