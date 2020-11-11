import React, { useState } from "react";
import "./login.style.css";
import { Button, IconButton, InputAdornment } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import TextField from "../Shared/TextField";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setHomeData } from "../../AppConfig/store/actions";
import users from "./userData";

/**
 * Used to login into the application as Amin, Manager and Developer.
 @returns {*}
 @param {{
 }} props
*/

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const credentials = {
    username: "hruday@gmail.com",
    password: "hruday123",
  };

  const [values, setValues] = useState({
    userName: "",
    password: "",
    showPassword: false,
  });
  const [userErrorState, setUserErrorState] = useState({
    userError: false,
    errorMessage: "Enter valid user Name",
  })
  const [passwordErrorState, setPasswordErrorState] = useState({
    passwordError: false,
    errorMessage: "Enter valid Password",
  })

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
    if(values.userName !== credentials.username){
      setUserErrorState({userError: true, errorMessage: "User Name is incorrect"})
    }
    if(values.password !== credentials.password){
      setPasswordErrorState({passwordError: true, errorMessage: "Password is incorrect"})
    }
    if(!values.userName) {
      setUserErrorState({userError: true, errorMessage: "Enter User Name"})
    }
    if(!values.password) {
      setPasswordErrorState ({passwordError: true, errorMessage: "Enter Password"})
    }

    if (
      values.userName === credentials.username &&
      values.password === credentials.password
    ) {
      setUserErrorState({...userErrorState, userError: false});
      setPasswordErrorState({...passwordErrorState, passwordError: false})
      dispatch(setHomeData(users));
      localStorage.setItem(
        "user_details",
        JSON.stringify({
          name: credentials.username,
          id: 1324,
        })
      );
      history.push("/");
    } 
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
              error={userErrorState.userError}
              errorMessage={userErrorState.errorMessage}
            
            />
            <TextField
              label="Password"
              value={values.password}
              onChange={handleChange("password")}
              error={passwordErrorState.passwordError}
              type={values.showPassword ? "text" : "password"}
              errorMessage={passwordErrorState.errorMessage}
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
