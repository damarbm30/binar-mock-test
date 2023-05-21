import { useDispatch, useSelector } from "react-redux";

import { Login, Todos } from "./features";
import "bootstrap/dist/css/bootstrap.min.css";
import { userLogout } from "./features/auth/authSlice";

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.auth);

  const doLogout = () => {
    const key = "auth";
    dispatch(userLogout(key));
  };

  return (
    <div className="container">
      {isAuth ? (
        <div>
          <button type="button" className="btn btn-danger d-flex mx-auto mt-3" onClick={() => doLogout()}>
            Logout
          </button>
          <Todos />
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
