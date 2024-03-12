import ItemComponent from "./ItemComponent";

const ListComponent = (props) => {
  const { listOfItems } = props;

  return (
    <div className="container row">
      {listOfItems.map((item) => (
        <ItemComponent key={item.title} itemData={item} />
      ))}
    </div>
  );
};

export default ListComponent;
