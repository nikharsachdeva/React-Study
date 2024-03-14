import style from "./AuthComponent.module.css";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { useRef } from "react";

const AuthComponent = ({ onSubmitHandler }) => {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const onSubmitClicked = () => {
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    onSubmitHandler(username, password);
    usernameRef.current.value = "";
    passwordRef.current.value = "";
  };

  return (
    <div className={style.baseContainer}>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          <MdAlternateEmail />
        </span>
        <input
          type="text"
          className="form-control"
          ref={usernameRef}
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          <RiLockPasswordLine />
        </span>
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          ref={passwordRef}
          aria-label="Password"
          aria-describedby="basic-addon1"
        />
      </div>

      <button
        type="button"
        onClick={() => onSubmitClicked()}
        className={`btn btn-dark ${style.submitButton}`}
      >
        Submit
      </button>
    </div>
  );
};

export default AuthComponent;
