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
import { user } from "../store/action/userAction";

function SignUp() {
  const [isVisible, setVisibleIcon] = useState(false);
  const [isError, setErrorState] = useState(false);
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function generateRandomId() {
    return Math.floor(10000000 + Math.random() * 90000000);
  }

  const handleSignUp = () => {
    if (!name || !userName || !password) {
      setErrorState(true);
      return;
    }
    setErrorState(false);
    const userID = generateRandomId();

    const userDetails = [
      {
        id: userID,
        name: name,
        userName: userName,
        password: password,
      },
    ];

    const data = JSON.parse(localStorage.getItem("userDetails"));

    let compressedData = userDetails;

    if (data) {
      compressedData = [...data, ...userDetails];
    }

    localStorage.setItem("userDetails", JSON.stringify(compressedData));
    navigate("/login");
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
      url("https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
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
        <h1>Sign-Up</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <TextField
            variant="outlined"
            color="secondary"
            label="Name"
            helperText={isError && !name ? "Please fill this field" : ""}
            type="text"
            name="name"
            margin="normal"
            required
            error={isError && !name}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            variant="outlined"
            color="secondary"
            label="User Name"
            helperText={isError && !userName ? "Please fill this field" : ""}
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
              helperText={isError && !password ? "Please fill this field" : ""}
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

          <Button
            variant="contained"
            color="secondary"
            style={{
              marginTop: "15px",
              padding: "15px",
            }}
            onClick={handleSignUp}
          >
            Sign-UP
          </Button>
        </div>
      </Card>
    </section>
  );
}

export default SignUp;
