import "./App.css";
import BeautifyComponent from "./component/BeautifyComponent";

function App() {
  return (
    <>
      <BeautifyComponent>
        <div>Hey</div>
      </BeautifyComponent>

      <BeautifyComponent>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <span className="input-group-text" id="basic-addon2">
            @example.com
          </span>
        </div>
      </BeautifyComponent>
    </>
  );
}

export default App;
