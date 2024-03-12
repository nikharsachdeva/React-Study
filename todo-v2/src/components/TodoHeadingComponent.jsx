const TodoHeadingComponent = () => {
  {
    const onAdd = () => {};
  }

  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h1>Todo Maker App</h1>
      <div className="row align-items-center">
        <div className="col">
          <div className="form-group">
            <label htmlFor="todoTextArea" className="form-label">
              Enter your todo here
            </label>
            <textarea
              className="form-control"
              id="todoTextArea"
              rows="4"
              style={{ width: "100%" }}
            ></textarea>
          </div>
        </div>

        <div className="col">
          <div className="row">
            <div className="form-group">
              <label htmlFor="todoDate" className="form-label">
                Due Date
              </label>
              <input type="date" className="form-control" id="todoDate" />
            </div>
          </div>

          <div className="row">
            <button type="button" className="btn btn-primary mt-4">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoHeadingComponent;
