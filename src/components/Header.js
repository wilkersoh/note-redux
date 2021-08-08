import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/auth"

const Header = () => {
  const dispatch = useDispatch();

  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const logout = () => {
    dispatch(authActions.logout());
  }

  return <div>{isAuth ? <button onClick={logout}> Logout</button> : <p>Logiin</p>}</div>;
};

export default Header;
