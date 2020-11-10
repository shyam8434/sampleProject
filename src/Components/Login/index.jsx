import React, { useState } from "react";
import "./login.style.css";
import { Button, IconButton, InputAdornment } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import TextField from "../Shared/TextField";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setHomeData } from "../../AppConfig/store/actions";

/**
 * Used to login into the application as Amin, Manager and Developer.
 @returns {*}
 @param {{
 }} props
*/

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    userName: "",
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleOnSignIn = () => {
    //@to-do validate form field
    dispatch(setHomeData([]))
    localStorage.setItem('user_details', JSON.stringify({
      name: 'shyam',
      id: 1324
    }))
    history.push('/')
  };

  return (
    <div className="loginContainer">
      <div className="loginInnerContainer">
        <div className="loginHeader">
          <span className="loginText">LOGIN</span>
        </div>
        <div className="loginBody">
          <section className="loginFieldSection">
            <TextField
              label="User Name"
              value={values.userName}
              onChange={handleChange("userName")}
            />
            <TextField
              label="Password"
              value={values.password}
              onChange={handleChange("password")}
              type={values.showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </section>
          <Button
            variant="contained"
            color="primary"
            className="signInButton"
            onClick={handleOnSignIn}
          >
            Sign In
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
