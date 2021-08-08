import React from 'react'
import { useDispatch } from 'react-redux';
import {authActions} from "../store/index"

const Auth = () => {
  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(authActions.login());
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="passowrd" />
        </div>
        <button>Just Click!</button>
      </form>
    </div>
  )
}

export default Auth
