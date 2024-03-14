import AuthComponent from "../components/AuthComponent";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const onSubmitHandler = (username, password) => {
    alert(`Username : ${username} & Password : ${password}`);
  };

  return (
    <>
      <AuthComponent onSubmitHandler={onSubmitHandler} />
    </>
  );
}

export default App;
