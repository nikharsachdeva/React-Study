import style from "./InputComponent.module.css";

const InputComponent = ({ submitHandler }) => {
  return (
    <div>
      <input
        type="text"
        className="form-control"
        placeholder="Type Anything"
        onKeyDown={submitHandler}
      />
    </div>
  );
};

export default InputComponent;
