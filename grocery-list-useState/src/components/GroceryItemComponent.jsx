import style from "./GroceryItemComponent.module.css";
const GroceryItemComponent = ({ item, deleteHandler }) => {
  const selectHandler = (event) => {
    console.log(event);
    if (event.target.className === "list-group-item") {
      event.target.className =
        event.target.className + " " + style.selectedStyle;
    } else {
      event.target.className = "list-group-item";
    }
  };

  return (
    <div className={`row ${style.itemStyle}`}>
      <div className="col">
        <li
          onClick={(event) => selectHandler(event)}
          className="list-group-item"
        >
          {item}
        </li>
      </div>

      <div className="col">
        <img
          src="/bin.png"
          onClick={() => deleteHandler(item)}
          className={`${style.imgStyle}`}
        />
      </div>
    </div>
  );
};

export default GroceryItemComponent;
