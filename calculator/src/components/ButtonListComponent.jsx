import style from "./ButtonListComponent.module.css";
import ButtonComponent from "./ButtonComponent";
const ButtonListComponent = (props) => {
  const { buttonList, clickHandler } = props;

  return (
    <div className={style.buttonContainer}>
      {buttonList.map((btn) => (
        <ButtonComponent key={btn} btn={btn} clickHandler={clickHandler} />
      ))}
    </div>
  );
};

export default ButtonListComponent;
