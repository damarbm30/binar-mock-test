import "bootstrap/dist/css/bootstrap.min.css";

import { Login, Todos } from "./features";
import { useSelector } from "react-redux";

function App() {
  const isAuth = useSelector((state) => state.auth.auth);

  return (
    <div className="container">
      {isAuth ? (
        <div>
          <button
            type="button"
            className="btn btn-danger d-flex mx-auto mt-3"
            onClick={() => {
              localStorage.removeItem("auth");
              window.location.reload();
            }}
          >
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
