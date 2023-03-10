import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { loginUser, clearState } from "./auth.slice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { isSuccess, isError, error } = useSelector((state) => state.auth);

  const onChangeInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmitLogin = async (e) => {
    const { username, password } = user;
    e.preventDefault();
    dispatch(loginUser({ username, password }));
    if (isSuccess) {
      navigate("/products");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate(location.state?.path || "/products");
    }

    if (isError) {
      toast.error(error, {
        theme: "colored",
      });
      dispatch(clearState());
    }
  });

  return (
    <div className="container-fluid ps-md-0">
      <div className="row g-0">
        <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
        <div className="col-md-8 col-lg-6">
          <div className="login d-flex align-items-center py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-9 col-lg-8 mx-auto">
                  <ToastContainer />
                  <h3 className="login-heading mb-4">Welcome back!</h3>
                  <form onSubmit={onSubmitLogin}>
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="herzliyaaa"
                        name="username"
                        value={user.username}
                        onChange={onChangeInput}
                      />
                      <label htmlFor="floatingInput">Username</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                        name="password"
                        value={user.password}
                        onChange={onChangeInput}
                      />
                      <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <div className="form-check mb-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="rememberPasswordCheck"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="rememberPasswordCheck"
                      >
                        Remember password
                      </label>
                    </div>

                    <div className="d-grid">
                      <button
                        className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
                        type="submit"
                      >
                        Sign in
                      </button>

                      <div className="text-center">
                        <NavLink className="small" href="#">
                          Forgot password?
                        </NavLink>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
