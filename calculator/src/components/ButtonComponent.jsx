import style from "./ButtonComponent.module.css";
const ButtonComponent = (props) => {
  const { btn, clickHandler } = props;

  return (
    <div>
      <button
        onClick={(event) => clickHandler(event, btn)}
        className={style.button}
      >
        {btn}
      </button>
    </div>
  );
};

export default ButtonComponent;
