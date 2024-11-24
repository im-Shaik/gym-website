import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Avatar,
  Container,
  Paper,
  MenuItem,
  Menu,
  Typography,
} from "@mui/material";
import PlanDetails from "./PlanDetails";
import { logoutUser } from "../store/action/loggedUserAction";
import { useNavigate, useParams } from "react-router-dom";
import UserTableForm from "./UserTableForm";
import UserTableData from "./UserTableData";

function UserDashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const planData = useSelector((state) => state.plan);
  const data = useSelector((state) => state.loggedUserDetails);
  const paidUser = useSelector((state) => state.user);

  const plan = planData?.selectedPlan;

  const profile = data?.user;

  const loggedUser = { ...plan, ...profile, paid: false };

  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };

  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name) {
    if (!name) {
      return {
        sx: {
          bgcolor: stringToColor(" "), // Or any default color
        },
        children: " ", // Or any default initials
      };
    }

    const nameParts = name.split(" ");
    let initials = "";
    if (nameParts.length >= 1) {
      initials += nameParts[0][0];
    }
    if (nameParts.length >= 2) {
      initials += nameParts[1][0];
    }

    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: initials,
    };
  }

  const paidProfile = paidUser?.user;

  return (
    <div
      style={{
        height: "100vh",
        padding: "30px 0",
      }}
    >
      <Container>
        <nav>
          <Paper
            elevation={2}
            style={{
              padding: "20px",
              borderRadius: "15px",
              backgroundColor: "#f5f5f5",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <h1
                style={{
                  margin: "0",
                  color: "purple",
                }}
              >
                Welcome Home!
              </h1>
            </div>

            <div
              style={{
                cursor: "pointer",
              }}
            >
              <Avatar
                {...stringAvatar(loggedUser?.name)}
                onClick={handleOpenUserMenu}
              />
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleLogout}>
                  <Typography sx={{ textAlign: "center" }}>Logout</Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => navigate(`/settings/${loggedUser?.id}`)}
                >
                  <Typography sx={{ textAlign: "center" }}>Settings</Typography>
                </MenuItem>
              </Menu>
            </div>
          </Paper>
        </nav>
      </Container>

      <Container>
        <div
          style={{
            width: "900px",
            margin: "0 auto",
          }}
        >
          {paidProfile && paidProfile.paymentStatus === true ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                margin: "40px",
              }}
            >
              <UserTableForm />
              <UserTableData />
            </div>
          ) : (
            <PlanDetails />
          )}
        </div>
      </Container>
    </div>
  );
}

export default UserDashboard;
