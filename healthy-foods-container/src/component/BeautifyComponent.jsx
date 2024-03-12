import style from "./BeautifyComponent.module.css";

const BeautifyComponent = (props) => {
  return <div className={style.beautifyContainer}> {props.children}</div>;
};

export default BeautifyComponent;
