import React, { useState } from "react";
import { TextField, Container, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

function Settings() {
  const param = useParams();
  const navigate = useNavigate();
  const userDetails = JSON.parse(localStorage.getItem("userDetails"));
  const user = userDetails.find((data) => data.id === Number(param.id));

  const [isDisabled, setDisabled] = useState(true);

  const [updatedUser, setUpdatedUser] = useState({
    name: user.name,
    userName: user.userName,
    password: user.password,
    planName: user.planName,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleChange = () => {
    setDisabled((prev) => !prev);
  };

  const handleUpdate = () => {
    const updateUserDetails = userDetails.map((item) =>
      item.id === user.id
        ? {
            ...item,
            ...updatedUser,
          }
        : item
    );

    localStorage.setItem("userDetails", JSON.stringify(updateUserDetails));
    setDisabled(true);
  };

  return (
    <section
      style={{
        height: "100vh",
      }}
    >
      <Container
        style={{
          margin: "0 auto",
        }}
      >
        <h1>Profile setting</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <TextField
            disabled
            margin="normal"
            fullWidth
            id="filled-multiline-static-disabled"
            label="Your id is"
            value={user.id}
            variant="filled"
            onChange={handleInputChange}
          />
          <TextField
            color="secondary"
            margin="normal"
            fullWidth
            name="name"
            disabled={isDisabled}
            id="filled-multiline-static-disabled"
            label="Your name is"
            value={updatedUser.name}
            variant="filled"
            onChange={handleInputChange}
          />
          <TextField
            color="secondary"
            margin="normal"
            fullWidth
            name="userName"
            disabled={isDisabled}
            id="filled-multiline-static-disabled"
            label="Your user name is"
            value={updatedUser.userName}
            variant="filled"
            onChange={handleInputChange}
          />
          <TextField
            color="secondary"
            margin="normal"
            fullWidth
            name="password"
            disabled={isDisabled}
            id="filled-multiline-static-disabled"
            label="Your password is"
            value={updatedUser.password}
            variant="filled"
            onChange={handleInputChange}
          />
          <TextField
            disabled
            margin="normal"
            fullWidth
            name="planName"
            id="filled-multiline-static-disabled"
            label="Your plan is"
            value={user.planName}
            variant="filled"
            onChange={handleInputChange}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            marginTop: "25px",
          }}
        >
          <Button
            variant="contained"
            color="secondary"
            onClick={isDisabled ? handleChange : handleUpdate}
          >
            {isDisabled ? "Change" : "Update"}
          </Button>
          <Button variant="contained" color="gray" onClick={() => navigate(-1)}>
            Back
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default Settings;
