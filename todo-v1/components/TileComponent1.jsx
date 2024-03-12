function TileComponent1() {
  const title = "Learn React";
  const completionDate = "01/04/2024";

  return (
    <div className="container">
      <div className="row ns-row">
        <div className="col-6">{title}</div>

        <div className="col-4">{completionDate}</div>

        <div className="col-2">
          <button type="button" className="btn btn-danger ns-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TileComponent1;
