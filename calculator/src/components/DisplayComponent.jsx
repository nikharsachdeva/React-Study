import style from "./DisplayComponent.module.css";

const DisplayComponent = (props) => {
  let { latestExpression } = props;
  if (!latestExpression || latestExpression.length === 0) {
    latestExpression = 0;
  }

  return (
    <div className={style.display}>
      <input
        type="text"
        className="form-control"
        value={latestExpression}
        readOnly
      />
    </div>
  );
};

export default DisplayComponent;
