import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HealthyComponent from "./components/HealthyComponent";

let names = ["Nikhar", "Staly"];
// let names = [];

function App() {
  let component = null;

  if (names.length === 0) {
    component = (
      <div>
        <h1>There are no items to display </h1>
      </div>
    );
  } else {
    component = (
      <div
        className="container"
        style={{ "text-align": "center", "margin-top": "20px" }}
      >
        <HealthyComponent />
      </div>
    );
  }

  return (
    <center>
      <h1 style={{ "margin-top": "20px" }}>Healthy Foods</h1>
      {component}
    </center>
  );
}

export default App;
