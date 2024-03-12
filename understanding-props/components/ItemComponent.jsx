const ItemComponent = (props) => {
  let { itemData } = props;

  return (
    <>
      <div className="card item-card" style={{ width: "15rem" }}>
        <img
          src={itemData.imgSrc}
          className="card-img-top item-img"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title item-title">{itemData.title}</h5>
          <p className="card-text item-sub-title">{itemData.text}</p>
          <a href={itemData.buttonLink} className="btn btn-primary">
            {itemData.buttonText}
          </a>
        </div>
      </div>
    </>
  );
};

export default ItemComponent;
