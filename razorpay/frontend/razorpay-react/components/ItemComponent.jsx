const ItemComponent = ({ product, handler }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={product.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}</p>
        <a onClick={() => handler(product)} className="btn btn-primary">
          {`Buy ₹${product.price}`}
        </a>
      </div>
    </div>
  );
};

export default ItemComponent;
