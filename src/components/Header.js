import React from "react";
import { Button, Container } from "@mui/material";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Container>
      <div
        style={{
          zIndex: "10",
          padding: "0 25px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "rgba(255, 255, 255, 0.35)",
          color: "purple",
          position: "fixed",
          top: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "900px",
          background: "rgba(255, 255, 255, 0)",
          borderRadius: "16px",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(9.8px)",
          webkitBackdropFilter: "blur(9.8px)",
          border: "1px solid rgba(255, 255, 255, 0.72)",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "25px",
              color: "purple",
            }}
          >
            GyM.
          </h1>
        </div>

        <div
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <Link
            style={{
              textDecoration: "none",
              color: "purple",
            }}
          >
            Home
          </Link>
          <Button
            variant="outlined"
            style={{
              padding: "5px 20px",
              borderColor: "purple",
            }}
          >
            <Link
              style={{
                textDecoration: "none",
                textTransform: "capitalize",
                color: "purple",
              }}
              to={"/login"}
            >
              Login
            </Link>
          </Button>
          <Button
            variant="contained"
            style={{
              padding: "5px 20px",
              backgroundColor: "purple",
            }}
          >
            <Link
              style={{
                textDecoration: "none",
                textTransform: "capitalize",
                color: "white",
              }}
              to={"/sign-up"}
            >
              Sign-Up
            </Link>
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default Header;
