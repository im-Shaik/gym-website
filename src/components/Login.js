import {
  Card,
  TextField,
  FormControl,
  IconButton,
  Button,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import React, { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearUser, user } from "../store/action/userAction";
import { loginUser } from "../store/action/loggedUserAction";

function Login() {
  const [isVisible, setVisibleIcon] = useState(false);
  const [isError, setErrorState] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userData = JSON.parse(localStorage.getItem("userDetails"));

  const handleLogin = () => {
    const filterUser = userData.filter((user) => user.userName === userName);
    if (!userName && !password) {
      setErrorState(true);
      setErrorMsg("Enter both input");
      setTimeout(() => {
        setErrorState(false);
        setErrorMsg("");
      }, 2000);
    } else if (filterUser.length === 0) {
      setErrorState(true);
      setErrorMsg("Invalid username");
      setTimeout(() => {
        setErrorState(false);
        setErrorMsg("");
      }, 2000);
    } else if (
      filterUser[0].userName === userName &&
      filterUser[0].password === password
    ) {
      dispatch(user(filterUser[0]));
      navigate(`/userDashboard/${filterUser[0].id}`);
      dispatch(clearUser);
      dispatch(loginUser(filterUser[0]));
      return;
    } else {
      setErrorState(true);
      setErrorMsg("Invalid password");
      setTimeout(() => {
        setErrorState(false);
        setErrorMsg("");
      }, 2000);
    }
  };
  return (
    <section
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: `
      linear-gradient(rgba(267, 155, 355, 0.3), rgba(255, 255, 255, 0.3)), 
      url("https://images.unsplash.com/photo-1546817372-628669db4655?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
    `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Card
        variant="outlined"
        style={{
          padding: "20px",
          width: "500px",
        }}
      >
        <h1>Login</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <TextField
            variant="outlined"
            color="secondary"
            label="User Name"
            type="text"
            name="user-name"
            margin="normal"
            required
            error={isError && !userName}
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <FormControl variant="outlined" margin="normal">
            <InputLabel
              htmlFor="standard-adornment-password"
              color="secondary"
              error={isError && !password}
            >
              Password
            </InputLabel>
            <OutlinedInput
              variant="outlined"
              color="secondary"
              label="Password"
              name="name"
              required
              error={isError && !password}
              value={password}
              id="standard-adornment-password"
              type={isVisible ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      isVisible ? "hide the password" : "display the password"
                    }
                    onClick={() => setVisibleIcon(!isVisible)}
                  >
                    {isVisible ? <MdVisibilityOff /> : <MdVisibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          {isError ? (
            <p
              style={{
                color: "red",
              }}
            >
              {errorMsg}
            </p>
          ) : (
            ""
          )}

          <Button
            variant="contained"
            color="secondary"
            style={{
              marginTop: "15px",
              padding: "15px",
            }}
            onClick={handleLogin}
          >
            Login
          </Button>
        </div>
      </Card>
    </section>
  );
}

export default Login;
