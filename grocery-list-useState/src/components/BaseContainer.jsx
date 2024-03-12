import style from "./BaseContainer.module.css";
const BaseContainer = (props) => {
  return (
    <>
      <center className={style.baseContainer}>{props.children}</center>
    </>
  );
};

export default BaseContainer;
