function InputComponent() {
  return (
    <div className="container">
      <div className="row ns-row">
        <div className="col-6">
          <input
            type="text"
            className="form-control"
            placeholder="Type Anything"
            aria-label="Type Anything"
          ></input>
        </div>

        <div className="col-4">
          <input
            type="date"
            className="form-control"
            placeholder="dd/mm/yyyy"
            aria-label="dd/mm/yyyy"
          ></input>
        </div>

        <div className="col-2">
          <button type="button" className="btn btn-success ns-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default InputComponent;
