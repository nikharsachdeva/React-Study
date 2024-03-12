import HeadingComponent from "../components/HeadingComponent";
import InputComponent from "../components/InputComponent";
import TileComponent1 from "../components/TileComponent1";
import TileComponent2 from "../components/TileComponent2";

function App() {
  return (
    <div>
      <HeadingComponent />
      <InputComponent />
      <div className="todo-item-container">
        <TileComponent1 />
        <TileComponent2 />
      </div>
    </div>
  );
}

export default App;
