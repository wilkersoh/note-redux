import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/auth";
import { uiActions } from "../store/ui-slice"
import Cart from "./Cart";

const Header = () => {
  const dispatch = useDispatch();

  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const logout = () => {
    dispatch(authActions.logout());
  };

  const toggleCart = () => {
    dispatch(uiActions.toggle());
  }

  return (
    <div>
      <div>
        {isAuth ? <button onClick={logout}> Logout</button> : <p>Logiin</p>}
      </div>
      <div>
        <button onClick={toggleCart}>
          <span>Toggle My cart</span>
        </button>
        <Cart />
      </div>
    </div>
  );
};

export default Header;
