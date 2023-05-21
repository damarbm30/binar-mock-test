import { useRef } from "react";
import { useDispatch } from "react-redux";

import { userLogin } from "./authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const usernameRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    const username = parseInt(usernameRef.current.value).toString();

    const auth = {
      token: "token",
      username: username,
    };

    dispatch(userLogin({ key: "auth", value: auth }));
  };

  return (
    <form className="d-flex justify-content-center gap-2 align-items-center pt-5" onSubmit={onSubmit}>
      <input
        type="text"
        id="username"
        ref={usernameRef}
        placeholder="Tulis 4 digit angka"
        minLength="4"
        maxLength="4"
        pattern="[0-9]+"
      />
      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
  );
};
export default Login;
